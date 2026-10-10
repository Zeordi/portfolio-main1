# CONTENT-TODO — things to finish after merge

These are placeholders / manual steps required to fully go live. None block a review merge.

- [ ] **FORM_ENDPOINT**: `contact.html` uses `<form action="https://formspree.io/f/{FORM_ENDPOINT}" …>`. Replace `{FORM_ENDPOINT}` with a real Formspree form id (or point `action` at your own endpoint). Until then the form does not submit anywhere.
- [ ] **CV / resume download**: no PDF link is wired yet. Add a "Download CV" link on `about.html` once a PDF is provided.
- [ ] **Open Graph cover**: no 1200×630 `og:image` banner is set. Point `meta property="og:image"` at a real cover photo.
- [ ] **Favicon**: `image/abel.jpg` is used as a quick stand-in. Add a real `favicon.ico` / PNG.
- [ ] **Project demo assets**: each case study references `image/<x>.jpeg` (existing photos). If you have higher-res screenshots or diagrams, drop them in and reference from the case pages.
- [ ] **Google Maps key**: this build **removes** the Maps JS API key entirely (the map is unused and a key should not be committed). If a map is genuinely needed later, add a server-side proxy and use a restricted key — never hardcode `AIzaSy...` in client HTML.
- [ ] **Vercel**: intentionally **no `vercel.json`** is included (per request). Set the Production Branch in the deploy target to `main` manually.
- [ ] **REVIEW paragraphs** in each case study: replace the placeholder narrative (`Challenge / Approach / Outcome / sections`) with the real copy once reviewed. The structure is in place; the text is draft content based on repo context.
- [ ] **Analytics**: no analytics script is added. Add (and configure consent) per your policy.
- [ ] **.webp images**: none generated (no build tooling available in this environment). Optional future optimization.
