"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, AlertTriangle, CheckCircle, Eye, Clock } from "lucide-react"

export function AiFraudDetector() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-red-600" />
          <CardTitle>AI Fraud Detector</CardTitle>
        </div>
        <CardDescription>Real-time fraud detection and risk assessment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-green-50 rounded">
            <CheckCircle className="h-5 w-5 mx-auto text-green-600 mb-1" />
            <div className="text-lg font-bold text-green-600">1,247</div>
            <div className="text-xs text-green-700">Legitimate</div>
          </div>
          <div className="p-3 bg-red-50 rounded">
            <AlertTriangle className="h-5 w-5 mx-auto text-red-600 mb-1" />
            <div className="text-lg font-bold text-red-600">23</div>
            <div className="text-xs text-red-700">Flagged</div>
          </div>
          <div className="p-3 bg-yellow-50 rounded">
            <Clock className="h-5 w-5 mx-auto text-yellow-600 mb-1" />
            <div className="text-lg font-bold text-yellow-600">8</div>
            <div className="text-xs text-yellow-700">Pending</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Detection Accuracy</span>
            <span className="text-sm text-muted-foreground">97.3%</span>
          </div>
          <Progress value={97} className="h-2" />
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Recent Alerts</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <div>
                  <div className="text-sm font-medium">Suspicious Transaction</div>
                  <div className="text-xs text-muted-foreground">$2,500 - Multiple locations</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="destructive">High Risk</Badge>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border border-yellow-200 bg-yellow-50 rounded">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-600" />
                <div>
                  <div className="text-sm font-medium">Unusual Pattern</div>
                  <div className="text-xs text-muted-foreground">$450 - New device login</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Medium Risk</Badge>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Risk Factors</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Location Anomaly</span>
              <Badge variant="outline" className="text-xs">
                15%
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Amount Threshold</span>
              <Badge variant="outline" className="text-xs">
                8%
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Time Pattern</span>
              <Badge variant="outline" className="text-xs">
                12%
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Device Fingerprint</span>
              <Badge variant="outline" className="text-xs">
                5%
              </Badge>
            </div>
          </div>
        </div>

        <Button className="w-full">
          <Shield className="h-4 w-4 mr-2" />
          Run Full Scan
        </Button>
      </CardContent>
    </Card>
  )
}
