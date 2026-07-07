"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";
import StatusBadge from "@/components/StatusBadge";

interface PlatformDispute {
  id: string;
  project: string;
  reporter: string;
  reason: string;
  escrowAmount: number;
  status: string;
}

const mockDisputes: PlatformDispute[] = [
  {
    id: "DISP-001",
    project: "Shopify custom Checkout hooks integration",
    reporter: "Acme Corp (Client)",
    reason: "Delayed delivery of final Liquid templates.",
    escrowAmount: 4200.00,
    status: "open",
  },
];

export default function AdminDisputesPage() {
  const [disputes, setDisputes] = useState<PlatformDispute[]>(mockDisputes);

  const handleResolve = (id: string, newStatus: string) => {
    setDisputes((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: newStatus } : d))
    );
  };

  const columns = [
    {
      header: "Dispute ID",
      accessor: "id" as keyof PlatformDispute,
      sortable: true,
    },
    {
      header: "Project Workspace",
      accessor: "project" as keyof PlatformDispute,
      sortable: true,
    },
    {
      header: "Filing Party",
      accessor: "reporter" as keyof PlatformDispute,
    },
    {
      header: "Escrow Deposit",
      accessor: (item: PlatformDispute) => (
        <span className="font-mono">${item.escrowAmount.toFixed(2)}</span>
      ),
      sortable: true,
    },
    {
      header: "State Status",
      accessor: (item: PlatformDispute) => <StatusBadge status={item.status} />,
    },
    {
      header: "Adjudication Actions",
      accessor: (item: PlatformDispute) => (
        <div className="flex gap-2">
          {item.status === "open" && (
            <>
              <button
                onClick={() => handleResolve(item.id, "resolved")}
                className="px-2.5 py-1 bg-white text-black font-mono text-[9px] font-bold uppercase rounded-[2px] hover:bg-opacity-90"
              >
                Release to Expert
              </button>
              <button
                onClick={() => handleResolve(item.id, "dismissed")}
                className="px-2.5 py-1 bg-transparent border border-border text-[#c4c7c8] hover:border-white font-mono text-[9px] font-bold uppercase rounded-[2px]"
              >
                Refund Client
              </button>
            </>
          )}
        </div>
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
              <span className="font-mono text-[10px] text-[#8e9192]">GOVERNANCE CORE</span>
              <h1 className="font-sans text-2xl font-bold text-white mt-1">Disputes Adjudication Workspace</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Review client-expert disputes, audit communication logs, and release locked escrow contracts.
              </p>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Active Lock Escrow Disputes</h3>
              <DataGrid columns={columns} data={disputes} searchField="project" searchPlaceholder="Search disputes..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
