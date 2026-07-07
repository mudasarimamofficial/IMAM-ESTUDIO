"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";
import StatusBadge from "@/components/StatusBadge";

interface PayoutRecord {
  id: string;
  milestone: string;
  project: string;
  amount: number;
  status: string;
  clearedDate: string;
}

const mockPayouts: PayoutRecord[] = [
  {
    id: "PAY-0101",
    milestone: "Liquid Architecture setup",
    project: "Shopify headless Storefront integration",
    amount: 1425.00, // Amount minus fees
    status: "completed",
    clearedDate: "2026-06-26",
  },
  {
    id: "PAY-0102",
    milestone: "Dynamic Product filters integration",
    project: "Shopify headless Storefront integration",
    amount: 1900.00,
    status: "pending",
    clearedDate: "Processing",
  },
];

export default function ExpertLedgerPage() {
  const columns = [
    {
      header: "Payout ID",
      accessor: "id" as keyof PayoutRecord,
      sortable: true,
    },
    {
      header: "Associated Milestone",
      accessor: (item: PayoutRecord) => (
        <div>
          <div className="text-white font-semibold">{item.milestone}</div>
          <div className="text-[10px] text-[#8e9192]">{item.project}</div>
        </div>
      ),
    },
    {
      header: "Clearance Date",
      accessor: "clearedDate" as keyof PayoutRecord,
      sortable: true,
    },
    {
      header: "Net Distribution",
      accessor: (item: PayoutRecord) => (
        <span className="font-mono text-white font-bold">${item.amount.toFixed(2)}</span>
      ),
      sortable: true,
    },
    {
      header: "Stripe Settlement",
      accessor: (item: PayoutRecord) => <StatusBadge status={item.status} />,
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
                <span className="font-mono text-[10px] text-[#8e9192]">FINANCIAL PORTAL</span>
                <h1 className="font-sans text-2xl font-bold text-white mt-1">Payout Ledger Tracking</h1>
                <p className="font-sans text-xs text-[#8e9192] mt-1">
                  Track completed payouts, configure payout schedules, and update Stripe Connect preferences.
                </p>
              </div>

              {/* Stripe configure */}
              <button className="px-4 py-2 bg-white text-black font-mono text-[10px] font-bold uppercase rounded-[2px] hover:bg-opacity-90">
                Stripe Settings
              </button>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Earnings Distributions</h3>
              <DataGrid columns={columns} data={mockPayouts} searchField="milestone" searchPlaceholder="Search payouts..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
