"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

interface Discount {
  id: string;
  code: string;
  type: "Percentage" | "Fixed Amount";
  value: string;
  usageCount: number;
  status: "Active" | "Expired";
}

const mockDiscounts: Discount[] = [
  {
    id: "disc-01",
    code: "FOUNDER10",
    type: "Percentage",
    value: "10% OFF",
    usageCount: 14,
    status: "Active",
  },
  {
    id: "disc-02",
    code: "SHOPIFY2026",
    type: "Fixed Amount",
    value: "$250 OFF",
    usageCount: 8,
    status: "Active",
  },
];

export default function AdminMarketingPage() {
  const [discounts] = useState<Discount[]>(mockDiscounts);

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Discounts & Marketing Engine"
          subtitle="Campaign tracking, promo codes, referral attribution, and client incentives"
          actions={
            <button className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors">
              + Create Discount Code
            </button>
          }
        />

        <div className="p-8 max-w-6xl space-y-6">
          <div className="bg-[#09090b] rounded border border-[#1f2023] overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#121316] text-[#8e9192] border-b border-[#1f2023] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Discount Code</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Value</th>
                  <th className="p-4">Usage Count</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2023]">
                {discounts.map((d) => (
                  <tr key={d.id} className="hover:bg-[#121316]/50 transition-colors">
                    <td className="p-4 font-bold text-white tracking-wider">{d.code}</td>
                    <td className="p-4 text-[#c2c4c6]">{d.type}</td>
                    <td className="p-4 text-[#25D366] font-bold">{d.value}</td>
                    <td className="p-4 text-white">{d.usageCount} redemptions</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-[#25D366]/15 text-[#25D366] text-[10px] font-bold">
                        {d.status}
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
