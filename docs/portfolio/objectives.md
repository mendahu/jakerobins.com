# Portfolio — high-level objectives

This site is the **source of truth for Jake Robins as a hireable freelance developer**. It lives at the apex of jakerobins.com (`/`). It is a landing page, not a blog and not a SaaS product.

Anyone who might hire Jake should be able to land here, understand the offer, and start a conversation. The URL will be shared widely: search, socials, referrals, and direct send.

Code and design isolation from the writing site is documented in [Two sites on the apex domain](../two-sites-on-apex.md).

## Job to be done

When a potential client arrives, they should quickly know:

1. **What services are available** — the work Jake takes on.
2. **Why Jake** — differentiating factors and value proposition.
3. **How to start** — a direct way to get in touch.

The page is an initiation surface for work, not a magazine, not a booking product.

## Inflows

Expect mixed, unowned traffic:

- Organic search
- Links from socials, referrals, and other people passing the URL around
- Direct visits from someone Jake sent here

The page has to stand alone. Do not assume the visitor has seen a pitch first.

## Product requirements

| Need | Intent |
| --- | --- |
| Services | State what freelance work is on offer. |
| Differentiation | Make the value proposition and distinctives explicit. |
| Contact | One path to start work: **email**. No contact form, no calendar embed, no “book a slot.” |

Quiet exits to the blog (Writing) stay allowed. They are not the primary CTA.

## Technical requirements

- **SEO:** The page must be a first-class search landing: titles, descriptions, structure, and crawlability that match a professional offering, not the personal blog tagline.
- **Agent / LLM visibility:** Structure and copy should be easy for crawlers and language models to parse. Prefer a clear, public HTML document over gated or highly dynamic UI. The goal is that models can browse this site and, over time, surface Jake as a hireable developer (including in future training data). Provide an interface that is straightforward for agents, not only for humans.
- **Contact:** Email only. Cut to the chase.

Static Astro pages under `src/portfolio/` remain the implementation home. Section list, identity, and analytics constraints are in [requirements.md](./requirements.md).

## Design direction

Visual system lives in the existing Claude Design kit. Page structure and funnel assembly: [design-brief.md](./design-brief.md).

The portfolio must not reuse the blog’s design system.

## Out of scope (for this product)

- Fancy lead-capture forms or scheduling
- Treating the blog as the professional homepage
- Sharing layouts, components, or CSS with `/blog`
