---
name: two-site-layout
description: Places new pages, layouts, components, and CSS in the blog or portfolio tree without sharing UI. Use when adding a page, layout, landing page, funnel, portfolio, blog, /blog, CSS, Tailwind, or when unsure which src tree to use.
---

# Two-site layout

jakerobins.com is two Astro products. Read [docs/two-sites-on-apex.md](docs/two-sites-on-apex.md) for strategy.

## Which tree

| Work | Put UI in | Route file |
| --- | --- | --- |
| Client funnel, `/`, later `/work` | `src/portfolio/` | `src/pages/index.astro` (or a new page that only imports portfolio) |
| Posts, RSS, blog chrome | `src/blog/` | `src/pages/blog/**`, `src/pages/rss/**` |

`src/pages` files are thin: frontmatter + one site layout. Never import the other tree.

## Copy, do not share

Head, footer, analytics, config, and CSS are duplicated. Do not extract a shared `src/components`.

## CSS

- Blog: CUBE + `tailwind.blog.config.ts`. Content globs stay `src/blog/**`, `src/pages/blog/**`, `src/pages/rss/**`. Never `src/**/*`.
- Portfolio: own CSS (currently `holding.css`). `postcss.config.cjs` skips Tailwind for `src/portfolio/`.

## Before finishing

Grep `src/pages/index.astro` and `src/portfolio` for `src/blog` imports (must be empty). Grep blog pages for `src/portfolio` (must be empty).
