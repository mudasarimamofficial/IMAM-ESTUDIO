"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import Editor from "@/components/Editor";

export default function ExpertOnboardingPage() {
  const [proctorLogs, setProctorLogs] = useState<string[]>([
    "[Proctor system] Assessment environment initialized. Monitoring active...",
    "[Proctor system] Keystroke telemetry active. Focus verified.",
  ]);

  const handleProctorAlert = (alertMsg: string) => {
    setProctorLogs((prev) => [...prev, alertMsg]);
  };

  const handleCodeChange = (newCode: string) => {
    // Optional callback
  };

  const initialAssessmentCode = `// Vetting Crucible | Shopify Liquid & JS Integration Test
// Task: Write a middleware function to sanitize and redirect checkouts 
// exceeding $10,000 threshold for custom bank draft validation.

export function filterCheckout(checkoutDetails: { total: number; method: string }) {
  // Your code here:
  
}`;

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">CRUCIBLE ASSESSMENT</span>
              <h1 className="font-sans text-2xl font-bold text-white mt-1">The Vetting Crucible Environment</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Complete technical evaluations under active proctoring telemetry to verify expert credentials.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
              {/* Left Side: Code Editor Workspace */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-[#0d0e0f] border border-border p-4 rounded">
                  <h3 className="font-sans text-sm font-bold text-white mb-2">Instructions</h3>
                  <p className="font-sans text-xs text-[#c4c7c8] leading-relaxed">
                    Analyze the parameters and write a valid TypeScript checkout middleware function that validates transaction thresholds.
                  </p>
                  <ul className="list-disc pl-5 mt-2 font-sans text-[11px] text-[#8e9192] flex flex-col gap-1">
                    <li>Redirect values above $10,000 into a draft approval state.</li>
                    <li>Ignore standard Shopify payment gateways if draft is selected.</li>
                  </ul>
                </div>

                <Editor
                  filename="checkoutMiddleware.ts"
                  initialCode={initialAssessmentCode}
                  onCodeChange={handleCodeChange}
                  onProctoringAlert={handleProctorAlert}
                />

                <div className="flex justify-end gap-3">
                  <button className="px-6 py-2.5 bg-transparent border border-border text-[#c4c7c8] hover:border-white font-mono text-xs font-bold uppercase rounded-[2px] transition-all">
                    Reset Workspace
                  </button>
                  <button className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase rounded-[2px] hover:bg-opacity-90 transition-all">
                    Submit Code Audit
                  </button>
                </div>
              </div>

              {/* Right Side: Proctoring Telemetry Feed */}
              <div className="w-full lg:w-80 glass-panel p-6 rounded-lg border border-border flex flex-col gap-4 min-h-[350px]">
                <div className="border-b border-[#111] pb-2">
                  <span className="font-mono text-[8px] text-[#8e9192] uppercase">Live Audit Stream</span>
                  <h3 className="font-sans text-xs font-bold text-white uppercase mt-0.5">Telemetry Monitor</h3>
                </div>

                <div className="flex-1 bg-black rounded p-4 font-mono text-[10px] text-amber-500 overflow-y-auto max-h-[400px] flex flex-col gap-2">
                  {proctorLogs.map((log, idx) => (
                    <div key={idx} className="border-b border-[#111] pb-1.5 leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>

                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 p-2 rounded text-center">
                  Focus loss or clipboard usage will trigger warnings. Do not switch tabs.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
