# Fermor homepage

A new homepage for Fermor, built for the frontend assignment.

**Live (Vercel):** add your link here
**Live (GitHub Pages):** https://mahendra4338.github.io/fermor/
**Stack:** Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Framer Motion, lucide-react

## Setup
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploy
- **Vercel:** import the repo and click Deploy. No settings needed.
- **GitHub Pages:** in the repo go to Settings, Pages, and set Source to "GitHub Actions". Every push to `main` then builds and publishes the site. The workflow sets `GITHUB_PAGES=true`, which turns on static export and the `/fermor` base path in `next.config.mjs`. Vercel and local runs are not affected.

## Decisions
Write this part in your own words. Points to cover:
- Why the working growth planner sits in the hero: it shows the product instead of describing it.
- Why Understand / Act / Grow is shown as rows with a small visual, not identical cards.
- Why the sections follow this order: picture first, then proof, then how it works, then who it is for.
- The numbers and testimonials in `data/proof.ts` are sample content. Replace them with real facts before launch.
- Copy, security points and legal pages are placeholders too.
- With more time: a real waitlist backend, dark mode, tests, and content from the real product.
