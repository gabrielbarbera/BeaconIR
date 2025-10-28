"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ContentType =
  | "sec-filings"
  | "news"
  | "presentations"
  | "leadership"
  | "faq"
  | "events";

interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  date?: string;
  status: "draft" | "published";
}

export default function ContentManagementPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ContentType>("news");
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/auth/login");
    }
  }, [session, status, router]);

  useEffect(() => {
    // Fetch content from CMS
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/content?type=${activeTab}`);
        const data = await response.json();

        if (data.content && data.content.length > 0) {
          setContent(
            data.content.map((item: any) => ({
              id: item.id.toString(),
              type: activeTab,
              title: item.attributes?.title || "Untitled",
              date:
                item.attributes?.date ||
                item.attributes?.publishedAt?.split("T")[0],
              status: item.attributes?.publishedAt ? "published" : "draft",
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch content:", error);
        // Fallback to mock data
        setContent([
          {
            id: "1",
            type: "news",
            title: "Quarterly Earnings Announcement",
            date: "2025-01-15",
            status: "published",
          },
        ]);
      }
    };

    fetchContent();
  }, [activeTab]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-navy via-deep-navy to-[#0a0e27]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const contentTypes: { id: ContentType; label: string; icon: string }[] = [
    { id: "news", label: "News & Press", icon: "📰" },
    { id: "sec-filings", label: "SEC Filings", icon: "📄" },
    { id: "presentations", label: "Presentations", icon: "📊" },
    { id: "leadership", label: "Leadership", icon: "👥" },
    { id: "faq", label: "FAQs", icon: "❓" },
    { id: "events", label: "Events", icon: "📅" },
  ];

  const filteredContent = content.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-navy via-deep-navy to-[#0a0e27] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <button
              onClick={() => router.push("/dashboard")}
              className="text-gold hover:text-gold/80 mb-4 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Dashboard
            </button>
            <h1 className="text-4xl font-bold text-white mb-2">
              Content Management
            </h1>
            <p className="text-gray-400">Manage your IR site content</p>
          </div>
          <button className="btn-primary">Add New Content</button>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-white/10">
          <div className="flex gap-2 overflow-x-auto">
            {contentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === type.id
                    ? "text-gold border-b-2 border-gold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {type.icon} {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content List */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6">
          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No Content Yet
              </h3>
              <p className="text-gray-400 mb-4">
                Get started by adding your first content item
              </p>
              <button className="btn-primary">Add Content</button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredContent.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.status === "published"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      {item.date && (
                        <p className="text-gray-400 text-sm">{item.date}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-secondary text-sm px-4 py-2">
                      Edit
                    </button>
                    <button className="btn-secondary text-sm px-4 py-2">
                      {item.status === "published" ? "Unpublish" : "Publish"}
                    </button>
                    <button className="text-red-400 hover:text-red-300 text-sm px-4 py-2">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
