import { Layout, Type, ImageIcon, Video, Plus, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CmsEditor() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Layout className="h-5 w-5 text-green-500" />
          CMS Editor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium">Homepage</h3>
            <p className="text-xs text-slate-500">Last edited 1 hour ago</p>
          </div>
          <Badge className="bg-green-100 text-green-700">Published</Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 bg-slate-50 rounded">
            <Type className="h-4 w-4 text-slate-400" />
            <span className="text-sm flex-1">Hero Section</span>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Settings className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center gap-3 p-2 bg-slate-50 rounded">
            <ImageIcon className="h-4 w-4 text-slate-400" />
            <span className="text-sm flex-1">Feature Gallery</span>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Settings className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center gap-3 p-2 bg-slate-50 rounded">
            <Video className="h-4 w-4 text-slate-400" />
            <span className="text-sm flex-1">Demo Video</span>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Settings className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center gap-3 p-2 bg-slate-50 rounded">
            <Type className="h-4 w-4 text-slate-400" />
            <span className="text-sm flex-1">Testimonials</span>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Settings className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <Plus className="h-4 w-4 mr-2" />
            Add Block
          </Button>
          <Button size="sm" className="flex-1">
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
