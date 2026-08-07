"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";

export default function ContactPage() {
  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-1 pt-32 px-6 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
              Start a Project
            </h1>
            <p className="text-lg text-[#8e9192] mb-12 leading-relaxed">
              I partner with modern brands to scale revenue without technical debt. Let&apos;s engineer the right solution for your business.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-[10px] text-white uppercase tracking-[0.2em] mb-2 bg-white/10 inline-block px-2 py-1 rounded-[2px]">Direct Contact</h3>
                <p className="text-white mt-2">
                  <a href="mailto:mudasar@imams.dev" className="hover:text-[#8e9192] transition-colors border-b border-white/20 pb-0.5">mudasar@imams.dev</a>
                </p>
              </div>
              
              <div>
                <h3 className="font-mono text-[10px] text-white uppercase tracking-[0.2em] mb-2 bg-white/10 inline-block px-2 py-1 rounded-[2px]">Fiverr Verification</h3>
                <p className="text-white mt-2">
                  <a href="https://www.fiverr.com/mi_devv" target="_blank" rel="noopener noreferrer" className="hover:text-[#8e9192] transition-colors border-b border-white/20 pb-0.5">@mi_devv (4.9★, 61 Reviews)</a>
                </p>
              </div>

              <div>
                <h3 className="font-mono text-[10px] text-white uppercase tracking-[0.2em] mb-2 bg-white/10 inline-block px-2 py-1 rounded-[2px]">Technical Consultation</h3>
                <p className="text-white mt-2">
                  <a href="https://calendly.com/mudasar-imam/consultation" target="_blank" rel="noopener noreferrer" className="hover:text-[#8e9192] transition-colors border-b border-white/20 pb-0.5">Book via Calendly</a>
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form className="bg-[#050505] border border-white/10 p-8 rounded-sm space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">Project Inquiry</h2>
              
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 text-white px-4 py-3 text-sm focus:border-white/30 focus:outline-none rounded-sm transition-colors" placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 text-white px-4 py-3 text-sm focus:border-white/30 focus:outline-none rounded-sm transition-colors" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest">Project Type</label>
                <select className="w-full bg-[#0a0a0a] border border-white/10 text-white px-4 py-3 text-sm focus:border-white/30 focus:outline-none rounded-sm transition-colors appearance-none cursor-pointer">
                  <option>Shopify Engineering</option>
                  <option>AI Automation & Agents</option>
                  <option>Full-Stack SaaS (Next.js)</option>
                  <option>Technical Optimization / Retainer</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest">Project Details</label>
                <textarea rows={5} className="w-full bg-[#0a0a0a] border border-white/10 text-white px-4 py-3 text-sm focus:border-white/30 focus:outline-none rounded-sm transition-colors resize-none" placeholder="Briefly describe your business challenge and technical requirements..."></textarea>
              </div>

              <button type="button" className="w-full px-8 py-4 bg-white text-black font-sans text-sm font-bold tracking-wide hover:bg-opacity-90 transition-all rounded-[2px] mt-4">
                Submit Inquiry
              </button>
            </form>
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
