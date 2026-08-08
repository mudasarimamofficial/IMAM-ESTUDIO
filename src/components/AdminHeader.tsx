"use client";

import React from "react";
import Link from "next/link";

interface AdminHeaderProps {
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
}

export default function AdminHeader({ title, subtitle, actions }: AdminHeaderProps) {
  return (
    <header className="px-8 py-6 border-b border-[#1f2023] bg-[#09090b] flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#8e9192]">IMAM ESTUDIO CONTROL PLANE</span>
          <span className="text-[#8e9192]">•</span>
          <span className="font-mono text-[10px] text-[#25D366] font-semibold">PRODUCTION LIVE</span>
        </div>
        <h1 className="font-mono text-2xl font-bold text-white tracking-tight">{title}</h1>
        <p className="font-mono text-xs text-[#8e9192] mt-0.5">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        {actions}
        <Link
          href="/"
          target="_blank"
          className="px-3.5 py-2 rounded bg-[#1f2023] hover:bg-[#2b2c30] text-xs font-mono text-white border border-[#333] transition-colors flex items-center gap-1.5"
        >
          <span>Live Site</span>
          <span className="text-[10px] text-[#8e9192]">↗</span>
        </Link>
      </div>
    </header>
  );
}
