import { conditions } from "../data/conditions";

const VALID_IDS = conditions.map((c) => c.id).join(", ");

const SYSTEM_PROMPT = `You are a specialized visual assessment assistant for clubfoot families using the Ponseti treatment method.
Your role is to help parents recognize potential issues with their child's cast, foot abduction brace (Mitchell AFO or similar), or foot position.

You are NOT a medical professional and your assessments are NOT medical advice. Always recommend contacting the care team when uncertain.

Assess the provided image and return ONLY a valid JSON object — no prose, no markdown, just the JSON:
{
  "primaryCondition": "<condition_id>",
  "confidence": "high" | "medium" | "low",
  "secondaryConditions": ["<condition_id>"],
  "reasoning": "<1-2 sentence plain-language description of what you observe>",
  "urgency": "urgent" | "monitor" | "normal" | "meta",
  "careTeamMessage": "<suggested message to send to care team, or null>"
}

Valid condition IDs: ${VALID_IDS}

Assessment rules:
- CAST: Assess toe color (pink = good, purple/white/dusky = urgent), cast integrity, wetness, fit
- BRACE: Assess heel seating, strap placement, visible skin irritation at heel/dorsum, bar integrity
- FOOT: Assess position relative to neutral — supination or inward rotation may indicate relapse
- If toe color cannot be confirmed as pink, classify as cast_too_tight with urgency "urgent"
- If image is blurry, dark, or partially obscured, set confidence "low" and likely primaryCondition "image_unclear"
- If nothing foot/cast/brace-related is visible, return primaryCondition "no_relevant_anatomy"
- secondaryConditions may be empty []
- careTeamMessage should be a short, plain-language message the parent could copy-paste to their care team, or null if urgency is "normal" or "meta"
- confidence reflects image quality and visibility of relevant anatomy, not your certainty about the diagnosis`;

const FALLBACK = {
  primaryCondition: "image_unclear",
  confidence: "low",
  secondaryConditions: [],
  reasoning: "Could not parse a valid assessment from the image.",
  urgency: "meta",
  careTeamMessage: null,
};

function extractMediaType(base64DataUrl) {
  const match = base64DataUrl.match(/^data:(image\/[a-zA-Z+]+);base64,/);
  return match ? match[1] : "image/jpeg";
}

function stripPrefix(base64DataUrl) {
  return base64DataUrl.replace(/^data:image\/[a-zA-Z+]+;base64,/, "");
}

async function resizeIfNeeded(base64DataUrl) {
  // Anthropic limit is 5MB for base64; ~3.75MB raw image
  if (base64DataUrl.length <= 5_000_000) return base64DataUrl;

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const MAX = 1200;
      const scale = Math.min(MAX / img.width, MAX / img.height, 1);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    img.src = base64DataUrl;
  });
}

function parseResponse(text) {
  try {
    // Extract JSON even if Claude wraps it in markdown fences
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return FALLBACK;
    const parsed = JSON.parse(match[0]);
    if (!parsed.primaryCondition) return FALLBACK;
    return parsed;
  } catch {
    return FALLBACK;
  }
}

export async function analyzeImage(base64DataUrl) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  if (!apiKey || apiKey === "your-key-here") {
    throw new Error("VITE_ANTHROPIC_API_KEY is not configured. Add it to .env.local.");
  }

  const resized = await resizeIfNeeded(base64DataUrl);
  const mediaType = extractMediaType(resized);
  const data = stripPrefix(resized);

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: mediaType, data } },
            { type: "text", text: "Please assess this image according to your instructions." },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${err}`);
  }

  const json = await response.json();
  const text = json.content?.[0]?.text ?? "";
  return parseResponse(text);
}
