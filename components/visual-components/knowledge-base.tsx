import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BookOpen, Clock, ThumbsUp, Eye, ChevronRight, Star } from "lucide-react"

export function KnowledgeBase() {
  const categories = [
    { name: "Getting Started", count: 12, icon: "🚀" },
    { name: "Account & Billing", count: 8, icon: "💳" },
    { name: "Features", count: 15, icon: "⚡" },
    { name: "Troubleshooting", count: 20, icon: "🔧" },
    { name: "API Documentation", count: 25, icon: "📚" },
    { name: "Integrations", count: 10, icon: "🔗" },
  ]

  const popularArticles = [
    {
      title: "How to set up your first project",
      views: 1250,
      likes: 89,
      category: "Getting Started",
      readTime: "5 min",
    },
    {
      title: "Understanding billing and pricing",
      views: 980,
      likes: 67,
      category: "Account & Billing",
      readTime: "3 min",
    },
    {
      title: "API authentication guide",
      views: 756,
      likes: 45,
      category: "API Documentation",
      readTime: "8 min",
    },
    {
      title: "Troubleshooting common errors",
      views: 654,
      likes: 38,
      category: "Troubleshooting",
      readTime: "6 min",
    },
  ]

  const recentArticles = [
    {
      title: "New dashboard features released",
      date: "2 days ago",
      category: "Features",
      isNew: true,
    },
    {
      title: "Updated security guidelines",
      date: "1 week ago",
      category: "Getting Started",
      isNew: false,
    },
    {
      title: "Third-party integrations guide",
      date: "2 weeks ago",
      category: "Integrations",
      isNew: false,
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Knowledge Base</h1>
        <p className="text-gray-600 mb-6">
          Find answers to your questions and learn how to get the most out of our platform
        </p>

        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
          <Input placeholder="Search for articles, guides, and tutorials..." className="pl-12 py-3 text-lg" />
        </div>
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="browse">Browse Categories</TabsTrigger>
          <TabsTrigger value="popular">Popular Articles</TabsTrigger>
          <TabsTrigger value="recent">Recent Updates</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <Badge variant="secondary">{category.count} articles</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{category.count} articles</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-4">
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <Card key={article.title} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                        <Badge variant="outline">{article.category}</Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {article.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {article.likes} likes
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime} read
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">Popular</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="space-y-4">
            {recentArticles.map((article) => (
              <Card key={article.title} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        {article.isNew && <Badge className="bg-green-100 text-green-800">New</Badge>}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        Updated {article.date}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Can't find what you're looking for?</h3>
            <p className="text-gray-600 mb-4">Our support team is here to help you get the answers you need.</p>
            <Button>Contact Support</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
