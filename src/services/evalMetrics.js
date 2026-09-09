import { conditionMap } from "../data/conditions";

// Urgency tiers, ordered most→least severe. "meta" covers image_unclear /
// no_relevant_anatomy / other_unlabeled — not a clinical severity.
export const URGENCY_TIERS = ["urgent", "monitor", "normal", "meta"];

// Ground-truth urgency for a labeled condition id.
export function trueUrgency(conditionId) {
  return conditionMap[conditionId]?.urgency ?? "meta";
}

const CONF_BUCKETS = ["high", "medium", "low"];

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
export function computeMetrics(results) {
  const scored = results.filter((r) => r.predicted && !r.error);
  const erroredCount = results.length - scored.length;

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
  };
}
