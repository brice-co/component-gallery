"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, CheckCircle, Eye } from "lucide-react"

export function AiDocumentProcessor() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-purple-600" />
          <CardTitle>AI Document Processor</CardTitle>
        </div>
        <CardDescription>Extract and analyze document content with AI</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600">Drop documents here or click to upload</p>
          <Button variant="outline" size="sm" className="mt-2 bg-transparent">
            Select Files
          </Button>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Processing Queue</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border rounded">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">contract_2024.pdf</span>
                <Badge variant="secondary" className="text-xs">
                  Completed
                </Badge>
              </div>
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm">invoice_march.pdf</span>
                <Badge variant="outline" className="text-xs">
                  Processing
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground">65%</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Extraction Results</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Text Extracted:</span>
              <span className="ml-2 font-medium">2,847 words</span>
            </div>
            <div>
              <span className="text-muted-foreground">Entities Found:</span>
              <span className="ml-2 font-medium">23 items</span>
            </div>
            <div>
              <span className="text-muted-foreground">Confidence:</span>
              <span className="ml-2 font-medium">94.2%</span>
            </div>
            <div>
              <span className="text-muted-foreground">Language:</span>
              <span className="ml-2 font-medium">English</span>
            </div>
          </div>
        </div>

        <Button className="w-full">Process All Documents</Button>
      </CardContent>
    </Card>
  )
}
