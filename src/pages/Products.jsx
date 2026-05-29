import { useState } from "react";
import { products, categories } from "../data/products";

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <span className="inline-block bg-sky-400/20 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Community-vetted
        </span>
        <h1 className="text-2xl font-bold text-white">Product Guide</h1>
        <p className="text-neutral-400 text-sm mt-1">
          Gear that actually works — tested by clubfoot families
        </p>
        <div className="mt-4 relative">
          <svg
            className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder='Try "socks" or "sleep sack"...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl pl-9 pr-4 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 outline-none focus:border-neutral-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-neutral-900 border-b border-neutral-800 sticky top-0 z-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              activeCategory === cat.id
                ? "bg-amber-400 text-amber-950"
                : "bg-neutral-800 text-neutral-400 border border-neutral-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="px-4 pt-4 pb-6 space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-neutral-500 text-sm">
            No products match your search.
          </div>
        )}
        {filtered.map((product) => (
          <div key={product.id} className="bg-neutral-800 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-100 text-sm leading-snug">{product.name}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{product.brand}</p>
                  </div>
                  <span
                    className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${
                      product.status === "works"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {product.status === "works" ? "Works" : "Check Fit"}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed mt-2">{product.summary}</p>
              </div>
            </div>

            {product.notes && (
              <p className="text-xs text-neutral-500 mt-2.5 leading-relaxed border-t border-neutral-700 pt-2.5">
                {product.notes}
              </p>
            )}

            <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-neutral-700">
              <div className="flex flex-wrap gap-1.5">
                {product.phases.map((phase) => (
                  <span
                    key={phase}
                    className="text-xs bg-neutral-700 text-neutral-400 px-2 py-0.5 rounded-full capitalize"
                  >
                    {phase.replace("-", " ")}
                  </span>
                ))}
              </div>
              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-lg ml-2"
                >
                  Shop →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
