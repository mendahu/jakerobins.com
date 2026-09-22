# Portfolio site

Planning and requirements for the freelance landing page at `/`.

- [High-level objectives](./objectives.md)
- [Marketing strategy](./marketing-strategy.md)
- [Design brief](./design-brief.md) — page funnel to assemble with the existing Claude Design system
- [Page requirements](./requirements.md) — checklist, contact, analytics

## Where the page lives

The funnel page itself is `src/pages/index.astro`, which is nothing but the six
sections in order. Everything it uses is under `src/portfolio/`:

- `content.ts` — all copy, including the three testimonials and the hero portrait
  slot. Change wording here, not in the markup.
- `components/sections/` — one component per funnel section, named for the
  section's job in the brief.
- `components/` — the pieces the sections share: `Button`, `SectionHeading`,
  `StatBlock`, `SiteHeader`, `Footer`.
- `css/design-system/` — a vendored copy of the Claude Design system (tokens,
  base styles, responsive utilities). Read its README before editing anything in
  there; site styling belongs in `css/blocks/`.

Client logos are in `public/portfolio/logos/`.

## Still outstanding

- **Portrait of Jake.** `portrait` in `src/portfolio/content.ts` is `null`, so the
  hero shows its petrol plane and ring without a photograph. Requirements ask for
  a photo on the page; setting `portrait` to a `{ src, alt }` is the whole change.

## Analytics

Hosted GoatCounter on `/` only (`src/portfolio/layouts/GoatCounter.astro`).
Default endpoint is `https://jakerobins.goatcounter.com/count` (override with
`PUBLIC_GOATCOUNTER_ENDPOINT` in `.env` if needed). Conversion is
`Contact Click` events ÷ pageviews on `/`. See [requirements.md](./requirements.md).
