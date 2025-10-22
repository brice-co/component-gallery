import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogCard() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-sm overflow-hidden">
      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 h-48 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">📝</div>
          <p className="text-sm">Blog Image</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>Dec 15, 2024</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>Sarah Chen</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2">10 Tips for Better Team Collaboration</h3>
        <p className="text-sm text-gray-600 mb-3">
          Discover proven strategies to enhance productivity and communication within your team...
        </p>
        <Button variant="outline" className="w-full bg-transparent">
          Read More <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
