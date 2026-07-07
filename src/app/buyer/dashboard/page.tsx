"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";

interface BuyerProject {
  id: string;
  name: string;
  expert: string;
  status: string;
  escrowAmount: number;
}

const mockBuyerProjects: BuyerProject[] = [
  {
    id: "PROJ-101",
    name: "Shopify headless Storefront integration",
    expert: "Mudasar Imam",
    status: "active",
    escrowAmount: 4700.00,
  },
  {
    id: "PROJ-102",
    name: "Autonomous Voice Agent CRM Swarm",
    expert: "Sarah Jenkins",
    status: "proposal",
    escrowAmount: 3200.00,
  },
];

export default function BuyerDashboardPage() {
  const columns = [
    {
      header: "Project ID",
      accessor: "id" as keyof BuyerProject,
      sortable: true,
    },
    {
      header: "Project Name",
      accessor: (item: BuyerProject) => (
        <span className="text-white font-semibold">{item.name}</span>
      ),
    },
    {
      header: "Lead Expert",
      accessor: "expert" as keyof BuyerProject,
      sortable: true,
    },
    {
      header: "Escrow Deposit",
      accessor: (item: BuyerProject) => (
        <span className="font-mono">${item.escrowAmount.toFixed(2)}</span>
      ),
      sortable: true,
    },
    {
      header: "Status State",
      accessor: (item: BuyerProject) => (
        <StatusBadge status={item.status} />
      ),
    },
    {
      header: "Workspace Node",
      accessor: (item: BuyerProject) => (
        <Link
          href={`/workspace/${item.id}`}
          className="px-3 py-1 bg-white text-black font-mono text-[9px] font-bold uppercase rounded-[2px] hover:bg-opacity-90 transition-all"
        >
          Enter
        </Link>
      ),
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
              <span className="font-mono text-[10px] text-[#8e9192]">CLIENT PORTAL</span>
              <h1 className="font-sans text-2xl font-bold text-white mt-1">Strategic Oversight Portal</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Monitor live project delivery metrics, sign contracts, and release milestone escrows.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Active Escrow Balance</span>
                <h3 className="font-mono text-2xl font-bold text-white mt-2">$7,900.00</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">Secured in Smart Escrows</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Active Workspaces</span>
                <h3 className="font-mono text-2xl font-bold text-white mt-2">2 Nodes</h3>
                <span className="font-mono text-[8px] text-white/50 mt-1 block">1 Verified, 1 Founder-managed</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Swarms Executions</span>
                <h3 className="font-mono text-2xl font-bold text-white mt-2">48 Runs</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">100% Build compilation success</span>
              </div>
            </div>

            {/* Active Projects Grid */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Active Contract Portfolios</h3>
              <DataGrid columns={columns} data={mockBuyerProjects} searchField="name" searchPlaceholder="Search contracts..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
