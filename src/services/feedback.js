const STORAGE_KEY = "cf_feedback_v1";
const SCHEMA_VERSION = 1;

async function hashImage(base64DataUrl) {
  const encoder = new TextEncoder();
  // Hash a slice for speed; enough to fingerprint the image
  const data = encoder.encode(base64DataUrl.slice(0, 10000));
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function save(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

/**
 * Save a feedback record.
 * payload: { feedback: "helpful"|"not_helpful"|null, correction: conditionId|null,
 *            correctionNote: string|null, source: "user_capture"|"facebook_import" }
 */
export async function saveFeedback(base64DataUrl, diagnosis, payload) {
  const imageHash = await hashImage(base64DataUrl);
  const record = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    imageHash,
    schemaVersion: SCHEMA_VERSION,
    diagnosis,
    feedback: payload.feedback ?? null,
    correction: payload.correction ?? null,
    correctionNote: payload.correctionNote ?? null,
    source: payload.source ?? "user_capture",
    appVersion: "0.1.0",
    platform: navigator.userAgent,
  };
  const records = load();
  records.push(record);
  save(records);
  return record;
}

export function getAllFeedback() {
  return load();
}

export function getFeedbackCount() {
  return load().length;
}

export function exportFeedbackAsJSON() {
  return JSON.stringify(load(), null, 2);
}

/**
 * Facebook training pipeline hook (Phase 2).
 * posts: array of { imageBase64, expertLabel, note }
 * Imports each post as a "facebook_import" record paired with Claude's baseline diagnosis.
 * analyzeImageFn must be passed in to avoid a circular import with vision.js.
 */
export async function importFromFacebook(posts, analyzeImageFn) {
  const results = [];
  for (const post of posts) {
    const diagnosis = await analyzeImageFn(post.imageBase64);
    const record = await saveFeedback(post.imageBase64, diagnosis, {
      feedback: "not_helpful",
      correction: post.expertLabel ?? null,
      correctionNote: post.note ?? null,
      source: "facebook_import",
    });
    results.push(record);
  }
  return results;
}
