# Portfolio Site

A personal portfolio for showcasing projects, built with Next.js (App Router), React Server Components and Tailwind CSS. Every page is statically generated, and the theme follows the visitor's light/dark preference.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Editing content

All content lives in two files — no need to touch the layout to update the site:

- `src/lib/site.ts` — your name, role, tagline, about text, skills, email and social links.
- `src/lib/projects.ts` — the list of projects. Each entry gets its own page at `/projects/<slug>`; set `featured: true` to show it on the home page.

## Structure

```
src/
  app/
    layout.tsx              Root layout: header, main content, footer
    page.tsx                Home: hero, featured projects, about, contact
    projects/page.tsx       All projects
    projects/[slug]/page.tsx  Individual project page
    not-found.tsx           404 page
    globals.css             Theme colour tokens (light + dark)
  components/               Header, footer, section, project card, etc.
  lib/                      Site and project data
```

## Deploying

Run `pnpm build` to produce a production build. The easiest host is [Vercel](https://vercel.com/new) — import the repository and it deploys automatically on every push. See the [Next.js deployment docs](https://nextjs.org/docs/app/getting-started/deploying) for other options.
