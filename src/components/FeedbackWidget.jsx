import { useState } from "react";
import { conditions } from "../data/conditions";
import { saveFeedback, getFeedbackCount } from "../services/feedback";

export default function FeedbackWidget({ diagnosis, imageDataUrl, onSubmitted }) {
  const [step, setStep] = useState("prompt");
  const [correction, setCorrection] = useState("");
  const [correctionNote, setCorrectionNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const count = getFeedbackCount();

  async function submit(feedback, correctionId = null) {
    setSubmitting(true);
    await saveFeedback(imageDataUrl, diagnosis, {
      feedback,
      correction: correctionId || null,
      correctionNote: correctionNote.trim() || null,
      source: "user_capture",
    });
    setSubmitting(false);
    setStep("done");
    onSubmitted?.();
  }

  if (step === "done") {
    return (
      <div className="bg-neutral-800 rounded-2xl p-4 text-center">
        <p className="text-sm font-semibold text-neutral-300">Thank you for your feedback</p>
        <p className="text-xs text-neutral-500 mt-1">
          {getFeedbackCount()} assessment{getFeedbackCount() !== 1 ? "s" : ""} contributed
        </p>
      </div>
    );
  }

  if (step === "correction") {
    const correctable = conditions.filter((c) => c.domain !== "meta");
    return (
      <div className="bg-neutral-800 rounded-2xl p-4 space-y-3">
        <p className="text-sm font-semibold text-neutral-300">What should it have been?</p>
        <div className="grid grid-cols-1 gap-1.5 max-h-52 overflow-y-auto pr-1">
          {correctable.map((c) => (
            <button
              key={c.id}
              onClick={() => setCorrection(c.id)}
              className={`text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                correction === c.id
                  ? "bg-violet-500 text-white"
                  : "bg-neutral-700 text-neutral-300 border border-neutral-600"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <textarea
          value={correctionNote}
          onChange={(e) => setCorrectionNote(e.target.value.slice(0, 500))}
          placeholder="Optional: anything else the AI missed? (max 500 chars)"
          rows={2}
          className="w-full text-sm rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 placeholder-neutral-600 px-3 py-2 resize-none outline-none focus:border-neutral-500"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setStep("prompt")}
            className="flex-1 py-2.5 rounded-xl border border-neutral-600 text-neutral-400 text-sm font-medium"
          >
            Back
          </button>
          <button
            onClick={() => submit("not_helpful", correction)}
            disabled={!correction || submitting}
            className="flex-1 py-2.5 rounded-xl bg-violet-500 text-white text-sm font-semibold disabled:opacity-40 active:scale-95 transition-transform"
          >
            {submitting ? "Saving…" : "Submit"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800 rounded-2xl p-4">
      <p className="text-sm font-semibold text-neutral-300 mb-3">Was this assessment helpful?</p>
      <div className="flex gap-3">
        <button
          onClick={() => submit("helpful")}
          disabled={submitting}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-700 border border-neutral-600 text-neutral-200 font-medium text-sm active:bg-neutral-600 transition-colors"
        >
          <span className="text-lg">👍</span> Yes, looks right
        </button>
        <button
          onClick={() => setStep("correction")}
          disabled={submitting}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-700 border border-neutral-600 text-neutral-200 font-medium text-sm active:bg-neutral-600 transition-colors"
        >
          <span className="text-lg">👎</span> Seems wrong
        </button>
      </div>
      {count > 0 && (
        <p className="text-xs text-neutral-600 text-center mt-2">
          {count} assessment{count !== 1 ? "s" : ""} contributed
        </p>
      )}
    </div>
  );
}
