import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"

export function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199,
      originalPrice: 249,
      rating: 4.5,
      reviews: 128,
      image: "/wireless-headphones.png",
      sale: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299,
      rating: 4.8,
      reviews: 89,
      image: "/smartwatch-lifestyle.png",
      sale: false,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 129,
      rating: 4.3,
      reviews: 156,
      image: "/running-shoes-on-track.png",
      sale: false,
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 89,
      originalPrice: 119,
      rating: 4.6,
      reviews: 73,
      image: "/modern-coffee-maker.png",
      sale: true,
    },
    {
      id: 5,
      name: "Laptop Bag",
      price: 59,
      rating: 4.2,
      reviews: 94,
      image: "/laptop-bag.png",
      sale: false,
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 79,
      rating: 4.4,
      reviews: 112,
      image: "/bluetooth-speaker.png",
      sale: false,
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {product.sale && <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Sale</Badge>}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
