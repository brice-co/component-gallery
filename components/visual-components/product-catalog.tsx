import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Grid, List, Star } from "lucide-react"

export function ProductCatalog() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199,
      rating: 4.5,
      category: "Electronics",
      image: "/wireless-headphones.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299,
      rating: 4.8,
      category: "Electronics",
      image: "/smartwatch-lifestyle.png",
    },
    { id: 3, name: "Running Shoes", price: 129, rating: 4.3, category: "Sports", image: "/running-shoes-on-track.png" },
    { id: 4, name: "Coffee Maker", price: 89, rating: 4.6, category: "Home", image: "/modern-coffee-maker.png" },
    { id: 5, name: "Laptop Bag", price: 59, rating: 4.2, category: "Accessories", image: "/laptop-bag.png" },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 79,
      rating: 4.4,
      category: "Electronics",
      image: "/bluetooth-speaker.png",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search products..." className="pl-10" />
        </div>
        <div className="flex gap-2 items-center">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <div className="flex border rounded-md">
            <Button variant="ghost" size="icon" className="rounded-r-none">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-l-none">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
                <CardTitle className="text-lg">{product.name}</CardTitle>
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
                  <span className="text-2xl font-bold">${product.price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button size="sm">2</Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
