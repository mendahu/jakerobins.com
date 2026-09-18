# Portfolio — design brief

**Page layout brief** for the freelance landing page at `/`. Use with [objectives.md](./objectives.md), [marketing-strategy.md](./marketing-strategy.md), and [requirements.md](./requirements.md).

## What this document is (and isn’t)

A **design system already exists** in Claude Design (tokens, type, colour, components, composition devices). This brief does **not** ask for a new visual system.

**Use this brief to:** assemble that existing system into a **single-page marketing funnel**—section order, each section’s job, content constraints, and what not to invent.

**Do not use this brief to:** redesign the brand, invent a second kit, or expand into multi-route screens. Apply the current system; wire the six sections below.

Copy is not final. Prefer labeled placeholders over invented clients, quotes, metrics, or services. Strategy and this funnel win over any placeholder copy that shipped with the kit.

## Product in one paragraph

Jake Robins is a hireable freelance developer. The page is an initiation surface for work: a cold visitor should know **who it’s for**, **what kind of work**, **why Jake**, and **how to email**. It is not a blog, not a SaaS marketing site, and not a multi-page case-study portfolio.

**One-line positioning (from strategy):** End-to-end technical partner for companies with real products—not a vendor for a one-page brochure.

## Audience (design for this, design against that)

**Design for**

- Larger companies / teams with substantial products (multiple parts that must work together).
- Serious web product work, including AI in the product and in the workflow.
- Buyers who want product ownership / fractional CTO, not only ticket closing.

**Design against**

- Mom-and-pop brochure / “we exist” brochure sites.
- Lowest-price commodity web design.
- Generic “full-stack freelancer” SaaS landing templates.

Wrong leads should self-select out from the hero and “What I take on” without a hard sell.

## Page shape

- **Single page** at `/`. In-page sections only. No `/work`, no case-study routes, no secondary screens in the kit.
- **Identity:** Jake’s **name** and a **photograph** visible without hunting (hero).
- **Primary CTA everywhere:** email (`mailto:`). Same destination in nav, hero, and contact. No form, no calendar, no chat, no “book a time.”
- **Quiet exit:** Writing → `/blog` in the footer only. Not a primary section or hero link.
- **Proof:** Exactly **three** client testimonials (see Proof). Do not add a fourth invented client or a logo wall of fake brands.

## Funnel (section order)

Qualify lightly → offer → differentiate → method → proof → convert.

| # | Section | Funnel job |
| --- | --- | --- |
| 1 | Hero | Who + hireable + email |
| 2 | What I take on | Offer + who it’s for / not for |
| 3 | Why Jake | Differentiator |
| 4 | How I work | Method + AI as leverage |
| 5 | Proof | Three real-client testimonials |
| 6 | Contact | Conversion |

Order can flex slightly in layout (e.g. sticky nav), but these six blocks must exist and stay readable as distinct sections for humans and crawlers.

---

## Section briefs

### 1. Hero

**Purpose:** In ~5 seconds, a cold visitor knows who Jake is, that he is hireable, and how to start.

**Must include**

- Name as a hero-level brand signal (not only nav text).
- Photograph of Jake (real photo asset; placeholder frame OK until supplied).
- Short positioning line aligned with the one-liner above (product partner, not brochure vendor).
- One primary email CTA.
- Optional: one short clause on who it’s for (e.g. teams with real products)—not a second section.

**Must not**

- Stats strips, logo clouds, schedule/promo chips, or floating badges on the photo.
- Secondary CTAs that compete with email (blog, “see work,” calendar).
- Invented taglines that sound like generic SaaS (“Ship faster with AI-powered excellence”).

**Layout notes:** One composition. Brand + one headline + one supporting sentence + one CTA group + dominant photo/plane. Full-bleed or edge-dominant photo treatment preferred over an inset card collage.

### 2. What I take on

**Purpose:** State the work on offer and filter the wrong leads.

**Must include**

- Concrete work types drawn from strategy (not seven equal marketing tiles unless the design truly needs that many):
  - Web products / systems beyond a single marketing URL
  - AI implemented **in** products (not only “I use ChatGPT”)
  - Automation that cuts manual work
  - Fractional CTO / product ownership where a full-time CTO isn’t in budget
  - End-to-end: business problem through delivery
- Clear signal of **scale and complexity** (substantial products, systems).
- Explicit or obvious **out**: not brochure / leaflet / tiny local “we exist” sites.

**Must not**

- Invent service packages, prices, timelines, or process steppers (“Discover → Design → Deliver”).
- Position as staff-aug ticket closer as the primary offer.
- Icon rows of buzzwords with no substance.

**Claims map:** Strategy items 2, 4, 5, 6, 7 primarily live here; keep wording faithful when copy is written.

### 3. Why Jake

**Purpose:** The differentiator—why talk to him instead of a generic freelance developer.

**Must include**

- Business + engineering: fluency on both sides of the table.
- Ops / retail-management background + years building software (exact years from strategy: twelve ops, six software—do not invent other numbers).
- Partnership and product judgment, not only implementation.

**Must not**

- Repeat the full services list from section 2.
- Fake awards, fake “trusted by,” or fake metrics.
- A second AI deep-dive (that belongs in How I work).

**Claims map:** Strategy items 1 and 7 (ownership angle).

### 4. How I work

**Purpose:** Method and leverage—especially AI—without a buzzword strip.

**Must include**

- AI **in the workflow** → faster prototypes and delivery for the client.
- AI **in the product** when the use case warrants it (implementation experience, not assistant-only).
- Tone: leverage and speed for serious product work—not “AI agency” theater.

**Must not**

- Tool logo walls (ChatGPT, Copilot, etc.) as the main visual idea.
- Claims of magic autonomy or replacing the client’s team.
- A separate seventh “AI” chapter later on the page.

**Claims map:** Strategy items 3 and 4.

### 5. Proof

**Purpose:** Social proof anchored on **three** previous clients—not a decorative logo bar.

**Must include — exactly three units, each with**

1. Client **logo** (or clear name treatment if logo pending)
2. Person’s **name** and **job title**
3. **Testimonial** quote

**Content rules**

- Until real testimonials are supplied, use obvious placeholders (`[Client A logo]`, `[Name]`, `[Title]`, `[Quote]`).
- **Do not invent** companies, people, titles, quotes, or results.
- No case-study pages, “read more,” or multi-screen templates.
- Optional fourth “logo only” row is **out of scope** for v1; stick to the three anchors.

**Must not**

- Star ratings, fake review widgets, or stock headshots of strangers.
- Metrics (“3× revenue”) unless supplied as real and approved.

### 6. Contact

**Purpose:** Conversion. Make emailing effortless and obvious.

**Must include**

- Direct email control (`mailto:` or equally obvious email link).
- Short closing line consistent with the offer (ready to talk about product work—not “book a discovery call”).

**Must not**

- Forms, Calendly, chat, phone-required flows, newsletter signup as the primary action.
- A different CTA than elsewhere on the page.

---

## Global UI rules

| Do | Don’t |
| --- | --- |
| Modern, professional, bold color/theme | Blue-and-white generic SaaS marketing look |
| Clear section headings that match this brief (SEO + agents) | Clever opaque labels that hide the section job |
| Public, readable HTML structure in production mind | Gated, highly dynamic UI that crawlers can’t parse |
| Email as the only conversion product | Forms, scheduling, remarketing pixels |
| Writing link in footer | Writing as a hero/nav peer to Contact |
| Real photo of Jake when available | Stock “team at laptops” heroes |

**Nav (optional):** Sticky wordmark + Contact (email). No fake menu of Routes that don’t exist.

**Footer:** Email, optional legal/privacy note later, quiet Writing → `/blog`.

## Visual system (existing — assemble, don’t reinvent)

- **Source of truth for look-and-feel:** the current Claude Design system for Jake Robins (colours, type, space, components, composition devices).
- **Job of this brief:** map that system onto the six funnel sections. Prefer existing components (wordmark, buttons, section headings, cards/tags, footer, optional nav) over new invention.
- **Leave behind** kit pieces that fight the product: forms, calendars, case-study templates, multi-screen flows, “book a call” patterns.
- Photography: real portrait of Jake when available—hard, intentional crop on a solid field fits the system; not soft stock lifestyle.
- If kit **copy** or fake clients conflict with marketing strategy, **strategy wins**. Tokens and layout rules stay; invented content goes.

## Explicitly out of scope (do not design)

- A **new** design system, alternate brand kit, or second visual language
- Extra routes (`/work`, case studies, services subpages)
- Contact forms, calendars, chat widgets, newsletters as primary CTA
- Cookie consent banners and ad-tech (analytics is cookieless; see requirements)
- Process steppers, FAQ accordions, pricing tables, fake dashboards
- Blog chrome, blog fonts, or anything that makes `/` look like `/blog`

## Handoff checklist for Claude Design

1. Start from the **existing** design system—do not create a new one.
2. Six sections in funnel order above.
3. Hero shows name + photo + email CTA.
4. What I take on filters brochure work out.
5. Why Jake = ops + engineering story; How I work = AI leverage.
6. Proof = **three** testimonial units only (logo + title + quote); placeholders if content missing.
7. Contact = email only; no form/calendar.
8. No invented clients, metrics, services, or secondary products.
9. Drop kit patterns that imply forms, booking, or extra routes.

## Related docs

- [objectives.md](./objectives.md) — job to be done, SEO/agents, out of scope
- [marketing-strategy.md](./marketing-strategy.md) — audience, claims, emphasis
- [requirements.md](./requirements.md) — checklist, analytics, contact behavior
