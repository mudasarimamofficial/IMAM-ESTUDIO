"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

interface StaffMember {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Sales Engineer" | "Support Specialist" | "Content Editor";
  permissions: string[];
  status: "Active" | "Pending";
}

const mockStaff: StaffMember[] = [
  {
    id: "staff-01",
    name: "Mudasar Imam",
    email: "mudasarimamofficial@gmail.com",
    role: "Owner",
    permissions: ["FULL_SYSTEM_ACCESS", "MANAGE_RBAC", "THEME_EDITOR", "LEADS_FULL"],
    status: "Active",
  },
  {
    id: "staff-02",
    name: "Engineering Operations",
    email: "ops@imamestudio.com",
    role: "Admin",
    permissions: ["THEME_EDITOR", "SERVICES_MANAGE", "LEADS_MANAGE", "ORDERS_READ"],
    status: "Active",
  },
];

export default function AdminRbacPage() {
  const [staff] = useState<StaffMember[]>(mockStaff);

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Staff & Role-Based Access Control (RBAC)"
          subtitle="Enterprise permission matrices, user roles, security audit logging, and access control"
          actions={
            <button className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors">
              + Invite Staff Member
            </button>
          }
        />

        <div className="p-8 max-w-6xl space-y-6">
          <div className="bg-[#09090b] rounded border border-[#1f2023] overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#121316] text-[#8e9192] border-b border-[#1f2023] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Staff Member</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Assigned Permissions</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2023]">
                {staff.map((s) => (
                  <tr key={s.id} className="hover:bg-[#121316]/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{s.name}</div>
                      <div className="text-[10px] text-[#8e9192]">{s.email}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold text-[10px]">
                        {s.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {s.permissions.map((p, idx) => (
                          <span key={idx} className="px-1.5 py-0.5 rounded bg-[#1f2023] text-[9px] text-[#c2c4c6]">
                            {p}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-[#25D366]/15 text-[#25D366] text-[10px] font-bold">
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
