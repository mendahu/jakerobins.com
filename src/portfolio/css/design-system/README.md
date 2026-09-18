# Vendored design system

These files are a copy of the **Jake Robins design system** maintained in Claude
Design (project `jake-robins-design-system-b16032c6-5128-4805-bceb-f945b113bcf6`).
They are the source of truth for colour, type, spacing, rules, motion and the
responsive layout utilities used by the portfolio page at `/`.

Rules of engagement:

- Do not hand-edit these files to style a section. Add a block in
  `src/portfolio/css/blocks/` instead.
- Never add a component-level media query. If something needs to reflow, add a
  utility to `tokens/responsive.css` so every consumer inherits it — that is the
  design system's own rule.
- Re-syncing means replacing these files wholesale: paste the upstream files in,
  run Prettier over them, and read the diff. Formatting is the repo's, the
  declarations are upstream's, so a real change stands out.
- Keep behavioural divergences at zero. There is exactly one today, documented
  inline: `tokens/fonts.css` no longer `@import`s Google Fonts, because the
  portfolio links the stylesheet from the document head instead.

The system's written guidance (voice, colour ratios, stack-breaking devices) lives
with the design system itself, not here. `docs/portfolio/design-brief.md` records
how it maps onto this page.
