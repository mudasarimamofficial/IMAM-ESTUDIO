"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";

interface PlatformLead {
  id: string;
  clientName: string;
  budget: number;
  serviceRequested: string;
  status: string;
}

const mockLeads: PlatformLead[] = [
  {
    id: "LD-902",
    clientName: "Global Retailers Corp",
    budget: 15000,
    serviceRequested: "Shopify headless Storefront integration",
    status: "Active Lead",
  },
  {
    id: "LD-903",
    clientName: "FinTech Automation Ltd",
    budget: 9500,
    serviceRequested: "Autonomous Voice Agent CRM Swarm",
    status: "Negotiating",
  },
];

export default function AdminDashboardPage() {
  const columns = [
    {
      header: "Lead ID",
      accessor: "id" as keyof PlatformLead,
      sortable: true,
    },
    {
      header: "Client Account",
      accessor: "clientName" as keyof PlatformLead,
      sortable: true,
    },
    {
      header: "Service Scope",
      accessor: "serviceRequested" as keyof PlatformLead,
    },
    {
      header: "Target Budget",
      accessor: (item: PlatformLead) => (
        <span className="font-mono font-bold">${item.budget.toLocaleString()}</span>
      ),
      sortable: true,
    },
    {
      header: "Lead Status",
      accessor: "status" as keyof PlatformLead,
      sortable: true,
    },
  ];

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">EXECUTIVE COMMAND CORE</span>
              <h1 className="font-sans text-2xl font-bold text-white mt-1">Platform Operations Dashboard</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Monitor global gross merchandise value (GMV), system alerts, and pipeline lead indices.
              </p>
            </div>

            {/* Platform Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Gross Platform GMV</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">$2.45M</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">+12.5% this quarter</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Active Escrow Contracts</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">$145,800.00</h3>
                <span className="font-mono text-[8px] text-white/50 mt-1 block">Secured smart accounts</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Verified Experts</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">124 Experts</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">Top 1.2% selection rate</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Active disputes</span>
                <h3 className="font-mono text-xl font-bold text-[#e3e2e2] mt-2">0 open</h3>
                <span className="font-mono text-[8px] text-[#8e9192] mt-1 block">All conflicts adjudicated</span>
              </div>
            </div>

            {/* Inbound Leads list */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Inbound Client Leads Pipeline</h3>
              <DataGrid columns={columns} data={mockLeads} searchField="clientName" searchPlaceholder="Search leads..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
