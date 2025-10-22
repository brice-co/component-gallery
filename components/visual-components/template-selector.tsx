"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Grid3X3,
  List,
  Star,
  Download,
  Eye,
  Zap,
  Palette,
  Layout,
  ShoppingCart,
  Users,
  BarChart3,
} from "lucide-react"

export function TemplateSelector() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const templates = [
    {
      id: 1,
      name: "Modern Dashboard",
      category: "dashboard",
      description: "Clean analytics dashboard with charts and metrics",
      thumbnail: "/modern-dashboard.png",
      tags: ["Analytics", "Charts", "Modern"],
      rating: 4.8,
      downloads: 1240,
      premium: false,
    },
    {
      id: 2,
      name: "E-commerce Store",
      category: "ecommerce",
      description: "Complete online store with product catalog and checkout",
      thumbnail: "/ecommerce-store-layout.png",
      tags: ["Shopping", "Products", "Checkout"],
      rating: 4.9,
      downloads: 2100,
      premium: true,
    },
    {
      id: 3,
      name: "SaaS Landing",
      category: "landing",
      description: "Professional landing page for SaaS products",
      thumbnail: "/saas-landing-page.png",
      tags: ["Landing", "SaaS", "Marketing"],
      rating: 4.7,
      downloads: 890,
      premium: false,
    },
    {
      id: 4,
      name: "Team Workspace",
      category: "collaboration",
      description: "Collaborative workspace with project management",
      thumbnail: "/team-workspace-interface.png",
      tags: ["Team", "Projects", "Collaboration"],
      rating: 4.6,
      downloads: 650,
      premium: true,
    },
    {
      id: 5,
      name: "Portfolio Site",
      category: "portfolio",
      description: "Creative portfolio showcase for designers",
      thumbnail: "/creative-portfolio-layout.png",
      tags: ["Portfolio", "Creative", "Showcase"],
      rating: 4.8,
      downloads: 1100,
      premium: false,
    },
    {
      id: 6,
      name: "Admin Panel",
      category: "admin",
      description: "Comprehensive admin panel with user management",
      thumbnail: "/admin-panel-interface.png",
      tags: ["Admin", "Management", "Users"],
      rating: 4.5,
      downloads: 780,
      premium: true,
    },
  ]

  const categories = [
    { id: "all", name: "All Templates", icon: Grid3X3, count: templates.length },
    { id: "dashboard", name: "Dashboard", icon: BarChart3, count: 1 },
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCart, count: 1 },
    { id: "landing", name: "Landing Pages", icon: Layout, count: 1 },
    { id: "collaboration", name: "Team Tools", icon: Users, count: 1 },
    { id: "portfolio", name: "Portfolio", icon: Palette, count: 1 },
    { id: "admin", name: "Admin", icon: Zap, count: 1 },
  ]

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Template Selector</h2>
          <p className="text-gray-600">Choose from professionally designed templates</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Search & Filter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Categories</h4>
                <div className="space-y-1">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-2 rounded text-sm transition-colors ${
                          selectedCategory === category.id ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {category.name}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Templates Grid/List */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-gray-600">
              {filteredTemplates.length} template{filteredTemplates.length !== 1 ? "s" : ""} found
            </p>
            <select className="border rounded px-3 py-1 text-sm">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Most Downloaded</option>
            </select>
          </div>

          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {viewMode === "grid" ? (
                  <>
                    <div className="relative">
                      <img
                        src={template.thumbnail || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-48 object-cover"
                      />
                      {template.premium && <Badge className="absolute top-2 right-2 bg-yellow-500">Premium</Badge>}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg">{template.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {template.rating}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {template.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          <Download className="h-4 w-4 inline mr-1" />
                          {template.downloads}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Preview
                          </Button>
                          <Button size="sm">Use Template</Button>
                        </div>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={template.thumbnail || "/placeholder.svg"}
                        alt={template.name}
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-semibold">{template.name}</h3>
                          <div className="flex items-center gap-2">
                            {template.premium && <Badge className="bg-yellow-500">Premium</Badge>}
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              {template.rating}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{template.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {template.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">{template.downloads} downloads</span>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              Preview
                            </Button>
                            <Button size="sm">Use Template</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
