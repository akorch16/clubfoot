import { useNavigate } from "react-router-dom";
import { phases } from "../data/phases";

const quickLinks = [
  { label: "Product Guide", to: "/products", color: "bg-blue-100 text-blue-700" },
  { label: "Find a Specialist", to: "/doctors", color: "bg-teal-100 text-teal-700" },
  { label: "Support & Community", to: "/support", color: "bg-rose-100 text-rose-700" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-5 pt-12 pb-8">
        <h1 className="text-2xl font-bold text-white leading-snug">
          Clubfoot Resources
        </h1>
        <p className="text-blue-100 text-sm mt-1">
          Everything we wish we'd found sooner
        </p>
      </div>

      <div className="px-4 pt-5 space-y-6">
        {/* Phase Cards 2x2 grid */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
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
                <div className="text-white/80 text-xs mt-1 leading-snug line-clamp-2">
                  {phase.description}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Quick Links
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {quickLinks.map(({ label, to, color }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold ${color} active:scale-95 transition-transform`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Encouragement Card */}
        <section>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💛</span>
              <div>
                <p className="font-semibold text-amber-800 text-sm">
                  You've got this
                </p>
                <p className="text-amber-700 text-sm mt-1 leading-relaxed">
                  A clubfoot diagnosis can feel overwhelming. But with the Ponseti method and the right support, the vast majority of children go on to live completely normal, active lives. Thousands of families have walked this road — and they're ready to help you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="pb-4">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="font-semibold text-gray-800 mb-2">About this app</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              This resource was built by clubfoot parents for clubfoot parents. It covers every phase of the Ponseti journey — from prenatal diagnosis through long-term follow-up — with practical product recommendations, specialist finder, community links, and answers to the questions we all had.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
