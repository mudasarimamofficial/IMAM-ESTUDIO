"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex-1 bg-black text-[#e3e2e2]">
      <TopNavBar />

      <main className="pt-16 px-6 max-w-5xl mx-auto py-20">
        {/* Header section */}
        <div className="border-b border-border pb-8 mb-12">
          <span className="font-mono text-[10px] text-white bg-[#111] border border-border px-2.5 py-1 rounded uppercase tracking-widest">
            Agency-as-a-Marketplace Vision
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tighter leading-tight">
            Redefining High-Ticket Digital Execution.
          </h1>
          <p className="font-sans text-sm text-[#8e9192] mt-3 max-w-2xl leading-relaxed">
            IMAM ESTUDIO bridges the gap between premium agency quality and freelancer agility. We vet developers
            through a rigorous automated proctoring crucible and safeguard transactions with milestone-based smart escrows.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-panel p-6 rounded-lg border border-border flex flex-col gap-3">
            <span className="material-symbols-outlined text-white text-[24px]">verified_user</span>
            <h3 className="font-sans text-base font-bold text-white tracking-tight">The Vetting Crucible</h3>
            <p className="font-sans text-xs text-[#8e9192] leading-relaxed">
              We monitor development inputs, clipboard changes, and window focus during our screening test. Only the top
              1.2% of applicants receive the Verified Expert badge.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-lg border border-border flex flex-col gap-3">
            <span className="material-symbols-outlined text-white text-[24px]">account_balance_wallet</span>
            <h3 className="font-sans text-base font-bold text-white tracking-tight">Smart Escrow Ledgers</h3>
            <p className="font-sans text-xs text-[#8e9192] leading-relaxed">
              Milestone budgets are deposited into a secure ledger. Funds are released automatically only after proof-of-work
              audits, or locked during disputes for arbitrator review.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-lg border border-border flex flex-col gap-3">
            <span className="material-symbols-outlined text-white text-[24px]">toll</span>
            <h3 className="font-sans text-base font-bold text-white tracking-tight">Loss-Leader Models</h3>
            <p className="font-sans text-xs text-[#8e9192] leading-relaxed">
              By calculating pricing directly on underlying developer and hosting costs with close to 0% margins, we bypass
              traditional high-markup agency baseline charges.
            </p>
          </div>
        </div>

        {/* Swarm Architecture Detail */}
        <div className="bento-card p-8 rounded-lg border border-border flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1">
            <h2 className="font-sans text-xl md:text-2xl font-extrabold text-white tracking-tight mb-3">
              Automated AI Swarm Orchestrations
            </h2>
            <p className="font-sans text-xs text-[#c4c7c8] leading-relaxed mb-6">
              Our workspaces integrate with automated workflows (using n8n execution blocks) to handle deployments, run build gates,
              send Slack communication notifications, and monitor server statuses dynamically.
            </p>
            <Link
              href="/marketplace"
              className="inline-block px-6 py-3 bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-opacity-90 rounded-[2px]"
            >
              Browse Expert Directory
            </Link>
          </div>
          <div className="w-full md:w-72 aspect-square bg-[#0d0e0f] rounded border border-border flex flex-col justify-center items-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 technical-grid opacity-30" />
            <div className="z-10 text-center flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[48px] text-[#8e9192] animate-spin-slow">
                settings_input_component
              </span>
              <span className="font-mono text-[10px] text-white mt-2">ACTIVE WORKFLOWS</span>
              <span className="font-mono text-xs font-bold text-emerald-400">99.9% SUCCESS RATE</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-sans text-base font-bold tracking-tighter text-white">IMAM ESTUDIO</div>
          <div className="font-mono text-[10px] text-[#8e9192] uppercase tracking-widest flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Homepage
            </Link>
            <Link href="/marketplace" className="hover:text-white transition-colors">
              Talent Directory
            </Link>
            <Link href="/admin/system" className="hover:text-white transition-colors">
              Sys Diagnostics
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
