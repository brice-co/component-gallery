import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, FileText, Users, Calendar } from "lucide-react"

export function EmployeeOnboarding() {
  const newEmployees = [
    {
      name: "Alex Thompson",
      role: "Frontend Developer",
      startDate: "Nov 15, 2024",
      progress: 75,
      avatar: "/professional-person.png",
      status: "in-progress",
      completedTasks: 6,
      totalTasks: 8,
    },
    {
      name: "Maria Garcia",
      role: "Product Designer",
      startDate: "Nov 20, 2024",
      progress: 45,
      avatar: "/professional-woman-designer.png",
      status: "in-progress",
      completedTasks: 4,
      totalTasks: 9,
    },
    {
      name: "James Wilson",
      role: "Data Analyst",
      startDate: "Dec 1, 2024",
      progress: 100,
      avatar: "/professional-analyst.png",
      status: "completed",
      completedTasks: 7,
      totalTasks: 7,
    },
  ]

  const onboardingTasks = [
    { task: "Complete HR paperwork", completed: true, category: "Documentation" },
    { task: "Set up workspace and equipment", completed: true, category: "Setup" },
    { task: "IT security training", completed: true, category: "Training" },
    { task: "Meet with direct manager", completed: true, category: "Meetings" },
    { task: "Company culture orientation", completed: true, category: "Training" },
    { task: "Department introduction", completed: true, category: "Meetings" },
    { task: "Review job responsibilities", completed: false, category: "Training" },
    { task: "Complete first project assignment", completed: false, category: "Work" },
  ]

  const upcomingMilestones = [
    { milestone: "30-day check-in", date: "Dec 15", type: "review" },
    { milestone: "Complete probation period", date: "Feb 15", type: "milestone" },
    { milestone: "Performance review", date: "May 15", type: "review" },
  ]

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Employee Onboarding
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4">
              {newEmployees.map((employee) => (
                <Card key={employee.name}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                          <AvatarFallback>
                            {employee.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{employee.name}</h3>
                          <p className="text-sm text-muted-foreground">{employee.role}</p>
                        </div>
                      </div>
                      <Badge variant={employee.status === "completed" ? "default" : "secondary"}>
                        {employee.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Onboarding Progress</span>
                          <span>
                            {employee.completedTasks}/{employee.totalTasks} tasks
                          </span>
                        </div>
                        <Progress value={employee.progress} />
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Started {employee.startDate}
                        </div>
                        <div className="flex items-center gap-1">
                          {employee.status === "completed" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Clock className="h-4 w-4 text-yellow-500" />
                          )}
                          {employee.progress}% complete
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            <div className="space-y-3">
              {onboardingTasks.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <Checkbox checked={item.completed} />
                  <div className="flex-1">
                    <p className={`text-sm ${item.completed ? "line-through text-muted-foreground" : ""}`}>
                      {item.task}
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  {item.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-4">
            <div className="space-y-4">
              {upcomingMilestones.map((milestone, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-full ${
                            milestone.type === "review" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                          }`}
                        >
                          {milestone.type === "review" ? (
                            <FileText className="h-4 w-4" />
                          ) : (
                            <CheckCircle className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{milestone.milestone}</h3>
                          <p className="text-sm text-muted-foreground">Scheduled for {milestone.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
