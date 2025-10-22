import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, BarChart3, PieChart, LineChart } from "lucide-react"

export function Chart() {
  const chartData = [
    { month: "Jan", value: 4000, growth: 12 },
    { month: "Feb", value: 3000, growth: -8 },
    { month: "Mar", value: 5000, growth: 25 },
    { month: "Apr", value: 4500, growth: 15 },
    { month: "May", value: 6000, growth: 33 },
    { month: "Jun", value: 5500, growth: 22 },
  ]

  const pieData = [
    { label: "Desktop", value: 45, color: "bg-blue-500" },
    { label: "Mobile", value: 35, color: "bg-green-500" },
    { label: "Tablet", value: 20, color: "bg-yellow-500" },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Chart Components</h2>
        <p className="text-gray-600">Various chart types and data visualizations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Monthly Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end justify-between h-48 px-2">
                {chartData.map((item, index) => (
                  <div key={item.month} className="flex flex-col items-center">
                    <div
                      className="bg-blue-500 rounded-t w-8 transition-all hover:bg-blue-600"
                      style={{ height: `${(item.value / 6000) * 160}px` }}
                      title={`${item.month}: $${item.value.toLocaleString()}`}
                    />
                    <span className="text-xs text-gray-600 mt-2">{item.month}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total: $28,000</span>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+18.2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Growth Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative h-48 px-2">
                <svg className="w-full h-full" viewBox="0 0 300 160">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line key={i} x1="0" y1={i * 40} x2="300" y2={i * 40} stroke="#e5e7eb" strokeWidth="1" />
                  ))}

                  {/* Area fill */}
                  <path
                    d="M 0 120 L 50 140 L 100 80 L 150 100 L 200 40 L 250 60 L 300 60 L 300 160 L 0 160 Z"
                    fill="url(#gradient)"
                  />

                  {/* Line */}
                  <path
                    d="M 0 120 L 50 140 L 100 80 L 150 100 L 200 40 L 250 60"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />

                  {/* Data points */}
                  {chartData.map((item, index) => (
                    <circle
                      key={index}
                      cx={index * 50}
                      cy={160 - (item.value / 6000) * 120}
                      r="4"
                      fill="#3b82f6"
                      className="hover:r-6 transition-all"
                    />
                  ))}
                </svg>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">6 months data</span>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+24.5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center space-x-8">
              <div className="relative">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#e5e7eb" strokeWidth="16" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="16"
                    strokeDasharray={`${(45 / 100) * 351.86} 351.86`}
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="16"
                    strokeDasharray={`${(35 / 100) * 351.86} 351.86`}
                    strokeDashoffset={`-${(45 / 100) * 351.86}`}
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="16"
                    strokeDasharray={`${(20 / 100) * 351.86} 351.86`}
                    strokeDashoffset={`-${((45 + 35) / 100) * 351.86}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-gray-600">Total</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {pieData.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded ${item.color}`} />
                    <span className="text-sm text-gray-700">{item.label}</span>
                    <Badge variant="secondary">{item.value}%</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Revenue</p>
                    <p className="text-2xl font-bold text-blue-900">$28,000</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+12%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-medium">Users</p>
                    <p className="text-2xl font-bold text-green-900">1,234</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+8%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-yellow-600 font-medium">Orders</p>
                    <p className="text-2xl font-bold text-yellow-900">456</p>
                  </div>
                  <div className="flex items-center gap-1 text-red-600">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm">-3%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 font-medium">Conversion</p>
                    <p className="text-2xl font-bold text-purple-900">3.2%</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+0.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
