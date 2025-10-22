"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Shield, Database, Clock, CheckCircle, AlertTriangle, Settings, Download, RotateCcw } from "lucide-react"

export function DataBackup() {
  const [activeTab, setActiveTab] = useState<"overview" | "schedule" | "restore">("overview")

  const backupHistory = [
    {
      id: 1,
      name: "Full Database Backup",
      type: "Full",
      status: "completed",
      size: "2.4 GB",
      date: "2024-01-15 02:00 AM",
      duration: "45 min",
    },
    {
      id: 2,
      name: "Incremental Backup",
      type: "Incremental",
      status: "completed",
      size: "156 MB",
      date: "2024-01-14 02:00 AM",
      duration: "8 min",
    },
    {
      id: 3,
      name: "User Data Backup",
      type: "Selective",
      status: "running",
      size: "1.2 GB",
      date: "In progress",
      duration: "12 min elapsed",
      progress: 67,
    },
    {
      id: 4,
      name: "Full Database Backup",
      type: "Full",
      status: "failed",
      size: "0 GB",
      date: "2024-01-13 02:00 AM",
      duration: "Failed after 5 min",
    },
  ]

  const schedules = [
    { id: 1, name: "Daily Incremental", frequency: "Daily at 2:00 AM", type: "Incremental", enabled: true },
    { id: 2, name: "Weekly Full Backup", frequency: "Weekly on Sunday at 1:00 AM", type: "Full", enabled: true },
    { id: 3, name: "Monthly Archive", frequency: "Monthly on 1st at 12:00 AM", type: "Archive", enabled: false },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "running":
        return <Clock className="h-4 w-4 text-blue-500 animate-spin" />
      case "failed":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "running":
        return "bg-blue-100 text-blue-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full":
        return "bg-purple-100 text-purple-800"
      case "Incremental":
        return "bg-blue-100 text-blue-800"
      case "Selective":
        return "bg-orange-100 text-orange-800"
      case "Archive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold">Data Backup & Recovery</h2>
        </div>
        <div className="flex gap-2">
          <Button variant={activeTab === "overview" ? "default" : "outline"} onClick={() => setActiveTab("overview")}>
            Overview
          </Button>
          <Button variant={activeTab === "schedule" ? "default" : "outline"} onClick={() => setActiveTab("schedule")}>
            Schedule
          </Button>
          <Button variant={activeTab === "restore" ? "default" : "outline"} onClick={() => setActiveTab("restore")}>
            Restore
          </Button>
        </div>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Backups</p>
                    <p className="text-2xl font-bold">247</p>
                  </div>
                  <Database className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Storage Used</p>
                    <p className="text-2xl font-bold">156 GB</p>
                  </div>
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Success Rate</p>
                    <p className="text-2xl font-bold">98.7%</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Last Backup</p>
                    <p className="text-2xl font-bold">2h ago</p>
                  </div>
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Backups</CardTitle>
                <Button>
                  <Database className="h-4 w-4 mr-2" />
                  Start Backup
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {backupHistory.map((backup) => (
                  <div key={backup.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(backup.status)}
                      <div>
                        <p className="font-medium">{backup.name}</p>
                        <p className="text-sm text-gray-500">
                          {backup.date} • {backup.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getTypeColor(backup.type)}>{backup.type}</Badge>
                      <Badge className={getStatusColor(backup.status)}>{backup.status}</Badge>
                      <span className="text-sm font-medium">{backup.size}</span>
                      {backup.status === "running" && backup.progress && (
                        <div className="w-24">
                          <Progress value={backup.progress} className="h-2" />
                        </div>
                      )}
                      {backup.status === "completed" && (
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "schedule" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Backup Schedules
                </CardTitle>
                <Button>Add Schedule</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedules.map((schedule) => (
                  <div key={schedule.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${schedule.enabled ? "bg-green-500" : "bg-gray-300"}`} />
                      <div>
                        <p className="font-medium">{schedule.name}</p>
                        <p className="text-sm text-gray-500">{schedule.frequency}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getTypeColor(schedule.type)}>{schedule.type}</Badge>
                      <Badge className={schedule.enabled ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                        {schedule.enabled ? "Enabled" : "Disabled"}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "restore" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5" />
                Restore Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Backup</label>
                    <select className="w-full p-3 border rounded-md">
                      <option>Full Database Backup - 2024-01-15 (2.4 GB)</option>
                      <option>Incremental Backup - 2024-01-14 (156 MB)</option>
                      <option>User Data Backup - 2024-01-13 (1.8 GB)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Restore Type</label>
                    <select className="w-full p-3 border rounded-md">
                      <option>Complete Restore</option>
                      <option>Selective Restore</option>
                      <option>Point-in-Time Recovery</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">Warning</p>
                      <p className="text-sm text-yellow-700">
                        This operation will overwrite existing data. Make sure to create a backup before proceeding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Preview Changes
                  </Button>
                  <Button className="flex-1">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Start Restore
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Backups for Restore</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {backupHistory
                  .filter((b) => b.status === "completed")
                  .map((backup) => (
                    <div
                      key={backup.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <div>
                          <p className="font-medium">{backup.name}</p>
                          <p className="text-sm text-gray-500">
                            {backup.date} • {backup.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(backup.type)}>{backup.type}</Badge>
                        <Button size="sm" variant="outline">
                          Select
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
