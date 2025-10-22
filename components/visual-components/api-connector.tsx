import { Code, Database, Globe, Key, Settings, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ApiConnector() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Zap className="h-5 w-5 text-blue-500" />
          API Connector
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">REST API</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Connected
            </Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">GraphQL</span>
            </div>
            <Badge variant="outline">Setup</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Key className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">API Keys</span>
            </div>
            <Button size="sm" variant="ghost">
              <Settings className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="pt-2">
          <Button className="w-full" size="sm">
            <Code className="h-4 w-4 mr-2" />
            Test Connection
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
