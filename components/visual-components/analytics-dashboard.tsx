"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, Users, DollarSign, Eye, MousePointer, ArrowUp, ArrowDown, Download } from "lucide-react"

export function AnalyticsDashboard() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Page Views",
      value: "12,234",
      change: "-2.4%",
      trend: "down",
      icon: Eye,
      color: "text-purple-600",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8%",
      trend: "up",
      icon: MousePointer,
      color: "text-orange-600",
    },
  ]

  const topPages = [
    { page: "/dashboard", views: 3420, bounce: "32%", time: "4:23" },
    { page: "/products", views: 2890, bounce: "28%", time: "3:45" },
    { page: "/pricing", views: 2340, bounce: "45%", time: "2:12" },
    { page: "/about", views: 1890, bounce: "38%", time: "3:01" },
    { page: "/contact", views: 1560, bounce: "52%", time: "1:45" },
  ]

  const trafficSources = [
    { source: "Organic Search", visitors: 4520, percentage: 45 },
    { source: "Direct", visitors: 2890, percentage: 29 },
    { source: "Social Media", visitors: 1340, percentage: 13 },
    { source: "Email", visitors: 890, percentage: 9 },
    { source: "Referral", visitors: 400, percentage: 4 },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your website performance and user engagement</p>
        </div>
        <div className="flex items-center space-x-3">
          <Select defaultValue="7d">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1d">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const IconComponent = metric.icon
          return (
            <Card key={metric.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold mt-1">{metric.value}</p>
                    <div className="flex items-center mt-2">
                      {metric.trend === "up" ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`text-sm ml-1 ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {metric.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">vs last period</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${metric.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>Revenue Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                <p className="text-gray-600">Interactive chart would appear here</p>
                <p className="text-sm text-gray-500">Showing revenue trends over time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded text-sm flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{page.page}</p>
                      <p className="text-sm text-gray-600">{page.views.toLocaleString()} views</p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-gray-600">Bounce: {page.bounce}</p>
                    <p className="text-gray-600">Time: {page.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{source.source}</span>
                    <span className="text-sm text-gray-600">
                      {source.visitors.toLocaleString()} ({source.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${source.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Real-time Activity</span>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live</span>
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">127</div>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1,234</div>
              <p className="text-sm text-gray-600">Page Views (Last Hour)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">23</div>
              <p className="text-sm text-gray-600">Conversions Today</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
