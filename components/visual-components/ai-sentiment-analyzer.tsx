"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Frown, Meh, Smile, TrendingUp } from "lucide-react"

export function AiSentimentAnalyzer() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-pink-600" />
          <CardTitle>AI Sentiment Analyzer</CardTitle>
        </div>
        <CardDescription>Analyze emotional tone and sentiment in text</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Text to Analyze</label>
          <Textarea
            placeholder="Enter text, reviews, or feedback to analyze sentiment..."
            className="min-h-[100px]"
            defaultValue="I absolutely love this product! The quality is amazing and the customer service was fantastic. Highly recommend to everyone!"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 rounded">
            <Smile className="h-6 w-6 mx-auto text-green-600 mb-1" />
            <div className="text-lg font-bold text-green-600">85%</div>
            <div className="text-xs text-green-700">Positive</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded">
            <Meh className="h-6 w-6 mx-auto text-gray-600 mb-1" />
            <div className="text-lg font-bold text-gray-600">10%</div>
            <div className="text-xs text-gray-700">Neutral</div>
          </div>
          <div className="text-center p-3 bg-red-50 rounded">
            <Frown className="h-6 w-6 mx-auto text-red-600 mb-1" />
            <div className="text-lg font-bold text-red-600">5%</div>
            <div className="text-xs text-red-700">Negative</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Key Emotions Detected</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Joy</span>
              <div className="flex items-center gap-2">
                <Progress value={78} className="w-20 h-2" />
                <span className="text-sm text-muted-foreground">78%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Trust</span>
              <div className="flex items-center gap-2">
                <Progress value={65} className="w-20 h-2" />
                <span className="text-sm text-muted-foreground">65%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Anticipation</span>
              <div className="flex items-center gap-2">
                <Progress value={42} className="w-20 h-2" />
                <span className="text-sm text-muted-foreground">42%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary">High Confidence</Badge>
          <Badge variant="outline">English</Badge>
          <Badge variant="outline">Consumer Review</Badge>
        </div>

        <Button className="w-full">
          <TrendingUp className="h-4 w-4 mr-2" />
          Analyze Sentiment
        </Button>
      </CardContent>
    </Card>
  )
}
