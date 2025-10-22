import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, Search, Bell, User } from "lucide-react"

export function NavigationHeader() {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-lg">Acme Corp</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 ml-8">
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600">
            Dashboard
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Projects
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Team
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Analytics
          </a>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
