const STORAGE_KEY = "cf_feedback_v1";
const SCHEMA_VERSION = 1;

// ─── Image store (IndexedDB) ──────────────────────────────────────────────────

const IDB_NAME = "cf_images_v1";
const IDB_STORE = "images";

function openImageDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = (e) => e.target.result.createObjectStore(IDB_STORE);
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function saveImage(hash, base64DataUrl) {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).put(base64DataUrl, hash);
    tx.oncomplete = () => resolve();
    tx.onerror = (e) => reject(e.target.error);
  });
}

async function getAllImages() {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readonly");
    const images = {};
    const req = tx.objectStore(IDB_STORE).openCursor();
    req.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) { images[cursor.key] = cursor.value; cursor.continue(); }
      else resolve(images);
    };
    req.onerror = (e) => reject(e.target.error);
  });
}

// ─── Metadata store (localStorage) ───────────────────────────────────────────

async function hashImage(base64DataUrl) {
  const encoder = new TextEncoder();
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
 * Save a feedback record. Image is stored in IndexedDB; metadata in localStorage.
 * payload: { feedback: "helpful"|"not_helpful"|null, correction: conditionId|null,
 *            correctionNote: string|null, source: "user_capture"|"facebook_import",
 *            trustedContributor: string|null }
 */
export async function saveFeedback(base64DataUrl, diagnosis, payload) {
  const imageHash = await hashImage(base64DataUrl);

  // Store image in IndexedDB (non-fatal if it fails)
  await saveImage(imageHash, base64DataUrl).catch((e) =>
    console.warn("Image save failed:", e)
  );

  const record = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    imageHash,
    schemaVersion: SCHEMA_VERSION,
    diagnosis,
    feedback: payload.feedback ?? null,
    correction: payload.correction ?? null,
    correctionNote: payload.correctionNote ?? null,
    trustedContributor: payload.trustedContributor ?? null,
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

/**
 * Export all records joined with their images from IndexedDB.
 * Each record gets an imageData field (base64 data URL, or null if not found).
 */
export async function exportFeedbackAsJSON() {
  const records = load();
  const images = await getAllImages().catch(() => ({}));
  const enriched = records.map((r) => ({
    ...r,
    imageData: images[r.imageHash] ?? null,
  }));
  return JSON.stringify(enriched, null, 2);
}

export async function clearAllData() {
  localStorage.removeItem(STORAGE_KEY);
  const db = await openImageDB().catch(() => null);
  if (!db) return;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = (e) => reject(e.target.error);
  });
}

/**
 * Facebook training pipeline hook (Phase 2).
 * posts: array of { imageBase64, expertLabel, note }
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
