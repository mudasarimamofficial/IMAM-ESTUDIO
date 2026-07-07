"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import Editor from "@/components/Editor";

interface TestCase {
  name: string;
  passed: boolean;
  status: "idle" | "running" | "complete" | "failed";
}

export default function VettingCruciblePage() {
  const [code, setCode] = useState<string>(
    "// Task: Implement the distributed transaction synchronizer\n\nclass TxSynchronizer {\n  constructor(nodes) {\n    this.nodes = nodes;\n  }\n\n  async commit(tx) {\n    // Write your fault-tolerant logic here...\n  }\n}"
  );
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Crucible assessment engine v2.4.1 initialized.",
    "[TELEMETRY] Proctoring modules loaded. Window focus tracking active.",
    "Ready for compilation test.",
  ]);
  const [testCases, setTestCases] = useState<TestCase[]>([
    { name: "Test 1: Core Synchronous Commit", passed: false, status: "idle" },
    { name: "Test 2: Distributed Consensus", passed: false, status: "idle" },
    { name: "Test 3: Network Drift Resistance (<2ms)", passed: false, status: "idle" },
  ]);
  const [running, setRunning] = useState(false);

  const runCode = () => {
    setRunning(true);
    setTerminalLogs((prev) => [...prev, "[SYSTEM] Initiating compilation audit...", "[SYSTEM] Running unit test scripts..."]);
    
    // Simulate test execution
    setTestCases((prev) => prev.map((tc) => ({ ...tc, status: "running" })));

    setTimeout(() => {
      setTestCases([
        { name: "Test 1: Core Synchronous Commit", passed: true, status: "complete" },
        { name: "Test 2: Distributed Consensus", passed: true, status: "complete" },
        { name: "Test 3: Network Drift Resistance (<2ms)", passed: false, status: "failed" },
      ]);
      setTerminalLogs((prev) => [
        ...prev,
        "[SUCCESS] Test 1 passed in 45ms.",
        "[SUCCESS] Test 2 passed in 102ms.",
        "[ERROR] Test 3 failed: drift limit exceeded (54ms drift calculated, max allowed <2ms).",
        "[SYSTEM] Crucible compilation incomplete. Drift drift mitigation failure.",
      ]);
      setRunning(false);
    }, 1500);
  };

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col h-screen overflow-hidden">
      <TopNavBar />

      <div className="flex flex-1 pt-16 h-[calc(100vh-64px)]">
        {/* Left Pane - Instructions */}
        <div className="w-80 border-r border-border bg-[#0a0a0a] p-5 flex flex-col gap-6 overflow-y-auto">
          <div>
            <span className="font-mono text-[9px] text-[#8e9192] uppercase">Crucible Trial Project</span>
            <h2 className="font-sans text-sm font-bold text-white mt-1">Distributed State Reconciliation</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-0.5 bg-red-950/40 text-red-400 border border-red-900 rounded-[2px] font-mono text-[9px]">
                DIFFICULTY: CRITICAL
              </span>
              <span className="font-mono text-[9px] text-[#8e9192]">Time: 45m left</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-sans text-xs text-[#c4c7c8] leading-relaxed border-t border-[#111] pt-4">
            <p>
              A distributed Kafka-based matcher is experiencing 50ms drift during peak volatility. Architect a circuit-breaker and state-sync protocol to reduce this to &lt;2ms.
            </p>
            <h4 className="font-bold text-white uppercase tracking-wider text-[10px] mt-2">Requirements</h4>
            <ul className="list-disc pl-4 flex flex-col gap-1">
              <li>Must handle network partition failures gracefully.</li>
              <li>Must resolve divergent log offsets.</li>
              <li>Zero allocation paths are highly preferred.</li>
            </ul>
          </div>

          {/* Test suites status */}
          <div className="flex flex-col gap-3 border-t border-[#111] pt-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Test Suite Progress</h4>
            <div className="flex flex-col gap-2">
              {testCases.map((tc, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-[#030303] rounded border border-border">
                  <span className="font-sans text-[10px] text-[#c4c7c8]">{tc.name}</span>
                  <span
                    className={`font-mono text-[8px] uppercase font-bold ${
                      tc.status === "complete"
                        ? "text-emerald-400"
                        : tc.status === "failed"
                        ? "text-red-400 animate-pulse"
                        : "text-[#8e9192]"
                    }`}
                  >
                    {tc.status === "running" ? "Testing..." : tc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center/Right Pane - Split Code Editor and Terminal */}
        <div className="flex-1 flex flex-col h-full bg-black">
          {/* Editor Container */}
          <div className="flex-1 min-h-[350px] relative">
            <Editor initialCode={code} onCodeChange={setCode} filename="txSynchronizer.js" />
            <button
              onClick={runCode}
              disabled={running}
              className="absolute bottom-4 right-4 px-6 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase rounded-[2px] hover:bg-opacity-90 z-20"
            >
              {running ? "Compiling..." : "Run Test Suite"}
            </button>
          </div>

          {/* Console Log Terminal */}
          <div className="h-60 border-t border-border bg-[#030303] p-4 flex flex-col gap-2 overflow-y-auto font-mono text-[10px] text-[#8e9192]">
            <div className="flex justify-between items-center border-b border-[#111] pb-2 text-[#8e9192]">
              <span>PROCTORED TERMINAL LOGS</span>
              <span>TELEMETRY: ACTIVE</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 overflow-y-auto">
              {terminalLogs.map((log, idx) => (
                <div key={idx}>
                  <span className="text-[#c4c7c8] select-none">&gt;</span> {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
