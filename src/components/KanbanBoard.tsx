"use client";

import React, { useState } from "react";
import StatusBadge from "./StatusBadge";

export interface KanbanTask {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: "low" | "medium" | "high";
  status: "Backlog" | "In Progress" | "In Review" | "Completed";
}

const initialTasks: KanbanTask[] = [
  {
    id: "TSK-001",
    title: "Implement Shopify Custom App checkout Hooks",
    description: "Connect headless storefront payload to Vercel serverless functions.",
    assignee: "Mudasar Imam",
    priority: "high",
    status: "Completed",
  },
  {
    id: "TSK-002",
    title: "Configure Supabase Realtime Channels",
    description: "Write client hooks listening to whiteboard mutation deltas.",
    assignee: "Alice Smith",
    priority: "medium",
    status: "In Progress",
  },
  {
    id: "TSK-003",
    title: "Vetting Crucible Proctoring Integration",
    description: "Log keyboard and window blur events inside the assessment environment.",
    assignee: "Bob Johnson",
    priority: "low",
    status: "Backlog",
  },
  {
    id: "TSK-004",
    title: "Loss-Leader pricing matrix components",
    description: "Implement interactive breakdown displays showing competitor comparison.",
    assignee: "Charlie Diaz",
    priority: "high",
    status: "In Review",
  },
];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<KanbanTask[]>(initialTasks);

  const columns: KanbanTask["status"][] = ["Backlog", "In Progress", "In Review", "Completed"];

  const moveTask = (id: string, newStatus: KanbanTask["status"]) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-6">
      {columns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col);
        return (
          <div
            key={col}
            className="flex flex-col gap-4 p-4 rounded bg-[#0d0e0f] border border-border min-h-[350px]"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#161616]">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                {col}
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 bg-[#1a1c1c] text-[#8e9192] rounded-full">
                {colTasks.length}
              </span>
            </div>

            <div className="flex flex-col gap-3 flex-1 overflow-y-auto max-h-[450px]">
              {colTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 rounded-[4px] border border-border bg-[#0a0a0a] hover:border-white/20 transition-all flex flex-col gap-2 cursor-grab"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#8e9192]">{task.id}</span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        task.priority === "high"
                          ? "bg-rose-500"
                          : task.priority === "medium"
                          ? "bg-amber-500"
                          : "bg-emerald-500"
                      }`}
                      title={`${task.priority} Priority`}
                    />
                  </div>

                  <h4 className="font-sans text-xs font-semibold text-white tracking-tight">
                    {task.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[#8e9192] leading-relaxed">
                    {task.description}
                  </p>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#111111]">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px] text-[#8e9192]">
                        person
                      </span>
                      <span className="font-mono text-[10px] text-[#c4c7c8]">{task.assignee}</span>
                    </div>
                  </div>

                  {/* Move Control Buttons */}
                  <div className="flex gap-1 justify-end mt-2">
                    {col !== "Backlog" && (
                      <button
                        onClick={() => {
                          const idx = columns.indexOf(col);
                          moveTask(task.id, columns[idx - 1]);
                        }}
                        className="p-1 rounded hover:bg-[#1c1c1c] text-[#8e9192] hover:text-white transition-all"
                      >
                        <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                      </button>
                    )}
                    {col !== "Completed" && (
                      <button
                        onClick={() => {
                          const idx = columns.indexOf(col);
                          moveTask(task.id, columns[idx + 1]);
                        }}
                        className="p-1 rounded hover:bg-[#1c1c1c] text-[#8e9192] hover:text-white transition-all"
                      >
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
