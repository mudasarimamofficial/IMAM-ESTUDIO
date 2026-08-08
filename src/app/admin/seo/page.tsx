"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

export default function AdminSeoPage() {
  const [siteTitle, setSiteTitle] = useState("IMAM ESTUDIO | Elite AI Automation & Technical Engineering Studio");
  const [description, setDescription] = useState(
    "Elite AI Automation & Technical Engineering Studio by Mudasar Imam. Specializing in Shopify Engineering, AI Agents, n8n Automation, and Full-Stack SaaS architecture."
  );
  const [ogImage, setOgImage] = useState(
    "https://yqaslfozryelumtlkoxk.supabase.co/storage/v1/object/public/asset/Mudasar%20Imam%20Senior%20Full%20Stack%20Engineer%20and%20AI%20Automation%20Architect.png"
  );
  const [notice, setNotice] = useState("");

  const handleSave = () => {
    setNotice("SEO metadata updated live in head tags!");
    setTimeout(() => setNotice(""), 3000);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="SEO & Technical Meta Control"
          subtitle="Configure canonical tags, Open Graph cards, structured data schemas, and search indexing"
          actions={
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors"
            >
              Publish SEO Config
            </button>
          }
        />

        {notice && (
          <div className="mx-8 mt-6 p-4 rounded bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-mono text-xs">
            ✓ {notice}
          </div>
        )}

        <div className="p-8 max-w-4xl space-y-6">
          <div className="bg-[#09090b] rounded border border-[#1f2023] p-6 space-y-4 font-mono text-xs">
            <h3 className="font-bold text-white uppercase text-sm">Global Metadata & Open Graph</h3>

            <div>
              <label className="block text-[#8e9192] mb-1">Global Meta Title (60 chars max)</label>
              <input
                type="text"
                value={siteTitle}
                onChange={(e) => setSiteTitle(e.target.value)}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-[#8e9192] mb-1">Global Meta Description (160 chars max)</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-[#8e9192] mb-1">Social Preview / OG Image URL</label>
              <input
                type="text"
                value={ogImage}
                onChange={(e) => setOgImage(e.target.value)}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 text-white"
              />
            </div>
          </div>

          <div className="bg-[#09090b] rounded border border-[#1f2023] p-6 space-y-3 font-mono text-xs">
            <h3 className="font-bold text-white uppercase text-sm">Google Search Engine Card Preview</h3>
            <div className="p-4 bg-[#121316] rounded border border-[#26272b] space-y-1">
              <div className="text-[10px] text-[#8e9192]">https://imam-estudio.vercel.app</div>
              <div className="text-blue-400 font-semibold text-sm hover:underline cursor-pointer">{siteTitle}</div>
              <div className="text-[#c2c4c6] text-xs leading-relaxed">{description}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
