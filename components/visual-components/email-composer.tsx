import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Send, Paperclip, ImageIcon, Smile, Bold, Italic, Link } from "lucide-react"

export function EmailComposer() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Send className="h-5 w-5" />
          <span>Compose Email</span>
        </CardTitle>
        <CardDescription>Create and send professional emails</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="to">To</Label>
            <Input id="to" placeholder="recipient@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cc">CC</Label>
            <Input id="cc" placeholder="cc@example.com" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter email subject" />
        </div>

        <div className="space-y-2">
          <Label>Message</Label>
          <div className="border rounded-lg">
            <div className="flex items-center space-x-2 p-2 border-b bg-gray-50">
              <Button variant="ghost" size="sm">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Link className="h-4 w-4" />
              </Button>
              <div className="w-px h-4 bg-gray-300" />
              <Button variant="ghost" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            <Textarea placeholder="Write your message here..." className="border-0 resize-none focus:ring-0" rows={8} />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Badge variant="secondary">
            <Paperclip className="h-3 w-3 mr-1" />
            document.pdf
          </Badge>
          <Badge variant="secondary">
            <ImageIcon className="h-3 w-3 mr-1" />
            image.jpg
          </Badge>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline">Save Draft</Button>
            <Button variant="outline">Schedule</Button>
          </div>
          <Button>
            <Send className="h-4 w-4 mr-2" />
            Send Email
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
