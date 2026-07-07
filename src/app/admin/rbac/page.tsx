"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";

interface PermissionRow {
  name: string;
  icon: string;
  scope: string; // 'Data Access' | 'Financial Operations'
  guest: boolean;
  member: boolean;
  editor: boolean;
  manager: boolean;
  admin: boolean;
  superAdmin: boolean;
}

const initialPermissions: PermissionRow[] = [
  {
    name: "View Global Dashboards",
    icon: "visibility",
    scope: "Data Access",
    guest: false,
    member: true,
    editor: true,
    manager: true,
    admin: true,
    superAdmin: true,
  },
  {
    name: "Edit Organization Details",
    icon: "edit_document",
    scope: "Data Access",
    guest: false,
    member: false,
    editor: false,
    manager: true,
    admin: true,
    superAdmin: true,
  },
  {
    name: "View Ledgers",
    icon: "receipt_long",
    scope: "Financial Operations",
    guest: false,
    member: false,
    editor: false,
    manager: true,
    admin: true,
    superAdmin: true,
  },
  {
    name: "Approve Transactions",
    icon: "verified",
    scope: "Financial Operations",
    guest: false,
    member: false,
    editor: false,
    manager: false,
    admin: true,
    superAdmin: true,
  },
];

export default function AdminRBACPage() {
  const [permissions, setPermissions] = useState<PermissionRow[]>(initialPermissions);
  const [toastMessage, setToastMessage] = useState("");

  const togglePermission = (rowIdx: number, role: keyof PermissionRow) => {
    setPermissions((prev) =>
      prev.map((row, idx) => {
        if (idx === rowIdx && typeof row[role] === "boolean") {
          return { ...row, [role]: !row[role] };
        }
        return row;
      })
    );
  };

  const handleSavePolicy = () => {
    setToastMessage("Global RBAC Policy successfully synchronized and applied to all workspace tenants.");
    setTimeout(() => setToastMessage(""), 4000);
  };

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
              <div>
                <span className="font-mono text-[10px] text-[#8e9192]">GOVERNANCE PLATFORM</span>
                <h1 className="font-sans text-2xl font-bold text-white mt-1">Permission Matrix</h1>
                <p className="font-sans text-xs text-[#8e9192] mt-1">
                  Configure global Role-Based Access Control (RBAC) policies. Changes made here affect the entire ecosystem immediately.
                </p>
              </div>

              <button
                onClick={handleSavePolicy}
                className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase rounded-[2px] hover:bg-opacity-90 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">save</span>
                Save Global Policy
              </button>
            </div>

            {toastMessage && (
              <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 p-3 rounded">
                {toastMessage}
              </div>
            )}

            {/* Matrix table container */}
            <div className="glass-panel border border-border rounded-lg overflow-hidden flex flex-col">
              {/* Table Header */}
              <div className="flex border-b border-border bg-[#0d0e0f] font-mono text-[10px] font-semibold text-[#8e9192] uppercase tracking-wider">
                <div className="w-64 p-4 border-r border-border flex items-center">Permission Scope</div>
                <div className="flex-1 grid grid-cols-6 text-center">
                  <div className="p-4 border-r border-border flex flex-col items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">person</span>
                    Guest
                  </div>
                  <div className="p-4 border-r border-border flex flex-col items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">group</span>
                    Member
                  </div>
                  <div className="p-4 border-r border-border flex flex-col items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                    Editor
                  </div>
                  <div className="p-4 border-r border-border flex flex-col items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">manage_accounts</span>
                    Manager
                  </div>
                  <div className="p-4 border-r border-border flex flex-col items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-white">admin_panel_settings</span>
                    Admin
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center gap-1 bg-[#1c1c1c] text-white">
                    <span className="material-symbols-outlined text-[16px]">shield</span>
                    Super Admin
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="flex-1 flex flex-col">
                {["Data Access", "Financial Operations"].map((scope) => {
                  const scopeRows = permissions.filter((r) => r.scope === scope);
                  return (
                    <div key={scope} className="flex flex-col">
                      {/* Section label */}
                      <div className="bg-[#0a0a0a] border-b border-border p-2 px-4 font-mono text-[9px] text-[#8e9192] uppercase tracking-widest">
                        {scope}
                      </div>

                      {/* Rows */}
                      {scopeRows.map((row, rowIdx) => {
                        const originalIdx = permissions.findIndex((r) => r.name === row.name);
                        return (
                          <div
                            key={row.name}
                            className="flex border-b border-[#111] hover:bg-[#080808] transition-colors"
                          >
                            {/* Scope title */}
                            <div className="w-64 p-4 border-r border-border flex items-center gap-2 text-xs font-semibold text-white">
                              <span className="material-symbols-outlined text-[16px] text-[#8e9192]">
                                {row.icon}
                              </span>
                              {row.name}
                            </div>

                            {/* Checkbox columns */}
                            <div className="flex-1 grid grid-cols-6 items-center">
                              {/* Guest */}
                              <div className="p-4 border-r border-border flex justify-center">
                                <input
                                  type="checkbox"
                                  checked={row.guest}
                                  onChange={() => togglePermission(originalIdx, "guest")}
                                  className="w-4 h-4 bg-black border border-border rounded-[2px] checked:bg-white checked:border-white focus:ring-0 cursor-pointer"
                                />
                              </div>
                              {/* Member */}
                              <div className="p-4 border-r border-border flex justify-center">
                                <input
                                  type="checkbox"
                                  checked={row.member}
                                  onChange={() => togglePermission(originalIdx, "member")}
                                  className="w-4 h-4 bg-black border border-border rounded-[2px] checked:bg-white checked:border-white focus:ring-0 cursor-pointer"
                                />
                              </div>
                              {/* Editor */}
                              <div className="p-4 border-r border-border flex justify-center">
                                <input
                                  type="checkbox"
                                  checked={row.editor}
                                  onChange={() => togglePermission(originalIdx, "editor")}
                                  className="w-4 h-4 bg-black border border-border rounded-[2px] checked:bg-white checked:border-white focus:ring-0 cursor-pointer"
                                />
                              </div>
                              {/* Manager */}
                              <div className="p-4 border-r border-border flex justify-center">
                                <input
                                  type="checkbox"
                                  checked={row.manager}
                                  onChange={() => togglePermission(originalIdx, "manager")}
                                  className="w-4 h-4 bg-black border border-border rounded-[2px] checked:bg-white checked:border-white focus:ring-0 cursor-pointer"
                                />
                              </div>
                              {/* Admin */}
                              <div className="p-4 border-r border-border flex justify-center">
                                <input
                                  type="checkbox"
                                  checked={row.admin}
                                  onChange={() => togglePermission(originalIdx, "admin")}
                                  className="w-4 h-4 bg-black border border-border rounded-[2px] checked:bg-white checked:border-white focus:ring-0 cursor-pointer"
                                />
                              </div>
                              {/* Super Admin */}
                              <div className="p-4 flex justify-center bg-[#1c1c1c]/40">
                                <input
                                  type="checkbox"
                                  checked={row.superAdmin}
                                  disabled
                                  className="w-4 h-4 bg-black border border-border rounded-[2px] checked:bg-white checked:border-white focus:ring-0 opacity-55"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
