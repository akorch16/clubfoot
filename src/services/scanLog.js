import { hashImage, saveImage, getAllImages } from "./feedback";

// ─── Local scan observability log ────────────────────────────────────────────
// Option 0 observability: every scan is captured here (in this browser) with
// its full structured output and the prompt/model version that produced it, so
// the admin can review and triage outputs. This is per-device — a dogfooding
// log, not fleet observability (that requires writing from the Worker).

const SCANLOG_KEY = "cf_scanlog_v1";
const MAX_RECORDS = 500; // cap so localStorage can't grow unbounded

function load() {
  try {
    return JSON.parse(localStorage.getItem(SCANLOG_KEY) || "[]");
  } catch {
    return [];
  }
}

function save(records) {
  try {
    localStorage.setItem(SCANLOG_KEY, JSON.stringify(records));
  } catch {
    /* quota exceeded — drop silently, logging must never break a scan */
  }
}

/**
 * Record one scan. The image blob is content-addressed into the shared
 * IndexedDB store (deduped by hash); the record itself keeps the full verbatim
 * model output plus the version stamps needed to reproduce it.
 *
 * Fire-and-forget from the caller — never await it on the UI path.
 */
export async function logScan({ imageDataUrl, symptoms, diagnosis, promptVersion, model }) {
  let imageHash = null;
  if (imageDataUrl) {
    try {
      imageHash = await hashImage(imageDataUrl);
      await saveImage(imageHash, imageDataUrl).catch(() => {});
    } catch {
      /* image hashing/storage failed — keep the log record anyway */
    }
  }

  const record = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    promptVersion: promptVersion ?? null,
    model: model ?? null,
    imageHash,
    symptoms: symptoms?.trim() || null,
    output: diagnosis ?? null, // the full structured response, verbatim
    triage: null, // admin verdict: "correct" | "wrong" | null
  };

  const records = load();
  records.push(record);
  if (records.length > MAX_RECORDS) records.splice(0, records.length - MAX_RECORDS);
  save(records);
  return record;
}

// Newest first, for the admin view.
export function getScanLog() {
  return load().slice().reverse();
}

export function getScanLogCount() {
  return load().length;
}

/** Set (or clear, with null) the admin triage verdict on one record. */
export function setTriage(id, verdict) {
  const records = load();
  const rec = records.find((r) => r.id === id);
  if (rec) {
    rec.triage = verdict;
    save(records);
  }
  return rec;
}

/** Export the full log joined with image data, for offline review. */
export async function exportScanLogAsJSON() {
  const records = load();
  const images = await getAllImages().catch(() => ({}));
  const enriched = records.map((r) => ({
    ...r,
    imageData: r.imageHash ? images[r.imageHash] ?? null : null,
  }));
  return JSON.stringify(enriched, null, 2);
}

export function clearScanLog() {
  try {
    localStorage.removeItem(SCANLOG_KEY);
  } catch {
    /* ignore */
  }
}
