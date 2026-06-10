import { useState } from "react";
import { products, categories } from "../data/products";
import ProductImage from "../components/ProductImage";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-slate-800">Product Guide</h1>
        <p className="text-sky-600 text-sm font-semibold mt-1">Gear that actually works, tested by clubfoot families</p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 px-4 py-3 bg-white border-b border-slate-100 sticky top-0 z-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              activeCategory === cat.id
                ? "bg-amber-400 text-amber-950"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="px-4 pt-4 pb-6 space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">No products match your search.</div>
        )}
        {filtered.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-start gap-3">
              <ProductImage image={product.image} category={product.category} size="md" />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 text-sm leading-snug">{product.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{product.brand}</p>
                    {product.price && (
                      <p className="text-sm font-bold mt-0.5" style={{ color: "#2D3B6E" }}>{product.price}</p>
                    )}
                  </div>
                  {product.url && (
                    <a href={product.url} target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">
                      Shop →
                    </a>
                  )}
                </div>
                {product.bestFor && (
                  <p className="text-xs font-medium text-sky-600 mt-1.5">Best for: {product.bestFor}</p>
                )}
                <p className="text-sm text-slate-600 leading-relaxed mt-1.5">{product.description}</p>
              </div>
            </div>

            {product.tip && (
              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed border-t border-slate-50 pt-2.5"><span className="font-semibold">Tip: </span>{product.tip}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
