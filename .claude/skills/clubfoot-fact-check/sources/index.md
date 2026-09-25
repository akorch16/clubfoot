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

## S016 — Gillette Children's — Ponseti Cast Application, Care, and Removal
- **Citation:** Gillette Children's — Ponseti Cast Application, Care, and Removal.
- **URL:** https://www.gillettechildrens.org/your-visit/patient-education/ponseti-cast-application-and-removal
- **Tier:** 6 (clinical-institution patient education, Ponseti-specific)
- **Topics:** problem cast, cast care, too tight, wet cast, cracked cast, foul odor, fever, skin irritation, fussiness
- **Key facts extracted:** Toes dark/cold and not whitening with a pinch → cast too tight, contact care team right away to remove. Other warning signs: cast wet or soiled, baby inconsolable without apparent reason, a new stain from inside the cast, unusual/foul odor, color or temperature change in toes, skin irritation/rash, cracking or breaking of the cast, unexplained fever ≥101.5°F (38.6°C). A wet cast traps moisture against skin, risking skin breakdown, slippage, and odor. Also call if the cast cracks, skin at the cast edges gets very red/irritated, or baby is still very fussy after a day or two.
- **Retrieval note:** WebFetch to this domain was blocked in this session (network egress proxy); content retrieved via WebSearch's page summary rather than a direct fetch. Re-verify with a direct fetch if egress access to this domain becomes available, before relying on it for a new claim beyond what's already cited here.
- **Used on site:** Casting phase, local source id 8 (`src/data/phases.js`, "Help! I have a problem with the cast" module)

## S017 — Nationwide Children's Hospital — Circulation Checks
- **Citation:** Nationwide Children's Hospital — Circulation Checks.
- **URL:** https://www.nationwidechildrens.org/family-resources-education/health-wellness-and-safety-resources/helping-hands/circulation-checks
- **Tier:** 6 (clinical-institution patient education; general pediatric cast/circulation guidance, not clubfoot-specific)
- **Topics:** circulation check, cast too tight, toe color, blanch test, monitoring frequency
- **Key facts extracted:** Toes should be warm and pink; apply pressure to the nail and it should return to pink within ~5 seconds after release ("blanch test"). Check circulation every hour for the first 6-8 hours after a new cast, then a few times a day after that. White, blue, purple, very swollen, or very painful fingers/toes need the cast off urgently/emergently.
- **Retrieval note:** Same as S016 — retrieved via WebSearch summary, not a direct fetch (domain blocked this session).
- **Used on site:** Casting phase, local source id 9 (`src/data/phases.js`, "Help! I have a problem with the cast" module — toe-check instructions)

## S018 — Orthobullets — Clubfoot (Congenital Talipes Equinovarus)
- **Citation:** Orthobullets — Clubfoot (Congenital Talipes Equinovarus), Pediatrics.
- **URL:** https://www.orthobullets.com/pediatrics/4062/clubfoot-congenital-talipes-equinovarus
- **Tier:** 5 (clinician/resident-facing educational reference, editorially curated by physicians; not peer-reviewed primary research)
- **Topics:** epidemiology, deformity components (cavus/adductus/varus/equinus), casting protocol, tenotomy, bracing, general overview
- **Key facts extracted:** Clubfoot occurs in ~1-2 per 1,000 live births. Deformity is characterized by midfoot cavus, forefoot adductus, hindfoot varus, and ankle equinus. Ponseti serial casting is the standard treatment, generally followed by percutaneous Achilles tenotomy where needed, then bracing; sustained bracing is critical to preventing relapse.
- **Used on site:** not yet used

## S019 — Mayo Clinic — Ponseti treatment for clubfoot: Past and future
- **Citation:** Ponseti treatment for clubfoot: Past and future. Mayo Clinic, medical professionals news, 2020.
- **URL:** https://www.mayoclinic.org/medical-professionals/orthopedic-surgery/news/ponseti-treatment-for-clubfoot-past-and-future/mac-20430801
- **Tier:** 5 (narrative/professional-audience review from a major clinical institution)
- **Topics:** Ponseti method overview, history, standard of care
- **Key facts extracted:** The Ponseti method (serial casting, percutaneous Achilles tenotomy, then bracing) remains the gold standard for clubfoot treatment worldwide, despite being time-consuming and demanding for families.
- **Used on site:** not yet used

## S020 — Global-HELP — Clubfoot: Ponseti Management
- **Citation:** Staheli L, Ponseti I, et al. Clubfoot: Ponseti Management, 3rd ed. Global-HELP Organization, 2009.
- **URL:** http://www.global-help.org/publications/books/book_cfponseti.html
- **Tier:** 4 (professional body guideline/teaching manual — the standard international Ponseti training manual)
- **Topics:** casting technique, tenotomy, bracing, general Ponseti protocol, provider training
- **Key facts extracted:** The definitive Ponseti-method training manual, authored by Dr. Lynn Staheli and Dr. Ignacio Ponseti's own collaborators. First published 2003, now in its 3rd edition (2009); translated into multiple languages and distributed in 50+ countries as a free, standardized reference for providers learning the method. This was previously flagged in this library as a high-priority candidate; now formally admitted.
- **Used on site:** not yet used

## S021 — Global-HELP — Ponseti Clubfoot Management: Teaching Manual for Health-Care Providers in Uganda
- **Citation:** Pirani S, Naddumba E, Staheli L. Ponseti Clubfoot Management: Teaching Manual for Health-Care Providers in Uganda. Global-HELP Organization, 2008.
- **URL:** https://global-help.org/publications/books/help_ponsetiuganda.pdf
- **Tier:** 4 (professional body/government-endorsed teaching manual)
- **Topics:** casting technique, provider training, low-resource-setting Ponseti protocol
- **Key facts extracted:** Co-authored by Dr. Shafique Pirani (creator of the Pirani clubfoot severity scoring system) and Dr. Lynn Staheli, produced with the Uganda Sustainable Clubfoot Care Project and endorsed by Uganda's Ministry of Health. A condensed, provider-training-focused companion to S020, adapted for a low-resource clinical setting.
- **Used on site:** not yet used

## S022 — HSS — The Ponseti Method for Clubfoot Correction: An Overview for Parents
- **Citation:** Blanco JS, Dodwell ER, Doyle SM, Scher DM. The Ponseti Method for Clubfoot Correction: An Overview for Parents. Hospital for Special Surgery.
- **URL:** https://www.hss.edu/health-library/conditions-and-treatments/the-ponseti-method-for-clubfoot-correction
- **Tier:** 6 (clinical-institution patient education, authored by named HSS pediatric orthopedic physicians)
- **Topics:** Ponseti method overview, parent-facing explanation, standard of care
- **Key facts extracted:** The Ponseti method is now the most widely practiced technique for early clubfoot treatment; when a provider follows its details meticulously without modification, parents can expect optimal short- and long-term results.
- **Note:** the URL given by the user (`hss.edu/conditions_the-ponseti-method-for-clubfoot-correction.asp`) appears to be an old path — the current working URL (confirmed via search) is `hss.edu/health-library/conditions-and-treatments/the-ponseti-method-for-clubfoot-correction`, used above.
- **Used on site:** not yet used

---

## Candidates seen but not yet formally verified for this library

These came up during earlier research in this project (referenced in `docs/content-audit.md` on branch `claude/content-audit`) but haven't been re-read and admitted here with full extracted facts. Don't cite them on the site until they've been through the "sourcing a new claim" workflow and get a proper `S0xx` entry. (Gillette Children's and Global-HELP's *Clubfoot: Ponseti Management* were both on this list — now admitted as S016 and S020.)

- STEPS (South Africa) — Ponseti for parents, practical tips
- ClubfootForward — casting schedule reference

## Evaluated and NOT admitted, with reasons

A batch of user-submitted links, evaluated 2026-09-25 against the tier system:

- **Physiopedia — Ponseti method** (`physio-pedia.com/Ponseti_method`) — a crowd-edited wiki, same caution class as Wikipedia: multiple named contributors plus a generic "WikiSysop" account, no fixed authorship or formal peer review. Fine for a reader's own background orientation, not admissible as a citation for a specific clinical claim on the site.
- **vdocument.in clubfoot search results** — this is a raw search-results listing on a general document-hosting aggregator, not a source itself. It could surface a specific, real document worth then evaluating on its own merits (e.g. a named paper or a Steenbeek brace pattern), but the search-results page has zero editorial curation and isn't citable as-is.
- **Asociatia Varus Equin (Romania)**, asociatiavarusequin.ro, and its Facebook page — a parent-run nonprofit advocacy organization, not a clinical institution, same non-admissibility as any parent-run group per this skill's standing rule. Could be legitimate as an *external resource / local support org* link (parallel to how the site already lists STEPS South Africa) for Romanian families — that's a different list than this clinical source library, and a call for whoever maintains `src/data/phases.js` resources or the Support page, not this skill.
- **nosurgery4clubfoot.com/manager/clubfootclub.org** — this URL shape (a `/manager/` path) looks like an exposed admin/staging path rather than a real public page; it didn't resolve to any real content in search. Likely a broken or mistyped link — flagged for the user to double-check the intended URL rather than guessed at.
