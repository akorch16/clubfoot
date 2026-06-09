import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { phases } from "../data/phases";
import { products } from "../data/products";
import { faqs } from "../data/faqs";
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

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button className="w-full text-left py-4 flex justify-between items-start gap-2" onClick={() => setOpen(!open)}>
        <span className="text-sm font-medium text-slate-800 leading-snug">{question}</span>
        <span className="text-slate-400 flex-shrink-0 text-lg leading-none mt-0.5">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-sm text-slate-600 pb-4 leading-relaxed">{answer}</p>}
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
  const phaseProducts = products.filter((p) => phase.productCategories.includes(p.category)).slice(0, 4);
  const phaseFaqs = faqs.filter((f) => f.phases.includes(phase.id));

  return (
    <div>
      {/* Phase-colored header */}
      <div className={`${phaseColor} px-5 pt-10 pb-8`}>
        <button
          onClick={() => navigate(-1)}
          className="text-white/70 text-sm flex items-center gap-1 mb-5 active:text-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-5xl block mb-3 leading-none">{phase.emoji}</span>
        <h1 className="text-2xl font-bold text-white">{phase.label}</h1>
        <p className="text-white/75 text-sm mt-1 leading-relaxed">{phase.description}</p>
      </div>

      {/* Hero photo */}
      {photo && !photoError && (
        <div className="w-full h-52 overflow-hidden bg-slate-200">
          <img
            src={photo}
            alt={phase.label}
            className="w-full h-full object-cover"
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

        {/* Practical Tips */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Practical Tips</p>
          <div className="space-y-2">
            {phase.tips.map((tip, i) => (
              <TipCard key={i} tip={tip} allProducts={products} />
            ))}
          </div>
        </section>

        {/* Relevant Products */}
        {phaseProducts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Recommended Products</p>
              <button onClick={() => navigate("/products")} className="text-xs text-slate-400 active:text-slate-600">See all →</button>
            </div>
            <div className="space-y-2">
              {phaseProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 leading-snug">{product.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{product.brand}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      product.status === "works" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {product.status === "works" ? "Works" : "Check Fit"}
                    </span>
                    {product.url && (
                      <a href={product.url} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-semibold text-amber-600">Shop →</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {phaseFaqs.length > 0 && (
          <section>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Common Questions</p>
            <div className="bg-white rounded-2xl shadow-sm px-5">
              {phaseFaqs.map((faq) => (
                <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        )}

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
