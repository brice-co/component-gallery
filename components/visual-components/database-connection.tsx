import { Database, CheckCircle, AlertCircle, Clock, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DatabaseConnection() {
  const connections = [
    {
      name: "Production DB",
      type: "PostgreSQL",
      status: "connected",
      host: "prod-db.company.com",
      lastSync: "2 minutes ago",
      tables: 47,
    },
    {
      name: "Analytics DB",
      type: "MySQL",
      status: "connecting",
      host: "analytics.company.com",
      lastSync: "Connecting...",
      tables: 23,
    },
    {
      name: "Cache Redis",
      type: "Redis",
      status: "error",
      host: "cache.company.com",
      lastSync: "Failed 5m ago",
      tables: 0,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "connecting":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Database className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-green-100 text-green-700"
      case "connecting":
        return "bg-yellow-100 text-yellow-700"
      case "error":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Database Connections
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">Manage your database connections and monitor their status</div>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Add Connection
          </Button>
        </div>

        <div className="grid gap-4">
          {connections.map((connection, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
              <div className="flex items-center gap-4">
                {getStatusIcon(connection.status)}
                <div>
                  <div className="font-medium">{connection.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {connection.type} • {connection.host}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right text-sm">
                  <div className="text-muted-foreground">Last sync</div>
                  <div>{connection.lastSync}</div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-muted-foreground">Tables</div>
                  <div>{connection.tables}</div>
                </div>
                <Badge className={getStatusColor(connection.status)}>{connection.status}</Badge>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-sm text-muted-foreground">Active Connections</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">70</div>
            <div className="text-sm text-muted-foreground">Total Tables</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">1.2GB</div>
            <div className="text-sm text-muted-foreground">Data Transferred</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
