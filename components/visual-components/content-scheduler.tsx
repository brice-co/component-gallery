import { Calendar, Clock, Send, Eye, Edit } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ContentScheduler() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calendar className="h-5 w-5 text-blue-500" />
          Content Scheduler
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">New Product Launch</h4>
              <Badge className="bg-blue-100 text-blue-700">Scheduled</Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <Clock className="h-3 w-3" />
              Dec 15, 2024 at 9:00 AM
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" className="h-6 px-2">
                <Eye className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="h-6 px-2">
                <Edit className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Weekly Newsletter</h4>
              <Badge className="bg-green-100 text-green-700">Published</Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <Send className="h-3 w-3" />
              Dec 10, 2024 at 8:00 AM
            </div>
            <div className="text-xs text-slate-500">Sent to 1,247 subscribers</div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Holiday Sale</h4>
              <Badge variant="secondary">Draft</Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <Clock className="h-3 w-3" />
              Not scheduled
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" className="h-6 px-2">
                <Edit className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="h-6 px-2 text-blue-600">
                Schedule
              </Button>
            </div>
          </div>
        </div>

        <Button className="w-full" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          New Content
        </Button>
      </CardContent>
    </Card>
  )
}
