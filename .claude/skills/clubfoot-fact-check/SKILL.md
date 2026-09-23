---
name: clubfoot-fact-check
description: Verify or source factual and clinical claims on Clubfoot Club against a durable library of primary sources before publishing. Use when writing new content that makes a factual/clinical/numeric claim, auditing existing copy in src/data or src/pages for accuracy, responding to "is this true", "fact check this", "source this", "cite this", or when adding a new source found during research. Also use before answering a user's factual question about clubfoot with site-adjacent authority.
---

# Clubfoot fact-check

This site makes medical and statistical claims to parents at a vulnerable moment. The standing rule (see project `CLAUDE.md`): **"the site should not summarize other websites — every clinical claim traces to an authoritative source, and every number carries a citation. If it can't be sourced, it gets cut."** This skill is how that rule gets enforced consistently across sessions, instead of re-litigated from scratch every time.

The source library lives at `sources/index.md` next to this file. It is the persistent memory this skill exists to build — every source found in any session gets added there, not just held in that session's context.

## Evidence tiers

Weigh sources by tier when there's a conflict, and prefer citing the highest tier available:

1. **Systematic review / meta-analysis**
2. **Randomized controlled trial (RCT)**
3. **Prospective or retrospective cohort / comparative study**
4. **Professional body guideline or protocol** — POSNA, Ponseti International Association (PIA), a hospital's published clinical program (Gillette, Children's Wisconsin, etc.)
5. **Narrative / historical review article**
6. **Patient-education page from a clinical institution**
7. **Reference database** (OMIM, etc.) — authoritative for what it covers (genetics, epidemiology figures), not for treatment claims

A parent-run Facebook group, a product listing, or an uncited blog post is **not a source** for a clinical claim — it can motivate *looking for* a source, but the claim needs a tier 1–6 backing before it ships. General non-clinical description (e.g. "footless clothing is easier to change during casting") doesn't need a citation; anything numeric, clinical, or safety-related does.

## Workflow: verifying a claim already on the site

1. Find the claim's topic in `sources/index.md` (search by topic tag or free text).
2. If a source covers it, re-read the **Key facts extracted** for that source against the actual sentence on the site — don't just confirm the topic matches, confirm the *specific number or claim* matches. A source can be relevant to a topic and still not support the specific figure being cited (this has happened on this site before — e.g. "5-8 casts" vs. sources clustering closer to 4-7).
3. If it matches, leave it. If it's drifted (rounded wrong, overstated, missing a caveat the source has), fix the site copy to match the source, not the other way around.
4. If nothing in the library covers it, treat it as unsourced — go to the next workflow.

## Workflow: sourcing a new or unverified claim

1. Check `sources/index.md` first — it may already cover this from other content.
2. If not, search (WebSearch/WebFetch) for the highest tier available. Prefer PubMed/PMC, Cochrane, POSNA, PIA (ponseti.medicine.uiowa.edu), and major children's hospital clinical-program pages over general health sites.
3. Read enough of the actual source (not just the search snippet) to confirm it says what you think it says, and to extract the specific number/claim in its own words.
4. **Add it to `sources/index.md`** using the template at the top of that file, before using it in content. A source used on the site but not in the library is exactly the gap this skill exists to close.
5. Write the site copy to match what the source actually says — round/hedge the way the source does, don't sharpen a range into a single number or drop a caveat to make copy punchier.
6. If nothing above tier 6 can be found, say so plainly rather than publishing the claim anyway. Either cut it, soften it to a non-specific statement, or flag it for the user to get from their own orthopedist (mark it 👨‍⚕️ needing clinician sign-off, matching the convention in `docs/content-audit.md` on the `claude/content-audit` branch).

## Tying into the site's citation system

The site already has a working in-app citation system — don't build a second one. Each phase/page in `src/data/phases.js`, `src/pages/PonsetiMethod.jsx`, etc. has its own local `sources: [{ id, label, url }]` array, and body text uses `[[n]]` markers (parsed by `src/components/Cited.jsx`) that reference that array's local, small integer ids.

When you cite a library source on a page:
- Add (or reuse) an entry in that page's local `sources` array as usual, with `label`/`url` copied from the library entry.
- Add a same-line comment noting the master id, e.g. `{ id: 6, label: "...", url: "..." }, // sources/index.md#S010` — this keeps the two systems traceably linked without forcing the on-page ids to match the library ids (page ids are small and page-scoped by design; library ids are global and stable).
- If the library entry doesn't exist yet, add it first (previous workflow), then wire it in on the page.

## Adding a new source to the library

Use the template in `sources/index.md`. Required fields: stable id (next unused `S0xx`, never reused even if a source is later deprecated), full citation, URL, tier, topic tags, key facts extracted **in the source's own terms** (not your paraphrase of what you wish it said), and where it's used on the site (or "not yet used" if you're pre-loading it). If a source turns out to be wrong or gets superseded, don't delete it — mark it `[DEPRECATED: reason]` so the history of why a claim changed stays visible.

## Auditing a whole page or phase

When asked to audit a section (not just one claim): read the section, list every factual/numeric/clinical sentence, and for each one either (a) confirm it maps to a library source and the mapping is accurate, (b) find and add a new source, or (c) flag it as unsourced with a suggested fix or a "needs clinician sign-off" tag. Report the list back — don't silently rewrite clinical claims without saying what changed and why, since these edits go straight to production content parents rely on.
