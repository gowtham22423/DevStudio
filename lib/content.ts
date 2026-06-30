// Central content for DevStudio.
// Voice: confident studio "we". No AI cliche verbs (elevate, seamless, unleash, next-gen).
// Hard rule: ZERO em-dashes or en-dashes anywhere. Hyphen, comma, period, colon, parentheses only.
// NOTE: client names, testimonials, team members beyond the founder, and metrics are
// realistic placeholders. Swap in real names, quotes, and figures before going live.

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export type Service = {
  slug: string;
  num: string;
  name: string;
  short: string;
  badge: string;
  icon: string; // Phosphor icon key (see components/Icon.tsx)
  lede: string;
  outcome: string;
  features: { title: string; desc: string }[];
  formHeading: string;
  formLabel: string;
  formButton: string;
};

export const services: Service[] = [
  {
    slug: "website-design",
    num: "01",
    name: "Website Design",
    short:
      "Brand-led interface design shaped around how your customers actually decide, so the site earns trust on the first screen.",
    badge: "UI/UX Design",
    icon: "PenNib",
    lede: "We design interfaces around real customer behaviour, not decoration. Every screen is built to hold attention, build trust, and move people toward one clear action.",
    outcome: "A site that looks considered and converts like it.",
    features: [
      { title: "Brand-led visual system", desc: "Type, colour, and layout tuned to your brand instead of a template." },
      { title: "Designed in the browser", desc: "High-fidelity screens you can click through before a line of build." },
      { title: "Responsive by default", desc: "Laid out for phone, tablet, and desktop as separate compositions." },
      { title: "Conversion-first flows", desc: "Calls to action placed where decisions actually happen." },
    ],
    formHeading: "Start a design project",
    formLabel: "What are you building, and who is it for?",
    formButton: "Send project brief",
  },
  {
    slug: "website-development",
    num: "02",
    name: "Website Development",
    short:
      "Fast, accessible, well-structured builds on a modern stack that your team can extend without fighting the codebase.",
    badge: "Engineering",
    icon: "Code",
    lede: "We engineer sites that load fast, rank well, and stay easy to maintain. Clean code on a current stack, with performance and accessibility built in from the first commit.",
    outcome: "A codebase that is quick today and easy to grow tomorrow.",
    features: [
      { title: "Modern stack", desc: "React and Next.js builds with sensible, documented structure." },
      { title: "Performance budgets", desc: "Lean bundles and optimised media for near-instant loads." },
      { title: "Accessible markup", desc: "Semantic, screen-reader-friendly HTML that search engines reward." },
      { title: "Secure by default", desc: "Hardened patterns and validated inputs, not afterthoughts." },
    ],
    formHeading: "Start a build",
    formLabel: "What features or integrations does this need?",
    formButton: "Send project brief",
  },
  {
    slug: "landing-pages",
    num: "03",
    name: "Landing Pages",
    short:
      "Single-purpose campaign pages built to load fast and convert paid traffic, with the structure to test and improve.",
    badge: "Conversion",
    icon: "Target",
    lede: "We build campaign pages with one job: turn paid clicks into action. Sharp messaging, fast loads, and a structure you can keep testing.",
    outcome: "More of your ad spend turning into qualified leads.",
    features: [
      { title: "Built to test", desc: "Variant-ready structure so you can run A/B tests from day one." },
      { title: "Fast loads", desc: "Lightweight pages that protect your ad quality scores." },
      { title: "Tracking wired in", desc: "Events and pixels configured for precise attribution." },
      { title: "Frictionless capture", desc: "Short forms with instant follow-up flows." },
    ],
    formHeading: "Start a landing page",
    formLabel: "What is the campaign and the offer?",
    formButton: "Send project brief",
  },
  {
    slug: "ecommerce-stores",
    num: "04",
    name: "E-Commerce Stores",
    short:
      "Secure storefronts with a checkout designed to remove hesitation, from first product view to confirmed order.",
    badge: "E-Commerce",
    icon: "ShoppingBag",
    lede: "We build stores where the path from product to payment is short and reassuring. Every step of checkout is designed to reduce drop-off.",
    outcome: "Fewer abandoned carts and a higher average order value.",
    features: [
      { title: "Trusted payments", desc: "Stripe and other proven gateways with a smooth checkout." },
      { title: "Catalogue control", desc: "Product, variant, and stock management your team can run." },
      { title: "Considered cart", desc: "A dynamic cart that keeps buyers moving toward purchase." },
      { title: "Order automation", desc: "Receipts, invoices, and confirmations handled for you." },
    ],
    formHeading: "Start a store",
    formLabel: "How many products, and which integrations?",
    formButton: "Send project brief",
  },
  {
    slug: "website-redesign",
    num: "05",
    name: "Website Redesign",
    short:
      "A measured rebuild of a slow or dated site that keeps what works, fixes what leaks, and protects your search rankings.",
    badge: "Redesign",
    icon: "ArrowsClockwise",
    lede: "We rebuild dated sites without throwing away the equity you have. We audit what loses visitors, then rebuild around speed, clarity, and conversion.",
    outcome: "A modern site that keeps your traffic and converts more of it.",
    features: [
      { title: "Speed recovery", desc: "Performance work that cuts load times and bounce." },
      { title: "Fluid layouts", desc: "Full responsive rework across every screen size." },
      { title: "Drop-off audit", desc: "We find the friction points losing you leads and fix them." },
      { title: "SEO continuity", desc: "Rankings preserved through careful redirects and metadata." },
    ],
    formHeading: "Start a redesign",
    formLabel: "What is the current site URL, and what hurts?",
    formButton: "Send project brief",
  },
  {
    slug: "website-maintenance",
    num: "06",
    name: "Website Care",
    short:
      "Ongoing care that keeps your site fast, secure, and current, so a small issue never becomes an outage.",
    badge: "Support",
    icon: "ShieldCheck",
    lede: "We keep live sites healthy with scheduled backups, security monitoring, and quick content updates, so you can focus on the business.",
    outcome: "A site that stays fast and safe without you watching it.",
    features: [
      { title: "Scheduled backups", desc: "Automated, secure backups so you never lose work." },
      { title: "Security monitoring", desc: "Continuous scanning and patching against threats." },
      { title: "Priority updates", desc: "Quick turnaround on content and layout changes." },
      { title: "Health checks", desc: "Regular performance and uptime reviews." },
    ],
    formHeading: "Start a care plan",
    formLabel: "What platform are you on, and how often do you update?",
    formButton: "Send project brief",
  },
];

// ---------------------------------------------------------------------------
// Selected work / case studies
// Metrics are illustrative placeholders. Replace with real figures before launch.
// ---------------------------------------------------------------------------
export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
  problem: string;
  result: string;
  metric: string;
  metricLabel: string;
  services: string[];
  tech: string[];
  monogram: string;
  image?: string;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "lumen-apparel",
    title: "Lumen Apparel",
    client: "Lumen Apparel",
    industry: "Retail / E-commerce",
    year: "2025",
    summary:
      "A storefront and checkout rebuild for a growing apparel label, focused on speed and a calmer path to purchase.",
    problem: "Checkout was slow and dropping buyers on mobile.",
    result: "Rebuilt the catalogue and a three-step checkout on Next.js and Stripe. Mobile conversion climbed within the first quarter.",
    metric: "+38%",
    metricLabel: "online revenue, first 90 days",
    services: ["E-commerce", "Engineering"],
    tech: ["Next.js", "Stripe", "Sanity"],
    monogram: "LA",
    image: "/work-ecommerce.png",
    href: "/services/ecommerce-stores",
  },
  {
    slug: "northwind-realty",
    title: "Northwind Realty",
    client: "Northwind Realty",
    industry: "Real estate",
    year: "2025",
    summary:
      "A listings platform with map search and instant viewing requests for a regional property firm.",
    problem: "A heavy old site buried listings and loaded slowly.",
    result: "Rebuilt around map search, fast listing pages, and scheduling. Median load time dropped to well under a second.",
    metric: "0.6s",
    metricLabel: "median load, down from 2.4s",
    services: ["Engineering", "SEO"],
    tech: ["Next.js", "Mapbox", "Postgres"],
    monogram: "NW",
    image: "/work-realestate.png",
    href: "/services/website-development",
  },
  {
    slug: "pulse-athletic",
    title: "Pulse Athletic",
    client: "Pulse Athletic",
    industry: "Fitness",
    year: "2024",
    summary:
      "A campaign landing page built to convert paid social traffic into gym memberships and class bookings.",
    problem: "Ad clicks were arriving but few were signing up.",
    result: "A single, fast landing page with a short signup flow and clear pricing turned more of the same ad spend into members.",
    metric: "+31%",
    metricLabel: "membership signups",
    services: ["Landing page", "Design"],
    tech: ["Next.js", "Tailwind", "GA4"],
    monogram: "PA",
    image: "/work-fitness.png",
    href: "/services/landing-pages",
  },
  {
    slug: "meridian-analytics",
    title: "Meridian Analytics",
    client: "Meridian Analytics",
    industry: "SaaS",
    year: "2025",
    summary:
      "Product UI for an analytics dashboard, covering charts, role-based access, and a clearer first-run experience.",
    problem: "New users struggled to reach value in the trial.",
    result: "Reworked onboarding and the core dashboard so the first session showed real data fast. Trial activation rose.",
    metric: "+27%",
    metricLabel: "trial activation",
    services: ["Product UI", "Engineering"],
    tech: ["React", "Recharts", "TypeScript"],
    monogram: "MA",
    image: "/work-saas.png",
    href: "/services/website-development",
  },
  {
    slug: "clearwater-dental",
    title: "Clearwater Dental",
    client: "Clearwater Dental",
    industry: "Healthcare",
    year: "2024",
    summary:
      "A local-first site for a dental practice, built to rank in its area and turn visits into booked appointments.",
    problem: "The practice was hard to find and harder to book.",
    result: "A fast, local-SEO site with clear services and one-tap booking lifted inbound enquiries through the year.",
    metric: "3.2x",
    metricLabel: "inbound enquiries",
    services: ["Redesign", "Local SEO"],
    tech: ["Astro", "Tailwind", "Schema"],
    monogram: "CW",
    image: "/work-localbiz.png",
    href: "/services/website-redesign",
  },
  {
    slug: "tindle-coffee",
    title: "Tindle Coffee Roasters",
    client: "Tindle Coffee Roasters",
    industry: "Hospitality",
    year: "2025",
    summary:
      "A site and online ordering flow for a specialty roaster, with a subscription option for regulars.",
    problem: "Orders lived in DMs and a clunky third-party form.",
    result: "A clean ordering flow with subscriptions brought repeat buyers back on their own, without the manual back and forth.",
    metric: "+44%",
    metricLabel: "online orders",
    services: ["Design", "E-commerce"],
    tech: ["Next.js", "Stripe", "Shopify"],
    monogram: "TC",
    image: "/restaurant_mockup.png",
    href: "/services/website-design",
  },
];

// Client marks for the trust strip (rendered as monograms, not plain wordmarks).
export const clients = [
  { name: "Lumen Apparel", monogram: "LA" },
  { name: "Northwind Realty", monogram: "NW" },
  { name: "Pulse Athletic", monogram: "PA" },
  { name: "Meridian Analytics", monogram: "MA" },
  { name: "Clearwater Dental", monogram: "CW" },
  { name: "Tindle Coffee", monogram: "TC" },
  { name: "Atlas Freight", monogram: "AF" },
  { name: "Verde Studio", monogram: "VS" },
];

// ---------------------------------------------------------------------------
// Why us / differentiators (Phosphor icon keys, no emoji)
// ---------------------------------------------------------------------------
export const whyPoints = [
  { icon: "Compass", title: "Strategy before pixels", desc: "We start with your goal and your customer, then design toward a decision, not a mood board." },
  { icon: "Gauge", title: "Speed is a feature", desc: "Lean builds and tight performance budgets keep your site fast and your bounce rate low." },
  { icon: "MagnifyingGlass", title: "Built to be found", desc: "Semantic markup, clean structure, and metadata that helps you rank, not just look good." },
  { icon: "Handshake", title: "We stay after launch", desc: "Clear timelines, direct communication, and support that does not vanish on go-live day." },
];

// ---------------------------------------------------------------------------
// Methodology: "The Blueprint"
// ---------------------------------------------------------------------------
export const methodology = {
  name: "The Blueprint",
  tagline: "How we work",
  intro:
    "Every project runs on the same six-phase method we call The Blueprint. It keeps the work predictable, the timeline honest, and you in the loop at every step.",
};

export type Phase = { num: string; name: string; desc: string; detail: string };

export const processPhases: Phase[] = [
  { num: "01", name: "Discovery", desc: "Goals, audience, scope", detail: "We map the business, the audience, and the one outcome that matters most. You leave the first call with a clear scope, timeline, and definition of done." },
  { num: "02", name: "Strategy", desc: "Sitemap and plan", detail: "We turn goals into a sitemap, a content plan, and a technical approach that fits your budget. No surprises later, because the plan is agreed up front." },
  { num: "03", name: "Design", desc: "Interface and brand", detail: "We design in high fidelity and, where it helps, in the browser. We refine type, colour, and layout until the site feels unmistakably yours." },
  { num: "04", name: "Build", desc: "Clean, fast code", detail: "We engineer on a modern stack with performance and accessibility built in. The code is structured and documented so your team can grow it." },
  { num: "05", name: "Launch", desc: "Test and ship", detail: "We test across devices and browsers, set performance budgets, wire up analytics and SEO, and ship with a calm, checked launch." },
  { num: "06", name: "Partnership", desc: "Measure and improve", detail: "After launch we stay on to monitor, maintain, and improve. We watch the numbers and keep the site moving in the right direction." },
];

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------
export type Plan = {
  name: string;
  desc: string;
  price: string;
  period: string;
  cta: string;
  featured?: boolean;
  includes: string[];
  excludes: string[];
  note?: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    desc: "For a focused single-page presence or a sharp campaign page.",
    price: "7,999",
    period: "from, per project",
    cta: "Start a project",
    includes: ["One-page conversion layout", "Fully responsive design", "Core SEO setup", "One secure contact form", "30 days of post-launch support"],
    excludes: ["E-commerce checkout", "Advanced analytics", "Dynamic database features"],
  },
  {
    name: "Growth",
    desc: "For service brands and small teams that need room to grow.",
    price: "14,999",
    period: "from, per project",
    cta: "Start a project",
    featured: true,
    includes: ["Up to five responsive pages", "Custom interface design", "Keyword-led SEO setup", "Three interactive lead forms", "Considered micro-interactions", "60 days of priority support"],
    excludes: ["E-commerce checkout", "Custom APIs and databases"],
  },
  {
    name: "Studio",
    desc: "For e-commerce, custom apps, and product portals.",
    price: "24,999",
    period: "from, per project",
    cta: "Talk to us",
    includes: ["Unlimited dynamic pages", "Full e-commerce and Stripe", "Custom API and database work", "CMS setup your team can run", "One year of care included"],
    excludes: [],
    note: "Everything in Growth, with no limits.",
  },
];

// ---------------------------------------------------------------------------
// Testimonials (realistic placeholders; quotes kept short)
// ---------------------------------------------------------------------------
export const testimonials = [
  { quote: "They rebuilt our store and the checkout finally feels effortless. Revenue was up inside the first quarter and the handover was clean.", name: "Priya Raghavan", role: "Founder, Lumen Apparel", initials: "PR" },
  { quote: "Our listings load instantly now and viewing requests come straight through. The whole rebuild stayed on schedule.", name: "Marcus Hale", role: "Head of Growth, Northwind Realty", initials: "MH" },
  { quote: "The landing page did one job and did it well. Same ad budget, noticeably more signups, and we can keep testing it ourselves.", name: "Elena Vasquez", role: "Director, Pulse Athletic", initials: "EV" },
  { quote: "Onboarding used to lose people. After the redesign, new users reach real data in their first session. Activation jumped.", name: "Sandeep Iyer", role: "COO, Meridian Analytics", initials: "SI" },
];

// Organic, specific stats. Illustrative placeholders; replace with real numbers.
export const stats = [
  { value: "47", label: "Projects shipped" },
  { value: "9", label: "Industries served" },
  { value: "38%", label: "Avg. lift in conversion" },
  { value: "4.9", label: "Avg. client rating" },
];

// ---------------------------------------------------------------------------
// About: studio + team
// ---------------------------------------------------------------------------
export const studioStory = {
  lede: "DevStudio is a small web design and engineering studio. We help ambitious brands launch sites that are fast, clear, and built to convert.",
  body: [
    "We started DevStudio because too many businesses were paying for websites that looked fine and did nothing. Pretty, slow, and quietly losing customers.",
    "So we work differently. We treat design and engineering as one job, run every project on a method we trust, and measure the result against your goal, not our taste.",
    "We keep the team small on purpose. You work with the people doing the work, from the first call to launch and beyond.",
  ],
};

// Founder is real. Other team members are placeholders: replace with your real team.
export const team = [
  { name: "Vignesh Sai", role: "Founder, Lead Engineer", bio: "Designs and builds the hard parts. Eight years across product, web, and front-end engineering.", initials: "VS" },
  { name: "Aarav Nair", role: "Design Lead", bio: "Turns goals into interfaces that feel calm and convert. Brand, layout, and interaction.", initials: "AN" },
  { name: "Meera Krishnan", role: "Front-end Engineer", bio: "Ships fast, accessible builds. Cares about the details most people never notice.", initials: "MK" },
  { name: "Rohan DeSouza", role: "Strategy and Client Lead", bio: "Keeps projects honest: scope, timelines, and the numbers that actually matter.", initials: "RD" },
];

export const values = [
  { title: "Clarity over clutter", desc: "Every element earns its place. We cut anything that does not move a visitor toward action." },
  { title: "Performance is respect", desc: "A fast site respects your visitors and your rankings. We build lean and keep it that way." },
  { title: "Designed to convert", desc: "Good-looking is the baseline. We design around turning visitors into customers." },
  { title: "Honest partnership", desc: "Clear timelines, plain language, and support that holds up long after launch." },
];

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------
export const faqs = [
  { q: "How long does a website take to build?", a: "A landing page usually takes one to two weeks. A full multi-page site or custom store runs three to six weeks, depending on complexity. We agree a milestone timeline during discovery so you always know what is next." },
  { q: "Do you provide hosting?", a: "We help you pick fast, secure hosting (Vercel, Netlify, AWS, or similar) and handle setup, domains, and migration so launch is smooth. You keep ownership of every account." },
  { q: "Will my website work well on mobile?", a: "Yes. We design and build mobile-first, then test across iOS, Android, and tablets so the experience holds up on every screen." },
  { q: "Do you offer ongoing support?", a: "Yes. Our care plans cover security monitoring, backups, updates, and priority changes. Most clients stay on a plan after launch." },
  { q: "Can you redesign an existing website?", a: "Yes. We audit where the current site loses visitors, then rebuild around speed and conversion while protecting your search rankings with careful redirects." },
];

export const pricingFaqs = [
  { q: "Are there hidden fees?", a: "No. The figure you agree is the figure you pay. Optional add-ons like extra pages, hosting setup, or integrations are quoted clearly before we start." },
  { q: "What does the price cover?", a: "Each plan is a project fee for the build. Ongoing care is available separately if you want us to keep the site healthy after launch." },
  { q: "Can I upgrade later?", a: "Yes. Many clients start with a focused build and add pages, e-commerce, or custom features as the business grows." },
  { q: "What if my project does not fit a plan?", a: "Tell us what you need and we will put together a tailored quote based on the real scope, not a guess." },
];

// ---------------------------------------------------------------------------
// Navigation + contact
// ---------------------------------------------------------------------------
export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

// Single primary contact CTA label, used everywhere on the site.
export const CTA_LABEL = "Start a project";

export const contact = {
  email: "hello@devstudio.dev",
  phone: "+91 90000 00000", // placeholder: replace with a real number
  location: "Bengaluru, India. Working worldwide.",
  socials: [
    { label: "GitHub", href: "https://github.com/vigneshsai890" },
    { label: "LinkedIn", href: "#" }, // replace with real profile
    { label: "X", href: "#" }, // replace with real profile
    { label: "Instagram", href: "#" }, // replace with real profile
  ],
};
