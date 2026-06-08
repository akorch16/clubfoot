import { useState, useRef } from "react";
import { conditions } from "../data/conditions";
import { saveFeedback, exportFeedbackAsJSON, getFeedbackCount, clearAllData, dedupRecords } from "../services/feedback";
import { importPdfFile } from "../services/pdfImport";

const DOMAIN_LABELS = {
  cast: "Cast",
  brace: "Brace / AFO",
  foot: "Foot",
  meta: "Meta / Image Quality",
};

const DOMAIN_ORDER = ["cast", "brace", "foot", "meta"];

export default function Train() {
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [note, setNote] = useState("");
  const [trustedContributor, setTrustedContributor] = useState("");
  const [saved, setSaved] = useState(false);
  const [count, setCount] = useState(getFeedbackCount);
  const [confirmClear, setConfirmClear] = useState(false);
  const [dedupMsg, setDedupMsg] = useState("");
  const fileRef = useRef();
  const pdfRef = useRef();
  const [pdfPhase, setPdfPhase] = useState("idle"); // idle | processing | done | error
  const [pdfProgress, setPdfProgress] = useState({ page: 0, total: 0, saved: 0 });
  const [pdfResults, setPdfResults] = useState([]);
  const [pdfError, setPdfError] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { setImageDataUrl(ev.target.result); setSaved(false); };
    reader.readAsDataURL(file);
  }

  async function handleSave() {
    if (!imageDataUrl || !selectedCondition) return;
    await saveFeedback(imageDataUrl, null, {
      feedback: null,
      correction: selectedCondition,
      correctionNote: note.trim() || null,
      trustedContributor: trustedContributor.trim() || null,
      source: "facebook_import",
    });
    setCount(getFeedbackCount());
    setSaved(true);
    setImageDataUrl(null);
    setSelectedCondition("");
    setNote("");
    setTrustedContributor("");
    if (fileRef.current) fileRef.current.value = "";
  }

  async function handlePdfImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPdfPhase("processing");
    setPdfProgress({ page: 0, total: 0, saved: 0 });
    setPdfResults([]);
    setPdfError("");
    try {
      const results = await importPdfFile(file, {
        onProgress: (p) => setPdfProgress(p),
      });
      setPdfResults(results);
      setCount(getFeedbackCount());
      setPdfPhase("done");
    } catch (err) {
      setPdfError(err.message ?? "Something went wrong");
      setPdfPhase("error");
    }
    if (pdfRef.current) pdfRef.current.value = "";
  }

  function handleDedup() {
    const removed = dedupRecords();
    setCount(getFeedbackCount());
    setDedupMsg(removed > 0 ? `Removed ${removed} duplicate${removed !== 1 ? "s" : ""}` : "No duplicates found");
    setTimeout(() => setDedupMsg(""), 3000);
  }

  async function handleClear() {
    if (!confirmClear) { setConfirmClear(true); return; }
    await clearAllData();
    setCount(0);
    setConfirmClear(false);
  }

  async function handleExport() {
    const json = await exportFeedbackAsJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `clubfoot-training-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const grouped = DOMAIN_ORDER.reduce((acc, domain) => {
    acc[domain] = conditions.filter((c) => c.domain === domain);
    return acc;
  }, {});

  return (
    <div>
      {/* Header */}
      <div className="bg-violet-500 px-5 pt-12 pb-6">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Admin only
        </span>
        <h1 className="text-2xl font-bold text-white">Training Data Entry</h1>
        <p className="text-violet-100 text-sm mt-1">Label Facebook post images to improve the vision model</p>
      </div>

      <div className="px-4 pt-5 pb-24 space-y-5">

        {/* Stats bar */}
        <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-4 py-3">
          <div>
            <p className="text-xs text-slate-500">Labeled examples saved</p>
            <p className="text-2xl font-bold text-slate-800">{count}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExport}
              disabled={count === 0}
              className="px-4 py-2 rounded-xl bg-violet-500 text-white text-xs font-semibold disabled:opacity-40 active:scale-95 transition-transform"
            >
              Export JSON
            </button>
            <button
              onClick={handleDedup}
              disabled={count === 0}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-500 text-xs font-semibold disabled:opacity-40 active:scale-95 transition-transform"
            >
              Dedup
            </button>
            <button
              onClick={handleClear}
              disabled={count === 0}
              className={`px-4 py-2 rounded-xl text-xs font-semibold disabled:opacity-40 transition-colors ${
                confirmClear ? "bg-red-600 text-white" : "border border-slate-200 text-slate-500"
              }`}
            >
              {confirmClear ? "Confirm clear" : "Clear"}
            </button>
          </div>
          {dedupMsg && <p className="text-xs text-emerald-600 mt-1">{dedupMsg}</p>}
        </div>

        {/* PDF Import */}
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
          <div>
            <p className="text-sm font-semibold text-slate-800">Import from Facebook PDF</p>
            <p className="text-xs text-slate-500 mt-0.5">Upload a PDF export of the Facebook group — Claude will scan each page and extract labeled training cases automatically.</p>
          </div>

          {pdfPhase === "idle" && (
            <label className="block cursor-pointer">
              <input ref={pdfRef} type="file" accept="application/pdf" onChange={handlePdfImport} className="sr-only" />
              <div className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-violet-200 bg-violet-50 text-violet-600 text-sm font-medium active:bg-violet-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Choose PDF to import
              </div>
            </label>
          )}

          {pdfPhase === "processing" && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Processing page {pdfProgress.page} of {pdfProgress.total || "…"}</span>
                <span>{pdfProgress.saved} cases found</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="bg-violet-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: pdfProgress.total ? `${(pdfProgress.page / pdfProgress.total) * 100}%` : "0%" }}
                />
              </div>
              <p className="text-xs text-slate-400">This may take a few minutes for large PDFs…</p>
            </div>
          )}

          {pdfPhase === "done" && (
            <div className="space-y-2">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                <p className="text-sm font-semibold text-emerald-800">
                  {pdfResults.length} training case{pdfResults.length !== 1 ? "s" : ""} extracted and saved
                </p>
                {pdfResults.length === 0 && (
                  <p className="text-xs text-emerald-700 mt-1">No photos found — the PDF may not have embedded images. Try the manual entry below instead.</p>
                )}
              </div>
              <button onClick={() => setPdfPhase("idle")} className="text-xs text-slate-400 active:text-slate-600">
                Import another PDF
              </button>
            </div>
          )}

          {pdfPhase === "error" && (
            <div className="space-y-2">
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-xs text-red-700">{pdfError}</p>
              </div>
              <button onClick={() => setPdfPhase("idle")} className="text-xs text-slate-400 active:text-slate-600">Try again</button>
            </div>
          )}
        </div>

        {saved && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-700 font-medium">
            Saved! Add another example below.
          </div>
        )}

        {/* Image upload */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">1. Upload image</label>
          <label className="block w-full cursor-pointer">
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="sr-only" />
            {imageDataUrl ? (
              <img src={imageDataUrl} alt="Preview" className="w-full max-h-56 rounded-2xl object-cover shadow-sm" />
            ) : (
              <div className="w-full h-36 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 bg-white text-slate-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Tap to select photo</span>
              </div>
            )}
          </label>
          {imageDataUrl && (
            <button onClick={() => { setImageDataUrl(null); if (fileRef.current) fileRef.current.value = ""; }}
              className="text-xs text-slate-400 active:text-slate-600">
              Remove image
            </button>
          )}
        </div>

        {/* Condition picker */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">2. Select the correct condition</label>
          {DOMAIN_ORDER.map((domain) => (
            <div key={domain} className="space-y-1.5">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{DOMAIN_LABELS[domain]}</p>
              <div className="flex flex-wrap gap-2">
                {grouped[domain].map((c) => {
                  const active = selectedCondition === c.id;
                  const colors = {
                    red:     active ? "bg-red-600 text-white border-red-600"     : "bg-red-50 text-red-700 border-red-200",
                    amber:   active ? "bg-amber-500 text-white border-amber-500" : "bg-amber-50 text-amber-700 border-amber-200",
                    emerald: active ? "bg-emerald-600 text-white border-emerald-600" : "bg-emerald-50 text-emerald-700 border-emerald-200",
                    slate:   active ? "bg-slate-600 text-white border-slate-600" : "bg-slate-100 text-slate-600 border-slate-200",
                  };
                  return (
                    <button key={c.id} onClick={() => setSelectedCondition(c.id)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors ${colors[c.color]}`}>
                      {c.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">
            3. Notes <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value.slice(0, 2000))}
            placeholder="e.g. Expert in comments confirmed heel not seated — parent had put sock on wrong way"
            rows={5}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-300 resize-none"
          />
          <p className="text-xs text-slate-400 text-right">{note.length}/2000</p>
        </div>

        {/* Trusted contributor */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">
            4. Trusted expert source <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            type="text"
            value={trustedContributor}
            onChange={(e) => setTrustedContributor(e.target.value)}
            placeholder="e.g. Kori Rush"
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-300"
          />
          <p className="text-xs text-slate-400 leading-relaxed">
            Name the community expert whose assessment drove this label. Records marked with a trusted expert are weighted more heavily when improving the model.
          </p>
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          disabled={!imageDataUrl || !selectedCondition}
          className="w-full py-3.5 rounded-2xl bg-violet-500 text-white font-semibold text-sm disabled:opacity-40 active:scale-95 transition-transform"
        >
          Save training example
        </button>

      </div>
    </div>
  );
}
