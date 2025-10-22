import { Home, Search, Heart, User, Menu, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MobileNavigation() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      {/* Top Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="font-semibold text-gray-900">Page Title</h1>
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Area */}
      <Card>
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Mobile Content</h2>
              <p className="text-gray-600 text-sm">This is where your main content would appear in the mobile app.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Navigation */}
      <Card>
        <CardContent className="p-0">
          <div className="flex items-center justify-around py-3">
            <Button variant="ghost" size="sm" className="flex-col gap-1 h-auto py-2">
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col gap-1 h-auto py-2">
              <Search className="w-5 h-5" />
              <span className="text-xs">Search</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col gap-1 h-auto py-2 text-blue-600">
              <Heart className="w-5 h-5 fill-current" />
              <span className="text-xs">Favorites</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col gap-1 h-auto py-2">
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tab Navigation Alternative */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <Button size="sm" className="flex-1 bg-white shadow-sm">
              Overview
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              Details
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              Reviews
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
