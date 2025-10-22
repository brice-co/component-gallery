import { Zap, Play, Pause, Settings, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export function AutomationTrigger() {
  const automations = [
    {
      id: 1,
      name: "Welcome Email Sequence",
      trigger: "New user signup",
      action: "Send welcome email series",
      status: "active",
      lastRun: "2 hours ago",
      successRate: 98,
      runs: 1247,
    },
    {
      id: 2,
      name: "Invoice Reminder",
      trigger: "Payment overdue by 7 days",
      action: "Send reminder email + Slack notification",
      status: "active",
      lastRun: "1 day ago",
      successRate: 95,
      runs: 89,
    },
    {
      id: 3,
      name: "Lead Scoring Update",
      trigger: "User downloads whitepaper",
      action: "Increase lead score by 10 points",
      status: "paused",
      lastRun: "3 days ago",
      successRate: 100,
      runs: 456,
    },
    {
      id: 4,
      name: "Support Ticket Escalation",
      trigger: "Ticket unresolved for 24 hours",
      action: "Assign to senior support + notify manager",
      status: "error",
      lastRun: "Failed 1 hour ago",
      successRate: 87,
      runs: 234,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Play className="h-4 w-4" />
      case "paused":
        return <Pause className="h-4 w-4" />
      case "error":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Automation Triggers</h2>
          <p className="text-gray-600">Automate workflows and save time</p>
        </div>
        <Button>
          <Zap className="h-4 w-4 mr-2" />
          Create Automation
        </Button>
      </div>

      <div className="grid gap-4">
        {automations.map((automation) => (
          <Card key={automation.id} className="border border-gray-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">{automation.name}</CardTitle>
                  <div className="mt-2 space-y-1">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Trigger:</span> {automation.trigger}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Action:</span> {automation.action}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(automation.status)}>
                    {getStatusIcon(automation.status)}
                    <span className="ml-1 capitalize">{automation.status}</span>
                  </Badge>
                  <Switch checked={automation.status === "active"} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{automation.runs}</div>
                  <div className="text-xs text-gray-600">Total Runs</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">{automation.successRate}%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">
                    {automation.status === "error" ? "Failed" : "Success"}
                  </div>
                  <div className="text-xs text-gray-600">Last Status</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{automation.lastRun}</div>
                  <div className="text-xs text-gray-600">Last Run</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Last run: {automation.lastRun}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-1" />
                    Configure
                  </Button>
                  <Button variant="outline" size="sm">
                    View Logs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-green-600">3</div>
          <div className="text-sm text-gray-600">Active Automations</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-blue-600">2,026</div>
          <div className="text-sm text-gray-600">Total Executions</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">96%</div>
          <div className="text-sm text-gray-600">Average Success Rate</div>
        </Card>
      </div>
    </div>
  )
}
