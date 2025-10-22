"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, Database, FileText, Play, Download } from "lucide-react"

export function AiDataAnalyst() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-blue-600" />
          <CardTitle>AI Data Analyst</CardTitle>
        </div>
        <CardDescription>Automated insights and pattern discovery</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Data Source</label>
            <div className="flex items-center gap-2 p-2 border rounded">
              <Database className="h-4 w-4" />
              <span className="text-sm">Sales Database</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Analysis Type</label>
            <Badge variant="secondary">Trend Analysis</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Analysis Progress</span>
            <span className="text-sm text-muted-foreground">78%</span>
          </div>
          <Progress value={78} className="h-2" />
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Key Insights</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm">Revenue increased 23% this quarter</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
              <FileText className="h-4 w-4 text-blue-600" />
              <span className="text-sm">Customer retention improved by 15%</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm">
            <Play className="h-4 w-4 mr-2" />
            Run Analysis
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
