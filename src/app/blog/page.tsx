"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Architecture" | "Shopify" | "Security";
}

const mockPosts: BlogPost[] = [
  {
    slug: "zero-js-liquid-optimization",
    title: "Bypassing JavaScript Overhead: High-Traffic Shopify Plus Optimization",
    excerpt: "How we achieved 99/100 Lighthouse performance using Native Liquid structures and removing heavy layout frameworks.",
    date: "2026-06-28",
    readTime: "8 min read",
    category: "Shopify",
  },
  {
    slug: "supabase-realtime-whiteboard-canvas",
    title: "Designing Multi-User Infinite Canvases with Supabase Realtime Delta Syncing",
    excerpt: "An architectural review of synchronizing absolute coordinates on HTML5 canvas elements with low latency via WebSockets.",
    date: "2026-07-01",
    readTime: "12 min read",
    category: "Architecture",
  },
  {
    slug: "security-auditing-row-level-security",
    title: "Hardening Multi-Tenant SaaS DBs: Row Level Security (RLS) Rules for Financial Isolation",
    excerpt: "A deep dive into writing PostgreSQL RLS assertions for escrow milestones, preventing database leaks in high-stakes workspaces.",
    date: "2026-07-04",
    readTime: "15 min read",
    category: "Security",
  },
];

export default function BlogIndexPage() {
  const [selectedCat, setSelectedCat] = useState<string>("All");

  const filteredPosts = mockPosts.filter((post) => selectedCat === "All" || post.category === selectedCat);

  return (
    <div className="flex-1 bg-black text-[#e3e2e2]">
      <TopNavBar />

      <main className="pt-16 px-6 max-w-5xl mx-auto py-20">
        {/* Header */}
        <div className="border-b border-border pb-8 mb-10">
          <span className="font-mono text-[10px] text-white bg-[#111] border border-border px-2.5 py-1 rounded uppercase tracking-widest">
            Engineering Logs & Insights
          </span>
          <h1 className="font-sans text-3xl font-extrabold text-white mt-4 tracking-tight">Technical Insights</h1>
          <p className="font-sans text-xs text-[#8e9192] mt-1 max-w-md">
            Architectural case studies, optimization guidelines, and security write-ups straight from the compiler console.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {["All", "Architecture", "Shopify", "Security"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`font-mono text-xs px-4 py-2 rounded border transition-all ${
                selectedCat === cat
                  ? "bg-white text-black border-white"
                  : "bg-[#0a0a0a] text-[#c4c7c8] border-border hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post list */}
        <div className="flex flex-col gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="bento-card p-6 rounded-lg border border-border flex flex-col justify-between gap-4 transition-all"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] bg-[#111] border border-border px-2.5 py-0.5 rounded text-[#8e9192]">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#8e9192]">{post.date}</span>
                  <span className="font-mono text-[10px] text-[#8e9192]">•</span>
                  <span className="font-mono text-[10px] text-[#8e9192]">{post.readTime}</span>
                </div>
                <h3 className="font-sans text-lg font-bold text-white mt-3 hover:underline cursor-pointer">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-[#c4c7c8] mt-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-2">
                <button className="font-mono text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 hover:underline">
                  Read Technical Breakdown
                  <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
