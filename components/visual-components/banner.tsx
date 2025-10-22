import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Banner() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-sm overflow-hidden">
      <div className="relative">
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 h-32"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
            <span className="text-xs ml-1">4.9/5</span>
          </div>
          <h3 className="font-bold text-lg">Summer Sale</h3>
          <p className="text-sm opacity-90">Up to 50% off all plans</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-3">
          Limited time offer - upgrade your workspace with premium features at unbeatable prices.
        </p>
        <Button className="w-full">
          Shop Now <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
