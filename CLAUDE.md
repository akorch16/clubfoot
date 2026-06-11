# Clubfoot Club — Project Context for Claude

## Stack & Deploy

- **Framework**: React 18 + Vite + Tailwind CSS SPA
- **Router**: HashRouter (React Router v6) — `/#/phase/casting` style URLs
- **Hosting**: GitHub Pages at `clubfoot-club.com`
- **Deploy**: Push to `main` → GitHub Actions `deploy.yml` runs `npm ci && vite build` → publishes `dist/` to `gh-pages` branch (~2–3 min)
- **"Push to prod"** = squash-merge the PR to `main`
- **Dev server**: `npm run dev` at localhost:5173
- **Build check**: always run `npm run build` before pushing a PR — a broken build on `main` takes prod down

## Two-Environment Workflow

The user works on Mac at `~/Documents/clubfoot`. Claude runs in the cloud repo.

- **Images**: User downloads product images on Mac → puts in `public/products/` → pushes → Claude pulls and wires the path in `products.js`
- **No spaces in filenames** — spaces break URLs (e.g. rename `boots and bar.jpg` → `boots-and-bar.jpg`)
- **WebP preferred** for hero images in `public/`; `.jpg`/`.webp` both fine for product thumbnails

## Brand & Design

- **Colors**: teal `#65abc2`, navy `#2D3B6E` — currently hardcoded as inline styles; not yet in `tailwind.config.js`
- **Per-section accent colors** (intentional wayfinding — keep it):
  - Prenatal → violet (`violet-500`)
  - Casting → sky (`sky-500`)
  - Boots & bar → teal (`teal-500`)
  - Long-term → emerald (`emerald-500`)
  - Scan → violet
  - Support → rose
- **Card idiom**: `bg-white rounded-2xl shadow-sm`
- **Section label idiom**: `text-xs font-semibold text-slate-400 uppercase tracking-widest`
- **Page header idiom**: `px-5 pt-12 pb-6` div with `text-2xl font-bold text-slate-800` title + accent-colored subtitle

## Data Model (ids are load-bearing)

- **`src/data/products.js`** — product records; `id` is referenced by `phases.js` `relatedProducts` and `featuredProductIds`. Never reuse or delete an id — leave gaps.
- **`src/data/phases.js`** — phase content (tips, key point groups, resources); references product ids
- **`src/data/conditions.js`** — condition records; `id` strings are referenced in `src/services/vision.js` SYSTEM_PROMPT `VALID_IDS`
- **`src/data/doctors.js`** — doctor directory; 319 entries, 69 countries
- **`src/data/faqs.js`** — FAQ entries (currently rendered on a standalone FAQ page)
- **`src/data/phasePhotos.js`** — maps phaseId → hero image path

## Content Voice Rules

These have caused real bugs when violated — check before shipping:

- **Never recommend footed clothing during casting** — toes must stay visible; footed sleepers, footies, and booties are explicitly unusable
- **Don't downplay the tenotomy** — it's a minor surgical procedure; describe it accurately
- **Bandage/moleskin first, not "leave the brace off"** — for blisters, home care comes before removing the brace; only advise removing the brace for open, painful sores
- **Em dashes, not mid-sentence periods** — `. lowercase continuation` is wrong; use ` — ` or restructure
- **"Boots and bar"** not just "abduction brace" — parents in this community use the B&B terminology
- **"Ponseti method"** capitalised

## Scan Feature (AI Image Assessment)

- **`src/services/vision.js`** — calls Anthropic API with a vision prompt; returns structured JSON
- **Two API paths**: shared Cloudflare Worker (`VITE_WORKER_URL`) or user's stored API key
- **Model**: `claude-sonnet-4-6` with 1024 max_tokens
- **Prompt injection**: symptoms field is untrusted user input — wrapped in `<symptoms>` delimiters with an instruction to ignore any instructions inside it
- **Conditions**: condition IDs in `conditions.js` must match exactly what `VALID_IDS` is built from — they're injected into the system prompt

## PR Convention

- Branch: `claude/<topic>` (e.g. `claude/scan-safety`, `claude/dead-code-sweep`)
- Small, single-concern PRs — easier to review and revert
- Squash-merge to `main`
- User says "push to prod" = merge the open PR to `main`

## Model Selection Guide

- **Sonnet** (`claude-sonnet-4-6`): data edits, CSS, component wiring, bug fixes — most PRs
- **Fable/Opus**: content-voice passes, prompt engineering on `vision.js`, strategy sessions, comprehensive reviews

## Admin Routes

- **`/train`** (`src/pages/Train.jsx`): scan feedback labeling tool — shipped to all users at a guessable route; no auth gate currently
- Design system pages (`/design/*`) have been removed from routing

## Common Gotchas

- `relatedProducts` and `featuredProductIds` in `phases.js` reference product ids that must exist in `products.js` — a phantom id silently disappears (`.filter(Boolean)` hides the error but the product won't render)
- `phasePhotos.js` maps phase ids to image paths — if the image file doesn't exist in `public/`, PhaseDetail shows nothing (no error)
- `conditions.js` ids must match the `VALID_IDS` string built in `vision.js` — a mismatch causes the model to return `FALLBACK`
