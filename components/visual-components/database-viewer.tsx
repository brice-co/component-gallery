import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Database, Search, Filter, Download } from "lucide-react"

export function DatabaseViewer() {
  const tables = [
    { name: "users", records: 1250, size: "2.4 MB", status: "active" },
    { name: "orders", records: 3420, size: "5.1 MB", status: "active" },
    { name: "products", records: 890, size: "1.8 MB", status: "active" },
    { name: "sessions", records: 15600, size: "12.3 MB", status: "archived" },
  ]

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Database className="h-5 w-5" />
          <span>Database Viewer</span>
        </CardTitle>
        <CardDescription>Browse and manage your database tables</CardDescription>

        <div className="flex items-center space-x-2 pt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search tables..." className="pl-10" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tables.map((table) => (
            <div key={table.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded">
                  <Database className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{table.name}</span>
                    <Badge variant={table.status === "active" ? "default" : "secondary"}>{table.status}</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    {table.records.toLocaleString()} records • {table.size}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Table
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
