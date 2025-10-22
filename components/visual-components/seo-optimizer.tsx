import { Search, TrendingUp, CheckCircle, AlertCircle, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function SeoOptimizer() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Search className="h-5 w-5 text-green-500" />
          SEO Optimizer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">SEO Score</span>
            <span className="font-medium text-green-600">87/100</span>
          </div>
          <Progress value={87} className="h-2" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <div className="flex-1">
              <div className="text-sm font-medium">Title Tag</div>
              <div className="text-xs text-slate-500">Optimized (52 characters)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <div className="flex-1">
              <div className="text-sm font-medium">Meta Description</div>
              <div className="text-xs text-slate-500">Good length (148 characters)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
            <AlertCircle className="h-4 w-4 text-orange-600" />
            <div className="flex-1">
              <div className="text-sm font-medium">Image Alt Text</div>
              <div className="text-xs text-slate-500">3 images missing alt text</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-blue-500" />
            <span className="font-medium">Target Keywords</span>
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="text-xs">
              react components
            </Badge>
            <Badge variant="secondary" className="text-xs">
              ui library
            </Badge>
            <Badge variant="secondary" className="text-xs">
              web development
            </Badge>
          </div>
        </div>

        <Button className="w-full" size="sm">
          <TrendingUp className="h-4 w-4 mr-2" />
          Analyze Page
        </Button>
      </CardContent>
    </Card>
  )
}
