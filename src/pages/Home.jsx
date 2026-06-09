import { useNavigate } from "react-router-dom";
import { phases } from "../data/phases";

const quickLinks = [
  { label: "The Ponseti Method", to: "/method", icon: "📖", iconBg: "bg-amber-100" },
  { label: "Product Guide", to: "/products", icon: "🛍️", iconBg: "bg-sky-100" },
  { label: "Find a Specialist", to: "/doctors", icon: "📍", iconBg: "bg-violet-100" },
  { label: "Support & Community", to: "/support", icon: "💬", iconBg: "bg-emerald-100" },
];

const phaseColors = {
  prenatal:        "bg-violet-500",
  casting:         "bg-sky-500",
  "boots-and-bar": "bg-teal-500",
  "long-term":     "bg-emerald-500",
};

const script = { fontFamily: "'Pacifico', cursive" };

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <div className="flex items-center gap-3">
          <p style={script} className="text-4xl leading-snug">
            <span style={{ color: "#65abc2" }}>Clubfoot</span>
            <span style={{ color: "#2D3B6E" }}> Club</span>
          </p>
          <img src="/logo.jpg" alt="Clubfoot Club" className="h-12 w-12 rounded-full object-cover" />
        </div>
        <p style={{ fontFamily: "'Dancing Script', cursive", color: "#1e1e1e" }} className="text-2xl leading-snug mt-1">
          Support for every step of the journey
        </p>
      </div>

      <div className="px-4 pb-10 space-y-3">
        {/* Phase label row */}
        <div className="flex items-baseline justify-between pb-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Treatment Phases
          </p>
        </div>

        {/* Full-width stacked phase tiles */}
        {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => navigate(`/phase/${phase.id}`)}
              className={`relative w-full ${phaseColors[phase.id] ?? "bg-slate-500"} rounded-2xl py-5 px-5 text-left overflow-hidden active:scale-95 transition-transform`}
            >
              {/* Ghost emoji texture */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-8xl opacity-[0.12] pointer-events-none select-none leading-none">
                {phase.emoji}
              </span>
              <div className="flex items-center gap-4 relative z-10">
                <span className="text-3xl leading-none">{phase.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white text-lg leading-tight">{phase.label}</p>
                  <p className="text-white/75 text-xs mt-0.5 leading-snug">{phase.description}</p>
                </div>
                <span className="text-white/50 text-2xl font-light flex-shrink-0">›</span>
              </div>
            </button>
        ))}

        {/* Quick links — circle icon grid */}
        <div className="pt-3">
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
        </div>

        {/* Soft encouragement note */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4">
          <p className="text-amber-800 text-sm text-center leading-snug">
            With the Ponseti method, over 95% of children go on to run, play sports, and live without limitations.
          </p>
        </div>
      </div>
    </div>
  );
}
