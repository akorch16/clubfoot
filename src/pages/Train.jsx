import { useState, useRef } from "react";
import { conditions } from "../data/conditions";
import { saveFeedback, exportFeedbackAsJSON, getFeedbackCount, clearAllData } from "../services/feedback";

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
  const fileRef = useRef();

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImageDataUrl(ev.target.result);
      setSaved(false);
    };
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
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 px-5 pt-12 pb-6">
        <span className="inline-block bg-violet-400/20 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Admin only
        </span>
        <h1 className="text-2xl font-bold text-white">Training Data Entry</h1>
        <p className="text-slate-300 text-sm mt-1">
          Label Facebook post images to improve the vision model
        </p>
      </div>

      <div className="px-4 pt-5 pb-24 space-y-5">

        {/* Stats bar */}
        <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
          <div>
            <p className="text-xs text-slate-500">Labeled examples saved</p>
            <p className="text-2xl font-bold text-slate-800">{count}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExport}
              disabled={count === 0}
              className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold disabled:opacity-40"
            >
              Export JSON
            </button>
            <button
              onClick={handleClear}
              disabled={count === 0}
              className={`px-4 py-2 rounded-xl text-xs font-semibold disabled:opacity-40 transition-colors ${
                confirmClear
                  ? "bg-red-600 text-white"
                  : "border border-slate-300 text-slate-500"
              }`}
            >
              {confirmClear ? "Confirm clear" : "Clear"}
            </button>
          </div>
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
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="sr-only"
            />
            {imageDataUrl ? (
              <img
                src={imageDataUrl}
                alt="Preview"
                className="w-full max-h-56 rounded-2xl object-cover shadow-md"
              />
            ) : (
              <div className="w-full h-36 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 bg-slate-50 text-slate-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Tap to select photo</span>
              </div>
            )}
          </label>
          {imageDataUrl && (
            <button
              onClick={() => { setImageDataUrl(null); if (fileRef.current) fileRef.current.value = ""; }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Remove image
            </button>
          )}
        </div>

        {/* Condition picker */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">2. Select the correct condition</label>
          {DOMAIN_ORDER.map((domain) => (
            <div key={domain} className="space-y-1.5">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                {DOMAIN_LABELS[domain]}
              </p>
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
                    <button
                      key={c.id}
                      onClick={() => setSelectedCondition(c.id)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors ${colors[c.color]}`}
                    >
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
            3. Notes{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value.slice(0, 2000))}
            placeholder="e.g. Expert in comments confirmed heel not seated — parent had put sock on wrong way"
            rows={5}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 resize-none"
          />
          <p className="text-xs text-slate-400 text-right">{note.length}/2000</p>
        </div>

        {/* Trusted contributor */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">
            4. Trusted expert source{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            type="text"
            value={trustedContributor}
            onChange={(e) => setTrustedContributor(e.target.value)}
            placeholder="e.g. Kori Rush"
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
          <p className="text-xs text-slate-400 leading-relaxed">
            Name the community expert whose assessment drove this label. Records marked with a trusted expert are weighted more heavily when improving the model.
          </p>
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          disabled={!imageDataUrl || !selectedCondition}
          className="w-full py-3.5 rounded-2xl bg-slate-800 text-white font-semibold text-sm disabled:opacity-40"
        >
          Save training example
        </button>

      </div>
    </div>
  );
}
