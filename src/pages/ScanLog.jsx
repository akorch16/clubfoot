import { useState, useEffect } from "react";
import { conditionMap } from "../data/conditions";
import { getAllImages } from "../services/feedback";
import {
  getScanLog,
  getScanLogCount,
  setTriage,
  exportScanLogAsJSON,
  clearScanLog,
} from "../services/scanLog";

const urgencyBadge = {
  urgent: "bg-red-100 text-red-700",
  monitor: "bg-amber-100 text-amber-700",
  normal: "bg-emerald-100 text-emerald-700",
  meta: "bg-slate-100 text-slate-500",
};

function fmtTime(iso) {
  try {
    return new Date(iso).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  } catch {
    return iso;
  }
}

export default function ScanLog() {
  const [log, setLog] = useState([]);
  const [images, setImages] = useState({});
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    setLog(getScanLog());
    getAllImages().then(setImages).catch(() => setImages({}));
  }, []);

  function triage(id, verdict) {
    const current = log.find((r) => r.id === id)?.triage;
    const next = current === verdict ? null : verdict; // tap again to clear
    setTriage(id, next);
    setLog((prev) => prev.map((r) => (r.id === id ? { ...r, triage: next } : r)));
  }

  async function handleExport() {
    const json = await exportScanLogAsJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `clubfoot-scanlog-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleClear() {
    if (!confirmClear) { setConfirmClear(true); return; }
    clearScanLog();
    setLog([]);
    setConfirmClear(false);
  }

  const total = log.length;
  const correct = log.filter((r) => r.triage === "correct").length;
  const wrong = log.filter((r) => r.triage === "wrong").length;

  return (
    <div>
      {/* Header */}
      <div className="bg-violet-500 px-5 pt-12 pb-6">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Admin only
        </span>
        <h1 className="text-2xl font-bold text-white">Scan Log</h1>
        <p className="text-violet-100 text-sm mt-1">Every scan on this device, with its output and version stamp</p>
      </div>

      <div className="px-4 pt-5 pb-24 space-y-4">

        {/* Stats + actions */}
        <div className="bg-white rounded-2xl shadow-sm px-4 py-3 space-y-3">
          <div className="flex items-center justify-around text-center">
            <div>
              <p className="text-2xl font-bold text-slate-800">{total}</p>
              <p className="text-xs text-slate-400">Logged</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-600">{correct}</p>
              <p className="text-xs text-slate-400">Looks right</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-600">{wrong}</p>
              <p className="text-xs text-slate-400">Wrong</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExport}
              disabled={total === 0}
              className="flex-1 px-4 py-2 rounded-xl bg-violet-500 text-white text-xs font-semibold disabled:opacity-40 active:scale-95 transition-transform"
            >
              Export JSON
            </button>
            <button
              onClick={handleClear}
              disabled={total === 0}
              className={`flex-1 px-4 py-2 rounded-xl text-xs font-semibold disabled:opacity-40 transition-colors ${
                confirmClear ? "bg-red-600 text-white" : "border border-slate-200 text-slate-500"
              }`}
            >
              {confirmClear ? "Confirm clear" : "Clear"}
            </button>
          </div>
        </div>

        {total === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <p className="text-sm text-slate-400">No scans logged yet on this device. Run a scan from the Scan tab.</p>
          </div>
        )}

        {/* Records */}
        {log.map((r) => {
          const out = r.output ?? {};
          const cond = conditionMap[out.primaryCondition];
          const urgency = out.urgency ?? cond?.urgency ?? "meta";
          const differential = (out.differential ?? [])
            .map((d) => ({ ...d, cond: conditionMap[d.condition] }))
            .filter((d) => d.cond);
          return (
            <div key={r.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="flex gap-3 p-4">
                {r.imageHash && images[r.imageHash] && (
                  <img src={images[r.imageHash]} alt="" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${urgencyBadge[urgency] ?? urgencyBadge.meta}`}>
                      {urgency}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 truncate">
                      {cond?.label ?? out.primaryCondition ?? "—"}
                    </span>
                  </div>
                  {out.confidence && (
                    <p className="text-xs text-slate-400 mt-0.5">{out.confidence} confidence</p>
                  )}
                  {out.reasoning && (
                    <p className="text-xs text-slate-600 mt-1 leading-snug">{out.reasoning}</p>
                  )}
                </div>
              </div>

              {(differential.length > 1 || r.symptoms) && (
                <div className="px-4 pb-3 -mt-1 space-y-1.5">
                  {differential.length > 1 && (
                    <p className="text-xs text-slate-500">
                      <span className="text-slate-400">Differential: </span>
                      {differential.map((d) => `${d.cond.label} (${d.likelihood})`).join(", ")}
                    </p>
                  )}
                  {r.symptoms && (
                    <p className="text-xs text-slate-500">
                      <span className="text-slate-400">Symptoms: </span>{r.symptoms}
                    </p>
                  )}
                </div>
              )}

              {/* Meta row + triage */}
              <div className="border-t border-slate-100 px-4 py-2.5 flex items-center justify-between gap-2">
                <div className="text-[11px] text-slate-400 leading-tight min-w-0">
                  <span>{fmtTime(r.timestamp)}</span>
                  <span className="mx-1.5">·</span>
                  <span className="font-mono">{r.promptVersion ?? "?"}</span>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => triage(r.id, "correct")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      r.triage === "correct" ? "bg-emerald-600 text-white" : "border border-slate-200 text-slate-500"
                    }`}
                  >
                    Looks right
                  </button>
                  <button
                    onClick={() => triage(r.id, "wrong")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      r.triage === "wrong" ? "bg-red-600 text-white" : "border border-slate-200 text-slate-500"
                    }`}
                  >
                    Wrong
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
