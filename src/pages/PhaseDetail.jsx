import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const categoryLabel = {
  "clothing": "Clothing",
  "socks": "Socks",
  "braces": "Brace",
  "car-seats": "Car Seat",
  "carriers": "Carrier",
  "strollers": "Stroller",
  "tubs": "Tub",
  "pack-and-play": "Pack & Play",
  "shoes": "Shoes",
  "orthotics": "Orthotics",
};
import { phases } from "../data/phases";
import { products } from "../data/products";
import { phasePhotos } from "../data/phasePhotos";

const phaseColors = {
  prenatal:        "bg-violet-500",
  casting:         "bg-sky-500",
  "boots-and-bar": "bg-teal-500",
  "long-term":     "bg-emerald-500",
};

function TipCard({ tip, allProducts }) {
  const [open, setOpen] = useState(false);
  const linked = (tip.relatedProducts || [])
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-2"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-800 text-sm leading-snug">{tip.title}</span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-slate-600 leading-relaxed">{tip.detail}</p>
          {linked.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Related Products</p>
              <div className="flex flex-col gap-2">
                {linked.map((product) => (
                  <a
                    key={product.id}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2"
                  >
                    <div>
                      <span className="text-sm font-medium text-slate-700">{product.name}</span>
                      <span className="text-xs text-slate-400 ml-2">{product.brand}</span>
                    </div>
                    <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


export default function PhaseDetail() {
  const { phaseId } = useParams();
  const navigate = useNavigate();
  const [photoError, setPhotoError] = useState(false);
  const phase = phases.find((p) => p.id === phaseId);

  if (!phase) {
    return (
      <div className="p-8 text-center">
        <p className="text-slate-400">Phase not found.</p>
        <button onClick={() => navigate("/")} className="mt-4 text-amber-600 text-sm">Go home</button>
      </div>
    );
  }

  const phaseColor = phaseColors[phase.id] ?? "bg-slate-500";
  const photo = phasePhotos[phase.id];
  const scrollRef = useRef(null);

  function scrollCarousel(dir) {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 176, behavior: "smooth" });
    }
  }

  const carouselProducts = phase.featuredProductIds
    ? phase.featuredProductIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)
    : products.filter((p) => phase.productCategories?.includes(p.category)).slice(0, 6);

  return (
    <div>
      {/* Phase-colored header */}
      <div className={`${phaseColor} px-5 pt-10 pb-6`}>
        <button
          onClick={() => navigate(-1)}
          className="text-white/70 text-sm flex items-center gap-1 mb-4 active:text-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="flex items-center gap-3">
          <span className="text-3xl leading-none">{phase.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold text-white leading-tight">{phase.label}</h1>
            <p className="text-white/75 text-sm mt-0.5 leading-relaxed">{phase.description}</p>
          </div>
        </div>
      </div>

      {/* Hero photo */}
      {photo && !photoError && (
        <div className="w-full bg-slate-200">
          <img
            src={photo}
            alt={phase.label}
            className="w-full h-auto"
            onError={() => setPhotoError(true)}
          />
        </div>
      )}

      <div className="px-4 pt-5 pb-10 space-y-5">
        {/* Key Facts */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Key Facts</p>
          {phase.keyPointGroups ? (
            <div className="bg-white rounded-2xl shadow-sm p-5 space-y-5">
              {phase.keyPointGroups.map((group, gi) => (
                <div key={gi}>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{group.heading}</p>
                  <ul className="space-y-3">
                    {group.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <ul className="space-y-3">
                {phase.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Recommended Products Carousel */}
        {carouselProducts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Recommended Products</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCarousel(-1)}
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 active:bg-slate-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollCarousel(1)}
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 active:bg-slate-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button onClick={() => navigate("/products")} className="text-xs text-slate-400 active:text-slate-600 ml-1">See all →</button>
              </div>
            </div>
            <div className="-mx-4 px-4 overflow-x-auto scrollbar-hide" ref={scrollRef}>
              <div className="flex gap-3 pb-2" style={{ width: "max-content" }}>
                {carouselProducts.map((product) => (
                  <a
                    key={product.id}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-40 bg-white rounded-2xl shadow-sm overflow-hidden active:opacity-80 transition-opacity"
                  >
                    <div className="relative w-full h-36 bg-slate-100 overflow-hidden">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl">
                          {product.category === "car-seats" ? "🚗" :
                           product.category === "clothing" ? "👕" :
                           product.category === "socks" ? "🧦" :
                           product.category === "braces" ? "🦾" :
                           product.category === "carriers" ? "🫶" :
                           product.category === "tubs" ? "🛁" : "🛍️"}
                        </div>
                      )}
                      {categoryLabel[product.category] && (
                        <span className="absolute top-2 right-2 text-xs font-semibold bg-white/90 text-slate-600 px-2 py-0.5 rounded-full shadow-sm">
                          {categoryLabel[product.category]}
                        </span>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-semibold text-slate-800 leading-snug line-clamp-2">{product.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{product.brand}</p>
                      {product.price && (
                        <p className="text-sm font-bold mt-1.5" style={{ color: "#2D3B6E" }}>{product.price}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Practical Tips */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Practical Tips</p>
          <div className="space-y-2">
            {phase.tips.map((tip, i) => (
              <TipCard key={i} tip={tip} allProducts={products} />
            ))}
          </div>
        </section>

        {/* External Resources */}
        {phase.resources.length > 0 && <section className="pb-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">External Resources</p>
          <div className="space-y-2">
            {phase.resources.map((res, i) => (
              <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-5 py-4">
                <span className="text-sm font-medium text-slate-700 leading-snug">{res.label}</span>
                <span className="text-slate-400 ml-3 flex-shrink-0">→</span>
              </a>
            ))}
          </div>
        </section>}
      </div>
    </div>
  );
}
