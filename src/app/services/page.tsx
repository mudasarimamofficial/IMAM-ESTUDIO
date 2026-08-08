"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-1 pt-32 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.25em] mb-3">
            COMPLETE CAPABILITIES INVENTORY
          </div>
          <h1 className="text-h1 font-extrabold tracking-tighter text-white mb-6">
            Engineering Capabilities
          </h1>
          <p className="body-base text-[#8e9192] max-w-3xl mb-16 leading-relaxed">
            I engineer high-performance commerce systems, AI automation, and full-stack digital products for businesses that need more than off-the-shelf solutions.
          </p>

          {/* Commerce Engineering */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-[2px]">01</span>
              <h2 className="text-h2 font-bold text-white tracking-tight">Commerce Engineering</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 01</span>
                  <h3 className="text-h3 font-bold text-white mb-4">Shopify Custom Engineering</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    Custom Shopify sections, Liquid features, theme functionality, and commerce experiences engineered around your business requirements.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    Shopify · Liquid · Online Store 2.0 · Theme Engineering
                  </div>
                  <Link href="/contact?source=Service%3A%20Shopify%20Custom%20Engineering" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Start a Shopify Project →
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 02</span>
                  <h3 className="text-h3 font-bold text-white mb-4">Shopify Store Design & CRO</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    High-performance Shopify storefront redesigns focused on clarity, usability, brand expression, and conversion rate optimization.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    Shopify · UX/UI · CRO · Theme Development · Performance
                  </div>
                  <Link href="/contact?source=Service%3A%20Shopify%20Store%20Design%20%26%20CRO" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Start a Redesign Project →
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 03</span>
                  <h3 className="text-h3 font-bold text-white mb-4">Shopify Bug Fixes & Troubleshooting</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    Systematic diagnosis and resolution of complex Shopify, Liquid, JavaScript, theme, cart, and storefront issues.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    Liquid · JavaScript · Theme Debugging · Cart Systems
                  </div>
                  <Link href="/contact?source=Service%3A%20Shopify%20Bug%20Fixes" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Request Bug Fix →
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 04</span>
                  <h3 className="text-h3 font-bold text-white mb-4">Headless Shopify Engineering</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    High-performance headless commerce experiences combining Shopify&apos;s commerce infrastructure with modern frontend architecture.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    Shopify · Headless · Next.js · React · Performance
                  </div>
                  <Link href="/contact?source=Service%3A%20Headless%20Shopify" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Start Headless Project →
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 05</span>
                  <h3 className="text-h3 font-bold text-white mb-4">Accessibility & Inclusive Commerce</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    Accessibility audits and engineering improvements for Shopify storefronts, with a focus on WCAG-aligned usability and inclusive commerce.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    WCAG · Accessibility · Shopify · Semantic HTML · UX
                  </div>
                  <Link href="/contact?source=Service%3A%20Accessibility%20Audit" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Request Accessibility Audit →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Product Engineering */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-[2px]">02</span>
              <h2 className="text-h2 font-bold text-white tracking-tight">Product Engineering</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 06</span>
                  <h3 className="text-h3 font-bold text-white mb-4">Full-Stack Web Applications</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    Production-ready web applications engineered from architecture through frontend, backend, database, authentication, and deployment.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    Next.js · React · TypeScript · Supabase · APIs
                  </div>
                  <Link href="/contact?source=Service%3A%20Full-Stack%20Web%20Applications" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Start a SaaS Project →
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 07</span>
                  <h3 className="text-h3 font-bold text-white mb-4">AI-Powered B2B SaaS</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    AI-native B2B products combining modern SaaS architecture, intelligent workflows, data systems, and polished product experiences.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    B2B SaaS · Next.js · React · AI · APIs · Databases
                  </div>
                  <Link href="/contact?source=Service%3A%20AI-Powered%20B2B%20SaaS" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Start B2B SaaS Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Intelligent Automation */}
          <div>
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-[2px]">03</span>
              <h2 className="text-h2 font-bold text-white tracking-tight">Intelligent Automation</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 08</span>
                  <h3 className="text-h3 font-bold text-white mb-4">AI & Workflow Automation</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    Intelligent business workflows that connect AI, APIs, databases, SaaS platforms, and internal operations into automated systems.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    n8n · AI · APIs · Automation · Webhooks · Agents
                  </div>
                  <Link href="/contact?source=Service%3A%20AI%20%26%20Workflow%20Automation" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Start Automation Project →
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 09</span>
                  <h3 className="text-h3 font-bold text-white mb-4">Custom AI Agents & Intelligent Systems</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    Purpose-built AI agents and multi-agent workflows designed to automate research, operations, customer interactions, and decision support.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    AI Agents · LLMs · Tool Calling · RAG · Automation
                  </div>
                  <Link href="/contact?source=Service%3A%20Custom%20AI%20Agents" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Start AI Agent Project →
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest block mb-4">SERVICE 10</span>
                  <h3 className="text-h3 font-bold text-white mb-4">AI Voice Agents</h3>
                  <p className="body-small text-[#8e9192] mb-6 leading-relaxed">
                    Conversational voice systems for sales, customer support, qualification, lead capture, and appointment workflows.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8e9192] mb-6 pt-4 border-t border-white/5">
                    Voice AI · Conversational AI · Sales · Appointments
                  </div>
                  <Link href="/contact?source=Service%3A%20AI%20Voice%20Agents" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    Start Voice Agent Project →
                  </Link>
                </div>
              </div>
            </div>
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
