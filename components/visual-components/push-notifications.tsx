import { Bell, Check, X, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export function PushNotifications() {
  const notifications = [
    {
      id: 1,
      title: "Welcome to our app!",
      message: "Thanks for signing up. Let's get you started.",
      time: "2 min ago",
      status: "sent",
      opened: true,
    },
    {
      id: 2,
      title: "New feature available",
      message: "Check out our latest update with enhanced features.",
      time: "1 hour ago",
      status: "delivered",
      opened: false,
    },
    {
      id: 3,
      title: "Don't forget to complete your profile",
      message: "Add your details to get personalized recommendations.",
      time: "1 day ago",
      status: "pending",
      opened: false,
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Push Notification Manager
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Settings */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Notification Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Marketing notifications</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Product updates</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Security alerts</span>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Recent notifications */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Recent Notifications</h3>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    {notification.status === "sent" && <Check className="w-4 h-4 text-green-500" />}
                    {notification.status === "delivered" && <Bell className="w-4 h-4 text-blue-500" />}
                    {notification.status === "pending" && <X className="w-4 h-4 text-orange-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-gray-900 truncate">{notification.title}</p>
                      <Badge variant={notification.opened ? "default" : "secondary"} className="text-xs">
                        {notification.opened ? "Opened" : "Unread"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Configure
            </Button>
            <Button variant="outline" size="sm">
              Send Test
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
