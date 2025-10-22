import { Plus, Calendar, Flag, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TaskManager() {
  const tasks = [
    {
      id: 1,
      title: "Update user authentication system",
      description: "Implement OAuth 2.0 and improve security measures",
      assignee: "JD",
      priority: "high",
      status: "in-progress",
      dueDate: "2024-01-15",
      tags: ["Backend", "Security"],
    },
    {
      id: 2,
      title: "Design new landing page",
      description: "Create responsive design for product launch",
      assignee: "SM",
      priority: "medium",
      status: "todo",
      dueDate: "2024-01-20",
      tags: ["Design", "Frontend"],
    },
    {
      id: 3,
      title: "Database optimization",
      description: "Improve query performance and indexing",
      assignee: "AR",
      priority: "low",
      status: "completed",
      dueDate: "2024-01-10",
      tags: ["Database", "Performance"],
    },
    {
      id: 4,
      title: "User testing session",
      description: "Conduct usability testing for new features",
      assignee: "LC",
      priority: "high",
      status: "overdue",
      dueDate: "2024-01-08",
      tags: ["UX", "Testing"],
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "todo":
        return "bg-gray-100 text-gray-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "in-progress":
        return <Clock className="h-4 w-4" />
      case "overdue":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Task Manager</h2>
          <p className="text-gray-600">Organize and track your team's work</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <Card key={task.id} className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold">{task.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Badge className={getPriorityColor(task.priority)}>
                    <Flag className="h-3 w-3 mr-1" />
                    {task.priority}
                  </Badge>
                  <Badge className={getStatusColor(task.status)}>
                    {getStatusIcon(task.status)}
                    <span className="ml-1 capitalize">{task.status.replace("-", " ")}</span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">{task.assignee}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">Assigned to {task.assignee}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Due {task.dueDate}</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {task.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="text-sm text-gray-600">Total Tasks</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-green-600">5</div>
          <div className="text-sm text-gray-600">Completed</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-yellow-600">4</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-red-600">2</div>
          <div className="text-sm text-gray-600">Overdue</div>
        </Card>
      </div>
    </div>
  )
}
