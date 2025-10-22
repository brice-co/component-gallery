import { FolderOpen, ImageIcon, Video, File, Upload, Grid, List } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MediaLibrary() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <FolderOpen className="h-5 w-5 text-orange-500" />
          Media Library
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Grid className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <List className="h-3 w-3" />
            </Button>
          </div>
          <Button size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-slate-200">
            <ImageIcon className="h-8 w-8 text-slate-400 group-hover:text-slate-500" />
          </div>
          <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-slate-200">
            <Video className="h-8 w-8 text-slate-400 group-hover:text-slate-500" />
          </div>
          <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-slate-200">
            <ImageIcon className="h-8 w-8 text-slate-400 group-hover:text-slate-500" />
          </div>
          <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-slate-200">
            <File className="h-8 w-8 text-slate-400 group-hover:text-slate-500" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              <ImageIcon className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">hero-image.jpg</div>
              <div className="text-xs text-slate-500">1.2 MB • 1920x1080</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
            <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
              <Video className="h-4 w-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">demo-video.mp4</div>
              <div className="text-xs text-slate-500">15.3 MB • 2:34</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
