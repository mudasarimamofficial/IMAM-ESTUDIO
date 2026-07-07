import React from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";
import { PricingEngine, servicesCosts } from "@/lib/pricingEngine";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  // Retrieve service from our catalog
  const serviceInfo = servicesCosts[slug];

  if (!serviceInfo) {
    return (
      <div className="flex-1 bg-black text-[#e3e2e2]">
        <TopNavBar />
        <main className="pt-24 px-6 text-center max-w-5xl mx-auto">
          <h1 className="font-sans text-2xl font-bold text-white">Service Not Found</h1>
          <p className="font-sans text-xs text-[#8e9192] mt-2">
            The service node requested does not exist in the platform registry.
          </p>
          <Link href="/" className="mt-4 inline-block text-white hover:underline text-xs font-mono">
            Return to Homepage
          </Link>
        </main>
      </div>
    );
  }

  // Calculate default pricing breakdown (5% loss leader margin)
  const pricingBreakdown = PricingEngine.calculate(slug, -0.05);

  return (
    <div className="flex-1 bg-black text-[#e3e2e2]">
      <TopNavBar />

      <main className="pt-16 px-6 max-w-5xl mx-auto py-20">
        {/* Header Block */}
        <div className="border-b border-border pb-8 mb-12">
          <span className="font-mono text-[10px] text-white bg-[#111] border border-border px-2.5 py-1 rounded uppercase tracking-widest">
            Detailed Service Specifications
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-extrabold text-white mt-4 tracking-tighter leading-tight">
            {serviceInfo.name}
          </h1>
          <p className="font-sans text-sm text-[#8e9192] mt-3 max-w-2xl leading-relaxed">
            Configure, calculate, and secure high-ticket systems architecture. Our pricing scales directly on underlying infrastructure and developer parameters.
          </p>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-sans text-lg font-bold text-white tracking-tight mb-4">Architecture Highlights</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-white text-[20px] mt-0.5">check_circle</span>
                <div>
                  <h4 className="font-sans text-xs font-bold text-white">Full-Stack Custom Engine</h4>
                  <p className="font-sans text-[11px] text-[#8e9192] mt-0.5 leading-relaxed">
                    Custom built components utilizing Next.js App Router, Tailwind CSS, and localized serverless architectures.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-white text-[20px] mt-0.5">check_circle</span>
                <div>
                  <h4 className="font-sans text-xs font-bold text-white">Real-Time Data Streams</h4>
                  <p className="font-sans text-[11px] text-[#8e9192] mt-0.5 leading-relaxed">
                    Integrated event telemetry syncing state values continuously across whiteboard nodes and messaging frames.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-white text-[20px] mt-0.5">check_circle</span>
                <div>
                  <h4 className="font-sans text-xs font-bold text-white">Automated Deployment Pipeline</h4>
                  <p className="font-sans text-[11px] text-[#8e9192] mt-0.5 leading-relaxed">
                    Build check compilation guarantees 0% production crash rate with automatic Vercel sync handshakes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Matrix Block */}
          <div className="glass-panel p-6 rounded-lg border border-border flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] text-[#8e9192] uppercase tracking-wider">Pricing Architecture</span>
              <h3 className="font-sans text-base font-bold text-white mt-1">Aggressive Loss-Leader Breakdown</h3>
              <p className="font-sans text-[11px] text-[#8e9192] mt-2 leading-relaxed">
                By bypassing high corporate markups, we deliver absolute engineering quality directly proportional to active resource consumption.
              </p>
            </div>

            <div className="my-6 flex flex-col gap-3">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#8e9192]">Infrastructure Overhead</span>
                <span className="text-white">${serviceInfo.underlyingCosts.infrastructure.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#8e9192]">Direct Developer Rate</span>
                <span className="text-white">${serviceInfo.underlyingCosts.baseTalent.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#8e9192]">Vetting & Project Operations</span>
                <span className="text-white">${serviceInfo.underlyingCosts.operations.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs font-mono border-t border-white/10 pt-2 font-bold">
                <span className="text-emerald-400">Loss-Leader Margin (-5%)</span>
                <span className="text-emerald-400">
                  -${Math.abs(pricingBreakdown.totalBaseCost * -0.05).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-mono border-t border-white/20 pt-2 font-black">
                <span className="text-white">IMAM COST-PRICE</span>
                <span className="text-white">${pricingBreakdown.finalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-[#111111] pt-4 flex flex-col gap-3">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-[#8e9192]">Standard Agency Price</span>
                <span className="text-rose-400 line-through">${serviceInfo.marketReferencePrice.toFixed(2)}</span>
              </div>
              <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 p-2 rounded text-center">
                Total Budget Savings: ${pricingBreakdown.savingsVsMarket.toFixed(2)} ({pricingBreakdown.savingsPercentage}% lower)
              </div>

              <Link
                href={`/buyer/proposal-builder?service=${slug}`}
                className="w-full text-center py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 rounded-[2px]"
              >
                Initiate Architecture Proposal
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
