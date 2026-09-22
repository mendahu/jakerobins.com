# Two sites on the apex domain

jakerobins.com hosts two products that share a domain and an Astro deploy, and nothing else.

| | Portfolio | Blog |
| --- | --- | --- |
| Role | Freelance landing page / client funnel | Personal writing |
| URL | `https://jakerobins.com/` (and later routes like `/work` if needed) | `https://jakerobins.com/blog`, `/rss`, post slugs |
| Design | Its own system, tokens, layout, components | Existing CUBE CSS + Tailwind token pipeline |
| CMS | Static Astro pages | Storyblok |

We are **not** moving the blog to `blog.jakerobins.com`. Post URLs, RSS URLs, and inbound links stay as they are.

## Why this shape

The blog already lives under `/blog` and `/rss`. The only thing claiming the root today is a config redirect (`"/": "/blog"` in `astro.config.mjs`). Replacing that redirect with a portfolio home is a routing change, not a URL migration.

A subdomain would mean 301s for every post and every feed. That is extra DNS, SSL, and feed-reader churn for a brand split we can get with layouts and CSS.

The two products will look and read differently on purpose. Isolation is a **code** rule, not just a “don’t put a Blog nav item on the homepage” rule.

## Product rules

- Portfolio is the default for someone who types the domain.
- Blog URLs never change: `/blog`, `/blog/[slug]`, `/rss`, `/rss/feed.xml`, `/rss/[slug].xml`.
- Cross-links are **exits**, not shared chrome.
  - Portfolio: one quiet footer/colophon link, e.g. “Writing” → `/blog`.
  - Blog: one quiet footer link, e.g. “Work” or “Hire me” → `/`.
- Do not share visual language, components, CSS, design tokens, or fonts between the two trees.
- Do not share Astro layouts. Each site has its own document shell (`<html>`, fonts, CSS entry, analytics snippet if you keep it).

## Astro constraint: `src/pages` is the only mixed folder

Astro routes from `src/pages`. That directory will contain **both** site’s route files. Everything those files import must stay on one side of the split.

Treat a page as a thin route: frontmatter + one site layout + site-local components. A portfolio page must not import from `src/blog/`. A blog page must not import from `src/portfolio/`.

Storyblok component maps in `astro.config.mjs` should point at the blog tree only.

## Target layout

Names can shift slightly in implementation, but the **boundary** should look like this:

```
src/
  pages/                          # routes only
    index.astro                   # portfolio home
    blog/                         # blog index + [slug]
    rss/                          # RSS index + feeds
    # later: work.astro, etc. — portfolio only

  blog/
    config.ts                     # titles, description, socials for writing
    layouts/
    components/
    css/                          # current CUBE CSS (moved)
    design-tokens/                # current JSON tokens (moved)
    css-utils/                    # clamp-generator, tokens-to-tailwind (moved)
    storyblok/
    scripts/
    web-components/
    demos/

  portfolio/
    config.ts                     # client-work copy, OG, etc.
    layouts/
    components/
    css/
    design-tokens/                # only if/when the funnel needs them
```

**Allowed at repo root (tooling), not as a shared design system:**

- `astro.config.mjs`, `package.json`, PostCSS, TypeScript config
- One or two Tailwind config files (see below) — these are build inputs, not UI

**Not allowed as a shared `src/components` or `src/layouts`:**

The current `src/components`, `src/layouts`, `src/css`, `src/design-tokens`, `src/storyblok`, and `src/config` all belong to the blog. After the move they live under `src/blog/`. Duplicate a `<head>` helper or analytics include under `src/portfolio/` rather than extracting a “common” package. The Head markup today is blog-flavored (Twitter/OG defaults, favicons). The portfolio will want different metadata and likely different icons.

Analytics snippets are the same kind of thing: each site owns its own include under its layout tree (portfolio: GoatCounter). Do not keep a root `src/layouts` that both sites import.

## CSS isolation (this is the part that actually leaks)

Today every page uses `Layout.astro`, which imports:

- `src/css/styles.css` (Tailwind layers + global reset, fonts, variables)
- `src/css/cube.css` (glob-imports blocks, compositions, utilities)

`tailwind.config.ts` scans `./src/**/*.{html,js,jsx,mdx,njk,twig,vue,astro}`. If portfolio files stay on that glob, Tailwind will generate blog utilities from portfolio class names (and the reverse once the portfolio has its own Tailwind). That is how the two systems contaminate each other even if you never `@import` the other CSS file.

### Rules

1. **Two CSS entries, two layouts.** Blog layout imports only `src/blog/css/...`. Portfolio layout imports only `src/portfolio/css/...`. Never import both in one document.
2. **Two Tailwind configs, each with a tight `content` glob.** Example:
   - Blog: `src/blog/**/*`, `src/pages/blog/**/*`, `src/pages/rss/**/*`
   - Portfolio: `src/portfolio/**/*`, `src/pages/index.astro`, plus any future portfolio routes (explicit files or `src/pages/work/**/*` — not `src/pages/**/*`)
3. **Do not use `src/**/*` as a Tailwind content path.** That glob is how the split dies.
4. **Point each CSS entry at its own config.** Tailwind 3.4+ supports `@config` at the top of a CSS file so PostCSS’s single `tailwindcss()` plugin still processes two contexts:

   ```css
   @config "../../../tailwind.blog.config.ts";
   ```

   Keep `postcss.config.cjs` as the shared pipeline (import, nesting, Tailwind). The **config file** is per CSS entry, not a shared theme.
5. **Tokens, Typekit, and resets travel with the blog CSS.** The portfolio may use a different font loader, a different reset, or no Tailwind at all. That is fine. Do not reuse `src/blog/design-tokens` or the Typekit stylesheet in the portfolio layout “just for now.”
6. **No shared utility class names as a contract.** Even identical class names (`flow`, `wrapper`) in two CSS files are two different implementations. Pages must only use classes defined in their own CSS tree so a future rename on one side cannot silently restyle the other.
7. **Check the built CSS.** After a build, portfolio HTML should not reference a stylesheet that contains blog CUBE blocks (post-list, prose, breadcrumbs, etc.), and blog HTML should not pull portfolio rules.

### What “no shared CSS” does not mean

The PostCSS plugin list and npm packages can stay in one `package.json`. Isolation is about **what gets bundled into each page**, not about installing Tailwind twice.

## Sitemap, RSS, and SEO

- RSS stays under `/rss` and keeps using the blog `site` / title / description.
- `@astrojs/sitemap` includes `/`. The portfolio home should stay in the sitemap.
- Use per-layout `<title>`, description, and OG tags. Do not reuse the blog tagline (“Scattered thoughts about space exploration…”) on portfolio pages.
- Canonical URLs stay on `https://jakerobins.com` for both products.

## Accidental visits

After the root is a portfolio, a reader who types the domain will not land on `/blog`. The holding page and footer links (Writing on `/`, Hire me on the blog) are the way between the two. Do not restore the HTTP redirect once the real portfolio is live.
