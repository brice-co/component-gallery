import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react"

export function OrderTracking() {
  const order = {
    id: "ORD-2024-001",
    status: "In Transit",
    estimatedDelivery: "March 15, 2024",
    trackingNumber: "1Z999AA1234567890",
    items: [
      { name: "Wireless Headphones", quantity: 1, price: 199 },
      { name: "Smart Watch", quantity: 1, price: 299 },
    ],
  }

  const trackingSteps = [
    { status: "Order Placed", date: "March 10, 2024", time: "2:30 PM", completed: true, icon: CheckCircle },
    { status: "Processing", date: "March 11, 2024", time: "9:15 AM", completed: true, icon: Package },
    { status: "Shipped", date: "March 12, 2024", time: "11:45 AM", completed: true, icon: Truck },
    { status: "In Transit", date: "March 13, 2024", time: "8:20 AM", completed: true, icon: MapPin },
    { status: "Out for Delivery", date: "March 15, 2024", time: "Expected", completed: false, icon: Truck },
    { status: "Delivered", date: "March 15, 2024", time: "Expected", completed: false, icon: CheckCircle },
  ]

  const progress = (trackingSteps.filter((step) => step.completed).length / trackingSteps.length) * 100

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Order Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Order {order.id}</CardTitle>
              <p className="text-gray-600">Tracking: {order.trackingNumber}</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              {order.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="font-semibold">{order.estimatedDelivery}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="font-semibold">{order.items.length} items</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="font-semibold">${order.items.reduce((sum, item) => sum + item.price, 0)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Delivery Progress</h3>
              <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Tracking Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Tracking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trackingSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-full ${step.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className={`font-medium ${step.completed ? "text-gray-900" : "text-gray-500"}`}>
                          {step.status}
                        </p>
                        <p className="text-sm text-gray-600">
                          {step.date} at {step.time}
                        </p>
                      </div>
                      {step.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                      {!step.completed && index === trackingSteps.findIndex((s) => !s.completed) && (
                        <Clock className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold">${item.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full bg-transparent">
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
