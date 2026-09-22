# Clubfoot Club — Content Accuracy Audit

**Purpose:** trace every medical and factual claim on the site to an authoritative source, or flag it for correction or expert sign-off. Prompted by feedback that the content read as AI-written and contained inaccuracies.

**How to use this:** work top to bottom. Fix the ⚠️ items first (some are medical). Take the 👨‍⚕️ list to your orthopedist for sign-off. The product/doctor section is a method, not a full check — those need per-item link verification.

**Status legend**
- ✅ **Verified** — matches authoritative sources
- ⚠️ **Fix** — inaccurate, misstated, or internally inconsistent
- 🔎 **Needs source** — plausible but not yet traced
- 👨‍⚕️ **Clinician sign-off** — a care/urgency claim only your orthopedist should confirm

**Principle:** the site should not summarize other websites. Every clinical claim traces to the Ponseti International Association (University of Iowa), published clinical guidelines, or your orthopedist. Every number carries a source. If it can't be sourced, it gets cut.

---

## 1. Core statistics — verified against literature

| Claim (as on site) | Where | Evidence | Verdict |
|---|---|---|---|
| Clubfoot affects ~1 in 1,000 babies | phases (prenatal), FAQ #1 | Literature: 1–2 per 1,000 live births; EUROCAT 1.13/1,000 | ✅ (low end; "about 1 to 2 in 1,000" would be more precise) |
| Boys affected ~2x as often as girls | phases, FAQ #10 | Consistent 2:1 male:female across populations | ✅ |
| Bilateral in ~50% of cases | phases, FAQ #11 | 30–50%; 50% commonly cited | ✅ |
| Most clubfoot is idiopathic | method (Types) | ~80% isolated/idiopathic | ✅ |
| ~5–8 casts | phases, method, FAQ | Standard teaching; mean ~5–6 | ✅ |
| ~80% need an Achilles tenotomy | phases, method, FAQ #5 | 80–90% of idiopathic cases | ✅ (low end of 80–90%) |
| Final cast after tenotomy ~3 weeks | phases, FAQ #5 | Standard | ✅ |
| Full-time brace 23 hrs/day for 3 months | phases, method, FAQ #6 | Matches Ponseti protocol | ✅ |
| Bracing continues to age 4–5 | phases, method, FAQ #6 | 4–5 years of bracing | ✅ |

**Sources:** [PM&R KnowledgeNow — Club Foot](https://now.aapmr.org/club-foot/), [Descriptive Epidemiology of Idiopathic Clubfoot (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3689855/), [POSNA Clubfoot study guide](https://posna.org/physician-education/study-guide/clubfoot), [Ponseti International Association](https://ponseti.medicine.uiowa.edu/).

---

## 2. Issues found — fix these

### ⚠️ 2a. Relapse-from-noncompliance is misstated (highest priority)
- **Site says:** "Non-compliant bracing leads to relapse in ~80% of cases" (phases, boots-and-bar); "The relapse rate for inconsistent bracing is around 80%" (FAQ #6).
- **Problem:** this reads as *"80% of non-compliant children relapse."* The evidence says something different: **most relapses (~78–86%) are attributable to non-compliance**, and non-compliant patients are dramatically more likely to relapse (one study: 183x). With full compliance, only ~7% relapse.
- **Fix:** reword to the accurate claim, e.g. *"Most relapses happen when brace wear slips. With consistent bracing the relapse rate is low (around 7% in studies); skipping wear is the single biggest risk factor."*
- **Source:** [Factors associated with relapse in Ponseti-treated clubfoot (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8790874/), [Relapse and the foot abduction orthosis (PubMed)](https://pubmed.ncbi.nlm.nih.gov/25177447/).

### ⚠️ 2b. Nights-and-naps brace hours
- **Site says:** FAQ #6 — "14 to 16 hours a day (nights and naps)."
- **Evidence:** the nights/naps phase averages **~12–14 hours/day**.
- **Fix:** change to "about 12 to 14 hours a day."

### ⚠️ 2c. Recurrence risk is understated and internally inconsistent
- **Site says:** phases (prenatal) — "If a parent or sibling had clubfoot, the recurrence risk is about 3–5%." FAQ #10 — "if one parent had clubfoot, the risk for a child is about 3–4%; if a sibling had it, about 2–5%."
- **Problems:** (1) the two pages disagree; (2) both are on the **low side**. Literature: recurrence in a later sibling ~**3–8%**, and ~**10%** when a parent is also affected; overall familial recurrence is higher still.
- **Fix:** make the two pages consistent and widen the range, e.g. *"If a sibling had clubfoot, the risk for a later child is roughly 3–8%. It's higher (around 10%) if a parent also had it. Estimates vary by family and population."* Confirm the exact framing with your orthopedist or a genetic counselor.
- **Source:** [OMIM 119800 — Congenital Clubfoot](https://omim.org/entry/119800), [Heritability of clubfoot: a twin study](https://link.springer.com/article/10.1007/s11832-014-0562-7).

### ⚠️ 2d. "over 95%" success rate — optimistic wording
- **Site says:** "over 95%" in several places (method, FAQ #2, home encouragement, phase encouragements).
- **Evidence:** literature says "**approximately 95%**" for isolated clubfeet. The Ponseti International site itself says 95%+, so "over 95%" is defensible **when attributed to them** (which the method page's Sources section now does).
- **Fix (optional):** either keep and lean on the Iowa attribution, or soften to "about 95%." Just make sure it's attributed, not stated as your own finding. Note it applies to **idiopathic** clubfoot, not syndromic.

### ⚠️ 2e. "over 95% ... live without limitations" (home + encouragements)
- **Site says:** home encouragement — "over 95% of children go on to run, play sports, and live without limitations."
- **Note:** the 95% figure is a **correction/success** rate, not strictly a "no limitations for life" rate. The two get conflated. Consider separating: correction success (~95%) vs functional outcomes (most treated children have normal function, sometimes a smaller calf/foot). Keep the tone, tighten the claim.

---

## 3. Clinical claims for orthopedist sign-off (👨‍⚕️)

These are care/urgency instructions where only a clinician should confirm the exact guidance. Bring this list to your orthopedist.

**Scan tool conditions (`src/data/conditions.js`) — the `actionText` for each:**
- `cast_too_tight` → "Contact your care team or go to urgent care now." — confirm threshold/urgency.
- `cast_wet_or_damaged` → "Call your care team today." — confirm.
- `brace_blister_or_redness` → "Apply a bandage or moleskin and keep wearing the brace. Only leave the brace off if there is an open, painful sore." — **confirm this is correct guidance** (this was already the subject of one bug fix). Open vs forming blister handling.
- `foot_relapse_signs` → "Contact your orthopedic provider promptly." — confirm urgency.

**Scan model rules (`src/services/vision.js` SYSTEM_PROMPT):** the whole clinical rubric (toe-color thresholds, blister classification, duoderm guidance, abduction angles 60–70°/30–40°, blood-staining "larger than a quarter" threshold, etc.) is community/clinically sourced but should be **reviewed by your orthopedist** since the scan tool acts on it. This is the highest-leverage clinical review in the whole app.

**Phase care instructions to confirm:**
- Casting: "Never get casts wet," too-tight cast warning signs, tenotomy description ("tiny nick … under five minutes").
- Boots & bar: blister guidance, brace-escape fixes (tighten middle strap first, remove tongue, widen), relapse signs.
- Long-term: relapse window (site says ages 2–7 / under 7), annual check-ups to skeletal maturity (~16–18), orthotics guidance.

---

## 4. Per-page claim inventory

### Method page (`PonsetiMethod.jsx`)
- "Developed by Dr. Ignacio Ponseti at the University of Iowa starting in the 1950s / 1940s and 50s" — ✅ (Ponseti developed it at Iowa mid-20th century; keep dates consistent — one spot says 1950s, another 1940s–50s).
- "cartilage … more pliable than bone … correction is set once it ossifies" — 🔎 broadly accurate mechanism; confirm phrasing with clinician.
- Types of clubfoot (idiopathic / atypical / syndromic) — ✅ aligns with Iowa; syndromic "more casts, higher relapse" ✅.
- Sources section — ✅ already added.

### Phases (`src/data/phases.js`)
- Prenatal key facts — see §1 and §2c (recurrence).
- "Treatment ideally begins in the first 1–2 weeks of life" — ✅ standard.
- Casting facts (long-leg casts, 5–8 casts, tenotomy ~80%) — ✅.
- Boots & bar wearing schedule — see §2a (relapse wording).
- Atypical/syndromic note — ✅.

### FAQs (`src/data/faqs.js`)
- #1 incidence, #2 success, #5 tenotomy — ✅ (see §1, §2d).
- #6 brace hours — ⚠️ (§2b) and relapse ~80% — ⚠️ (§2a).
- #10 recurrence — ⚠️ (§2c).
- Others (#3, #4, #7, #8, #9, #11) — care/observation claims; 👨‍⚕️ light review, no obvious errors.

### Conditions / scan (`src/data/conditions.js`, `vision.js`)
- All `actionText` and the scan rubric → §3 (clinician sign-off).

---

## 4b. Casting page — focused review (the page a reviewer flagged)

### ⚠️ Omission: home cast removal by soaking (highest-value fix)
- **Current:** "Never get casts wet. No baths, no puddles. Sponge baths only." True during wear, but it omits removal day.
- **What's missing:** many clinics have families **soak the last cast off at home** before the appointment — warm water (basin, baby tub, or plastic bag), a splash of clear vinegar to soften the plaster, ~15–20 minutes. Do it **shortly before the appointment (within a couple hours), not the night before** — removing too early can let the foot regress and add casts. A controlled trial found soak-removal lowered infant distress and parental anxiety vs the oscillating saw, with equivalent outcomes.
- **Fix:** keep "dry during wear," and add a short "removal day" note with the soak method and a "confirm your clinic's preference" caveat. This is exactly the lived-experience detail an experienced parent expects to see.
- **Source:** [Cast removal by soaking — controlled trial (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13510393/), [Gillette — Ponseti cast application, care, and removal](https://www.gillettechildrens.org/your-visit/patient-education/ponseti-cast-application-and-removal), [STEPS — Ponseti for parents practical tips](https://steps.org.za/news-blog/ponseti-for-parents-practical-tips/).

### ⚠️ Appointment length overstated / unsourced
- "The casting appointment takes 30–60 minutes." No authoritative duration; routine cast changes are often quicker. Soften to "usually under an hour, often quicker," or drop the specific range.

### ⚠️ Cast-count range
- "Most babies need 5–8 casts." Defensible, but sources cluster around 4–7 (often ~5–6). Consider "usually about 4 to 8, depending on severity." Source: [Gillette — Ponseti casting](https://www.gillettechildrens.org/conditions-care/what-is-ponseti-casting), [ClubfootForward casting schedule](https://www.clubfootforward.com/casting-schedule/).

### Possible omissions (parent knowledge, worth adding)
- Casts can **slip down or off** a chubby leg — what to do (the scan tool has a `cast_loose` condition, but the casting page never mentions it).
- After removal, skin is **peely, flaky, and tender for a few days** — normal.

---

## 5. Products & doctors — verification method (Tier 3)

Not a full check here; this is the method to run.

**Products (`src/data/products.js`), ~30 items:**
- **Links:** click every `url`; confirm it resolves to the right product (some are Amazon search URLs, which is fine but can drift).
- **Claims:** each `description`/`tip` makes specific claims ("most recommended," "brace-compatible," widths, prices). Prices go stale fast — either remove hard prices or mark them approximate. "Most recommended" / "community favorite" claims should reflect current group consensus (good question for Kori).
- **Brand/spec accuracy:** confirm model names and that "extra-wide (4E)", "two-way zip", etc. are still accurate for the current product.

**Doctors (`src/data/doctors.js`), 319 entries:**
- **Provenance:** sourced from the Ponseti International directory. Confirm the snapshot date and re-sync periodically — providers move, retire, and change contact info.
- **Spot-check:** verify a sample of phone numbers/emails; flag a "last verified" date. Consider linking each to the live Iowa directory entry rather than hard-coding contact details that decay.

---

## 6. Recommended fix order

1. **§2a relapse wording** and **§3 scan-rule review** — anything the scan tool acts on, first.
2. **§2b, §2c, §2d/2e** — the statistical fixes (brace hours, recurrence, success-rate attribution).
3. **Orthopedist sign-off** on the §3 clinical list.
4. **Products/doctors** link + freshness pass (§5), with Kori's input on product consensus.

---

## Sources
- Ponseti International Association (University of Iowa): https://ponseti.medicine.uiowa.edu/
- PM&R KnowledgeNow — Club Foot: https://now.aapmr.org/club-foot/
- POSNA Clubfoot study guide: https://posna.org/physician-education/study-guide/clubfoot
- Descriptive Epidemiology of Idiopathic Clubfoot (PMC3689855): https://pmc.ncbi.nlm.nih.gov/articles/PMC3689855/
- Factors associated with relapse in Ponseti-treated clubfoot (PMC8790874): https://pmc.ncbi.nlm.nih.gov/articles/PMC8790874/
- Relapse and the foot abduction orthosis (PubMed 25177447): https://pubmed.ncbi.nlm.nih.gov/25177447/
- OMIM 119800 — Congenital Clubfoot: https://omim.org/entry/119800
- Heritability of clubfoot: a twin study: https://link.springer.com/article/10.1007/s11832-014-0562-7

*Statistics vary by study and population. Where ranges differ, prefer the wider/hedged phrasing and attribute to a source. This audit covers medical and statistical claims; it is not itself medical advice.*
