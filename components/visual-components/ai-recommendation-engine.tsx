"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Target, Users, TrendingUp, Settings } from "lucide-react"

export function AiRecommendationEngine() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-orange-600" />
          <CardTitle>AI Recommendation Engine</CardTitle>
        </div>
        <CardDescription>Personalized recommendations powered by machine learning</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-muted-foreground">Premium User</div>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-blue-50 rounded">
            <Users className="h-5 w-5 mx-auto text-blue-600 mb-1" />
            <div className="text-lg font-bold">2.4K</div>
            <div className="text-xs text-muted-foreground">Similar Users</div>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <TrendingUp className="h-5 w-5 mx-auto text-green-600 mb-1" />
            <div className="text-lg font-bold">94%</div>
            <div className="text-xs text-muted-foreground">Accuracy</div>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <Star className="h-5 w-5 mx-auto text-purple-600 mb-1" />
            <div className="text-lg font-bold">4.8</div>
            <div className="text-xs text-muted-foreground">Avg Rating</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Recommended for You</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-sm font-medium">📱</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Premium Mobile App</div>
                  <div className="text-xs text-muted-foreground">Based on your usage patterns</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">98% match</Badge>
                <Button size="sm">View</Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                  <span className="text-sm font-medium">📊</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Analytics Dashboard</div>
                  <div className="text-xs text-muted-foreground">Users like you also viewed</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">85% match</Badge>
                <Button size="sm">View</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1">Apply Recommendations</Button>
          <Button variant="outline">Customize</Button>
        </div>
      </CardContent>
    </Card>
  )
}
