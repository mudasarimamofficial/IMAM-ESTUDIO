"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";

export default function ExpertPortfolioPage() {
  const [bio, setBio] = useState("Lead Shopify Architect and Core Systems Developer.");
  const [headline, setHeadline] = useState("Specializing in Zero-JS Liquid Storefront optimizations.");
  const [gitLink, setGitLink] = useState("https://github.com/expert-dev");

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">PROFILE SETTINGS</span>
              <h1 className="font-sans text-2xl font-bold text-white mt-1">Brand Authority Builder</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Customize your expert identity card, document completed case studies, and sync GitHub repositories.
              </p>
            </div>

            {/* Profile configuration */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 bento-card p-6 rounded-lg border border-border flex flex-col gap-5">
                <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Expert Card Details</h3>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-[#8e9192]">Authority Headline</label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-[#8e9192]">Technical Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-[#8e9192]">GitHub Profile Connection</label>
                  <input
                    type="url"
                    value={gitLink}
                    onChange={(e) => setGitLink(e.target.value)}
                    className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                  />
                </div>

                <button className="py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 rounded-[2px]">
                  Publish Updates
                </button>
              </div>

              {/* Card Preview */}
              <div className="w-full lg:w-80 glass-panel p-6 rounded-lg border border-border flex flex-col gap-4">
                <span className="font-mono text-[8px] text-[#8e9192] uppercase">Live Card Preview</span>
                <div className="p-4 rounded border border-border bg-black flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 technical-grid opacity-20" />
                  <div className="z-10">
                    <h3 className="font-sans text-base font-bold text-white">Vetted Contributor</h3>
                    <p className="font-sans text-[11px] text-[#c4c7c8] mt-2">{headline}</p>
                    <p className="font-sans text-[11px] text-[#8e9192] mt-1 italic">&quot;{bio}&quot;</p>
                  </div>
                  <div className="pt-2 border-t border-[#111] flex justify-between items-center font-mono text-[9px] text-white/50">
                    <span>GIT: CONNECTED</span>
                    <span className="text-emerald-400">98.4% RATING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
