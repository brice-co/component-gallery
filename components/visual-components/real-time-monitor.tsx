"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Users, Globe, Zap, TrendingUp, AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function RealTimeMonitor() {
  const [activeUsers, setActiveUsers] = useState(1247)
  const [pageViews, setPageViews] = useState(3892)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 10) - 5)
      setPageViews((prev) => prev + Math.floor(Math.random() * 20))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Real-Time Monitor
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Live website activity and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="animate-pulse">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold text-blue-700">{activeUsers.toLocaleString()}</div>
            <div className="text-xs text-blue-600">Active Users</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <Globe className="h-6 w-6 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold text-green-700">{pageViews.toLocaleString()}</div>
            <div className="text-xs text-green-600">Page Views</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <Zap className="h-6 w-6 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold text-purple-700">2.3s</div>
            <div className="text-xs text-purple-600">Load Time</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <TrendingUp className="h-6 w-6 mx-auto mb-2 text-orange-600" />
            <div className="text-2xl font-bold text-orange-700">98.5%</div>
            <div className="text-xs text-orange-600">Uptime</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Recent Activity</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>New user from San Francisco</span>
              <span className="text-xs text-gray-500 ml-auto">2s ago</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Purchase completed - $299</span>
              <span className="text-xs text-gray-500 ml-auto">15s ago</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Cart abandoned - $150</span>
              <span className="text-xs text-gray-500 ml-auto">32s ago</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-600">All systems operational</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
