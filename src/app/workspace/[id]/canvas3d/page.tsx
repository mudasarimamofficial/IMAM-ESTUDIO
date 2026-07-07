"use client";

import React, { useEffect, useRef } from "react";
import TopNavBar from "@/components/TopNavBar";
import SideNav from "@/components/SideNav";

interface Props {
  params: Promise<{ id: string }>;
}

export default function Canvas3DPage({ params }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Grid details
    let angle = 0;

    // Traditional hoisted render loop function to comply with before-declaration and variable hoist rules
    function renderFrame() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(34, 34, 34, 0.5)";
      ctx.lineWidth = 1;
      const gridSize = 30;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw a spinning digital cube wireframe in center
      const centerX = width / 2;
      const centerY = height / 2;
      const size = 100;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 2;
      ctx.strokeRect(-size / 2, -size / 2, size, size);

      // Inner wireframe
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.strokeRect(-size / 3, -size / 3, (size * 2) / 3, (size * 2) / 3);
      ctx.restore();

      angle += 0.01;
      animationId = requestAnimationFrame(renderFrame);
    }

    renderFrame();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <div className="flex flex-1 pt-16">
        <SideNav />

        <main className="flex-1 md:ml-64 p-6 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-4">
            <div>
              <span className="font-mono text-[10px] text-[#8e9192]">TECHNICAL DESIGN CANVAS</span>
              <h1 className="font-sans text-xl font-bold text-white mt-1">WebGL 3D Project Workspace: {id}</h1>
              <p className="font-sans text-xs text-[#8e9192] mt-1">
                Visualizing interactive application wireframes, network architecture nodes, and pipeline maps.
              </p>
            </div>
          </div>

          {/* Interactive viewport */}
          <div className="flex-1 border border-border rounded bg-black relative overflow-hidden flex items-center justify-center min-h-[450px]">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            <div className="absolute top-4 left-4 p-4 glass-panel border border-border rounded max-w-xs z-10 flex flex-col gap-2 bg-[#0a0a0a]/80 backdrop-blur">
              <span className="font-mono text-[9px] text-emerald-400">ENGINE ACTIVE: WebGL 2D/3D SIMULATION</span>
              <h3 className="font-sans text-xs font-bold text-white">Renderer Stats</h3>
              <ul className="font-mono text-[9px] text-[#8e9192] flex flex-col gap-1">
                <li>Resolution: Auto-fit viewport</li>
                <li>Framerate: ~60 FPS</li>
                <li>Entities: 2 Node Groups</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
