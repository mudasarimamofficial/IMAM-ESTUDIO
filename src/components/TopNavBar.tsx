"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const pathname = usePathname();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigationLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  const filteredRoutes = searchQuery
    ? [
        { title: "Home", url: "/" },
        { title: "Portfolio & Case Studies", url: "/work" },
        { title: "Engineering Services", url: "/services" },
        { title: "About Mudasar Imam", url: "/about" },
        { title: "Engineering Process", url: "/process" },
        { title: "Contact & Project Inquiry", url: "/contact" },
      ].filter((r) => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 md:px-10 border-b border-white/5 bg-[#020202]/90 backdrop-blur-md">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-sans text-xl font-extrabold tracking-tighter text-white hover:opacity-90">
            IMAM ESTUDIO
          </Link>
          <div className="hidden lg:flex gap-8">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-sans tracking-wide transition-colors ${
                    isActive ? "text-white font-semibold" : "text-[#8e9192] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Command Palette Trigger */}
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#8e9192] bg-transparent hover:text-white transition-all active:scale-98"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-block ml-1 text-[10px] text-[#8e9192] font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Project CTA */}
          <Link
            href="/contact"
            className="px-5 py-2 text-xs font-bold font-sans tracking-wide bg-white text-black hover:bg-opacity-90 transition-all rounded-[2px] flex items-center"
          >
            Start a Project
          </Link>
        </div>
      </nav>

      {/* Command Palette Modal */}
      {commandPaletteOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#0a0a0a] rounded-sm border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10 bg-[#050505]">
              <span className="material-symbols-outlined text-white/50 text-[18px]">search</span>
              <input
                type="text"
                autoFocus
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-white/30 border-none outline-none focus:ring-0 font-sans"
              />
              <button
                onClick={() => {
                  setCommandPaletteOpen(false);
                  setSearchQuery("");
                }}
                className="text-[10px] font-mono text-[#8e9192] hover:text-white uppercase tracking-widest"
              >
                ESC
              </button>
            </div>
            <div className="p-2 max-h-72 overflow-y-auto bg-[#0a0a0a]">
              {searchQuery === "" ? (
                <div className="p-6 text-center text-xs text-[#8e9192] font-mono">
                  Navigate portfolio, services, or case studies...
                </div>
              ) : filteredRoutes.length === 0 ? (
                <div className="p-6 text-center text-xs text-red-400 font-mono">No matching screens found.</div>
              ) : (
                <div className="flex flex-col gap-1 p-2">
                  {filteredRoutes.map((route) => (
                    <Link
                      key={route.url}
                      href={route.url}
                      onClick={() => {
                        setCommandPaletteOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center justify-between p-3 rounded-sm hover:bg-[#111111] transition-colors group"
                    >
                      <span className="text-sm font-sans font-medium text-white group-hover:text-emerald-400 transition-colors">{route.title}</span>
                      <span className="text-[10px] font-mono text-[#8e9192]">{route.url}</span>
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
