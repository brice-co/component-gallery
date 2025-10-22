import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Code, Play, Copy, Sparkles, FileCode, GitBranch } from "lucide-react"

export function AiCodeAssistant() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            AI Code Assistant
          </CardTitle>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <Sparkles className="h-3 w-3 mr-1" />
            GPT-4 Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Section */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Describe what you want to build:</label>
          <Textarea
            placeholder="Create a React component for a user profile card with avatar, name, and social links..."
            className="min-h-[80px]"
            defaultValue="Create a React component for a user profile card with avatar, name, and social links"
          />
          <div className="flex gap-2">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Sparkles className="h-4 w-4 mr-1" />
              Generate Code
            </Button>
            <Button size="sm" variant="outline">
              <FileCode className="h-4 w-4 mr-1" />
              Explain Code
            </Button>
            <Button size="sm" variant="outline">
              <GitBranch className="h-4 w-4 mr-1" />
              Refactor
            </Button>
          </div>
        </div>

        {/* Generated Code Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Generated Code:</label>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost">
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
              <Button size="sm" variant="ghost">
                <Play className="h-4 w-4 mr-1" />
                Run
              </Button>
            </div>
          </div>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <div className="text-green-400">// Generated React Component</div>
            <div className="text-blue-400">import</div> <span className="text-yellow-300">React</span>{" "}
            <div className="text-blue-400 inline">from</div> <span className="text-green-300">'react'</span>
            <br />
            <br />
            <div className="text-blue-400">export function</div>{" "}
            <span className="text-yellow-300">UserProfileCard</span>(
            <span className="text-orange-300">{"{ user }"}</span>) {"{"}
            <br />
            <span className="ml-4 text-blue-400">return</span> (
            <br />
            <span className="ml-8 text-purple-300">{'<div className="bg-white rounded-lg shadow-md p-6">'}</span>
            <br />
            <span className="ml-12 text-purple-300">
              {'<img src={user.avatar || "/placeholder.svg"} className="w-16 h-16 rounded-full" />'}
            </span>
            <br />
            <span className="ml-12 text-purple-300">{'<h3 className="text-xl font-semibold">{user.name}</h3>'}</span>
            <br />
            <span className="ml-12 text-purple-300">{'<div className="flex gap-2 mt-4">'}</span>
            <br />
            <span className="ml-16 text-purple-300">{"// Social links here"}</span>
            <br />
            <span className="ml-12 text-purple-300">{"</div>"}</span>
            <br />
            <span className="ml-8 text-purple-300">{"</div>"}</span>
            <br />
            <span className="ml-4">)</span>
            <br />
            {"}"}
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="space-y-2">
          <label className="text-sm font-medium">AI Suggestions:</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-sm font-medium text-blue-900">Performance Tip</div>
              <div className="text-xs text-blue-700 mt-1">
                Consider using React.memo for this component to prevent unnecessary re-renders
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-sm font-medium text-green-900">Accessibility</div>
              <div className="text-xs text-green-700 mt-1">Add alt text to the avatar image for screen readers</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-sm font-medium text-purple-900">Enhancement</div>
              <div className="text-xs text-purple-700 mt-1">Add hover effects and loading states for better UX</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-sm font-medium text-orange-900">Testing</div>
              <div className="text-xs text-orange-700 mt-1">Generated unit tests available - click to view</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex gap-4 text-sm text-slate-600">
            <span>Generated in 2.3s</span>
            <span>•</span>
            <span>98% accuracy</span>
            <span>•</span>
            <span>TypeScript ready</span>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-200">
            Ready to use
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
