import { useNavigate } from "react-router-dom";

const phases = [
  {
    id: "prenatal",
    label: "Prenatal",
    emoji: "🤰",
    description: "Diagnosis, preparation, and finding care.",
    gradient: "from-violet-100 to-violet-200",
    titleColor: "text-violet-700",
    bodyColor: "text-violet-500/80",
  },
  {
    id: "casting",
    label: "Casting",
    emoji: "🦶",
    description: "5–8 weeks of serial casting.",
    gradient: "from-sky-100 to-sky-200",
    titleColor: "text-sky-700",
    bodyColor: "text-sky-500/80",
  },
  {
    id: "boots-and-bar",
    label: "Boots & Bar",
    emoji: "👟",
    description: "The brace that holds the correction.",
    gradient: "from-teal-100 to-teal-200",
    titleColor: "text-teal-700",
    bodyColor: "text-teal-500/80",
  },
  {
    id: "long-term",
    label: "Long-term",
    emoji: "🏃",
    description: "After bracing ends — life ahead.",
    gradient: "from-emerald-100 to-emerald-200",
    titleColor: "text-emerald-700",
    bodyColor: "text-emerald-500/80",
  },
];

const quickLinks = [
  { label: "The Method", to: "/method", icon: "📖" },
  { label: "Product Guide", to: "/products", icon: "🛍️" },
  { label: "Find a Specialist", to: "/doctors", icon: "📍" },
  { label: "Support & Community", to: "/support", icon: "💬" },
];

const stripColors = ["bg-violet-400", "bg-sky-400", "bg-teal-400", "bg-emerald-400"];

export default function HomeV2() {
  const navigate = useNavigate();

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Rainbow color strip */}
      <div className="flex h-1.5">
        {stripColors.map((c) => (
          <div key={c} className={`flex-1 ${c}`} />
        ))}
      </div>

      {/* Header */}
      <div className="bg-white px-5 pt-8 pb-6">
        <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Ponseti Method Guide
        </span>
        <h1 className="text-3xl font-bold text-stone-800 leading-tight">Clubfoot Resources</h1>
        <p className="text-stone-500 text-sm mt-2 leading-relaxed">
          Everything we wish we'd found sooner — written by parents who've been there.
        </p>
      </div>

      <div className="px-4 pt-5 pb-10 space-y-6">
        {/* Phase grid — pastel cards */}
        <section>
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Treatment Phases</p>
          <div className="grid grid-cols-2 gap-3">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => navigate(`/phase/${phase.id}`)}
                className={`bg-gradient-to-br ${phase.gradient} rounded-3xl p-4 text-left active:scale-95 transition-transform`}
              >
                <span className="text-2xl block mb-2">{phase.emoji}</span>
                <p className={`font-bold text-sm ${phase.titleColor}`}>{phase.label}</p>
                <p className={`text-xs mt-1 leading-snug line-clamp-2 ${phase.bodyColor}`}>{phase.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Horizontal scroll pill quick links */}
        <section>
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Explore</p>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4">
            {quickLinks.map(({ label, to, icon }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className="flex-shrink-0 flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2.5 active:scale-95 transition-transform shadow-sm"
              >
                <span className="text-lg">{icon}</span>
                <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Encouragement callout */}
        <section className="bg-amber-50 border border-amber-100 rounded-3xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">💛</span>
            <div>
              <p className="font-bold text-amber-800 text-sm mb-1">A note for new parents</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                A clubfoot diagnosis can feel overwhelming. The Ponseti method corrects over 95% of cases without major surgery. Thousands of families have walked this road — and a remarkable community is ready to help you.
              </p>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <p className="text-xs text-stone-400 leading-relaxed text-center pb-2">
          Built by clubfoot parents for clubfoot parents. Every phase of the Ponseti journey — from prenatal diagnosis through long-term follow-up.
        </p>
      </div>
    </div>
  );
}
