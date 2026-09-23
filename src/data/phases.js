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
          "Clubfoot is a condition present at birth where one or both feet are turned inward and pointed down.",
          "Clubfoot affects roughly 1 in 1,000 babies.[[1]] You are far from alone.",
          "It's typically diagnosed on the 20-week anatomy ultrasound and confirmed at birth.",
          "The Ponseti method corrects clubfoot in over 95% of cases without surgery.[[2]] It's gentle serial casting followed by a foot abduction brace, commonly called boots and bar, or B&B.",
          "Clubfoot does not cause pain in utero and does not affect the pregnancy itself.",
        ],
      },
      {
        heading: "Who it affects",
        points: [
          "Both feet are affected (bilateral) in about 50% of cases.[[1]] Treatment is the same, and both feet are cast at once.",
          "Boys are affected roughly twice as often as girls.[[1]]",
          "If a sibling had clubfoot, the chance for a future child to have clubfoot is roughly 3 to 8%. If a parent also had clubfoot, the rate is 10%. Estimates vary by family and population.[[3]] Genetic counseling is available if you want it.",
        ],
      },
      {
        heading: "Getting ready",
        points: [
          "Treatment ideally begins in the first 1-2 weeks of life, while the tissues are still soft and flexible.[[2]]",
          "Finding a Ponseti-trained provider before birth saves you time in the first days. Casting usually begins within 1-2 weeks of birth, so line up a provider before delivery.",
        ],
      },
    ],
    tips: [
      {
        title: "Find a Ponseti-trained provider now",
        detail:
          "Not every pediatric orthopedic surgeon is Ponseti-trained. The technique takes specific training, and outcomes differ between experienced Ponseti providers and those using other approaches. Ask your OB or maternal-fetal medicine specialist for a referral, or use the Ponseti International provider directory at ponseti.info. Try to have your first appointment booked before birth. Providers usually see your baby within a few days of discharge, not right away at the hospital.",
        relatedProducts: [],
      },
      {
        title: "Stock up on footless clothing before birth",
        detail:
          "For the first 10 days after birth, before casting begins, regular newborn clothes work fine. Once casting starts, footed sleepers and booties stop being practical. Footless sleepers are the essentials for the casting phase, in both snap/button and zip styles. Carter's footless sleepers are easy to find and affordable. Avoid footed pajamas during casting. They cover the toes, which are your main daily warning sign for circulation problems. Buy sizes newborn through 3 months.",
        relatedProducts: [1],
      },
      {
        title: "Prepare your support circle early",
        detail:
          "Well-meaning family members may say alarming things. 'My neighbor's kid had surgery' (the Ponseti method usually avoids that), or 'will they ever walk normally?' (almost certainly yes). Sharing good resources early helps set expectations. The Clubfoot Support Facebook group is worth joining before birth. Thousands of parents have answered every question you'll have.",
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
          "Clubfoot treatment takes years, so it helps to know the whole arc up front. Expect about 5-8 weekly casting appointments, then a minor Achilles procedure (a tenotomy) for most children, then a foot abduction brace worn full time for 3 months, then nights and naps until age 4-5. Each phase has its own challenges. Millions of families have finished it.",
        relatedProducts: [],
      },
      {
        title: "If your child's clubfoot is atypical or syndromic",
        detail:
          "Most clubfoot is idiopathic, which means it happens on its own, and the numbers on this site describe that case. Some clubfoot is atypical (a short, stiff, chubby foot with deep creases) or syndromic (part of a condition like arthrogryposis, myelomeningocele, or Larsen syndrome). These still respond to the Ponseti method, but they often take more casts, relapse more often, and follow a less predictable course. If your provider has used either word, ask them what to expect for your child specifically. The Ponseti International site at ponseti.medicine.uiowa.edu has more detail.",
        relatedProducts: [],
      },
    ],
    resources: [],
    sources: [
      { id: 1, label: "PM&R KnowledgeNow — Club Foot (epidemiology).", url: "https://now.aapmr.org/club-foot/" },
      { id: 2, label: "Ponseti International Association, University of Iowa.", url: "https://ponseti.medicine.uiowa.edu/what-clubfoot/ponseti-method" },
      { id: 3, label: "OMIM #119800 — Clubfoot, Congenital (recurrence and genetics).", url: "https://omim.org/entry/119800" },
      { id: 4, label: "Owen RM, Capper B, Lavy C. Clubfoot treatment in 2015: a global perspective. BMJ Glob Health. 2018;3(4):e000852.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6135438/" },
    ],
    encouragement: {
      headline: "If you just got a diagnosis, take a breath.",
      body: "This is one of the most treatable conditions in pediatric orthopedics. The Ponseti method works in over 95% of cases. Children can go on to run and play sports like any other kid. Hundreds of thousands of families have gone through this before you[[4]] and many are here to support you.",
    },
    videos: [
      {
        title: "What is clubfoot? Prenatal diagnosis explained",
        youtubeId: "poMLd-BujDU",
        isShort: true,
      },
    ],
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
          "Each cast moves the foot a little closer to a neutral position. The correction is gradual and gentle.",
          "Casts are long-leg, above the knee, to control rotation.[[1]] This is on purpose.",
          "Most babies need 5-8 casts.[[1]] Bilateral cases may need a few more.",
          "The casting appointment is usually under an hour, often quicker: the old cast off, a skin check, a brief manipulation, then the new cast.",
        ],
      },
      {
        heading: "The tenotomy",
        points: [
          "About 80% of children need an Achilles tenotomy before the final cast.[[1]] It's a minor in-office procedure.",
          "The final cast after the tenotomy stays on for about 3 weeks while the tendon heals.[[1]]",
        ],
      },
      {
        heading: "Day-to-day care",
        points: [
          "Keep casts dry during wear. No baths, no puddles. Sponge baths only.",
          "On removal day, many clinics have you soak the last cast off at home first: warm water with a splash of vinegar, about 15-20 minutes, shortly before the appointment. Check your clinic's preference.[[4]]",
          "Call your care team right away if toes turn purple, white, or cold, or if your baby is inconsolable. These can be signs of a too-tight cast.",
          "Bring a blanket, a pacifier, and a bottle or nursing setup. Most babies settle quickly after the manipulation.",
        ],
      },
    ],
    tips: [
      {
        title: "Perfect your sponge bath routine",
        detail:
          "Full baths are out for the whole casting phase. Getting a cast wet can cause skin breakdown, infection, and cast failure. The Puj Flyte flat tub insert is the most popular option. It fits in most kitchen sinks, folds flat, and keeps your baby comfortable while you wipe down the head, neck, armpits, and diaper area with a warm cloth. Have the setup ready before you leave the hospital.",
        relatedProducts: [22],
      },
      {
        title: "Choose clothes that work with full-leg casts",
        detail:
          "Footed pajamas, booties, and anything that covers the toes are off the table during casting. Visible toe color is your main daily warning sign for circulation problems. Footless zip sleepers are the easiest option for most changes. Snap-bottom styles work well for tops. The Zipadee-Zip sleep sack fits over full-leg casts for safe sleep. For warmth, pull knee-high socks up over the end of the cast. They cover the toes and let you keep an eye on things at a glance.",
        relatedProducts: [1, 4],
      },
      {
        title: "Know the warning signs of a problem cast",
        detail:
          "A well-applied cast shouldn't cause more than a few minutes of fussiness after it goes on. Call your care team right away if you see any of these: toes that are purple, white, mottled, or cold to the touch, toes that don't move or wiggle, a baby who is inconsolable 30 minutes or more after the cast went on, or a cast that suddenly feels loose or cracks. When in doubt, call.",
        relatedProducts: [],
      },
      {
        title: "Prepare for the tenotomy appointment",
        detail:
          "The Achilles tenotomy is a small in-office procedure. It's a tiny nick in the tendon under local anesthetic, and it takes under five minutes. Even so, a lot of parents find this the hardest day of the whole journey. It's okay if it's hard. The tendon heals in about three weeks under the post-tenotomy cast, which goes on the same day. Your baby will likely settle quickly. Be kind to yourself if it hits harder than you expected.",
        relatedProducts: [],
      },
      {
        title: "Car seat safety with casts",
        detail:
          "Car seat fit changes a lot with full-leg casts. The Chicco KeyFit 35 and Britax B-Safe Ultra are the most recommended infant seats for casts. Always do a real fit check with the casts on, not just with the seat out of the car. Some parents put a tightly rolled receiving blanket under the knees to help positioning. Check this with your care team first.",
        relatedProducts: [13, 14],
      },
      {
        title: "Track everything: a cast log helps",
        detail:
          "Keep a simple running note of cast dates, cast numbers, which leg or legs, any skin issues, and how many casts are left. Take a photo after each cast change. The progress is easy to see, and it helps family follow along. A lot of parents go back to those early photos at the end of treatment and can't believe how far it came.",
        relatedProducts: [],
      },
    ],
    resources: [],
    sources: [
      { id: 1, label: "Radler C. The Ponseti method for the treatment of congenital club foot: review of the current literature and treatment recommendations. Int Orthop. 2013;37(9):1747-1753.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764299/" },
      { id: 2, label: "Ponseti International Association, University of Iowa.", url: "https://ponseti.medicine.uiowa.edu/what-clubfoot/ponseti-method" },
      { id: 3, label: "POSNA (Pediatric Orthopaedic Society of North America) — Clubfoot study guide.", url: "https://posna.org/physician-education/study-guide/clubfoot" },
      { id: 4, label: "Cast removal by soaking reduces infant and parental anxiety without affecting outcomes: a prospective controlled trial. Children (Basel). 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13510393/" },
    ],
    encouragement: {
      headline: "Each cast is a week of progress, and you'll see it.",
      body: "The Ponseti technique makes small corrections at every appointment. Most babies need 5-8 casts, and you can see the change week to week. By the last cast, you'll look back at the week-one photos and barely recognize that foot.",
    },
    videos: [
      {
        title: "What to expect at each casting appointment",
        youtubeId: "I5BeHl83v_Q",
      },
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
    description: "Bracing until age 4-5",
    keyPoints: [],
    keyPointGroups: [
      {
        heading: "The brace",
        points: [
          "The foot abduction brace (FAB) holds the corrected foot or feet at a set outward angle to hold the correction from casting.",
          "The most common brace in the US is the Mitchell Ponseti AFO from OrthoPediatrics/OPSB.",
          "Your orthotist sets the bar between the shoes at a specific angle. Don't try to adjust it yourself.",
        ],
      },
      {
        heading: "Wearing schedule",
        points: [
          "Full-time wear (23 hours a day) for the first 3 months after casting. The move to nights and naps is gradual. Many providers cut wear by 2 hours every 4-6 weeks rather than dropping it all at once. The full schedule continues through age 4-5.[[1]]",
          "Sticking to the brace schedule is the biggest predictor of long-term success. Most relapses happen when brace wear slips; with consistent bracing the relapse rate is low.[[1]]",
          "Let your orthopedic provider guide the transitions from full-time to nights and naps. Don't do it on your own.",
        ],
      },
      {
        heading: "Daily care",
        points: [
          "Check the skin every day, especially the heel. Heel blisters are common in the first weeks, and most clear up with the right socks.",
          "As your baby grows, the brace needs adjusting. In the first year, expect fit checks every 2-3 months. Feet grow fast, and a poor fit causes blisters and holds the correction back.",
          "Your baby's feet should be warm and pink in the shoes. Cold or discolored toes need attention right away.",
        ],
      },
    ],
    tips: [
      {
        title: "Pick socks that protect from blisters",
        detail:
          "The most common cause of blisters in the brace is socks bunching or slipping. Look for a seamless toe, knee-high length, and good elastic that keeps them from sliding down. Many families use EPEIUS or Hudson Baby knee-highs and like them. The OrthoPediatrics Mitchell Ponseti bamboo socks are a more specialized option with a silicone grip strip. Whatever you use, pick light colors so you can see heel placement through the boot's heel hole. Buy at least 5-6 pairs so you always have clean ones on hand.",
        relatedProducts: [6],
      },
      {
        title: "When your baby escapes the brace",
        detail:
          "Babies working a foot out of the brace is common and fixable. It usually means a strap is too loose, so check the fit first. Tighten the middle strap first, since that's the one holding the foot down, then the others. If the heel still lifts out, try lacing the shoe tighter or taking out the shoe's tongue for a snugger fit. If it keeps happening, ask your orthotist to adjust or widen the brace. A foot that keeps escaping isn't holding the correction, so don't let it slide.",
        relatedProducts: [],
      },
      {
        title: "Build a consistent brace routine",
        detail:
          "A routine makes the brace feel normal for both you and your baby. Put it on at the same times every day: after each diaper change during the full-time phase, then at every nap and bedtime. Keep one spot where you always do it, with the socks, brace, and pressure saddle if you use one. It cuts down the mental load. Plan on about 5 minutes per application in the early weeks. It gets faster with practice.",
        relatedProducts: [9, 10, 11],
      },
      {
        title: "Clothing that works with the bar",
        detail:
          "The rigid bar between the shoes is about as wide as the hips, so normal pants and footie pajamas won't work. The Zipadee-Zip sleep sack is a favorite for sleep in the B&B phase. Little Sleepies footless rompers with two-way zips work well for daytime. Wide-leg pants and leggings with good stretch work for older babies. Plenty of parents just cut the feet off pajamas, and it works fine.",
        relatedProducts: [4, 5, 1],
      },
      {
        title: "Baby wearing with a brace bar",
        detail:
          "Structured carriers are harder with the bar. Ring slings are the most flexible option and work across all phases. The one-shoulder design lets you adjust positioning around the bar. For longer carries, the Solly Baby wrap (with a modified carry) and Ergobaby Omni 360 are community favorites in the older B&B phase.",
        relatedProducts: [17, 16, 18],
      },
      {
        title: "Strollers: check bar clearance before buying",
        detail:
          "The bar sticks out past the shoes, so the footrest has to make room for it. The UPPAbaby Vista and Bugaboo Fox come up most often, and both have open footrests that work well. The BABYZEN YOYO is hit or miss, so test it in-store with the brace before buying. The bassinet mode on most travel systems works well in the early B&B phase, before your baby sits upright.",
        relatedProducts: [19, 20, 21],
      },
      {
        title: "Managing night waking (it does get better)",
        detail:
          "The first 2-4 weeks in the brace full-time are the hardest. Most babies sleep poorly for a while as they get used to the new feeling. The Zipadee-Zip helps because it allows some self-soothing movement. A white noise machine, a pacifier, and patience are your tools. It almost always improves. Most parents say that within 3-4 weeks their baby sleeps normally in the brace. Post in the Facebook group at 2am. Someone is always awake.",
        relatedProducts: [4],
      },
      {
        title: "Recognize the signs of relapse early",
        detail:
          "Relapse is common, especially if brace wear slips, and it's treatable when caught early. Watch for the foot turning inward or downward, the child walking on the outer edge of the foot, more calf tightness on the affected side, or complaints of foot or ankle pain. Early relapse is usually treated with repeat casting, and catching it early means fewer casts and a better outcome.",
        relatedProducts: [],
      },
    ],
    resources: [],
    sources: [
      { id: 1, label: "Zionts LE, Dietz FR. Bracing following correction of idiopathic clubfoot using the Ponseti method. J Am Acad Orthop Surg. 2010;18(8):486-493.", url: "https://pubmed.ncbi.nlm.nih.gov/20675641/" },
      { id: 2, label: "Radler C. The Ponseti method: review of the current literature and treatment recommendations. Int Orthop. 2013;37(9):1747-1753.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764299/" },
      { id: 3, label: "Ponseti International Association, University of Iowa.", url: "https://ponseti.medicine.uiowa.edu/" },
    ],
    encouragement: {
      headline: "The brace phase is hard. It's also where everything is protected.",
      body: "Full-time bracing is the part most families find toughest. The sleepless nights and adjustments are real. But this phase is what locks in everything casting built. Families who see it through watch their kids run and play and never think about their foot again.",
    },
    videos: [
      {
        title: "How to apply the Mitchell Ponseti boots and bar",
        youtubeId: "nVvua3-FvUQ",
      },
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
    description: "Life after the brace",
    keyPoints: [],
    keyPointGroups: [
      {
        heading: "Life after bracing",
        points: [
          "Most children treated with the Ponseti method take part fully in sports, dance, and other activities.[[1]]",
          "A slightly smaller calf on the treated side is common and usually causes no real limitation.[[1]]",
          "Many professional athletes, including Olympic athletes, have a history of clubfoot.",
          "Clubfoot doesn't affect intelligence, development, or health in any other way.",
        ],
      },
      {
        heading: "Staying vigilant",
        points: [
          "Annual orthopedic check-ups are recommended through skeletal maturity, around age 16-18.[[2]]",
          "Relapse can happen even after bracing ends, usually in children under age 7. Annual check-ups catch it early.[[2]]",
          "Signs of relapse: supination (walking on the outer edge of the foot), toe-walking, more tightness, and foot pain.",
        ],
      },
      {
        heading: "Footwear & support",
        points: [
          "Some children do better with custom orthotics or supportive shoes after treatment, especially for arch support.",
          "Shoe fit matters more for clubfoot-treated children. Skip narrow shoes, and look for width and support.",
        ],
      },
    ],
    tips: [
      {
        title: "Keep your annual orthopedic appointments",
        detail:
          "Even when things look perfect, keep the annual visits through skeletal maturity. Small gait changes or early relapse signs are easy to catch and treat at this stage, but harder to fix if they're left alone. Bring a short video of your child walking if you notice anything off. Providers find it helpful.",
        relatedProducts: [],
      },
      {
        title: "Invest in good footwear",
        detail:
          "Shoe choice matters more for clubfoot-treated children than for most. Look for good arch support, a straight last, enough width (extra-wide if using orthotics), and firm heel counters. PTs and orthotists often recommend the New Balance 928v3 in extra-wide (4E) as a base for custom orthotics. The Brooks Addiction Walker is another good pick for motion control. The Hoka Bondi in wide is popular for its cushioning.",
        relatedProducts: [26, 27, 28],
      },
      {
        title: "Consider physical therapy for calf symmetry",
        detail:
          "Many children have some difference in calf size and strength on the treated side. A few sessions of PT focused on calf stretching, single-leg strengthening, and ankle mobility can improve symmetry and function, especially before starting organized sports. Ask your orthopedic provider whether PT makes sense at your child's next visit.",
        relatedProducts: [],
      },
      {
        title: "Custom orthotics: when and why",
        detail:
          "Not every child needs orthotics. For kids with lingering arch issues, mild supination, or an uneven foot structure, a custom molded orthotic can add real support. Your orthopedist or a pediatric podiatrist prescribes them, and most insurance covers them with a prescription. Plan to replace them every 12-18 months as the foot grows. Pair them with extra-wide shoes for the best fit.",
        relatedProducts: [29, 26],
      },
      {
        title: "Talk with your child about their story",
        detail:
          "Simple, age-appropriate explanations help kids own their story instead of being confused by cast photos or scars. 'Your foot needed extra help to grow the right way, and it worked!' lands well with young children. Older kids often like knowing that many pro athletes had clubfoot. Give them an easy answer for peers' questions, like 'I had a thing on my foot when I was a baby, and it's all fixed.'",
        relatedProducts: [],
      },
      {
        title: "Watch for relapse through early childhood",
        detail:
          "The highest-risk window for relapse is ages 2-7, while the foot is still developing. After bracing ends, it's on parents and providers to watch for early gait changes. Relapse caught early, at one or two casts' worth, is easy to treat with repeat casting. Caught late, it's more involved. The annual orthopedic check-up is how you catch it, so don't skip it.",
        relatedProducts: [],
      },
    ],
    resources: [],
    sources: [
      { id: 1, label: "Long-term outcomes of the Ponseti method for treatment of clubfoot: a systematic review. Int Orthop. 2021.", url: "https://link.springer.com/article/10.1007/s00264-021-05189-w" },
      { id: 2, label: "Radler C. The Ponseti method: review of the current literature and treatment recommendations. Int Orthop. 2013;37(9):1747-1753.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764299/" },
    ],
    encouragement: {
      headline: "The hardest part is behind you.",
      body: "Casting, tenotomy, full-time bracing: you got through all of it. From here it's a gradual handoff to a normal childhood, with part-time bracing and regular check-ins to protect the correction. The large majority of Ponseti-treated children live without limitations as adults.",
    },
    productCategories: ["shoes", "orthotics"],
  },
];
