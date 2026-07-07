"use client";

import React, { useRef, useState, useEffect, use } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function WhiteboardPage({ params }: PageProps) {
  const { id } = use(params);

  // References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  // States
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<"draw" | "rect" | "clear">("draw");
  const [color, setColor] = useState("#ffffff");
  const [presence, setPresence] = useState([
    { name: "Mudasar Imam", active: true, cursor: "X: 340, Y: 120" },
    { name: "Client Partner", active: true, cursor: "X: 520, Y: 290" },
  ]);

  // Init canvas dimensions and context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // High DPI scaling
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    canvas.style.width = `${canvas.offsetWidth}px`;
    canvas.style.height = `${canvas.offsetHeight}px`;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = 2;
    contextRef.current = context;

    // Draw grid background once
    drawGrid(context, canvas.offsetWidth, canvas.offsetHeight);
  }, []);

  function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
    ctx.lineWidth = 1;
    const size = 40;
    for (let x = 0; x < width; x += size) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += size) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  // Drawing event handlers
  const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent;
    if (!contextRef.current) return;

    contextRef.current.strokeStyle = color;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }: React.MouseEvent) => {
    if (!isDrawing || !contextRef.current) return;
    const { offsetX, offsetY } = nativeEvent;

    if (tool === "draw") {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }

    // Update coordinates in presence
    setPresence((prev) =>
      prev.map((p, idx) =>
        idx === 1 ? { ...p, cursor: `X: ${offsetX}, Y: ${offsetY}` } : p
      )
    );
  };

  const stopDrawing = () => {
    if (!contextRef.current) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(contextRef.current, canvas.offsetWidth, canvas.offsetHeight);
  };

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 overflow-hidden flex flex-col gap-6">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 gap-4">
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">COLLABORATIVE WHITEBOARD</span>
              <h1 className="font-sans text-xl font-bold text-white mt-1">Real-time Architecture Canvas</h1>
            </div>

            {/* Drawing Toolbar */}
            <div className="flex items-center gap-2 bg-[#0d0e0f] border border-border p-1.5 rounded">
              <button
                onClick={() => setTool("draw")}
                className={`p-2 rounded font-mono text-[10px] uppercase font-bold transition-all ${
                  tool === "draw" ? "bg-white text-black" : "text-[#c4c7c8] hover:text-white"
                }`}
              >
                Pen
              </button>
              <button
                onClick={handleClear}
                className="p-2 rounded font-mono text-[10px] uppercase font-bold text-[#c4c7c8] hover:text-white transition-all"
              >
                Clear
              </button>
              <div className="w-[1px] h-6 bg-border mx-1" />
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-6 h-6 border border-border rounded bg-transparent cursor-pointer"
              />
            </div>
          </div>

          <div className="flex-1 flex gap-6 min-h-[500px]">
            {/* Drawing Canvas */}
            <div className="flex-1 border border-border rounded bg-[#030303] overflow-hidden relative">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                className="w-full h-full cursor-crosshair block"
              />
            </div>

            {/* Presence Sidebar */}
            <div className="w-64 border border-border rounded bg-[#0d0e0f] p-4 flex flex-col gap-4">
              <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Presence Engine</h3>
              <div className="flex flex-col gap-3">
                {presence.map((p, idx) => (
                  <div key={idx} className="p-3 rounded border border-border bg-[#0a0a0a] flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs font-bold text-white">{p.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <span className="font-mono text-[9px] text-[#8e9192]">{p.cursor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
