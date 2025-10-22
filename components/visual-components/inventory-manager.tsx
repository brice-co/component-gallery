import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Edit, Trash2, AlertTriangle, Package, TrendingUp, TrendingDown } from "lucide-react"

export function InventoryManager() {
  const inventory = [
    {
      id: 1,
      name: "Wireless Headphones",
      sku: "WH-001",
      category: "Electronics",
      stock: 45,
      minStock: 10,
      price: 199,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Smart Watch",
      sku: "SW-002",
      category: "Electronics",
      stock: 8,
      minStock: 15,
      price: 299,
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Running Shoes",
      sku: "RS-003",
      category: "Sports",
      stock: 0,
      minStock: 5,
      price: 129,
      status: "Out of Stock",
    },
    {
      id: 4,
      name: "Coffee Maker",
      sku: "CM-004",
      category: "Home",
      stock: 23,
      minStock: 8,
      price: 89,
      status: "In Stock",
    },
    {
      id: 5,
      name: "Laptop Bag",
      sku: "LB-005",
      category: "Accessories",
      stock: 67,
      minStock: 20,
      price: 59,
      status: "In Stock",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-700"
      case "Low Stock":
        return "bg-yellow-100 text-yellow-700"
      case "Out of Stock":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const totalProducts = inventory.length
  const lowStockItems = inventory.filter((item) => item.stock <= item.minStock && item.stock > 0).length
  const outOfStockItems = inventory.filter((item) => item.stock === 0).length
  const totalValue = inventory.reduce((sum, item) => sum + item.stock * item.price, 0)

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold">{totalProducts}</p>
              </div>
              <Package className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold text-yellow-600">{lowStockItems}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold text-red-600">{outOfStockItems}</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Inventory Management</CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
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
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Product</th>
                  <th className="text-left py-3">SKU</th>
                  <th className="text-left py-3">Category</th>
                  <th className="text-right py-3">Stock</th>
                  <th className="text-right py-3">Min Stock</th>
                  <th className="text-right py-3">Price</th>
                  <th className="text-center py-3">Status</th>
                  <th className="text-center py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{item.name}</td>
                    <td className="py-3 text-gray-600">{item.sku}</td>
                    <td className="py-3">{item.category}</td>
                    <td className="py-3 text-right">{item.stock}</td>
                    <td className="py-3 text-right">{item.minStock}</td>
                    <td className="py-3 text-right">${item.price}</td>
                    <td className="py-3 text-center">
                      <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                    </td>
                    <td className="py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
