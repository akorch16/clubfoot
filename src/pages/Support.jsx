import { useState } from "react";
import { faqs } from "../data/faqs";

const quotes = [
  {
    text: "The first few weeks of casting were the hardest thing I've ever done. But watching my son run around the soccer field at age 7 — completely normal — made every sleepless night worth it.",
    author: "Mom of a now 7-year-old, bilateral clubfoot",
  },
  {
    text: "We were terrified when we got the prenatal diagnosis. The clubfoot Facebook group saved me. Parents who'd been through it answered every panicked 2am question I had.",
    author: "Dad, single clubfoot, diagnosed at 20 weeks",
  },
  {
    text: "Brace compliance was genuinely hard in the early months. Our daughter fought it. But we pushed through, and at her 5-year check-up, her orthopedist said her foot looks perfect.",
    author: "Mom, boots-and-bar phase survivor",
  },
];

const communityLinks = [
  {
    label: "Clubfoot Support Facebook Group",
    url: "https://www.facebook.com/groups/clubfootsupport",
    description: "Large, active community of clubfoot parents worldwide",
    icon: "👥",
  },
  {
    label: "Reddit r/clubfoot",
    url: "https://www.reddit.com/r/clubfoot",
    description: "Forum for parents, adults with clubfoot, and caregivers",
    icon: "💬",
  },
  {
    label: "Ponseti International Association",
    url: "https://www.ponseti.info",
    description: "Official clinical guidelines, provider directory, and research",
    icon: "🏥",
  },
  {
    label: "STEPS Charity",
    url: "https://www.steps-charity.org.uk",
    description: "UK-based support and information for lower limb conditions",
    icon: "🌟",
  },
  {
    label: "#clubfoot on Instagram",
    url: "https://www.instagram.com/explore/tags/clubfoot/",
    description: "Real families sharing their journeys",
    icon: "📸",
  },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full text-left py-3.5 flex justify-between items-start gap-2"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-gray-800">{question}</span>
        <span className="text-gray-400 flex-shrink-0 text-lg leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="text-sm text-gray-600 pb-4 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function Support() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-400 to-rose-600 px-5 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-white">Support & Community</h1>
        <p className="text-rose-100 text-sm mt-1">
          You are not alone in this
        </p>
      </div>

      <div className="px-4 pt-5 space-y-6 pb-4">
        {/* Note for new parents */}
        <section className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💗</span>
            <div>
              <p className="font-semibold text-rose-800 text-sm mb-2">
                A note for new parents
              </p>
              <p className="text-rose-700 text-sm leading-relaxed">
                If you just received a clubfoot diagnosis — prenatally or at birth — take a breath. This is treatable. The Ponseti method has an over 95% success rate, and children who receive proper treatment grow up to run, jump, play sports, and live without limitations.
              </p>
              <p className="text-rose-700 text-sm leading-relaxed mt-2">
                The journey requires commitment — weekly casts, years of bracing — but you will get through it. Thousands of families have. And the community waiting for you is one of the most supportive you'll ever find.
              </p>
            </div>
          </div>
        </section>

        {/* Parent Quotes */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-3">From the community</h2>
          <div className="space-y-3">
            {quotes.map((q, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-4">
                <p className="text-sm text-gray-700 leading-relaxed italic">"{q.text}"</p>
                <p className="text-xs text-gray-400 mt-2 font-medium">— {q.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Links */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-3">Community & Resources</h2>
          <div className="space-y-2">
            {communityLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-2xl shadow-sm p-4 active:bg-gray-50"
              >
                <span className="text-2xl flex-shrink-0">{link.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800">{link.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.description}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Full FAQ */}
        <section className="pb-2">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-2xl shadow-sm px-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
