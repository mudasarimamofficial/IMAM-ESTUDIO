"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";

export interface ExpertProfile {
  id: string;
  name: string;
  avatar: string;
  role: "Verified Expert" | "Senior Expert" | "Founder";
  rating: number;
  category: "Shopify" | "AI & Automation" | "Full Stack";
  skills: string[];
  availability: "Active" | "Pending" | "Full";
  hourlyRate: number;
}

const mockExperts: ExpertProfile[] = [
  {
    id: "EXP-001",
    name: "Mudasar Imam",
    avatar: "https://lh3.googleusercontent.com/aida-public/profile1",
    role: "Founder",
    rating: 5.0,
    category: "Shopify",
    skills: ["Liquid", "headless storefronts", "React", "Next.js", "n8n Swarms"],
    availability: "Active",
    hourlyRate: 150,
  },
  {
    id: "EXP-002",
    name: "Sarah Jenkins",
    avatar: "https://lh3.googleusercontent.com/aida-public/profile2",
    role: "Senior Expert",
    rating: 4.95,
    category: "AI & Automation",
    skills: ["n8n", "LangChain", "Voice Agents", "Python", "PostgreSQL"],
    availability: "Active",
    hourlyRate: 120,
  },
  {
    id: "EXP-003",
    name: "Vikram Mehta",
    avatar: "https://lh3.googleusercontent.com/aida-public/profile3",
    role: "Verified Expert",
    rating: 4.88,
    category: "Full Stack",
    skills: ["TypeScript", "Next.js", "Node.js", "Docker", "AWS"],
    availability: "Active",
    hourlyRate: 95,
  },
  {
    id: "EXP-004",
    name: "Elena Rostova",
    avatar: "https://lh3.googleusercontent.com/aida-public/profile4",
    role: "Verified Expert",
    rating: 4.9,
    category: "Shopify",
    skills: ["Liquid", "Hydrogen", "Shopify API", "GraphQL"],
    availability: "Full",
    hourlyRate: 100,
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredExperts = mockExperts.filter((exp) => {
    const matchesSearch =
      exp.name.toLowerCase().includes(search.toLowerCase()) ||
      exp.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || exp.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 bg-black text-[#e3e2e2]">
      <TopNavBar />

      <main className="pt-16 px-6 max-w-5xl mx-auto py-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-8 mb-10 gap-6">
          <div>
            <h1 className="font-sans text-3xl font-extrabold text-white tracking-tight">Vetted Expert Directory</h1>
            <p className="font-sans text-xs text-[#8e9192] mt-1 max-w-md">
              Discover verified technical talent audited through automated code assessments and active execution gates.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8e9192] text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search skills or names..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#222222] focus:border-white text-white font-mono text-xs rounded pl-10 pr-4 py-2.5 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["All", "Shopify", "AI & Automation", "Full Stack"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-xs px-4 py-2 rounded border transition-all ${
                selectedCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-[#0a0a0a] text-[#c4c7c8] border-border hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExperts.length === 0 ? (
            <div className="col-span-full py-16 text-center text-xs font-mono text-[#8e9192] border border-dashed border-border rounded-lg">
              No matching experts or developers found in the workspace index.
            </div>
          ) : (
            filteredExperts.map((exp) => (
              <div
                key={exp.id}
                className="bento-card p-6 rounded-lg border border-border flex flex-col justify-between gap-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded bg-[#111] border border-border flex items-center justify-center font-mono text-white text-base font-bold uppercase">
                      {exp.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-extrabold text-white tracking-tight">
                        {exp.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-[10px] text-white/50">{exp.role}</span>
                        <div className="flex items-center text-amber-400 gap-0.5">
                          <span className="material-symbols-outlined text-[12px] fill-current">star</span>
                          <span className="font-mono text-[10px]">{exp.rating.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <StatusBadge status={exp.availability} />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[9px] bg-[#111] border border-border text-[#c4c7c8] px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#111111]">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-[#8e9192] uppercase">Consulation Rate</span>
                    <span className="font-mono text-xs font-bold text-white">${exp.hourlyRate}/hr</span>
                  </div>

                  <Link
                    href={`/buyer/proposal-builder?expert=${exp.id}`}
                    className="px-4 py-2 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-opacity-90 rounded-[2px]"
                  >
                    Request Brief
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
