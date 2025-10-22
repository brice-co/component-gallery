import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wand2, FileText, Copy, RefreshCw, Sparkles } from "lucide-react"

export function AiContentCreator() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-purple-600" />
          AI Content Creator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Content Type</label>
            <Select defaultValue="blog-post">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blog-post">Blog Post</SelectItem>
                <SelectItem value="social-media">Social Media</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="product-desc">Product Description</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Tone</label>
            <Select defaultValue="professional">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="persuasive">Persuasive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Topic/Keywords</label>
          <Textarea
            placeholder="Enter your topic or keywords..."
            className="min-h-[80px]"
            defaultValue="AI-powered productivity tools for modern teams"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              Generated Content
            </h4>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-3">
              <strong>Revolutionize Your Team's Productivity with AI-Powered Tools</strong>
            </p>
            <p>
              In today's fast-paced business environment, teams are constantly seeking ways to streamline workflows and
              boost efficiency. AI-powered productivity tools have emerged as game-changers, offering intelligent
              automation and insights that transform how modern teams collaborate and deliver results.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant="secondary">
              <FileText className="h-3 w-3 mr-1" />
              247 words
            </Badge>
            <Badge variant="secondary">Professional tone</Badge>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">Generate More Content</Button>
        </div>
      </CardContent>
    </Card>
  )
}
