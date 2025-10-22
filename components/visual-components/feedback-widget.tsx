"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, Send, MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react"
import { useState } from "react"

export function FeedbackWidget() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [email, setEmail] = useState("")

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-blue-600" />
          Share Your Feedback
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-sm font-medium">How was your experience?</Label>
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className="p-1">
                <Star className={`h-6 w-6 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="feedback" className="text-sm font-medium">
            Tell us more
          </Label>
          <Textarea
            id="feedback"
            placeholder="What went well? What could be improved?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mt-2"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium">
            Email (optional)
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <ThumbsDown className="h-4 w-4 mr-2" />
            Not Helpful
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <ThumbsUp className="h-4 w-4 mr-2" />
            Helpful
          </Button>
        </div>

        <Button className="w-full">
          <Send className="h-4 w-4 mr-2" />
          Send Feedback
        </Button>
      </CardContent>
    </Card>
  )
}
