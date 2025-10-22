import { Edit3, Save, Eye, ImageIcon, Bold, Italic, List } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function BlogEditor() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Edit3 className="h-5 w-5 text-purple-500" />
          Blog Editor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <input
            className="w-full p-2 text-sm font-medium bg-slate-50 border-0 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your blog title..."
            defaultValue="Getting Started with React"
          />
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="text-xs">
              Draft
            </Badge>
            <span className="text-xs text-slate-500">Last saved 2 min ago</span>
          </div>
        </div>

        <div className="flex items-center gap-1 p-2 bg-slate-50 rounded">
          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
            <Bold className="h-3 w-3" />
          </Button>
          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
            <Italic className="h-3 w-3" />
          </Button>
          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
            <List className="h-3 w-3" />
          </Button>
          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
            <ImageIcon className="h-3 w-3" />
          </Button>
        </div>

        <div className="min-h-[120px] p-3 bg-slate-50 rounded text-sm text-slate-600 leading-relaxed">
          <p>
            React is a powerful JavaScript library for building user interfaces. In this guide, we'll explore the
            fundamentals...
          </p>
          <br />
          <p>Let's start with components and how they work together to create amazing applications.</p>
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button size="sm" className="flex-1">
            <Save className="h-4 w-4 mr-2" />
            Publish
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
