import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

export function ProductCard() {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="p-0">
        <div className="relative">
          <img src="/modern-wireless-headphones.png" alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
          <Badge className="absolute top-2 left-2" variant="secondary">
            Best Seller
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">Wireless Headphones Pro</CardTitle>
        <CardDescription className="mb-3">Premium noise-canceling headphones with 30-hour battery life</CardDescription>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">(128 reviews)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">$199</span>
            <span className="text-sm text-muted-foreground line-through">$249</span>
          </div>
          <Button size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
