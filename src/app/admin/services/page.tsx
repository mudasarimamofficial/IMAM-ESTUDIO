"use client";

import React, { useState, useEffect } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";
import { getStoredServices, saveStoredServices, ServiceItem } from "@/lib/studioControlPlane";

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saveNotice, setSaveNotice] = useState("");

  useEffect(() => {
    setServices(getStoredServices());
  }, []);

  const handleTogglePublish = (id: string) => {
    const updated = services.map((s) => (s.id === id ? { ...s, isPublished: !s.isPublished } : s));
    setServices(updated);
    saveStoredServices(updated);
  };

  const handleSaveService = () => {
    if (!editingService) return;
    let updated: ServiceItem[];
    if (services.some((s) => s.id === editingService.id)) {
      updated = services.map((s) => (s.id === editingService.id ? editingService : s));
    } else {
      updated = [...services, editingService];
    }
    setServices(updated);
    saveStoredServices(updated);
    setIsModalOpen(false);
    setEditingService(null);
    setSaveNotice("Service catalog updated live!");
    setTimeout(() => setSaveNotice(""), 3000);
  };

  const handleAddNew = () => {
    const newId = `srv-${Date.now()}`;
    setEditingService({
      id: newId,
      slug: "new-service",
      gigId: "custom",
      title: "New Technical Engineering Service",
      category: "Commerce Engineering",
      description: "Description of the new engineering service...",
      startingPrice: "$99 / project",
      pricingModel: "Fixed Project",
      estimatedDuration: "3-5 Days",
      tags: ["Engineering", "Custom"],
      features: ["Feature 1", "Feature 2"],
      isPublished: true,
      sortOrder: services.length + 1,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Services Catalog Management"
          subtitle="Manage, reorder, price, and publish technical engineering services"
          actions={
            <button
              onClick={handleAddNew}
              className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors"
            >
              + Create Service
            </button>
          }
        />

        {saveNotice && (
          <div className="mx-8 mt-6 p-4 rounded bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-mono text-xs">
            ✓ {saveNotice}
          </div>
        )}

        <div className="p-8 max-w-6xl">
          <div className="bg-[#09090b] rounded border border-[#1f2023] overflow-hidden">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#121316] text-[#8e9192] border-b border-[#1f2023] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Gig ID / Service</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Starting Price</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f2023]">
                {services.map((srv) => (
                  <tr key={srv.id} className="hover:bg-[#121316]/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{srv.title}</div>
                      <div className="text-[10px] text-[#8e9192]">Gig #{srv.gigId} · {srv.estimatedDuration}</div>
                    </td>
                    <td className="p-4 text-[#c2c4c6]">
                      <span className="px-2 py-0.5 rounded bg-[#1f2023] text-[10px]">{srv.category}</span>
                    </td>
                    <td className="p-4 text-[#25D366] font-bold">{srv.startingPrice}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleTogglePublish(srv.id)}
                        className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                          srv.isPublished
                            ? "bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30"
                            : "bg-[#333]/30 text-[#8e9192] border border-[#444]"
                        }`}
                      >
                        {srv.isPublished ? "PUBLISHED" : "DRAFT"}
                      </button>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          setEditingService(srv);
                          setIsModalOpen(true);
                        }}
                        className="px-3 py-1.5 rounded bg-[#1f2023] hover:bg-[#2b2c30] text-white text-xs"
                      >
                        Edit Service
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {isModalOpen && editingService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#09090b] border border-[#1f2023] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto space-y-4 font-mono text-xs">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Edit Service Item</h3>
            
            <div>
              <label className="block text-[#8e9192] mb-1">Service Title</label>
              <input
                type="text"
                value={editingService.title}
                onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#8e9192] mb-1">Gig ID</label>
                <input
                  type="text"
                  value={editingService.gigId}
                  onChange={(e) => setEditingService({ ...editingService, gigId: e.target.value })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-[#8e9192] mb-1">Starting Price</label>
                <input
                  type="text"
                  value={editingService.startingPrice}
                  onChange={(e) => setEditingService({ ...editingService, startingPrice: e.target.value })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8e9192] mb-1">Description</label>
              <textarea
                rows={3}
                value={editingService.description}
                onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-white"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#1f2023]">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded bg-[#1f2023] text-white hover:bg-[#2b2c30]"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveService}
                className="px-4 py-2 rounded bg-white text-black font-bold hover:bg-[#e3e2e2]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
