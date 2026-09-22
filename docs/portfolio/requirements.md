# Portfolio — page requirements

Granular requirements for the freelance landing page at `/`. Product intent lives in [objectives.md](./objectives.md). Section jobs and design constraints live in [design-brief.md](./design-brief.md). Copy and real testimonials will be filled in later; this file is the checklist of what the page must contain and how success is measured.

## Shape

- **Single page.** One URL (`/`). In-page sections, not a multi-route funnel.
- **Identity:** Jake’s **name** and a **photograph** are on the page (visible without hunting).

Quiet **Writing** → `/blog` may stay in the footer. It is not a primary section.

## Sections (in order)

Order can flex slightly in design, but these blocks must exist. Detail and constraints: [design-brief.md](./design-brief.md).

1. **Hero** — Name, photo, positioning, primary email CTA. Cold visitor knows who this is and that Jake is hireable.
2. **What I take on** — Work types on offer, plus who it’s for / not for (substantial products; not brochure sites).
3. **Why Jake** — Differentiator: business + engineering, ops background, partnership / product ownership.
4. **How I work** — Method and AI as leverage (workflow speed and AI in products)—not a standalone buzzword strip.
5. **Proof** — Exactly **three** client anchors: logo, person name + job title, and testimonial each. No invented quotes or brands.
6. **Contact** — Direct **email** only. No form, no calendar, no “book a time.” The contact control is the conversion target (see Analytics).

## Contact behavior

- Primary CTA is email (`mailto:` or an equivalent obvious email link).
- Same destination if contact is repeated (e.g. header and contact section): still email, still no extra product.

## Analytics and privacy

**Goal:** Basic conversion measurement without a cookie banner, remaining comfortable under GDPR for this use.

**What to know**

- What share of arrivals **click Contact** (email CTA).
- **Where arrivals came from**, at a coarse level (referrer, campaign/UTM when present, direct vs search vs social).

**What not to do**

- No cookie consent banner.
- No tracking that depends on storing personal data or non-essential cookies without consent (typical default **Google Analytics / gtag** setups fall here).
- No remarketing, ads pixels, or fingerprinting “to make up for” no cookies.

**Vendor:** Hosted [GoatCounter](https://www.goatcounter.com/) at `jakerobins.goatcounter.com` (portfolio only). Default count URL `https://jakerobins.goatcounter.com/count` (optional override: `PUBLIC_GOATCOUNTER_ENDPOINT`). The blog has no analytics snippet.

**Conversion:** `Contact Click` events ÷ pageviews on `/`. Every hire mailto (header, hero, contact, footer) sends the GoatCounter event path `Contact Click` via `data-goatcounter-click`.

**Implementation bar**

- Count page views on `/`.
- Count Contact clicks as a goal/event (mailto or labeled contact link).
- Record source/medium (referrer + UTM) without identifying individuals.
- Document which vendor and what “conversion” means (this section).

IP anonymization and a published privacy note that the portfolio uses cookieless analytics are enough for this product; a consent modal is out of scope.

## SEO and agents

Unchanged from objectives: professional metadata, clear headings that match these sections, public HTML that is easy for crawlers and LLMs to read.

## Explicitly out of scope

- Additional routes (`/work`, case-study pages) unless we reopen this file
- Contact forms, Calendly, chat widgets
- Cookie banners and ad-tech
- Invented clients, testimonials, metrics, or service packages in design mocks
