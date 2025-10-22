import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogIn, Settings, FileText, Shield, Clock } from "lucide-react"

export function UserActivityLog() {
  const activities = [
    { action: "Logged in", time: "2 minutes ago", type: "auth", icon: LogIn },
    { action: "Updated profile settings", time: "1 hour ago", type: "settings", icon: Settings },
    { action: "Created new document", time: "3 hours ago", type: "content", icon: FileText },
    { action: "Changed password", time: "1 day ago", type: "security", icon: Shield },
    { action: "Logged in", time: "2 days ago", type: "auth", icon: LogIn },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "auth":
        return "bg-blue-100 text-blue-800"
      case "settings":
        return "bg-gray-100 text-gray-800"
      case "content":
        return "bg-green-100 text-green-800"
      case "security":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Activity Log</CardTitle>
        <CardDescription>Recent account activity and changes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="flex-shrink-0">
                  <Icon className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                </div>
                <Badge className={getTypeColor(activity.type)}>{activity.type}</Badge>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
