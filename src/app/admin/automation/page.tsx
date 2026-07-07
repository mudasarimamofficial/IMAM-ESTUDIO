"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import StatusBadge from "@/components/StatusBadge";

interface WorkflowNode {
  id: string;
  name: string;
  type: "trigger" | "action" | "condition";
  description: string;
  status: "idle" | "running" | "success" | "error";
  x: number;
  y: number;
}

const initialNodes: WorkflowNode[] = [
  {
    id: "node-1",
    name: "Webhook Trigger",
    type: "trigger",
    description: "Listen for new Client escrow creation",
    status: "success",
    x: 50,
    y: 100,
  },
  {
    id: "node-2",
    name: "Vetting Check",
    type: "condition",
    description: "Check if expert score exceeds 90%",
    status: "running",
    x: 320,
    y: 100,
  },
  {
    id: "node-3",
    name: "Release Escrow",
    type: "action",
    description: "Trigger Stripe Connect payout release",
    status: "idle",
    x: 600,
    y: 50,
  },
  {
    id: "node-4",
    name: "Slack Alert",
    type: "action",
    description: "Broadcast workspace channel notification",
    status: "idle",
    x: 600,
    y: 180,
  },
];

export default function AutomationBuilderPage() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);

  const triggerRun = () => {
    // Simulate node execution sequence
    setNodes((prev) =>
      prev.map((n) => (n.id === "node-2" ? { ...n, status: "success" } : n))
    );
    setTimeout(() => {
      setNodes((prev) =>
        prev.map((n) =>
          n.id === "node-3" || n.id === "node-4" ? { ...n, status: "success" } : n
        )
      );
    }, 1000);
  };

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-hidden flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-4">
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">WORKFLOW SWARMS</span>
              <h1 className="font-sans text-xl font-bold text-white mt-1">Autonomous Automation Builder</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Design active node triggers, filter criteria, and transaction dispatch pipelines.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={triggerRun}
                className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase rounded-[2px] hover:bg-opacity-90 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                Run Workflow
              </button>
            </div>
          </div>

          <div className="flex-1 flex gap-6 min-h-[500px]">
            {/* SVG Canvas Board */}
            <div className="flex-1 border border-border rounded bg-[#030303] overflow-hidden relative canvas-bg p-8">
              {/* SVG Connector Paths */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <path d="M 230 140 L 320 140" className="node-path active" />
                <path d="M 500 140 L 600 90" className="node-path" />
                <path d="M 500 140 L 600 220" className="node-path" />
              </svg>

              {/* Render nodes */}
              <div className="relative z-10 w-full h-full">
                {nodes.map((node) => (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`absolute p-4 w-48 rounded border cursor-pointer hover:border-white/40 transition-all bg-[#0a0a0a] ${
                      selectedNode?.id === node.id ? "border-white" : "border-border"
                    }`}
                    style={{ left: `${node.x}px`, top: `${node.y}px` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[9px] text-[#8e9192] uppercase">{node.type}</span>
                      <StatusBadge status={node.status} />
                    </div>
                    <h4 className="font-sans text-xs font-bold text-white leading-snug">{node.name}</h4>
                    <p className="font-sans text-[10px] text-[#8e9192] mt-1 leading-normal">
                      {node.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar properties */}
            <div className="w-64 border border-border rounded bg-[#0d0e0f] p-4 flex flex-col gap-4">
              <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Node Properties</h3>
              {selectedNode ? (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-[#8e9192] uppercase">Node ID</span>
                    <span className="font-mono text-xs text-white">{selectedNode.id}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-[#8e9192] uppercase">Node Type</span>
                    <span className="font-mono text-xs text-white uppercase">{selectedNode.type}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-[#8e9192] uppercase">Execution Status</span>
                    <span className="font-mono text-xs text-white uppercase">{selectedNode.status}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-[#111] pt-3">
                    <span className="font-mono text-[9px] text-[#8e9192] uppercase">Description</span>
                    <span className="font-sans text-xs text-[#c4c7c8] leading-relaxed">
                      {selectedNode.description}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center font-mono text-[10px] text-[#8e9192] py-8 border border-dashed border-border rounded">
                  Select a workflow node card to edit properties.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
