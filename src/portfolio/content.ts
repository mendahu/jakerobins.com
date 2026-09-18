/* Page content for the freelance funnel at /. Copy lives here rather than in
   the markup so the sections stay readable and a copy change never means
   touching layout. See docs/portfolio/design-brief.md for what each section is
   for, and marketing-strategy.md for the claims behind it. */

export const hero = {
  eyebrow: "Freelance developer · Product partner",
  positioning:
    "End-to-end technical partner for people building real products.",
  lede: "I take on the big, connected ones — several moving parts, real data, AI where it earns its place — and stay with it from the business problem through to what ships.",
};

/* The portrait for the hero. Set `src` once the photograph is supplied: a hard,
   intentional crop on a solid field, not soft stock. Until then the hero shows
   the petrol plane and its ring on their own. */
export const portrait: { src: string; alt: string } | null = null;

export const offer = {
  index: "01",
  eyebrow: "What I can help you with",
  title: "Complexity is the interesting part",
  items: [
    {
      index: "01",
      field: "deep",
      title: "Web, mobile and product systems",
      body: "Platforms, portals, mobile apps and services that have to talk to each other. I can build distributed systems shaped around how your business actually runs.",
    },
    {
      index: "02",
      field: "paper",
      title: "Fractional CTO and product ownership",
      body: "Architecture calls, vendor decisions and roadmap judgement for companies that need a technical owner before they can justify a full-time CTO.",
    },
    {
      index: "03",
      field: "warm",
      title: "AI inside the product",
      body: "AI pointed at the places it pays for itself — the slow judgement calls, the backlog nobody gets to — built into your product with guardrails and an audit trail.",
    },
    {
      index: "04",
      field: "accent",
      title: "Software layered into how your team already works",
      body: "Software that slots into the workflows your team already has and takes the blockers out of them, so the same people deliver more without learning a new way to work.",
    },
  ],
} as const;

export const why = {
  index: "02",
  eyebrow: "Why Jake",
  title: "I have sat on both sides of the table",
  lede: "Eighteen years experience across retail operations management, technical leadership and software development. I can take your product across the finish line, whether the needs are in my job title or not.",
  body: "I can sit with any stakeholder or decision maker and help them decide what to build, what to buy, and what to stop. I can help decide which features can be descoped to ensure we sprint to delivery.",
  stat: {
    value: "18 yrs",
    label: "Operations, technical leadership and software development",
  },
  strengths: [
    "Operational processes, human workflows and systems",
    "User-focused interfaces that drive adoption and velocity",
    "Minimising cost, maximising value",
  ],
} as const;

export const method = {
  index: "03",
  eyebrow: "How I work",
  title: "AI brings the velocity. I bring the taste.",
  steps: [
    {
      index: "01",
      title: "Prototypes in days",
      body: "My process is fully AI-assisted, letting us prototype and retire risk quickly in order to make better decisions for the business.",
    },
    {
      index: "02",
      title: "AI-powered products, shipped",
      body: "I have built AI features clients’ own users rely on — not just AI in my workflow. Real implementation experience, with guardrails and an audit trail.",
    },
    {
      index: "03",
      title: "Judgement stays human",
      body: "While AI accelerates the slow parts, I stay at the centre of the decision-making and stay accountable for my work.",
    },
  ],
} as const;

export const proof = {
  index: "04",
  eyebrow: "Proof",
  title: "What my clients say",
  rail: "Three clients · words are theirs",
  testimonials: [
    {
      rule: "ink",
      quote:
        "Jake Robins is the kind of technology leader who can help organizations bridge the gap between ambition and execution. He understands how businesses operate, where technology can create leverage, and how to turn complex problems into clear, actionable solutions.",
      name: "Chris Sallans",
      role: "VP Retail Operations, Best Buy Canada",
      logo: { src: "/portfolio/logos/best-buy.webp", alt: "Best Buy" },
    },
    {
      rule: "deep",
      quote:
        "Jake's dedication to the quality of his work and the craft of building software is exceptional. He's a clear communicator and key collaborator. Even at a part-time capacity, he makes a full-time impact.",
      name: "Brett Chalupa",
      role: "Engineering Lead, Baymard Institute",
      logo: { src: "/portfolio/logos/baymard.webp", alt: "Baymard Institute" },
    },
    {
      rule: "accent",
      quote:
        "I am not a developer, and I run a platform that thousands of students depend on. Jake is the reason that works. When I bring him a technical question, he gives me the trade-offs straight and tells me what he would do and why. He has talked me out of more than one expensive mistake.",
      name: "Steven Wharton",
      role: "CEO, The Wharton Group",
      logo: {
        src: "/portfolio/logos/wharton-group.webp",
        alt: "The Wharton Group",
      },
    },
  ],
} as const;

export const contact = {
  index: "05",
  eyebrow: "Contact",
  title: "Tell me about your product.",
  body: "Email me what you are building and where you want it to go. I'll get back to you within a business day.",
} as const;

export const footer = {
  blurb:
    "Freelance developer and product partner for companies with real products.",
  thisPage: [
    { href: "#offer", label: "What I take on" },
    { href: "#why", label: "Why Jake" },
    { href: "#how", label: "How I work" },
    { href: "#contact", label: "Contact" },
  ],
  legal: "Web products · AI · product ownership",
} as const;
