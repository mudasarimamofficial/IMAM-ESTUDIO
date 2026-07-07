"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import DataGrid from "@/components/DataGrid";
import StatusBadge from "@/components/StatusBadge";

interface RAGConnector {
  id: string;
  name: string;
  path: string;
  filesCount: number;
  status: string;
}

const mockConnectors: RAGConnector[] = [
  {
    id: "CON-001",
    name: "Google Drive Client Hub",
    path: "/Enterprise/Internal_Docs",
    filesCount: 1204,
    status: "active",
  },
  {
    id: "CON-002",
    name: "AWS S3 File Bucket",
    path: "s3://imam-estudio-knowledge-rag",
    filesCount: 842,
    status: "active",
  },
  {
    id: "CON-003",
    name: "GitHub Repository Codebase",
    path: "github.com/mudasarimamofficial/IMAM-ESTUDIO",
    filesCount: 95,
    status: "pending",
  },
];

export default function RAGOperationsPage() {
  const [connectors, setConnectors] = useState<RAGConnector[]>(mockConnectors);
  const [syncing, setSyncing] = useState(false);

  const columns = [
    {
      header: "Connector ID",
      accessor: "id" as keyof RAGConnector,
      sortable: true,
    },
    {
      header: "Resource Name",
      accessor: (item: RAGConnector) => (
        <span className="text-white font-semibold">{item.name}</span>
      ),
    },
    {
      header: "Mount Path",
      accessor: "path" as keyof RAGConnector,
    },
    {
      header: "Indexed Files",
      accessor: (item: RAGConnector) => (
        <span className="font-mono">{item.filesCount.toLocaleString()}</span>
      ),
      sortable: true,
    },
    {
      header: "Sync Status",
      accessor: (item: RAGConnector) => <StatusBadge status={item.status} />,
    },
  ];

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setConnectors((prev) =>
        prev.map((c) => (c.status === "pending" ? { ...c, status: "active", filesCount: c.filesCount + 10 } : c))
      );
    }, 1500);
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
                <span className="font-mono text-[10px] text-[#8e9192]">AI KNOWLEDGE CORE</span>
                <h1 className="font-sans text-2xl font-bold text-white mt-1">RAG Operations Hub</h1>
                <p className="font-sans text-xs text-[#8e9192] mt-1">
                  Manage knowledge base indexes, ingest files, and monitor neural embeddings configurations.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleSync}
                  disabled={syncing}
                  className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase rounded-[2px] hover:bg-opacity-90 disabled:opacity-50 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] animate-spin-slow">sync</span>
                  {syncing ? "Embedding Syncing..." : "Sync All Sources"}
                </button>
              </div>
            </div>

            {/* Ingestion status */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Total Embeddings Vector</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">24,590 nodes</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">99.8% semantic match accuracy</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Index Size</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">1.82 GB</h3>
                <span className="font-mono text-[8px] text-[#8e9192] mt-1 block">Cosine similarity metrics active</span>
              </div>
              <div className="bento-card p-6 rounded-lg border border-border">
                <span className="font-mono text-[9px] text-[#8e9192] uppercase">Active connectors</span>
                <h3 className="font-mono text-xl font-bold text-white mt-2">3 Connectors</h3>
                <span className="font-mono text-[8px] text-emerald-400 mt-1 block">All endpoints healthy</span>
              </div>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Active Ingestion Sources</h3>
              <DataGrid columns={columns} data={connectors} searchField="name" searchPlaceholder="Search data sources..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
