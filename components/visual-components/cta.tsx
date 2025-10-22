import { Zap, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-sm">
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-t-lg text-center">
        <Zap className="h-8 w-8 mx-auto mb-3" />
        <h3 className="font-bold text-xl mb-2">Ready to Get Started?</h3>
        <p className="text-sm opacity-90">Join thousands of teams already using our platform</p>
      </div>
      <div className="p-6">
        <div className="space-y-2 mb-4">
          {["Free 14-day trial", "No credit card required", "Cancel anytime"].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full mb-2">
          Start Free Trial <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          Schedule Demo
        </Button>
      </div>
    </div>
  )
}
