import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Serial casting",
    body: "A specialist gently manipulates the foot toward its correct position and applies a fresh plaster cast each week. Each cast holds the correction and gradually stretches the ligaments and tendons a little further. Most children need 5–8 casts over 5–8 weeks, though the number varies by severity.",
  },
  {
    number: "02",
    title: "Achilles tenotomy",
    body: "In about 80% of cases, the Achilles tendon is too short to allow full correction after casting. A tenotomy — a minor procedure done in-office or under local anesthesia — releases the tendon. It takes seconds, heals completely within a few weeks, and is followed by a final cast to hold the position during healing.",
  },
  {
    number: "03",
    title: "Foot abduction brace",
    body: "Once casting is complete, a foot abduction brace — typically boots attached to a bar — holds the correction and prevents relapse. It's worn 23 hours a day for approximately 3 months, then during sleep (nights and naps) until around age 4–5. This phase is the longest and the most critical.",
  },
  {
    number: "04",
    title: "Long-term follow-up",
    body: "Periodic check-ins with the orthopedic team continue through childhood. The goal is catching any early signs of relapse quickly — early relapse is highly treatable, often with just a few additional casts. Most children need no further intervention after the brace phase ends.",
  },
];

export default function PonsetiMethod() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div className="bg-amber-400 px-5 pt-12 pb-8">
        <h1 className="text-3xl font-bold text-amber-950 leading-snug">The Ponseti Method</h1>
        <p className="text-amber-800 text-sm mt-2 leading-relaxed">
          The global standard of care for clubfoot — and the reason most children treated today grow up to run, play sports, and live without limitations.
        </p>
      </div>

      <div className="px-4 pt-5 pb-10 space-y-4">

        {/* What it is */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
          <h2 className="font-semibold text-slate-800 text-base">What it is</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The Ponseti method is a non-surgical technique for correcting clubfoot in infants. Developed by Dr. Ignacio Ponseti at the University of Iowa starting in the 1950s, it uses a carefully sequenced series of gentle manipulations and plaster casts to gradually reshape the foot into its correct position — no surgery required in the vast majority of cases.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            It replaced invasive surgical correction as the global standard of care because it produces better long-term outcomes with far less risk, pain, and recovery time.
          </p>
        </div>

        {/* How it works */}
        <section className="space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">How it works</p>
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl shadow-sm p-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-slate-200 leading-none mt-0.5 tabular-nums">{step.number}</span>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-slate-800 text-sm">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Why it works */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
          <h2 className="font-semibold text-slate-800 text-base">Why it works</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            An infant's foot is made almost entirely of cartilage, which is far more pliable than bone. The Ponseti sequence takes advantage of this developmental window — the same biological flexibility that allows rapid growth also allows the foot's shape to be gently and permanently corrected. By the time the foot ossifies into bone in early childhood, the correction is set.
          </p>
        </div>

        {/* Brace compliance warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5 flex-shrink-0">⚠️</span>
            <div className="space-y-1.5">
              <h2 className="font-semibold text-amber-800 text-sm">The single most important thing</h2>
              <p className="text-sm text-amber-700 leading-relaxed">
                Casting corrects the foot. <strong>Bracing holds the correction.</strong> The number one cause of relapse is stopping the brace early or inconsistently. The brace phase feels long — sometimes years — but compliance is what determines whether the correction lasts.
              </p>
            </div>
          </div>
        </div>

        {/* Success rate */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
          <h2 className="font-semibold text-slate-800 text-base">Success rate</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            With proper treatment and brace compliance, over 95% of children treated with the Ponseti method go on to walk, run, play sports, and live without limitations. The foot may be slightly smaller or the calf slightly thinner on the affected side, but function is typically normal.
          </p>
        </div>

        {/* Who developed it */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
          <h2 className="font-semibold text-slate-800 text-base">Who developed it</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Dr. Ignacio Ponseti began developing the method at the University of Iowa in the 1940s and 50s, after observing that surgical corrections often left feet stiff and painful in adulthood. He refined the technique over decades, and his long-term follow-up of patients — some followed for 50+ years — demonstrated outcomes that surgery couldn't match.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            The method gained widespread adoption in the early 2000s after the Ponseti International Association helped train orthopedic providers worldwide. It is now the recommended treatment in virtually every major medical guideline globally.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="bg-amber-400 rounded-2xl p-5 space-y-3">
          <p className="text-amber-950 font-semibold text-sm">Ready to go deeper?</p>
          <p className="text-amber-800 text-sm leading-relaxed">
            This guide covers every phase of the Ponseti journey in detail — from the first cast to long-term follow-up.
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
