import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  BarChart3,
  Users,
  Settings,
  FileText,
  Calendar,
  MessageSquare,
  HelpCircle,
  ChevronDown,
} from "lucide-react"

export function SidebarNavigation() {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics", badge: "New" },
    { icon: Users, label: "Team", count: 12 },
    { icon: FileText, label: "Projects" },
    { icon: Calendar, label: "Calendar" },
    { icon: MessageSquare, label: "Messages", count: 3 },
  ]

  return (
    <div className="w-64 bg-white border-r h-screen flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-lg">Acme Corp</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <Button key={index} variant={item.active ? "secondary" : "ghost"} className="w-full justify-start h-10">
              <Icon className="h-4 w-4 mr-3" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto">
                  {item.badge}
                </Badge>
              )}
              {item.count && (
                <Badge variant="outline" className="ml-auto">
                  {item.count}
                </Badge>
              )}
            </Button>
          )
        })}
      </nav>

      <div className="p-4 border-t space-y-2">
        <Button variant="ghost" className="w-full justify-start h-10">
          <HelpCircle className="h-4 w-4 mr-3" />
          Help & Support
        </Button>
        <Button variant="ghost" className="w-full justify-start h-10">
          <Settings className="h-4 w-4 mr-3" />
          Settings
        </Button>

        <div className="pt-4">
          <Button variant="ghost" className="w-full justify-between h-12 p-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-gray-500">john@acme.com</div>
              </div>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
