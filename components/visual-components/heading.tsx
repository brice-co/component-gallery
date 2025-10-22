import { Type } from "lucide-react"

export function Heading() {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg border">
      <div className="flex items-center gap-2 mb-3">
        <Type className="h-4 w-4 text-slate-500" />
        <span className="text-xs text-slate-500 uppercase tracking-wide">Heading Component</span>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Main Page Title</h1>
      <h2 className="text-xl font-semibold text-slate-800 mb-2">Section Heading</h2>
      <h3 className="text-lg font-medium text-slate-700">Subsection Title</h3>
    </div>
  )
}
