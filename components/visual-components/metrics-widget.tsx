"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Users,
  DollarSign,
  ShoppingCart,
  Eye,
  Clock,
  Target,
  Zap,
} from "lucide-react"

export function MetricsWidget() {
  const primaryMetrics = [
    {
      title: "Revenue",
      value: "$12,426",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "bg-green-500",
      period: "This month",
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "bg-blue-500",
      period: "This week",
    },
    {
      title: "Visitors",
      value: "8,549",
      change: "-2.4%",
      trend: "down",
      icon: Users,
      color: "bg-purple-500",
      period: "Today",
    },
    {
      title: "Conversion",
      value: "3.24%",
      change: "+0.8%",
      trend: "up",
      icon: Target,
      color: "bg-orange-500",
      period: "This week",
    },
  ]

  const detailedMetrics = [
    { label: "Page Views", value: "45,231", icon: Eye, trend: "+15.3%" },
    { label: "Avg. Session", value: "4:32", icon: Clock, trend: "+2.1%" },
    { label: "Bounce Rate", value: "32.4%", icon: Activity, trend: "-1.8%" },
    { label: "Load Speed", value: "1.2s", icon: Zap, trend: "-0.3s" },
  ]

  const performanceData = [
    { metric: "Sales", current: 85, target: 100, color: "bg-green-500" },
    { metric: "Traffic", current: 72, target: 100, color: "bg-blue-500" },
    { metric: "Engagement", current: 91, target: 100, color: "bg-purple-500" },
    { metric: "Retention", current: 68, target: 100, color: "bg-orange-500" },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {primaryMetrics.map((metric) => {
          const IconComponent = metric.icon
          return (
            <Card key={metric.title} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold mb-2">{metric.value}</p>
                    <div className="flex items-center space-x-2">
                      {metric.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span
                        className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{metric.period}</p>
                  </div>
                  <div className={`p-3 rounded-full ${metric.color} text-white`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 h-1 ${metric.color} w-full`}></div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Detailed Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {detailedMetrics.map((metric) => {
                const IconComponent = metric.icon
                return (
                  <div key={metric.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded-lg">
                        <IconComponent className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">{metric.label}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-green-600">
                      {metric.trend}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Progress Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {performanceData.map((item) => (
                <div key={item.metric} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.metric}</span>
                    <span className="text-sm text-gray-600">{item.current}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.current}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0%</span>
                    <span>Target: {item.target}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mini Widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">24</div>
            <p className="text-sm text-gray-600">New Customers</p>
            <Badge variant="secondary" className="mt-2">
              +12%
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">$1,234</div>
            <p className="text-sm text-gray-600">Daily Revenue</p>
            <Badge variant="secondary" className="mt-2">
              +8%
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">156</div>
            <p className="text-sm text-gray-600">Active Sessions</p>
            <Badge variant="secondary" className="mt-2">
              Live
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">4.8</div>
            <p className="text-sm text-gray-600">Avg Rating</p>
            <Badge variant="secondary" className="mt-2">
              +0.2
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Quick Actions</h3>
              <p className="text-sm text-gray-600">Manage your metrics and reports</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">View Report</Button>
              <Button>Export Data</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
