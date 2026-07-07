"use client";

import React from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";
import StatusBadge from "@/components/StatusBadge";

interface BillingInvoice {
  id: string;
  milestoneTitle: string;
  project: string;
  amount: number;
  status: string;
  date: string;
}

const mockInvoices: BillingInvoice[] = [
  {
    id: "INV-9901",
    milestoneTitle: "Liquid Architecture setup",
    project: "Shopify Headless Storefront",
    amount: 1500.00,
    status: "approved",
    date: "2026-06-25",
  },
  {
    id: "INV-9902",
    milestoneTitle: "Dynamic Product filters integration",
    project: "Shopify Headless Storefront",
    amount: 2000.00,
    status: "submitted",
    date: "2026-07-02",
  },
  {
    id: "INV-9903",
    milestoneTitle: "Proctoring Assessments implementation",
    project: "Shopify Headless Storefront",
    amount: 1200.00,
    status: "pending",
    date: "2026-07-06",
  },
];

export default function BuyerBillingPage() {
  const columns = [
    {
      header: "Invoice ID",
      accessor: "id" as keyof BillingInvoice,
      sortable: true,
    },
    {
      header: "Milestone Details",
      accessor: (item: BillingInvoice) => (
        <div>
          <div className="text-white font-semibold">{item.milestoneTitle}</div>
          <div className="text-[10px] text-[#8e9192]">{item.project}</div>
        </div>
      ),
    },
    {
      header: "Created Date",
      accessor: "date" as keyof BillingInvoice,
      sortable: true,
    },
    {
      header: "Amount Total",
      accessor: (item: BillingInvoice) => (
        <span className="font-mono">${item.amount.toFixed(2)}</span>
      ),
      sortable: true,
    },
    {
      header: "Escrow Status",
      accessor: (item: BillingInvoice) => (
        <StatusBadge status={item.status} />
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
                <span className="font-mono text-[10px] text-[#8e9192]">FINANCIAL LEDGER</span>
                <h1 className="font-sans text-2xl font-bold text-white mt-1">Escrow & Invoice Management</h1>
                <p className="font-sans text-xs text-[#8e9192] mt-1">
                  Manage smart contract escrows, approve payment distributions, and verify invoice statuses.
                </p>
              </div>

              {/* Stripe Connect indicator */}
              <div className="flex items-center gap-3 bg-[#0d0e0f] border border-border p-2 rounded px-4 font-mono text-[10px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-white">STRIPE CONNECTED</span>
                <span className="text-[#8e9192]">|</span>
                <span className="text-white">TEST MODE</span>
              </div>
            </div>

            {/* Invoices list */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Escrow Distribution Records</h3>
              <DataGrid columns={columns} data={mockInvoices} searchField="milestoneTitle" searchPlaceholder="Search milestones..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
