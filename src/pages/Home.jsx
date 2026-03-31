import { useNavigate } from "react-router-dom";
import { phases } from "../data/phases";

const quickLinks = [
  { label: "Product Guide", to: "/products", icon: "🛍️" },
  { label: "Find a Specialist", to: "/doctors", icon: "📍" },
  { label: "Support & Community", to: "/support", icon: "💬" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Warm Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-5 pt-12 pb-8">
        <span className="inline-block bg-amber-400/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4">
          Ponseti Method Guide
        </span>
        <h1 className="text-3xl font-bold text-white leading-snug">
          Clubfoot Resources
        </h1>
        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          Everything we wish we'd found sooner —<br />written by parents who've been there.
        </p>
        <div className="mt-5 bg-white/8 rounded-2xl p-4 border border-white/10">
          <p className="text-slate-200 text-sm leading-relaxed italic">
            "With the Ponseti method, over 95% of children treated go on to run, play sports, and live without limitations. You've got this."
          </p>
        </div>
      </div>

      <div className="px-4 pt-5 space-y-6">
        {/* Phase Cards */}
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
            Treatment Phases
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => navigate(`/phase/${phase.id}`)}
                className={`bg-gradient-to-br ${phase.gradient} rounded-2xl p-4 text-left shadow-sm active:scale-95 transition-transform`}
              >
                <div className="text-2xl mb-2">{phase.emoji}</div>
                <div className="text-white font-semibold text-base">{phase.label}</div>
                <div className="text-white/75 text-xs mt-1 leading-snug line-clamp-2">
                  {phase.description}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
            Explore
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {quickLinks.map(({ label, to, icon }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className="flex flex-col items-center gap-2 bg-white rounded-2xl px-3 py-4 shadow-sm active:scale-95 transition-transform text-center"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-xs font-semibold text-slate-600 leading-tight">{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Encouragement Card */}
        <section>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">💛</span>
              <div>
                <p className="font-semibold text-amber-800 text-sm mb-1">
                  A note for new parents
                </p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  A clubfoot diagnosis can feel overwhelming. The Ponseti method corrects over 95% of cases without major surgery. Thousands of families have walked this road — and a remarkable community is ready to help you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="pb-4">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="font-semibold text-slate-800 text-sm mb-2">About this guide</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Built by clubfoot parents for clubfoot parents. Covers every phase of the Ponseti journey — from prenatal diagnosis through long-term follow-up — with vetted product picks, specialist finder, community links, and real answers to the questions we all had.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
