"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import StatusBadge from "@/components/StatusBadge";

interface IPAccessRule {
  range: string;
  description: string;
  status: string;
}

const initialRules: IPAccessRule[] = [
  { range: "10.0.0.0/8", description: "Corporate Primary VPN", status: "active" },
  { range: "192.168.1.1/32", description: "Founder HQ Office", status: "active" },
];

export default function SecuritySettingsPage() {
  const [rules, setRules] = useState<IPAccessRule[]>(initialRules);
  const [newRange, setNewRange] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const addRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRange) return;
    setRules((prev) => [...prev, { range: newRange, description: newDesc || "Custom IP Rule", status: "active" }]);
    setNewRange("");
    setNewDesc("");
  };

  const removeRule = (range: string) => {
    setRules((prev) => prev.filter((r) => r.range !== range));
  };

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
              <div>
                <span className="font-mono text-[10px] text-[#8e9192]">SECURITY & TRUST POLICY</span>
                <h1 className="font-sans text-2xl font-bold text-white mt-1">Enterprise Configuration & Compliance</h1>
                <p className="font-sans text-xs text-[#8e9192] mt-1">
                  Manage Single Sign-On, IP access control, security parameters, and OAuth application link nodes.
                </p>
              </div>

              <div className="flex gap-2">
                <button className="px-6 py-2.5 bg-[#111] hover:bg-[#222] text-white font-mono text-xs border border-border rounded-[2px] uppercase">
                  Export Audit PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Tab Nav */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col gap-1 overflow-x-auto">
                <button className="px-4 py-3 bg-[#111] text-white font-sans text-xs font-semibold rounded text-left border border-border w-full flex items-center gap-3">
                  <span className="material-symbols-outlined text-[16px]">security</span>
                  SSO & IP Rules
                </button>
                <button className="px-4 py-3 bg-transparent text-[#8e9192] hover:text-white font-sans text-xs rounded text-left w-full flex items-center gap-3">
                  <span className="material-symbols-outlined text-[16px]">policy</span>
                  Compliance Logs
                </button>
                <button className="px-4 py-3 bg-transparent text-[#8e9192] hover:text-white font-sans text-xs rounded text-left w-full flex items-center gap-3">
                  <span className="material-symbols-outlined text-[16px]">api</span>
                  API Tokens
                </button>
              </div>

              {/* Main Panel */}
              <div className="lg:col-span-9 flex flex-col gap-8">
                {/* SSO Section */}
                <section className="bg-[#0a0a0a] border border-border p-6 rounded-lg flex flex-col gap-6">
                  <div className="border-b border-[#111] pb-3">
                    <h2 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Single Sign-On (SSO)</h2>
                    <p className="font-sans text-xs text-[#8e9192] mt-1">Configure SAML or OpenID Connect identity assertion endpoints.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-[#8e9192] uppercase">Identity Provider</label>
                      <select className="bg-[#030303] border border-border text-white text-xs px-4 py-2.5 rounded-[2px] outline-none">
                        <option>Okta Enterprise</option>
                        <option>Azure Active Directory</option>
                        <option>Google Workspace Cloud</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-[#8e9192] uppercase">Metadata URL</label>
                      <input
                        type="text"
                        className="bg-[#030303] border border-border text-white text-xs px-4 py-2.5 rounded-[2px] outline-none"
                        defaultValue="https://okta.imamos.com/app/exk..."
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-[#111] border border-border rounded flex justify-between items-center">
                    <div>
                      <h4 className="font-sans text-xs font-semibold text-white">Enforce Identity Sign-On</h4>
                      <p className="font-sans text-[10px] text-[#8e9192] mt-0.5">Disable local username and password logins for team members.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-white rounded bg-[#030303] border-border" />
                  </div>
                </section>

                {/* IP Allowlisting */}
                <section className="bg-[#0a0a0a] border border-border p-6 rounded-lg flex flex-col gap-6">
                  <div className="border-b border-[#111] pb-3">
                    <h2 className="font-sans text-sm font-bold text-white uppercase tracking-wider">IP Firewall Restrictions</h2>
                    <p className="font-sans text-xs text-[#8e9192] mt-1">Protect access endpoints by locking dashboard routes to CIDR blocks.</p>
                  </div>

                  <form onSubmit={addRule} className="flex flex-col md:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="CIDR Range (e.g. 10.0.0.0/8)"
                      value={newRange}
                      onChange={(e) => setNewRange(e.target.value)}
                      className="flex-1 bg-[#030303] border border-border text-white text-xs px-4 py-2.5 rounded-[2px] outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      className="flex-1 bg-[#030303] border border-border text-white text-xs px-4 py-2.5 rounded-[2px] outline-none"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold rounded-[2px] uppercase hover:bg-opacity-90 whitespace-nowrap"
                    >
                      Add Rule
                    </button>
                  </form>

                  <div className="border border-border rounded overflow-hidden">
                    <table className="w-full text-left font-mono text-[10px]">
                      <thead className="bg-[#111] text-[#8e9192] border-b border-border">
                        <tr>
                          <th className="p-3">IP / CIDR Range</th>
                          <th className="p-3">Description</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#111] text-[#c4c7c8]">
                        {rules.map((rule) => (
                          <tr key={rule.range} className="hover:bg-[#030303]">
                            <td className="p-3 font-semibold text-white">{rule.range}</td>
                            <td className="p-3">{rule.description}</td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => removeRule(rule.range)}
                                className="text-red-400 hover:text-red-300 font-sans text-[10px] font-semibold"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
