import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, PieChart, LineChart, TrendingUp, Download, Settings } from "lucide-react"

export function DataVisualization() {
  const charts = [
    { type: "Bar Chart", data: "Revenue by Month", trend: "+12.5%", color: "bg-blue-500" },
    { type: "Line Chart", data: "User Growth", trend: "+8.2%", color: "bg-green-500" },
    { type: "Pie Chart", data: "Traffic Sources", trend: "-2.1%", color: "bg-purple-500" },
    { type: "Area Chart", data: "Conversion Rate", trend: "+15.3%", color: "bg-orange-500" },
  ]

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5" />
          <span>Data Visualization Dashboard</span>
        </CardTitle>
        <CardDescription>Interactive charts and analytics</CardDescription>

        <div className="flex items-center space-x-2 pt-4">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Configure
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {charts.map((chart, index) => (
            <Card key={index} className="border-2 hover:border-gray-300 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {chart.type === "Bar Chart" && <BarChart3 className="h-4 w-4" />}
                    {chart.type === "Line Chart" && <LineChart className="h-4 w-4" />}
                    {chart.type === "Pie Chart" && <PieChart className="h-4 w-4" />}
                    {chart.type === "Area Chart" && <TrendingUp className="h-4 w-4" />}
                    <span className="font-medium">{chart.type}</span>
                  </div>
                  <Badge variant={chart.trend.startsWith("+") ? "default" : "destructive"}>{chart.trend}</Badge>
                </div>
                <p className="text-sm text-gray-600">{chart.data}</p>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className={`absolute inset-0 ${chart.color} opacity-10`} />
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${chart.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}
                    >
                      {chart.type === "Bar Chart" && <BarChart3 className="h-8 w-8 text-white" />}
                      {chart.type === "Line Chart" && <LineChart className="h-8 w-8 text-white" />}
                      {chart.type === "Pie Chart" && <PieChart className="h-8 w-8 text-white" />}
                      {chart.type === "Area Chart" && <TrendingUp className="h-8 w-8 text-white" />}
                    </div>
                    <p className="text-xs text-gray-500">Interactive Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
