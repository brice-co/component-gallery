import { Webhook, Play, Pause, Settings, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function WebhookHandler() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Webhook className="h-5 w-5 text-purple-500" />
          Webhook Handler
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Payment Events</span>
              <Badge className="bg-green-100 text-green-700">Active</Badge>
            </div>
            <div className="text-xs text-slate-500 mb-2">https://api.example.com/webhooks/payments</div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" className="h-6 px-2">
                <Pause className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="h-6 px-2">
                <Settings className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">User Events</span>
              <Badge variant="outline">Paused</Badge>
            </div>
            <div className="text-xs text-slate-500 mb-2">https://api.example.com/webhooks/users</div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" className="h-6 px-2">
                <Play className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="h-6 px-2">
                <Settings className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <Activity className="h-4 w-4 text-slate-400" />
          <span className="text-xs text-slate-500">Last event: 2 minutes ago</span>
        </div>
      </CardContent>
    </Card>
  )
}
