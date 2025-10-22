"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, Download, FileText, Database, CheckCircle, AlertCircle, Clock } from "lucide-react"

export function DataImportExport() {
  const [activeTab, setActiveTab] = useState<"import" | "export">("import")

  const importJobs = [
    { id: 1, name: "Customer Data CSV", status: "completed", progress: 100, records: 15420, time: "2 min ago" },
    { id: 2, name: "Product Inventory JSON", status: "processing", progress: 67, records: 8934, time: "In progress" },
    { id: 3, name: "Sales Reports Excel", status: "pending", progress: 0, records: 0, time: "Queued" },
  ]

  const exportJobs = [
    { id: 1, name: "User Analytics Report", status: "completed", progress: 100, size: "2.4 MB", time: "5 min ago" },
    { id: 2, name: "Financial Data Export", status: "processing", progress: 45, size: "1.2 MB", time: "In progress" },
    { id: 3, name: "Backup Database Dump", status: "failed", progress: 0, size: "0 MB", time: "1 hour ago" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "processing":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Data Import/Export</h2>
        <div className="flex gap-2">
          <Button
            variant={activeTab === "import" ? "default" : "outline"}
            onClick={() => setActiveTab("import")}
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button
            variant={activeTab === "export" ? "default" : "outline"}
            onClick={() => setActiveTab("export")}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {activeTab === "import" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Import Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Drop files here or click to browse</p>
                <p className="text-sm text-gray-500 mb-4">Supports CSV, JSON, Excel, and XML files</p>
                <Button>Choose Files</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Import History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {importJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(job.status)}
                      <div>
                        <p className="font-medium">{job.name}</p>
                        <p className="text-sm text-gray-500">
                          {job.records.toLocaleString()} records • {job.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                      {job.status === "processing" && (
                        <div className="w-24">
                          <Progress value={job.progress} className="h-2" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "export" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Export Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Data Source</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Users Table</option>
                      <option>Orders Table</option>
                      <option>Products Table</option>
                      <option>Analytics Data</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Export Format</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>CSV</option>
                      <option>JSON</option>
                      <option>Excel</option>
                      <option>SQL Dump</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date Range</label>
                    <div className="flex gap-2">
                      <input type="date" className="flex-1 p-2 border rounded-md" />
                      <input type="date" className="flex-1 p-2 border rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Filters</label>
                    <input type="text" placeholder="Add custom filters..." className="w-full p-2 border rounded-md" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Start Export
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exportJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(job.status)}
                      <div>
                        <p className="font-medium">{job.name}</p>
                        <p className="text-sm text-gray-500">
                          {job.size} • {job.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                      {job.status === "processing" && (
                        <div className="w-24">
                          <Progress value={job.progress} className="h-2" />
                        </div>
                      )}
                      {job.status === "completed" && (
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
    </div>
  )
}
