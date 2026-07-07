"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import { PricingEngine } from "@/lib/pricingEngine";

export default function HomePage() {
  // Personalization Engine State (Custom Engraving Block)
  const [engravingText, setEngravingText] = useState("IMAM OS V1");
  const [engravingFont, setEngravingFont] = useState("Geist Mono");
  const [metalFinish, setMetalFinish] = useState("matte-black"); // 'matte-black', 'brushed-steel', 'carbon'
  const [serviceTier, setServiceTier] = useState("shopify-expert"); // 'shopify-expert', 'ai-voice-agents', 'automation-workflows'
  const [marginSetting, setMarginSetting] = useState(-0.05); // Loss-leader default -5%

  const computedPricing = PricingEngine.calculate(serviceTier, marginSetting);

  const metalFinishes = [
    { id: "matte-black", name: "Matte Black", cost: 0, class: "bg-[#121414] border-neutral-700" },
    { id: "brushed-steel", name: "Brushed Steel", cost: 150, class: "bg-neutral-800 border-neutral-500" },
    { id: "carbon", name: "Carbon Fiber", cost: 250, class: "bg-[#0d0e0f] border-white/20" },
  ];

  const selectedFinishObj = metalFinishes.find(f => f.id === metalFinish) || metalFinishes[0];
  const finalPrice = Math.max(0, computedPricing.finalPrice + selectedFinishObj.cost);
  const finalSavings = Math.max(0, computedPricing.savingsVsMarket - selectedFinishObj.cost);

  return (
    <div className="flex-1 bg-black text-[#e3e2e2]">
      <TopNavBar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden hero-gradient technical-grid py-20 px-6">
          <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
            {/* Blinking availability badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full font-mono text-[10px] text-[#c4c7c8] uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Strategic Architecture
              </span>
            </div>

            <h1 className="font-sans text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-[1.1] tracking-tighter text-white">
              Engineering Global Trust in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8e8e8f]">
                Remote Technical Execution.
              </span>
            </h1>

            <p className="font-sans text-base md:text-lg text-[#c4c7c8] max-w-2xl mx-auto mb-10 leading-relaxed">
              Mudasar Imam is a Senior Full Stack Engineer & Shopify Lead Expert specializing in high-performance
              infrastructure, headless storefronts, and automated intelligence systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/buyer/proposal-builder"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-opacity-95 transition-all text-center rounded-[2px]"
              >
                Start Enterprise Consultation
              </Link>
              <Link
                href="/marketplace"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-border text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-white transition-all text-center rounded-[2px]"
              >
                Browse Vetted Experts
              </Link>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-border pt-8">
              <div className="flex flex-col items-center">
                <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">Availability</span>
                <span className="font-mono text-sm font-bold text-white mt-1">99.9% SLI</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">Stack Efficiency</span>
                <span className="font-mono text-sm font-bold text-white mt-1">Sub-200ms TTFB</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">Automation</span>
                <span className="font-mono text-sm font-bold text-white mt-1">n8n Swarms</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">Client Equity</span>
                <span className="font-mono text-sm font-bold text-white mt-1">$120M+ Managed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Personalization Engine Section (Custom Engraving Block) */}
        <section className="py-24 border-t border-border px-6 bg-[#040404]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Personalization Controls */}
              <div className="flex-1 flex flex-col justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] text-white bg-[#111] border border-border px-2.5 py-1 rounded uppercase tracking-widest">
                    Interactive personalize engine
                  </span>
                  <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white mt-4 tracking-tight">
                    Custom Platform Personalization Block
                  </h2>
                  <p className="font-sans text-xs text-[#8e9192] mt-2 leading-relaxed">
                    Configure your high-performance workspace node. Add an physical metal engraving indicator that is shipped directly to your deployment hub.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Service Tier selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] uppercase text-[#8e9192]">Select Service Architecture</label>
                    <select
                      value={serviceTier}
                      onChange={(e) => setServiceTier(e.target.value)}
                      className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                    >
                      <option value="shopify-expert">Shopify Lead Expert Headless storefront</option>
                      <option value="ai-voice-agents">Autonomous AI Voice Agent Swarm</option>
                      <option value="automation-workflows">Autonomous Systems Workflow Integration</option>
                    </select>
                  </div>

                  {/* Loss Leader Margin setting */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] uppercase text-[#8e9192]">Loss-Leader pricing Setting</label>
                    <div className="flex gap-2">
                      {[-0.1, -0.05, 0.0, 0.05].map((m) => (
                        <button
                          key={m}
                          onClick={() => setMarginSetting(m)}
                          className={`flex-1 font-mono text-[10px] py-1.5 rounded border transition-all ${
                            marginSetting === m
                              ? "bg-white text-black border-white"
                              : "bg-[#0a0a0a] text-[#c4c7c8] border-border hover:border-white/30"
                          }`}
                        >
                          {m * 100}% Margin
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Engraving Text */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] uppercase text-[#8e9192]">Plate Engraving Text</label>
                    <input
                      type="text"
                      maxLength={24}
                      value={engravingText}
                      onChange={(e) => setEngravingText(e.target.value)}
                      placeholder="e.g. IMAM OS V1"
                      className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                    />
                  </div>

                  {/* Engraving Font */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] uppercase text-[#8e9192]">Plate Font</label>
                    <div className="flex gap-2">
                      {["Geist Mono", "Geist Sans", "Clinical Sans"].map((font) => (
                        <button
                          key={font}
                          onClick={() => setEngravingFont(font)}
                          className={`flex-1 font-mono text-[10px] py-1.5 rounded border transition-all ${
                            engravingFont === font
                              ? "bg-white text-black border-white"
                              : "bg-[#0a0a0a] text-[#c4c7c8] border-border hover:border-white/30"
                          }`}
                        >
                          {font}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Metal Finishes */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] uppercase text-[#8e9192]">Metal Finish Plate</label>
                    <div className="flex gap-2">
                      {metalFinishes.map((finish) => (
                        <button
                          key={finish.id}
                          onClick={() => setMetalFinish(finish.id)}
                          className={`flex-1 font-mono text-[10px] py-1.5 rounded border transition-all ${
                            metalFinish === finish.id
                              ? "bg-white text-black border-white"
                              : "bg-[#0a0a0a] text-[#c4c7c8] border-border hover:border-white/30"
                          }`}
                        >
                          {finish.name} {finish.cost > 0 && `(+$${finish.cost})`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Personalization Render Preview */}
              <div className="flex-1 glass-panel border border-border rounded-lg p-6 flex flex-col justify-between min-h-[380px]">
                {/* 3D Metal Plate Preview Card */}
                <div className="flex-1 flex flex-col justify-center items-center p-8 bg-black rounded border border-[#161616] relative overflow-hidden">
                  <div className="absolute inset-0 technical-grid opacity-20" />
                  <div className="relative z-10 w-full max-w-sm aspect-[3/1.5] border border-white/20 rounded shadow-2xl flex flex-col justify-between p-4 transition-all duration-300 transform hover:scale-102 bg-gradient-to-br from-[#1b1c1c] to-[#0a0a0a] text-white">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[8px] text-white/50 tracking-wider">IMAM ESTUDIO OS</span>
                      <span className="font-mono text-[8px] text-emerald-400">99.9% SLI</span>
                    </div>

                    <div className="text-center my-auto">
                      <div
                        className="text-sm font-semibold tracking-widest text-white uppercase"
                        style={{
                          fontFamily:
                            engravingFont === "Geist Mono"
                              ? "var(--font-geist-mono)"
                              : engravingFont === "Geist Sans"
                              ? "var(--font-geist-sans)"
                              : "sans-serif",
                        }}
                      >
                        {engravingText || "NO ENGRAVING"}
                      </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-white/10 pt-2">
                      <span className="font-mono text-[7px] text-white/40">FINISH: {metalFinish.toUpperCase()}</span>
                      <span className="font-mono text-[7px] text-white/40">DEV ID: 2026-STABLE</span>
                    </div>
                  </div>
                </div>

                {/* Ledger calculations breakdown */}
                <div className="mt-6 pt-4 border-t border-[#111111] flex flex-col gap-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8e9192]">Underlying Market Cost</span>
                    <span className="font-mono text-white">${computedPricing.totalBaseCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8e9192]">Loss-Leader Margin ({marginSetting * 100}%)</span>
                    <span className="font-mono text-emerald-400">
                      -${Math.abs(computedPricing.totalBaseCost * marginSetting).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8e9192]">Selected Finish plate</span>
                    <span className="font-mono text-white">+${selectedFinishObj.cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-white/10 pt-2 font-bold">
                    <span className="text-white">Total Dynamic Price</span>
                    <span className="font-mono text-white">${finalPrice.toFixed(2)}</span>
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 p-2 rounded text-center">
                    Savings vs standard market agency rate: ${finalSavings.toFixed(2)} ({computedPricing.savingsPercentage}% saving)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-sans text-3xl font-extrabold text-white tracking-tight">Engineering Feats</h2>
              <p className="font-sans text-xs text-[#8e9192] mt-1 max-w-md">
                Precision-engineered systems that redefine digital commerce and operational intelligence.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest">
              Case Studies (01-02)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case Study 1 */}
            <div className="bento-card rounded-lg p-6 flex flex-col justify-between h-[320px] md:col-span-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31')] bg-cover opacity-10 bg-center" />
              <div className="flex justify-between items-start z-10">
                <span className="font-mono text-[10px] bg-[#111] border border-border px-2 py-0.5 rounded text-[#8e9192]">
                  Liquid Architecture
                </span>
                <span className="font-mono text-[10px] text-white">99/100 LIGHTHOUSE</span>
              </div>
              <div className="z-10 mt-auto">
                <h3 className="font-sans text-lg font-bold text-white mb-2">Zero-JS Headless Commerce</h3>
                <p className="font-sans text-xs text-[#c4c7c8] leading-relaxed max-w-md mb-4">
                  Built a proprietary rendering engine for high-traffic Shopify stores achieving sub-second loads through native template optimization.
                </p>
                <Link
                  href="/services/shopify-expert"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-white hover:underline uppercase"
                >
                  View Technical Brief
                  <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bento-card rounded-lg p-6 flex flex-col justify-between h-[320px]">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] bg-[#111] border border-border px-2 py-0.5 rounded text-[#8e9192]">
                  Edge Cached
                </span>
                <span className="font-mono text-[10px] text-[#8e9192] font-semibold">0.18s TTFB</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-sans text-base font-bold text-white mb-2">Sub-second Next.js Storefront</h3>
                <p className="font-sans text-xs text-[#c4c7c8] leading-relaxed mb-4">
                  Global edge-cached storefronts with real-time inventory synchronization.
                </p>
                <Link
                  href="/services/ai-voice-agents"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-white hover:underline uppercase"
                >
                  View System Spec
                  <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-sans text-base font-bold tracking-tighter text-white">IMAM ESTUDIO</div>
          <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest flex gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Vision Specs
            </Link>
            <Link href="/marketplace" className="hover:text-white transition-colors">
              Talent Directory
            </Link>
            <Link href="/admin/system" className="hover:text-white transition-colors">
              Sys Diagnostician
            </Link>
          </div>
          <div className="font-mono text-[9px] text-[#8e9192] tracking-wider">
            © 2026 IMAM ESTUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
