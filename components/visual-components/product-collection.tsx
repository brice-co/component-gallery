import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"

export function ProductCollection() {
  const collections = [
    {
      id: 1,
      title: "Best Sellers",
      description: "Our most popular products this month",
      image: "/best-selling-products.png",
      productCount: 24,
      badge: "Popular",
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Fresh products just added to our catalog",
      image: "/new-products-display.png",
      productCount: 18,
      badge: "New",
    },
    {
      id: 3,
      title: "Electronics",
      description: "Latest tech gadgets and accessories",
      image: "/electronics-gadgets.png",
      productCount: 156,
      badge: null,
    },
    {
      id: 4,
      title: "Summer Sale",
      description: "Up to 50% off selected items",
      image: "/summer-sale-products.png",
      productCount: 89,
      badge: "Sale",
    },
  ]

  const featuredProducts = [
    { id: 1, name: "Wireless Headphones", price: 199, rating: 4.5, image: "/wireless-headphones.png" },
    { id: 2, name: "Smart Watch", price: 299, rating: 4.8, image: "/smartwatch-lifestyle.png" },
    { id: 3, name: "Bluetooth Speaker", price: 79, rating: 4.4, image: "/bluetooth-speaker.png" },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Collection */}
      <Card className="overflow-hidden">
        <div className="relative h-96">
          <img src="/product-collection-hero.png" alt="Featured Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <Badge className="bg-white/20 text-white border-white/30">Featured Collection</Badge>
              <h1 className="text-4xl font-bold">Spring Collection 2024</h1>
              <p className="text-xl">Discover our latest seasonal favorites</p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Collection Grid */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shop by Collection</h2>
          <Button variant="outline">View All Collections</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection) => (
            <Card key={collection.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {collection.badge && (
                  <Badge className="absolute top-4 left-4 bg-black/80 text-white">{collection.badge}</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{collection.title}</h3>
                  <p className="text-gray-600">{collection.description}</p>
                  <p className="text-sm text-gray-500">{collection.productCount} products</p>
                  <Button className="w-full mt-4">
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{product.name}</h3>
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
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
