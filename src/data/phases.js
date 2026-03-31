// relatedProducts references product IDs from products.js
export const phases = [
  {
    id: "prenatal",
    label: "Prenatal",
    emoji: "🤰",
    gradient: "from-violet-500 to-purple-700",
    bgLight: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    description: "From diagnosis to birth — what to expect and how to prepare.",
    keyPoints: [
      "Clubfoot affects roughly 1 in 1,000 babies. You are far from alone.",
      "It's typically diagnosed on the 20-week anatomy ultrasound and confirmed at birth.",
      "The Ponseti method — gentle serial casting followed by a foot abduction brace — corrects clubfoot in over 95% of cases without surgery.",
      "Clubfoot does not cause pain in utero and does not affect the pregnancy itself.",
      "Both feet are affected (bilateral) in about 50% of cases. Treatment is the same — both feet are cast simultaneously.",
      "Boys are affected roughly twice as often as girls.",
      "If a parent or sibling had clubfoot, the recurrence risk is ~3–5%. Genetic counseling is available if desired.",
      "Treatment ideally begins within the first 1–2 weeks of life while tissues are most pliable.",
      "Finding a Ponseti-trained provider before birth will save you critical time in the first days.",
    ],
    tips: [
      {
        title: "Find a Ponseti-trained provider now",
        detail:
          "Not every pediatric orthopedic surgeon is Ponseti-trained. The technique requires specific training, and outcomes differ significantly between experienced Ponseti providers and those using other approaches. Ask your OB or maternal-fetal medicine specialist for a referral, or use the Ponseti International provider directory at ponseti.info. Aim to have your first appointment scheduled before birth so you can go directly after discharge.",
        relatedProducts: [],
      },
      {
        title: "Stock up on footless clothing before birth",
        detail:
          "Once casting begins, footed sleepers, footie pajamas, and booties are essentially useless. You'll spend the first 6–8 weeks of your baby's life in footless zip sleepers. Carter's footless zip-up sleepers are the most popular option — affordable, soft, and widely available. The Kyte Baby bamboo rompers are a premium alternative parents rave about for their softness against cast edges. Buy sizes newborn through 3 months.",
        relatedProducts: [1, 3],
      },
      {
        title: "Prepare your support circle early",
        detail:
          "Well-meaning family members may say alarming things — 'my neighbor's kid had surgery' (the Ponseti method usually avoids that), 'will they ever walk normally?' (almost certainly yes), or express general alarm. Gently sharing reliable resources early helps set accurate expectations. The Clubfoot Support Facebook group is worth joining before birth — thousands of parents have answered every question you'll have.",
        relatedProducts: [],
      },
      {
        title: "Research car seats before you need one",
        detail:
          "Full-leg casts change how babies fit in car seats. Some popular seats are difficult to use with casts. The Chicco KeyFit 35 and Britax B-Safe Ultra are consistently recommended by clubfoot parents for their wider seat base and better fit with cast-leg positioning. Do a test fit in the hospital before your first drive home.",
        relatedProducts: [13, 14],
      },
      {
        title: "Understand the full timeline",
        detail:
          "The Ponseti journey is a marathon, not a sprint: approximately 5–8 weekly casting appointments, a minor Achilles tendon procedure (tenotomy) for most children, then a foot abduction brace worn full-time for 3 months, then nights and naps until age 4–5. Understanding the full arc upfront helps enormously — each phase has its own challenges and rewards, and millions of families have completed it.",
        relatedProducts: [],
      },
    ],
    resources: [
      { label: "Ponseti International — Provider Directory", url: "https://www.ponseti.info/find-a-provider.html" },
      { label: "Ponseti International — Parent Guide", url: "https://www.ponseti.info/parents-patients.html" },
      { label: "STEPS Charity (UK)", url: "https://www.steps-charity.org.uk" },
      { label: "Clubfoot Support Facebook Group", url: "https://www.facebook.com/groups/clubfootsupport" },
    ],
    productCategories: ["clothing", "socks", "car-seats"],
  },
  {
    id: "casting",
    label: "Casting",
    emoji: "🦵",
    gradient: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    description: "Weekly plaster casts that gently correct the foot — typically 5–8 weeks.",
    keyPoints: [
      "Each cast moves the foot incrementally closer to a neutral position. The correction is gradual and gentle.",
      "Casts are long-leg (above the knee) to control rotation — this is by design.",
      "Most babies need 5–8 casts; bilateral cases may require slightly more.",
      "The casting appointment takes 30–60 minutes: removal, skin check, brief manipulation, new cast.",
      "About 80% of children need an Achilles tenotomy — a minor in-office procedure — before the final cast.",
      "The final cast after tenotomy stays on for ~3 weeks while the tendon heals.",
      "Never get casts wet — no baths, no puddles. Sponge baths only.",
      "Call your care team immediately if toes turn purple/white/cold or if baby is inconsolably crying — these are signs of a too-tight cast.",
      "Bring a blanket, pacifier, and a bottle or nursing setup — most babies settle quickly after manipulation.",
    ],
    tips: [
      {
        title: "Perfect your sponge bath routine",
        detail:
          "Full immersion baths are out for the entire casting phase — getting a cast wet can cause skin breakdown, infection, and cast failure. The Puj Flyte flat tub insert is the most popular solution: it fits in most kitchen sinks, folds flat, and keeps baby comfortable while you wipe down head, neck, armpits, and diaper area with a warm cloth. Have the setup ready before you leave the hospital.",
        relatedProducts: [22],
      },
      {
        title: "Choose clothes that work with full-leg casts",
        detail:
          "Full-leg casts make normal dressing nearly impossible. The essentials: footless zip-up sleepers (Carter's are the community favorite), side-snap onesies for tops, and stretchy zip sleep sacks for naps. The Zipadee-Zip sleep sack fits over casts in the early weeks. The Woombie swaddle works for newborns in the first casting weeks. Pull-on pants with a wide leg opening are better than snaps.",
        relatedProducts: [1, 3, 4, 5],
      },
      {
        title: "Know the warning signs of a problem cast",
        detail:
          "A well-applied cast should not cause distress beyond a few minutes of fussiness after application. Red flags requiring immediate contact with your care team: toes that are purple, white, mottled, or cold to the touch; toes that don't move or wiggle; baby who is inconsolably crying 30+ minutes after the cast was applied; a cast that suddenly feels loose or cracks. When in doubt, call.",
        relatedProducts: [],
      },
      {
        title: "Prepare for the tenotomy appointment",
        detail:
          "The Achilles tenotomy is typically done in the office under local anesthetic — a very small nick in the tendon with a needle-sized blade. It takes under 5 minutes. The tendon heals completely in about 3 weeks under the post-tenotomy cast. Babies typically cry briefly during the injection, then settle quickly. Many parents are far more anxious than their babies. The post-tenotomy cast goes on the same day and stays for 3 weeks.",
        relatedProducts: [],
      },
      {
        title: "Car seat safety with casts",
        detail:
          "Car seat fit changes significantly with full-leg casts. The Chicco KeyFit 35 and Britax B-Safe Ultra are the most recommended infant seats for cast accommodation. Always do a real-world fit check with the actual casts on — not just with the seat uninstalled. Some parents use a tightly rolled receiving blanket under the knees to improve positioning; check this with your care team first.",
        relatedProducts: [13, 14],
      },
      {
        title: "Track everything: a cast log helps",
        detail:
          "Keep a simple running note of cast dates, cast numbers, which leg(s), any skin issues, and how many casts remain. Take a photo after each cast change — the visible progress is meaningful and sharing it with family helps them understand the journey. Many parents say reviewing early cast photos at the end of treatment is one of the most emotional and rewarding moments of the whole experience.",
        relatedProducts: [],
      },
    ],
    resources: [
      { label: "Ponseti International — Casting Guide for Parents", url: "https://www.ponseti.info/parents-patients.html" },
      { label: "STEPS Charity — Clubfoot Explained", url: "https://www.steps-charity.org.uk/info-support/conditions/clubfoot/" },
      { label: "Clubfoot Support Facebook Group", url: "https://www.facebook.com/groups/clubfootsupport" },
      { label: "Reddit r/clubfoot", url: "https://www.reddit.com/r/clubfoot" },
    ],
    productCategories: ["clothing", "socks", "car-seats", "tubs"],
  },
  {
    id: "boots-and-bar",
    label: "Boots & Bar",
    emoji: "👟",
    gradient: "from-teal-500 to-teal-700",
    bgLight: "bg-teal-50",
    textColor: "text-teal-700",
    borderColor: "border-teal-200",
    description: "The brace phase — the most important factor in preventing relapse. Typically until age 4–5.",
    keyPoints: [
      "The foot abduction brace (FAB) holds the corrected foot/feet at a specific outward angle to maintain the correction achieved during casting.",
      "Full-time wear (23 hours/day) for the first 3 months after casting, then nights and naps until age 4–5.",
      "Brace compliance is the single most important predictor of long-term success. Non-compliant bracing leads to relapse in ~80% of cases.",
      "The most common brace in the US is the Mitchell Ponseti AFO from OrthoPediatrics/OPSB.",
      "The bar between the shoes is set at a specific angle by your orthotist — do not try to adjust it yourself.",
      "Inspect skin daily, especially the heel. Blisters at the heel are common during the first weeks; most resolve with proper sock use.",
      "Transitions (full-time → nights/naps) should always be guided by your orthopedic provider, not self-directed.",
      "Growth means brace adjustments — your orthotist will typically see you every 3–6 months to check fit.",
      "Your baby's feet should be warm and pink in the shoes. Cold or discolored toes need immediate attention.",
    ],
    tips: [
      {
        title: "Use the official Mitchell Ponseti socks — every time",
        detail:
          "The most common cause of blisters in the brace is sock bunching. The OrthoPediatrics Mitchell Ponseti bamboo socks are designed specifically for the Mitchell shoe — they have a silicone grip strip that prevents them from sliding down, a seamless toe, and moisture-wicking bamboo fabric. They make a meaningful difference. Buy at least 5–6 pairs so you always have clean ones available. They're available at opsb.com/accessories.",
        relatedProducts: [6],
      },
      {
        title: "Build a consistent brace routine",
        detail:
          "Consistency makes the brace feel routine rather than exceptional — for both you and your baby. Apply the brace at the same times every day: after every diaper change during the full-time phase, then at every nap and bedtime. Having a dedicated spot where you always do it (with socks, brace, and pressure saddle if using one) helps reduce the mental load. Many parents find that once it becomes a habit, it takes less than 2 minutes per application.",
        relatedProducts: [9, 10, 11],
      },
      {
        title: "Clothing with a bar: what actually works",
        detail:
          "The rigid bar between the shoes is about as wide as the hips — normal pants and footie pajamas won't work. The Zipadee-Zip sleep sack is widely considered the best sleep solution for the B&B phase. Kyte Baby footless rompers with two-way zips work well for daytime. Wide-leg pants and leggings with good stretch work for older babies. Many parents simply cut the feet off pajamas — it works fine.",
        relatedProducts: [4, 3, 1],
      },
      {
        title: "Baby wearing with a brace bar",
        detail:
          "Structured carriers are more difficult with the bar. Ring slings are the most flexible option and work well across all phases — the one-shoulder design lets you adjust positioning for the bar. For longer carries, the Solly Baby wrap (using a modified carry) and Ergobaby Omni 360 are community favorites in the older B&B phase.",
        relatedProducts: [17, 16, 18],
      },
      {
        title: "Strollers: check bar clearance before buying",
        detail:
          "The bar protrudes past the shoes and the footrest has to accommodate it. The UPPAbaby Vista and Bugaboo Fox are the most consistently recommended — both have open footrest designs that work well. The BABYZEN YOYO has variable results; test in-store with the brace before buying. The bassinet mode of most travel systems works well in the early B&B phase before baby sits upright.",
        relatedProducts: [19, 20, 21],
      },
      {
        title: "Managing night waking — and it does get better",
        detail:
          "The first 2–4 weeks in the brace full-time is the hardest. Most babies go through a period of disrupted sleep as they adjust to the new sensation. The Zipadee-Zip helps because it allows some self-soothing movement. A white noise machine, a pacifier, and patience are your tools. It almost universally improves — most parents report that within 3–4 weeks their baby sleeps normally in the brace. Post in the Facebook group at 2am — someone is always awake.",
        relatedProducts: [4],
      },
      {
        title: "Recognize the signs of relapse early",
        detail:
          "Relapse is common (especially if bracing compliance slips) and treatable when caught early. Signs to watch for: the foot returning to an inward/downward position, the child walking on the outer edge of the foot, increased calf tightness on the affected side, or the child complaining of foot or ankle pain. Early relapse is typically treated with repeat casting — catching it early means fewer casts and better outcomes.",
        relatedProducts: [],
      },
    ],
    resources: [
      { label: "Mitchell Ponseti AFO — OrthoPediatrics", url: "https://opsb.com/clubfoot" },
      { label: "Mitchell Ponseti Accessories (socks, bar covers)", url: "https://opsb.com/accessories" },
      { label: "Ponseti International — Bracing Guide", url: "https://www.ponseti.info/parents-patients.html" },
      { label: "Mitchell Brace Support Group (Facebook)", url: "https://www.facebook.com/groups/mitchellbrace" },
      { label: "STEPS Charity", url: "https://www.steps-charity.org.uk" },
    ],
    productCategories: ["clothing", "socks", "braces", "carriers", "strollers", "pack-and-play"],
  },
  {
    id: "long-term",
    label: "Long-term",
    emoji: "🏃",
    gradient: "from-emerald-500 to-green-700",
    bgLight: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    description: "After bracing ends — monitoring, physical activity, and what to expect for life.",
    keyPoints: [
      "Most children treated with the Ponseti method participate fully in sports, dance, and physical activities.",
      "Annual orthopedic check-ups are recommended through skeletal maturity (approximately age 16–18).",
      "A slightly smaller calf circumference on the treated side is common and usually causes no functional limitation.",
      "Relapse can occur even after bracing ends — typically in children under age 7. Annual monitoring catches it early.",
      "Signs of relapse: supination (walking on outer foot edge), toe-walking, increased tightness, foot pain.",
      "Some children benefit from custom orthotics or supportive footwear post-treatment, particularly for arch support.",
      "Shoe fit matters more for clubfoot-treated children — avoid narrow shoes, prioritize width and support.",
      "Many professional athletes, including Olympic athletes, have a history of clubfoot.",
      "Clubfoot does not affect intelligence, development, or any other aspect of health.",
    ],
    tips: [
      {
        title: "Keep your annual orthopedic appointments",
        detail:
          "Even when things look perfect, annual visits through skeletal maturity are genuinely important. Subtle gait changes or early relapse signs can be caught and addressed easily at this stage but become more complex if left unaddressed. Bring a short video of your child walking if you notice anything unusual — providers find video documentation helpful.",
        relatedProducts: [],
      },
      {
        title: "Invest in good footwear",
        detail:
          "Shoe choice matters more for clubfoot-treated children than for most. Key qualities: good arch support, a straight last, adequate width (extra-wide if using orthotics), and firm heel counters. The New Balance 928v3 in extra-wide (4E) is frequently recommended by PTs and orthotists as a platform for custom orthotics. Brooks Addiction Walker is another strong recommendation for motion control. Hoka Bondi in wide is popular for its cushioning.",
        relatedProducts: [26, 27, 28],
      },
      {
        title: "Consider physical therapy for calf symmetry",
        detail:
          "Many children have some asymmetry in calf size and strength on the treated side. A few sessions of PT focused on calf stretching, single-leg strengthening, and ankle mobility can meaningfully improve symmetry and function — particularly before starting organized sports. Ask your orthopedic provider if PT is appropriate at your child's next visit.",
        relatedProducts: [],
      },
      {
        title: "Custom orthotics: when and why",
        detail:
          "Not every child needs orthotics, but for those with residual arch issues, mild supination, or asymmetric foot structure, a custom molded orthotic can provide meaningful support. They're typically prescribed by your orthopedist or a pediatric podiatrist and covered by most insurance with a prescription. Plan to replace them every 12–18 months as the foot grows. Pair with extra-wide shoes for best fit.",
        relatedProducts: [29, 26],
      },
      {
        title: "Talk with your child about their story",
        detail:
          "Age-appropriate explanations help children own their experience rather than be confused by cast photos or scars. 'Your foot needed extra help to grow the right way, and it worked!' resonates well with young children. Older children often appreciate knowing that many professional athletes had clubfoot. Prepare them to answer peers' questions simply and confidently — 'I had a thing on my foot when I was a baby, it's all fixed.'",
        relatedProducts: [],
      },
      {
        title: "Watch for relapse through early childhood",
        detail:
          "The highest-risk period for relapse is ages 2–7, while the foot is still developing. After bracing ends, the vigilance shifts to parents and providers watching for early gait changes. Relapse caught early (one or two casts' worth of recurrence) is treated easily with repeat casting. Relapse caught late is more involved. The annual orthopedic check-up is the main mechanism — don't skip it.",
        relatedProducts: [],
      },
    ],
    resources: [
      { label: "Ponseti International", url: "https://www.ponseti.info" },
      { label: "STEPS Charity — Long-term outcomes", url: "https://www.steps-charity.org.uk/info-support/conditions/clubfoot/" },
      { label: "Clubfoot Support Community (Facebook)", url: "https://www.facebook.com/groups/clubfootsupport" },
      { label: "Reddit r/clubfoot — Adults with clubfoot", url: "https://www.reddit.com/r/clubfoot" },
    ],
    productCategories: ["shoes", "orthotics"],
  },
];
