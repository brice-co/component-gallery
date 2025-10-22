"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Search, Bell, User, Menu, X, ChevronDown, ShoppingCart, Heart } from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    { name: "Home", href: "#", icon: Home, active: true },
    { name: "Products", href: "#", hasDropdown: true },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Navigation Components</h2>
        <p className="text-gray-600">Various navigation patterns and styles</p>
      </div>

      {/* Header Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>Header Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-900">Logo</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative">
                    <button
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        item.active ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="h-4 w-4 ml-1" />}
                    </button>

                    {item.hasDropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Dropdown Item 1
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Dropdown Item 2
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Dropdown Item 3
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs">3</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4" />
                </Button>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        item.active ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </CardContent>
      </Card>

      {/* Bottom Navigation (Mobile) */}
      <Card>
        <CardHeader>
          <CardTitle>Bottom Navigation (Mobile)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white border-t border-gray-200 px-4 py-2">
            <div className="flex items-center justify-around">
              <button className="flex flex-col items-center py-2 px-3 text-blue-600">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </button>
              <button className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-gray-900">
                <Search className="h-5 w-5" />
                <span className="text-xs mt-1">Search</span>
              </button>
              <button className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-gray-900 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-xs mt-1">Cart</span>
                <Badge className="absolute -top-1 -right-1 h-4 w-4 text-xs">2</Badge>
              </button>
              <button className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-gray-900">
                <Heart className="h-5 w-5" />
                <span className="text-xs mt-1">Favorites</span>
              </button>
              <button className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-gray-900">
                <User className="h-5 w-5" />
                <span className="text-xs mt-1">Profile</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Breadcrumb Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>Breadcrumb Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Home className="h-4 w-4" />
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Products
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Electronics
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900 font-medium">Smartphones</span>
              </li>
            </ol>
          </nav>
        </CardContent>
      </Card>

      {/* Pagination Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>Pagination Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <span className="px-2 text-gray-500">...</span>
              <Button variant="outline" size="sm">
                10
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </nav>
        </CardContent>
      </Card>
    </div>
  )
}
