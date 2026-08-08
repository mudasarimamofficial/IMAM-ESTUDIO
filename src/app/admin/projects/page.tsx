"use client";

import React, { useState, useEffect } from "react";
import AdminNav from "@/components/AdminNav";
import AdminHeader from "@/components/AdminHeader";
import { getStoredProjects, saveStoredProjects, ProjectItem } from "@/lib/studioControlPlane";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saveNotice, setSaveNotice] = useState("");

  useEffect(() => {
    setProjects(getStoredProjects());
  }, []);

  const handleToggleFeatured = (id: string) => {
    const updated = projects.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p));
    setProjects(updated);
    saveStoredProjects(updated);
  };

  const handleSaveProject = () => {
    if (!editingProject) return;
    let updated: ProjectItem[];
    if (projects.some((p) => p.id === editingProject.id)) {
      updated = projects.map((p) => (p.id === editingProject.id ? editingProject : p));
    } else {
      updated = [...projects, editingProject];
    }
    setProjects(updated);
    saveStoredProjects(updated);
    setIsModalOpen(false);
    setEditingProject(null);
    setSaveNotice("Case studies portfolio updated live!");
    setTimeout(() => setSaveNotice(""), 3000);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-[#e3e2e2] flex font-sans">
      <AdminNav />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader
          title="Case Studies & Work Management"
          subtitle="Control featured engineering portfolio items, metrics, and Cloudinary asset links"
          actions={
            <button
              onClick={() => {
                setEditingProject({
                  id: `prj-${Date.now()}`,
                  slug: "new-case-study",
                  gigId: "custom",
                  title: "New Featured Engineering Case Study",
                  category: "Shopify Engineering",
                  description: "Detailed breakdown of the architectural solution...",
                  image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/360070233/original/9fed9f888bd04df98a16b162f97c08f24d904cda.png",
                  tags: ["Case Study", "Engineering"],
                  client: "Enterprise Client",
                  metrics: "+40% Performance",
                  isFeatured: true,
                  isPublished: true,
                  sortOrder: projects.length + 1,
                });
                setIsModalOpen(true);
              }}
              className="px-4 py-2 rounded bg-white text-black font-mono text-xs font-bold hover:bg-[#e3e2e2] transition-colors"
            >
              + Create Case Study
            </button>
          }
        />

        {saveNotice && (
          <div className="mx-8 mt-6 p-4 rounded bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-mono text-xs">
            ✓ {saveNotice}
          </div>
        )}

        <div className="p-8 max-w-6xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((prj) => (
              <div key={prj.id} className="bg-[#09090b] rounded border border-[#1f2023] p-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="aspect-video bg-[#121316] rounded overflow-hidden relative border border-[#1f2023]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={prj.image} alt={prj.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white border border-[#333]">
                      Gig #{prj.gigId}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8e9192] uppercase tracking-wider">{prj.category}</span>
                    <h3 className="font-mono text-sm font-bold text-white mt-0.5">{prj.title}</h3>
                    <p className="font-mono text-xs text-[#c2c4c6] mt-1 line-clamp-2">{prj.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#1f2023]">
                    <span className="font-mono text-xs text-[#25D366] font-bold">{prj.metrics}</span>
                    <span className="font-mono text-[10px] text-[#8e9192]">{prj.client}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#1f2023]">
                  <button
                    onClick={() => handleToggleFeatured(prj.id)}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold ${
                      prj.isFeatured
                        ? "bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30"
                        : "bg-[#1f2023] text-[#8e9192]"
                    }`}
                  >
                    {prj.isFeatured ? "★ FEATURED" : "STANDARD"}
                  </button>
                  <button
                    onClick={() => {
                      setEditingProject(prj);
                      setIsModalOpen(true);
                    }}
                    className="px-3 py-1.5 rounded bg-[#1f2023] hover:bg-[#2b2c30] text-white font-mono text-xs"
                  >
                    Edit Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {isModalOpen && editingProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#09090b] border border-[#1f2023] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto space-y-4 font-mono text-xs">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Edit Case Study</h3>
            
            <div>
              <label className="block text-[#8e9192] mb-1">Title</label>
              <input
                type="text"
                value={editingProject.title}
                onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#8e9192] mb-1">Category</label>
                <input
                  type="text"
                  value={editingProject.category}
                  onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-[#8e9192] mb-1">Key Impact Metric</label>
                <input
                  type="text"
                  value={editingProject.metrics}
                  onChange={(e) => setEditingProject({ ...editingProject, metrics: e.target.value })}
                  className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8e9192] mb-1">Cloudinary Asset Thumbnail URL</label>
              <input
                type="text"
                value={editingProject.image}
                onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                className="w-full bg-[#121316] border border-[#26272b] rounded p-2 text-white"
              />
            </div>

            <div>
              <label className="block text-[#8e9192] mb-1">Description</label>
              <textarea
                rows={3}
                value={editingProject.description}
                onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
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
                onClick={handleSaveProject}
                className="px-4 py-2 rounded bg-white text-black font-bold hover:bg-[#e3e2e2]"
              >
                Save Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
