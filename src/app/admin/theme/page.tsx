"use client";

import React, { useState, useEffect } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";
import {
  getStoredThemeSettings,
  saveStoredThemeSettings,
  StudioThemeSettings,
} from "@/lib/studioControlPlane";

export default function AdminThemePage() {
  const [settings, setSettings] = useState<StudioThemeSettings | null>(null);
  const [activeTab, setActiveTab] = useState<"hero" | "founder" | "brand" | "navigation" | "seo">("hero");
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    setSettings(getStoredThemeSettings());
  }, []);

  if (!settings) return null;

  const handleSave = () => {
    saveStoredThemeSettings(settings);
    setSaveMessage("Theme settings published live to website!");
    setTimeout(() => setSaveMessage(""), 4000);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Theme & Page Builder"
          subtitle="Shopify-style visual content control for homepage, hero, founder bio, and brand assets"
          actions={
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors"
            >
              Publish Changes
            </button>
          }
        />

        {saveMessage && (
          <div className="mx-8 mt-6 p-4 rounded bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-mono text-xs flex items-center justify-between">
            <span>✓ {saveMessage}</span>
            <span className="text-[10px] text-[#8e9192]">Sync complete</span>
          </div>
        )}

        <div className="p-8 space-y-8 max-w-6xl">
          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-[#1f2023] space-x-6">
            {(["hero", "founder", "brand", "navigation", "seo"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-mono text-xs font-bold capitalize transition-colors border-b-2 ${
                  activeTab === tab
                    ? "border-white text-white"
                    : "border-transparent text-[#8e9192] hover:text-[#c2c4c6]"
                }`}
              >
                {tab === "seo" ? "SEO & Metadata" : `${tab} Section`}
              </button>
            ))}
          </div>

          {/* Hero Tab */}
          {activeTab === "hero" && (
            <div className="space-y-6 bg-[#09090b] p-6 rounded border border-[#1f2023]">
              <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Hero Section Settings</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">Badge Text</label>
                  <input
                    type="text"
                    value={settings.hero.badge}
                    onChange={(e) => setSettings({ ...settings, hero: { ...settings.hero, badge: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">Main Headline (H1)</label>
                  <textarea
                    rows={2}
                    value={settings.hero.headline}
                    onChange={(e) => setSettings({ ...settings, hero: { ...settings.hero, headline: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">Subheadline Paragraph</label>
                  <textarea
                    rows={3}
                    value={settings.hero.subheadline}
                    onChange={(e) => setSettings({ ...settings, hero: { ...settings.hero, subheadline: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#8e9192] mb-1">Primary CTA Text</label>
                    <input
                      type="text"
                      value={settings.hero.primaryCtaText}
                      onChange={(e) => setSettings({ ...settings, hero: { ...settings.hero, primaryCtaText: e.target.value } })}
                      className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#8e9192] mb-1">Primary CTA Link</label>
                    <input
                      type="text"
                      value={settings.hero.primaryCtaLink}
                      onChange={(e) => setSettings({ ...settings, hero: { ...settings.hero, primaryCtaLink: e.target.value } })}
                      className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#8e9192] mb-1">Desktop Hero Image Asset (Public Supabase URL)</label>
                    <input
                      type="text"
                      value={settings.hero.desktopHeroAsset}
                      onChange={(e) => setSettings({ ...settings, hero: { ...settings.hero, desktopHeroAsset: e.target.value } })}
                      className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#8e9192] mb-1">Mobile Hero Image Asset (Public Supabase URL)</label>
                    <input
                      type="text"
                      value={settings.hero.mobileHeroAsset}
                      onChange={(e) => setSettings({ ...settings, hero: { ...settings.hero, mobileHeroAsset: e.target.value } })}
                      className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Founder Tab */}
          {activeTab === "founder" && (
            <div className="space-y-6 bg-[#09090b] p-6 rounded border border-[#1f2023]">
              <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Founder & Lead Engineer Portfolio Info</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">Founder Name</label>
                  <input
                    type="text"
                    value={settings.founder.name}
                    onChange={(e) => setSettings({ ...settings, founder: { ...settings.founder, name: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">Founder Title</label>
                  <input
                    type="text"
                    value={settings.founder.title}
                    onChange={(e) => setSettings({ ...settings, founder: { ...settings.founder, title: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-[#8e9192] mb-1">Bio Paragraph 1</label>
                <textarea
                  rows={3}
                  value={settings.founder.bio1}
                  onChange={(e) => setSettings({ ...settings, founder: { ...settings.founder, bio1: e.target.value } })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#8e9192] mb-1">Bio Paragraph 2</label>
                <textarea
                  rows={3}
                  value={settings.founder.bio2}
                  onChange={(e) => setSettings({ ...settings, founder: { ...settings.founder, bio2: e.target.value } })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#8e9192] mb-1">Founder Portrait Image Asset URL</label>
                <input
                  type="text"
                  value={settings.founder.portraitAsset}
                  onChange={(e) => setSettings({ ...settings, founder: { ...settings.founder, portraitAsset: e.target.value } })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                />
              </div>
            </div>
          )}

          {/* Brand Tab */}
          {activeTab === "brand" && (
            <div className="space-y-6 bg-[#09090b] p-6 rounded border border-[#1f2023]">
              <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Brand & Contact Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">Studio Name</label>
                  <input
                    type="text"
                    value={settings.brand.name}
                    onChange={(e) => setSettings({ ...settings, brand: { ...settings.brand, name: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">WhatsApp Floating Widget Number</label>
                  <input
                    type="text"
                    value={settings.brand.whatsappNumber}
                    onChange={(e) => setSettings({ ...settings, brand: { ...settings.brand, whatsappNumber: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">Official Email Address</label>
                  <input
                    type="email"
                    value={settings.brand.email}
                    onChange={(e) => setSettings({ ...settings, brand: { ...settings.brand, email: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#8e9192] mb-1">Fiverr Rating Badge</label>
                  <input
                    type="text"
                    value={settings.brand.rating}
                    onChange={(e) => setSettings({ ...settings, brand: { ...settings.brand, rating: e.target.value } })}
                    className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Tab */}
          {activeTab === "navigation" && (
            <div className="space-y-6 bg-[#09090b] p-6 rounded border border-[#1f2023]">
              <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Navigation Links</h2>
              <div className="space-y-3">
                {settings.navigation.map((nav, idx) => (
                  <div key={idx} className="flex gap-3 items-center bg-[#121316] p-3 rounded border border-[#26272b]">
                    <input
                      type="text"
                      value={nav.label}
                      onChange={(e) => {
                        const newNav = [...settings.navigation];
                        newNav[idx].label = e.target.value;
                        setSettings({ ...settings, navigation: newNav });
                      }}
                      className="bg-transparent border border-[#333] rounded px-3 py-1.5 font-mono text-xs text-white w-1/3"
                    />
                    <input
                      type="text"
                      value={nav.href}
                      onChange={(e) => {
                        const newNav = [...settings.navigation];
                        newNav[idx].href = e.target.value;
                        setSettings({ ...settings, navigation: newNav });
                      }}
                      className="bg-transparent border border-[#333] rounded px-3 py-1.5 font-mono text-xs text-white flex-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === "seo" && (
            <div className="space-y-6 bg-[#09090b] p-6 rounded border border-[#1f2023]">
              <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Global SEO & Metadata</h2>
              <div>
                <label className="block font-mono text-xs text-[#8e9192] mb-1">Default Page Title</label>
                <input
                  type="text"
                  value={settings.seo.defaultTitle}
                  onChange={(e) => setSettings({ ...settings, seo: { ...settings.seo, defaultTitle: e.target.value } })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#8e9192] mb-1">Default Meta Description</label>
                <textarea
                  rows={3}
                  value={settings.seo.defaultDescription}
                  onChange={(e) => setSettings({ ...settings, seo: { ...settings.seo, defaultDescription: e.target.value } })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2.5 font-mono text-xs text-white"
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
