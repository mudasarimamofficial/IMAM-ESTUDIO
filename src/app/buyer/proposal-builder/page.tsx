"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import { PricingEngine, servicesCosts } from "@/lib/pricingEngine";

interface CustomMilestone {
  title: string;
  amount: number;
}

export default function ProposalBuilderPage() {
  // Proposal State
  const [projectName, setProjectName] = useState("");
  const [projectScope, setProjectScope] = useState("");
  const [selectedService, setSelectedService] = useState("shopify-expert");
  const [customMilestones, setCustomMilestones] = useState<CustomMilestone[]>([
    { title: "Initial System Architecture Architecture Spec", amount: 1500 },
    { title: "Production Build & Deployment Gateway", amount: 2500 },
  ]);
  const [newMilestoneTitle, setNewMilestoneTitle] = useState("");
  const [newMilestoneAmount, setNewMilestoneAmount] = useState(0);

  // Pricing calculations
  const computedPricing = PricingEngine.calculate(selectedService, -0.05);
  const milestoneTotal = customMilestones.reduce((acc, m) => acc + m.amount, 0);

  const handleAddMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMilestoneTitle.trim() || newMilestoneAmount <= 0) return;
    setCustomMilestones((prev) => [
      ...prev,
      { title: newMilestoneTitle, amount: newMilestoneAmount },
    ]);
    setNewMilestoneTitle("");
    setNewMilestoneAmount(0);
  };

  const handleRemoveMilestone = (idx: number) => {
    setCustomMilestones((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">ACQUISITION LAYER</span>
              <h1 className="font-sans text-2xl font-bold text-white mt-1">High-Ticket Proposal Builder</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Configure your system parameters, select engineering nodes, and compute loss-leader cost matrix bounds.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Scope form */}
              <div className="flex-1 bento-card p-6 rounded-lg border border-border flex flex-col gap-5">
                <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Project Specifications</h3>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-[#8e9192]">Contract Project Title</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g. headless Shopify storefront node"
                    className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-[#8e9192]">Select Base Architecture Template</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                  >
                    <option value="shopify-expert">Shopify Lead Expert Headless Storefront</option>
                    <option value="ai-voice-agents">Autonomous AI Voice Agent Swarm</option>
                    <option value="automation-workflows">Autonomous Systems Workflow Integration</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-[#8e9192]">System Requirements Scope</label>
                  <textarea
                    value={projectScope}
                    onChange={(e) => setProjectScope(e.target.value)}
                    rows={4}
                    placeholder="Describe specific functional blocks, API endpoints, or database requirements..."
                    className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-sans"
                  />
                </div>

                {/* Milestone Builder */}
                <div className="border-t border-[#111] pt-4 flex flex-col gap-4">
                  <h4 className="font-mono text-[10px] uppercase text-[#8e9192] tracking-wider">Milestone Breakdown</h4>

                  <div className="flex flex-col gap-2">
                    {customMilestones.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center p-3 rounded border border-border bg-black text-xs font-mono"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#8e9192]">{idx + 1}</span>
                          <span className="text-white">{m.title}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-white font-bold">${m.amount}</span>
                          <button
                            onClick={() => handleRemoveMilestone(idx)}
                            className="text-rose-400 hover:text-rose-300 font-bold"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Milestone Inputs */}
                  <form onSubmit={handleAddMilestone} className="flex gap-2 items-end">
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label className="font-mono text-[8px] uppercase text-[#8e9192]">Milestone Title</label>
                      <input
                        type="text"
                        value={newMilestoneTitle}
                        onChange={(e) => setNewMilestoneTitle(e.target.value)}
                        placeholder="e.g. Phase 3 API Integration"
                        className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                      />
                    </div>
                    <div className="w-24 flex flex-col gap-1.5">
                      <label className="font-mono text-[8px] uppercase text-[#8e9192]">Budget Amount</label>
                      <input
                        type="number"
                        value={newMilestoneAmount}
                        onChange={(e) => setNewMilestoneAmount(Number(e.target.value))}
                        className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase rounded-[2px] hover:bg-opacity-90"
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>

              {/* Pricing Breakdown Sidebar */}
              <div className="w-full lg:w-80 glass-panel p-6 rounded-lg border border-border flex flex-col gap-6">
                <div>
                  <span className="font-mono text-[8px] text-[#8e9192] uppercase">Cost Calculation</span>
                  <h3 className="font-sans text-xs font-bold text-white uppercase mt-1">Pricing Model Comparison</h3>
                </div>

                <div className="flex flex-col gap-3 border-b border-border pb-4 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#8e9192]">Infrastructure Cost</span>
                    <span className="text-white">${computedPricing.totalBaseCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e9192]">Developer cost</span>
                    <span className="text-white">${milestoneTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2 font-bold text-emerald-400">
                    <span>Loss-Leader Margin (-5%)</span>
                    <span>-${(milestoneTotal * 0.05).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2 font-black text-white text-sm">
                    <span>ESTUDIO TOTAL</span>
                    <span>${(computedPricing.totalBaseCost + milestoneTotal * 0.95).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 font-mono text-[10px]">
                  <div className="flex justify-between text-[#8e9192]">
                    <span>Standard Agency markup Rate</span>
                    <span className="line-through text-rose-400">
                      ${(computedPricing.savingsVsMarket + milestoneTotal * 1.5).toFixed(2)}
                    </span>
                  </div>
                  <div className="bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 p-3 rounded text-center leading-relaxed">
                    Personalized loss-leader model saves approx{" "}
                    <b>${(computedPricing.savingsVsMarket + milestoneTotal * 0.55).toFixed(2)}</b> vs standard agencies.
                  </div>
                </div>

                <button className="w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-opacity-95 rounded-[2px]">
                  Deploy Proposal Contract
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
