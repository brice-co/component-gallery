import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Wand2, Send, Eye, Sparkles, Target } from "lucide-react"

export function AiEmailEditor() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-blue-600" />
          AI Email Editor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Email Type</label>
            <Select defaultValue="marketing">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="welcome">Welcome</SelectItem>
                <SelectItem value="follow-up">Follow-up</SelectItem>
                <SelectItem value="newsletter">Newsletter</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Target Audience</label>
            <Select defaultValue="customers">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customers">Existing Customers</SelectItem>
                <SelectItem value="prospects">Prospects</SelectItem>
                <SelectItem value="subscribers">Subscribers</SelectItem>
                <SelectItem value="leads">New Leads</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Subject Line</label>
          <div className="flex gap-2">
            <Input
              placeholder="Enter subject or let AI generate..."
              defaultValue="🚀 Boost Your Productivity by 40% This Week"
              className="flex-1"
            />
            <Button variant="outline" size="sm">
              <Wand2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Key Message</label>
          <Textarea
            placeholder="What's the main message you want to convey?"
            className="min-h-[60px]"
            defaultValue="Introduce our new AI productivity suite with special launch pricing"
          />
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              AI-Generated Email
            </h4>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              <Button variant="outline" size="sm">
                <Wand2 className="h-4 w-4" />
                Regenerate
              </Button>
            </div>
          </div>
          <div className="text-sm space-y-3">
            <div>
              <strong>Subject:</strong> 🚀 Boost Your Productivity by 40% This Week
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p>Hi [First Name],</p>
              <p>
                Ready to supercharge your workflow? Our new AI Productivity Suite is here, and early adopters are seeing
                incredible results.
              </p>
              <p>
                ✨ <strong>What you'll get:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Smart task automation</li>
                <li>AI-powered insights</li>
                <li>Team collaboration tools</li>
              </ul>
              <p>
                <strong>Limited time:</strong> 50% off for the first 100 customers.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant="secondary">
              <Target className="h-3 w-3 mr-1" />
              85% open rate predicted
            </Badge>
            <Badge variant="secondary">Marketing tone</Badge>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Send className="h-4 w-4 mr-2" />
            Send Campaign
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
