"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  totalSpent: string;
  ordersCount: number;
  tags: string[];
  status: "VIP" | "Active" | "Lead" | "Inactive";
}

const mockCustomers: Customer[] = [
  {
    id: "cust-01",
    name: "Alex Vance",
    email: "alex@vancemedia.com",
    company: "Vance Media Co.",
    totalSpent: "$14,500",
    ordersCount: 4,
    tags: ["Shopify Headless", "VIP Client", "Retainer"],
    status: "VIP",
  },
  {
    id: "cust-02",
    name: "Elena Rostova",
    email: "elena@nordicstyle.io",
    company: "Nordic Style D2C",
    totalSpent: "$8,200",
    ordersCount: 2,
    tags: ["CRO Redesign", "Active"],
    status: "Active",
  },
  {
    id: "cust-03",
    name: "Marcus Sterling",
    email: "marcus@sterlinglogistics.com",
    company: "Sterling Freight",
    totalSpent: "$24,800",
    ordersCount: 6,
    tags: ["n8n Workflows", "AI Agents", "Enterprise"],
    status: "VIP",
  },
  {
    id: "cust-04",
    name: "Sophia Chen",
    email: "chen@aurahealth.co",
    company: "Aura Health",
    totalSpent: "$3,400",
    ordersCount: 1,
    tags: ["Voice AI", "Appointments"],
    status: "Active",
  },
];

export default function AdminCustomersPage() {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [search, setSearch] = useState("");

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Customer CRM Profiles"
          subtitle="Enterprise client profiles, spending history, retainers, and tags"
          actions={
            <button className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors">
              + Add Client Profile
            </button>
          }
        />

        <div className="p-8 max-w-6xl space-y-6">
          <div className="flex items-center justify-between gap-4">
            <input
              type="text"
              placeholder="Search by client name, email, or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#09090b] border border-[#1f2023] rounded px-4 py-2 font-mono text-xs text-white w-full max-w-md focus:outline-none focus:border-white"
            />
            <div className="font-mono text-xs text-[#8e9192]">
              Showing {filtered.length} client records
            </div>
          </div>

          <div className="bg-[#09090b] rounded border border-[#1f2023] overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#121316] text-[#8e9192] border-b border-[#1f2023] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Client Name & Company</th>
                  <th className="p-4">Contact Email</th>
                  <th className="p-4">Total Spent</th>
                  <th className="p-4">Orders</th>
                  <th className="p-4">Tags</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2023]">
                {filtered.map((cust) => (
                  <tr key={cust.id} className="hover:bg-[#121316]/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{cust.name}</div>
                      <div className="text-[10px] text-[#8e9192]">{cust.company}</div>
                    </td>
                    <td className="p-4 text-[#c2c4c6]">{cust.email}</td>
                    <td className="p-4 text-[#25D366] font-bold">{cust.totalSpent}</td>
                    <td className="p-4 text-white">{cust.ordersCount} Projects</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {cust.tags.map((t, idx) => (
                          <span key={idx} className="px-1.5 py-0.5 rounded bg-[#1f2023] text-[9px] text-[#c2c4c6]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          cust.status === "VIP"
                            ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                            : "bg-[#25D366]/15 text-[#25D366]"
                        }`}
                      >
                        {cust.status}
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
