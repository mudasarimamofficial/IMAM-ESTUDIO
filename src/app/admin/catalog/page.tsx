"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

interface Product {
  id: string;
  title: string;
  sku: string;
  price: string;
  inventory: number;
  status: "Active" | "Draft" | "Archived";
  vendor: string;
  type: string;
}

const mockProducts: Product[] = [
  {
    id: "prod-01",
    title: "Shopify Custom Section Pack (Liquid 2.0)",
    sku: "IE-SHPFY-SEC-01",
    price: "$49.00",
    inventory: 999,
    status: "Active",
    vendor: "Imam Estudio",
    type: "Digital Theme Assets",
  },
  {
    id: "prod-02",
    title: "n8n Automation Starter Kit for E-Commerce",
    sku: "IE-N8N-KIT-02",
    price: "$149.00",
    inventory: 999,
    status: "Active",
    vendor: "Imam Estudio",
    type: "Workflow Blueprint",
  },
  {
    id: "prod-03",
    title: "AI Voice Agent Receptionist Telephony Setup",
    sku: "IE-VOICE-AGNT-03",
    price: "$299.00",
    inventory: 50,
    status: "Active",
    vendor: "Imam Estudio",
    type: "Engineered System",
  },
  {
    id: "prod-04",
    title: "Headless Next.js Shopify Starter Boilerplate",
    sku: "IE-HDLSS-NEXT-04",
    price: "$399.00",
    inventory: 999,
    status: "Active",
    vendor: "Imam Estudio",
    type: "Code Architecture",
  },
];

export default function AdminCatalogPage() {
  const [products] = useState<Product[]>(mockProducts);

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Products & Inventory Catalog"
          subtitle="Shopify-style product catalog, digital assets, starter kits, and license inventory"
          actions={
            <button className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors">
              + Add Product
            </button>
          }
        />

        <div className="p-8 max-w-6xl space-y-6">
          <div className="bg-[#09090b] rounded border border-[#1f2023] overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#121316] text-[#8e9192] border-b border-[#1f2023] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Product Title</th>
                  <th className="p-4">SKU</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Inventory</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2023]">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-[#121316]/50 transition-colors">
                    <td className="p-4 font-bold text-white">{p.title}</td>
                    <td className="p-4 text-[#8e9192]">{p.sku}</td>
                    <td className="p-4 text-[#c2c4c6]">{p.type}</td>
                    <td className="p-4 text-[#25D366] font-bold">{p.price}</td>
                    <td className="p-4 text-white">{p.inventory} in stock</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-[#25D366]/15 text-[#25D366] text-[10px] font-bold">
                        {p.status}
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
