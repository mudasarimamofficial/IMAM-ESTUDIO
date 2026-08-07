"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

export default function ProcessPage() {
  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-1 pt-32 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
            Engineering Process
          </h1>
          <p className="text-lg text-[#8e9192] max-w-2xl mb-16 leading-relaxed">
            I don&apos;t write code until I understand the business logic. Every project follows a strict four-phase engineering approach to ensure maintainable, high-performance delivery.
          </p>

          <div className="space-y-12">
            <div className="flex gap-8 border-l border-white/10 pl-8 relative">
              <span className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center font-mono text-xs text-white">01</span>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Discover</h2>
                <p className="text-[#8e9192] leading-relaxed">
                  Deeply understand the business problem, technical constraints, and core objectives. We evaluate the current tech stack, identify bottlenecks, and define clear success metrics before any architecture is proposed.
                </p>
              </div>
            </div>

            <div className="flex gap-8 border-l border-white/10 pl-8 relative">
              <span className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center font-mono text-xs text-white">02</span>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Architect</h2>
                <p className="text-[#8e9192] leading-relaxed">
                  Design the right technical solution using modern, scalable primitives. This involves database schema design, selecting the optimal framework (Next.js vs Shopify Liquid), and designing the automation workflows (n8n, AI APIs).
                </p>
              </div>
            </div>

            <div className="flex gap-8 border-l border-white/10 pl-8 relative">
              <span className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center font-mono text-xs text-white">03</span>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Engineer</h2>
                <p className="text-[#8e9192] leading-relaxed">
                  Build production-ready, clean, and highly performant systems. Development is executed with a focus on code quality, security, and edge-case handling. Regular staging reviews ensure alignment.
                </p>
              </div>
            </div>

            <div className="flex gap-8 border-l-0 pl-8 relative">
              <span className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center font-mono text-xs text-white">04</span>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Optimize</h2>
                <p className="text-[#8e9192] leading-relaxed">
                  Measure outcomes, refine UX, and aggressively eliminate technical debt. Post-launch, the system is monitored for performance metrics, accessibility (WCAG), and conversion rate optimization.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-sans text-sm font-bold tracking-wide hover:bg-opacity-90 transition-all text-center rounded-[2px]">
              Ready to begin? Start a Project
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
