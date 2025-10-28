"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // TODO: Replace with your actual Strapi CMS URL
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "";

    if (cmsUrl) {
      fetch(`${cmsUrl}/api/companies`)
        .then((res) => res.json())
        .then((data) => {
          setProjects(data.data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch CMS data:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen pt-32 bg-[#0E1525]">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Admin Dashboard
          </h1>
          <p className="text-xl text-[#7E8899]">
            Manage your IR platform and client sites
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2 text-[#7E8899]">
              Total Projects
            </h2>
            <p className="text-4xl font-bold text-[#F5C55A]">
              {projects.length}
            </p>
          </div>

          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2 text-[#7E8899]">
              Active Sites
            </h2>
            <p className="text-4xl font-bold text-[#F5C55A]">
              {projects.filter((p) => p.status === "active").length}
            </p>
          </div>

          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2 text-[#7E8899]">
              CMS Status
            </h2>
            <p className="text-4xl font-bold text-green-500">
              {loading ? "..." : "✓"}
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="glass-card p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">IR Projects</h2>
            <button
              onClick={() => router.push("/admin/projects/new")}
              className="px-6 py-3 bg-[#F5C55A] text-[#0E1525] font-semibold rounded-lg hover:bg-[#F5C55A]/90 transition-colors"
            >
              + New Project
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#F5C55A]"></div>
              <p className="mt-4 text-[#7E8899]">Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#7E8899] mb-4">No projects yet</p>
              <p className="text-sm text-[#7E8899]">
                Connect your Strapi CMS to see projects here
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 bg-[rgba(255,255,255,0.02)] rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.attributes?.name || "Unnamed Project"}
                      </h3>
                      <p className="text-[#7E8899] mb-2">
                        {project.attributes?.domain || "No domain"}
                      </p>
                      <div className="flex gap-4">
                        <span className="px-3 py-1 rounded-full text-sm bg-[rgba(245,197,90,0.1)] text-[#F5C55A]">
                          {project.status || "Draft"}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="px-4 py-2 text-[#F5C55A] hover:bg-[rgba(245,197,90,0.1)] rounded-lg transition-colors"
                        onClick={() =>
                          router.push(`/admin/projects/${project.id}`)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CMS Connection Info */}
        {!process.env.NEXT_PUBLIC_CMS_URL && (
          <div className="glass-card p-6 mt-8 bg-yellow-900/20 border border-yellow-900/50">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              ⚠️ CMS Not Connected
            </h3>
            <p className="text-[#7E8899] mb-4">
              To connect your Strapi CMS, set the environment variable:
            </p>
            <code className="bg-[rgba(0,0,0,0.3)] px-3 py-2 rounded text-[#F5C55A] text-sm">
              NEXT_PUBLIC_CMS_URL=https://your-cms.railway.app
            </code>
          </div>
        )}
      </div>
    </div>
  );
}
