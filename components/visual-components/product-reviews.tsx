import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"

export function ProductReviews() {
  const reviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      avatar: "/diverse-woman-avatar.png",
      rating: 5,
      date: "March 8, 2024",
      title: "Excellent quality and fast shipping!",
      content:
        "I'm really impressed with this product. The quality is outstanding and it arrived much faster than expected. Highly recommend!",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      user: "Mike Chen",
      avatar: "/man-avatar.png",
      rating: 4,
      date: "March 5, 2024",
      title: "Good value for money",
      content:
        "Solid product overall. Does exactly what it's supposed to do. Only minor complaint is the packaging could be better.",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      user: "Emily Davis",
      avatar: "/woman-avatar-2.png",
      rating: 5,
      date: "March 2, 2024",
      title: "Perfect for my needs",
      content:
        "This product exceeded my expectations. Great build quality and the customer service was fantastic when I had questions.",
      helpful: 15,
      verified: false,
    },
  ]

  const ratingDistribution = [
    { stars: 5, count: 45, percentage: 60 },
    { stars: 4, count: 20, percentage: 27 },
    { stars: 3, count: 7, percentage: 9 },
    { stars: 2, count: 2, percentage: 3 },
    { stars: 1, count: 1, percentage: 1 },
  ]

  const averageRating = 4.4
  const totalReviews = 75

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Rating Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">{totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-2">
                  <span className="text-sm w-8">{rating.stars}★</span>
                  <Progress value={rating.percentage} className="flex-1 h-2" />
                  <span className="text-sm text-gray-600 w-8">{rating.count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Write Review Button */}
      <div className="flex justify-center">
        <Button className="w-full md:w-auto">
          <MessageSquare className="h-4 w-4 mr-2" />
          Write a Review
        </Button>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* Review Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {review.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{review.user}</p>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Content */}
                <div>
                  <h4 className="font-semibold mb-2">{review.title}</h4>
                  <p className="text-gray-700">{review.content}</p>
                </div>

                {/* Review Actions */}
                <div className="flex items-center gap-4 pt-2">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    Not Helpful
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">Load More Reviews</Button>
      </div>
    </div>
  )
}
