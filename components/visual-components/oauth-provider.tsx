import { Shield, Github, Chrome, Facebook, Twitter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function OauthProvider() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Shield className="h-5 w-5 text-green-500" />
          OAuth Providers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5" />
              <span className="text-sm font-medium">GitHub</span>
            </div>
            <Badge className="bg-green-100 text-green-700">Active</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Chrome className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Google</span>
            </div>
            <Badge className="bg-green-100 text-green-700">Active</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Facebook className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Facebook</span>
            </div>
            <Badge variant="outline">Setup</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Twitter className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">Twitter</span>
            </div>
            <Badge variant="outline">Setup</Badge>
          </div>
        </div>

        <Button className="w-full" size="sm">
          Add Provider
        </Button>
      </CardContent>
    </Card>
  )
}
