import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star } from "lucide-react"

export function LandingPageHero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span>Trusted by 10,000+ users</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build Amazing
          <span className="text-blue-600"> Products</span>
          <br />
          In Record Time
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          The complete platform for modern teams to design, develop, and deploy world-class applications with
          unprecedented speed and reliability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <Button size="lg" className="px-8 py-3 text-lg">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">10k+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
