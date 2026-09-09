import { useState } from "react";
import { conditionMap } from "../data/conditions";
import { getLabeledExamples } from "../services/feedback";
import { analyzeImage } from "../services/vision";
import { computeMetrics, URGENCY_TIERS } from "../services/evalMetrics";

const TIER_LABEL = { urgent: "Urgent", monitor: "Monitor", normal: "Normal", meta: "Meta" };
const TIER_COLOR = {
  urgent: "text-red-600",
  monitor: "text-amber-600",
  normal: "text-emerald-600",
  meta: "text-slate-400",
};

function pct(n) {
  return n == null ? "—" : `${(n * 100).toFixed(0)}%`;
}

export default function Eval() {
  const [phase, setPhase] = useState("idle"); // idle | running | done | error
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState("");

  async function runEval() {
    setError("");
    let examples;
    try {
      examples = await getLabeledExamples();
    } catch {
      setError("Could not read labeled examples from storage.");
      setPhase("error");
      return;
    }
    if (!examples.length) {
      setError("No labeled examples found. Label some images on the /train page first.");
      setPhase("error");
      return;
    }

    setPhase("running");
    setProgress({ done: 0, total: examples.length });
    const results = [];
    for (let i = 0; i < examples.length; i++) {
      const ex = examples[i];
      try {
        const predicted = await analyzeImage(ex.imageData, "");
        results.push({ correction: ex.correction, predicted, error: null, note: ex.correctionNote });
      } catch (e) {
        results.push({ correction: ex.correction, predicted: null, error: e.message ?? "error" });
      }
      setProgress({ done: i + 1, total: examples.length });
    }
    setMetrics(computeMetrics(results));
    setPhase("done");
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-violet-500 px-5 pt-12 pb-6">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Admin only
        </span>
        <h1 className="text-2xl font-bold text-white">Scan Model Evaluation</h1>
        <p className="text-violet-100 text-sm mt-1">Regression harness — reruns the live model over your labeled gold set</p>
      </div>

      <div className="px-4 pt-5 pb-24 space-y-5">

        {/* What this measures */}
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
          <p className="text-sm font-semibold text-slate-800">What this measures</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Every labeled example from <span className="font-medium">/train</span> is rerun through the current scan prompt.
            The headline metric is the <span className="font-medium text-red-600">urgent false-negative rate</span> — how
            often a truly-urgent photo gets called non-urgent. For a triage tool a missed emergency is far worse than an
            over-flag, so overall accuracy is only a secondary number. Rerun this after every prompt change to see whether
            urgent-recall actually moved.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Note: this makes one live API call per labeled image, so it costs credits and takes a moment.
          </p>
        </div>

        {phase === "idle" && (
          <button
            onClick={runEval}
            className="w-full py-3.5 rounded-2xl bg-violet-500 text-white font-semibold text-sm active:scale-95 transition-transform"
          >
            Run evaluation
          </button>
        )}

        {phase === "running" && (
          <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Scoring example {progress.done} of {progress.total}</span>
              <span>{Math.round((progress.done / progress.total) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div
                className="bg-violet-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(progress.done / progress.total) * 100}%` }}
              />
            </div>
          </div>
        )}

        {phase === "error" && (
          <div className="space-y-2">
            <div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
            <button onClick={() => setPhase("idle")} className="text-xs text-slate-400 active:text-slate-600">Back</button>
          </div>
        )}

        {phase === "done" && metrics && (
          <div className="space-y-5">
            {/* Headline: urgent FNR */}
            <div className={`rounded-2xl p-5 border ${
              metrics.urgentFNR && metrics.urgentFNR > 0
                ? "bg-red-50 border-red-200"
                : "bg-emerald-50 border-emerald-200"
            }`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Urgent false-negative rate</p>
              <p className={`text-4xl font-bold ${
                metrics.urgentFNR && metrics.urgentFNR > 0 ? "text-red-600" : "text-emerald-600"
              }`}>
                {pct(metrics.urgentFNR)}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {metrics.urgentMissedCount} of {metrics.trueUrgentCount} truly-urgent examples were called non-urgent
                {metrics.trueUrgentCount === 0 && " (no urgent examples in the set — label some to make this meaningful)"}
              </p>
            </div>

            {/* Secondary stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
                <p className="text-2xl font-bold text-slate-800">{pct(metrics.conditionAccuracy)}</p>
                <p className="text-xs text-slate-400 mt-0.5">Condition accuracy</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
                <p className="text-2xl font-bold text-slate-800">{metrics.scored}</p>
                <p className="text-xs text-slate-400 mt-0.5">Scored</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
                <p className="text-2xl font-bold text-slate-800">{metrics.erroredCount}</p>
                <p className="text-xs text-slate-400 mt-0.5">Errors</p>
              </div>
            </div>

            {/* Stratification */}
            <section>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Set composition (by true urgency)</p>
              <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
                {URGENCY_TIERS.map((t) => (
                  <div key={t} className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${TIER_COLOR[t]}`}>{TIER_LABEL[t]}</span>
                    <span className="text-slate-500">{metrics.tierCounts[t]} labeled</span>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                  Urgent cases are rare — a random sample underweights exactly the cases you most need to get right.
                  Stratify by urgency when building the set.
                </p>
              </div>
            </section>

            {/* Calibration */}
            <section>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Calibration check</p>
              <div className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
                {["high", "medium", "low"].map((c) => {
                  const b = metrics.calibration[c];
                  const acc = b.total ? b.correct / b.total : null;
                  return (
                    <div key={c} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700 capitalize">{c} confidence</span>
                      <span className="text-slate-500">
                        {pct(acc)} correct <span className="text-slate-300">·</span> n={b.total}
                      </span>
                    </div>
                  );
                })}
                <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                  "High confidence" should be right more often than "low." If it isn't, the confidence field is
                  decorative, not real.
                </p>
              </div>
            </section>

            {/* Urgency confusion matrix */}
            <section>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Urgency confusion (true → predicted)</p>
              <div className="bg-white rounded-2xl shadow-sm p-4 overflow-x-auto">
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
                          const v = metrics.urgencyConfusion[t][p];
                          const bad = t === "urgent" && (p === "normal" || p === "monitor") && v > 0;
                          const good = t === p && v > 0;
                          return (
                            <td key={p} className={`py-1.5 px-2 text-center ${
                              bad ? "text-red-600 font-bold" : good ? "text-emerald-600 font-semibold" : "text-slate-400"
                            }`}>
                              {v || "·"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Dangerous confusions */}
            {metrics.dangerous.length > 0 && (
              <section>
                <p className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-3">
                  ⚠ Missed emergencies (urgent → normal)
                </p>
                <div className="space-y-2">
                  {metrics.dangerous.map((d, i) => (
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
