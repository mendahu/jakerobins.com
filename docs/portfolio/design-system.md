# Portfolio — design system

Visual system for the freelance landing page at `/`. Extracted from `design_inspo/Jake Robins Design System` (Claude / Clod prototype). **Do not copy that kit’s copy, client names, metrics, or invented pitch.** Live wording follows [marketing-strategy.md](./marketing-strategy.md) and [objectives.md](./objectives.md). Page structure follows [requirements.md](./requirements.md).

Implement in `src/portfolio/` only. Do not import blog CUBE/Tailwind tokens.

The prototype is a React UI kit. The production site is Astro. Rebuild the look with the same tokens and rules; do not paste the kit wholesale.

## Intent (visual only)

Swiss / International Typographic Style: grotesque type, hard grid, flat colour fields, **rules instead of soft shadows**, square corners. Warm bone paper, not cool SaaS white-and-blue.

## Tokens

Values come from `design_inspo/Jake Robins Design System/tokens/`. Prefer the same CSS custom property names when implementing.

### Colour

Warm neutrals plus three saturated **fields** (no gradients, no extra hues, no claret sitting on chartreuse without ink or paper between them). Target mix: roughly **55% paper, 20% ink, 25% saturated colour**.

| Ramp | Steps | Role |
| --- | --- | --- |
| Ink | `#14120F` … `#E8E2D6` | Text, rules, inverse surfaces. Warm near-black, not `#000`. |
| Paper | `#FFFFFF`, `#F5F1E8` (page), `#EDE7DA` (sunken), `#E3DCCB` | Bone off-white. |
| Claret | `#74162B` (500), hover `#5D1122` | Primary signal: primary button, indices, one field per screen. |
| Petrol | `#0E3A42` (600), `#17545E` (500) | Deep teal blocks, focus ring. |
| Chartreuse | `#C8E262` (500) | Bright interruption; text on it is **ink**. |
| Blush | `#E0C7B8` / `#EFDFD5` | Warm tertiary field. |

Semantic aliases in the kit: `--text-primary` / `--text-secondary` / `--text-muted` / `--text-inverse` / `--text-link` (claret) / `--text-link-hover` (ink); `--surface-page`, `--surface-card`, `--surface-sunken`, `--surface-inverse`, `--surface-accent`, `--surface-block-deep|bright|warm`; `--border-rule` (ink-900), `--border-strong`, `--border-hairline`, `--border-inverse`; `--focus-ring` (petrol).

Status: success `#1F6B4F` (only non-palette colour); warning chartreuse; error claret; info petrol.

### Type

| Role | Face | Notes |
| --- | --- | --- |
| Display / headings / body / UI | Archivo (Helvetica Neue substitute) | Weights 400 body, 500 controls, 600 display/headings, 700 wordmark only. |
| Meta | JetBrains Mono | Uppercase labels, indices, eyebrows. |

No serif. Tight display tracking (**-0.035em**) is the signature move. Headlines 2–3 dense lines, ~17–22ch. Body max ~62ch. Sentence case for headlines and body; **uppercase only in mono micro-type**.

Scale (desktop → shrinks at 1080 / 780 / 520): display 96 / 72 / 56; h1–h4 40 / 32 / 24 / 20; body 19 / 16 / 14; meta 12 / micro 10. Leading: display ~0.94–1.02, headings 1.1, body 1.5.

### Space and layout

- 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section vertical rhythm `--section-y` 96px (64px from tablet down); block pad 32px; card pad 24px; gutter 24px (16px tablet).
- Max width 1320px, page pad 32px (20px small). Asymmetric splits (e.g. 1.35fr / 1fr), not 50/50 by default.
- Breakpoints: **1080**, **780**, **520**. Type scales via tokens, not one-off media queries per component.

### Effects

- Radius **0** everywhere except pills on tags and tiny status dots.
- No soft drop shadows. Optional **hard offset** `6px 6px 0 0 ink` on **one** featured object per view.
- Rule weights: **1px** card edges, **2px** section/nav/button, **4px** stats/underlines, **8px** major dividers.
- Motion: 120ms colour, 180ms move, ease `cubic-bezier(0.2, 0, 0, 1)`. Hover = **inversion / one-step deepen**, not tint. Press = `translate(1px, 1px)`. Focus = 2px petrol outline, 2px offset. Selection = chartreuse field, ink text.
- Links: claret, 1px underline at rest, ink on hover.

## Elements

From `tokens/base.css` (rebuild as portfolio global CSS):

- Page: `--surface-page` background, `--text-copy` on body, antialiased.
- Headings: display font, semibold, heading tracking/leading; zero default margin.
- Links as above; `::selection` chartreuse/ink; `:focus-visible` petrol ring.
- `.jr-mono-label` (or equivalent): meta font, meta size, uppercase, meta tracking.

**Do not** take form control resets as a reason to add inputs. Contact is email only.

## Composition devices (use sparingly)

These stop the page reading as a stack of rectangles. At most two per section; hide decorative extras below 780px.

| Device | Kit name | Use |
| --- | --- | --- |
| Flat geometry | `GeometricFigure` | Circles, rings (~36–44px stroke), 45° squares; large; clipped by section overflow. |
| Colour band | `StatementBand` | **One** full-bleed interruption per page; optional slight tilt; no button inside the band. |
| Edge index | `EdgeNumeral` | Huge outline/fill section number, half off-canvas. |
| Margin label | `VerticalRail` | Rotated mono label on the section edge. |
| Overlap | — | A row pulling up into the band above (`z-index`, negative margin). |

Never two saturated bands adjacent. Never the same band colour twice in a row. Colour bands and tilt stay on small screens; numerals/rails/figures hide.

## Photography

Requirements call for a **photo of Jake**. The kit had no photos. Treat the portrait as a **hard-cropped, high-contrast** image on a solid field—not a soft stock hero, not people-pointing-at-laptops. Geometry still does most of the decoration.

## Components to keep (this site)

Map kit components to the **single-page** funnel. Drop kit labels that imply fake services.

| Kit | Role on `/` |
| --- | --- |
| **Wordmark** | Name as type (no drawn logo unless one is added later). |
| **Button** | Contact CTA: `mailto`. Variants: primary (claret), secondary (ink rule, invert on hover), inverse, accent (chartreuse, **one** moment), ghost. Sizes sm/md/lg → 34/44/56px height; **md is the touch default**. One primary per section. Labels 2–4 words, verb-first — **email**, not “book a slot” (objectives). |
| **SectionHeading** | Section titles + optional mono index (`01`…). |
| **Card** | Grouped content; `offset` at most once per view. |
| **Tag** / **Badge** | Short chips (stack, domains). Pill radius allowed here. |
| **StatBlock** | Short figures if expertise needs numbers (real numbers only). |
| **ServiceCard** | Value-proposition / work-type tiles; collapsed 1px grid. Tones: paper / deep / warm / claret as in the kit. |
| **Footer** | Legal/contact/Writing exit. Rebuild; do not ship kit placeholder links. |
| **NavBar** (optional) | Sticky bar, 2px bottom rule; wordmark + contact. Nav links may hide &lt;780px. No extra fixed chrome. |
| **Icon** | Optional small Lucide-style stroke icons on controls/lists only—not 64px feature icons. |

**IconButton** only if a real control needs a glyph-only target.

## Components to leave behind

Not needed for [requirements.md](./requirements.md) and they drag in the wrong product (forms, extra routes, fake case studies):

- Entire **forms** kit (Field, Input, Textarea, Select, Checkbox, Radio, Switch)
- **Dialog, Toast, Tooltip**
- **Tabs, Accordion**
- **CaseStudyCard**, case-study **template**, **ProcessStep**, **Testimonial** (unless we later add proof that matches marketing strategy)
- Multi-screen UI kit (`ServicesScreen`, `ContactScreen`, `CaseStudyScreen`) and “book a call” patterns

## Implementation notes

- Prefer licensed Helvetica Neue / Haas if available; until then Archivo + JetBrains Mono as in the kit.
- Rebuild tokens as portfolio CSS (or a future `tailwind.portfolio.config.ts`)—**not** `src/blog/design-tokens`.
- Geometry and bands are the brand; copy is not. If kit voice (“Book a call”, fake clients) conflicts with marketing strategy, **strategy wins**.
