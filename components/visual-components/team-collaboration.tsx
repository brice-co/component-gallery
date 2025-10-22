import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, FileText, Calendar, Users, Clock } from "lucide-react"

export function TeamCollaboration() {
  const projects = [
    {
      name: "Website Redesign",
      progress: 75,
      members: 5,
      deadline: "Dec 15",
      status: "on-track",
      messages: 23,
      files: 12,
    },
    {
      name: "Mobile App",
      progress: 45,
      members: 8,
      deadline: "Jan 30",
      status: "at-risk",
      messages: 45,
      files: 28,
    },
    {
      name: "Marketing Campaign",
      progress: 90,
      members: 4,
      deadline: "Nov 28",
      status: "ahead",
      messages: 15,
      files: 8,
    },
  ]

  const recentActivity = [
    {
      user: "Sarah Johnson",
      action: "uploaded design mockups",
      project: "Website Redesign",
      time: "2 hours ago",
      avatar: "/professional-woman-diverse.png",
    },
    {
      user: "Michael Chen",
      action: "completed code review",
      project: "Mobile App",
      time: "4 hours ago",
      avatar: "/professional-man.png",
    },
    {
      user: "Emily Rodriguez",
      action: "added new comment",
      project: "Website Redesign",
      time: "6 hours ago",
      avatar: "/professional-woman-designer.png",
    },
  ]

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      status: "online",
      avatar: "/professional-woman-diverse.png",
      activeProjects: 3,
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      status: "away",
      avatar: "/professional-man.png",
      activeProjects: 2,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      status: "online",
      avatar: "/professional-woman-designer.png",
      activeProjects: 4,
    },
  ]

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Team Collaboration Hub
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            <div className="grid gap-4">
              {projects.map((project) => (
                <Card key={project.name}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{project.name}</h3>
                      <Badge
                        variant={
                          project.status === "on-track"
                            ? "default"
                            : project.status === "at-risk"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {project.status === "on-track"
                          ? "On Track"
                          : project.status === "at-risk"
                            ? "At Risk"
                            : "Ahead"}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} />
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {project.members} members
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {project.messages} messages
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {project.files} files
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Due {project.deadline}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                    <AvatarFallback>
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action} in{" "}
                      <span className="font-medium">{activity.project}</span>
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <div className="grid gap-4">
              {teamMembers.map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${
                              member.status === "online" ? "bg-green-500" : "bg-yellow-500"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{member.activeProjects} active projects</p>
                        <Badge variant="outline" className="mt-1">
                          {member.status}
                        </Badge>
                      </div>
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
