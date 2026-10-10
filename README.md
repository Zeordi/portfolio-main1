# Portfolio v2 — Backend & AI Engineer

Hi, I'm Abel Alemayehu, a software engineer in Addis Ababa, Ethiopia. I build APIs, RAG systems, and full-stack products with Go, Python (Django, FastAPI), and PostgreSQL. I also work across UI/UX and product design with Figma.

## What's in this repo

A responsive, recruiter-ready portfolio site for `abelalemayehu.pro.et`:

- **HTML / CSS / jQuery** template (Bootstrap 4 base), upgraded in place with a premium design layer
- **Dark + light themes** with `prefers-color-scheme` and a persistent user preference toggle
- **Static hero** (the old JS slider / carousel was removed)
- **9 case-study pages** — each project gets a standalone page with challenge, approach, outcome, and a tech stack
- **Accessibility**: skip link, `<main>` landmark, focus rings, `prefers-reduced-motion` guards, `alt` text on every image, canonical URLs, Open Graph / Twitter card metadata, and structured `application/ld+json` data
- **No `vercel.json`** — deploy as static files (GitHub Pages, S3, or any static host)

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Hero + tech marquee + about + quick intro |
| `about.html` | Background, experience, education |
| `projects.html` | Project grid linking to each case study |
| `services.html` | Engineering + AI + design services |
| `contact.html` | Contact form + contact details |
| `single.html` | Legacy template page, kept with `noindex,nofollow` |
| `project-*.html` (×9) | Per-project case studies |

## Local development

This is a static site — no build step is required. To preview locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

`css/pf-v2.css` is the v2 design layer loaded after `css/style.css`. `scss/style.scss` is kept for source consistency (it sets `$primary: var(--pf-accent)` and `$font-primary: Inter`).

## Styling notes

- Design tokens live in `:root` as `--pf-*` custom properties (`--pf-accent`, `--pf-bg`, `--pf-text`, `--pf-nav-bg`, etc.)
- The accent color is `#F96D00`, matching the original loader SVG, referenced as `var(--pf-accent)`
- Fonts: **Inter** (sans) + **JetBrains Mono** (code), loaded from Google Fonts — no Poppins

## Contact

- Email: ordialex1226@gmail.com
- Phone: +251 965 655 184
- [LinkedIn](https://www.linkedin.com/in/abel-alemayehu1994) · [GitHub](https://github.com/Zeordi)
