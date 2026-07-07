"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";
import StatusBadge from "@/components/StatusBadge";

interface TalentApplicant {
  id: string;
  name: string;
  assessmentScore: number;
  proctorCheatingLogs: number;
  status: string;
  date: string;
}

const mockApplicants: TalentApplicant[] = [
  {
    id: "APP-501",
    name: "Alex Rivera",
    assessmentScore: 94.5,
    proctorCheatingLogs: 0,
    status: "pending",
    date: "2026-07-03",
  },
  {
    id: "APP-502",
    name: "Jane Doe",
    assessmentScore: 88.0,
    proctorCheatingLogs: 4, // 4 window blur events!
    status: "disputed",
    date: "2026-07-05",
  },
];

export default function AdminVettingPage() {
  const [applicants, setApplicants] = useState<TalentApplicant[]>(mockApplicants);

  const handleUpdateStatus = (id: string, newStatus: string) => {
    setApplicants((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const columns = [
    {
      header: "Applicant ID",
      accessor: "id" as keyof TalentApplicant,
      sortable: true,
    },
    {
      header: "Applicant Name",
      accessor: "name" as keyof TalentApplicant,
      sortable: true,
    },
    {
      header: "Score Result",
      accessor: (item: TalentApplicant) => (
        <span className="font-mono">{item.assessmentScore}%</span>
      ),
      sortable: true,
    },
    {
      header: "Proctor Alerts",
      accessor: (item: TalentApplicant) => (
        <span
          className={`font-mono font-bold ${
            item.proctorCheatingLogs > 0 ? "text-rose-400" : "text-emerald-400"
          }`}
        >
          {item.proctorCheatingLogs} flags
        </span>
      ),
      sortable: true,
    },
    {
      header: "Vetting Status",
      accessor: (item: TalentApplicant) => <StatusBadge status={item.status} />,
    },
    {
      header: "Actions",
      accessor: (item: TalentApplicant) => (
        <div className="flex gap-2">
          {item.status !== "approved" && (
            <button
              onClick={() => handleUpdateStatus(item.id, "approved")}
              className="px-2.5 py-1 bg-white text-black font-mono text-[9px] font-bold uppercase rounded-[2px] hover:bg-opacity-90"
            >
              Approve
            </button>
          )}
          {item.status !== "failed" && (
            <button
              onClick={() => handleUpdateStatus(item.id, "failed")}
              className="px-2.5 py-1 bg-transparent border border-border text-[#c4c7c8] hover:border-white font-mono text-[9px] font-bold uppercase rounded-[2px]"
            >
              Reject
            </button>
          )}
        </div>
      ),
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
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">TALENT MANAGEMENT</span>
              <h1 className="font-sans text-2xl font-bold text-white mt-1">Verification Queue</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Audit assessment results, verify proctoring telemetry logs, and sign expert approvals.
              </p>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Active Talent Applications</h3>
              <DataGrid columns={columns} data={applicants} searchField="name" searchPlaceholder="Search applicants..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
