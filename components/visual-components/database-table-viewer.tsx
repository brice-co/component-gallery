import { Table, Search, Filter, Download, RefreshCw, Eye, Edit, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DatabaseTableViewer() {
  const tableData = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      created: "2024-01-15",
      lastLogin: "2024-03-15 14:30",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "User",
      status: "Active",
      created: "2024-02-01",
      lastLogin: "2024-03-14 09:15",
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike@example.com",
      role: "Editor",
      status: "Inactive",
      created: "2024-01-20",
      lastLogin: "2024-03-10 16:45",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily@example.com",
      role: "User",
      status: "Active",
      created: "2024-02-15",
      lastLogin: "2024-03-15 11:20",
    },
  ]

  const columns = [
    { key: "id", label: "ID", type: "number" },
    { key: "name", label: "Name", type: "text" },
    { key: "email", label: "Email", type: "email" },
    { key: "role", label: "Role", type: "select" },
    { key: "status", label: "Status", type: "select" },
    { key: "created", label: "Created", type: "date" },
    { key: "lastLogin", label: "Last Login", type: "datetime" },
  ]

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-700"
      case "Editor":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card className="w-full max-w-7xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Table className="h-5 w-5" />
          Table Viewer - users
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Controls */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search records..." className="pl-10 w-64" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">Add Record</Button>
          </div>
        </div>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="text-left p-3 font-medium">
                    {column.label}
                  </th>
                ))}
                <th className="text-left p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row.id} className="border-t hover:bg-muted/50">
                  <td className="p-3 font-mono text-sm">{row.id}</td>
                  <td className="p-3">{row.name}</td>
                  <td className="p-3 text-blue-600">{row.email}</td>
                  <td className="p-3">
                    <Badge className={getRoleColor(row.role)}>{row.role}</Badge>
                  </td>
                  <td className="p-3">
                    <Badge className={getStatusColor(row.status)}>{row.status}</Badge>
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">{row.created}</td>
                  <td className="p-3 text-sm text-muted-foreground">{row.lastLogin}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Showing 1-4 of 1,247 records</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>

        {/* Table Info */}
        <div className="grid grid-cols-4 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-lg font-bold">1,247</div>
            <div className="text-sm text-muted-foreground">Total Records</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">7</div>
            <div className="text-sm text-muted-foreground">Columns</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">2.3MB</div>
            <div className="text-sm text-muted-foreground">Table Size</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">15m</div>
            <div className="text-sm text-muted-foreground">Last Updated</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
