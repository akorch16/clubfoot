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
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-5 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-white">Product Guide</h1>
        <p className="text-blue-100 text-sm mt-1">
          Community-tested gear for every phase
        </p>
        <div className="mt-4 relative">
          <svg
            className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide border-b border-gray-100 bg-white sticky top-0 z-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="px-4 pt-4 pb-4 space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">
            No products match your search.
          </div>
        )}
        {filtered.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <p className="font-semibold text-gray-800 text-sm">{product.name}</p>
                <p className="text-xs text-gray-500">{product.brand}</p>
              </div>
              <span
                className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  product.status === "works"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {product.status === "works" ? "Works" : "Check Fit"}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{product.summary}</p>
            {product.notes && (
              <p className="text-xs text-gray-500 mt-2 leading-relaxed italic">{product.notes}</p>
            )}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {product.phases.map((phase) => (
                <span
                  key={phase}
                  className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full capitalize"
                >
                  {phase.replace("-", " ")}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
