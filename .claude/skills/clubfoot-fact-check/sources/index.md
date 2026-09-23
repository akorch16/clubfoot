# Clubfoot Club — Source Library

Persistent library of primary/authoritative sources backing the site's clinical and factual claims. Read `../SKILL.md` first for how to use this. IDs are stable and never reused — if a source is superseded, mark it `[DEPRECATED: reason]` rather than deleting the entry, so the history of why a claim changed stays visible.

**Tiers:** 1 systematic review/meta-analysis · 2 RCT · 3 cohort/comparative study · 4 professional body guideline (POSNA, PIA, hospital clinical program) · 5 narrative/historical review · 6 clinical-institution patient-education page · 7 reference database.

Template for a new entry:

```
## S0xx — Short title
- **Citation:** Full citation as it should appear on-site.
- **URL:** https://...
- **Tier:** 1-7 (see above)
- **Topics:** comma, separated, tags
- **Key facts extracted:** in the source's own terms, not paraphrased to sound stronger.
- **Used on site:** page/phase + local source id, or "not yet used"
```

---

## S001 — PM&R KnowledgeNow — Club Foot
- **Citation:** PM&R KnowledgeNow — Club Foot (epidemiology).
- **URL:** https://now.aapmr.org/club-foot/
- **Tier:** 4 (professional body clinical reference — AAPM&R)
- **Topics:** epidemiology, incidence, sex ratio, bilateral rate
- **Key facts extracted:** Clubfoot incidence roughly 1 in 1,000 live births; affects boys roughly twice as often as girls; bilateral in about 50% of cases.
- **Used on site:** Prenatal phase, local source id 1 (`src/data/phases.js`)

## S002 — Ponseti International Association — What is Clubfoot
- **Citation:** Ponseti International Association, University of Iowa.
- **URL:** https://ponseti.medicine.uiowa.edu/what-clubfoot/ponseti-method
- **Tier:** 4 (the originating clinical program's own reference site)
- **Topics:** ponseti method, non-surgical correction rate, general overview
- **Key facts extracted:** The Ponseti method corrects clubfoot in over 95% of cases without major surgery; describes serial casting followed by a foot abduction brace.
- **Used on site:** Prenatal phase (id 2), Boots & Bar phase (id 3, root URL), `PonsetiMethod.jsx` (id 1) — all in `src/data/phases.js` / `src/pages/PonsetiMethod.jsx`

## S003 — OMIM #119800
- **Citation:** OMIM #119800 — Clubfoot, Congenital (recurrence and genetics).
- **URL:** https://omim.org/entry/119800
- **Tier:** 7 (reference database)
- **Topics:** genetics, recurrence risk, sibling/parent recurrence
- **Key facts extracted:** Recurrence risk if a sibling was affected is roughly 3-8%; roughly 10% if a parent was also affected. Estimates vary by family and population studied.
- **Used on site:** Prenatal phase, local source id 3

## S004 — Owen, Capper & Lavy 2018 — Clubfoot treatment in 2015: a global perspective
- **Citation:** Owen RM, Capper B, Lavy C. Clubfoot treatment in 2015: a global perspective. BMJ Glob Health. 2018;3(4):e000852.
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC6135438/
- **Tier:** 5 (global-perspective review)
- **Topics:** global burden, families treated, scale of Ponseti adoption
- **Key facts extracted:** Supports the scale claim that hundreds of thousands of families worldwide have gone through Ponseti treatment, given global incidence and adoption of the method since the early 2000s.
- **Used on site:** Prenatal phase, local source id 4 (encouragement body: "Hundreds of thousands of families have gone through this before you")

## S005 — Children's Wisconsin, Fetal Concerns Center — Clubfoot
- **Citation:** Children's Wisconsin, Fetal Concerns Center — Clubfoot.
- **URL:** https://childrenswi.org/medical-care/fetal-concerns-center/conditions/infant-complications/clubfoot
- **Tier:** 6 (clinical-institution patient education)
- **Topics:** prenatal, pain, pregnancy/delivery impact
- **Key facts extracted:** Clubfoot does not cause pain to the baby in utero and does not affect the pregnancy or delivery itself.
- **Used on site:** Prenatal phase, local source id 5

## S006 — Radler 2013 — The Ponseti method for the treatment of congenital club foot
- **Citation:** Radler C. The Ponseti method for the treatment of congenital club foot: review of the current literature and treatment recommendations. Int Orthop. 2013;37(9):1747-1753.
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC3764299/
- **Tier:** 5 (narrative review, widely cited)
- **Topics:** casting, cast count, tenotomy rate, above-knee casting, bracing
- **Key facts extracted:** Most children need roughly 4-8 casts depending on severity; ~80% require an Achilles tenotomy; casts are applied above the knee to control rotation.
- **Used on site:** Casting phase (id 1), Boots & Bar phase (id 2), Long-term phase (id 2), `PonsetiMethod.jsx` (id 2) — the most heavily reused source on the site; re-verify the specific number being cited against this, not just the topic, since it's used for several distinct claims.

## S007 — POSNA — Clubfoot study guide
- **Citation:** POSNA (Pediatric Orthopaedic Society of North America) — Clubfoot study guide.
- **URL:** https://posna.org/physician-education/study-guide/clubfoot
- **Tier:** 4 (professional body clinical/educational reference)
- **Topics:** general Ponseti protocol, tenotomy, casting
- **Key facts extracted:** Standard-of-care reference for Ponseti casting and tenotomy protocol; backs general protocol claims rather than a single specific statistic.
- **Used on site:** Casting phase, local source id 3

## S008 — Cast removal by soaking — controlled trial
- **Citation:** Cast removal by soaking reduces infant and parental anxiety without affecting outcomes: a prospective controlled trial. Children (Basel). 2025.
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC13510393/
- **Tier:** 2 (prospective controlled trial)
- **Topics:** cast removal, home soaking, parent/infant anxiety
- **Key facts extracted:** Home soak-removal (vs. saw removal in clinic) lowers infant distress and parental anxiety with equivalent correction outcomes. Does not mandate soaking — practice varies by clinic.
- **Used on site:** Casting phase, local source id 4

## S009 — Achilles tenotomy as an office procedure
- **Citation:** Achilles tenotomy as an office procedure: safety and efficacy as part of the Ponseti serial casting protocol for clubfoot. J Pediatr Orthop. 2012.
- **URL:** https://pubmed.ncbi.nlm.nih.gov/22584844/
- **Tier:** 3 (comparative/safety study)
- **Topics:** tenotomy, office procedure, local anesthesia, safety
- **Key facts extracted:** Percutaneous Achilles tenotomy performed in-office under local anesthesia (sedation for some cases) is safe and effective as part of the Ponseti protocol; no adverse events attributable to the office setting or local anesthesia.
- **Used on site:** Casting phase, local source id 5

## S010 — Above- or below-knee plaster casts in the Ponseti method
- **Citation:** Above- or below-knee plaster casts in the Ponseti method for clubfoot correction — comparative study. Bone Joint J.
- **URL:** https://boneandjoint.org.uk/Article/10.1302/0301-620X.95B11.31899
- **Tier:** 2/3 (comparative clinical trial)
- **Topics:** knee flexion, above-knee casting, cast slippage, failure rate
- **Key facts extracted:** Below-knee or under-flexed casting has a substantially higher failure rate than above-knee casting with adequate knee flexion (a cited trial found ~37.5% failures in the below-knee group) — the flexion and groin-high extension exist specifically to prevent the cast slipping off.
- **Used on site:** Casting phase, local source id 6

## S011 — Plaster of Paris vs. semirigid fiberglass — systematic review & meta-analysis
- **Citation:** Plaster of Paris versus semirigid fiberglass casting in the Ponseti method for idiopathic clubfoot: a systematic review and meta-analysis. 2025.
- **URL:** https://pubmed.ncbi.nlm.nih.gov/40888800/
- **Tier:** 1 (systematic review & meta-analysis)
- **Topics:** cast material, plaster, fiberglass, outcomes comparison
- **Key facts extracted:** Plaster of Paris has better moldability and is the traditional standard; semirigid fiberglass achieves comparable clinical outcomes, sometimes with fewer casts and easier removal. Evidence does not support a flat "plaster is superior" claim — moldability favors plaster, but outcomes are comparable.
- **Used on site:** Casting phase, local source id 7. **Caution:** a parent reviewer (Kori) asserted plaster is flatly superior — this source supports moldability being better for plaster but not a clinical-outcome superiority claim. Site copy is written to reflect that nuance; don't sharpen it back to "plaster is superior" without a stronger source.

## S012 — Zionts & Dietz 2010 — Bracing following correction of idiopathic clubfoot
- **Citation:** Zionts LE, Dietz FR. Bracing following correction of idiopathic clubfoot using the Ponseti method. J Am Acad Orthop Surg. 2010;18(8):486-493.
- **URL:** https://pubmed.ncbi.nlm.nih.gov/20675641/
- **Tier:** 5 (narrative review, orthopedic society journal)
- **Topics:** bracing, wearing schedule, relapse rate, brace compliance
- **Key facts extracted:** Full-time brace wear (~23 hrs/day) for about 3 months, then tapering to nights and naps, continuing to age 4-5; brace-wear compliance is the strongest predictor of avoiding relapse.
- **Used on site:** Boots & Bar phase, local source id 1; `PonsetiMethod.jsx`, local source id 3

## S013 — Long-term outcomes of the Ponseti method — systematic review
- **Citation:** Long-term outcomes of the Ponseti method for treatment of clubfoot: a systematic review. Int Orthop. 2021.
- **URL:** https://link.springer.com/article/10.1007/s00264-021-05189-w
- **Tier:** 1 (systematic review)
- **Topics:** long-term outcomes, function, sports participation
- **Key facts extracted:** Most children treated with the Ponseti method achieve normal or near-normal long-term function, including full participation in sports and activity.
- **Used on site:** Long-term phase, local source id 1

## S014 — Dobbs, Morcuende, Gurnett & Ponseti 2000 — Treatment of idiopathic clubfoot: an historical review
- **Citation:** Dobbs MB, Morcuende JA, Gurnett CA, Ponseti IV. Treatment of idiopathic clubfoot: an historical review. Iowa Orthop J. 2000;20:59-64.
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC1888755/
- **Tier:** 5 (historical review, co-authored by Ignacio Ponseti's group)
- **Topics:** history of the method, development at University of Iowa, rationale vs. surgical treatment
- **Key facts extracted:** Traces Ponseti's development of the method at the University of Iowa starting in the 1940s-50s, motivated by poor long-term outcomes of surgical release; his long-term follow-up (some patients 50+ years) showed better outcomes than surgery.
- **Used on site:** `PonsetiMethod.jsx`, local source id 4 (history section)

## S015 — Ponseti International — Publications & Resources
- **Citation:** Ponseti International — Publications & resources (Red Book, clinical guidelines).
- **URL:** https://ponseti.medicine.uiowa.edu/what-clubfoot/publications-and-resources
- **Tier:** 4 (professional body — primary publications hub)
- **Topics:** general reference hub, clinical guidelines, further reading
- **Key facts extracted:** General reference/hub source rather than a single extracted claim — points to PIA's own published clinical guidance for deeper claims.
- **Used on site:** `PonsetiMethod.jsx`, local source id 5

---

## Candidates seen but not yet formally verified for this library

These came up during earlier research in this project (referenced in `docs/content-audit.md` on branch `claude/content-audit`) but haven't been re-read and admitted here with full extracted facts. Don't cite them on the site until they've been through the "sourcing a new claim" workflow and get a proper `S0xx` entry.

- Gillette Children's — Ponseti cast application, care, and removal (parent-facing clinical org resource)
- STEPS (South Africa) — Ponseti for parents, practical tips
- ClubfootForward — casting schedule reference
- Global-HELP / Staheli & Ponseti — *Clubfoot: Ponseti Management* (the standard international training manual, translated into 35 languages) — high-value, should be prioritized for formal admission given how authoritative it is
