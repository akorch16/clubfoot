import { useNavigate } from "react-router-dom";
import Cited, { Sources } from "../components/Cited";

const steps = [
  {
    number: "01",
    title: "Serial casting",
    body: "A specialist gently manipulates the foot toward its correct position and applies a fresh plaster cast each week. Each cast holds the correction and stretches the ligaments and tendons a little further. Most children need 5 to 8 casts over 5 to 8 weeks, though the number varies by severity.[[2]]",
  },
  {
    number: "02",
    title: "Achilles tenotomy",
    body: "In about 80% of cases, the Achilles tendon is too short to allow full correction after casting.[[2]] A tenotomy releases the tendon. It's a minor procedure done in-office or under local anesthesia, it takes seconds, and it heals within a few weeks. A final cast holds the position while it heals.",
  },
  {
    number: "03",
    title: "Foot abduction brace",
    body: "Once casting is complete, a foot abduction brace, typically boots attached to a bar, holds the correction and prevents relapse. It's worn 23 hours a day for about 3 months, then during sleep (nights and naps) until around age 4-5.[[3]] This phase is the longest and the most important.",
  },
  {
    number: "04",
    title: "Long-term follow-up",
    body: "Periodic check-ins with the orthopedic team continue through childhood. The goal is catching any early signs of relapse quickly. Early relapse is very treatable, often with just a few extra casts. Most children need no further treatment after the brace phase ends.",
  },
];

const clubfootTypes = [
  {
    label: "Idiopathic",
    body: "Clubfoot that happens on its own, with no other condition attached. This is the large majority of cases, and it's what the Ponseti method was built around. Most children need 5 to 8 casts and do very well.",
  },
  {
    label: "Atypical (complex)",
    body: "A short, stiff, chubby foot with a deep crease on the sole and behind the heel. It's harder to correct, and the \"fat\" variety is the toughest. It still responds to the Ponseti method, but often needs a modified casting technique and closer follow-up. Make sure your provider has experience with atypical clubfoot.",
  },
  {
    label: "Syndromic",
    body: "Clubfoot that comes as part of another condition, such as arthrogryposis, spina bifida (myelomeningocele), or Larsen syndrome. These feet usually need more casts, relapse more often, and follow a less predictable course.[[2]] The Ponseti method is still the starting point, but the timeline and expectations are different, so talk with your provider about your child's specific situation.",
  },
];

const sources = [
  { id: 1, label: "Ponseti International Association, University of Iowa.", url: "https://ponseti.medicine.uiowa.edu/what-clubfoot/ponseti-method" },
  { id: 2, label: "Radler C. The Ponseti method: review of the current literature and treatment recommendations. Int Orthop. 2013;37(9):1747-1753.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764299/" },
  { id: 3, label: "Zionts LE, Dietz FR. Bracing following correction of idiopathic clubfoot using the Ponseti method. J Am Acad Orthop Surg. 2010;18(8):486-493.", url: "https://pubmed.ncbi.nlm.nih.gov/20675641/" },
  { id: 4, label: "Dobbs MB, Morcuende JA, Gurnett CA, Ponseti IV. Treatment of idiopathic clubfoot: an historical review. Iowa Orthop J. 2000;20:59-64.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1888755/" },
  { id: 5, label: "Ponseti International — Publications & resources (Red Book, clinical guidelines).", url: "https://ponseti.medicine.uiowa.edu/what-clubfoot/publications-and-resources" },
];

export default function PonsetiMethod() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div className="bg-amber-400 px-5 pt-12 pb-8">
        <h1 className="text-3xl font-bold text-amber-950 leading-snug">The Ponseti Method</h1>
        <p className="text-amber-800 text-sm mt-2 leading-relaxed">
          The global standard of care for clubfoot, and the reason most children treated today grow up to run and play like anyone else.
        </p>
      </div>

      <div className="px-4 pt-5 pb-10 space-y-4">

        {/* What it is */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
          <h2 className="font-semibold text-slate-800 text-base">What it is</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Cited sources={sources} text="The Ponseti method is a non-surgical technique for correcting clubfoot in infants. Dr. Ignacio Ponseti developed it at the University of Iowa starting in the 1950s.[[4]] It uses a carefully sequenced series of gentle manipulations and plaster casts to gradually reshape the foot into its correct position. No surgery is needed in the large majority of cases.[[1]]" />
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            It replaced invasive surgical correction as the global standard of care because it produces better long-term outcomes with much less risk, pain, and recovery time.
          </p>
        </div>

        {/* How it works */}
        <section className="space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">How it works</p>
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl shadow-sm p-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-slate-200 leading-none mt-0.5 tabular-nums">{step.number}</span>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-slate-800 text-sm">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed"><Cited text={step.body} sources={sources} /></p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Why it works */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
          <h2 className="font-semibold text-slate-800 text-base">Why it works</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            An infant's foot is made almost entirely of cartilage, which is far more pliable than bone. The Ponseti sequence takes advantage of this window. The same flexibility that lets the foot grow quickly also lets its shape be gently and permanently corrected. By the time the foot hardens into bone in early childhood, the correction is set.
          </p>
        </div>

        {/* Brace compliance warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5 flex-shrink-0">⚠️</span>
            <div className="space-y-1.5">
              <h2 className="font-semibold text-amber-800 text-sm">The single most important thing</h2>
              <p className="text-sm text-amber-700 leading-relaxed">
                Casting corrects the foot. <strong>Bracing holds the correction.</strong> The number one cause of relapse is stopping the brace early or wearing it inconsistently. The brace phase feels long, sometimes years, but compliance is what determines whether the correction lasts.
              </p>
            </div>
          </div>
        </div>

        {/* Success rate */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
          <h2 className="font-semibold text-slate-800 text-base">Success rate</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Cited sources={sources} text="With proper treatment and brace compliance, over 95% of children treated with the Ponseti method walk, run, and play like anyone else.[[1,2]] The foot may be slightly smaller or the calf slightly thinner on the affected side, but function is typically normal." />
          </p>
        </div>

        {/* Types of clubfoot */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-3">
          <h2 className="font-semibold text-slate-800 text-base">Types of clubfoot</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Most of the numbers on this site describe idiopathic clubfoot, the most common kind. A few children have a type that behaves differently, and it helps to know which one you're dealing with.
          </p>
          {clubfootTypes.map((t) => (
            <div key={t.label}>
              <p className="text-sm font-semibold text-slate-800">{t.label}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{t.body}</p>
            </div>
          ))}
          <p className="text-sm text-slate-600 leading-relaxed">
            If your provider has used the words atypical, complex, or syndromic, ask what it means for your child's casts, bracing, and follow-up.
          </p>
        </div>

        {/* Who developed it */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
          <h2 className="font-semibold text-slate-800 text-base">Who developed it</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Dr. Ignacio Ponseti began developing the method at the University of Iowa in the 1940s and 50s, after seeing that surgical corrections often left feet stiff and painful in adulthood. He refined the technique over decades, and his long-term follow-up of patients, some for 50 years or more, showed outcomes surgery couldn't match.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            The method gained wide adoption in the early 2000s after the Ponseti International Association helped train orthopedic providers worldwide. It is now the recommended treatment in nearly every major medical guideline.
          </p>
        </div>

        {/* Sources & references */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-3">
          <h2 className="font-semibold text-slate-800 text-base">Sources & references</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The clinical information here follows the Ponseti International Association at the University of Iowa, where Dr. Ponseti developed the method, and its published guidance. The over-95% success figure and the treatment sequence come from their materials and clinical guidelines.
          </p>
          <Sources sources={sources} />
          <p className="text-xs text-slate-400 leading-relaxed">
            This site is for education and support. It doesn't replace your care team.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="bg-amber-400 rounded-2xl p-5 space-y-3">
          <p className="text-amber-950 font-semibold text-sm">Ready to go deeper?</p>
          <p className="text-amber-800 text-sm leading-relaxed">
            This guide covers every phase of the Ponseti journey, from the first cast to long-term follow-up.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full py-3 rounded-xl bg-amber-950 text-amber-100 font-semibold text-sm active:scale-95 transition-transform"
          >
            View the treatment phases →
          </button>
        </div>

      </div>
    </div>
  );
}
