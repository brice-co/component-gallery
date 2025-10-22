import { ListIcon, CheckCircle } from "lucide-react"

export function List() {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg border">
      <div className="flex items-center gap-2 mb-3">
        <ListIcon className="h-4 w-4 text-slate-500" />
        <span className="text-xs text-slate-500 uppercase tracking-wide">List Component</span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-slate-900 mb-2">Unordered List</h4>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              First list item
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              Second list item
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              Third list item
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-900 mb-2">Checklist</h4>
          <ul className="space-y-1 text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Completed task
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Another completed task
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-300 rounded"></div>
              Pending task
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
