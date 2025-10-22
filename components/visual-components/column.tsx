export function Column() {
  return (
    <div className="flex gap-6 p-6 bg-gray-50 min-h-[300px]">
      <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Left Column</h3>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="mt-6">
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Content Area</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Right Column</h3>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
        <div className="mt-6 space-y-3">
          <div className="h-16 bg-blue-50 rounded-lg border border-blue-200 flex items-center px-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="h-3 bg-blue-200 rounded w-3/4 mb-1"></div>
              <div className="h-2 bg-blue-100 rounded w-1/2"></div>
            </div>
          </div>
          <div className="h-16 bg-green-50 rounded-lg border border-green-200 flex items-center px-4">
            <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="h-3 bg-green-200 rounded w-2/3 mb-1"></div>
              <div className="h-2 bg-green-100 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
