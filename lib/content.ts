// Central content for DevStudio — all copy preserved from the original site.

export type Service = {
  slug: string;
  num: string;
  name: string;
  short: string;
  badge: string;
  lede: string;
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
      "Custom modern UI/UX designs crafted specifically for your target audience and tailored to achieve your unique business goals.",
    badge: "UI/UX Design",
    lede: "I build custom, visually striking interfaces focused entirely on user behavior and brand authority. By combining modern aesthetics with intuitive usability principles, your site will stand out and command trust from the very first visit.",
    features: [
      { title: "Custom Brand Aesthetics", desc: "Tailored styles, palettes, and typography matching your business theme." },
      { title: "High-Fidelity Wireframes", desc: "Visual architecture mapping interactions prior to development." },
      { title: "Mobile-Responsive Layouts", desc: "Stunning layouts optimized across mobile, tablet, and desktop screens." },
      { title: "Conversion-First Funnels", desc: "Placement optimization for CTA buttons to increase leads." },
    ],
    formHeading: "Request Website Design",
    formLabel: "Design Guidelines / Inspiration *",
    formButton: "Get Design Quote",
  },
  {
    slug: "website-development",
    num: "02",
    name: "Website Development",
    short:
      "Fast-loading, clean-coded, fully responsive, and highly scalable websites built using the latest web standards.",
    badge: "Development",
    lede: "I engineer fast, secure, and scalable websites with clean, maintainable code. Built on modern frameworks and best practices, your site will load instantly and grow effortlessly with your business.",
    features: [
      { title: "Modern Tech Stacks", desc: "React, Next.js, and other current frameworks for robust builds." },
      { title: "Optimized Page Loading", desc: "Lean bundles and image optimization for near-instant loads." },
      { title: "SEO Semantic Syntax", desc: "Accessible, semantic markup that search engines reward." },
      { title: "Secure Codebases", desc: "Hardened against common vulnerabilities with safe patterns." },
    ],
    formHeading: "Request Development",
    formLabel: "Project Features / Integrations *",
    formButton: "Get Development Quote",
  },
  {
    slug: "landing-pages",
    num: "03",
    name: "Landing Pages",
    short:
      "High-converting single-page campaigns built with crisp messaging, modern structures, and optimal performance for paid ads.",
    badge: "Lead Generation",
    lede: "I craft high-converting landing pages engineered for paid campaigns. Every section is structured to capture attention, build trust, and drive a single decisive action.",
    features: [
      { title: "A/B Test Ready Structures", desc: "Built to experiment with variants and maximize conversions." },
      { title: "Fast Load Speeds", desc: "Lightweight pages that keep ad quality scores high." },
      { title: "Analytics Integrations", desc: "Pixels and events wired in for precise tracking." },
      { title: "Clean Forms & Autoresponders", desc: "Frictionless capture with instant follow-up flows." },
    ],
    formHeading: "Request Landing Page",
    formLabel: "Campaign Goal / Product Details *",
    formButton: "Get Landing Page Quote",
  },
  {
    slug: "ecommerce-stores",
    num: "04",
    name: "E-Commerce Stores",
    short:
      "Fully secure online stores featuring smooth payment gateway integrations, seamless checkout funnels, and easy product managers.",
    badge: "E-Commerce",
    lede: "I build secure, conversion-focused online stores with seamless checkout experiences. From catalog to payment, every step is optimized to turn browsers into buyers.",
    features: [
      { title: "Secure Payment Gateways", desc: "Stripe and other trusted integrations with smooth checkout." },
      { title: "Inventory Management", desc: "Easy product managers for stock, variants, and pricing." },
      { title: "Interactive Cart Systems", desc: "Dynamic carts with a frictionless purchase flow." },
      { title: "Invoice & PDF Generators", desc: "Automated receipts and order documentation." },
    ],
    formHeading: "Request E-Commerce Store",
    formLabel: "Number of Products / Integrations *",
    formButton: "Get Store Quote",
  },
  {
    slug: "website-redesign",
    num: "05",
    name: "Website Redesign",
    short:
      "Transform your outdated, slow, or low-performing website into a premium, modern experience that captures attention and retains clients.",
    badge: "Redesign",
    lede: "I transform outdated, slow websites into premium modern experiences. By auditing performance and bounce points, I rebuild your site to capture attention and retain clients.",
    features: [
      { title: "Speed Boost Implementations", desc: "Performance overhauls that cut load times dramatically." },
      { title: "Responsive Modernization", desc: "Fully fluid layouts across every device size." },
      { title: "Bounce Rate Audits", desc: "Identify and fix the friction points losing you leads." },
      { title: "SEO Metadata Retention", desc: "Preserve rankings while upgrading the experience." },
    ],
    formHeading: "Request Website Redesign",
    formLabel: "Existing Website URL / Painpoints *",
    formButton: "Get Redesign Quote",
  },
  {
    slug: "website-maintenance",
    num: "06",
    name: "Website Maintenance",
    short:
      "Rest easy with regular updates, scheduled secure database backups, malware scans, performance checks, and ongoing support.",
    badge: "Support",
    lede: "I keep your website secure, fast, and up to date with ongoing maintenance. From backups to malware scans and content updates, your site stays healthy while you focus on business.",
    features: [
      { title: "Automated Database Backups", desc: "Scheduled secure backups so you never lose data." },
      { title: "Malware Scans & Security Monitoring", desc: "Continuous protection against threats." },
      { title: "Priority Content Updates", desc: "Quick turnaround on layout and content changes." },
      { title: "Speed & Server Checks", desc: "Regular performance audits to keep things fast." },
    ],
    formHeading: "Request Maintenance",
    formLabel: "Current Platform / Update Frequency *",
    formButton: "Get Maintenance Quote",
  },
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  tech: string[];
  gradient: string;
  monogram: string;
  scope: string;
  year: string;
  highlights: string[];
  href: string;
  image?: string; // drop a /public path here later to replace the gradient placeholder
};

export const projects: Project[] = [
  {
    title: "Restaurant Website",
    category: "Restaurant",
    summary: "A clean culinary showcase featuring an interactive reservation engine, digital menu manager, and social integrations.",
    tech: ["React", "CSS Grid", "GSAP"],
    gradient: "linear-gradient(135deg, #7a40ed 0%, #29a9ff 100%)",
    monogram: "RW",
    scope: "Design & Development",
    year: "2025",
    highlights: ["Interactive reservation engine", "Digital menu manager", "Social media integrations"],
    href: "/services/website-design",
  },
  {
    title: "Real Estate Website",
    category: "Real Estate",
    summary: "Searchable directory with interactive map search, real-time consultation scheduling, and high-quality photography carousel layout.",
    tech: ["NextJS", "Mapbox", "Flexbox"],
    gradient: "linear-gradient(135deg, #29a9ff 0%, #7a40ed 100%)",
    monogram: "RE",
    scope: "Development & SEO",
    year: "2025",
    highlights: ["Interactive map search", "Real-time scheduling", "Photography carousel"],
    href: "/services/website-development",
  },
  {
    title: "Fitness Landing Page",
    category: "Wellness",
    summary: "High-performance landing page geared to maximize gym membership signups, class bookings, and premium coaching programs.",
    tech: ["HTML5", "Vanilla CSS", "AOS"],
    gradient: "linear-gradient(135deg, #fd3456 0%, #7a40ed 100%)",
    monogram: "PF",
    scope: "Landing Page",
    year: "2024",
    highlights: ["Membership signup funnel", "Class booking flow", "Coaching program upsell"],
    href: "/services/landing-pages",
  },
  {
    title: "Ecommerce Store",
    category: "Retail",
    summary: "Fast storefront featuring responsive product catalog, dynamic cart interface, Stripe checkout integration, and invoice generation.",
    tech: ["React", "Stripe SDK", "Redux"],
    gradient: "linear-gradient(135deg, #7a40ed 0%, #fd3456 100%)",
    monogram: "LW",
    scope: "E-Commerce Build",
    year: "2025",
    highlights: ["Stripe checkout", "Dynamic cart", "Invoice generation"],
    href: "/services/ecommerce-stores",
  },
  {
    title: "SaaS Dashboard",
    category: "SaaS",
    summary: "A complex analytical board with interactive charts, user permissions settings, drag-and-drop report layout, and dark mode.",
    tech: ["VueJS", "ChartJS", "Tailwind"],
    gradient: "linear-gradient(135deg, #19171c 0%, #7a40ed 100%)",
    monogram: "SD",
    scope: "Product UI/UX",
    year: "2025",
    highlights: ["Interactive charts", "Role-based permissions", "Drag-and-drop reports"],
    href: "/services/website-development",
  },
  {
    title: "Local Business Website",
    category: "Healthcare",
    summary: "Fully optimized local search platform highlighting services, interactive team profiles, client reviews, and direct email lead captures.",
    tech: ["WordPress", "Elementor", "Yoast SEO"],
    gradient: "linear-gradient(135deg, #29a9ff 0%, #fd3456 100%)",
    monogram: "AD",
    scope: "Redesign & Local SEO",
    year: "2024",
    highlights: ["Local SEO optimization", "Team profiles", "Lead capture forms"],
    href: "/services/website-redesign",
  },
];

export const whyPoints = [
  { icon: "✦", title: "Modern Design", desc: "Beautiful, clutter-free layouts built to reflect authority and command customer trust." },
  { icon: "⚡", title: "Fast Performance", desc: "Websites optimized for speed. Low page-load sizes that reduce bounce rates instantly." },
  { icon: "◎", title: "SEO Friendly", desc: "Pre-configured schema metrics, meta codes, and semantic builds to rank higher in search engines." },
  { icon: "♡", title: "Reliable Support", desc: "Continuous support and quick response assistance post-launch. Always just an email away." },
];

export const processSteps = [
  { num: "01", title: "Discovery Call", desc: "Aligning on goals & scope" },
  { num: "02", title: "Planning", desc: "Creating site-map & strategy" },
  { num: "03", title: "Design", desc: "UI prototypes & branding" },
  { num: "04", title: "Development", desc: "Writing high-quality code" },
  { num: "05", title: "Testing", desc: "Optimizing speed & response" },
  { num: "06", title: "Launch", desc: "Deploying to live servers" },
  { num: "07", title: "Support", desc: "Maintenance & performance" },
];

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
    desc: "Perfect for small businesses or simple personal portfolios.",
    price: "7,999",
    period: "/one-time",
    cta: "Get Started",
    includes: ["1-Page Conversion Layout", "Fully Responsive UI Design", "Basic SEO Configuration", "1 Secure Contact Form", "30 Days Post-Launch Support"],
    excludes: ["E-Commerce Cart Integration", "Advanced Analytical Pixels", "Dynamic database features"],
  },
  {
    name: "Growth",
    desc: "Ideal for professional service brands and small agencies.",
    price: "14,999",
    period: "/one-time",
    cta: "Order Now",
    featured: true,
    includes: ["Up to 5 Responsive Pages", "Premium Custom UI Design", "Advanced SEO Keyword Setup", "3 Interactive Lead Forms", "Micro-Animations & Interaction", "60 Days Priority Support"],
    excludes: ["E-Commerce Cart / Checkout", "Custom APIs & Databases"],
  },
  {
    name: "Enterprise",
    desc: "Best for e-commerce, custom apps & SaaS portals.",
    price: "24,999",
    period: "/one-time",
    cta: "Get Custom Quote",
    includes: ["Unlimited Dynamic Pages", "Full E-Commerce Cart & Stripe", "Custom API/Database Portal", "Advanced CMS Setup (WordPress/Payload)", "1-Year Premium Maintenance"],
    excludes: [],
    note: "Includes everything (No exclusions).",
  },
];

export const testimonials = [
  { quote: "The landing page developed for Pulse Fitness exceeded all our conversion goals. We saw a 35% increase in membership registrations in the first month alone. Extremely professional and responsive workflow throughout!", name: "John Doe", role: "Founder, Pulse Fitness", initials: "JD" },
  { quote: "Redesigning our local real estate listings portal was a daunting task. DevStudio simplified the whole sitemap layout, optimized listing load speed to near-instant, and integrated scheduling smoothly.", name: "Sarah Smith", role: "CEO, Apex Properties", initials: "SS" },
  { quote: "Our online boutique sales doubled right after migration to the custom e-commerce solution. The Stripe payment integration works flawlessly and checkouts are extremely fast.", name: "Emily Lee", role: "Director, Luxe Wardrobe", initials: "EL" },
];

export const stats = [
  { target: 50, suffix: "+", label: "Projects Completed" },
  { target: 20, suffix: "+", label: "Happy Clients" },
  { target: 99, suffix: "%", label: "Satisfaction Rate" },
];

export const faqs = [
  { q: "How long does a website take to build?", a: "Typically, a landing page takes about 1-2 weeks, while a full multipage website or custom e-commerce portal ranges between 3-6 weeks depending on integration complexity. We establish a clear milestone timeline during discovery." },
  { q: "Do you provide hosting?", a: "I guide you in picking optimal, highly secure hosting plans (Netlify, Vercel, Hostinger, AWS). I can handle setup configuration, custom nameservers, and cloud migration for a seamless launch." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. Every project is built mobile-first. I perform rigorous device test cycles across iOS, Android, and tablets to guarantee visual and functional responsiveness." },
  { q: "Do you offer maintenance services?", a: "Yes, I offer ongoing maintenance agreements covering security checks, automated updates, database cloud backups, layout changes, and priority support." },
  { q: "Can you redesign an existing website?", a: "Yes. I analyze your existing traffic bounce markers, identify slow page bottlenecks, and upgrade files to premium styling structures to improve lead retention." },
];

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const contact = {
  email: "hello@yourdomain.com",
  phone: "+91 XXXXX XXXXX",
  location: "India",
};

// Expanded process detail for the dedicated /process page
export const processDetail = [
  { num: "01", title: "Discovery Call", desc: "Aligning on goals & scope", detail: "We start with a focused conversation about your business, target audience, and goals. I map out scope, timelines, and success metrics so we're aligned before any work begins." },
  { num: "02", title: "Planning", desc: "Creating site-map & strategy", detail: "I translate goals into a clear site-map, content strategy, and technical plan — defining pages, user flows, and the stack that fits your needs and budget." },
  { num: "03", title: "Design", desc: "UI prototypes & branding", detail: "High-fidelity prototypes bring the vision to life. We refine typography, color, and layout until the design feels unmistakably yours and converts visitors." },
  { num: "04", title: "Development", desc: "Writing high-quality code", detail: "Clean, modern, well-structured code built on current best practices — fast, accessible, responsive, and easy to maintain as you grow." },
  { num: "05", title: "Testing", desc: "Optimizing speed & response", detail: "Rigorous cross-device and cross-browser testing, performance tuning, and accessibility checks to guarantee a flawless experience everywhere." },
  { num: "06", title: "Launch", desc: "Deploying to live servers", detail: "Smooth deployment with proper DNS, SSL, analytics, and SEO configuration — plus a final walkthrough so you're confident on day one." },
  { num: "07", title: "Support", desc: "Maintenance & performance", detail: "Post-launch I stay on hand for updates, monitoring, and improvements — keeping your site secure, fast, and evolving with your business." },
];

// Pricing-specific FAQs for the /pricing page
export const pricingFaqs = [
  { q: "Are there any hidden fees?", a: "No. The price you see is the price you pay. Any optional add-ons (hosting setup, extra pages, integrations) are quoted transparently before we start." },
  { q: "What does “one-time” mean?", a: "Each package is a one-time project fee for the build. Optional ongoing maintenance is available separately if you'd like continued support." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. We can start with a Starter build and expand into more pages, e-commerce, or custom features as your business grows." },
  { q: "Do you offer custom quotes?", a: "Yes — if your project doesn't fit neatly into a plan, reach out and I'll put together a tailored quote based on your exact requirements." },
];

// Brand values for the /about page
export const values = [
  { title: "Clarity over clutter", desc: "Every element earns its place. Clean, intentional design that guides visitors to action." },
  { title: "Performance first", desc: "Speed is a feature. I build lean, fast sites that respect your visitors and your rankings." },
  { title: "Built to convert", desc: "Beautiful is the baseline. Everything is designed around turning visitors into customers." },
  { title: "Honest partnership", desc: "Transparent timelines, clear communication, and support that doesn't disappear after launch." },
];
