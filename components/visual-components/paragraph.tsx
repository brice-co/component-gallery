import { AlignLeft } from "lucide-react"

export function Paragraph() {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg border">
      <div className="flex items-center gap-2 mb-3">
        <AlignLeft className="h-4 w-4 text-slate-500" />
        <span className="text-xs text-slate-500 uppercase tracking-wide">Paragraph Component</span>
      </div>
      <p className="text-slate-700 leading-relaxed mb-3">
        This is a sample paragraph component that demonstrates how text content can be displayed with proper typography
        and spacing.
      </p>
      <p className="text-slate-600 text-sm leading-relaxed">
        You can customize the font size, color, line height, and other typography properties to match your design
        system.
      </p>
    </div>
  )
}
