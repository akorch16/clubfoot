function FacebookIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.85h2.77l-.44 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.92 4.92 0 00-1.78 1.16A4.92 4.92 0 002.53 5.47c-.25.64-.42 1.37-.47 2.43C2.01 8.96 2 9.3 2 12s.01 3.04.06 4.1c.05 1.06.22 1.79.47 2.43a4.92 4.92 0 001.16 1.78 4.92 4.92 0 001.78 1.16c.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.92 4.92 0 001.78-1.16 4.92 4.92 0 001.16-1.78c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.1s-.01-3.04-.06-4.1c-.05-1.06-.22-1.79-.47-2.43a4.92 4.92 0 00-1.16-1.78A4.92 4.92 0 0018.53.53c-.64-.25-1.37-.42-2.43-.47C15.04.01 14.7 0 12 0zm0 1.98c2.67 0 2.99.01 4.04.06.98.04 1.51.21 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.13.35.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.51-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.13-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.51-.21-1.86-.34a3.1 3.1 0 01-1.15-.75 3.1 3.1 0 01-.75-1.15c-.13-.35-.3-.88-.34-1.86C1.99 14.99 1.98 14.67 1.98 12s.01-2.99.06-4.04c.04-.98.21-1.51.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.13.88-.3 1.86-.34C9.01 1.99 9.33 1.98 12 1.98zm0 3.37a6.65 6.65 0 100 13.3 6.65 6.65 0 000-13.3zm0 10.97a4.32 4.32 0 110-8.64 4.32 4.32 0 010 8.64zm6.9-11.23a1.55 1.55 0 11-3.1 0 1.55 1.55 0 013.1 0z" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.61 1.23 4.96 3.2 6.61-.1.37-.53 2-.63 2.35 0 0-.01.11.06.16.07.05.16.02.16.02.21-.03 2.4-.53 2.83-.63A11.2 11.2 0 0012 20c5.52 0 10-4.03 10-9s-4.48-9-10-9zm5.3 7.2c.7 0 1.26.56 1.26 1.26 0 .56-.36 1.03-.86 1.2.02.13.03.27.03.4 0 2.07-2.41 3.75-5.38 3.75-2.97 0-5.38-1.68-5.38-3.75 0-.14.01-.27.03-.4a1.26 1.26 0 01.4-2.46c.34 0 .64.13.87.35.86-.6 2.04-.99 3.36-1.04l.63-2.87a.3.3 0 01.36-.23l2 .42a.86.86 0 111.65-.36.86.86 0 01-1.66.32l-1.8-.38-.55 2.51c1.29.06 2.44.45 3.29 1.03.23-.22.53-.35.87-.35zm-6.9 1.83a.87.87 0 100 1.74.87.87 0 000-1.74zm5.4 0a.87.87 0 100 1.74.87.87 0 000-1.74zm-4.2 3.02a.24.24 0 00-.17.41c.5.5 1.42.79 2.57.79 1.15 0 2.07-.29 2.57-.79a.24.24 0 10-.34-.34c-.4.4-1.17.65-2.23.65-1.06 0-1.83-.25-2.23-.65a.24.24 0 00-.17-.07z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Clubfoot Support Facebook Group", url: "https://www.facebook.com/groups/clubfeetsupport/", description: "Large, active community of clubfoot parents worldwide", icon: FacebookIcon, iconBg: "bg-blue-100 text-blue-600" },
  { label: "Clubbed Foot Support Group", url: "https://www.facebook.com/groups/1503261329975163", description: "Community of clubfoot families sharing support and advice", icon: FacebookIcon, iconBg: "bg-blue-100 text-blue-600" },
  { label: "Reddit r/clubfoot", url: "https://www.reddit.com/r/clubfoot", description: "Forum for parents, adults with clubfoot, and caregivers", icon: RedditIcon, iconBg: "bg-orange-100 text-orange-600" },
  { label: "#clubfoot on Instagram", url: "https://www.instagram.com/explore/tags/clubfoot/", description: "Real families sharing their journeys", icon: InstagramIcon, iconBg: "bg-rose-100 text-rose-600" },
];

const resourceLinks = [
  { label: "Ponseti International Association", url: "https://ponseti.medicine.uiowa.edu/parent-information/ponseti-doctors-location", description: "Official clinical guidelines, provider directory, and research", icon: "🏥", iconBg: "bg-teal-100" },
];

const travelAssistance = [
  { label: "National Patient Travel Center", url: "https://www.patienttravel.org", phone: "800-296-1217", description: "Free 24/7 helpline that screens your need and points you to the right medical travel program. The easiest place to start." },
  { label: "Mercy Medical Angels (Angel Flight)", url: "https://www.mercymedical.org", phone: null, description: "Coordinates the Angel Flight network and other free medical transport, by commercial airline or volunteer pilot." },
  { label: "Miracle Flights", url: "https://miracleflights.org", phone: "800-359-1711", description: "Free commercial flights for children traveling to medical care." },
  { label: "LifeLine Pilots", url: "https://lifelinepilots.org", phone: "800-822-7972", description: "Volunteer pilots flying patients to treatment across the Midwest and nearby states." },
];

export default function Support() {
  return (
    <div>
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-slate-800">Support & Community</h1>
        <p className="text-rose-600 text-sm font-semibold mt-1">Thousands of families have gone through this before you</p>
      </div>

      <div className="px-4 pt-1 pb-6 space-y-5">
        {/* Note for new parents */}
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💗</span>
            <p className="font-semibold text-rose-700 text-sm">A note for new parents</p>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            If you just got a diagnosis, take a breath. <span className="font-semibold text-slate-800">This is treatable.</span> The Ponseti method works in over 95% of cases, and the community below has answered every question you'll have, at any hour of the night.
          </p>
        </div>

        {/* Social Media */}
        <section>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Social Media</p>
          <div className="space-y-2">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-2xl shadow-sm p-4 active:bg-slate-50 transition-colors">
                <div className={`w-10 h-10 rounded-full ${link.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <link.icon />
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

        {/* Resources */}
        <section>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Resources</p>
          <div className="space-y-2">
            {resourceLinks.map((link, i) => (
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

        {/* Travel assistance */}
        <section>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Travel assistance</p>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            Traveling out of state to see a Ponseti specialist can get expensive. These nonprofits arrange free or low-cost medical travel for families who qualify. Start with the National Patient Travel Center, which points you to the right program. Eligibility and coverage areas vary, so check each program's current requirements.
          </p>
          <div className="space-y-2">
            {travelAssistance.map((org, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✈️</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <a href={org.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-800 active:text-teal-600">
                      {org.label}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{org.description}</p>
                    {org.phone && (
                      <a href={`tel:${org.phone.replace(/[^0-9]/g, "")}`} className="inline-block text-xs font-medium text-teal-600 mt-1.5">
                        {org.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
