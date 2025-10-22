"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, Users, ShoppingCart, CreditCard, CheckCircle } from "lucide-react"

export function ConversionFunnel() {
  const funnelData = [
    { stage: "Visitors", count: 10000, icon: Users, color: "bg-blue-500" },
    { stage: "Product Views", count: 3500, icon: ShoppingCart, color: "bg-green-500" },
    { stage: "Add to Cart", count: 1200, icon: ShoppingCart, color: "bg-yellow-500" },
    { stage: "Checkout", count: 800, icon: CreditCard, color: "bg-orange-500" },
    { stage: "Purchase", count: 450, icon: CheckCircle, color: "bg-red-500" },
  ]

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            Conversion Funnel
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Track user journey and conversion rates</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary">4.5% CVR</Badge>
          <Button size="sm" variant="outline">
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {funnelData.map((stage, index) => {
            const width = (stage.count / funnelData[0].count) * 100
            const conversionRate = index > 0 ? ((stage.count / funnelData[index - 1].count) * 100).toFixed(1) : "100.0"
            const Icon = stage.icon

            return (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{stage.stage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{conversionRate}%</span>
                    <span className="text-sm font-semibold">{stage.count.toLocaleString()}</span>
                  </div>
                </div>
                <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                  <div className={`h-full ${stage.color} transition-all duration-500`} style={{ width: `${width}%` }} />
                </div>
                {index < funnelData.length - 1 && (
                  <div className="flex justify-center mt-2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-300"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="pt-4 border-t">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-semibold text-green-600">4.5%</div>
              <div className="text-xs text-gray-600">Overall Conversion</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-semibold text-blue-600">$125</div>
              <div className="text-xs text-gray-600">Avg. Order Value</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
