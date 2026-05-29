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

CAST assessment rules:
- Toe color: pink/warm = normal; purple, dusky, blue, white, or mottled = cast_too_tight urgency "urgent"
- If toes are hidden, cut off by the frame, or color cannot be confirmed as clearly pink → cast_too_tight urgency "urgent"
- Cast integrity: visible cracks, soft spots, crumbling edges, or deformed shape → cast_wet_or_damaged urgency "urgent"
- Wetness: wet, soggy, stained, or softened cast → cast_wet_or_damaged urgency "urgent"
- Fit: visible gap between leg and cast, cast rotating or sliding down → cast_loose urgency "monitor"

BRACE (boots and bar / Mitchell AFO) assessment rules:
- Bar: shoes should attach at equal height; visibly bent, cracked, or detached → brace_bar_issue urgency "urgent"
- Heel seating: look for gap at heel counter, heel riding up inside the shoe, or sock bunched under heel → brace_heel_not_seated urgency "monitor"
- Skin irritation — classify by these visual cues (urgency may exceed the condition default when warranted):
  * Open or burst blister: broken skin, raw wound, weeping fluid, or dried drainage (yellow/orange crust) → brace_blister_or_redness urgency "urgent"; careTeamMessage must advise stopping brace use until wound is assessed
  * Forming blister: raised dome of intact skin, shiny surface, visible fluid under skin → brace_blister_or_redness urgency "urgent"
  * Circular pressure mark: flat, well-defined red circle on intact skin with no raised dome → brace_blister_or_redness urgency "monitor"; common in first weeks of boots-and-bar wear
  * Diffuse redness with skin peeling or flaking, no raised blister → likely normal post-cast skin transition in first 1–2 weeks after casting ends; note in reasoning and set urgency "monitor"
- Key pressure locations: posterior heel (most common BNB pressure point), dorsum/top of foot (middle strap), near toes (lower strap or sock seam)
- When foot is OUT of the brace: you can assess skin condition but cannot assess heel seating or strap fit; note this limitation in your reasoning

FOOT (bare foot without cast or brace) assessment rules:
- Normal Ponseti-corrected position: foot points relatively outward, heel is visible and not elevated, no C-shaped border
- Relapse signs: foot supinating (rolling inward or downward), C-shaped lateral border returning, forefoot adducting → foot_relapse_signs urgency "urgent"
- Toe walking: child bearing weight primarily on toes with heel elevated → foot_toe_walking urgency "monitor"
- Factor in the child's apparent developmental stage when assessing position

GENERAL rules:
- If image is blurry, dark, or relevant anatomy is not clearly visible → confidence "low", primaryCondition "image_unclear"
- If no foot, cast, or brace is visible → primaryCondition "no_relevant_anatomy"
- secondaryConditions: list any additional concerns visible; may be empty []
- careTeamMessage: a short, plain-language message the parent can copy-paste to their care team; null if urgency is "normal" or "meta"
- confidence reflects image quality and visibility of relevant anatomy, NOT certainty about the diagnosis
- The urgency in your response may differ from the condition's typical urgency when visual evidence clearly warrants it`;

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

const API_KEY_STORAGE = "cf_anthropic_key";

export function getStoredApiKey() {
  return localStorage.getItem(API_KEY_STORAGE) ?? "";
}

export function saveApiKey(key) {
  localStorage.setItem(API_KEY_STORAGE, key.trim());
}

export function clearApiKey() {
  localStorage.removeItem(API_KEY_STORAGE);
}

export async function analyzeImage(base64DataUrl, symptoms = "") {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    throw new Error("NO_API_KEY");
  }

  const resized = await resizeIfNeeded(base64DataUrl);
  const mediaType = extractMediaType(resized);
  const data = stripPrefix(resized);

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
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
            {
              type: "text",
              text: symptoms.trim()
                ? `Please assess this image according to your instructions.\n\nParent-reported symptoms: ${symptoms.trim()}`
                : "Please assess this image according to your instructions.",
            },
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
