export type ServiceCardTone = "paper" | "deep" | "warm" | "claret";

export type TestimonialTone = "paper" | "deep" | "warm";

export type Testimonial = {
  quote: string;
  personName: string;
  personTitle: string;
  organization: string;
  logoSrc: string | null;
  logoAlt: string;
  tone?: TestimonialTone;
};

export const landing = {
  intro: {
    headline: "Your partner in technology",
    lede: "Let me turn your business problems into technical solutions.",
    audienceLine:
      "For small to large teams building systems to acelerate business objectives. On demand help to design, build, and ship whatever is in the way of your goals.",
  },
  testimonials: [
    {
      quote:
        "Jake Robins is the kind of technology leader who can help organizations bridge the gap between ambition and execution. He understands how businesses operate, where technology can create leverage, and how to turn complex problems into clear, actionable solutions.",
      personName: "Chris Sallans",
      personTitle: "Vice President, Retail Operaations",
      organization: "Best Buy Canada",
      logoSrc: null,
      logoAlt: "Best Buy Canada",
      tone: "paper" as TestimonialTone,
    },
    {
      quote:
        "Jake's dedication to the quality of his work and the craft of building software exceptional. He's a clear communicator and key collaborator. Even at a part-time capacity, he makes a full-time impact.",
      personName: "Brett Chalupa",
      personTitle: "Engineering Lead",
      organization: "Baymard Institute",
      logoSrc: null,
      logoAlt: "Baymard Institute",
      tone: "deep" as TestimonialTone,
    },
    {
      quote:
        "Placeholder testimonial about technical leadership when we did not have bandwidth for a full-time hire — clear direction and working software.",
      personName: "First name Last name",
      personTitle: "Title, Department",
      organization: "Organization C",
      logoSrc: null,
      logoAlt: "Organization C",
      tone: "warm" as TestimonialTone,
    },
  ] satisfies Testimonial[],
  valueProps: [
    {
      title: "Business + engineering",
      body: "Rare among freelance developers. Can talk to stakeholders and still ship.",
      tone: "claret" as ServiceCardTone,
    },
    {
      title: "Web products at scale",
      body: "Strong at websites and web systems that are more than a single marketing URL.",
      tone: "paper" as ServiceCardTone,
    },
    {
      title: "Speed with AI in the workflow",
      body: "AI throughout how I work, so prototypes and final implementation move faster.",
      tone: "deep" as ServiceCardTone,
    },
    {
      title: "AI-powered products",
      body: "Experience implementing AI in products — not only using ChatGPT as a coding assistant.",
      tone: "warm" as ServiceCardTone,
    },
    {
      title: "Automation",
      body: "Workflows and products that cut manual work and save time.",
      tone: "paper" as ServiceCardTone,
    },
    {
      title: "Fractional CTO",
      body: "Product ownership and technical direction when a full-time CTO is not in the budget.",
      tone: "deep" as ServiceCardTone,
    },
    {
      title: "End-to-end",
      body: "From understanding the business problem through delivery — broad enough for most technology problems.",
      tone: "warm" as ServiceCardTone,
    },
  ],
  expertise: {
    paragraphs: [
      "Six years building software, plus twelve years in retail operations and business management. That combination means I can own product — priorities, tradeoffs, and implementation — not only tickets.",
      "Most freelance developers optimize for craft. I optimize for outcomes: systems that work together, teams that stay unblocked, and products that ship.",
    ],
    tags: [
      "Web products",
      "Product ownership",
      "Systems",
      "Technical leadership",
      "Automation",
      "AI",
    ],
    bullets: [
      "Prototype to production on modern web stacks",
      "Cross-functional communication with non-technical stakeholders",
      "Architecture and tradeoffs for multi-component products",
      "Fractional CTO and product direction without full-time overhead",
    ],
  },
  ai: {
    bandText:
      "AI as leverage — faster delivery and smarter products, not a buzzword strip.",
    paragraphs: [
      "AI is part of how I work every day: faster exploration, tighter feedback loops, and less time on boilerplate. Clients get more iteration in the same budget.",
      "I also implement AI in the product itself — when the use case benefits from models, agents, or automation in what gets built, not bolted on as marketing copy.",
    ],
  },
  contact: {
    heading: "Start a conversation",
    body: "Email is the fastest path. Tell me what you are building and where you are stuck — no forms, no scheduling widget.",
  },
};
