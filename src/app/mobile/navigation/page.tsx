"use client";

import React from "react";
import Link from "next/link";

export default function MobileNavigationPage() {
  return (
    <div className="flex-1 bg-black text-[#e3e2e2] min-h-screen flex flex-col p-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-border pb-4 mb-8">
        <span className="font-sans text-lg font-bold text-white tracking-tighter">IMAM ESTUDIO</span>
        <Link href="/" className="text-white">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-6 font-sans text-lg font-bold text-white">
        <Link href="/" className="hover:text-[#8e9192] transition-colors py-2 flex items-center gap-3">
          <span className="material-symbols-outlined">home</span>
          Home
        </Link>
        <Link href="/marketplace" className="hover:text-[#8e9192] transition-colors py-2 flex items-center gap-3">
          <span className="material-symbols-outlined">storefront</span>
          Marketplace
        </Link>
        <Link href="/blog" className="hover:text-[#8e9192] transition-colors py-2 flex items-center gap-3">
          <span className="material-symbols-outlined">article</span>
          Insights Blog
        </Link>
        <Link href="/about" className="hover:text-[#8e9192] transition-colors py-2 flex items-center gap-3">
          <span className="material-symbols-outlined">info</span>
          About Agency
        </Link>
        <Link href="/login" className="hover:text-[#8e9192] transition-colors py-2 flex items-center gap-3">
          <span className="material-symbols-outlined">login</span>
          Account Gateway
        </Link>
      </div>

      {/* Foot / Active state panel */}
      <div className="border-t border-border pt-6 mt-auto flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] text-[#c4c7c8] uppercase tracking-wider">
            Operational Node Status: Online
          </span>
        </div>
        <p className="font-sans text-[10px] text-[#8e9192]">
          IMAM OS v1.0.4-stable | All security checks and RLS systems enabled.
        </p>
      </div>
    </div>
  );
}
