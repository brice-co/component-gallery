"use client"

import { useState } from "react"
import { FileText, BarChart3, Settings, Users, Bell } from "lucide-react"

export function Tabs() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Project Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-blue-700">Active Projects</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">156</div>
              <div className="text-sm text-green-700">Completed Tasks</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-purple-700">Team Members</div>
            </div>
          </div>
          <p className="text-gray-600">
            Welcome to your dashboard! Here you can see an overview of all your projects and recent activity.
          </p>
        </div>
      ),
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h3>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Analytics charts would appear here</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-sm text-gray-600">Page Views</div>
              <div className="text-2xl font-bold text-gray-900">12,345</div>
              <div className="text-sm text-green-600">+12% from last month</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-sm text-gray-600">Conversion Rate</div>
              <div className="text-2xl font-bold text-gray-900">3.2%</div>
              <div className="text-sm text-red-600">-0.5% from last month</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "team",
      label: "Team",
      icon: Users,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
          <div className="space-y-3">
            {[
              { name: "Alice Johnson", role: "Project Manager", avatar: "AJ", status: "online" },
              { name: "Bob Smith", role: "Developer", avatar: "BS", status: "away" },
              { name: "Carol Davis", role: "Designer", avatar: "CD", status: "online" },
              { name: "David Wilson", role: "QA Engineer", avatar: "DW", status: "offline" },
            ].map((member, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-700">{member.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{member.name}</div>
                  <div className="text-sm text-gray-600">{member.role}</div>
                </div>
                <div
                  className={`w-3 h-3 rounded-full ${
                    member.status === "online"
                      ? "bg-green-500"
                      : member.status === "away"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <div className="space-y-3">
            {[
              { type: "info", message: "New project assigned to you", time: "2 minutes ago" },
              { type: "success", message: "Task completed successfully", time: "1 hour ago" },
              { type: "warning", message: "Deadline approaching for Project X", time: "3 hours ago" },
              { type: "error", message: "Build failed for main branch", time: "5 hours ago" },
            ].map((notification, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    notification.type === "info"
                      ? "bg-blue-500"
                      : notification.type === "success"
                        ? "bg-green-500"
                        : notification.type === "warning"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-medium text-gray-900 mb-2">Account Settings</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Email notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">SMS notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Marketing emails</span>
                </label>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-medium text-gray-900 mb-2">Privacy Settings</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm text-gray-700">Make profile public</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">Show online status</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg border shadow-sm">
      {/* Tab Navigation */}
      <div className="border-b">
        <nav className="flex space-x-8 px-6" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  )
}
