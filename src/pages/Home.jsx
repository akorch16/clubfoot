import { useNavigate } from "react-router-dom";
import { phases } from "../data/phases";
import { doctors } from "../data/doctors";

const phaseAccent = {
  prenatal:        { dot: "bg-violet-500",  ring: "hover:border-violet-300",  text: "text-violet-600" },
  casting:         { dot: "bg-sky-500",     ring: "hover:border-sky-300",     text: "text-sky-600" },
  "boots-and-bar": { dot: "bg-teal-500",    ring: "hover:border-teal-300",    text: "text-teal-600" },
  "long-term":     { dot: "bg-emerald-500", ring: "hover:border-emerald-300", text: "text-emerald-600" },
};

const explore = [
  { label: "The Ponseti Method", desc: "How treatment works, start to finish", to: "/method", icon: "📖", bg: "bg-amber-100" },
  { label: "Product Guide", desc: "Curated gear for every phase", to: "/products", icon: "🛍️", bg: "bg-sky-100" },
  { label: "Find a Specialist", desc: "Ponseti-trained doctors near you", to: "/doctors", icon: "📍", bg: "bg-violet-100" },
  { label: "Support & Community", desc: "Groups, resources, and real families", to: "/support", icon: "💬", bg: "bg-rose-100" },
];

const script = { fontFamily: "'Pacifico', cursive" };
const NAVY = "#2D3B6E";
const TEAL = "#65abc2";

const totalDoctors = doctors.length;
const totalCountries = new Set(doctors.map((d) => d.country || "United States")).size;

const stats = [
  { value: "95%+", label: "corrected without surgery" },
  { value: totalDoctors.toString(), label: "Ponseti-trained specialists" },
  { value: totalCountries.toString(), label: "countries in our directory" },
  { value: "1 in 1,000", label: "babies born with clubfoot" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* ── Mobile brand header (desktop uses the top nav) ── */}
      <div className="md:hidden px-5 pt-10 pb-2">
        <div className="flex items-center gap-3">
          <p style={script} className="text-4xl leading-snug">
            <span style={{ color: TEAL }}>Clubfoot</span>
            <span style={{ color: NAVY }}> Club</span>
          </p>
          <img src="/logo.jpg" alt="Clubfoot Club" className="h-12 w-12 rounded-full object-cover" />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-stone-50 to-stone-50 md:from-sky-50/80 md:via-stone-50" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-6 pt-4 md:pt-10 pb-10 md:pb-24">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-10 items-center">
            {/* Copy */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight" style={{ color: NAVY }}>
                Support for every step of clubfoot treatment.
              </h1>
              <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                Clear guidance for every phase, an AI tool to help you spot cast and brace problems early, curated gear, and a directory of Ponseti-trained specialists. Built by a clubfoot family.
              </p>
              <div className="mt-8">
                <a
                  href="#journey"
                  className="inline-block px-6 py-3.5 rounded-full text-white font-semibold text-sm active:scale-95 md:hover:scale-[1.03] transition-transform shadow-sm text-center"
                  style={{ backgroundColor: NAVY }}
                >
                  Explore the journey
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-100 overflow-hidden aspect-[3/4] max-w-sm mx-auto md:mx-0">
                <img src="/clubfoot-pic.jpg" alt="A baby smiling while wearing a foot abduction brace" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg ring-1 ring-slate-100 px-5 py-3">
                <p className="text-2xl font-extrabold" style={{ color: TEAL }}>Non-surgical</p>
                <p className="text-xs text-slate-500">in the vast majority of cases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Journey ── */}
      <section id="journey" className="max-w-6xl mx-auto px-5 md:px-6 py-10 md:py-16 scroll-mt-20">
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">The Journey</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1" style={{ color: NAVY }}>Four phases, one step at a time</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => {
            const accent = phaseAccent[phase.id] ?? { dot: "bg-slate-400", ring: "hover:border-slate-300", text: "text-slate-600" };
            return (
              <button
                key={phase.id}
                onClick={() => navigate(`/phase/${phase.id}`)}
                className={`group text-left bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all active:scale-[0.98] md:hover:-translate-y-1 md:hover:shadow-md ${accent.ring}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl leading-none">{phase.emoji}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${accent.dot}`} />
                </div>
                <p className="font-bold text-lg leading-tight" style={{ color: NAVY }}>{phase.label}</p>
                <p className="text-sm text-slate-500 mt-1 leading-snug">{phase.description}</p>
                <span className={`inline-block mt-4 text-sm font-semibold ${accent.text}`}>
                  Explore <span className="transition-transform group-hover:translate-x-0.5 inline-block">→</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Stat band ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-10 md:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs md:text-sm text-white/70 mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 py-10 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Explore</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map(({ label, desc, to, icon, bg }) => (
            <button
              key={to}
              onClick={() => navigate(to)}
              className="group text-left bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all active:scale-[0.98] md:hover:-translate-y-1 md:hover:shadow-md"
            >
              <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-4`}>
                <span className="text-2xl">{icon}</span>
              </div>
              <p className="font-semibold text-slate-800">{label}</p>
              <p className="text-sm text-slate-500 mt-1 leading-snug">{desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ── Reassurance / closing ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 pb-16">
        <div className="rounded-3xl bg-amber-50 border border-amber-100 p-8 md:p-12 text-center">
          <p className="text-lg md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto" style={{ color: NAVY }}>
            If you just got a diagnosis, take a breath. This is one of the most treatable conditions in pediatric orthopedics, and thousands of families have done this before you.
          </p>
          <button
            onClick={() => navigate("/phase/prenatal")}
            className="mt-6 px-6 py-3 rounded-full text-white font-semibold text-sm active:scale-95 md:hover:scale-[1.03] transition-transform"
            style={{ backgroundColor: TEAL }}
          >
            Start with a prenatal diagnosis
          </button>
        </div>
      </section>
    </div>
  );
}
