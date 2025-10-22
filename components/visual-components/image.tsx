import { ImageIcon, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Image() {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg border">
      <div className="flex items-center gap-2 mb-3">
        <ImageIcon className="h-4 w-4 text-slate-500" />
        <span className="text-xs text-slate-500 uppercase tracking-wide">Image Component</span>
      </div>

      <div className="space-y-3">
        <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="h-8 w-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-500">Sample Image</p>
            <p className="text-xs text-slate-400">1920 x 1080</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>image-placeholder.jpg</span>
          <Button size="sm" variant="ghost" className="h-6 px-2">
            <Upload className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
