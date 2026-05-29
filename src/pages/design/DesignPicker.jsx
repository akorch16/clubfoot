import { useNavigate } from "react-router-dom";

const options = [
  {
    label: "Bold Blocks",
    tagline: "Dark, energetic, decisive — Huckleberry-inspired",
    route: "/design/v1",
    bg: "bg-neutral-950",
    labelColor: "text-white",
    taglineColor: "text-neutral-400",
    accent: "bg-sky-500",
  },
  {
    label: "Warm & Playful",
    tagline: "Light, warm, approachable — Lovevery-inspired",
    route: "/design/v2",
    bg: "bg-stone-50",
    labelColor: "text-stone-800",
    taglineColor: "text-stone-500",
    accent: "bg-amber-400",
  },
  {
    label: "Clean List",
    tagline: "Clean, icon-forward, utility-meets-delight — BabyList-inspired",
    route: "/design/v3",
    bg: "bg-white",
    labelColor: "text-slate-800",
    taglineColor: "text-slate-500",
    accent: "bg-amber-400",
  },
];

export default function DesignPicker() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 px-4 pt-12 pb-10">
      <div className="mb-8">
        <span className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Design Explorations
        </span>
        <h1 className="text-2xl font-bold text-slate-800">Pick a homepage direction</h1>
        <p className="text-sm text-slate-500 mt-1">Three visual explorations — tap to preview each one.</p>
      </div>

      <div className="space-y-3 mb-6">
        {options.map((opt) => (
          <button
            key={opt.route}
            onClick={() => navigate(opt.route)}
            className={`w-full ${opt.bg} rounded-2xl p-5 text-left shadow-sm border border-slate-200 active:scale-95 transition-transform flex items-center justify-between gap-4`}
          >
            <div className="flex-1 min-w-0">
              <p className={`font-bold text-base ${opt.labelColor}`}>{opt.label}</p>
              <p className={`text-xs mt-0.5 leading-snug ${opt.taglineColor}`}>{opt.tagline}</p>
            </div>
            <div className={`w-8 h-8 rounded-full ${opt.accent} flex-shrink-0`} />
          </button>
        ))}
      </div>

      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Detail page variant</p>
      <button
        onClick={() => navigate("/design/casting")}
        className="w-full bg-sky-500 rounded-2xl p-5 text-left shadow-sm active:scale-95 transition-transform flex items-center justify-between"
      >
        <div>
          <p className="font-bold text-base text-white">Casting — Bold Blocks</p>
          <p className="text-xs mt-0.5 text-sky-100">Phase detail page in the V1 visual language</p>
        </div>
        <span className="text-white text-2xl font-light">›</span>
      </button>
    </div>
  );
}
