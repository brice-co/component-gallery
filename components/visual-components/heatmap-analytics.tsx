"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MousePointer, Eye, Clock } from "lucide-react"

export function HeatmapAnalytics() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <MousePointer className="h-5 w-5" />
            Heatmap Analytics
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Visual user interaction tracking and click analysis</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">Live</Badge>
          <Button size="sm" variant="outline">
            Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm">High Activity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm">Medium Activity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm">Low Activity</span>
          </div>
        </div>

        <div className="relative border rounded-lg p-4 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="absolute top-4 left-4 w-4 h-4 bg-red-500 rounded-full opacity-80"></div>
          <div className="absolute top-8 right-6 w-3 h-3 bg-yellow-500 rounded-full opacity-70"></div>
          <div className="absolute bottom-6 left-8 w-5 h-5 bg-red-600 rounded-full opacity-90"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>

          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">Website Heatmap</h3>
            <p className="text-sm text-gray-600">Click patterns and user interactions</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Eye className="h-6 w-6 mx-auto mb-2 text-blue-600" />
            <div className="text-lg font-semibold">2,847</div>
            <div className="text-xs text-gray-600">Page Views</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <MousePointer className="h-6 w-6 mx-auto mb-2 text-green-600" />
            <div className="text-lg font-semibold">1,293</div>
            <div className="text-xs text-gray-600">Clicks</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Clock className="h-6 w-6 mx-auto mb-2 text-orange-600" />
            <div className="text-lg font-semibold">2:34</div>
            <div className="text-xs text-gray-600">Avg. Time</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
