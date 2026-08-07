"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-1 pt-32 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
            Engineering Philosophy
          </h1>
          
          <div className="prose prose-invert prose-p:text-[#8e9192] prose-p:leading-relaxed prose-headings:text-white prose-headings:tracking-tight max-w-none">
            <h3 className="text-xl font-bold mt-12 mb-4">Mudasar Imam</h3>
            <p className="font-mono text-[10px] text-white uppercase tracking-[0.2em] mb-8 bg-white/10 inline-block px-3 py-1.5 rounded-[2px] border border-white/20">
              Founder / Senior Full Stack Engineer / AI Automation Architect
            </p>
            
            <p>
              I don&apos;t simply install apps, assemble templates, or write isolated code. I engineer production-ready systems designed around performance, maintainability, automation, conversion, and long-term scalability.
            </p>
            <p>
              Whether you need a 24/7 AI sales employee, custom n8n API integrations, or elite technical consulting, I deliver enterprise-grade architecture. Let&apos;s automate your business.
            </p>

            <h3 className="text-xl font-bold mt-12 mb-4">Technology Stack</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-[11px] text-[#8e9192] list-none p-0">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>Shopify</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>Liquid</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>TypeScript</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>React</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>Next.js</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>Supabase</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>n8n</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>AI APIs</li>
            </ul>

            <h3 className="text-xl font-bold mt-16 mb-4" id="team">Engineering Collaboration</h3>
            <p>
              For projects requiring deep UI/UX architecture and extensive frontend design systems, I collaborate directly with Malik Jahanzaib—a Senior UI/UX Architect and Full-Stack Engineer. This allows Imam Estudio to tackle massive enterprise transformations while maintaining the quality of a boutique engineering studio.
            </p>
          </div>
          
          <div className="mt-16 pt-12 border-t border-white/10">
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-sans text-sm font-bold tracking-wide hover:bg-opacity-90 transition-all text-center rounded-[2px]">
              Start a Project
            </Link>
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
