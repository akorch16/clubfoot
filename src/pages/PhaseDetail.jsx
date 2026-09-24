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
import Cited, { Sources } from "../components/Cited";

const phaseColors = {
  prenatal:        "bg-violet-500",
  casting:         "bg-sky-500",
  "boots-and-bar": "bg-amber-500",
  "long-term":     "bg-emerald-500",
};

const encouragementStyle = {
  prenatal:        "bg-violet-50 border-violet-100",
  casting:         "bg-sky-50 border-sky-100",
  "boots-and-bar": "bg-amber-50 border-amber-100",
  "long-term":     "bg-emerald-50 border-emerald-100",
};

const encouragementHeadline = {
  prenatal:        "text-violet-800",
  casting:         "text-sky-800",
  "boots-and-bar": "text-amber-800",
  "long-term":     "text-emerald-800",
};

function TipCard({ tip, allProducts, sources, large }) {
  const [open, setOpen] = useState(false);
  const linked = (tip.relatedProducts || [])
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button
        className={`w-full text-left px-5 ${large ? "py-5" : "py-4"} flex justify-between items-center gap-2`}
        onClick={() => setOpen(!open)}
      >
        <span className={`font-semibold text-slate-800 leading-snug ${large ? "text-base" : "text-sm"}`}>{tip.title}</span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className={`text-slate-600 leading-relaxed ${large ? "text-base" : "text-sm"}`}><Cited text={tip.detail} sources={sources} /></p>
          {linked.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Related Products</p>
              <div className="flex flex-col gap-2">
                {linked.map((product) => (
                  <a
                    key={product.id}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2 hover:bg-slate-100 transition-colors"
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

function ProductRow({ product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white rounded-2xl shadow-sm p-3 hover:shadow-md transition-shadow"
    >
      <div className="relative w-14 h-14 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xl">
            {product.category === "car-seats" ? "🚗" :
             product.category === "clothing" ? "👕" :
             product.category === "socks" ? "🧦" :
             product.category === "braces" ? "🦾" :
             product.category === "carriers" ? "🫶" :
             product.category === "tubs" ? "🛁" : "🛍️"}
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">{product.name}</p>
        <p className="text-xs text-slate-400 mt-0.5">{product.brand}</p>
      </div>
      {product.price && (
        <p className="text-sm font-bold flex-shrink-0" style={{ color: "#2D3B6E" }}>{product.price}</p>
      )}
    </a>
  );
}

function KeyFacts({ phase, large }) {
  const textSize = large ? "text-base" : "text-sm";
  return (
    <section>
      <p className={`font-semibold text-slate-500 uppercase tracking-widest mb-3 ${large ? "text-sm" : "text-xs"}`}>Key Facts</p>
      {phase.keyPointGroups ? (
        <div className={`bg-white rounded-2xl shadow-sm space-y-5 ${large ? "p-6" : "p-5"}`}>
          {phase.keyPointGroups.map((group, gi) => (
            <div key={gi}>
              <p className={`font-semibold text-slate-500 uppercase tracking-wide mb-2 ${large ? "text-sm" : "text-xs"}`}>{group.heading}</p>
              <ul className="space-y-3">
                {group.points.map((point, i) => (
                  <li key={i} className={`flex items-start gap-3 text-slate-700 ${textSize}`}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-300" />
                    <span><Cited text={point} sources={phase.sources} /></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className={`bg-white rounded-2xl shadow-sm ${large ? "p-6" : "p-5"}`}>
          <ul className="space-y-3">
            {phase.keyPoints.map((point, i) => (
              <li key={i} className={`flex items-start gap-3 text-slate-700 ${textSize}`}>
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-slate-300" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function ProblemCastScenario({ scenario, sources, large }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <button
        className={`w-full text-left px-4 ${large ? "py-4" : "py-3.5"} flex justify-between items-center gap-2`}
        onClick={() => setOpen(!open)}
      >
        <span className={`font-semibold text-slate-800 leading-snug ${large ? "text-base" : "text-sm"}`}>{scenario.title}</span>
        <svg
          className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p className={`text-slate-600 leading-relaxed ${large ? "text-base" : "text-sm"}`}><Cited text={scenario.detail} sources={sources} /></p>
        </div>
      )}
    </div>
  );
}

function ProblemCastModule({ phase, large }) {
  if (!phase.problemCast) return null;
  return (
    <section>
      <div className={`bg-amber-50 border border-amber-200 rounded-2xl ${large ? "p-6" : "p-5"}`}>
        <div className="mb-4">
          <h2 className={`font-bold text-amber-900 ${large ? "text-xl" : "text-lg"}`}>Help! I have a problem with the cast</h2>
          <p className={`text-amber-800 leading-relaxed mt-1 ${large ? "text-base" : "text-sm"}`}>{phase.problemCast.intro}</p>
        </div>
        <div className="space-y-2">
          {phase.problemCast.scenarios.map((scenario, i) => (
            <ProblemCastScenario key={i} scenario={scenario} sources={phase.sources} large={large} />
          ))}
        </div>
        {phase.problemCast.closing && (
          <p className={`text-amber-800 font-medium leading-relaxed mt-4 ${large ? "text-base" : "text-sm"}`}>{phase.problemCast.closing}</p>
        )}
      </div>
    </section>
  );
}

function VideosSection({ phase, large }) {
  if (!phase.videos?.length) return null;
  return (
    <section>
      <p className={`font-semibold text-slate-500 uppercase tracking-widest mb-3 ${large ? "text-sm" : "text-xs"}`}>Videos</p>
      <div className={large ? "grid grid-cols-2 gap-4" : "space-y-3"}>
        {phase.videos.map((video) => (
          <div key={video.youtubeId} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className={`relative w-full ${video.isShort ? "aspect-[9/16] max-w-[320px] mx-auto" : "aspect-video"}`}>
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title || `${phase.label} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            {video.title && <p className="px-4 py-3 text-sm font-medium text-slate-700 leading-snug">{video.title}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function CommonQuestions({ phase, large }) {
  return (
    <section>
      <p className={`font-semibold text-slate-500 uppercase tracking-widest mb-3 ${large ? "text-sm" : "text-xs"}`}>Common Questions</p>
      <div className="space-y-2">
        {phase.tips.map((tip, i) => (
          <TipCard key={i} tip={tip} allProducts={products} sources={phase.sources} large={large} />
        ))}
      </div>
    </section>
  );
}

function ExternalResources({ phase, large }) {
  if (!phase.resources.length) return null;
  return (
    <section className="pb-2">
      <p className={`font-semibold text-slate-500 uppercase tracking-widest mb-3 ${large ? "text-sm" : "text-xs"}`}>External Resources</p>
      <div className="space-y-2">
        {phase.resources.map((res, i) => (
          <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-5 py-4 hover:shadow-md transition-shadow">
            <span className="text-sm font-medium text-slate-700 leading-snug">{res.label}</span>
            <span className="text-slate-400 ml-3 flex-shrink-0">→</span>
          </a>
        ))}
      </div>
    </section>
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
      <div className={`${phaseColor} px-5 md:px-6 pt-10 md:pt-8 pb-6 md:pb-10`}>
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-white/70 text-sm flex items-center gap-1 mb-4 active:text-white md:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-3xl md:text-5xl leading-none">{phase.emoji}</span>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">{phase.label}</h1>
              <p className="text-white/75 text-sm md:text-base mt-0.5 md:mt-1.5 leading-relaxed">{phase.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Encouraging note — appears before the photo */}
      {phase.encouragement && (
        <div className={`px-5 md:px-6 py-4 md:py-5 border-b ${encouragementStyle[phase.id] ?? "bg-slate-50 border-slate-100"}`}>
          <div className="max-w-6xl mx-auto">
            <p className={`font-semibold mb-1 text-sm md:text-base ${encouragementHeadline[phase.id] ?? "text-slate-800"}`}>
              {phase.encouragement.headline}
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed md:max-w-3xl"><Cited text={phase.encouragement.body} sources={phase.sources} /></p>
          </div>
        </div>
      )}

      {/* Hero photo */}
      {photo && !photoError && (
        <div className="w-full bg-slate-200 md:bg-transparent md:px-6 md:pt-6">
          <div className="md:max-w-6xl md:mx-auto">
            <img
              src={photo}
              alt={phase.label}
              className="w-full h-auto md:rounded-2xl md:shadow-sm md:max-h-96 md:object-cover md:mx-auto"
              onError={() => setPhotoError(true)}
            />
          </div>
        </div>
      )}

      {/* ── Mobile / tablet: single linear column (unchanged) ── */}
      <div className="lg:hidden px-4 pt-5 pb-10 space-y-5">
        <KeyFacts phase={phase} />
        <VideosSection phase={phase} />

        {carouselProducts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Recommended Products</p>
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

        <CommonQuestions phase={phase} />
        <ExternalResources phase={phase} />
        <ProblemCastModule phase={phase} />

        {phase.sources?.length > 0 && (
          <section className="pb-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Sources</p>
            <Sources sources={phase.sources} />
          </section>
        )}
      </div>

      {/* ── Desktop: two-column layout (main content + sidebar) ── */}
      <div className="hidden lg:grid max-w-6xl mx-auto px-6 pt-8 pb-16 lg:grid-cols-3 lg:gap-10 lg:items-start">
        <div className="lg:col-span-2 space-y-8">
          <KeyFacts phase={phase} large />
          <VideosSection phase={phase} large />
          <CommonQuestions phase={phase} large />
          <ExternalResources phase={phase} large />
          <ProblemCastModule phase={phase} large />
        </div>

        <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-20">
          {carouselProducts.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Recommended</p>
                <button onClick={() => navigate("/products")} className="text-xs text-slate-400 hover:text-slate-600 transition-colors">See all →</button>
              </div>
              <div className="space-y-2">
                {carouselProducts.map((product) => (
                  <ProductRow key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}

          {phase.sources?.length > 0 && (
            <section>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">Sources</p>
              <Sources sources={phase.sources} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
