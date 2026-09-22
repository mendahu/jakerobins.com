/* Page content for the freelance funnel at /. Copy lives here rather than in
   the markup so the sections stay readable and a copy change never means
   touching layout. See docs/portfolio/design-brief.md for what each section is
   for, and marketing-strategy.md for the claims behind it. */

export const hero = {
  eyebrow: "Freelance developer · Product partner",
  positioning: "End-to-end technical partner for companies ready to level up.",
  lede: "Bring me on board to build, repair or scale whatever it is you need to grow.",
};

/* Hero portrait: hard crop on the petrol field. Path is under public/. */
export const portrait: { src: string; alt: string } = {
  src: "/portfolio/portrait_jake_robins.jpg",
  alt: "Jake Robins",
};

export const offer = {
  index: "01",
  eyebrow: "What I can help you with",
  title: "Complexity is the interesting part",
  items: [
    {
      index: "01",
      field: "deep",
      title: "Web, mobile and product systems",
      body: "Distributed systems customized to your business needs, including platforms, portals, mobile apps and more.",
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
      body: "AI-powered products that deliver real value, beyond generic chat assistants.",
    },
    {
      index: "04",
      field: "accent",
      title: "Purpose-built software",
      body: "Integrated customer-facing products and internal solutions for your teams.",
    },
  ],
} as const;

export const why = {
  index: "02",
  eyebrow: "Why Jake",
  title: "I've sat on both sides of the table",
  lede: "Eighteen years experience across retail operations management, technical leadership and software development. I can take your product across the finish line, whatever it takes to get there.",
  body: "I can help any stakeholder or decision maker decide what to build, what to buy, and what to bury. Fully fluent in corporate jargon.",
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
  title: "AI velocity. Human expertise.",
  steps: [
    {
      index: "01",
      title: "Prototypes in days",
      body: "A fully AI-assisted process works quickly to prototype and retire risk.",
    },
    {
      index: "02",
      title: "Built without compromise",
      body: "Context engineering and thorough review prevents long-term tech debt and AI-slop.",
    },
    {
      index: "03",
      title: "Human judgement",
      body: "AI accelerates the work while I make decisions and take accountability for the outcome.",
    },
  ],
} as const;

export const proof = {
  index: "04",
  eyebrow: "Proof",
  title: "What my clients say",
  testimonials: [
    {
      rule: "ink",
      quote:
        "Jake is the kind of technology leader who can help organizations bridge the gap between ambition and execution. He understands how businesses operate, where technology can create leverage, and how to turn complex problems into clear, actionable solutions.",
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
  legal: "🇨🇦 Made in Canada - Perfeccionado en México 🇲🇽",
} as const;
