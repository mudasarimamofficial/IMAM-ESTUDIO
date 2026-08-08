"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

interface MediaItem {
  id: string;
  name: string;
  url: string;
  size: string;
  dimensions: string;
  type: string;
}

const mockMedia: MediaItem[] = [
  {
    id: "med-01",
    name: "Mudasar Imam Founder Portrait.png",
    url: "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/Mudasar%20Imam%20Senior%20Full%20Stack%20Engineer%20and%20AI%20Automation%20Architect.png",
    size: "1.2 MB",
    dimensions: "1200 x 1600",
    type: "image/png",
  },
  {
    id: "med-02",
    name: "Desktop Hero Tech Studio.png",
    url: "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/Cinematic%20Portrait%20in%20a%20Dark%20Tech%20Studio.png",
    size: "2.4 MB",
    dimensions: "1920 x 1080",
    type: "image/png",
  },
  {
    id: "med-03",
    name: "Mobile Hero Modern Black Interior.png",
    url: "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/mobile%20Cinematic%20Portrait%20in%20a%20Modern%20Black%20Interior%20mobile.png",
    size: "1.8 MB",
    dimensions: "1080 x 1920",
    type: "image/png",
  },
];

export default function AdminMediaPage() {
  const [media] = useState<MediaItem[]>(mockMedia);

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Media Library & Asset Storage"
          subtitle="Supabase Storage bucket management for high-res hero images, brand assets, and case study photos"
          actions={
            <button className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors">
              + Upload Media Asset
            </button>
          }
        />

        <div className="p-8 max-w-6xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {media.map((item) => (
              <div key={item.id} className="bg-[#09090b] rounded border border-[#1f2023] p-4 space-y-3">
                <div className="aspect-video bg-[#121316] rounded overflow-hidden relative border border-[#1f2023]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-white truncate">{item.name}</h4>
                  <div className="font-mono text-[10px] text-[#8e9192] mt-0.5">
                    {item.dimensions} · {item.size}
                  </div>
                </div>
                <div className="pt-2 border-t border-[#1f2023] flex justify-between items-center">
                  <button
                    onClick={() => navigator.clipboard.writeText(item.url)}
                    className="px-2.5 py-1 rounded bg-[#1f2023] hover:bg-[#2b2c30] text-white font-mono text-[10px]"
                  >
                    Copy URL
                  </button>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[10px] text-[#8e9192] hover:text-white"
                  >
                    View Original ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
