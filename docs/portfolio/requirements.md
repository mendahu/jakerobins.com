# Portfolio — page requirements

Granular requirements for the freelance landing page at `/`. Product intent lives in [objectives.md](./objectives.md). Copy, client names, and design artifacts will be filled in later; this file is the checklist of what the page must contain and how success is measured.

## Shape

- **Single page.** One URL (`/`). In-page sections, not a multi-route funnel.
- **Identity:** Jake’s **name** and a **photograph** are on the page (visible without hunting).

Quiet **Writing** → `/blog` may stay in the footer. It is not a primary section.

## Sections (in order)

Order can flex slightly in design, but these blocks must exist:

1. **Identity / intro** — Name, photo, and enough context that a cold visitor knows who this is for (freelance developer, hireable).
2. **Previous clients** — A list of past clients (logos and/or names; exact treatment TBD with design).
3. **Value propositions** — Hooks: types of work that are appealing and on offer (the “why talk to me / what I take on” layer).
4. **Expertise and experience** — A section that states background, depth, and relevant experience.
5. **AI** — How Jake uses AI, and how that helps clients.
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

**Implication for this repo:** The portfolio layout currently loads the same Google Analytics snippet as the blog (`G-RKSHXBHGHW`). That is the wrong default for a **no-banner** portfolio. Replace it on the portfolio with a **cookieless, privacy-first** analytics tool (examples: Plausible, Fathom, Simple Analytics, or a self-hosted Umami/GoatCounter configured without identifying cookies). Keep blog analytics as a separate decision; do not force the writing site onto the same tool unless we choose to.

**Implementation bar for the chosen tool**

- Count page views on `/`.
- Count Contact clicks as a goal/event (mailto or labeled contact link).
- Record source/medium (referrer + UTM) without identifying individuals.
- Document in this folder (or env/config comments) which vendor and what “conversion” means: `contact_clicks / visits` on `/`.

IP anonymization and a published privacy note that the portfolio uses cookieless analytics are enough for this product; a consent modal is out of scope.

## SEO and agents

Unchanged from objectives: professional metadata, clear headings that match these sections, public HTML that is easy for crawlers and LLMs to read.

## Explicitly out of scope

- Additional routes (`/work`, case-study pages) unless we reopen this file
- Contact forms, Calendly, chat widgets
- Cookie banners and ad-tech
