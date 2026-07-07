"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";

export default function AdminSystemPage() {
  const [latency, setLatency] = useState(140);
  const [cpu, setCpu] = useState(14);
  const [memory, setMemory] = useState(65);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate real-time fluctuating server telemetry metrics
      setLatency(Math.round(120 + Math.random() * 40));
      setCpu(Math.round(10 + Math.random() * 8));
      setMemory(Math.round(62 + Math.random() * 4));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">TELEMETRY & INFRASTRUCTURE</span>
              <h1 className="font-sans text-2xl font-bold text-white mt-1">System Health Monitor</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Monitor live API response values, edge function latency, and Vercel pipeline telemetry.
              </p>
            </div>

            {/* Diagnostic gauges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bento-card p-6 rounded-lg border border-border flex flex-col gap-2">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Database Response</span>
                <h3 className="font-mono text-xl font-bold text-white">{latency} ms</h3>
                <div className="w-full bg-[#111] h-1 rounded overflow-hidden mt-2">
                  <div className="bg-emerald-500 h-full" style={{ width: `${(latency / 200) * 100}%` }} />
                </div>
              </div>

              <div className="bento-card p-6 rounded-lg border border-border flex flex-col gap-2">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Vercel CPU Load</span>
                <h3 className="font-mono text-xl font-bold text-white">{cpu}%</h3>
                <div className="w-full bg-[#111] h-1 rounded overflow-hidden mt-2">
                  <div className="bg-emerald-500 h-full" style={{ width: `${cpu}%` }} />
                </div>
              </div>

              <div className="bento-card p-6 rounded-lg border border-border flex flex-col gap-2">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Escrow Memory Cache</span>
                <h3 className="font-mono text-xl font-bold text-white">{memory}%</h3>
                <div className="w-full bg-[#111] h-1 rounded overflow-hidden mt-2">
                  <div className="bg-emerald-500 h-full" style={{ width: `${memory}%` }} />
                </div>
              </div>
            </div>

            {/* Logs Terminal */}
            <div className="flex flex-col gap-4 border-t border-[#111] pt-6">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Live System Logs</h3>
              <div className="bg-[#030303] border border-border rounded p-4 font-mono text-[10px] text-white/70 max-h-[300px] overflow-y-auto flex flex-col gap-2.5">
                <div>[2026-07-07 07:11:42] GET /api/v1/projects/PROJ-101 - 200 OK (112ms)</div>
                <div>[2026-07-07 07:11:45] WebSocket client connected: user_id=auth-client-1</div>
                <div>[2026-07-07 07:11:48] Syncing local Dexie cache delta with Supabase schema: 1 item resolved.</div>
                <div className="text-emerald-400">[2026-07-07 07:12:01] System self-test: 0 errors detected. SLIs normal.</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
