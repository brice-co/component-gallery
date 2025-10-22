import { WifiOff, RefreshCw, Check, AlertCircle, Cloud } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function OfflineSync() {
  const syncItems = [
    {
      id: 1,
      type: "document",
      name: "Project Report.pdf",
      status: "synced",
      size: "2.4 MB",
      lastSync: "2 min ago",
    },
    {
      id: 2,
      type: "image",
      name: "Screenshot_2024.png",
      status: "pending",
      size: "1.8 MB",
      lastSync: "Waiting for connection",
    },
    {
      id: 3,
      type: "data",
      name: "User preferences",
      status: "syncing",
      size: "12 KB",
      lastSync: "In progress",
    },
    {
      id: 4,
      type: "document",
      name: "Meeting Notes.txt",
      status: "failed",
      size: "45 KB",
      lastSync: "Failed - Retry available",
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="w-5 h-5" />
            Offline Sync Manager
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Connection Status */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <WifiOff className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-gray-900">Offline Mode</span>
              </div>
              <Badge variant="secondary">4 items pending</Badge>
            </div>
            <Button size="sm" variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry Sync
            </Button>
          </div>

          {/* Sync Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">Sync Progress</span>
              <span className="text-sm text-gray-600">2 of 4 items</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>

          {/* Sync Items */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Sync Queue</h3>
            <div className="space-y-3">
              {syncItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="flex-shrink-0">
                    {item.status === "synced" && <Check className="w-5 h-5 text-green-500" />}
                    {item.status === "pending" && <WifiOff className="w-5 h-5 text-orange-500" />}
                    {item.status === "syncing" && <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />}
                    {item.status === "failed" && <AlertCircle className="w-5 h-5 text-red-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-gray-900 truncate">{item.name}</p>
                      <Badge
                        variant={
                          item.status === "synced"
                            ? "default"
                            : item.status === "syncing"
                              ? "secondary"
                              : item.status === "failed"
                                ? "destructive"
                                : "outline"
                        }
                        className="text-xs"
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{item.size}</span>
                      <span>{item.lastSync}</span>
                    </div>
                  </div>
                  {item.status === "failed" && (
                    <Button size="sm" variant="outline">
                      Retry
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-3 pt-4 border-t">
            <h3 className="font-semibold text-gray-900">Sync Settings</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm">
                Auto-sync: On
              </Button>
              <Button variant="outline" size="sm">
                WiFi only: Off
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
