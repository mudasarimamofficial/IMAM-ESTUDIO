"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";

interface LeadItem {
  id: string;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  details: string;
  source_cta: string;
  status: "New" | "Contacted" | "In Scoping" | "Closed" | "Archived";
  created_at: string;
}

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (e) {
      console.error("Failed to fetch leads:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const res = await fetch("/api/leads");
        const data = await res.json();
        if (isMounted && data.leads) {
          setLeads(data.leads);
        }
      } catch (e) {
        console.error("Failed to fetch leads:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      fetchLeads();
    } catch (e) {
      console.error("Failed to update status:", e);
    }
  };

  const filteredLeads = leads.filter((l) => {
    if (statusFilter === "All") return true;
    return l.status === statusFilter;
  });

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 sm:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="font-mono text-[10px] text-[#8e9192] uppercase tracking-[0.2em]">
                  EXECUTIVE COMMAND CORE
                </span>
                <h1 className="font-sans text-2xl sm:text-3xl font-bold text-white mt-1">
                  Lead & Inbound Pipeline Management
                </h1>
                <p className="font-sans text-xs text-[#8e9192] mt-1">
                  Real-time client submissions, CTA attribution tracking, and engineering scope management.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={fetchLeads}
                  className="px-4 py-2 bg-white/5 border border-white/10 hover:border-white/30 text-white font-mono text-xs rounded-[2px] transition-colors inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[14px]">refresh</span>
                  <span>Refresh Leads</span>
                </button>
              </div>
            </div>

            {/* Platform Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Total Inbound Leads</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">{leads.length}</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">Active pipeline</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">New Action Required</span>
                <h3 className="font-mono text-xl font-bold text-emerald-400 mt-2">
                  {leads.filter((l) => l.status === "New").length}
                </h3>
                <span className="font-mono text-[8px] text-white/50 mt-1 block">Unprocessed inquiries</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">In Scoping</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">
                  {leads.filter((l) => l.status === "In Scoping").length}
                </h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">Active negotiations</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">WhatsApp Direct Contact</span>
                <h3 className="font-mono text-xl font-bold text-[#e3e2e2] mt-2">+923191106310</h3>
                <span className="font-mono text-[8px] text-[#8e9192] mt-1 block">Floating widget linked</span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              {["All", "New", "Contacted", "In Scoping", "Closed"].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-[2px] transition-colors ${
                    statusFilter === st
                      ? "bg-white text-black font-bold"
                      : "bg-white/5 text-[#8e9192] hover:text-white"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Leads Table */}
            <div className="bg-[#050505] border border-white/10 rounded-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 font-mono text-[10px] text-[#8e9192] uppercase tracking-wider">
                      <th className="p-4">Ref ID / Date</th>
                      <th className="p-4">Client Name & Email</th>
                      <th className="p-4">CTA Origin Source</th>
                      <th className="p-4">Capability & Budget</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs">
                    {loading ? (
                      <tr>
                        <td colSpan={6} className="p-8 text-center font-mono text-xs text-[#8e9192]">
                          Loading pipeline leads...
                        </td>
                      </tr>
                    ) : filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-8 text-center font-mono text-xs text-[#8e9192]">
                          No client leads found for filter status &quot;{statusFilter}&quot;.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-mono">
                            <span className="font-bold text-white block">{lead.id}</span>
                            <span className="text-[10px] text-[#8e9192]">
                              {new Date(lead.created_at).toLocaleDateString()} {new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="font-bold text-white block">{lead.name}</span>
                            <a href={`mailto:${lead.email}`} className="text-[#8e9192] hover:text-white transition-colors">
                              {lead.email}
                            </a>
                          </td>
                          <td className="p-4">
                            <span className="font-mono text-[10px] px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-[2px] inline-block">
                              {lead.source_cta}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="font-semibold text-white block">{lead.project_type}</span>
                            <span className="font-mono text-[10px] text-[#8e9192]">{lead.budget}</span>
                          </td>
                          <td className="p-4">
                            <select
                              value={lead.status}
                              onChange={(e) => handleStatusUpdate(lead.id, e.target.value)}
                              className={`font-mono text-[10px] px-2.5 py-1 rounded-[2px] bg-black border focus:outline-none ${
                                lead.status === "New"
                                  ? "border-emerald-500 text-emerald-400"
                                  : lead.status === "In Scoping"
                                  ? "border-amber-500 text-amber-400"
                                  : lead.status === "Closed"
                                  ? "border-blue-500 text-blue-400"
                                  : "border-white/20 text-[#8e9192]"
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="In Scoping">In Scoping</option>
                              <option value="Closed">Closed</option>
                              <option value="Archived">Archived</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 bg-white/10 hover:bg-white text-white hover:text-black rounded-[2px] transition-all"
                            >
                              View Scope
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scope Modal Viewer */}
            {selectedLead && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
                <div className="bg-[#0a0a0a] border border-white/20 rounded-sm p-8 max-w-2xl w-full shadow-2xl relative">
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="absolute top-6 right-6 font-mono text-xs text-[#8e9192] hover:text-white"
                  >
                    [CLOSE ✕]
                  </button>

                  <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-2">
                    INBOUND CLIENT SCOPE · {selectedLead.id}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">{selectedLead.name}</h2>
                  <p className="font-mono text-xs text-[#8e9192] mb-6">{selectedLead.email}</p>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-black border border-white/10 rounded-sm mb-6 font-mono text-xs">
                    <div>
                      <span className="text-[#8e9192] block mb-1">CTA Origin Action:</span>
                      <span className="text-emerald-400 font-bold">{selectedLead.source_cta}</span>
                    </div>
                    <div>
                      <span className="text-[#8e9192] block mb-1">Target Budget:</span>
                      <span className="text-white font-bold">{selectedLead.budget}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[#8e9192] block mb-1">Primary Capability:</span>
                      <span className="text-white font-bold">{selectedLead.project_type}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block font-mono text-[10px] text-[#8e9192] uppercase tracking-wider mb-2">
                      Client Requirements / Project Details:
                    </label>
                    <div className="p-4 bg-black border border-white/10 rounded-sm text-sm text-[#e3e2e2] leading-relaxed whitespace-pre-wrap">
                      {selectedLead.details}
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                    <a
                      href={`mailto:${selectedLead.email}?subject=${encodeURIComponent(
                        `RE: Imam Estudio Scope ${selectedLead.id} (${selectedLead.project_type})`
                      )}`}
                      className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase rounded-[2px]"
                    >
                      Email Client
                    </a>
                    <a
                      href={`https://wa.me/923191106310?text=${encodeURIComponent(
                        `Hi ${selectedLead.name}, I am following up on your Imam Estudio inquiry ${selectedLead.id}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#25D366] text-black font-mono text-xs font-bold uppercase rounded-[2px]"
                    >
                      WhatsApp Client
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
