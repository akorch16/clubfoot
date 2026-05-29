import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { phases } from "../../data/phases";

const phase = phases.find((p) => p.id === "casting");

const keyFacts = [
  "5–8 casts total",
  "Weekly appointments",
  "~80% need tenotomy",
  "Plaster casts",
  "No sedation required",
  "Starts within weeks of birth",
];

export default function CastingV1() {
  const navigate = useNavigate();
  const [openTip, setOpenTip] = useState(null);

  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Sky header */}
      <div className="bg-sky-500 px-5 pt-10 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-sky-100 text-sm mb-5 flex items-center gap-1.5 active:opacity-70"
        >
          ← Back
        </button>
        <span className="text-6xl block mb-3 leading-none">{phase.emoji}</span>
        <h1 className="text-3xl font-bold text-white leading-tight">{phase.label}</h1>
        <p className="text-sky-100 text-sm mt-2 leading-relaxed">{phase.description}</p>
        <span className="inline-block mt-4 bg-sky-400/40 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          5–8 weeks
        </span>
      </div>

      <div className="px-4 pt-6 pb-12 space-y-6">

        {/* Key facts horizontal scroll */}
        <div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Key facts</p>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4">
            {keyFacts.map((f) => (
              <span
                key={f}
                className="flex-shrink-0 bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-medium px-4 py-2 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Tips accordion */}
        <div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Tips & guidance</p>
          <div className="space-y-2">
            {phase.tips.map((tip, i) => (
              <div key={i} className="bg-neutral-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenTip(openTip === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left active:bg-neutral-700 transition-colors"
                >
                  <p className="font-semibold text-white text-sm pr-4 leading-snug">{tip.title}</p>
                  <svg
                    className={`w-5 h-5 text-sky-400 flex-shrink-0 transition-transform duration-200 ${openTip === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openTip === i && (
                  <div className="px-5 pb-5">
                    <p className="text-neutral-400 text-sm leading-relaxed">{tip.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Warning signs callout */}
        <div className="bg-amber-950/50 border border-amber-700/40 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5 flex-shrink-0">⚠️</span>
            <div>
              <p className="font-semibold text-amber-300 text-sm mb-2">Call your care team if you see:</p>
              <ul className="space-y-1.5 text-sm text-amber-200/80 leading-relaxed">
                <li>• Toes that are blue, purple, or very pale</li>
                <li>• Toes that feel cold to the touch</li>
                <li>• Cast feels wet, soft, or smells bad</li>
                <li>• Baby is inconsolable for several hours</li>
                <li>• Cast slips or spins on the leg</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Resources</p>
          <div className="space-y-2">
            {phase.resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-neutral-800 rounded-2xl px-5 py-4 text-sm text-neutral-200 font-medium active:bg-neutral-700 transition-colors"
              >
                <span className="leading-snug">{r.label}</span>
                <span className="text-neutral-500 ml-3 flex-shrink-0">→</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
