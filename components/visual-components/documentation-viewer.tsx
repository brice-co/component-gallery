import { BookOpen, Search, Menu, ChevronRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DocumentationViewer() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <BookOpen className="h-5 w-5 text-blue-500" />
          Documentation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              className="w-full pl-8 pr-3 py-2 text-sm bg-slate-50 border-0 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search docs..."
            />
          </div>
          <Button size="sm" variant="ghost">
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 p-2 bg-blue-50 text-blue-700 rounded text-sm font-medium">
            <ChevronRight className="h-3 w-3" />
            Getting Started
          </div>
          <div className="pl-5 space-y-1">
            <div className="p-2 text-sm text-slate-600 hover:bg-slate-50 rounded cursor-pointer">Installation</div>
            <div className="p-2 text-sm text-slate-600 hover:bg-slate-50 rounded cursor-pointer">Quick Start</div>
          </div>

          <div className="flex items-center gap-2 p-2 text-sm text-slate-700 hover:bg-slate-50 rounded cursor-pointer">
            <ChevronRight className="h-3 w-3" />
            API Reference
          </div>

          <div className="flex items-center gap-2 p-2 text-sm text-slate-700 hover:bg-slate-50 rounded cursor-pointer">
            <ChevronRight className="h-3 w-3" />
            Examples
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded">
          <h4 className="text-sm font-medium mb-2">Quick Start Guide</h4>
          <p className="text-xs text-slate-600 mb-2">Learn how to integrate our API in just a few minutes.</p>
          <Button size="sm" variant="ghost" className="h-6 text-xs">
            View Guide <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
