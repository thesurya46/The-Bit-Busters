import { motion } from "motion/react";
import { useState } from "react";
import { PlusCircle, FileText, FolderGit2, Users, Settings } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "blog", label: "Blog Posts", icon: FileText },
    { id: "users", label: "Users", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </h1>
          <p className="text-gray-400">
            Manage your projects, blog posts, and community
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600"
                  : "bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50"
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8"
        >
          {activeTab === "projects" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Manage Projects</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                  <PlusCircle size={20} />
                  <span>Add Project</span>
                </button>
              </div>
              <p className="text-gray-400 mb-4">
                Connect Supabase from Make settings to enable project management
              </p>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">Project {item}</h3>
                      <p className="text-sm text-gray-400">Sample project description</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "blog" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                  <PlusCircle size={20} />
                  <span>New Post</span>
                </button>
              </div>
              <p className="text-gray-400 mb-4">
                Connect Supabase from Make settings to enable blog management
              </p>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">Blog Post {item}</h3>
                      <p className="text-sm text-gray-400">Published on March {item}, 2026</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">User Management</h2>
              <p className="text-gray-400 mb-4">
                Connect Supabase from Make settings to enable user management
              </p>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg flex justify-between items-center"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full" />
                      <div>
                        <h3 className="font-semibold">User {item}</h3>
                        <p className="text-sm text-gray-400">user{item}@example.com</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Site Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">Site Name</label>
                      <input
                        type="text"
                        defaultValue="The Bit Busters"
                        className="w-full px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Description</label>
                      <textarea
                        defaultValue="Breaking Limits. Building Future."
                        rows={3}
                        className="w-full px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 resize-none"
                      />
                    </div>
                  </div>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
