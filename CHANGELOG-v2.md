# Changelog — Portfolio v2

All notable changes to the redesign are documented here. This rewrite touches the existing static template in place — nothing is deleted.

## [v2] — 2026-10-10

### Added
- `css/pf-v2.css`: design-system layer with `--pf-*` tokens, dark/light themes, hero, cards, case-study blocks, focus rings, reduced-motion guards.
- 9 project case-study pages (`project-*.html`): MediVision, Payment Gateway Integration, E-Commerce Platform, SaaS Dashboard, Health & Fitness App, Guzo-Jobs, Bileyx, TataTech, JusTap Digital Business Card.
- `<main id="main">` landmark, skip link, `<h1>` per page, `aria-label`s.
- Per-page canonical URLs, Open Graph + Twitter Card meta, `theme-color` meta.
- `application/ld+json` Person schema (jobTitle updated to Backend & AI Engineer).
- Theme toggle (dark/light) with `prefers-color-scheme` + `localStorage`.
- `CONTENTS-CHECKLIST.md` and `CHANGELOG-v2.md`.
- `.gitignore`.

### Changed
- Hero rewritten from a JS carousel (`home-slider owl-carousel`) to a static, semantic section (no `#/` dead links).
- Accent color is now a single token: `var(--pf-accent)` (`#F96D00`); `#b1b493` references removed from `scss/style.scss` and `css/style.css`.
- Fonts swapped from Poppins to **Inter** (sans) + **JetBrains Mono** (code).
- Project cards in `projects.html` now link to the matching case study (external links kept where present).
- `js/main.js`: Owl Carousel / Magnific Popup calls guarded (libs removed); `onePageClick` respects `prefers-reduced-motion`.
- `css/style.css` body font-family updated to Inter.

### Removed (from HTML only)
- Google Maps JS API script + `js/google-map.js` (key not committed).
- `owl.carousel` / `magnific-popup` / `flaticon` stylesheet and script includes.
- No `vercel.json` is added (intentional).
