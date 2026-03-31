const categoryIcons = {
  clothing:      { icon: "👕", bg: "bg-violet-50",  text: "text-violet-400" },
  socks:         { icon: "🧦", bg: "bg-blue-50",    text: "text-blue-400" },
  braces:        { icon: "🦶", bg: "bg-teal-50",    text: "text-teal-400" },
  "car-seats":   { icon: "🚗", bg: "bg-amber-50",   text: "text-amber-400" },
  carriers:      { icon: "🫶", bg: "bg-rose-50",    text: "text-rose-400" },
  strollers:     { icon: "🍼", bg: "bg-sky-50",     text: "text-sky-400" },
  tubs:          { icon: "🛁", bg: "bg-cyan-50",    text: "text-cyan-400" },
  "pack-and-play":{ icon: "🛏️", bg: "bg-indigo-50", text: "text-indigo-400" },
  shoes:         { icon: "👟", bg: "bg-green-50",   text: "text-green-400" },
  orthotics:     { icon: "🩺", bg: "bg-slate-100",  text: "text-slate-400" },
};

export default function ProductImage({ image, category, size = "md" }) {
  const dim = size === "sm" ? "w-14 h-14" : "w-20 h-20";
  const iconSize = size === "sm" ? "text-2xl" : "text-3xl";
  const { icon, bg, text } = categoryIcons[category] ?? { icon: "📦", bg: "bg-slate-100", text: "text-slate-400" };

  if (image) {
    return (
      <div className={`${dim} rounded-xl overflow-hidden flex-shrink-0 bg-slate-100`}>
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
        />
        {/* fallback shown if image fails to load */}
        <div className={`w-full h-full ${bg} hidden items-center justify-center`}>
          <span className={`${iconSize} ${text}`}>{icon}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${dim} rounded-xl flex-shrink-0 ${bg} flex items-center justify-center`}>
      <span className={`${iconSize}`}>{icon}</span>
    </div>
  );
}
