import { Star, Quote } from "lucide-react"

export function Testimonial() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <Quote className="h-6 w-6 text-gray-300 mb-3" />
        <blockquote className="text-gray-700 mb-4">
          "This platform has completely transformed how our team collaborates. The AI features are incredible and have
          saved us countless hours."
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
            MJ
          </div>
          <div>
            <p className="font-semibold text-sm">Michael Johnson</p>
            <p className="text-xs text-gray-500">Product Manager at TechCorp</p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Verified Customer</span>
          <span>2 weeks ago</span>
        </div>
      </div>
    </div>
  )
}
