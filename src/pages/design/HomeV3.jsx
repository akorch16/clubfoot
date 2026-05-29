import { useNavigate } from "react-router-dom";

const phases = [
  {
    id: "prenatal",
    label: "Prenatal",
    emoji: "🤰",
    description: "Diagnosis, preparation, and finding the right care team.",
    circleColor: "bg-violet-500",
  },
  {
    id: "casting",
    label: "Casting",
    emoji: "🦶",
    description: "5–8 weeks of serial casting to correct the foot.",
    circleColor: "bg-sky-500",
  },
  {
    id: "boots-and-bar",
    label: "Boots & Bar",
    emoji: "👟",
    description: "The brace that holds the correction — years of nights and naps.",
    circleColor: "bg-teal-500",
  },
  {
    id: "long-term",
    label: "Long-term",
    emoji: "🏃",
    description: "After bracing ends — monitoring and life ahead.",
    circleColor: "bg-emerald-500",
  },
];

const quickLinks = [
  { label: "The Method", to: "/method", icon: "📖", iconBg: "bg-amber-100" },
  { label: "Product Guide", to: "/products", icon: "🛍️", iconBg: "bg-sky-100" },
  { label: "Find a Specialist", to: "/doctors", icon: "📍", iconBg: "bg-violet-100" },
  { label: "Support & Community", to: "/support", icon: "💬", iconBg: "bg-emerald-100" },
];

export default function HomeV3() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Header with amber left border */}
      <div className="border-l-4 border-amber-400 pl-5 pr-5 pt-12 pb-8 bg-white">
        <span className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Ponseti Method Guide
        </span>
        <h1 className="text-3xl font-bold text-slate-800 leading-tight">Clubfoot Resources</h1>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
          Everything we wish we'd found sooner — written by parents who've been there.
        </p>
      </div>

      <div className="px-4 pt-2 pb-10 space-y-6">
        {/* Phase list rows */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Treatment Phases</p>
          <div className="space-y-2">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => navigate(`/phase/${phase.id}`)}
                className="w-full bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4 text-left active:scale-95 transition-transform"
              >
                <div className={`w-14 h-14 rounded-full ${phase.circleColor} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl">{phase.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-800 text-sm">{phase.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-snug">{phase.description}</p>
                </div>
                <span className="text-slate-300 text-2xl font-light flex-shrink-0">›</span>
              </button>
            ))}
          </div>
        </section>

        {/* Quick links 2×2 icon grid */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Explore</p>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map(({ label, to, icon, iconBg }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-sm px-3 py-4 active:scale-95 transition-transform text-center"
              >
                <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center`}>
                  <span className="text-2xl">{icon}</span>
                </div>
                <span className="text-xs font-semibold text-slate-600 leading-tight">{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Slim success rate pill */}
        <div className="bg-amber-50 border border-amber-100 rounded-full px-5 py-3 text-center">
          <p className="text-amber-800 font-semibold text-xs">
            95% success rate with Ponseti + brace compliance.
          </p>
        </div>

        {/* Footer text */}
        <p className="text-xs text-slate-400 leading-relaxed pb-4">
          Built by clubfoot parents for clubfoot parents. Covers every phase of the Ponseti journey — from prenatal diagnosis through long-term follow-up — with vetted product picks, specialist finder, community links, and real answers to the questions we all had.
        </p>
      </div>
    </div>
  );
}
