import { Crown, Star, Zap } from "lucide-react"

export function Badge() {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Badge Component</h3>

      {/* Status Badges */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">Status Badges</h4>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Active
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Inactive
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Draft
          </span>
        </div>
      </div>

      {/* Priority Badges */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">Priority Badges</h4>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
            High
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-500 text-white">
            Medium
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500 text-white">
            Low
          </span>
        </div>
      </div>

      {/* Count Badges */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">Count Badges</h4>
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <span className="text-sm text-gray-700">Messages</span>
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              3
            </span>
          </div>
          <div className="relative">
            <span className="text-sm text-gray-700">Notifications</span>
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
              12
            </span>
          </div>
        </div>
      </div>

      {/* Icon Badges */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">Icon Badges</h4>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            <Crown className="w-3 h-3" />
            Premium
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Star className="w-3 h-3" />
            Featured
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Zap className="w-3 h-3" />
            Fast
          </span>
        </div>
      </div>

      {/* Dot Badges */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">Dot Badges</h4>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Online
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            Away
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Offline
          </span>
        </div>
      </div>
    </div>
  )
}
