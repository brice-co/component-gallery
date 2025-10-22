import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Alert() {
  return (
    <div className="space-y-4 p-6 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Alert Component</h3>

      {/* Success Alert */}
      <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-medium text-green-900">Success</h4>
          <p className="text-sm text-green-700 mt-1">Your changes have been saved successfully.</p>
        </div>
        <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-1">
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Error Alert */}
      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-medium text-red-900">Error</h4>
          <p className="text-sm text-red-700 mt-1">There was an error processing your request. Please try again.</p>
        </div>
        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 p-1">
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Warning Alert */}
      <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-medium text-yellow-900">Warning</h4>
          <p className="text-sm text-yellow-700 mt-1">This action cannot be undone. Please proceed with caution.</p>
        </div>
        <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700 p-1">
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Info Alert */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-medium text-blue-900">Information</h4>
          <p className="text-sm text-blue-700 mt-1">New features are now available. Check out the latest updates.</p>
        </div>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-1">
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Simple Alert */}
      <div className="p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700">
        This is a simple alert without an icon or dismiss button.
      </div>
    </div>
  )
}
