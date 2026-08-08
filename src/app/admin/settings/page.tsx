"use client";

import React, { useState } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";

export default function AdminSettingsPage() {
  const [whatsapp, setWhatsapp] = useState("+923191106310");
  const [email, setEmail] = useState("mudasarimamofficial@gmail.com");
  const [calendly, setCalendly] = useState("https://calendly.com/mudasar-imam/consultation");
  const [notice, setNotice] = useState("");

  const handleSave = () => {
    setNotice("Studio settings updated successfully!");
    setTimeout(() => setNotice(""), 3000);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Studio & System Configuration"
          subtitle="General platform settings, API key references, notification webhooks, and contact channels"
          actions={
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors"
            >
              Save Configuration
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
            <h3 className="font-bold text-white uppercase text-sm">Primary Contact Channels</h3>

            <div>
              <label className="block text-[#8e9192] mb-1">WhatsApp Widget Phone Number</label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-[#8e9192] mb-1">Official Founder Contact Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-[#8e9192] mb-1">Calendly Consultation Scheduling Link</label>
              <input
                type="text"
                value={calendly}
                onChange={(e) => setCalendly(e.target.value)}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 text-white"
              />
            </div>
          </div>

          <div className="bg-[#09090b] rounded border border-[#1f2023] p-6 space-y-3 font-mono text-xs">
            <h3 className="font-bold text-white uppercase text-sm">Supabase Production Credentials</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#8e9192] mb-1">Project ID</label>
                <input
                  type="text"
                  disabled
                  value="yqaslfozryelumtlkoxk"
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-[#8e9192]"
                />
              </div>
              <div>
                <label className="block text-[#8e9192] mb-1">Project URL</label>
                <input
                  type="text"
                  disabled
                  value="https://yqaslfozryelumtlkoxk.supabase.co"
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-[#8e9192]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
