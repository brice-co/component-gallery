import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Calendar, Edit } from "lucide-react"

export function UserProfile() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/professional-headshot.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">John Doe</CardTitle>
              <CardDescription className="text-lg">Senior Product Manager</CardDescription>
              <div className="flex items-center mt-2 space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Joined March 2022
                </div>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-muted-foreground">
            Experienced product manager with a passion for building user-centric solutions. Specialized in SaaS
            platforms and AI-powered tools.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Product Strategy</Badge>
            <Badge variant="secondary">User Research</Badge>
            <Badge variant="secondary">Data Analysis</Badge>
            <Badge variant="secondary">Agile</Badge>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <div className="flex items-center text-muted-foreground">
            <Mail className="h-4 w-4 mr-2" />
            john.doe@company.com
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
