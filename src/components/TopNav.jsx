import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/method", label: "The Method" },
  { to: "/products", label: "Products" },
  { to: "/doctors", label: "Find a Doctor" },
  { to: "/support", label: "Support" },
  { to: "/scan", label: "Scan & Assess" },
];

const script = { fontFamily: "'Pacifico', cursive" };

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
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? "text-slate-900 bg-slate-100" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
