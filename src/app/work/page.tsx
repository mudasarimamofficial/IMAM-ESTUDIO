"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

export default function WorkPage() {
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
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-1 pt-32 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.25em] mb-3">
            PORTFOLIO ARCHIVE
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
            Selected Engineering Work
          </h1>
          <p className="text-lg text-[#8e9192] max-w-2xl mb-16 leading-relaxed">
            Case studies demonstrating custom architecture, native feature development, and autonomous AI systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="bg-[#050505] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all duration-300">
                <div>
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

                  <div className="p-6">
                    <div className="font-mono text-[10px] text-[#8e9192] mb-2">CASE STUDY 0{idx + 1}</div>
                    <h2 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug">
                      {study.title}
                    </h2>
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
      </main>

      <footer className="border-t border-white/5 py-12 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-sans text-lg font-extrabold tracking-tighter text-white">IMAM ESTUDIO</div>
          <div className="font-mono text-[9px] text-[#8e9192] tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} MUDASAR IMAM.<br />ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
