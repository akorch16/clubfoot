import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { phases } from "../data/phases";
import { products } from "../data/products";
import { faqs } from "../data/faqs";

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full text-left py-3 flex justify-between items-start gap-2"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-gray-800">{question}</span>
        <span className="text-gray-400 flex-shrink-0 text-lg leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="text-sm text-gray-600 pb-3 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

function TipCard({ title, detail }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <button
        className="w-full text-left px-4 py-3 flex justify-between items-center gap-2"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-800 text-sm">{title}</span>
        <span className="text-gray-400 flex-shrink-0">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-4 pb-3">
          <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
        </div>
      )}
    </div>
  );
}

export default function PhaseDetail() {
  const { phaseId } = useParams();
  const navigate = useNavigate();
  const phase = phases.find((p) => p.id === phaseId);

  if (!phase) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Phase not found.</p>
        <button onClick={() => navigate("/")} className="mt-4 text-blue-600 underline text-sm">
          Go home
        </button>
      </div>
    );
  }

  const phaseProducts = products
    .filter((p) => phase.productCategories.includes(p.category))
    .slice(0, 4);

  const phaseFaqs = faqs.filter((f) => f.phases.includes(phase.id));

  return (
    <div>
      {/* Gradient Header */}
      <div className={`bg-gradient-to-br ${phase.gradient} px-5 pt-10 pb-8`}>
        <button
          onClick={() => navigate(-1)}
          className="text-white/80 text-sm flex items-center gap-1 mb-4 active:text-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="text-3xl mb-2">{phase.emoji}</div>
        <h1 className="text-2xl font-bold text-white">{phase.label}</h1>
        <p className="text-white/80 text-sm mt-1">{phase.description}</p>
      </div>

      <div className="px-4 pt-5 space-y-6">
        {/* Key Facts */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-3">Key Facts</h2>
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <ul className="space-y-2">
              {phase.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${phase.textColor.replace("text-", "bg-")}`} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Practical Tips */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-3">Practical Tips</h2>
          <div className="space-y-2">
            {phase.tips.map((tip, i) => (
              <TipCard key={i} title={tip.title} detail={tip.detail} />
            ))}
          </div>
        </section>

        {/* Relevant Products */}
        {phaseProducts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-gray-800">Relevant Products</h2>
              <Link to="/products" className="text-sm text-blue-600 font-medium">
                See all →
              </Link>
            </div>
            <div className="space-y-2">
              {phaseProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm p-3 flex items-start gap-3">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${
                      product.status === "works"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {product.status === "works" ? "Works" : "Check Fit"}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{product.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{product.brand}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Phase FAQs */}
        {phaseFaqs.length > 0 && (
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-3">
              FAQs for this phase
            </h2>
            <div className="bg-white rounded-2xl shadow-sm px-4">
              {phaseFaqs.map((faq) => (
                <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        )}

        {/* External Resources */}
        <section className="pb-4">
          <h2 className="text-base font-semibold text-gray-800 mb-3">External Resources</h2>
          <div className="space-y-2">
            {phase.resources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-xl shadow-sm px-4 py-3 text-sm font-medium text-blue-600"
              >
                {res.label}
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
