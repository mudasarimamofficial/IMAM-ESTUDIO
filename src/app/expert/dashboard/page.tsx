"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";

interface AssignedProject {
  id: string;
  name: string;
  client: string;
  status: string;
  deliverableDate: string;
}

const mockAssigned: AssignedProject[] = [
  {
    id: "PROJ-101",
    name: "Shopify headless Storefront integration",
    client: "Acme Corp",
    status: "active",
    deliverableDate: "2026-07-15",
  },
];

export default function ExpertDashboardPage() {
  const columns = [
    {
      header: "Project ID",
      accessor: "id" as keyof AssignedProject,
      sortable: true,
    },
    {
      header: "Project Target",
      accessor: (item: AssignedProject) => (
        <span className="text-white font-semibold">{item.name}</span>
      ),
    },
    {
      header: "Client Account",
      accessor: "client" as keyof AssignedProject,
      sortable: true,
    },
    {
      header: "Target Due Date",
      accessor: "deliverableDate" as keyof AssignedProject,
      sortable: true,
    },
    {
      header: "Contract status",
      accessor: (item: AssignedProject) => <StatusBadge status={item.status} />,
    },
    {
      header: "Workspace Node",
      accessor: (item: AssignedProject) => (
        <Link
          href={`/workspace/${item.id}`}
          className="px-3 py-1 bg-white text-black font-mono text-[9px] font-bold uppercase rounded-[2px] hover:bg-opacity-90"
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
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-6 gap-4">
              <div>
                <span className="font-mono text-[10px] text-[#8e9192]">EXPERT PORTAL</span>
                <h1 className="font-sans text-2xl font-bold text-white mt-1">Operational Console</h1>
                <p className="font-sans text-xs text-[#8e9192] mt-1">
                  Manage active deliverables, submit proofs of work, and verify payouts.
                </p>
              </div>

              {/* Vetted badge */}
              <div className="flex items-center gap-2 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 p-2 rounded px-4 font-mono text-[10px]">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                VERIFIED SENIOR EXPERT
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Crucible Score</span>
                <h3 className="font-mono text-2xl font-bold text-white mt-2">98.4% Rating</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">Top 1% Profile</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Hours Logged</span>
                <h3 className="font-mono text-2xl font-bold text-white mt-2">1,420 hrs</h3>
                <span className="font-mono text-[8px] text-white/50 mt-1 block">99.9% Build Success rate</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Stripe Pending Release</span>
                <h3 className="font-mono text-2xl font-bold text-white mt-2">$3,200.00</h3>
                <span className="font-mono text-[8px] text-amber-400 mt-1 block">Locked in Escrow contract</span>
              </div>
            </div>

            {/* Assigned Project list */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Active Workspace Assignments</h3>
              <DataGrid columns={columns} data={mockAssigned} searchField="name" searchPlaceholder="Search assignments..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
