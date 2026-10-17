# Ané Janse van Rensburg: portfolio

Portfolio site for my web design work for small businesses: https://anevrensburg.github.io/portfolio/

Angular 22 (standalone components, signals, zoneless), prerendered to static HTML and deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

- `src/app/core/site.ts`: contact details and prices
- `src/app/data/projects.ts`: the projects shown in the Work section
- `images-src/` (git-ignored) → `npm run images` → `public/images/` (AVIF + WebP screenshots, OG image, favicons)

Commands: `npm start` (dev server), `npm run build`, `npm run images`.
