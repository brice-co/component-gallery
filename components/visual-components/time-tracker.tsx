import { Play, Pause, Square, Clock, Calendar, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TimeTracker() {
  const currentSession = {
    project: "Website Redesign",
    task: "Homepage Layout",
    startTime: "2:30 PM",
    duration: "01:23:45",
    isRunning: true,
  }

  const recentEntries = [
    {
      id: 1,
      project: "Mobile App",
      task: "User Authentication",
      date: "Today",
      duration: "2h 15m",
      billable: true,
    },
    {
      id: 2,
      project: "Website Redesign",
      task: "Component Library",
      date: "Today",
      duration: "1h 45m",
      billable: true,
    },
    {
      id: 3,
      project: "Internal Tools",
      task: "Bug Fixes",
      date: "Yesterday",
      duration: "3h 30m",
      billable: false,
    },
    {
      id: 4,
      project: "Client Portal",
      task: "Dashboard Updates",
      date: "Yesterday",
      duration: "1h 20m",
      billable: true,
    },
  ]

  const weeklyStats = {
    totalHours: "32h 15m",
    billableHours: "28h 45m",
    projects: 5,
    avgPerDay: "6h 27m",
  }

  return (
    <div className="p-6 bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Time Tracker</h2>
        <p className="text-gray-600">Track time spent on projects and tasks</p>
      </div>

      {/* Current Session */}
      <Card className="mb-6 border-2 border-blue-200 bg-blue-50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold text-blue-900">{currentSession.project}</CardTitle>
              <p className="text-blue-700">{currentSession.task}</p>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Running
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-mono font-bold text-blue-900">{currentSession.duration}</div>
              <div className="text-sm text-blue-700">Started at {currentSession.startTime}</div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Pause className="h-4 w-4 mr-1" />
                Pause
              </Button>
              <Button variant="outline" size="sm">
                <Square className="h-4 w-4 mr-1" />
                Stop
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Entries */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{entry.project}</div>
                      <div className="text-sm text-gray-600">{entry.task}</div>
                      <div className="text-xs text-gray-500">{entry.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-semibold">{entry.duration}</div>
                      <Badge variant={entry.billable ? "default" : "secondary"} className="text-xs">
                        {entry.billable ? "Billable" : "Non-billable"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                <Play className="h-4 w-4 mr-2" />
                Start New Timer
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Stats */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{weeklyStats.totalHours}</div>
                  <div className="text-sm text-gray-600">Total Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{weeklyStats.billableHours}</div>
                  <div className="text-sm text-gray-600">Billable Hours</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{weeklyStats.projects}</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{weeklyStats.avgPerDay}</div>
                    <div className="text-xs text-gray-600">Avg/Day</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Play className="h-4 w-4 mr-2" />
                  Continue Last Task
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Timesheet
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
