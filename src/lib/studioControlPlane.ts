import { createClient } from "@supabase/supabase-js";

// ============================================================================
// TYPES & INTERFACES FOR IMAM ESTUDIO CONTROL PLANE
// ============================================================================

export interface StudioThemeSettings {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    calendlyLink: string;
    desktopHeroAsset: string;
    mobileHeroAsset: string;
  };
  founder: {
    badge: string;
    name: string;
    title: string;
    bio1: string;
    bio2: string;
    portraitAsset: string;
    signals: Array<{ label: string; sub: string }>;
  };
  brand: {
    name: string;
    tagline: string;
    rating: string;
    reviewCount: string;
    whatsappNumber: string;
    email: string;
    primaryColor: string;
    accentColor: string;
  };
  navigation: Array<{ label: string; href: string; isExternal?: boolean }>;
  footer: {
    copyright: string;
    links: Array<{ label: string; href: string }>;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  gigId: string;
  title: string;
  category: "Commerce Engineering" | "Product Engineering" | "Intelligent Automation";
  description: string;
  startingPrice: string;
  pricingModel: string;
  estimatedDuration: string;
  tags: string[];
  features: string[];
  isPublished: boolean;
  sortOrder: number;
}

export interface ProjectItem {
  id: string;
  slug: string;
  gigId: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  metrics: string;
  isFeatured: boolean;
  isPublished: boolean;
  sortOrder: number;
}

export interface LeadItem {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project_type: string;
  budget: string;
  details: string;
  source_cta: string;
  status: "New" | "Contacted" | "In Scoping" | "Proposal" | "Negotiation" | "Won" | "Lost" | "Closed" | "Archived";
  assignedTo?: string;
  notes?: string[];
  created_at: string;
}

export interface CustomerItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  tags: string[];
  totalSpent: number;
  ordersCount: number;
  status: "Active" | "Lead" | "VIP" | "Inactive";
  created_at: string;
}

export interface ProductItem {
  id: string;
  title: string;
  slug: string;
  type: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  inventory: number;
  status: "Active" | "Draft" | "Archived";
  vendor: string;
  tags: string[];
  image: string;
}

export interface OrderItem {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  total: number;
  paymentStatus: "Paid" | "Pending" | "Refunded" | "Failed";
  fulfillmentStatus: "Unfulfilled" | "Fulfilled" | "Partial";
  items: Array<{ title: string; quantity: number; price: number }>;
  created_at: string;
}

export interface MediaAsset {
  id: string;
  name: string;
  url: string;
  size: string;
  type: string;
  dimensions: string;
  altText: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  user: string;
  action: string;
  entity: string;
  details: string;
  created_at: string;
}

// ============================================================================
// DEFAULT INITIALIZATION STATE
// ============================================================================

export const defaultThemeSettings: StudioThemeSettings = {
  hero: {
    badge: "IMAM ESTUDIO · TECHNICAL STUDIO",
    headline: "Elite AI Automation & Technical Engineering Studio.",
    subheadline:
      "I engineer high-performance commerce systems, AI automation, and full-stack digital products for businesses that need more than off-the-shelf solutions.",
    primaryCtaText: "Start a Project",
    primaryCtaLink: "/contact?source=Hero%20Start%20a%20Project",
    secondaryCtaText: "View All Works",
    secondaryCtaLink: "/work",
    calendlyLink: "https://calendly.com/mudasar-imam/consultation",
    desktopHeroAsset:
      "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/Cinematic%20Portrait%20in%20a%20Dark%20Tech%20Studio.png",
    mobileHeroAsset:
      "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/mobile%20Cinematic%20Portrait%20in%20a%20Modern%20Black%20Interior%20mobile.png",
  },
  founder: {
    badge: "FOUNDER & LEAD ENGINEER",
    name: "Mudasar Imam",
    title: "Senior Full-Stack Engineer & AI Automation Architect",
    bio1: "I design and engineer high-performance digital products, commerce systems, and intelligent automations for businesses that need more than off-the-shelf solutions.",
    bio2: "From complex Shopify engineering and full-stack applications to AI agents, workflow automation, and custom business systems, I work across the architecture, engineering, and implementation required to turn ambitious ideas into dependable products.",
    portraitAsset:
      "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/Mudasar%20Imam%20Senior%20Full%20Stack%20Engineer%20and%20AI%20Automation%20Architect.png",
    signals: [
      { label: "FULL-STACK", sub: "Engineering" },
      { label: "AI AUTOMATION", sub: "Workflows" },
      { label: "SHOPIFY", sub: "Liquid & Theme" },
      { label: "CUSTOM SYSTEMS", sub: "SaaS & RAG" },
    ],
  },
  brand: {
    name: "IMAM ESTUDIO",
    tagline: "Elite AI Automation & Technical Engineering Studio",
    rating: "4.9 ★",
    reviewCount: "61 Technical Reviews",
    whatsappNumber: "+923191106310",
    email: "mudasarimamofficial@gmail.com",
    primaryColor: "#ffffff",
    accentColor: "#25D366",
  },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    copyright: "MUDASAR IMAM. ALL RIGHTS RESERVED.",
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  seo: {
    defaultTitle: "IMAM ESTUDIO | Elite AI Automation & Technical Engineering Studio",
    defaultDescription:
      "Elite AI Automation & Technical Engineering Studio by Mudasar Imam. Specializing in Shopify Engineering, AI Agents, and Full-Stack SaaS architecture.",
    ogImage:
      "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/Mudasar%20Imam%20Senior%20Full%20Stack%20Engineer%20and%20AI%20Automation%20Architect.png",
  },
};

export const defaultServices: ServiceItem[] = [
  {
    id: "srv-01",
    slug: "shopify-custom-engineering",
    gigId: "360070233",
    title: "Shopify Custom Engineering",
    category: "Commerce Engineering",
    description: "Custom Shopify sections, Liquid features, theme functionality, and commerce experiences engineered around your business requirements.",
    startingPrice: "$35 / project",
    pricingModel: "Custom Scope",
    estimatedDuration: "2-5 Days",
    tags: ["Shopify", "Liquid", "Online Store 2.0", "Custom Sections"],
    features: ["Bespoke Liquid Sections", "Custom Cart Drawer Logic", "Native App Replacements", "Speed Optimized Code"],
    isPublished: true,
    sortOrder: 1,
  },
  {
    id: "srv-02",
    slug: "shopify-store-redesign-cro",
    gigId: "408370669",
    title: "Shopify Store Redesign & Conversion Engineering",
    category: "Commerce Engineering",
    description: "High-performance Shopify storefront redesigns focused on clarity, usability, brand expression, and conversion rate optimization.",
    startingPrice: "$75 / project",
    pricingModel: "Fixed Project",
    estimatedDuration: "1-2 Weeks",
    tags: ["Shopify", "UX/UI", "CRO", "Theme Development", "Performance"],
    features: ["CRO Audit & Redesign", "Mobile UX Optimization", "High-Converting Product Pages", "Sub-Second Page Speed"],
    isPublished: true,
    sortOrder: 2,
  },
  {
    id: "srv-03",
    slug: "shopify-bug-fixes-troubleshooting",
    gigId: "475539431",
    title: "Shopify Bug Fixes & Technical Troubleshooting",
    category: "Commerce Engineering",
    description: "Systematic diagnosis and resolution of complex Shopify, Liquid, JavaScript, theme, cart, and storefront issues.",
    startingPrice: "$25 / project",
    pricingModel: "24h Urgent Fix",
    estimatedDuration: "24 Hours",
    tags: ["Liquid", "JavaScript", "Theme Debugging", "Cart Systems"],
    features: ["24h Incident Resolution", "Cart & Checkout Debugging", "Third-Party App Conflict Fixes", "Liquid Error Elimination"],
    isPublished: true,
    sortOrder: 3,
  },
  {
    id: "srv-04",
    slug: "headless-shopify-engineering",
    gigId: "493991616",
    title: "Headless Shopify Engineering",
    category: "Commerce Engineering",
    description: "High-performance headless commerce experiences combining Shopify's commerce infrastructure with modern Next.js frontend architecture.",
    startingPrice: "$495 / project",
    pricingModel: "Custom Architecture",
    estimatedDuration: "3-6 Weeks",
    tags: ["Shopify", "Headless", "Next.js", "React", "Performance"],
    features: ["Next.js Storefront API", "Edge-Cached Product Pages", "Instant Page Transitions", "Custom Checkout Integration"],
    isPublished: true,
    sortOrder: 4,
  },
  {
    id: "srv-05",
    slug: "accessibility-inclusive-commerce",
    gigId: "496125007",
    title: "Accessibility & Inclusive Commerce",
    category: "Commerce Engineering",
    description: "Accessibility audits and engineering improvements for Shopify storefronts, with a focus on WCAG-aligned usability and inclusive commerce.",
    startingPrice: "$120 / project",
    pricingModel: "Audit & Fix",
    estimatedDuration: "3-5 Days",
    tags: ["WCAG", "Accessibility", "Shopify", "Semantic HTML", "UX"],
    features: ["WCAG 2.1 AA Compliance", "Keyboard Navigation Fixes", "Screen Reader Testing", "ADA Legal Risk Mitigation"],
    isPublished: true,
    sortOrder: 5,
  },
  {
    id: "srv-06",
    slug: "full-stack-web-applications",
    gigId: "493974686",
    title: "Full-Stack Web Applications",
    category: "Product Engineering",
    description: "Production-ready web applications engineered from architecture through frontend, backend, database, authentication, and deployment.",
    startingPrice: "$195 / project",
    pricingModel: "SaaS MVP Build",
    estimatedDuration: "2-4 Weeks",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "APIs"],
    features: ["Next.js App Router", "Supabase Auth & PostgreSQL", "Stripe Subscription Billing", "Enterprise Dashboard UI"],
    isPublished: true,
    sortOrder: 6,
  },
  {
    id: "srv-07",
    slug: "ai-powered-b2b-saas",
    gigId: "495375633",
    title: "AI-Powered B2B SaaS",
    category: "Product Engineering",
    description: "AI-native B2B products combining modern SaaS architecture, intelligent workflows, data systems, and polished product experiences.",
    startingPrice: "$245 / project",
    pricingModel: "Product Scope",
    estimatedDuration: "3-5 Weeks",
    tags: ["B2B SaaS", "Next.js", "React", "AI", "APIs", "Databases"],
    features: ["LLM API Integrations", "Vector RAG Search Engine", "Custom AI Prompts & Pipelines", "Multi-Tenant Architecture"],
    isPublished: true,
    sortOrder: 7,
  },
  {
    id: "srv-08",
    slug: "ai-workflow-automation",
    gigId: "493979596",
    title: "AI & Workflow Automation",
    category: "Intelligent Automation",
    description: "Intelligent business workflows that connect AI, APIs, databases, SaaS platforms, and internal operations into automated systems.",
    startingPrice: "$85 / project",
    pricingModel: "Workflow Build",
    estimatedDuration: "3-7 Days",
    tags: ["n8n", "AI", "APIs", "Automation", "Webhooks", "Agents"],
    features: ["Custom n8n Pipelines", "API & Webhook Webbing", "AI Summarization & Routing", "Error Notification Retries"],
    isPublished: true,
    sortOrder: 8,
  },
  {
    id: "srv-09",
    slug: "custom-ai-agents",
    gigId: "495364262",
    title: "Custom AI Agents & Intelligent Systems",
    category: "Intelligent Automation",
    description: "Purpose-built AI agents and multi-agent workflows designed to automate research, operations, customer interactions, and decision support.",
    startingPrice: "$245 / project",
    pricingModel: "Agent Architecture",
    estimatedDuration: "1-3 Weeks",
    tags: ["AI Agents", "LLMs", "Tool Calling", "RAG", "Automation"],
    features: ["Autonomous Multi-Agent Swarms", "Custom Tool Calling & Execution", "Knowledge Base Embedding Search", "Human-in-the-loop Guardrails"],
    isPublished: true,
    sortOrder: 9,
  },
  {
    id: "srv-10",
    slug: "ai-voice-agents",
    gigId: "495371376",
    title: "AI Voice Agents",
    category: "Intelligent Automation",
    description: "Conversational voice systems for sales, customer support, qualification, lead capture, and appointment workflows.",
    startingPrice: "$195 / project",
    pricingModel: "Voice AI System",
    estimatedDuration: "1-2 Weeks",
    tags: ["Voice AI", "Conversational AI", "Sales", "Appointments"],
    features: ["Inbound/Outbound Telephony", "Real-Time Speech Synthesis", "CRM & Calendar Sync", "Automated Appointment Booking"],
    isPublished: true,
    sortOrder: 10,
  },
];

export const defaultProjects: ProjectItem[] = [
  {
    id: "prj-01",
    slug: "custom-shopify-liquid-sections",
    gigId: "360070233",
    title: "Custom Shopify Liquid Sections & Feature Engineering",
    category: "Shopify Engineering",
    description: "Custom Liquid code sections, bespoke features, and theme modifications engineered to boost store sales and user experience.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/360070233/original/9fed9f888bd04df98a16b162f97c08f24d904cda.png",
    tags: ["Liquid", "Online Store 2.0", "Custom Sections"],
    client: "E-Commerce Retailer",
    metrics: "+34% Conversion Rate Increase",
    isFeatured: true,
    isPublished: true,
    sortOrder: 1,
  },
  {
    id: "prj-02",
    slug: "shopify-store-redesign-cro",
    gigId: "408370669",
    title: "Shopify Store Redesign & Conversion Engineering (CRO)",
    category: "Shopify Engineering",
    description: "High-converting storefront redesigns built for high conversion rate optimization, page speed, and pro brand expression.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/408370669/original/3deb6b4d5ceeee443e13b9c2e0651c07c8487910.png",
    tags: ["Shopify CRO", "UX/UI Redesign", "Page Speed"],
    client: "Luxury D2C Fashion",
    metrics: "Sub-second LCP & 4.2x Revenue",
    isFeatured: true,
    isPublished: true,
    sortOrder: 2,
  },
  {
    id: "prj-03",
    slug: "urgent-shopify-bug-fixes",
    gigId: "475539431",
    title: "Urgent Shopify Bug Fixes & Liquid Troubleshooting",
    category: "Technical Optimization",
    description: "24-hour systematic diagnosis and troubleshooting for urgent Liquid code, JavaScript, cart, and theme bugs.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/475539431/original/bb0d899e3b3b00a8e25ad7ab88b7e538477d84db.png",
    tags: ["Liquid Debugging", "Cart Fixes", "24h Response"],
    client: "High-Volume Merchant",
    metrics: "100% Cart Bug Elimination",
    isFeatured: true,
    isPublished: true,
    sortOrder: 3,
  },
  {
    id: "prj-04",
    slug: "production-full-stack-saas",
    gigId: "493974686",
    title: "Production Full-Stack SaaS MVP (Next.js, React, Supabase)",
    category: "Full-Stack SaaS",
    description: "Complete end-to-end SaaS MVP web application built with Next.js, React, TypeScript, and Supabase database architecture.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/493974686/original/e4addf9798b91f00f9ecafe7fe87082f18079b86.png",
    tags: ["Next.js", "React", "Supabase", "TypeScript"],
    client: "FinTech Platform",
    metrics: "Enterprise SOC-2 Ready MVP",
    isFeatured: true,
    isPublished: true,
    sortOrder: 4,
  },
  {
    id: "prj-05",
    slug: "custom-n8n-ai-automations",
    gigId: "493979596",
    title: "Custom n8n AI Automations & Agent Workflows",
    category: "AI Automation",
    description: "Intelligent n8n automation pipelines connecting AI, APIs, databases, webhooks, and core business workflows.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/493979596/original/9bf24ec1a3a44963e752ea762ca4cdd175c0d015.png",
    tags: ["n8n Workflows", "AI Automation", "Webhooks"],
    client: "Logistics Enterprise",
    metrics: "40+ Weekly Hours Saved",
    isFeatured: true,
    isPublished: true,
    sortOrder: 5,
  },
  {
    id: "prj-06",
    slug: "headless-shopify-storefront",
    gigId: "493991616",
    title: "Headless Shopify Storefront with Next.js",
    category: "Headless Commerce",
    description: "Sub-second edge-cached headless storefronts pairing Shopify's backend with modern Next.js frontend architecture.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/493991616/original/86712b96d3f090661b268a8e39f3c7db81967c35.png",
    tags: ["Headless Shopify", "Next.js", "Storefront API"],
    client: "Global Beauty Brand",
    metrics: "0.4s Global Load Time",
    isFeatured: true,
    isPublished: true,
    sortOrder: 6,
  },
  {
    id: "prj-07",
    slug: "custom-ai-agents-swarms",
    gigId: "495364262",
    title: "Custom AI Agents & Multi-Agent Swarm Workflows",
    category: "AI Automation",
    description: "Autonomous AI agent systems designed for research, internal operations, multi-step tasks, and decision support.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495364262/original/522d3fc9e1da6d765067f8bf78fdf8e1b33a8690.png",
    tags: ["AI Agents", "Multi-Agent Swarms", "LLM APIs"],
    client: "Market Research Firm",
    metrics: "100x Data Analysis Speed",
    isFeatured: true,
    isPublished: true,
    sortOrder: 7,
  },
  {
    id: "prj-08",
    slug: "ai-voice-agents-sales-support",
    gigId: "495371376",
    title: "AI Voice Agents for Sales, Support & Appointment Booking",
    category: "Voice AI",
    description: "Conversational AI voice receptionists handling inbound sales calls, customer support, lead qualification, and calendar booking.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495371376/original/3a2cd69429a22ae815576c60629e5f687f41e2cc.png",
    tags: ["Voice AI", "Telephony", "Appointment Booking"],
    client: "Healthcare Network",
    metrics: "24/7 Zero Missed Inbound Calls",
    isFeatured: true,
    isPublished: true,
    sortOrder: 8,
  },
  {
    id: "prj-09",
    slug: "ai-powered-b2b-saas-apps",
    gigId: "495375633",
    title: "AI-Powered B2B SaaS Web Applications",
    category: "Full-Stack SaaS",
    description: "AI-native B2B web applications built with Next.js, combining complex data systems with intuitive user experiences.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495375633/original/7d3d299a9c2dd9f3819ea9b0cafbafff4cee5e26.png",
    tags: ["B2B SaaS", "AI Product", "Next.js Architecture"],
    client: "Enterprise Software Co.",
    metrics: "$1.2M ARR Product Launch",
    isFeatured: true,
    isPublished: true,
    sortOrder: 9,
  },
  {
    id: "prj-10",
    slug: "wcag-accessibility-audit-ada",
    gigId: "496125007",
    title: "WCAG Accessibility Audit & ADA Compliance Fixes",
    category: "Technical Optimization",
    description: "Comprehensive WCAG accessibility audits and engineering remediations to ensure inclusive Shopify storefront experiences.",
    image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/496125007/original/0bc228a13a0a1445d1af598bdfed7cda1ca67264.png",
    tags: ["WCAG 2.1", "Accessibility Audit", "Shopify ADA"],
    client: "Publicly Traded Brand",
    metrics: "100% WCAG 2.1 AA Certified",
    isFeatured: true,
    isPublished: true,
    sortOrder: 10,
  },
];

// ============================================================================
// STORAGE & LOCAL PERSISTENCE LAYER
// ============================================================================

const STORAGE_KEYS = {
  THEME: "imam_estudio_theme_settings_v1",
  SERVICES: "imam_estudio_services_v1",
  PROJECTS: "imam_estudio_projects_v1",
};

export function getStoredThemeSettings(): StudioThemeSettings {
  if (typeof window === "undefined") return defaultThemeSettings;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.THEME);
    if (!raw) return defaultThemeSettings;
    return JSON.parse(raw) as StudioThemeSettings;
  } catch {
    return defaultThemeSettings;
  }
}

export function saveStoredThemeSettings(settings: StudioThemeSettings): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify(settings));
    window.dispatchEvent(new Event("imam_estudio_settings_updated"));
  } catch (e) {
    console.warn("Failed to save theme settings:", e);
  }
}

export function getStoredServices(): ServiceItem[] {
  if (typeof window === "undefined") return defaultServices;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SERVICES);
    if (!raw) return defaultServices;
    const parsed = JSON.parse(raw) as ServiceItem[];
    return parsed.length > 0 ? parsed : defaultServices;
  } catch {
    return defaultServices;
  }
}

export function saveStoredServices(services: ServiceItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    window.dispatchEvent(new Event("imam_estudio_services_updated"));
  } catch (e) {
    console.warn("Failed to save services:", e);
  }
}

export function getStoredProjects(): ProjectItem[] {
  if (typeof window === "undefined") return defaultProjects;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (!raw) return defaultProjects;
    const parsed = JSON.parse(raw) as ProjectItem[];
    return parsed.length > 0 ? parsed : defaultProjects;
  } catch {
    return defaultProjects;
  }
}

export function saveStoredProjects(projects: ProjectItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    window.dispatchEvent(new Event("imam_estudio_projects_updated"));
  } catch (e) {
    console.warn("Failed to save projects:", e);
  }
}

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://yqaslfozryelumtlkoxk.supabase.co";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!key) return null;
  return createClient(url, key);
}
