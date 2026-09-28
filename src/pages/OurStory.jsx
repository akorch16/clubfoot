import { useNavigate } from "react-router-dom";

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div className="px-5 md:px-6 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Our Story</p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-snug md:leading-tight">
            A product for the 0.1%
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 md:px-6 pb-14 md:pb-20">
        <article className="prose-none text-slate-700 text-base md:text-lg leading-relaxed space-y-5 md:space-y-6">
          <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug">
            There's a 99.9% chance this product is not for you.
          </p>

          <p>
            My son was born with a 1-in-1,000 condition called clubfoot. We found out on my wife's 20-week anatomy scan. My wife, as any mother would tell you, knew instinctively that something was off when the radiology tech spent 15 minutes looking for his foot.
          </p>

          <p>
            Finding out there's something "wrong" with your unborn child is a horrible moment. I didn't understand this then, but there is never anything "wrong" with your child. Maybe just different.
          </p>

          <p>
            All I knew about clubfoot was that a character on the HBO show <em>House of the Dragon</em> had it. Larys Strong, or "Larys the Clubfoot," has a twisted foot and an even more twisted mind. He was not exactly the man I wanted my son to grow up to be. Not the most informed impression.
          </p>

          <p>
            When my wife and I went to learn more about our future son's condition, information was scattered everywhere. Since our son would be in casts for the first two months of his life, it changed everything — what doctors to find, what clothes to buy, what stroller to use. Not to mention the overwhelming feelings of anxiety, helplessness, and loneliness we felt as new parents for a son with a unique condition, a journey that almost no one we knew could relate to.
          </p>

          <p>
            Flash forward. We were strolling with our healthy and happy baby boy through Home Depot, looking for blackout curtains (if you know, you know). As a Director of Engineering, I had become obsessed with Claude Code during paternity leave, practicing skills and building out side projects.
          </p>

          <p>
            A friend had built a site that planned dates for his wife. It sounded fun. "What if we built something together?" I asked.
          </p>

          <blockquote className="border-l-4 border-slate-200 pl-5 py-1 my-6 md:my-8 italic text-slate-600 text-lg md:text-xl leading-relaxed">
            <p>My wife thought about it. "What if we built something for clubfoot?"</p>
            <p className="mt-3">"We could call it Club Clubfoot!" I said.</p>
            <p className="mt-3">"Clubfoot Club is better," my wife said.</p>
            <p className="mt-3 not-italic font-semibold text-slate-800">My wife, as usual, was right.</p>
          </blockquote>

          <p>
            My intent building Clubfoot Club is to make it easier for parents with a unique condition to manage it. I also want to show my work. This is a story about how to build a product for someone you love.
          </p>

          <p className="font-semibold text-slate-800">
            Clubfoot Club is free. I hope it loses me money, actually, because that means families are finding it helpful.
          </p>
        </article>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-14 rounded-2xl p-6 md:p-8 space-y-4" style={{ backgroundColor: "#2D3B6E" }}>
          <div>
            <p className="text-white font-semibold text-sm md:text-lg">If you just got a diagnosis</p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mt-1">
              Take a breath. This is one of the most treatable conditions in pediatric orthopedics — and you're not alone in it.
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full md:w-auto py-3 md:py-3.5 px-6 rounded-xl text-white font-semibold text-sm active:scale-95 md:hover:scale-[1.03] transition-transform"
            style={{ backgroundColor: "#65abc2" }}
          >
            Explore the journey →
          </button>
        </div>
      </div>
    </div>
  );
}
