"use client";

import React, { useState, useEffect } from "react";

interface EditorProps {
  initialCode?: string;
  filename?: string;
  onCodeChange?: (code: string) => void;
  onProctoringAlert?: (message: string) => void;
}

export default function Editor({
  initialCode = "// Enter your solution code here...",
  filename = "solution.ts",
  onCodeChange,
  onProctoringAlert,
}: EditorProps) {
  const [code, setCode] = useState(initialCode);
  const lines = code.split("\n");

  // Simulated proctoring hooks: track tab changes/copy-paste/cheating attempts
  useEffect(() => {
    const handleBlur = () => {
      const msg = `[Proctor Alert] Focus lost at ${new Date().toLocaleTimeString()} - User navigated away from the assessment workspace.`;
      if (onProctoringAlert) onProctoringAlert(msg);
    };

    const handlePaste = (e: ClipboardEvent) => {
      const msg = `[Proctor Alert] Clipboard paste detected at ${new Date().toLocaleTimeString()} - User pasted content into the editor.`;
      if (onProctoringAlert) onProctoringAlert(msg);
    };

    window.addEventListener("blur", handleBlur);
    document.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("paste", handlePaste);
    };
  }, [onProctoringAlert]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setCode(val);
    if (onCodeChange) onCodeChange(val);
  };

  return (
    <div className="flex flex-col w-full h-[400px] border border-border rounded overflow-hidden bg-[#0d0e0f]">
      {/* Editor Tabs bar */}
      <div className="flex items-center justify-between px-4 h-10 bg-[#080808] border-b border-border">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-amber-500 text-[16px]">code</span>
          <span className="font-mono text-xs font-semibold text-white">{filename}</span>
          <span className="font-mono text-[10px] bg-[#111] border border-border px-1.5 py-0.5 rounded text-[#8e9192]">
            TypeScript
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Proctor Syncing Live" />
          <span className="font-mono text-[10px] text-[#8e9192]">PROCTOR ACTIVE</span>
        </div>
      </div>

      {/* Editor workspace */}
      <div className="flex flex-1 overflow-hidden font-mono text-xs text-[#e3e2e2]">
        {/* Line numbers column */}
        <div className="w-12 py-4 text-right pr-3 select-none text-[#444748] border-r border-[#161616] bg-[#090a0a]">
          {lines.map((_, idx) => (
            <div key={idx} className="h-5 leading-5">
              {idx + 1}
            </div>
          ))}
        </div>

        {/* Text Area input overlays for editor styling */}
        <div className="relative flex-1 bg-[#0a0a0a]">
          <textarea
            value={code}
            onChange={handleChange}
            spellCheck={false}
            className="absolute inset-0 w-full h-full p-4 bg-transparent text-[#e3e2e2] resize-none outline-none border-none focus:ring-0 leading-5 whitespace-pre overflow-auto font-mono text-xs"
          />
        </div>
      </div>
    </div>
  );
}
