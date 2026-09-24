import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { phases } from "../data/phases";

const links = [
  { to: "/method", label: "The Method" },
  { to: "/products", label: "Products" },
  { to: "/doctors", label: "Find a Doctor" },
  { to: "/support", label: "Support" },
  { to: "/scan", label: "Scan & Assess", beta: true },
];

const phaseDot = {
  prenatal:        "bg-violet-500",
  casting:         "bg-sky-500",
  "boots-and-bar": "bg-amber-500",
  "long-term":     "bg-emerald-500",
};

const script = { fontFamily: "'Pacifico', cursive" };

function JourneyDropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = pathname.startsWith("/phase/");

  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
          isActive || open ? "text-slate-900 bg-slate-100" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
        }`}
      >
        The Journey
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 cursor-default"
          />
          <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-2xl shadow-lg ring-1 ring-slate-100 p-2 z-40">
            {phases.map((phase) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => { setOpen(false); navigate(`/phase/${phase.id}`); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-xl leading-none flex-shrink-0">{phase.emoji}</span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-slate-800">{phase.label}</span>
                  <span className="block text-xs text-slate-400 truncate">{phase.description}</span>
                </span>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${phaseDot[phase.id] ?? "bg-slate-300"}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function TopNav() {
  return (
    <header className="hidden md:block sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.jpg" alt="Clubfoot Club" className="h-9 w-9 rounded-full object-cover" />
          <span style={script} className="text-2xl leading-none">
            <span style={{ color: "#65abc2" }}>Clubfoot</span>
            <span style={{ color: "#2D3B6E" }}> Club</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <JourneyDropdown />
          {links.map(({ to, label, beta }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  isActive ? "text-slate-900 bg-slate-100" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`
              }
            >
              {label}
              {beta && (
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-100 text-amber-700">
                  Beta
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
