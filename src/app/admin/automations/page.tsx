"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

interface Workflow {
  id: string;
  name: string;
  trigger: string;
  destination: string;
  lastExecuted: string;
  status: "Active" | "Paused";
}

const mockWorkflows: Workflow[] = [
  {
    id: "wf-01",
    name: "Lead Capture -> Telegram & WhatsApp Alert",
    trigger: "New Contact Form Submission",
    destination: "n8n Webhook / Telegram Bot",
    lastExecuted: "2 mins ago",
    status: "Active",
  },
  {
    id: "wf-[#02]",
    name: "New Order -> Supabase Sync & Email Receipt",
    trigger: "Stripe / Shopify Payment Intent",
    destination: "PostgreSQL / Resend API",
    lastExecuted: "1 hour ago",
    status: "Active",
  },
  {
    id: "wf-03",
    name: "AI Voice Agent Call Event -> Lead Pipeline Update",
    trigger: "Voice AI Call Completed",
    destination: "Imam Estudio CRM API",
    lastExecuted: "3 hours ago",
    status: "Active",
  },
];

export default function AdminAutomationsPage() {
  const [workflows] = useState<Workflow[]>(mockWorkflows);

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Automations & n8n Workflow Engine"
          subtitle="Manage autonomous webhooks, AI agent swarms, event triggers, and API webbing"
          actions={
            <button className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors">
              + Add Webhook Trigger
            </button>
          }
        />

        <div className="p-8 max-w-6xl space-y-6">
          <div className="bg-[#09090b] rounded border border-[#1f2023] overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#121316] text-[#8e9192] border-b border-[#1f2023] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Workflow Name</th>
                  <th className="p-4">Event Trigger</th>
                  <th className="p-4">Destination Pipeline</th>
                  <th className="p-4">Last Executed</th>
                  <th className="p-4">Engine Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2023]">
                {workflows.map((wf) => (
                  <tr key={wf.id} className="hover:bg-[#121316]/50 transition-colors">
                    <td className="p-4 font-bold text-white">{wf.name}</td>
                    <td className="p-4 text-[#c2c4c6]">{wf.trigger}</td>
                    <td className="p-4 text-[#8e9192]">{wf.destination}</td>
                    <td className="p-4 text-white">{wf.lastExecuted}</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-[#25D366]/15 text-[#25D366] text-[10px] font-bold">
                        ● {wf.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
