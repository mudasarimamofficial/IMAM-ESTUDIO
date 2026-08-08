"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-1 pt-32 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
            Selected Work
          </h1>
          <p className="text-lg text-[#8e9192] max-w-2xl mb-16 leading-relaxed">
            Case studies demonstrating custom architecture, native feature development, and autonomous systems.
          </p>
          
          <div className="flex flex-col gap-16">
            {/* Project 1 */}
            <div className="border border-white/10 bg-[#050505] rounded-sm overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 relative min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/493991616/original/86712b96d3f090661b268a8e39f3c7db81967c35.png" alt="Headless Shopify" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase tracking-widest mb-4">Shopify Engineering</span>
                <h2 className="text-2xl font-bold text-white mb-4">Headless Shopify Architecture</h2>
                <div className="space-y-4 text-sm text-[#8e9192] mb-8">
                  <p><strong className="text-white">Challenge:</strong> Complex bundle-building experience needed without unnecessary app dependency.</p>
                  <p><strong className="text-white">Engineering:</strong> Native Shopify architecture + custom frontend logic.</p>
                  <p><strong className="text-white">Result:</strong> Sub-second edge-cached storefronts bypassing standard Shopify limitations.</p>
                </div>
                <Link href="/contact" className="inline-block px-6 py-3 bg-white text-black font-sans text-xs font-bold uppercase text-center hover:bg-opacity-90 transition-all rounded-[2px] w-max">
                  Inquire About Similar Project
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-white/10 bg-[#050505] rounded-sm overflow-hidden flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2 relative min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495364262/original/522d3fc9e1da6d765067f8bf78fdf8e1b33a8690.png" alt="AI Agent Systems" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase tracking-widest mb-4">AI Automation</span>
                <h2 className="text-2xl font-bold text-white mb-4">Multi-Agent Business Workflows</h2>
                <div className="space-y-4 text-sm text-[#8e9192] mb-8">
                  <p><strong className="text-white">Challenge:</strong> High volume of unqualified leads causing support bottlenecks.</p>
                  <p><strong className="text-white">Engineering:</strong> Autonomous AI agents performing lead qualification and data ingestion via n8n.</p>
                  <p><strong className="text-white">Result:</strong> 24/7 autonomous support and qualification without human intervention.</p>
                </div>
                <Link href="/contact" className="inline-block px-6 py-3 bg-white text-black font-sans text-xs font-bold uppercase text-center hover:bg-opacity-90 transition-all rounded-[2px] w-max">
                  Inquire About Similar Project
                </Link>
              </div>
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
