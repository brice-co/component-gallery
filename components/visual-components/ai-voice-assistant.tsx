import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Mic, MicOff, Volume2, Settings } from "lucide-react"

export function AiVoiceAssistant() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mic className="h-5 w-5 text-indigo-600" />
          AI Voice Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center animate-pulse">
                <Mic className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-indigo-200 rounded-full animate-ping"></div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Listening...
          </Badge>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">You said:</div>
          <div className="text-base font-medium mb-3">
            "Schedule a meeting with the marketing team for tomorrow at 2 PM"
          </div>
          <div className="text-sm text-gray-600 mb-2">Assistant response:</div>
          <div className="text-sm text-gray-700">
            I've scheduled a meeting with the marketing team for tomorrow at 2:00 PM. The meeting has been added to your
            calendar and invitations have been sent to all team members.
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Voice Recognition</span>
            <Progress value={92} className="w-24" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Response Accuracy</span>
            <Progress value={96} className="w-24" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <MicOff className="h-4 w-4" />
            Mute
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Volume2 className="h-4 w-4" />
            Speaker
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant="secondary">English (US)</Badge>
            <Badge variant="secondary">Active</Badge>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
