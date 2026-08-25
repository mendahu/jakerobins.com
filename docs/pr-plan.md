# PR plan: apex portfolio + isolated blog

Goal: ship small, reversible deploys that end with two site trees in one Astro app, **no shared UI or CSS**, blog URLs unchanged.

Each PR should be mergeable and deployable on its own. User-facing behavior only changes where noted.

Suggested titles are examples; keep PRs focused.

---

## PR 1 — Namespace the blog (no user-facing change)

**Why:** Everything at `src/components`, `src/layouts`, `src/css`, `src/config`, `src/storyblok`, etc. is blog code. Move it before any portfolio files exist so there is never a “shared” folder that both sides grow into.

**Do:**

- Create `src/blog/` and move into it:
  - `layouts/` (including `Layout.astro` and `GoogleAnalytics.astro`)
  - `components/`
  - `css/`, `design-tokens/`, `css-utils/`
  - `storyblok/`, `scripts/`, `web-components/`, `demos/`
  - `config/config.ts` → `src/blog/config.ts` (or `src/blog/config/`)
- Update imports in `src/pages/blog/*` and `src/pages/rss/*`.
- Point Storyblok `components` in `astro.config.mjs` at the new paths (e.g. `blog/storyblok/Post`).
- Update `tailwind.config.ts` `content` globs so they still cover the moved files **and** the blog/rss pages. Still do **not** add a portfolio glob (there isn’t one yet).
- Leave `redirects: { "/": "/blog" }` in place.

**Do not:** add `src/pages/index.astro`, add portfolio CSS, or extract “shared” Head/Footer packages.

**Verify:** `/blog` and `/rss` look identical. `npm run build` succeeds. Redirect from `/` still works.

---

## PR 2 — Two Tailwind configs, blog is the only consumer

**Why:** Isolation fails if one Tailwind `content` glob scans the whole repo. Split configs **before** portfolio CSS exists so the portfolio cannot accidentally sit on the blog glob.

**Do:**

- Rename/split `tailwind.config.ts` → `tailwind.blog.config.ts`.
- At the top of the blog CSS entry (`styles.css` after the move), add `@config` pointing at `tailwind.blog.config.ts`.
- Set blog `content` to only:
  - `src/blog/**/*.{astro,html,js,ts,...}`
  - `src/pages/blog/**/*`
  - `src/pages/rss/**/*`
- Add an empty or stub `tailwind.portfolio.config.ts` with `content` limited to `src/portfolio/**/*` and explicit portfolio page paths (even if those files do not exist yet, document the glob in a comment; or omit the file until PR 4 if you prefer not to land a dead config).
- Keep `postcss.config.cjs` as-is (one plugin list).

**Do not:** change visual design or the `/` redirect.

**Verify:** Blog CSS output is unchanged in substance (token names, CUBE classes). Build still works. Confirm Tailwind is not scanning `src/pages` wholesale.

---

## PR 3 — Remove the root redirect; ship a holding page

**Why:** Once `/` is a real document, GitHub Pages (and Astro) stop bouncing everyone to `/blog`. This is the first **user-facing** change. Ship a temporary page so readers are not stranded, without building the real funnel or borrowing blog styles.

**Do:**

- Remove `redirects: { "/": "/blog" }` from `astro.config.mjs`.
- Add `src/pages/index.astro` that uses a **new** `src/portfolio/layouts/` document (minimum HTML).
- Holding page copy: this is the professional site; the writing is at `/blog`; one obvious link to `/blog` (and maybe `/rss` if you want). No blog layout, no CUBE classes, no Typekit import from the blog layout.
- Add `src/portfolio/css/` with a tiny standalone stylesheet (even a few rules in one file). Import **only** that file from the portfolio layout.
- If you introduced `tailwind.portfolio.config.ts` in PR 2, either leave this page without Tailwind or wire `@config` now with a content glob that includes `src/pages/index.astro` and `src/portfolio/**/*` only.

**Do not:** implement the marketing page, reuse `src/blog/components/Footer.astro`, or import `src/blog/css`.

**Verify:**

- `https://jakerobins.com/` (or preview) renders the holding page and the blog link works.
- `https://jakerobins.com/blog` is unchanged.
- `/rss/feed.xml` is unchanged.
- View source / network: holding page stylesheet ≠ blog CSS bundle.
- Sitemap includes `/` as a real URL, not a redirect.

**Rollback:** restore the Astro redirect and delete `index.astro` if you need to.

---

## PR 4 — Portfolio scaffold (still not the real funnel)

**Why:** Lock the folder and layout contracts so later visual work cannot “just import the blog wrapper.”

**Do:**

- Flesh out `src/portfolio/` as the only place for funnel UI: `layouts/`, `components/`, `css/`, `config.ts`.
- Portfolio `config.ts`: host, professional title/description, socials you want on the funnel (LinkedIn, email, GitHub). Do not import `src/blog/config.ts`.
- Duplicate Head/meta and analytics into the portfolio tree (copy-paste is correct). Change titles/descriptions so `/` does not advertise the blog tagline.
- Optional: second favicon / OG image set for the funnel.
- Document in this folder (or a short comment in the portfolio layout): **no imports from `src/blog`.**

**Do not:** share components “until the portfolio has a footer.” Duplicate a 10-line footer.

**Verify:** `index.astro` still holding-page quality is fine. Build checks that `src/pages/index.astro` only imports from `src/portfolio/`. Grep for `from \"../blog` / `from \"../../blog` in `src/pages/index.astro` and `src/portfolio` should be empty.

---

## PR 5 — Quiet cross-links on the blog

**Why:** Blog readers who later visit `/` need a way back; people who land on a post from search may want the professional page. These links must not restyle the blog or introduce portfolio CSS.

**Do:**

- In the **blog** footer (`src/blog/components/Footer.astro`), add one text link to `/` (“Work”, “Hire me”, or similar). Same typography as existing footer links.
- On the holding page (and later the real portfolio footer), keep the “Writing” → `/blog` link.
- Do not add a global nav, do not add a second stylesheet to the blog layout.

**Verify:** Blog pages still load a single site CSS graph. Portfolio pages unchanged except their own footer link.

---

## PR 6 — Real portfolio (content and design)

**Why:** This is the actual marketing site. It should be one or more PRs of its own, after the scaffolding is on production.

**Do:**

- Replace the holding page with the funnel (sections, case studies, contact).
- New routes only under portfolio-owned page files (`src/pages/work.astro`, etc.) and only importing `src/portfolio/`.
- Extend `tailwind.portfolio.config.ts` `content` with each new page path (explicit is better than `src/pages/**/*`).
- Sitemap/OG as needed for new routes.

**Do not:** pull Storyblok, blog prose styles, or blog components into the funnel.

**Verify:** Visual QA on `/` and at least one inner portfolio route; regression pass on `/blog` and a post; RSS still valid; both CSS bundles still disjoint.

---

## Order and what can combine

| PR | Deploy risk | Can combine with |
| --- | --- | --- |
| 1 Namespace | Low (move + imports) | — |
| 2 Tailwind split | Low if CSS output matches | 1, if the diff stays reviewable |
| 3 Holding page + drop redirect | **Medium** (everyone hitting `/` sees a new page) | Not with 6 |
| 4 Portfolio scaffold | Low | 3, if 3 already has `src/portfolio/` |
| 5 Blog cross-link | Low | 4 or 6 |
| 6 Real funnel | High (product) | — |

Do not skip PR 1–2 and dump portfolio files next to the current `src/css`. That is how the Tailwind glob and `Layout.astro` imports mix the systems.

## Out of scope (on purpose)

- Subdomain, RSS URL changes, 301 maps from `/blog` to another host
- Shared component library
- Merging design tokens
- Changing Storyblok or post slugs
