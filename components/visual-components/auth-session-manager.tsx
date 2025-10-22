import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, MapPin, Clock } from "lucide-react"

export function AuthSessionManager() {
  const sessions = [
    { device: "Desktop", location: "New York, US", lastActive: "Active now", current: true },
    { device: "Mobile", location: "San Francisco, US", lastActive: "2 hours ago", current: false },
    { device: "Desktop", location: "London, UK", lastActive: "1 day ago", current: false },
  ]

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Active Sessions</CardTitle>
        <CardDescription>Manage your active sessions across different devices</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {sessions.map((session, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              {session.device === "Desktop" ? (
                <Monitor className="h-5 w-5 text-gray-500" />
              ) : (
                <Smartphone className="h-5 w-5 text-gray-500" />
              )}
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{session.device}</span>
                  {session.current && <Badge variant="secondary">Current</Badge>}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{session.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{session.lastActive}</span>
                  </div>
                </div>
              </div>
            </div>
            {!session.current && (
              <Button variant="outline" size="sm">
                Revoke
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
