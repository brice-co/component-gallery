export function Textarea() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg border border-gray-200">
      <div className="space-y-6">
        {/* Basic Textarea */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            placeholder="Enter your message here..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
          <p className="text-xs text-gray-500">Maximum 500 characters</p>
        </div>

        {/* Large Textarea */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Description</label>
          <textarea
            placeholder="Provide a detailed description..."
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            defaultValue="This is a sample description that shows how the textarea looks with content. You can edit this text and see how it behaves with longer content."
          />
        </div>

        {/* Textarea with Character Count */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Feedback</label>
          <div className="relative">
            <textarea
              placeholder="Share your feedback..."
              rows={3}
              maxLength={200}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              defaultValue="Great product! Really enjoying the experience so far."
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-400">67/200</div>
          </div>
        </div>
      </div>
    </div>
  )
}
