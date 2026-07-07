import React from "react";
import TopNavBar from "@/components/TopNavBar";
import StatusBadge from "@/components/StatusBadge";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MobileWorkspacePage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <main className="flex-1 pt-20 px-4 pb-24 max-w-md mx-auto w-full flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-border pb-4">
          <span className="font-mono text-[9px] text-[#8e9192] uppercase">Mobile Operational Workspace</span>
          <div className="flex justify-between items-center">
            <h1 className="font-sans text-lg font-bold text-white">Project: {id}</h1>
            <StatusBadge status="active" />
          </div>
        </div>

        {/* Sync Status Info */}
        <div className="p-4 bg-[#0a0a0a] border border-border rounded flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h4 className="font-sans text-xs font-semibold text-white">Edge Sync Connected</h4>
              <p className="font-sans text-[10px] text-[#8e9192]">Supabase & Dexie Local Cache active</p>
            </div>
          </div>
        </div>

        {/* Milestones / Task Board */}
        <div className="flex flex-col gap-3">
          <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Milestones</h3>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-[#0a0a0a] border border-border rounded">
              <div className="flex justify-between items-center">
                <span className="font-sans text-xs font-bold text-white">M1: System Architecture Setup</span>
                <StatusBadge status="complete" />
              </div>
              <p className="font-sans text-[10px] text-[#8e9192] mt-1">Database models and workspace folders generated.</p>
            </div>

            <div className="p-4 bg-[#0a0a0a] border border-[#333] rounded">
              <div className="flex justify-between items-center">
                <span className="font-sans text-xs font-bold text-white">M2: Stripe Connect & Ledger</span>
                <StatusBadge status="pending" />
              </div>
              <p className="font-sans text-[10px] text-[#8e9192] mt-1">Stripe invoices setup and API routing tests.</p>
            </div>
          </div>
        </div>

        {/* Chat Drawer Trigger */}
        <div className="p-4 bg-[#0a0a0a] border border-border rounded flex justify-between items-center">
          <div>
            <h4 className="font-sans text-xs font-semibold text-white">Active Channel Chat</h4>
            <p className="font-sans text-[10px] text-[#8e9192]">3 unread threads in #architecture</p>
          </div>
          <button className="px-4 py-2 bg-white text-black font-mono text-[10px] font-bold rounded">
            Open Chat
          </button>
        </div>

        {/* Vetting Code Sandbox preview */}
        <div className="p-4 bg-[#0a0a0a] border border-border rounded flex flex-col gap-2">
          <h4 className="font-sans text-xs font-semibold text-white">Proctored Code Sandbox</h4>
          <p className="font-sans text-[10px] text-[#8e9192]">Workspace proctor metrics running in background.</p>
          <div className="p-3 bg-[#030303] rounded border border-border font-mono text-[10px] text-[#8e9192] mt-2">
            <div>// Telemetry logs active</div>
            <div>[LOG] Mouse hover tracking: OK</div>
            <div>[LOG] Keypress velocity: 92 cpm</div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#0a0a0a] border-t border-border flex justify-around items-center z-50">
        <button className="flex flex-col items-center gap-1 text-[#8e9192] hover:text-white">
          <span className="material-symbols-outlined text-[20px]">grid_view</span>
          <span className="text-[9px] font-mono">Overview</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white">
          <span className="material-symbols-outlined text-[20px] font-bold">chat</span>
          <span className="text-[9px] font-mono">Chat</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#8e9192] hover:text-white">
          <span className="material-symbols-outlined text-[20px]">architecture</span>
          <span className="text-[9px] font-mono">Canvas</span>
        </button>
      </nav>
    </div>
  );
}
