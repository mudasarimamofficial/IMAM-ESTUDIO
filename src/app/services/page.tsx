"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-1 pt-32 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
            Engineering Capabilities
          </h1>
          <p className="text-lg text-[#8e9192] max-w-2xl mb-16 leading-relaxed">
            I engineer high-performance commerce systems, AI automation, and full-stack digital products for businesses that need more than off-the-shelf solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-white/10 bg-[#050505] rounded-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Shopify Engineering</h2>
              <p className="text-sm text-[#8e9192] mb-6">Custom Liquid sections, CRO redesigns, native app replacements, performance optimization, advanced Shopify architecture.</p>
              <Link href="/contact" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">Start a Shopify Project →</Link>
            </div>
            
            <div className="p-8 border border-white/10 bg-[#050505] rounded-sm">
              <h2 className="text-2xl font-bold text-white mb-4">AI Automation & Agents</h2>
              <p className="text-sm text-[#8e9192] mb-6">n8n workflows, custom AI agents, multi-agent systems, AI voice agents and business automation.</p>
              <Link href="/contact" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">Start an AI Project →</Link>
            </div>

            <div className="p-8 border border-white/10 bg-[#050505] rounded-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Full-Stack Product Engineering</h2>
              <p className="text-sm text-[#8e9192] mb-6">Next.js, React, Supabase and production-ready SaaS web applications.</p>
              <Link href="/contact" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">Start a SaaS Project →</Link>
            </div>

            <div className="p-8 border border-white/10 bg-[#050505] rounded-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Technical Optimization</h2>
              <p className="text-sm text-[#8e9192] mb-6">Bug fixing, performance optimization, Accessibility/ADA, technical audits, technical debt reduction.</p>
              <Link href="/contact" className="font-mono text-[10px] uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">Start an Optimization Project →</Link>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-white/5 py-12 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-sans text-lg font-extrabold tracking-tighter text-white">IMAM ESTUDIO</div>
          <div className="font-mono text-[9px] text-[#8e9192] tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} MUDASAR IMAM.<br/>ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
