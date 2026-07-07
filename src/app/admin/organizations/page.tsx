"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";
import StatusBadge from "@/components/StatusBadge";

interface OrgMember {
  email: string;
  role: string;
  teams: string;
  joined: string;
  status: string;
}

const mockMembers: OrgMember[] = [
  { email: "mudasarimamofficial@gmail.com", role: "Founder / Super Admin", teams: "Core Architecture, Operations", joined: "2026-07-01", status: "active" },
  { email: "collaborator.dev@imamos.com", role: "Senior Expert", teams: "Stripe Integrations", joined: "2026-07-05", status: "active" },
  { email: "pending.applicant@gmail.com", role: "Applicant", teams: "Pending Assignment", joined: "2026-07-06", status: "pending" },
];

export default function OrganizationManagementPage() {
  const [members, setMembers] = useState<OrgMember[]>(mockMembers);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("expert");

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    setMembers((prev) => [
      ...prev,
      {
        email: inviteEmail,
        role: inviteRole,
        teams: "Assigned upon accept",
        joined: new Date().toISOString().split("T")[0],
        status: "pending",
      },
    ]);
    setInviteEmail("");
  };

  const columns = [
    {
      header: "Member Email",
      accessor: (item: OrgMember) => <span className="text-white font-semibold">{item.email}</span>,
      sortable: true,
    },
    {
      header: "Role / Persona",
      accessor: "role" as keyof OrgMember,
      sortable: true,
    },
    {
      header: "Active Teams",
      accessor: "teams" as keyof OrgMember,
    },
    {
      header: "Joined Date",
      accessor: "joined" as keyof OrgMember,
      sortable: true,
    },
    {
      header: "Seat Status",
      accessor: (item: OrgMember) => <StatusBadge status={item.status} />,
    },
  ];

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
                <span className="font-mono text-[10px] text-[#8e9192]">ORGANIZATION SEATS & DEPARTMENTS</span>
                <h1 className="font-sans text-2xl font-bold text-white mt-1">Enterprise Organization Oversight</h1>
                <p className="font-sans text-xs text-[#8e9192] mt-1">
                  Provision developer seats, allocate agency roles, audit user permissions, and track active team invite links.
                </p>
              </div>
            </div>

            {/* Seat Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Seats Provisioned</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">12 / 20 Seats</h3>
                <div className="w-full bg-[#111] h-1.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-white h-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Pending Invites</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">2 Sent</h3>
                <span className="font-mono text-[8px] text-[#8e9192] mt-1 block">Awaiting credential challenge verify</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Admin Overhead</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">1 Founder / 1 Admin</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">Zero security anomalies logged</span>
              </div>
            </div>

            {/* Invite Form */}
            <section className="bg-[#0a0a0a] border border-border p-6 rounded-lg flex flex-col gap-4">
              <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Invite Member seat</h3>
              <form onSubmit={handleInvite} className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Invite user email address..."
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="flex-1 bg-[#030303] border border-border text-white text-xs px-4 py-2.5 rounded-[2px] outline-none"
                  required
                />
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="bg-[#030303] border border-border text-white text-xs px-4 py-2.5 rounded-[2px] outline-none"
                >
                  <option value="expert">Senior Expert</option>
                  <option value="moderator">Moderator</option>
                  <option value="client">Client</option>
                </select>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold rounded-[2px] uppercase hover:bg-opacity-90 whitespace-nowrap"
                >
                  Send Seat Invite
                </button>
              </form>
            </section>

            {/* Members grid */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Organizational Directory</h3>
              <DataGrid columns={columns} data={members} searchField="email" searchPlaceholder="Search members..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
