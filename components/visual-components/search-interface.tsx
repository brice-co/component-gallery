import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, SortAsc, Clock } from "lucide-react"

export function SearchInterface() {
  const recentSearches = ["user dashboard", "payment integration", "auth components", "data tables"]
  const searchResults = [
    { title: "User Dashboard Component", type: "Component", category: "Layout", relevance: 95 },
    { title: "Authentication Login", type: "Component", category: "Auth", relevance: 88 },
    { title: "Payment Checkout Form", type: "Component", category: "Payments", relevance: 82 },
    { title: "Data Table with Filters", type: "Component", category: "Data", relevance: 76 },
  ]

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Advanced Search</CardTitle>
        <CardDescription>Find components, templates, and resources</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search for components, templates, or features..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-1" />
            Filters
          </Button>
          <Button variant="outline">
            <SortAsc className="h-4 w-4 mr-1" />
            Sort
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              Recent Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-gray-200">
                  {search}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Search Results</h3>
            <div className="space-y-3">
              {searchResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium">{result.title}</h4>
                      <Badge variant="outline">{result.type}</Badge>
                      <Badge variant="secondary">{result.category}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Relevance: {result.relevance}%</span>
                      <div className="w-20 bg-gray-200 rounded-full h-1">
                        <div className="bg-blue-600 h-1 rounded-full" style={{ width: `${result.relevance}%` }} />
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
