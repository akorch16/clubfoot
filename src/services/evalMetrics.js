import { conditionMap } from "../data/conditions";

// Urgency tiers, ordered most→least severe. "meta" covers image_unclear /
// no_relevant_anatomy / other_unlabeled — not a clinical severity.
export const URGENCY_TIERS = ["urgent", "monitor", "normal", "meta"];

// Ground-truth urgency for a labeled condition id.
export function trueUrgency(conditionId) {
  return conditionMap[conditionId]?.urgency ?? "meta";
}

const CONF_BUCKETS = ["high", "medium", "low"];

// Models to A/B, with per-1M-token pricing (USD). Prices as of 2026-05.
export const EVAL_MODELS = [
  { id: "claude-haiku-4-5",  label: "Haiku 4.5",  inPer1M: 1.0, outPer1M: 5.0 },
  { id: "claude-sonnet-4-6", label: "Sonnet 4.6", inPer1M: 3.0, outPer1M: 15.0 },
  { id: "claude-opus-4-8",   label: "Opus 4.8",   inPer1M: 5.0, outPer1M: 25.0 },
];

export const PRICING = Object.fromEntries(EVAL_MODELS.map((m) => [m.id, m]));

/**
 * Pure eval scoring — no React, no I/O — so it's testable and reusable.
 *
 * results: [{ correction: <true condition id>,
 *             predicted: <model response object | null>,
 *             error: <string | null> }]
 *
 * The headline metric for a triage tool is NOT overall accuracy — it's the
 * false-negative rate on urgent cases (how often a truly-urgent photo was
 * called non-urgent). A missed emergency is far worse than an over-flag.
 */
export function computeMetrics(results, pricing = null) {
  const scored = results.filter((r) => r.predicted && !r.error);
  const erroredCount = results.length - scored.length;

  // --- Cost + latency (from token usage, when available) ---
  let totalCost = null;
  let avgLatencyMs = null;
  const withUsage = scored.filter((r) => r.usage);
  if (pricing && withUsage.length) {
    totalCost = withUsage.reduce((sum, r) => {
      const inTok = r.usage.input_tokens ?? 0;
      const outTok = r.usage.output_tokens ?? 0;
      return sum + (inTok / 1e6) * pricing.inPer1M + (outTok / 1e6) * pricing.outPer1M;
    }, 0);
  }
  const withLatency = scored.filter((r) => typeof r.latencyMs === "number");
  if (withLatency.length) {
    avgLatencyMs = withLatency.reduce((s, r) => s + r.latencyMs, 0) / withLatency.length;
  }
  const avgCost = totalCost != null && withUsage.length ? totalCost / withUsage.length : null;

  // --- Overall condition accuracy (secondary metric) ---
  const correctCondition = scored.filter(
    (r) => r.predicted.primaryCondition === r.correction
  ).length;
  const conditionAccuracy = scored.length ? correctCondition / scored.length : null;

  // --- HEADLINE: urgent false-negative rate ---
  const trueUrgent = scored.filter((r) => trueUrgency(r.correction) === "urgent");
  const urgentMissed = trueUrgent.filter((r) => r.predicted.urgency !== "urgent");
  const urgentFNR = trueUrgent.length ? urgentMissed.length / trueUrgent.length : null;

  // --- Urgency confusion matrix (rows = true tier, cols = predicted tier) ---
  const urgencyConfusion = {};
  for (const t of URGENCY_TIERS) {
    urgencyConfusion[t] = Object.fromEntries(URGENCY_TIERS.map((p) => [p, 0]));
  }
  for (const r of scored) {
    const tt = trueUrgency(r.correction);
    const pt = URGENCY_TIERS.includes(r.predicted.urgency) ? r.predicted.urgency : "meta";
    urgencyConfusion[tt][pt] += 1;
  }

  // --- Calibration check: is "high confidence" actually more accurate? ---
  // If high-conf isn't reliably more correct than low-conf, the confidence
  // field is decorative, not real.
  const calibration = Object.fromEntries(
    CONF_BUCKETS.map((c) => [c, { total: 0, correct: 0 }])
  );
  for (const r of scored) {
    const c = CONF_BUCKETS.includes(r.predicted.confidence) ? r.predicted.confidence : "low";
    calibration[c].total += 1;
    if (r.predicted.primaryCondition === r.correction) calibration[c].correct += 1;
  }

  // --- Dangerous confusions: truly urgent → predicted "normal" ---
  const dangerous = trueUrgent
    .filter((r) => r.predicted.urgency === "normal")
    .map((r) => ({
      correction: r.correction,
      predicted: r.predicted.primaryCondition,
      note: r.note ?? null,
    }));

  // --- Stratification: label counts per true urgency tier ---
  // Surfaces the imbalance a random sample would hide — urgent cases are rare
  // and are exactly the ones we most need represented.
  const tierCounts = Object.fromEntries(URGENCY_TIERS.map((t) => [t, 0]));
  for (const r of results) tierCounts[trueUrgency(r.correction)] += 1;

  return {
    total: results.length,
    scored: scored.length,
    erroredCount,
    conditionAccuracy,
    correctCondition,
    urgentFNR,
    trueUrgentCount: trueUrgent.length,
    urgentMissedCount: urgentMissed.length,
    urgencyConfusion,
    calibration,
    dangerous,
    tierCounts,
    totalCost,
    avgCost,
    avgLatencyMs,
  };
}
