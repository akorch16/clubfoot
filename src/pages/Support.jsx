const communityLinks = [
  { label: "Clubfoot Support Facebook Group", url: "https://www.facebook.com/groups/clubfeetsupport/", description: "Large, active community of clubfoot parents worldwide", icon: "👥", iconBg: "bg-blue-100" },
  { label: "Clubfoot Parents Facebook Group", url: "https://www.facebook.com/groups/1503261329975163", description: "Community of clubfoot families sharing support and advice", icon: "🦶", iconBg: "bg-emerald-100" },
  { label: "Babywearing with Clubfoot", url: "https://www.facebook.com/groups/babywearingclubfoot/", description: "Carry techniques and virtual fit checks for babies in casts and B&B", icon: "🫶", iconBg: "bg-violet-100" },
  { label: "Reddit r/clubfoot", url: "https://www.reddit.com/r/clubfoot", description: "Forum for parents, adults with clubfoot, and caregivers", icon: "💬", iconBg: "bg-orange-100" },
  { label: "Ponseti International Association", url: "https://ponseti.medicine.uiowa.edu/parent-information/ponseti-doctors-location", description: "Official clinical guidelines, provider directory, and research", icon: "🏥", iconBg: "bg-teal-100" },
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
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💗</span>
            <p className="font-semibold text-rose-700 text-sm">A note for new parents</p>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            If you just got a diagnosis — take a breath. <span className="font-semibold text-slate-800">This is treatable.</span> The Ponseti method works in over 95% of cases, and the community below has answered every question you'll have, at every hour of the night.
          </p>
        </div>

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
