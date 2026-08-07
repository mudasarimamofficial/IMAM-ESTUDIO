"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";

export default function HomePage() {
  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans">
      <TopNavBar />

      <main className="pt-16">
        
        {/* SECTION 01 — HERO */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden py-20 px-6 border-b border-white/5">
          {/* Subtle background glow/noise */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-12">
            <h2 className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.3em] mb-8">
              Imam Estudio
            </h2>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 max-w-5xl leading-[1.05] tracking-tighter text-white">
              Elite AI Automation & <br className="hidden md:block"/> Technical Engineering Studio.
            </h1>

            <p className="text-base md:text-lg text-[#8e9192] max-w-2xl mx-auto mb-12 leading-relaxed">
              I engineer high-performance commerce systems, AI automation, and full-stack digital products for businesses that need more than off-the-shelf solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-sans text-sm font-bold tracking-wide hover:bg-opacity-90 transition-all text-center rounded-[2px]"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-sans text-sm font-bold tracking-wide hover:border-white/50 transition-all text-center rounded-[2px]"
              >
                View My Work
              </Link>
            </div>
            
            <div className="mt-8">
              <a href="https://calendly.com/mudasar-imam/consultation" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-[#8e9192] hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50">
                Book a Technical Consultation
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 02 — TRUST / CREDIBILITY STRIP */}
        <section className="border-b border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden">
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-sans font-bold text-white text-lg">4.9 ★</span>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase tracking-wider">Client Rating</span>
                <span className="font-mono text-[9px] text-white uppercase tracking-wider">61 Verified Reviews</span>
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
              AI Automation
            </span>
          </div>
        </section>

        {/* SECTION 03 — SELECTED WORK */}
        <section className="py-24 px-6 border-b border-white/5 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold tracking-tighter text-white mb-4">Selected Engineering Work</h2>
              <p className="text-sm text-[#8e9192] max-w-xl">
                Case studies demonstrating custom architecture, native feature development, and autonomous systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/493991616/original/86712b96d3f090661b268a8e39f3c7db81967c35.png" alt="Headless Shopify" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[9px] px-2 py-1 bg-white/5 border border-white/10 text-white rounded-[2px] uppercase">Shopify Engineering</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Headless Shopify Architecture</h3>
                <p className="text-sm text-[#8e9192]">Sub-second edge-cached storefronts bypassing standard Shopify limitations.</p>
              </div>

              {/* Project 2 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495364262/original/522d3fc9e1da6d765067f8bf78fdf8e1b33a8690.png" alt="AI Agent Systems" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[9px] px-2 py-1 bg-white/5 border border-white/10 text-white rounded-[2px] uppercase">AI Automation</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Multi-Agent Business Workflows</h3>
                <p className="text-sm text-[#8e9192]">Autonomous AI agents performing lead qualification and data ingestion via n8n.</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/work" className="font-mono text-[11px] text-white hover:text-[#8e9192] transition-colors border-b border-white/20 hover:border-transparent pb-1">
                View All Case Studies →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 04 — WHAT I ENGINEER (CAPABILITIES) */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tighter text-white mb-16">Engineering Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Capability 1 */}
              <div className="border-l border-white/10 pl-6">
                <h3 className="text-lg font-bold text-white mb-4">Shopify Engineering</h3>
                <ul className="space-y-3 font-sans text-sm text-[#8e9192]">
                  <li>Custom Liquid development</li>
                  <li>Shopify 2.0 architecture</li>
                  <li>Native feature development</li>
                  <li>App replacement logic</li>
                  <li>Conversion optimization</li>
                  <li>Headless commerce</li>
                </ul>
              </div>
              
              {/* Capability 2 */}
              <div className="border-l border-white/10 pl-6">
                <h3 className="text-lg font-bold text-white mb-4">AI Automation & Agents</h3>
                <ul className="space-y-3 font-sans text-sm text-[#8e9192]">
                  <li>n8n business automation</li>
                  <li>Multi-agent AI systems</li>
                  <li>AI customer support agents</li>
                  <li>AI voice receptionists</li>
                  <li>Appointment booking flows</li>
                  <li>Custom LLM integrations</li>
                </ul>
              </div>

              {/* Capability 3 */}
              <div className="border-l border-white/10 pl-6">
                <h3 className="text-lg font-bold text-white mb-4">Full-Stack Product Engineering</h3>
                <ul className="space-y-3 font-sans text-sm text-[#8e9192]">
                  <li>Next.js / React</li>
                  <li>SaaS MVP development</li>
                  <li>B2B web applications</li>
                  <li>Custom Dashboards</li>
                  <li>Internal business tools</li>
                  <li>Supabase architecture</li>
                </ul>
              </div>

              {/* Capability 4 */}
              <div className="border-l border-white/10 pl-6">
                <h3 className="text-lg font-bold text-white mb-4">Technical Optimization</h3>
                <ul className="space-y-3 font-sans text-sm text-[#8e9192]">
                  <li>Performance optimization</li>
                  <li>Technical debt reduction</li>
                  <li>WCAG / ADA Accessibility</li>
                  <li>CRO architecture</li>
                  <li>Technical audits</li>
                  <li>Bug resolution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05 — FOUNDER PROFILE */}
        <section className="py-32 px-6 border-b border-white/5 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-extrabold tracking-tighter text-white mb-6">Meet Mudasar Imam</h2>
              <div className="font-mono text-[10px] text-white uppercase tracking-[0.2em] mb-8 bg-white/10 inline-block px-3 py-1.5 rounded-[2px] border border-white/20">
                Founder & Lead Engineer
              </div>
              <div className="w-full aspect-square bg-[#0a0a0a] border border-white/10 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')] bg-cover bg-center mix-blend-luminosity grayscale"></div>
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-[#8e9192]">
                  [PORTRAIT RESERVED]
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 lg:pt-20">
              <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-10">
                &quot;I engineer high-converting e-commerce systems and AI-driven automations. I partner with modern brands to scale revenue without technical debt.&quot;
              </p>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-[#8e9192] text-sm md:text-base leading-loose mb-6">
                  I don&apos;t simply install apps or assemble templates. I engineer production-ready systems designed around performance, maintainability, automation, and long-term scalability. 
                </p>
                <p className="text-[#8e9192] text-sm md:text-base leading-loose mb-10">
                  Whether replacing bloated Shopify apps with blazing-fast native code, building a custom SaaS MVP from the ground up, or orchestrating a swarm of AI voice agents to handle your inbound sales, I provide the technical depth required to solve difficult business problems.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Link href="/about" className="px-6 py-3 bg-white text-black font-sans text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all rounded-[2px]">
                  Read Engineering Philosophy
                </Link>
                <a href="https://www.fiverr.com/mi_devv" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-[#8e9192] hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
                  Verify Fiverr Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — FEATURED SERVICES (Premium Shift) */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tighter text-white mb-4">Engineering Services</h2>
                <p className="text-sm text-[#8e9192] max-w-xl">
                  Projects are scoped based on complexity, business requirements, architecture, and expected outcomes. Below are core engagement models.
                </p>
              </div>
              <Link href="/services" className="font-mono text-[11px] text-white hover:text-[#8e9192] transition-colors whitespace-nowrap">
                View All Engagements →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[18px] text-white">code</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Custom Shopify Development</h3>
                <p className="text-sm text-[#8e9192] mb-8 leading-relaxed">
                  Bespoke Liquid sections, native app replacements, and advanced theme architecture for high-volume stores.
                </p>
                <a href="https://www.fiverr.com/mi_devv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                  Inquire <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
              
              {/* Service 2 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[18px] text-white">smart_toy</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">AI & Voice Agents</h3>
                <p className="text-sm text-[#8e9192] mb-8 leading-relaxed">
                  Autonomous agents for sales, support, and lead qualification, integrated directly into your business workflows.
                </p>
                <a href="https://www.fiverr.com/mi_devv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                  Inquire <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>

              {/* Service 3 */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-8 hover:border-white/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[18px] text-white">web</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">SaaS MVP Engineering</h3>
                <p className="text-sm text-[#8e9192] mb-8 leading-relaxed">
                  End-to-end full-stack web applications built on Next.js, React, and Supabase for ultimate scalability.
                </p>
                <a href="https://www.fiverr.com/mi_devv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[10px] text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                  Inquire <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
            
            {/* Tech Retainer Highlight */}
            <div className="mt-12 p-6 border border-white/10 bg-[#080808] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Ongoing Engineering Partner</h4>
                <p className="text-xs text-[#8e9192]">Retain my technical expertise for continuous architecture improvements and business automation.</p>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <span className="font-mono text-sm text-white bg-white/10 px-3 py-1 rounded-[2px]">$18 / Hour</span>
                <Link href="/contact" className="font-sans text-xs font-bold text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors rounded-[2px]">
                  Request Retainer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07 — ENGINEERING APPROACH */}
        <section className="py-24 px-6 border-b border-white/5 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tighter text-white mb-16 text-center">The Engineering Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <span className="font-mono text-4xl text-white/10 font-bold mb-4">01</span>
                <h3 className="text-base font-bold text-white mb-2">Discover</h3>
                <p className="text-xs text-[#8e9192]">Deeply understand the business problem, constraints, and core objectives.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-mono text-4xl text-white/10 font-bold mb-4">02</span>
                <h3 className="text-base font-bold text-white mb-2">Architect</h3>
                <p className="text-xs text-[#8e9192]">Design the right technical solution using modern, scalable primitives.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-mono text-4xl text-white/10 font-bold mb-4">03</span>
                <h3 className="text-base font-bold text-white mb-2">Engineer</h3>
                <p className="text-xs text-[#8e9192]">Build production-ready, clean, and highly performant systems.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-mono text-4xl text-white/10 font-bold mb-4">04</span>
                <h3 className="text-base font-bold text-white mb-2">Optimize</h3>
                <p className="text-xs text-[#8e9192]">Measure outcomes, refine UX, and aggressively eliminate technical debt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 08 — COLLABORATION / MALIK */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <span className="font-mono text-[10px] text-white uppercase tracking-[0.2em] mb-4 bg-white/10 inline-block px-3 py-1.5 rounded-[2px] border border-white/20">
                Extended Engineering Capability
              </span>
              <h2 className="text-3xl font-extrabold tracking-tighter text-white mb-4">Engineering Collaboration</h2>
              <p className="text-sm text-[#8e9192] leading-relaxed mb-6">
                For projects requiring extensive frontend design systems and complex UI/UX architecture, I collaborate with Malik Jahanzaib—a Senior UI/UX Architect and Full-Stack Engineer. 
                <br/><br/>
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

        {/* SECTION 09 — FINAL CTA */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
              Have a difficult technical problem?
            </h2>
            <p className="text-lg text-[#8e9192] mb-12">
              I don&apos;t need another freelancer. I need this engineered correctly.<br/>
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
            © {new Date().getFullYear()} MUDASAR IMAM.<br/>ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
