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
    <div className="border-b border-neutral-700 last:border-0">
      <button
        className="w-full text-left py-4 flex justify-between items-start gap-2"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-neutral-200 leading-snug">{question}</span>
        <span className="text-neutral-500 flex-shrink-0 text-lg leading-none mt-0.5">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="text-sm text-neutral-400 pb-4 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function Support() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <span className="inline-block bg-rose-400/20 text-rose-300 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          You are not alone
        </span>
        <h1 className="text-2xl font-bold text-white">Support & Community</h1>
        <p className="text-neutral-400 text-sm mt-1">
          Thousands of families have walked this road before you
        </p>
      </div>

      <div className="px-4 pt-1 pb-6 space-y-5">
        {/* Note for new parents */}
        <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 mt-0.5">💗</span>
            <div>
              <p className="font-semibold text-rose-300 text-sm mb-2">
                A note for new parents
              </p>
              <p className="text-rose-200/70 text-sm leading-relaxed">
                If you just received a clubfoot diagnosis — prenatally or at birth — take a breath. This is treatable. The Ponseti method has an over 95% success rate, and children who receive proper treatment grow up to run, jump, play sports, and live without limitations.
              </p>
              <p className="text-rose-200/70 text-sm leading-relaxed mt-2">
                The journey requires commitment — weekly casts, years of bracing — but you will get through it. Thousands of families have. And the community waiting for you is one of the most supportive you'll ever find.
              </p>
            </div>
          </div>
        </div>

        {/* Parent Quotes */}
        <section>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">From the community</p>
          <div className="space-y-2">
            {quotes.map((q, i) => (
              <div key={i} className="bg-neutral-800 rounded-2xl p-4">
                <p className="text-sm text-neutral-300 leading-relaxed italic">"{q.text}"</p>
                <p className="text-xs text-neutral-500 mt-2 font-medium">— {q.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Links */}
        <section>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Community & Resources</p>
          <div className="space-y-2">
            {communityLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-neutral-800 rounded-2xl p-4 active:bg-neutral-700 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{link.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-neutral-200">{link.label}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{link.description}</p>
                </div>
                <span className="text-neutral-600 flex-shrink-0">›</span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-2">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
            Frequently Asked Questions
          </p>
          <div className="bg-neutral-800 rounded-2xl px-5">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
