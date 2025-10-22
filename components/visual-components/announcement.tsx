import { Megaphone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Announcement() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-sm">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Megaphone className="h-5 w-5" />
            <div>
              <h3 className="font-semibold">New Feature Launch!</h3>
              <p className="text-sm opacity-90">AI-powered analytics now available</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-3">
          Experience next-level insights with our new AI analytics dashboard. Get started today!
        </p>
        <Button className="w-full">Learn More</Button>
      </div>
    </div>
  )
}
