import { useState } from "react";
import { conditionMap } from "../data/conditions";

const urgencyStyles = {
  urgent: {
    border: "border-red-200",
    bg: "bg-red-50",
    badge: "bg-red-600 text-white",
    text: "text-red-800",
    sub: "text-red-600",
    label: "URGENT — Contact your care team",
  },
  monitor: {
    border: "border-amber-200",
    bg: "bg-amber-50",
    badge: "bg-amber-500 text-white",
    text: "text-amber-800",
    sub: "text-amber-600",
    label: "Worth monitoring",
  },
  normal: {
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    badge: "bg-emerald-600 text-white",
    text: "text-emerald-800",
    sub: "text-emerald-600",
    label: "Looks normal",
  },
  meta: {
    border: "border-slate-200",
    bg: "bg-slate-50",
    badge: "bg-slate-500 text-white",
    text: "text-slate-700",
    sub: "text-slate-500",
    label: "Unable to assess",
  },
};

const confidenceLabel = { high: "High confidence", medium: "Medium confidence", low: "Low confidence — consider retaking the photo" };

export default function DiagnosisResult({ diagnosis }) {
  const [messageOpen, setMessageOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const condition = conditionMap[diagnosis.primaryCondition] ?? conditionMap["image_unclear"];
  const urgency = diagnosis.urgency ?? condition.urgency;
  const style = urgencyStyles[urgency] ?? urgencyStyles.meta;

  const secondaryConditions = (diagnosis.secondaryConditions ?? [])
    .map((id) => conditionMap[id])
    .filter(Boolean);

  function copyMessage() {
    navigator.clipboard.writeText(diagnosis.careTeamMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className={`rounded-2xl border ${style.border} ${style.bg} overflow-hidden`}>
      <div className={`px-4 py-2.5 ${style.badge}`}>
        <span className="text-xs font-bold uppercase tracking-wide">{style.label}</span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className={`text-lg font-bold ${style.text}`}>{condition.label}</p>
          {diagnosis.reasoning && (
            <p className={`text-sm mt-1 leading-relaxed ${style.sub}`}>{diagnosis.reasoning}</p>
          )}
        </div>
        {secondaryConditions.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs text-slate-400 self-center">Also noted:</span>
            {secondaryConditions.map((c) => (
              <span key={c.id} className="text-xs bg-white/70 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                {c.label}
              </span>
            ))}
          </div>
        )}
        <div className="bg-white/60 rounded-xl px-4 py-3">
          <p className="text-sm font-semibold text-slate-700 mb-0.5">What to do</p>
          <p className="text-sm text-slate-600 leading-relaxed">{condition.actionText}</p>
        </div>
        {diagnosis.careTeamMessage && (
          <div>
            <button onClick={() => setMessageOpen(!messageOpen)}
              className="text-sm font-medium text-slate-600 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {messageOpen ? "Hide" : "Show"} suggested message for care team
            </button>
            {messageOpen && (
              <div className="mt-2 bg-white rounded-xl p-3 border border-slate-200">
                <p className="text-sm text-slate-600 leading-relaxed italic">"{diagnosis.careTeamMessage}"</p>
                <button onClick={copyMessage} className="mt-2 text-xs font-semibold text-amber-600 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {copied ? "Copied!" : "Copy to clipboard"}
                </button>
              </div>
            )}
          </div>
        )}
        <p className="text-xs text-slate-400">{confidenceLabel[diagnosis.confidence] ?? "Confidence unknown"}</p>
      </div>
      <div className="px-4 pb-4">
        <p className="text-xs text-slate-400 leading-relaxed bg-white/50 rounded-xl px-3 py-2">
          This assessment is AI-generated and is <strong>not medical advice</strong>. Always consult your care team for any concerns about your child's treatment.
        </p>
      </div>
    </div>
  );
}
