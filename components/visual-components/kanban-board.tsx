import { Plus, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function KanbanBoard() {
  const columns = [
    {
      id: "todo",
      title: "To Do",
      color: "bg-gray-100",
      tasks: [
        {
          id: 1,
          title: "Design new homepage",
          description: "Create wireframes and mockups",
          assignee: "JD",
          priority: "high",
          tags: ["Design", "Frontend"],
        },
        {
          id: 2,
          title: "Set up CI/CD pipeline",
          description: "Configure automated deployment",
          assignee: "SM",
          priority: "medium",
          tags: ["DevOps"],
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      color: "bg-blue-100",
      tasks: [
        {
          id: 3,
          title: "User authentication API",
          description: "Implement OAuth 2.0 integration",
          assignee: "AR",
          priority: "high",
          tags: ["Backend", "Security"],
        },
        {
          id: 4,
          title: "Mobile app testing",
          description: "Test on iOS and Android devices",
          assignee: "LC",
          priority: "medium",
          tags: ["Mobile", "QA"],
        },
      ],
    },
    {
      id: "review",
      title: "Review",
      color: "bg-yellow-100",
      tasks: [
        {
          id: 5,
          title: "Database optimization",
          description: "Improve query performance",
          assignee: "MJ",
          priority: "low",
          tags: ["Database"],
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      color: "bg-green-100",
      tasks: [
        {
          id: 6,
          title: "User onboarding flow",
          description: "Complete signup and welcome process",
          assignee: "KW",
          priority: "high",
          tags: ["UX", "Frontend"],
        },
        {
          id: 7,
          title: "Payment integration",
          description: "Stripe payment processing",
          assignee: "TH",
          priority: "high",
          tags: ["Backend", "Payments"],
        },
      ],
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

  return (
    <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Project Board</h2>
          <p className="text-gray-600">Track progress with Kanban workflow</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            <div className={`p-3 rounded-lg ${column.color}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{column.title}</h3>
                <Badge variant="secondary">{column.tasks.length}</Badge>
              </div>
            </div>

            <div className="space-y-3">
              {column.tasks.map((task) => (
                <Card key={task.id} className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-semibold">{task.title}</CardTitle>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-600">{task.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {task.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{task.assignee}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-gray-600">{task.assignee}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                variant="ghost"
                className="w-full justify-start text-gray-500 border-2 border-dashed border-gray-300"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add a card
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
