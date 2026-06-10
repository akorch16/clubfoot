const quotes = [
  {
    text: "The first few weeks of casting were the hardest thing I've ever done. But watching my son run around the soccer field at age 7, completely normal, made every sleepless night worth it.",
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
  { label: "Clubfoot Support Facebook Group", url: "https://www.facebook.com/groups/clubfeetsupport/", description: "Large, active community of clubfoot parents worldwide", icon: "👥", iconBg: "bg-blue-100" },
  { label: "Reddit r/clubfoot", url: "https://www.reddit.com/r/clubfoot", description: "Forum for parents, adults with clubfoot, and caregivers", icon: "💬", iconBg: "bg-orange-100" },
  { label: "Ponseti International Association", url: "https://www.ponseti.info", description: "Official clinical guidelines, provider directory, and research", icon: "🏥", iconBg: "bg-teal-100" },
  { label: "#clubfoot on Instagram", url: "https://www.instagram.com/explore/tags/clubfoot/", description: "Real families sharing their journeys", icon: "📸", iconBg: "bg-rose-100" },
];

export default function Support() {
  return (
    <div>
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-slate-800">Support & Community</h1>
        <p className="text-rose-600 text-sm font-semibold mt-1">Thousands of families have walked this road before you</p>
      </div>

      <div className="px-4 pt-1 pb-6 space-y-5">
        {/* Note for new parents */}
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">💗</span>
            <p className="font-semibold text-rose-700 text-sm">A note for new parents</p>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            If you just received a clubfoot diagnosis, prenatally or at birth, take a breath. <span className="font-semibold text-slate-800">This is treatable.</span> The Ponseti method has an over 95% success rate, and children who receive proper treatment grow up to run, jump, play sports, and live without limitations.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            The journey requires commitment: weekly casts, years of bracing. But you will get through it. Thousands of families have. And the community waiting for you is one of the most supportive you'll ever find.
          </p>
        </div>

        {/* Parent Quotes */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">From the community</p>
          <div className="space-y-2">
            {quotes.map((q, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-4">
                <p className="text-sm text-slate-700 leading-relaxed italic">"{q.text}"</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">- {q.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Links */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Community & Resources</p>
          <div className="space-y-2">
            {communityLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-2xl shadow-sm p-4 active:bg-slate-50 transition-colors">
                <div className={`w-10 h-10 rounded-full ${link.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xl">{link.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">{link.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{link.description}</p>
                </div>
                <span className="text-slate-300 flex-shrink-0">›</span>
              </a>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}
