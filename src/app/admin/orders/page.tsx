"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  service: string;
  amount: string;
  paymentStatus: "Paid" | "Pending" | "Refunded";
  fulfillmentStatus: "Fulfilled" | "In Progress" | "Unfulfilled";
  date: string;
}

const mockOrders: Order[] = [
  {
    id: "ord-1001",
    orderNumber: "#IE-1001",
    customerName: "Alex Vance",
    customerEmail: "alex@vancemedia.com",
    service: "Headless Shopify Storefront (Next.js)",
    amount: "$4,500.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    date: "Aug 06, 2026",
  },
  {
    id: "ord-1002",
    orderNumber: "#IE-1002",
    customerName: "Marcus Sterling",
    customerEmail: "marcus@sterlinglogistics.com",
    service: "Autonomous n8n Multi-Agent Workflow Engine",
    amount: "$3,200.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "In Progress",
    date: "Aug 07, 2026",
  },
  {
    id: "ord-1003",
    orderNumber: "#IE-1003",
    customerName: "Elena Rostova",
    customerEmail: "elena@nordicstyle.io",
    service: "Shopify Store CRO Redesign & Sub-Second Speed",
    amount: "$2,800.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    date: "Aug 08, 2026",
  },
];

export default function AdminOrdersPage() {
  const [orders] = useState<Order[]>(mockOrders);

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Orders & Fulfillment Pipeline"
          subtitle="Shopify/Stripe order records, retainer engagements, and fulfillment tracking"
          actions={
            <button className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors">
              + Draft Order / Invoice
            </button>
          }
        />

        <div className="p-8 max-w-6xl space-y-6">
          <div className="bg-[#09090b] rounded border border-[#1f2023] overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#121316] text-[#8e9192] border-b border-[#1f2023] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Engineering Scope / Service</th>
                  <th className="p-4">Total Amount</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Fulfillment</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2023]">
                {orders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-[#121316]/50 transition-colors">
                    <td className="p-4 font-bold text-white">{ord.orderNumber}</td>
                    <td className="p-4">
                      <div className="text-white font-semibold">{ord.customerName}</div>
                      <div className="text-[10px] text-[#8e9192]">{ord.customerEmail}</div>
                    </td>
                    <td className="p-4 text-[#c2c4c6]">{ord.service}</td>
                    <td className="p-4 text-[#25D366] font-bold">{ord.amount}</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-[#25D366]/15 text-[#25D366] text-[10px] font-bold">
                        {ord.paymentStatus}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          ord.fulfillmentStatus === "Fulfilled"
                            ? "bg-[#25D366]/15 text-[#25D366]"
                            : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {ord.fulfillmentStatus}
                      </span>
                    </td>
                    <td className="p-4 text-[#8e9192]">{ord.date}</td>
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
