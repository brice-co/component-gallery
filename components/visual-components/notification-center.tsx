import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, X, Settings, Mail, MessageSquare, AlertTriangle, Info } from "lucide-react"

export function NotificationCenter() {
  const notifications = [
    {
      id: 1,
      type: "info",
      title: "System Update Available",
      message: "A new system update is ready to install",
      time: "2 minutes ago",
      unread: true,
      icon: Info,
    },
    {
      id: 2,
      type: "warning",
      title: "Payment Method Expiring",
      message: "Your credit card ending in 4242 expires next month",
      time: "1 hour ago",
      unread: true,
      icon: AlertTriangle,
    },
    {
      id: 3,
      type: "message",
      title: "New Message from Team",
      message: "Sarah commented on your project proposal",
      time: "3 hours ago",
      unread: false,
      icon: MessageSquare,
    },
    {
      id: 4,
      type: "email",
      title: "Weekly Report Ready",
      message: "Your analytics report for this week is available",
      time: "1 day ago",
      unread: false,
      icon: Mail,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "info":
        return "text-blue-600 bg-blue-100"
      case "warning":
        return "text-orange-600 bg-orange-100"
      case "message":
        return "text-green-600 bg-green-100"
      case "email":
        return "text-purple-600 bg-purple-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <CardTitle>Notifications</CardTitle>
            <Badge variant="secondary">4 new</Badge>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription>Stay updated with your latest activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon
            return (
              <div
                key={notification.id}
                className={`flex items-start space-x-3 p-4 rounded-lg border ${
                  notification.unread ? "bg-blue-50 border-blue-200" : "bg-white"
                }`}
              >
                <div className={`p-2 rounded-full ${getTypeColor(notification.type)}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{notification.title}</h4>
                    {notification.unread && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t">
          <Button variant="outline" size="sm">
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
