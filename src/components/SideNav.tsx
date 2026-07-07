"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  // Helper to determine active section
  const isWorkspace = pathname.startsWith("/workspace");
  const isBuyer = pathname.startsWith("/buyer");
  const isExpert = pathname.startsWith("/expert");
  const isAdmin = pathname.startsWith("/admin");

  const getMenuConfig = () => {
    if (isWorkspace) {
      const workspaceId = pathname.split("/")[2] || "default-id";
      return {
        title: "Workspace OS",
        version: "v1.0.4-live",
        links: [
          { name: "Project Dashboard", href: `/workspace/${workspaceId}`, icon: "grid_view" },
          { name: "Real-time Whiteboard", href: `/workspace/${workspaceId}/whiteboard`, icon: "design_services" },
          { name: "Live Chat Channel", href: `/workspace/${workspaceId}/chat`, icon: "forum" },
          { name: "Escrow Milestones", href: `/buyer/billing`, icon: "payments" },
        ],
      };
    }

    if (isBuyer) {
      return {
        title: "Client Workspace",
        version: "v1.0.1-stable",
        links: [
          { name: "Strategic Dashboard", href: "/buyer/dashboard", icon: "dashboard" },
          { name: "Proposal Builder", href: "/buyer/proposal-builder", icon: "description" },
          { name: "Escrow & Invoices", href: "/buyer/billing", icon: "account_balance_wallet" },
        ],
      };
    }

    if (isExpert) {
      return {
        title: "Expert Cockpit",
        version: "v1.1.2-beta",
        links: [
          { name: "Operational Console", href: "/expert/dashboard", icon: "analytics" },
          { name: "Vetting Crucible", href: "/expert/onboarding", icon: "shield" },
          { name: "Authority Builder", href: "/expert/portfolio", icon: "badge" },
          { name: "Payout Ledger", href: "/expert/ledger", icon: "receipt_long" },
        ],
      };
    }

    if (isAdmin) {
      return {
        title: "Executive Core",
        version: "v2.0.0-admin",
        links: [
          { name: "Platform Health", href: "/admin/dashboard", icon: "monitoring" },
          { name: "Talent Vetting Queue", href: "/admin/vetting", icon: "fact_check" },
          { name: "RBAC Policy Matrix", href: "/admin/rbac", icon: "security" },
          { name: "Disputes Arbitrator", href: "/admin/disputes", icon: "gavel" },
          { name: "Telemetry Monitor", href: "/admin/system", icon: "settings_input_component" },
        ],
      };
    }

    // Default Fallback: Public Admin / Portal Directory
    return {
      title: "IMAM OS",
      version: "v1.0.4-stable",
      links: [
        { name: "Client Workspace", href: "/buyer/dashboard", icon: "dashboard" },
        { name: "Expert Cockpit", href: "/expert/dashboard", icon: "analytics" },
        { name: "Executive Hub", href: "/admin/dashboard", icon: "shield_person" },
        { name: "Home Dashboard", href: "/", icon: "home" },
      ],
    };
  };

  const { title, version, links } = getMenuConfig();

  return (
    <aside className="hidden md:flex flex-col h-full py-6 px-4 gap-4 bg-[#0d0e0f] border-r border-border w-64 fixed left-0 top-16 bottom-0 z-40">
      <div className="mb-6 px-2">
        <div className="font-sans text-lg font-black text-white tracking-tight">{title}</div>
        <div className="font-mono text-xs tracking-tight text-[#8e9192] mt-1">{version}</div>
      </div>

      {/* Primary Action Button */}
      {isWorkspace && (
        <button className="bg-white text-black font-mono text-xs font-semibold py-2.5 px-4 rounded w-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all mb-4">
          <span className="material-symbols-outlined text-[16px]">sync</span>
          Sync Local Cache
        </button>
      )}

      {isBuyer && (
        <Link
          href="/buyer/proposal-builder"
          className="bg-white text-black font-mono text-xs font-semibold py-2.5 px-4 rounded w-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all mb-4"
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          New Proposal Request
        </Link>
      )}

      <div className="flex-1 flex flex-col gap-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded font-mono text-xs cursor-pointer transition-all duration-150 ${
                isActive
                  ? "bg-[#111111] text-white border-r-2 border-white"
                  : "text-[#c4c7c8] hover:text-white hover:bg-[#0a0a0a]"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-4 border-t border-[#111111] flex flex-col gap-1">
        <Link
          href="/about"
          className="flex items-center gap-3 px-3 py-2 rounded text-[#c4c7c8] hover:text-white hover:bg-[#0a0a0a] font-mono text-xs cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">description</span>
          Vision Docs
        </Link>
        <Link
          href="/admin/system"
          className="flex items-center gap-3 px-3 py-2 rounded text-[#c4c7c8] hover:text-white hover:bg-[#0a0a0a] font-mono text-xs cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">help</span>
          Sys Diagnostics
        </Link>
      </div>
    </aside>
  );
}
