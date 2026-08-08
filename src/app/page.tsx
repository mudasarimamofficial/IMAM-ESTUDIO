"use client";

import React from "react";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";

export default function HomePage() {
  const desktopHeroAsset =
    "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/Cinematic%20Portrait%20in%20a%20Dark%20Tech%20Studio.png";
  const mobileHeroAsset =
    "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/mobile%20Cinematic%20Portrait%20in%20a%20Modern%20Black%20Interior%20mobile.png";
  const founderAsset =
    "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/Mudasar%20Imam%20Senior%20Full%20Stack%20Engineer%20and%20AI%20Automation%20Architect.png";

  const caseStudies = [
    {
      id: "360070233",
      title: "Custom Shopify Liquid Sections & Feature Engineering",
      category: "Shopify Engineering",
      description: "Custom Liquid code sections, bespoke features, and theme modifications engineered to boost store sales and user experience.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/360070233/original/9fed9f888bd04df98a16b162f97c08f24d904cda.png",
      tags: ["Liquid", "Online Store 2.0", "Custom Sections"]
    },
    {
      id: "408370669",
      title: "Shopify Store Redesign & Conversion Engineering (CRO)",
      category: "Shopify Engineering",
      description: "High-converting storefront redesigns built for high conversion rate optimization, page speed, and pro brand expression.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/408370669/original/3deb6b4d5ceeee443e13b9c2e0651c07c8487910.png",
      tags: ["Shopify CRO", "UX/UI Redesign", "Page Speed"]
    },
    {
      id: "475539431",
      title: "Urgent Shopify Bug Fixes & Liquid Troubleshooting",
      category: "Technical Optimization",
      description: "24-hour systematic diagnosis and troubleshooting for urgent Liquid code, JavaScript, cart, and theme bugs.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/475539431/original/bb0d899e3b3b00a8e25ad7ab88b7e538477d84db.png",
      tags: ["Liquid Debugging", "Cart Fixes", "24h Response"]
    },
    {
      id: "493974686",
      title: "Production Full-Stack SaaS MVP (Next.js, React, Supabase)",
      category: "Full-Stack SaaS",
      description: "Complete end-to-end SaaS MVP web application built with Next.js, React, TypeScript, and Supabase database architecture.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/493974686/original/e4addf9798b91f00f9ecafe7fe87082f18079b86.png",
      tags: ["Next.js", "React", "Supabase", "TypeScript"]
    },
    {
      id: "493979596",
      title: "Custom n8n AI Automations & Agent Workflows",
      category: "AI Automation",
      description: "Intelligent n8n automation pipelines connecting AI, APIs, databases, webhooks, and core business workflows.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/493979596/original/9bf24ec1a3a44963e752ea762ca4cdd175c0d015.png",
      tags: ["n8n Workflows", "AI Automation", "Webhooks"]
    },
    {
      id: "493991616",
      title: "Headless Shopify Storefront with Next.js",
      category: "Headless Commerce",
      description: "Sub-second edge-cached headless storefronts pairing Shopify's backend with modern Next.js frontend architecture.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/493991616/original/86712b96d3f090661b268a8e39f3c7db81967c35.png",
      tags: ["Headless Shopify", "Next.js", "Storefront API"]
    },
    {
      id: "495364262",
      title: "Custom AI Agents & Multi-Agent Swarm Workflows",
      category: "AI Automation",
      description: "Autonomous AI agent systems designed for research, internal operations, multi-step tasks, and decision support.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495364262/original/522d3fc9e1da6d765067f8bf78fdf8e1b33a8690.png",
      tags: ["AI Agents", "Multi-Agent Swarms", "LLM APIs"]
    },
    {
      id: "495371376",
      title: "AI Voice Agents for Sales, Support & Appointment Booking",
      category: "Voice AI",
      description: "Conversational AI voice receptionists handling inbound sales calls, customer support, lead qualification, and calendar booking.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495371376/original/3a2cd69429a22ae815576c60629e5f687f41e2cc.png",
      tags: ["Voice AI", "Telephony", "Appointment Booking"]
    },
    {
      id: "495375633",
      title: "AI-Powered B2B SaaS Web Applications",
      category: "Full-Stack SaaS",
      description: "AI-native B2B web applications built with Next.js, combining complex data systems with intuitive user experiences.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495375633/original/7d3d299a9c2dd9f3819ea9b0cafbafff4cee5e26.png",
      tags: ["B2B SaaS", "AI Product", "Next.js Architecture"]
    },
    {
      id: "496125007",
      title: "WCAG Accessibility Audit & ADA Compliance Fixes",
      category: "Technical Optimization",
      description: "Comprehensive WCAG accessibility audits and engineering remediations to ensure inclusive Shopify storefront experiences.",
      image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/496125007/original/0bc228a13a0a1445d1af598bdfed7cda1ca67264.png",
      tags: ["WCAG 2.1", "Accessibility Audit", "Shopify ADA"]
    }
  ];

  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans">
      <TopNavBar />

      <main className="pt-16">
        {/* SECTION 01 — HERO SYSTEM WITH HIGH-VISIBILITY ART DIRECTION */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-white/5 bg-black">
          {/* Background Images - Art Directed Desktop vs Mobile */}
          <div className="absolute inset-0 z-0">
            {/* Desktop Hero Image */}
            <div className="hidden md:block absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={desktopHeroAsset}
                alt="Mudasar Imam - Dark Tech Studio"
                className="w-full h-full object-cover object-right-top opacity-90"
              />
              {/* Light gradient mask on the left for maximum text contrast without blocking portrait */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/80 via-40% to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 via-transparent to-[#020202]/30" />
            </div>

            {/* Mobile Hero Image - Fully Visible Crisp Portrait */}
            <div className="block md:hidden absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mobileHeroAsset}
                alt="Mudasar Imam - Mobile Cinematic Portrait"
                className="w-full h-full object-cover object-top opacity-85"
              />
              {/* Soft subtle bottom vignette so portrait is 100% visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-[#020202]/50" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 w-full min-h-[75vh] md:min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-2xl bg-[#020202]/40 md:bg-transparent p-6 md:p-0 rounded-sm backdrop-blur-xs md:backdrop-blur-none border border-white/5 md:border-none">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.3em] mb-6 px-3 py-1 bg-white/10 border border-white/15 rounded-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                IMAM ESTUDIO · TECHNICAL STUDIO
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tighter text-white drop-shadow-md">
                Elite AI Automation & <br /> Technical Engineering Studio.
              </h1>

              <p className="text-base sm:text-lg text-[#d1d4d6] mb-10 leading-relaxed font-normal max-w-xl drop-shadow">
                I engineer high-performance commerce systems, AI automation, and full-stack digital products for businesses that need more than off-the-shelf solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-black font-sans text-sm font-bold tracking-wide hover:bg-opacity-90 transition-all text-center rounded-[2px] shadow-lg"
                >
                  Start a Project
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-4 bg-black/60 md:bg-transparent border border-white/30 text-white font-sans text-sm font-bold tracking-wide hover:border-white/60 transition-all text-center rounded-[2px] backdrop-blur-sm"
                >
                  View All Works
                </Link>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/mudasar-imam/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] text-white hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-white/30"
                >
                  <span>Book a Technical Consultation</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02 — TRUST / CREDIBILITY STRIP */}
        <section className="border-b border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden">
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-sans font-bold text-white text-lg">4.9 ★</span>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase tracking-wider">Verified Client Rating</span>
                <span className="font-mono text-[9px] text-white uppercase tracking-wider">61 Technical Reviews</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10 shrink-0"></div>

            <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.2em] whitespace-nowrap">
              Senior Full Stack Engineer
            </span>

            <div className="hidden md:block w-px h-8 bg-white/10 shrink-0"></div>

            <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.2em] whitespace-nowrap">
              Shopify Engineering
            </span>

            <div className="hidden md:block w-px h-8 bg-white/10 shrink-0"></div>

            <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.2em] whitespace-nowrap">
              AI Automation Architect
            </span>
          </div>
        </section>

        {/* SECTION 03 — FOUNDER SECTION ("Meet Mudasar Imam") */}
        <section className="py-28 px-6 border-b border-white/5 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column - Founder Copy */}
              <div className="lg:col-span-7">
                <div className="font-mono text-[10px] text-white uppercase tracking-[0.25em] mb-4 bg-white/10 inline-block px-3 py-1.5 rounded-[2px] border border-white/20">
                  FOUNDER & LEAD ENGINEER
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white mb-4">
                  Meet Mudasar Imam
                </h2>

                <p className="font-mono text-sm text-[#8e9192] uppercase tracking-wider mb-8">
                  Senior Full-Stack Engineer & AI Automation Architect
                </p>

                <div className="space-y-6 text-[#b0b3b5] text-base leading-relaxed mb-10">
                  <p>
                    I design and engineer high-performance digital products, commerce systems, and intelligent automations for businesses that need more than off-the-shelf solutions.
                  </p>
                  <p>
                    From complex Shopify engineering and full-stack applications to AI agents, workflow automation, and custom business systems, I work across the architecture, engineering, and implementation required to turn ambitious ideas into dependable products.
                  </p>
                </div>

                {/* Restrained Capability Signals */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pt-6 border-t border-white/10">
                  <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">
                    <span className="block text-white font-bold mb-1">FULL-STACK</span>
                    Engineering
                  </div>
                  <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">
                    <span className="block text-white font-bold mb-1">AI AUTOMATION</span>
                    Workflows
                  </div>
                  <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">
                    <span className="block text-white font-bold mb-1">SHOPIFY</span>
                    Liquid & Theme
                  </div>
                  <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">
                    <span className="block text-white font-bold mb-1">CUSTOM SYSTEMS</span>
                    SaaS & RAG
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 bg-white text-black font-sans text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all rounded-[2px]"
                  >
                    Start a Project
                  </Link>
                  <Link
                    href="/about"
                    className="px-6 py-3.5 bg-transparent border border-white/20 text-white font-sans text-xs font-bold uppercase tracking-wider hover:border-white/50 transition-all rounded-[2px]"
                  >
                    Read Philosophy
                  </Link>
                </div>
              </div>

              {/* Right Column - Founder Editorial Portrait */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden group shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={founderAsset}
                    alt="Mudasar Imam, Founder and Lead Engineer of IMAM ESTUDIO"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-sans text-sm font-bold text-white">Mudasar Imam</div>
                    <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">
                      Founder & Lead Engineer · IMAM ESTUDIO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — SELECTED WORK (SHOWCASING ALL 10 ENGINEERING WORKS WITH IMAGES) */}
        <section className="py-28 px-6 border-b border-white/5 bg-[#030303]" id="work">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.25em] mb-3">
                  SELECTED WORK & CASE STUDIES
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white mb-2">
                  Featured Engineering Work
                </h2>
                <p className="text-base text-[#8e9192] max-w-2xl leading-relaxed">
                  Real engineering projects, custom architecture, native feature development, and autonomous AI systems built for client outcomes.
                </p>
              </div>
              <Link href="/work" className="font-mono text-[11px] text-white hover:text-emerald-400 transition-colors whitespace-nowrap border-b border-white/20 pb-1">
                View All Case Studies →
              </Link>
            </div>

            {/* 10 Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, idx) => (
                <div key={study.id} className="bg-[#050505] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all duration-300">
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative aspect-[16/10] bg-[#0a0a0a] overflow-hidden border-b border-white/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={study.image}
                        alt={study.title}
                        className="object-cover w-full h-full opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="font-mono text-[9px] px-2.5 py-1 bg-black/80 border border-white/10 text-white rounded-[2px] uppercase backdrop-blur-sm">
                          {study.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="font-mono text-[10px] text-[#8e9192] mb-2">PROJECT 0{idx + 1}</div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-xs text-[#8e9192] leading-relaxed mb-6">
                        {study.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                      {study.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[9px] px-2 py-0.5 bg-white/5 text-[#8e9192] rounded-[2px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between w-full font-mono text-[10px] text-white uppercase tracking-widest group-hover:text-emerald-400 transition-colors pt-2"
                    >
                      <span>Inquire about project</span>
                      <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 05 — COMPLETE 10 SERVICES ARCHITECTURE */}
        <section className="py-28 px-6 border-b border-white/5 bg-black" id="capabilities">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-20">
              <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.25em] mb-3">
                CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white mb-4">
                Engineering systems built for what comes next.
              </h2>
              <p className="text-base text-[#8e9192] max-w-2xl leading-relaxed">
                From advanced Shopify commerce to full-stack products and intelligent automation, IMAM ESTUDIO builds the technical systems behind ambitious businesses.
              </p>
            </div>

            {/* Service Category 1: Commerce Engineering */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-[2px]">01</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Commerce Engineering</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service 01 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">01</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">Shopify</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Shopify Custom Engineering</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      Custom Shopify sections, Liquid features, theme functionality, and commerce experiences engineered around your business requirements.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      Shopify · Liquid · Online Store 2.0 · Theme Engineering
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Service 02 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">02</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">Design & CRO</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Shopify Store Design & Conversion Engineering</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      High-performance Shopify storefront redesigns focused on clarity, usability, brand expression, and conversion.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      Shopify · UX/UI · CRO · Theme Development · Performance
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Service 03 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">03</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">Troubleshooting</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Shopify Bug Fixes & Technical Troubleshooting</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      Systematic diagnosis and resolution of complex Shopify, Liquid, JavaScript, theme, cart, and storefront issues.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      Liquid · JavaScript · Theme Debugging · Cart Systems
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Service 04 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">04</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">Headless</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Headless Shopify Engineering</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      High-performance headless commerce experiences combining Shopify&apos;s commerce infrastructure with modern frontend architecture.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      Shopify · Headless · Next.js · React · Performance
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Service 05 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">05</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">Accessibility</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Accessibility & Inclusive Commerce</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      Accessibility audits and engineering improvements for Shopify storefronts, with a focus on WCAG-aligned usability and inclusive commerce experiences.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      WCAG · Accessibility · Shopify · Semantic HTML · UX
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Category 2: Product Engineering */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-[2px]">02</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Product Engineering</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service 06 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">06</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">Full-Stack SaaS</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Full-Stack Web Applications</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      Production-ready web applications engineered from architecture through frontend, backend, database, authentication, and deployment.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      Next.js · React · TypeScript · Supabase · APIs
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Service 07 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">07</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">AI Products</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">AI-Powered B2B SaaS</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      AI-native B2B products combining modern SaaS architecture, intelligent workflows, data systems, and polished product experiences.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      B2B SaaS · Next.js · React · AI · APIs · Databases
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Category 3: Intelligent Automation */}
            <div>
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-[2px]">03</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Intelligent Automation</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Service 08 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">08</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">n8n & Workflow</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">AI & Workflow Automation</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      Intelligent business workflows that connect AI, APIs, databases, SaaS platforms, and internal operations into automated systems.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      n8n · AI · APIs · Automation · Webhooks · Agents
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Service 09 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">09</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">AI Swarms</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Custom AI Agents & Intelligent Systems</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      Purpose-built AI agents and multi-agent workflows designed to automate research, operations, customer interactions, and decision support.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      AI Agents · LLMs · Tool Calling · RAG · Automation
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* Service 10 */}
                <div className="bg-[#050505] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#8e9192]">10</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#8e9192] rounded-[2px] uppercase">Voice AI</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">AI Voice Agents</h4>
                    <p className="text-sm text-[#8e9192] mb-6 leading-relaxed">
                      Conversational voice systems for sales, customer support, qualification, lead capture, and appointment workflows.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#8e9192] mb-6 border-t border-white/5 pt-4">
                      Voice AI · Conversational AI · Sales · Appointments
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Discuss project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — ENGINEERING APPROACH */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tighter text-white mb-16 text-center">The Engineering Approach</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-[#050505] border border-white/5 rounded-sm">
                <span className="font-mono text-4xl text-white/20 font-bold mb-4">01</span>
                <h3 className="text-base font-bold text-white mb-2">Discover</h3>
                <p className="text-xs text-[#8e9192] leading-relaxed">Deeply understand the business problem, constraints, and core objectives.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-[#050505] border border-white/5 rounded-sm">
                <span className="font-mono text-4xl text-white/20 font-bold mb-4">02</span>
                <h3 className="text-base font-bold text-white mb-2">Architect</h3>
                <p className="text-xs text-[#8e9192] leading-relaxed">Design the right technical solution using modern, scalable primitives.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-[#050505] border border-white/5 rounded-sm">
                <span className="font-mono text-4xl text-white/20 font-bold mb-4">03</span>
                <h3 className="text-base font-bold text-white mb-2">Engineer</h3>
                <p className="text-xs text-[#8e9192] leading-relaxed">Build production-ready, clean, and highly performant systems.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-[#050505] border border-white/5 rounded-sm">
                <span className="font-mono text-4xl text-white/20 font-bold mb-4">04</span>
                <h3 className="text-base font-bold text-white mb-2">Optimize</h3>
                <p className="text-xs text-[#8e9192] leading-relaxed">Measure outcomes, refine UX, and aggressively eliminate technical debt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07 — COLLABORATION / MALIK */}
        <section className="py-24 px-6 border-b border-white/5 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <span className="font-mono text-[10px] text-white uppercase tracking-[0.2em] mb-4 bg-white/10 inline-block px-3 py-1.5 rounded-[2px] border border-white/20">
                Extended Engineering Capability
              </span>
              <h2 className="text-3xl font-extrabold tracking-tighter text-white mb-4">Engineering Collaboration</h2>
              <p className="text-sm text-[#8e9192] leading-relaxed mb-6">
                For projects requiring extensive frontend design systems and complex UI/UX architecture, I collaborate with Malik Jahanzaib—a Senior UI/UX Architect and Full-Stack Engineer.
                <br /><br />
                Together, we replace slow, template-based websites with high-performance headless solutions and intelligent automation workflows.
              </p>
              <Link href="/about#team" className="font-mono text-[11px] text-white hover:text-[#8e9192] transition-colors border-b border-white/20 hover:border-transparent pb-1">
                Read about our collaborative process →
              </Link>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="p-6 border border-white/10 bg-[#0a0a0a] rounded-sm">
                <h3 className="text-base font-bold text-white mb-1">Malik Jahanzaib</h3>
                <p className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider mb-4">UI/UX & Frontend Lead</p>
                <ul className="space-y-2 font-sans text-xs text-[#8e9192]">
                  <li>• High Performance Next.js SaaS</li>
                  <li>• Shopify UI/UX Redesign</li>
                  <li>• Custom Native Liquid Sections</li>
                  <li>• n8n AI Automations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 08 — FINAL CTA */}
        <section className="py-32 px-6 bg-[#020202]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
              Have a difficult technical problem?
            </h2>
            <p className="text-lg text-[#8e9192] mb-12 max-w-xl mx-auto">
              I don&apos;t need another freelancer. I need this engineered correctly.<br />
              Let&apos;s build the right solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white text-black font-sans text-sm font-bold tracking-wide hover:bg-opacity-90 transition-all rounded-[2px]"
              >
                Start a Project
              </Link>
              <a
                href="https://calendly.com/mudasar-imam/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-sans text-sm font-bold tracking-wide hover:border-white/50 transition-all rounded-[2px]"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-sans text-lg font-extrabold tracking-tighter text-white">IMAM ESTUDIO</div>
          <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.15em] flex flex-wrap justify-center gap-6">
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/process" className="hover:text-white transition-colors">Process</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="font-mono text-[9px] text-[#8e9192] tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} MUDASAR IMAM.<br />ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
