"use client";

import React, { useState, useEffect, use } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";
import KanbanBoard from "@/components/KanbanBoard";
import StatusBadge from "@/components/StatusBadge";
import { localCache, type LocalMessage } from "@/lib/localCache";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function WorkspacePage({ params }: PageProps) {
  const { id } = use(params);

  // States
  const [messages, setMessages] = useState<LocalMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [syncState, setSyncState] = useState<"synced" | "syncing" | "offline">("synced");

  // Milestones list
  const [milestones, setMilestones] = useState([
    { id: "M-1", title: "Liquid Architecture setup", amount: 1500, state: "approved" },
    { id: "M-2", title: "Dynamic Product filters integration", amount: 2000, state: "submitted" },
    { id: "M-3", title: "Proctoring Assessments implementation", amount: 1200, state: "pending" },
  ]);

  // Load messages from local IndexedDB cache
  useEffect(() => {
    const loadCachedMessages = async () => {
      try {
        const cached = await localCache.messages.where("project_id").equals(id).toArray();
        if (cached.length === 0) {
          // Seed initial demo messages if empty
          const seedMessages: LocalMessage[] = [
            {
              id: "msg-1",
              project_id: id,
              sender_id: "EXP-001",
              content: "Headless storefront liquid setup completed. Submitting proof of work link.",
              created_at: new Date(Date.now() - 3600000).toISOString(),
              syncStatus: "synced",
            },
            {
              id: "msg-2",
              project_id: id,
              sender_id: "client-1",
              content: "Excellent. I will review the Lighthouse metrics and trigger the milestone escrow release.",
              created_at: new Date(Date.now() - 1800000).toISOString(),
              syncStatus: "synced",
            },
          ];
          await localCache.messages.bulkAdd(seedMessages);
          setMessages(seedMessages);
        } else {
          setMessages(cached);
        }
      } catch (err) {
        console.error("Failed to load IndexedDB messages", err);
      }
    };
    loadCachedMessages();
  }, [id]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg: LocalMessage = {
      id: crypto.randomUUID(),
      project_id: id,
      sender_id: "client-1", // Demo user
      content: newMessage,
      created_at: new Date().toISOString(),
      syncStatus: navigator.onLine ? "synced" : "pending",
    };

    try {
      // Save locally to IndexedDB first (Local-First philosophy!)
      await localCache.messages.add(newMsg);
      setMessages((prev) => [...prev, newMsg]);
      setNewMessage("");

      if (!navigator.onLine) {
        setSyncState("offline");
      } else {
        setSyncState("syncing");
        setTimeout(() => setSyncState("synced"), 800); // Simulate network roundtrip latency
      }
    } catch (err) {
      console.error("IndexedDB write failed", err);
    }
  };

  const handleMilestoneAction = (milestoneId: string, newState: string) => {
    setMilestones((prev) =>
      prev.map((m) => (m.id === milestoneId ? { ...m, state: newState } : m))
    );
  };

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header / Sync status */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-6 gap-4">
              <div>
                <span className="font-mono text-[10px] text-[#8e9192]">PROJECT WORKSPACE</span>
                <h1 className="font-sans text-2xl font-bold text-white mt-1">Shopify Headless Storefront</h1>
              </div>

              {/* Sync Telemetry */}
              <div className="flex items-center gap-3 bg-[#0d0e0f] border border-border p-2 rounded px-4 font-mono text-[10px]">
                <span
                  className={`w-2 h-2 rounded-full ${
                    syncState === "synced"
                      ? "bg-emerald-500"
                      : syncState === "syncing"
                      ? "bg-amber-500 animate-pulse"
                      : "bg-rose-500"
                  }`}
                />
                <span className="text-white uppercase">
                  {syncState === "synced"
                    ? "CACHE SYNCED"
                    : syncState === "syncing"
                    ? "SYNCING DELTA"
                    : "OFFLINE MODE"}
                </span>
                <span className="text-[#8e9192]">|</span>
                <span className="text-white">{messages.filter((m) => m.syncStatus === "pending").length} PENDING</span>
              </div>
            </div>

            {/* Escrow Milestones */}
            <div className="glass-panel p-6 rounded-lg border border-border">
              <h3 className="font-sans text-sm font-bold text-white mb-4 uppercase tracking-wider">Escrow Milestones</h3>
              <div className="flex flex-col gap-3">
                {milestones.map((m) => (
                  <div
                    key={m.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded border border-border bg-[#0a0a0a]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-[#8e9192]">{m.id}</span>
                      <h4 className="font-sans text-xs font-semibold text-white">{m.title}</h4>
                      <span className="font-mono text-xs font-bold text-[#c4c7c8]">${m.amount}</span>
                    </div>

                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                      <StatusBadge status={m.state} />

                      {m.state === "submitted" && (
                        <button
                          onClick={() => handleMilestoneAction(m.id, "approved")}
                          className="px-3 py-1 bg-white text-black font-mono text-[9px] font-bold uppercase hover:bg-opacity-90 rounded-[2px]"
                        >
                          Release Escrow
                        </button>
                      )}

                      {m.state === "pending" && (
                        <button
                          onClick={() => handleMilestoneAction(m.id, "submitted")}
                          className="px-3 py-1 bg-transparent border border-border text-[#c4c7c8] hover:border-white font-mono text-[9px] font-bold uppercase rounded-[2px]"
                        >
                          Submit Proof
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kanban Board */}
            <div className="border-t border-[#111] pt-6">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Project Kanban Board</h3>
              <KanbanBoard />
            </div>

            {/* Chat Inbox */}
            <div className="border-t border-[#111] pt-6 flex flex-col gap-4">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider">Communication Channel</h3>
              <div className="border border-border rounded bg-surface-low overflow-hidden flex flex-col h-[350px]">
                {/* Chat feed */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                  {messages.map((msg) => {
                    const isClient = msg.sender_id === "client-1";
                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col max-w-[70%] ${isClient ? "self-end items-end" : "self-start items-start"}`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[8px] text-[#8e9192]">
                            {isClient ? "Client (You)" : "Expert"}
                          </span>
                          <span className="font-mono text-[8px] text-[#8e9192]">
                            {new Date(msg.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                          {msg.syncStatus === "pending" && (
                            <span className="material-symbols-outlined text-[10px] text-amber-500">pending</span>
                          )}
                        </div>
                        <div className={`p-3 rounded text-xs font-sans ${isClient ? "bg-white text-black rounded-tr-none" : "bg-[#111] text-white rounded-tl-none border border-border"}`}>
                          {msg.content}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Input form */}
                <form onSubmit={handleSendMessage} className="border-t border-border p-3 bg-black flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type message here (local cache enabled)..."
                    className="flex-1 bg-[#0a0a0a] border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-sans"
                  />
                  <button
                    type="submit"
                    className="px-5 bg-white text-black font-mono text-xs font-bold uppercase hover:bg-opacity-90 rounded-[2px]"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
