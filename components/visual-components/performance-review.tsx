import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Star, TrendingUp, FileText, MessageSquare } from "lucide-react"

export function PerformanceReview() {
  const employee = {
    name: "Sarah Johnson",
    role: "Product Manager",
    department: "Product",
    avatar: "/professional-woman-diverse.png",
    reviewPeriod: "Jan 2024 - Dec 2024",
    overallRating: 4.2,
  }

  const metrics = [
    { category: "Technical Skills", score: 85, target: 80, trend: "up" },
    { category: "Communication", score: 92, target: 85, trend: "up" },
    { category: "Leadership", score: 78, target: 75, trend: "stable" },
    { category: "Problem Solving", score: 88, target: 80, trend: "up" },
    { category: "Team Collaboration", score: 95, target: 90, trend: "up" },
  ]

  const goals = [
    {
      goal: "Lead product roadmap planning",
      status: "completed",
      progress: 100,
      description: "Successfully planned and executed Q3-Q4 product roadmap",
    },
    {
      goal: "Improve cross-team collaboration",
      status: "in-progress",
      progress: 75,
      description: "Implemented weekly sync meetings with engineering and design",
    },
    {
      goal: "Mentor junior team members",
      status: "completed",
      progress: 100,
      description: "Mentored 2 junior PMs, both received promotions",
    },
  ]

  const feedback = [
    {
      from: "Manager",
      type: "Strengths",
      comment: "Excellent strategic thinking and ability to drive complex projects to completion.",
    },
    {
      from: "Peer",
      type: "Improvement",
      comment: "Could benefit from more frequent communication during project pivots.",
    },
    {
      from: "Direct Report",
      type: "Strengths",
      comment: "Great mentor and provides clear direction and support.",
    },
  ]

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Performance Review
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Employee Header */}
        <div className="flex items-center gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
          <Avatar className="h-16 w-16">
            <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
            <AvatarFallback>
              {employee.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{employee.name}</h2>
            <p className="text-muted-foreground">
              {employee.role} • {employee.department}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Review Period: {employee.reviewPeriod}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">{employee.overallRating}</span>
            </div>
            <p className="text-sm text-muted-foreground">Overall Rating</p>
          </div>
        </div>

        <Tabs defaultValue="metrics" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
            <TabsTrigger value="goals">Goals & Objectives</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="metrics" className="space-y-4">
            <div className="grid gap-4">
              {metrics.map((metric) => (
                <Card key={metric.category}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{metric.category}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{metric.score}%</Badge>
                        <TrendingUp
                          className={`h-4 w-4 ${
                            metric.trend === "up"
                              ? "text-green-500"
                              : metric.trend === "down"
                                ? "text-red-500"
                                : "text-gray-500"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Current Score</span>
                        <span>{metric.score}%</span>
                      </div>
                      <Progress value={metric.score} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Target: {metric.target}%</span>
                        <span className={metric.score >= metric.target ? "text-green-600" : "text-orange-600"}>
                          {metric.score >= metric.target ? "Target Met" : "Below Target"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-4">
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{goal.goal}</h3>
                      <Badge variant={goal.status === "completed" ? "default" : "secondary"}>
                        {goal.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{goal.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            <div className="space-y-4">
              {feedback.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        <span className="font-medium">{item.from}</span>
                      </div>
                      <Badge variant={item.type === "Strengths" ? "default" : "secondary"}>{item.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">Add Feedback</h3>
                <Textarea placeholder="Enter your feedback..." className="mb-3" />
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Strengths
                    </Button>
                    <Button variant="outline" size="sm">
                      Areas for Improvement
                    </Button>
                  </div>
                  <Button size="sm">Submit Feedback</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
