import { Smartphone, Wifi, Battery, Signal } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MobileAppPreview() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="bg-slate-900 p-2 rounded-3xl shadow-2xl">
        <div className="bg-black rounded-2xl p-1">
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 py-1 text-white text-xs">
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3 h-3" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-white rounded-xl min-h-[400px] p-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">My App</h2>
              <p className="text-gray-600 text-sm">Mobile experience preview</p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Started</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Feature One</p>
                  <p className="text-sm text-gray-600">Description here</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Feature Two</p>
                  <p className="text-sm text-gray-600">Description here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
