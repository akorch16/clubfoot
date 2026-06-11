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
    description: "From diagnosis to birth",
    keyPoints: [],
    keyPointGroups: [
      {
        heading: "What it is",
        points: [
          "Clubfoot affects roughly 1 in 1,000 babies. You are far from alone.",
          "It's typically diagnosed on the 20-week anatomy ultrasound and confirmed at birth.",
          "The Ponseti method — gentle serial casting followed by a foot abduction brace (commonly called boots and bar, or B&B) — corrects clubfoot in over 95% of cases without surgery.",
          "Clubfoot does not cause pain in utero and does not affect the pregnancy itself.",
        ],
      },
      {
        heading: "Who it affects",
        points: [
          "Both feet are affected (bilateral) in about 50% of cases; treatment is the same — both feet are cast simultaneously.",
          "Boys are affected roughly twice as often as girls.",
          "If a parent or sibling had clubfoot, the recurrence risk is ~3–5%. Genetic counseling is available if desired.",
        ],
      },
      {
        heading: "Getting ready",
        points: [
          "Treatment ideally begins within the first 1–2 weeks of life while tissues are most pliable.",
          "Finding a Ponseti-trained provider before birth will save you critical time in the first days. Casting typically begins within 1–2 weeks of birth, so having a provider identified before delivery matters.",
        ],
      },
    ],
    tips: [
      {
        title: "Find a Ponseti-trained provider now",
        detail:
          "Not every pediatric orthopedic surgeon is Ponseti-trained. The technique requires specific training, and outcomes differ significantly between experienced Ponseti providers and those using other approaches. Ask your OB or maternal-fetal medicine specialist for a referral, or use the Ponseti International provider directory at ponseti.info. Aim to have your first appointment scheduled before birth — providers typically see your baby within a few days of discharge, not immediately at the hospital.",
        relatedProducts: [],
      },
      {
        title: "Stock up on footless clothing before birth",
        detail:
          "For the first 10 days after birth, before casting begins, regular newborn clothes work fine. Once casting starts, footed sleepers and booties become impractical. Footless sleepers — both snap/button and zip styles — are the essentials for the casting phase. Carter's footless sleepers are widely available and affordable. Avoid footed pajamas during casting: they cover the toes, which are your main daily warning sign for circulation problems. Buy sizes newborn through 3 months.",
        relatedProducts: [1],
      },
      {
        title: "Prepare your support circle early",
        detail:
          "Well-meaning family members may say alarming things. 'my neighbor's kid had surgery' (the Ponseti method usually avoids that), 'will they ever walk normally?' (almost certainly yes), or express general alarm. Gently sharing reliable resources early helps set accurate expectations. The Clubfoot Support Facebook group is worth joining before birth — thousands of parents have answered every question you'll have.",
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
    resources: [],
    productCategories: ["clothing", "socks", "car-seats"],
    featuredProductIds: [13, 14, 1, 5, 6],
  },
  {
    id: "casting",
    label: "Casting",
    emoji: "🦵",
    gradient: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    description: "Weekly plaster casts for 5-8 weeks",
    keyPoints: [],
    keyPointGroups: [
      {
        heading: "How it works",
        points: [
          "Each cast moves the foot incrementally closer to a neutral position. The correction is gradual and gentle.",
          "Casts are long-leg (above the knee) to control rotation — this is by design.",
          "Most babies need 5–8 casts; bilateral cases may require slightly more.",
          "The casting appointment takes 30–60 minutes: removal, skin check, brief manipulation, new cast.",
        ],
      },
      {
        heading: "The tenotomy",
        points: [
          "About 80% of children need an Achilles tenotomy — a minor in-office procedure — before the final cast.",
          "The final cast after tenotomy stays on for ~3 weeks while the tendon heals.",
        ],
      },
      {
        heading: "Day-to-day care",
        points: [
          "Never get casts wet — no baths, no puddles. Sponge baths only.",
          "Call your care team immediately if toes turn purple/white/cold or if baby is inconsolably crying — these are signs of a too-tight cast.",
          "Bring a blanket, pacifier, and a bottle or nursing setup — most babies settle quickly after manipulation.",
        ],
      },
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
          "Full-leg casts make normal dressing nearly impossible. Footless sleepers are the workhorse — snap or button styles are easier than zip when you only need to access the top half. Avoid footed pajamas entirely: they cover the toes, which are your main daily warning sign for circulation. The Zipadee-Zip sleep sack fits over casts for naps. For warmth, knee-high socks pulled up over the cast end work better than leg warmers because they cover the toes and let you keep monitoring.",
        relatedProducts: [1, 4],
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
          "The Achilles tenotomy is a small in-office procedure — a tiny nick in the tendon under local anesthetic that takes under 5 minutes. But don't let the brevity fool you: for many parents, this is emotionally the hardest day of the entire journey. It's okay if it's hard. The tendon heals completely in about 3 weeks under the post-tenotomy cast, and this cast goes on the same day. Your baby will likely settle quickly afterward, but give yourself grace for the feelings that come up.",
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
    resources: [],
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
    description: "Bracing until age 4-5",
    keyPoints: [],
    keyPointGroups: [
      {
        heading: "The brace",
        points: [
          "The foot abduction brace (FAB) holds the corrected foot/feet at a specific outward angle to maintain the correction achieved during casting.",
          "The most common brace in the US is the Mitchell Ponseti AFO from OrthoPediatrics/OPSB.",
          "The bar between the shoes is set at a specific angle by your orthotist — do not try to adjust it yourself.",
        ],
      },
      {
        heading: "Wearing schedule",
        points: [
          "Full-time wear (23 hours/day) for the first 3 months after casting. The transition to nights-and-naps is gradual — many providers reduce wear by 2 hours every 4–6 weeks rather than cutting immediately. The full schedule continues through age 4–5.",
          "Brace compliance is the single most important predictor of long-term success. Non-compliant bracing leads to relapse in ~80% of cases.",
          "Transitions (full-time → nights/naps) should always be guided by your orthopedic provider, not self-directed.",
        ],
      },
      {
        heading: "Daily care",
        points: [
          "Inspect skin daily, especially the heel. Blisters at the heel are common during the first weeks; most resolve with proper sock use.",
          "Growth means brace adjustments. In the first year, expect fit checks every 2–3 months — feet grow quickly and a poor fit causes blisters and reduces correction.",
          "Your baby's feet should be warm and pink in the shoes. Cold or discolored toes need immediate attention.",
        ],
      },
    ],
    tips: [
      {
        title: "Pick socks that protect from blisters",
        detail:
          "The most common cause of blisters in the brace is sock bunching or slipping. The key properties to look for: seamless toe, knee-high length, and good elastic that keeps them from sliding down. Many families use EPEIUS or Hudson Baby knee-highs with great results. The OrthoPediatrics Mitchell Ponseti bamboo socks are a more specialized option with a silicone grip strip. Whatever you use, pick light colors so you can see heel placement through the boot's heel hole. Buy at least 5–6 pairs so you always have clean ones available.",
        relatedProducts: [6],
      },
      {
        title: "Build a consistent brace routine",
        detail:
          "Consistency makes the brace feel routine rather than exceptional — for both you and your baby. Apply the brace at the same times every day: after every diaper change during the full-time phase, then at every nap and bedtime. Having a dedicated spot where you always do it (with socks, brace, and pressure saddle if using one) helps reduce the mental load. Plan on about 5 minutes per application in the early weeks — it gets faster with practice.",
        relatedProducts: [9, 10, 11],
      },
      {
        title: "Clothing with a bar: what actually works",
        detail:
          "The rigid bar between the shoes is about as wide as the hips — normal pants and footie pajamas won't work. The Zipadee-Zip sleep sack is widely considered the best sleep solution for the B&B phase. Little Sleepies footless rompers with two-way zips work well for daytime. Wide-leg pants and leggings with good stretch work for older babies. Many parents simply cut the feet off pajamas — it works fine.",
        relatedProducts: [4, 5, 1],
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
    resources: [],
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
    description: "Life after the brace",
    keyPoints: [],
    keyPointGroups: [
      {
        heading: "Life after bracing",
        points: [
          "Most children treated with the Ponseti method participate fully in sports, dance, and physical activities.",
          "A slightly smaller calf circumference on the treated side is common and usually causes no functional limitation.",
          "Many professional athletes, including Olympic athletes, have a history of clubfoot.",
          "Clubfoot does not affect intelligence, development, or any other aspect of health.",
        ],
      },
      {
        heading: "Staying vigilant",
        points: [
          "Annual orthopedic check-ups are recommended through skeletal maturity (approximately age 16–18).",
          "Relapse can occur even after bracing ends — typically in children under age 7. Annual monitoring catches it early.",
          "Signs of relapse: supination (walking on outer foot edge), toe-walking, increased tightness, foot pain.",
        ],
      },
      {
        heading: "Footwear & support",
        points: [
          "Some children benefit from custom orthotics or supportive footwear post-treatment, particularly for arch support.",
          "Shoe fit matters more for clubfoot-treated children — avoid narrow shoes, prioritize width and support.",
        ],
      },
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
          "Age-appropriate explanations help children own their experience rather than be confused by cast photos or scars. 'Your foot needed extra help to grow the right way, and it worked!' resonates well with young children. Older children often appreciate knowing that many professional athletes had clubfoot. Prepare them to answer peers' questions simply and confidently. 'I had a thing on my foot when I was a baby, it's all fixed.'",
        relatedProducts: [],
      },
      {
        title: "Watch for relapse through early childhood",
        detail:
          "The highest-risk period for relapse is ages 2–7, while the foot is still developing. After bracing ends, the vigilance shifts to parents and providers watching for early gait changes. Relapse caught early (one or two casts' worth of recurrence) is treated easily with repeat casting. Relapse caught late is more involved. The annual orthopedic check-up is the main mechanism — don't skip it.",
        relatedProducts: [],
      },
    ],
    resources: [],
    productCategories: ["shoes", "orthotics"],
  },
];
