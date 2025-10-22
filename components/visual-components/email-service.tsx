import { Mail, Send, Users, BarChart3, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function EmailService() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Mail className="h-5 w-5 text-blue-500" />
          Email Service
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-slate-50 rounded-lg text-center">
            <div className="text-lg font-semibold text-slate-900">1,247</div>
            <div className="text-xs text-slate-500">Sent Today</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg text-center">
            <div className="text-lg font-semibold text-slate-900">94.2%</div>
            <div className="text-xs text-slate-500">Delivery Rate</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Send className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Transactional</span>
            </div>
            <Badge className="bg-green-100 text-green-700">Active</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Marketing</span>
            </div>
            <Badge className="bg-green-100 text-green-700">Active</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium">Analytics</span>
            </div>
            <Button size="sm" variant="ghost">
              <Settings className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <Button className="w-full" size="sm">
          Send Campaign
        </Button>
      </CardContent>
    </Card>
  )
}
