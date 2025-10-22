import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Search, Plus, Edit, Trash2, Copy, Calendar, Percent, DollarSign } from "lucide-react"

export function CouponManager() {
  const coupons = [
    {
      id: 1,
      code: "SAVE20",
      type: "Percentage",
      value: 20,
      description: "20% off all electronics",
      startDate: "2024-03-01",
      endDate: "2024-03-31",
      used: 45,
      limit: 100,
      status: "Active",
    },
    {
      id: 2,
      code: "FREESHIP",
      type: "Free Shipping",
      value: 0,
      description: "Free shipping on orders over $50",
      startDate: "2024-03-01",
      endDate: "2024-12-31",
      used: 123,
      limit: 500,
      status: "Active",
    },
    {
      id: 3,
      code: "WELCOME10",
      type: "Fixed Amount",
      value: 10,
      description: "$10 off first purchase",
      startDate: "2024-02-01",
      endDate: "2024-02-29",
      used: 87,
      limit: 100,
      status: "Expired",
    },
    {
      id: 4,
      code: "SPRING25",
      type: "Percentage",
      value: 25,
      description: "Spring sale - 25% off",
      startDate: "2024-03-20",
      endDate: "2024-04-20",
      used: 12,
      limit: 200,
      status: "Scheduled",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700"
      case "Expired":
        return "bg-red-100 text-red-700"
      case "Scheduled":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Percentage":
        return <Percent className="h-4 w-4" />
      case "Fixed Amount":
        return <DollarSign className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const activeCoupons = coupons.filter((c) => c.status === "Active").length
  const totalUsage = coupons.reduce((sum, c) => sum + c.used, 0)
  const scheduledCoupons = coupons.filter((c) => c.status === "Scheduled").length

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Coupons</p>
                <p className="text-2xl font-bold">{activeCoupons}</p>
              </div>
              <Percent className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Usage</p>
                <p className="text-2xl font-bold">{totalUsage}</p>
              </div>
              <Copy className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Scheduled</p>
                <p className="text-2xl font-bold">{scheduledCoupons}</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Usage</p>
                <p className="text-2xl font-bold">{Math.round(totalUsage / coupons.length)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coupon Management */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Coupon Management</CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Coupon
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search coupons..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coupons.map((coupon) => (
              <Card key={coupon.id} className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-lg">{getTypeIcon(coupon.type)}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{coupon.code}</h3>
                          <Badge className={getStatusColor(coupon.status)}>{coupon.status}</Badge>
                        </div>
                        <p className="text-gray-600">{coupon.description}</p>
                        <p className="text-sm text-gray-500">
                          Valid: {coupon.startDate} to {coupon.endDate}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {coupon.type === "Percentage"
                          ? `${coupon.value}%`
                          : coupon.type === "Fixed Amount"
                            ? `$${coupon.value}`
                            : "FREE"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {coupon.used} / {coupon.limit} used
                      </div>
                      <Progress value={(coupon.used / coupon.limit) * 100} className="w-24 h-2 mt-1" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
