"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const pathname = usePathname();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigationLinks = [
    { name: "Homepage", href: "/" },
    { name: "Talent Directory", href: "/marketplace" },
    { name: "Services", href: "/services/shopify-expert" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  const filteredRoutes = searchQuery
    ? [
        { title: "Founder Authority Homepage", url: "/" },
        { title: "Expert Directory Marketplace", url: "/marketplace" },
        { title: "Shopify Development Service", url: "/services/shopify-expert" },
        { title: "AI Voice Agents Service", url: "/services/ai-voice-agents" },
        { title: "Automation Systems Service", url: "/services/automation-workflows" },
        { title: "Agency Vision & About", url: "/about" },
        { title: "Vetting Crucible", url: "/expert/onboarding" },
        { title: "System Health Monitor", url: "/admin/system" },
        { title: "Escrow billing Hub", url: "/buyer/billing" },
      ].filter((r) => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 md:px-10 border-b border-border bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-sans text-xl font-bold tracking-tighter text-white hover:opacity-90">
            IMAM ESTUDIO
          </Link>
          <div className="hidden lg:flex gap-6">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-[#c4c7c8]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Command Palette Trigger */}
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#c4c7c8] bg-[#0d0e0f] border border-border hover:border-white/30 rounded transition-all active:scale-98"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-[#1b1c1c] text-[#8e9192] rounded font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Quick Dashboard Entry */}
          <Link
            href="/login"
            className="px-4 py-2 text-xs font-semibold bg-white text-black hover:bg-opacity-90 transition-all rounded-[4px] min-h-[38px] flex items-center"
          >
            Client Portal
          </Link>
        </div>
      </nav>

      {/* Command Palette Modal */}
      {commandPaletteOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg glass-panel rounded-lg border border-border overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#0d0e0f]">
              <span className="material-symbols-outlined text-white/60">search</span>
              <input
                type="text"
                autoFocus
                placeholder="Type a path or screen name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-white/30 border-none outline-none focus:ring-0"
              />
              <button
                onClick={() => {
                  setCommandPaletteOpen(false);
                  setSearchQuery("");
                }}
                className="text-xs text-[#8e9192] hover:text-white"
              >
                ESC
              </button>
            </div>
            <div className="p-2 max-h-72 overflow-y-auto bg-black">
              {searchQuery === "" ? (
                <div className="p-4 text-center text-xs text-[#8e9192] font-mono">
                  Search system workspaces, admin logs, or service calculators...
                </div>
              ) : filteredRoutes.length === 0 ? (
                <div className="p-4 text-center text-xs text-error font-mono">No matching screens found.</div>
              ) : (
                <div className="flex flex-col gap-1">
                  {filteredRoutes.map((route) => (
                    <Link
                      key={route.url}
                      href={route.url}
                      onClick={() => {
                        setCommandPaletteOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center justify-between p-3 rounded hover:bg-[#111111] transition-colors"
                    >
                      <span className="text-sm font-medium text-white">{route.title}</span>
                      <span className="text-xs font-mono text-[#8e9192]">{route.url}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
