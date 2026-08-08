"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavGroup {
  group: string;
  items: Array<{ label: string; href: string; badge?: string }>;
}

const adminNavigation: NavGroup[] = [
  {
    group: "CORE CONTROL",
    items: [
      { label: "Executive Dashboard", href: "/admin/dashboard" },
      { label: "Theme & Page Builder", href: "/admin/theme" },
      { label: "Services Catalog", href: "/admin/services" },
      { label: "Case Studies & Work", href: "/admin/projects" },
    ],
  },
  {
    group: "CLIENTS & PIPELINE",
    items: [
      { label: "Leads & CRM Pipeline", href: "/admin/leads", badge: "Live" },
      { label: "Customer Profiles", href: "/admin/customers" },
    ],
  },
  {
    group: "COMMERCE & CATALOG",
    items: [
      { label: "Products & Inventory", href: "/admin/catalog" },
      { label: "Orders & Fulfillment", href: "/admin/orders" },
      { label: "Discounts & Campaigns", href: "/admin/marketing" },
    ],
  },
  {
    group: "ASSETS & OPTIMIZATION",
    items: [
      { label: "Media Library", href: "/admin/media" },
      { label: "SEO Control Center", href: "/admin/seo" },
      { label: "Automations & n8n", href: "/admin/automations" },
    ],
  },
  {
    group: "GOVERNANCE & SYSTEM",
    items: [
      { label: "Staff & RBAC", href: "/admin/rbac" },
      { label: "Studio Settings", href: "/admin/settings" },
    ],
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0a0a0b] border-r border-[#1f2023] flex flex-col h-screen sticky top-0 text-[#e3e2e2] select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-[#1f2023] flex items-center justify-between">
        <Link href="/admin/dashboard" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded bg-[#ffffff] text-[#020202] font-mono font-bold text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
            IE
          </div>
          <div>
            <div className="font-mono text-xs font-bold tracking-wider text-white">IMAM ESTUDIO</div>
            <div className="font-mono text-[10px] text-[#8e9192]">CONTROL PLANE v2.4</div>
          </div>
        </Link>
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" title="System Live & Connected" />
      </div>

      {/* Nav Section Groups */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-[#1f2023]">
        {adminNavigation.map((group, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="px-3 font-mono text-[10px] font-bold text-[#8e9192] tracking-widest uppercase">
              {group.group}
            </div>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2 rounded text-xs font-mono transition-colors ${
                      isActive
                        ? "bg-[#1f2023] text-white font-semibold border-l-2 border-white"
                        : "text-[#c2c4c6] hover:bg-[#121316] hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Founder & Environment Footer */}
      <div className="p-4 border-t border-[#1f2023] bg-[#020202] flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1f2023] to-[#2b2c30] border border-[#333] flex items-center justify-center font-mono text-xs text-white">
          MI
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-xs font-semibold text-white truncate">Mudasar Imam</div>
          <div className="font-mono text-[10px] text-[#8e9192] truncate">Founder & Lead Engineer</div>
        </div>
        <Link href="/" target="_blank" className="text-[#8e9192] hover:text-white p-1 text-xs" title="View Public Website">
          ↗
        </Link>
      </div>
    </aside>
  );
}
