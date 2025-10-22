import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Search, Filter } from "lucide-react"

export function TeamDirectory() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      department: "Product",
      email: "sarah.j@company.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      avatar: "/professional-woman-diverse.png",
      status: "online",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior Developer",
      department: "Engineering",
      email: "michael.c@company.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      avatar: "/professional-man.png",
      status: "away",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      department: "Design",
      email: "emily.r@company.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      avatar: "/professional-woman-designer.png",
      status: "online",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Lead",
      department: "Marketing",
      email: "david.k@company.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      avatar: "/professional-man-marketing.png",
      status: "offline",
    },
  ]

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Team Directory
          <Badge variant="secondary">24 Members</Badge>
        </CardTitle>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search team members..." className="pl-9" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
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
                      member.status === "online"
                        ? "bg-green-500"
                        : member.status === "away"
                          ? "bg-yellow-500"
                          : "bg-gray-400"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {member.department}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">{member.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span className="hidden md:inline">{member.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span className="hidden lg:inline">{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
