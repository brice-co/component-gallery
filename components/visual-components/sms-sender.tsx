"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Users, Clock, CheckCircle } from "lucide-react"

export function SmsSender() {
  const [message, setMessage] = useState("")
  const [recipients, setRecipients] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("")

  const templates = [
    { id: "welcome", name: "Welcome Message", content: "Welcome to our service! We're excited to have you on board." },
    { id: "reminder", name: "Appointment Reminder", content: "Reminder: You have an appointment tomorrow at 2:00 PM." },
    {
      id: "promo",
      name: "Promotional Offer",
      content: "Special offer! Get 20% off your next purchase. Use code SAVE20.",
    },
  ]

  const recentCampaigns = [
    { id: 1, name: "Welcome Series", recipients: 1250, sent: "2 hours ago", status: "delivered" },
    { id: 2, name: "Flash Sale Alert", recipients: 3400, sent: "1 day ago", status: "delivered" },
    { id: 3, name: "Event Reminder", recipients: 890, sent: "3 days ago", status: "delivered" },
  ]

  const characterCount = message.length
  const smsCount = Math.ceil(characterCount / 160) || 1

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compose SMS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Compose SMS</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="recipients">Recipients</Label>
              <Input
                id="recipients"
                value={recipients}
                onChange={(e) => setRecipients(e.target.value)}
                placeholder="Enter phone numbers (comma separated)"
              />
              <p className="text-sm text-gray-600 mt-1">
                {recipients.split(",").filter((r) => r.trim()).length} recipients
              </p>
            </div>

            <div>
              <Label htmlFor="template">Template (Optional)</Label>
              <Select
                value={selectedTemplate}
                onValueChange={(value) => {
                  setSelectedTemplate(value)
                  const template = templates.find((t) => t.id === value)
                  if (template) setMessage(template.content)
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a template" />
                </SelectTrigger>
                <SelectContent>
                  {templates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your SMS message here..."
                rows={4}
                maxLength={1600}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>{characterCount}/1600 characters</span>
                <span>{smsCount} SMS</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button className="flex-1">
                <Send className="w-4 h-4 mr-2" />
                Send Now
              </Button>
              <Button variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Schedule
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Campaign Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Campaign Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">12,540</div>
                <div className="text-sm text-gray-600">Messages Sent</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">98.5%</div>
                <div className="text-sm text-gray-600">Delivery Rate</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Recent Campaigns</h4>
              {recentCampaigns.map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{campaign.name}</p>
                    <p className="text-sm text-gray-600">
                      {campaign.recipients.toLocaleString()} recipients • {campaign.sent}
                    </p>
                  </div>
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>{campaign.status}</span>
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Templates Library */}
      <Card>
        <CardHeader>
          <CardTitle>Message Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {templates.map((template) => (
              <div key={template.id} className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">{template.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{template.content}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedTemplate(template.id)
                    setMessage(template.content)
                  }}
                >
                  Use Template
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
