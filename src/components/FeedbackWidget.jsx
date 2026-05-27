import { useState } from "react";
import { conditions } from "../data/conditions";
import { saveFeedback, getFeedbackCount } from "../services/feedback";

export default function FeedbackWidget({ diagnosis, imageDataUrl, onSubmitted }) {
  const [step, setStep] = useState("prompt"); // "prompt" | "correction" | "done"
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
      <div className="bg-slate-50 rounded-2xl p-4 text-center">
        <p className="text-sm font-semibold text-slate-700">Thank you for your feedback</p>
        <p className="text-xs text-slate-400 mt-1">
          {getFeedbackCount()} assessment{getFeedbackCount() !== 1 ? "s" : ""} contributed
        </p>
      </div>
    );
  }

  if (step === "correction") {
    // Filter out meta conditions — not useful as corrections
    const correctable = conditions.filter((c) => c.domain !== "meta");

    return (
      <div className="bg-slate-50 rounded-2xl p-4 space-y-3">
        <p className="text-sm font-semibold text-slate-700">What should it have been?</p>
        <div className="grid grid-cols-1 gap-1.5 max-h-52 overflow-y-auto pr-1">
          {correctable.map((c) => (
            <button
              key={c.id}
              onClick={() => setCorrection(c.id)}
              className={`text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                correction === c.id
                  ? "bg-slate-800 text-white"
                  : "bg-white text-slate-700 border border-slate-200"
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
          className="w-full text-sm rounded-xl border border-slate-200 px-3 py-2 resize-none outline-none focus:border-slate-400"
        />
        <div className="flex gap-2">
          <button onClick={() => setStep("prompt")} className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-600 text-sm font-medium">
            Back
          </button>
          <button
            onClick={() => submit("not_helpful", correction)}
            disabled={!correction || submitting}
            className="flex-1 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold disabled:opacity-40"
          >
            {submitting ? "Saving…" : "Submit"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 rounded-2xl p-4">
      <p className="text-sm font-semibold text-slate-700 mb-3">Was this assessment helpful?</p>
      <div className="flex gap-3">
        <button
          onClick={() => submit("helpful")}
          disabled={submitting}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium text-sm active:bg-slate-100"
        >
          <span className="text-lg">👍</span> Yes, looks right
        </button>
        <button
          onClick={() => setStep("correction")}
          disabled={submitting}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium text-sm active:bg-slate-100"
        >
          <span className="text-lg">👎</span> Seems wrong
        </button>
      </div>
      {count > 0 && (
        <p className="text-xs text-slate-400 text-center mt-2">
          {count} assessment{count !== 1 ? "s" : ""} contributed
        </p>
      )}
    </div>
  );
}
