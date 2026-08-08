"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const rawSource = searchParams.get("source") || searchParams.get("cta") || "Direct Contact Form";
  const rawService = searchParams.get("service") || "";

  const [sourceCta] = useState(rawSource);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project_type: rawService || "Shopify Custom Engineering",
    budget: "$5,000 - $10,000",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{ id: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source_cta: sourceCta,
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit lead");
      }

      setSubmittedLead(data.lead);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.25em] mb-4 px-3 py-1.5 bg-white/5 border border-white/10 rounded-[2px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          ENGAGEMENT PROTOCOL
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4">
          Start an Engineering Project
        </h1>
        <p className="text-base text-[#8e9192] max-w-xl mx-auto leading-relaxed">
          Partner directly with Mudasar Imam for Shopify engineering, full-stack web applications, and autonomous AI automation systems.
        </p>

        {/* CTA Source Attribution Badge */}
        {sourceCta && (
          <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-[2px]">
            <span className="material-symbols-outlined text-[14px]">ads_click</span>
            <span>Originating Action: <strong className="text-white">{sourceCta}</strong></span>
          </div>
        )}
      </div>

      {/* Form Container */}
      <div className="bg-[#050505] border border-white/10 rounded-sm p-8 sm:p-12 shadow-2xl relative">
        {submittedLead ? (
          /* Success Screen */
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>

            <div className="font-mono text-xs text-[#8e9192] uppercase tracking-widest mb-2">
              PROJECT SCOPE RECEIVED · REFERENCE {submittedLead.id}
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              Thank you, {formData.name}!
            </h2>

            <p className="text-sm text-[#8e9192] max-w-md mx-auto mb-8 leading-relaxed">
              Your engineering requirements have been logged into the executive pipeline. Mudasar will review your project scope and respond to <strong className="text-white">{formData.email}</strong> within 12 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/10 pt-8 max-w-md mx-auto">
              <a
                href={`https://wa.me/923191106310?text=${encodeURIComponent(
                  `Hello Mudasar, I just submitted project scope ${submittedLead.id} (${formData.project_type}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-black font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#20ba5a] transition-all rounded-[2px] inline-flex items-center justify-center gap-2"
              >
                <span>Instant WhatsApp Sync</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>

              <button
                onClick={() => {
                  setSubmittedLead(null);
                  setFormData({
                    name: "",
                    email: "",
                    project_type: "Shopify Custom Engineering",
                    budget: "$5,000 - $10,000",
                    details: "",
                  });
                }}
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/20 text-white font-sans text-xs font-bold uppercase tracking-wider hover:border-white/50 transition-all rounded-[2px]"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          /* Form Inputs */
          <form onSubmit={handleSubmit} className="space-y-8">
            {errorMessage && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs rounded-[2px]">
                {errorMessage}
              </div>
            )}

            {/* Grid Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-[2px] text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-[2px] text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
            </div>

            {/* Grid Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
                  Primary Capability Needed
                </label>
                <select
                  value={formData.project_type}
                  onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-[2px] text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                >
                  <option value="Shopify Custom Engineering">Shopify Custom Engineering</option>
                  <option value="Shopify Store Redesign & CRO">Shopify Store Redesign & CRO</option>
                  <option value="Shopify Bug Fixes & Troubleshooting">Shopify Bug Fixes & Troubleshooting</option>
                  <option value="Headless Shopify Engineering">Headless Shopify Engineering</option>
                  <option value="Accessibility & WCAG Audit">Accessibility & WCAG Audit</option>
                  <option value="Full-Stack Web Applications (Next.js/Supabase)">Full-Stack Web Applications (Next.js/Supabase)</option>
                  <option value="AI-Powered B2B SaaS">AI-Powered B2B SaaS</option>
                  <option value="AI & Workflow Automations (n8n)">AI & Workflow Automations (n8n)</option>
                  <option value="Custom AI Agents & Swarms">Custom AI Agents & Swarms</option>
                  <option value="AI Voice Agents">AI Voice Agents</option>
                  <option value="Technical Strategy Retainer">Technical Strategy Retainer</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
                  Target Engagement Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-[2px] text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                >
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000+">$25,000+</option>
                  <option value="Flexible / Retainer">Flexible / Hourly Retainer</option>
                </select>
              </div>
            </div>

            {/* Details */}
            <div>
              <label className="block font-mono text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
                Project Scope & Technical Requirements *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Describe your project, current tech stack, goals, timelines, or bottlenecks..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-[2px] text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            {/* Hidden CTA Source Tracking */}
            <input type="hidden" name="source_cta" value={sourceCta} />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/10">
              <div className="font-mono text-[11px] text-[#8e9192]">
                Direct Contact: <span className="text-white">+92 319 1106310</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 bg-white text-black font-sans text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all rounded-[2px] disabled:opacity-50 inline-flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                    <span>Logging Project Scope...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Scope</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex-1 bg-[#020202] text-[#e3e2e2] selection:bg-white selection:text-black font-sans min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-1 pt-32 px-6 pb-24">
        <Suspense fallback={
          <div className="max-w-4xl mx-auto text-center py-20 font-mono text-xs text-[#8e9192]">
            Loading Engagement Protocol...
          </div>
        }>
          <ContactFormContent />
        </Suspense>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-sans text-lg font-extrabold tracking-tighter text-white">IMAM ESTUDIO</div>
          <div className="font-mono text-[9px] text-[#8e9192] tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} MUDASAR IMAM.<br />ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
