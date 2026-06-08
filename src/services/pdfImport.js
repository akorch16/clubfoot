import { conditions } from "../data/conditions";
import { saveFeedback } from "./feedback";
import { getStoredApiKey } from "./vision";

const WORKER_URL = import.meta.env.VITE_WORKER_URL ?? "";
const VALID_IDS = conditions.filter((c) => c.domain !== "meta").map((c) => c.id).join(", ");

const EXTRACT_PROMPT = `You are analyzing a screenshot of one page from a Facebook clubfoot parent support group, exported as a PDF.

Find any posts on this page that contain a clinical photo (cast, brace, or bare foot) and extract training cases for a clubfoot AI vision model.

Return ONLY a JSON array — no prose, no markdown, no explanation:
[
  {
    "hasPhoto": true,
    "condition": "<condition_id>",
    "urgency": "urgent" | "monitor" | "normal",
    "expertName": "<name of commenter who gave the assessment, or null>",
    "notes": "<parent description + expert comment if present, max 400 chars>"
  }
]

Valid condition IDs: ${VALID_IDS}

Rules:
- Only include entries where a real clinical photo is visible (not a broken image, grey box, or icon)
- condition must be one of the valid IDs above
- If the expert or commenter names the issue, use their assessment for condition + urgency
- If there are no qualifying posts on this page, return []`;

function loadPdfJs() {
  return new Promise((resolve, reject) => {
    if (window.pdfjsLib) { resolve(window.pdfjsLib); return; }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      resolve(window.pdfjsLib);
    };
    script.onerror = () => reject(new Error("Failed to load PDF renderer"));
    document.head.appendChild(script);
  });
}

async function renderPage(pdf, pageNum) {
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale: 1.5 });
  const canvas = document.createElement("canvas");
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
  return canvas.toDataURL("image/jpeg", 0.82);
}

async function extractCases(imageDataUrl) {
  const base64 = imageDataUrl.replace(/^data:image\/[a-zA-Z+]+;base64,/, "");
  const payload = {
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: [
        { type: "image", source: { type: "base64", media_type: "image/jpeg", data: base64 } },
        { type: "text", text: EXTRACT_PROMPT },
      ],
    }],
  };

  let response;
  if (WORKER_URL) {
    response = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
  } else {
    const apiKey = getStoredApiKey();
    if (!apiKey) return [];
    response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  if (!response.ok) return [];
  const json = await response.json();
  const text = json.content?.[0]?.text ?? "[]";
  try {
    const match = text.match(/\[[\s\S]*\]/);
    return match ? JSON.parse(match[0]) : [];
  } catch {
    return [];
  }
}

export async function importPdfFile(file, { maxPages = 100, onProgress } = {}) {
  const pdfjs = await loadPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  const total = Math.min(pdf.numPages, maxPages);
  const saved = [];

  for (let i = 1; i <= total; i++) {
    onProgress?.({ page: i, total, saved: saved.length });
    try {
      const imageDataUrl = await renderPage(pdf, i);
      const cases = await extractCases(imageDataUrl);
      for (const c of cases) {
        if (c.hasPhoto && c.condition) {
          await saveFeedback(imageDataUrl, null, {
            feedback: null,
            correction: c.condition,
            correctionNote: [c.notes?.trim(), c.urgency ? `urgency:${c.urgency}` : null]
              .filter(Boolean).join(" | ") || null,
            trustedContributor: c.expertName || null,
            source: "facebook_import",
          });
          saved.push(c);
        }
      }
    } catch (e) {
      console.warn(`Page ${i} failed:`, e);
    }
  }
  return saved;
}
