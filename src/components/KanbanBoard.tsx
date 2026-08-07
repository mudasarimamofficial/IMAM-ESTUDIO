"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent, closestCorners, useDraggable, useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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

const COLUMNS: KanbanTask["status"][] = ["Backlog", "In Progress", "In Review", "Completed"];

function SortableTaskItem({ task }: { task: KanbanTask }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-4 rounded-[4px] border border-border bg-[#0a0a0a] hover:border-white/20 transition-all flex flex-col gap-2 cursor-grab active:cursor-grabbing relative z-10"
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
    </div>
  );
}

function KanbanColumn({ col, tasks }: { col: string, tasks: KanbanTask[] }) {
  const { setNodeRef } = useDroppable({ id: col });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col gap-4 p-4 rounded bg-[#0d0e0f] border border-border min-h-[350px]"
    >
      <div className="flex items-center justify-between pb-2 border-b border-[#161616]">
        <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
          {col}
        </span>
        <span className="font-mono text-[10px] px-2 py-0.5 bg-[#1a1c1c] text-[#8e9192] rounded-full">
          {tasks.length}
        </span>
      </div>
      <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-3 flex-1 overflow-y-auto max-h-[450px]">
          {tasks.map((task) => (
            <SortableTaskItem key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<KanbanTask[]>(initialTasks);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id as string;
    const overId = over.id as string; // Could be a column ID or another task ID

    if (COLUMNS.includes(overId as KanbanTask["status"])) {
      // Dropped on an empty column area
      setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: overId as KanbanTask["status"] } : t));
    } else {
      // Dropped on another task
      const overTask = tasks.find(t => t.id === overId);
      if (overTask) {
        setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: overTask.status } : t));
      }
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-6">
        {COLUMNS.map((col) => (
          <KanbanColumn key={col} col={col} tasks={tasks.filter((t) => t.status === col)} />
        ))}
      </div>
    </DndContext>
  );
}
