# BentoFolio

A premium open-source **Astro 6 + Tailwind 4** portfolio template built around a bento-grid dashboard.

Think Linear × Raycast × macOS Dashboard. Dark-first, light-aware, dense but organized — no giant hero sections, no empty space.

> Status: template ships with placeholder content (the "Alex Carter" persona). Fork, drop in your real data, deploy.

---

## Features

- **Bento-grid homepage** — 11 cards (profile, focus, stats, animated tech-stack marquee, now, github heatmap, latest posts, uses, testimonial, featured project, contact CTA)
- **Floating dock navigation** — macOS-style, sticky bottom-center, with hover labels
- **Dark + light mode** — token-based via CSS `color-mix`, persistent via `localStorage`
- **Content collections** — Zod-validated frontmatter for `posts/` and `works/` (Markdown + MDX)
- **7 pages** — `/`, `/works` (filter + search), `/posts`, `/post/[slug]` (TOC + reading progress + share), `/resume`, `/uses`, `/contact` (form + FAQ)
- **SEO baked in** — Open Graph, Twitter cards, sitemap, canonical URLs
- **Animations** — count-up stats, infinite tech-stack marquee, pulsing GitHub heatmap, floating spark icon
- **Resume PDF** — drop your `resume.pdf` into `public/`, the download button picks it up
- **Zero JS frameworks** — pure Astro + vanilla DOM, ships ~minimal JS

---

## Quick start

```sh
git clone https://github.com/fazleyrabby/bento-folio.git
cd bento-folio
npm install
npm run dev
```

Open <http://localhost:4321>.

### Build for production

```sh
npm run build      # outputs ./dist
npm run preview    # serve the build locally
```

---

## Project structure

```
bentofolio/
├── public/
│   ├── avatar.svg              # gradient initials avatar
│   ├── favicon.svg
│   └── resume.pdf              # replace with your own
├── src/
│   ├── components/             # all UI primitives + bento cards
│   │   ├── BentoGrid.astro
│   │   ├── BentoCard.astro
│   │   ├── NavigationDock.astro
│   │   ├── ThemeToggle.astro
│   │   ├── ProfileCard.astro
│   │   ├── FocusCard.astro
│   │   ├── StatsCard.astro
│   │   ├── TechStackCard.astro
│   │   ├── StatusCard.astro
│   │   ├── GithubCard.astro
│   │   ├── LatestPostsCard.astro
│   │   ├── UsesPreviewCard.astro
│   │   ├── TestimonialCard.astro
│   │   ├── FeaturedProjectCard.astro
│   │   ├── ContactCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── BlogCard.astro
│   │   ├── PageHeader.astro
│   │   └── Icon.astro
│   ├── content/
│   │   ├── posts/              # blog posts (.md / .mdx)
│   │   └── works/              # projects (.md / .mdx)
│   ├── content.config.ts       # Zod schemas
│   ├── data/site.ts            # single source of truth for identity
│   ├── layouts/BaseLayout.astro
│   ├── pages/                  # routes
│   └── styles/global.css       # Tailwind 4 + design tokens
├── astro.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## Customizing

### 1. Your identity → `src/data/site.ts`

Single file controls **all** profile / stats / focus / uses / resume / testimonial content. Replace the `Alex Carter` placeholder values:

```ts
export const site = {
  name: "Your Name",
  role: "Your Role",
  shortBio: "...",
  longBio: "...",
  location: "...",
  email: "you@example.com",
  social: { github, linkedin, x, rss },
  stats: { years, projects, technologies },
  github: { user, stars, contributions, repos },  // static numbers
  tech: [ ... ],
  uses: { hardware, dev, apps, ai, productivity },
  resume: { experience, education, certifications, achievements, skills },
  testimonial: { quote, author, role },
};
```

### 2. Blog posts → `src/content/posts/*.md`

```md
---
title: "Post title"
description: "Short description"
date: 2026-05-22
category: "Backend"
cover: "https://images.unsplash.com/photo-..."
readingTime: "8 min"
tags: ["TypeScript"]
---

Markdown body here.
```

### 3. Projects → `src/content/works/*.md`

```md
---
title: "Project name"
description: "One-sentence summary"
cover: "https://..."
tech: ["TypeScript", "Postgres"]
github: "https://github.com/you/repo"
url: "https://liveurl.com"
featured: true              # appears on home page
category: "Dev Tool"
year: 2026
order: 1                    # sort order on /works
---
```

### 4. Resume PDF

Drop `resume.pdf` into `public/`. The Download button on `/resume` links to `/resume.pdf` directly. A 1-page placeholder PDF ships with the repo — overwrite it.

### 5. Avatar

Replace `public/avatar.svg`, or rely on the auto-generated initials on the profile card (derived from `site.name`).

### 6. Design tokens

All colors, radii, shadows, and fonts live in `src/styles/global.css` under `@theme` and the `:root` / `.light` blocks. Change the accent in one place:

```css
@theme {
  --color-accent: #7c5cff;    /* primary accent */
  --color-accent-2: #5eead4;  /* secondary accent for gradients */
  --radius-card: 24px;
}
```

### 7. Navigation

Add / remove dock links in `src/data/site.ts` under `nav`. Icons live in `src/components/Icon.astro` (add a new entry to the `paths` object to introduce a new icon).

---

## GitHub stats card

The contribution heatmap is **statically generated** (deterministic noise pattern). The numbers (stars / contributions / repos) come from `site.github`.

To wire it to live data, replace the `cells` generation in `src/components/GithubCard.astro` with a `fetch` against GitHub's GraphQL `contributionsCollection` at build time (requires a `GITHUB_TOKEN` env var). Open an issue if you want this as a first-class option.

---

## Contact form

The form in `/contact` is **demo-only** (client-side fake "sent" status). Wire it to your provider of choice:

- [Formspree](https://formspree.io) — change the `<form>` action to your endpoint
- [Web3Forms](https://web3forms.com)
- A serverless function (Cloudflare Worker / Vercel function / Netlify function)

Replace the inline `<script>` in `src/pages/contact.astro`.

---

## Commands

| Command            | Action                                       |
| ------------------ | -------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`      | Dev server at <http://localhost:4321>        |
| `npm run build`    | Build production site to `./dist/`           |
| `npm run preview`  | Preview the built site                       |
| `npm run astro …`  | Run Astro CLI (`astro add`, `astro check`)   |

---

## Tech stack

- [Astro 6](https://astro.build) — static-first, zero-JS by default
- [Tailwind CSS 4](https://tailwindcss.com) — via `@tailwindcss/postcss` (vite-plugin variant has a version conflict with Astro's bundled Vite)
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) — MDX support for posts
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto sitemap

Requires **Node ≥ 22.12**.

---

## Deploying

Works on any static host. Build outputs to `dist/`.

- **Vercel / Netlify / Cloudflare Pages** — set framework preset to *Astro*, build command `npm run build`, output dir `dist`
- **GitHub Pages** — workflow included (see below)
- **Self-hosted** — serve `dist/` from any static file server (nginx, Caddy, Apache)

---

### GitHub Pages

A ready-to-run workflow lives at `.github/workflows/deploy.yml`. It:

1. Builds on every push to `main` (and on manual dispatch)
2. Auto-derives `BASE_PATH=/<repo-name>` and `SITE=https://<owner>.github.io` from the repo
3. Uploads `dist/` and deploys to the `github-pages` environment

**One-time setup:**

1. Push the repo to GitHub
2. In **Settings → Pages**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow runs and your site lands at `https://<owner>.github.io/<repo>/`

**Deploying as a user/org site** (`<owner>.github.io`) **or a custom domain**:

Add repository variables in **Settings → Secrets and variables → Actions → Variables**:

| Variable    | Value                              |
| ----------- | ---------------------------------- |
| `BASE_PATH` | `/`                                |
| `SITE`      | `https://<owner>.github.io` or your custom domain |

The workflow reads `vars.BASE_PATH` / `vars.SITE` and overrides the repo-derived defaults.

**Local builds for production:**

```sh
BASE_PATH=/bento-folio SITE=https://owner.github.io npm run build
```

Internal hrefs are wrapped via the `url()` helper in `src/lib/url.ts`, which respects `import.meta.env.BASE_URL`. If you add new internal links, wrap them: `href={url('/works')}`.

---

## License

MIT. Use it freely for personal or commercial portfolios. Attribution appreciated but not required.

---

## Credits

Inspired by the layout philosophy of [bentogrids.com](https://bentogrids.com), [wallofportfolios.in/bento-grids](https://www.wallofportfolios.in/bento-grids), Linear, Raycast, and Vercel. Built from scratch — no design copied.
