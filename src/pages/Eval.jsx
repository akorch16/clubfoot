import { useState } from "react";
import { conditionMap } from "../data/conditions";
import { getLabeledExamples } from "../services/feedback";
import { analyzeImageDetailed } from "../services/vision";
import { computeMetrics, URGENCY_TIERS, EVAL_MODELS, PRICING } from "../services/evalMetrics";

const TIER_LABEL = { urgent: "Urgent", monitor: "Monitor", normal: "Normal", meta: "Meta" };
const TIER_COLOR = {
  urgent: "text-red-600",
  monitor: "text-amber-600",
  normal: "text-emerald-600",
  meta: "text-slate-400",
};

const pct = (n) => (n == null ? "—" : `${(n * 100).toFixed(0)}%`);
const fmtCost = (c) => (c == null ? "—" : `$${c.toFixed(4)}`);
const fmtLatency = (ms) => (ms == null ? "—" : `${(ms / 1000).toFixed(1)}s`);

export default function Eval() {
  const [phase, setPhase] = useState("idle"); // idle | running | done | error
  const [selected, setSelected] = useState(() => new Set(EVAL_MODELS.map((m) => m.id)));
  const [progress, setProgress] = useState({ done: 0, total: 0, model: "" });
  const [metricsByModel, setMetricsByModel] = useState({});
  const [focusModel, setFocusModel] = useState(null);
  const [error, setError] = useState("");

  function toggle(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  async function runEval() {
    setError("");
    const models = EVAL_MODELS.filter((m) => selected.has(m.id));
    if (!models.length) { setError("Select at least one model."); setPhase("error"); return; }

    let examples;
    try {
      examples = await getLabeledExamples();
    } catch {
      setError("Could not read labeled examples from storage.");
      setPhase("error");
      return;
    }
    if (!examples.length) {
      setError("No labeled examples found. Triage some scans on /logs, or label images on /train, first.");
      setPhase("error");
      return;
    }

    setPhase("running");
    const total = models.length * examples.length;
    let done = 0;
    const byModel = {};

    for (const m of models) {
      const results = [];
      for (const ex of examples) {
        try {
          const { diagnosis, usage, latencyMs } = await analyzeImageDetailed(ex.imageData, "", { model: m.id });
          results.push({ correction: ex.correction, predicted: diagnosis, usage, latencyMs, error: null, note: ex.correctionNote });
        } catch (e) {
          results.push({ correction: ex.correction, predicted: null, error: e.message ?? "error" });
        }
        done += 1;
        setProgress({ done, total, model: m.label });
      }
      byModel[m.id] = computeMetrics(results, PRICING[m.id]);
    }

    setMetricsByModel(byModel);
    setFocusModel(models[0].id);
    setPhase("done");
  }

  const ranModels = EVAL_MODELS.filter((m) => metricsByModel[m.id]);
  // Best (lowest) urgent-FNR among models that actually had urgent examples.
  const fnrs = ranModels
    .map((m) => metricsByModel[m.id].urgentFNR)
    .filter((v) => v != null);
  const bestFNR = fnrs.length ? Math.min(...fnrs) : null;

  const focus = focusModel ? metricsByModel[focusModel] : null;

  return (
    <div>
      {/* Header */}
      <div className="bg-violet-500 px-5 pt-12 pb-6">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Admin only
        </span>
        <h1 className="text-2xl font-bold text-white">Scan Model Evaluation</h1>
        <p className="text-violet-100 text-sm mt-1">Compare models over your labeled gold set — accuracy vs. cost</p>
      </div>

      <div className="px-4 pt-5 pb-24 space-y-5">

        {/* What this measures */}
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
          <p className="text-sm font-semibold text-slate-800">What this measures</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Each selected model reruns your labeled gold set. Headline is the{" "}
            <span className="font-medium text-red-600">urgent false-negative rate</span> — how often a truly-urgent photo
            gets called non-urgent — shown against per-scan cost, so you can pick the accuracy/cost tradeoff on evidence.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            One live API call per (model × labeled image), run sequentially — costs credits and takes a moment.
          </p>
        </div>

        {(phase === "idle" || phase === "error") && (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Models to compare</p>
              <div className="space-y-2">
                {EVAL_MODELS.map((m) => (
                  <label key={m.id} className="flex items-center justify-between gap-2 cursor-pointer">
                    <span className="flex items-center gap-2">
                      <input type="checkbox" checked={selected.has(m.id)} onChange={() => toggle(m.id)} className="accent-violet-500" />
                      <span className="text-sm font-medium text-slate-700">{m.label}</span>
                    </span>
                    <span className="text-xs text-slate-400">${m.inPer1M}/${m.outPer1M} per 1M tok</span>
                  </label>
                ))}
              </div>
            </div>
            {phase === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            <button
              onClick={runEval}
              className="w-full py-3.5 rounded-2xl bg-violet-500 text-white font-semibold text-sm active:scale-95 transition-transform"
            >
              Run comparison
            </button>
          </div>
        )}

        {phase === "running" && (
          <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Scoring with {progress.model} — {progress.done} of {progress.total}</span>
              <span>{Math.round((progress.done / progress.total) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-violet-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(progress.done / progress.total) * 100}%` }} />
            </div>
          </div>
        )}

        {phase === "done" && ranModels.length > 0 && (
          <div className="space-y-5">
            {/* Comparison table */}
            <section>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Comparison</p>
              <div className="bg-white rounded-2xl shadow-sm p-4 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-slate-400 text-left">
                      <th className="font-medium py-1 pr-3">Model</th>
                      <th className="font-medium py-1 px-2 text-center">Urgent FNR</th>
                      <th className="font-medium py-1 px-2 text-center">Cond. acc</th>
                      <th className="font-medium py-1 px-2 text-center">$/scan</th>
                      <th className="font-medium py-1 px-2 text-center">Latency</th>
                      <th className="font-medium py-1 px-2 text-center">Err</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ranModels.map((m) => {
                      const mm = metricsByModel[m.id];
                      const isBest = mm.urgentFNR != null && mm.urgentFNR === bestFNR;
                      return (
                        <tr key={m.id} className="border-t border-slate-100">
                          <td className="py-2 pr-3 font-semibold text-slate-700">{m.label}</td>
                          <td className={`py-2 px-2 text-center font-bold ${isBest ? "text-emerald-600" : "text-slate-700"}`}>
                            {pct(mm.urgentFNR)}
                          </td>
                          <td className="py-2 px-2 text-center text-slate-600">{pct(mm.conditionAccuracy)}</td>
                          <td className="py-2 px-2 text-center text-slate-600">{fmtCost(mm.avgCost)}</td>
                          <td className="py-2 px-2 text-center text-slate-500">{fmtLatency(mm.avgLatencyMs)}</td>
                          <td className="py-2 px-2 text-center text-slate-500">{mm.erroredCount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p className="text-xs text-slate-400 pt-3 leading-relaxed">
                  Lowest urgent-FNR is the safest triage model; weigh it against $/scan. Green = best urgent-recall.
                  {ranModels[0] && metricsByModel[ranModels[0].id].trueUrgentCount === 0 &&
                    " ⚠ No urgent examples in the gold set yet — FNR isn't meaningful until you label some urgent cases."}
                </p>
              </div>
            </section>

            {/* Set composition (model-independent) */}
            {focus && (
              <section>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Set composition (by true urgency)</p>
                <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
                  {URGENCY_TIERS.map((t) => (
                    <div key={t} className="flex items-center justify-between text-sm">
                      <span className={`font-medium ${TIER_COLOR[t]}`}>{TIER_LABEL[t]}</span>
                      <span className="text-slate-500">{focus.tierCounts[t]} labeled</span>
                    </div>
                  ))}
                  <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                    {focus.scored} scored · Urgent cases are rare — stratify by urgency so the FNR is measured on enough cases.
                  </p>
                </div>
              </section>
            )}

            {/* Focus-model detail */}
            {ranModels.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Detail:</p>
                  {ranModels.map((m) => (
                    <button key={m.id} onClick={() => setFocusModel(m.id)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                        focusModel === m.id ? "bg-violet-500 text-white" : "border border-slate-200 text-slate-500"
                      }`}>
                      {m.label}
                    </button>
                  ))}
                </div>

                {focus && (
                  <div className="space-y-4">
                    {/* Calibration */}
                    <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Calibration check</p>
                      {["high", "medium", "low"].map((c) => {
                        const b = focus.calibration[c];
                        const acc = b.total ? b.correct / b.total : null;
                        return (
                          <div key={c} className="flex items-center justify-between text-sm">
                            <span className="font-medium text-slate-700 capitalize">{c} confidence</span>
                            <span className="text-slate-500">{pct(acc)} correct <span className="text-slate-300">·</span> n={b.total}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Urgency confusion matrix */}
                    <div className="bg-white rounded-2xl shadow-sm p-4 overflow-x-auto">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Urgency confusion (true → predicted)</p>
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="text-slate-400">
                            <th className="text-left font-medium py-1 pr-3">true ↓ / pred →</th>
                            {URGENCY_TIERS.map((p) => (
                              <th key={p} className={`font-medium py-1 px-2 text-center ${TIER_COLOR[p]}`}>{TIER_LABEL[p]}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {URGENCY_TIERS.map((t) => (
                            <tr key={t} className="border-t border-slate-100">
                              <td className={`py-1.5 pr-3 font-medium ${TIER_COLOR[t]}`}>{TIER_LABEL[t]}</td>
                              {URGENCY_TIERS.map((p) => {
                                const v = focus.urgencyConfusion[t][p];
                                const bad = t === "urgent" && (p === "normal" || p === "monitor") && v > 0;
                                const good = t === p && v > 0;
                                return (
                                  <td key={p} className={`py-1.5 px-2 text-center ${
                                    bad ? "text-red-600 font-bold" : good ? "text-emerald-600 font-semibold" : "text-slate-400"
                                  }`}>{v || "·"}</td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Dangerous confusions */}
                    {focus.dangerous.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2">⚠ Missed emergencies (urgent → normal)</p>
                        <div className="space-y-2">
                          {focus.dangerous.map((d, i) => (
                            <div key={i} className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
                              <p className="text-sm text-red-800">
                                <span className="font-semibold">{conditionMap[d.correction]?.label ?? d.correction}</span>
                                {" → predicted "}
                                <span className="font-medium">{conditionMap[d.predicted]?.label ?? d.predicted}</span>
                              </p>
                              {d.note && <p className="text-xs text-red-600 mt-1 leading-snug">{d.note}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            <button onClick={() => setPhase("idle")} className="text-xs text-slate-400 active:text-slate-600">
              Run again
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
