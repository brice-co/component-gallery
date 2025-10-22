"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Send, Phone, Video, MoreVertical, Paperclip, Smile, Clock, Users } from "lucide-react"
import { useState } from "react"

export function LiveChatSupport() {
  const [message, setMessage] = useState("")

  const activeChats = [
    {
      id: 1,
      customer: "John Doe",
      email: "john@example.com",
      status: "active",
      lastMessage: "I'm having trouble with my payment",
      time: "2 min ago",
      unread: 2,
    },
    {
      id: 2,
      customer: "Sarah Wilson",
      email: "sarah@example.com",
      status: "waiting",
      lastMessage: "Can you help me with setup?",
      time: "5 min ago",
      unread: 1,
    },
    {
      id: 3,
      customer: "Mike Johnson",
      email: "mike@example.com",
      status: "resolved",
      lastMessage: "Thank you for your help!",
      time: "15 min ago",
      unread: 0,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "customer",
      content: "Hi, I'm having trouble processing a payment on my account",
      time: "10:30 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      sender: "agent",
      content:
        "Hello John! I'd be happy to help you with that payment issue. Can you tell me what error message you're seeing?",
      time: "10:31 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      sender: "customer",
      content: "It says 'Payment method declined' but I know my card is valid",
      time: "10:32 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      sender: "agent",
      content: "I see the issue. Let me check your payment settings and help you update your payment method.",
      time: "10:33 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "waiting":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Live Chat Support</h1>
        <div className="flex items-center gap-4">
          <Badge className="bg-green-100 text-green-800">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Online
          </Badge>
          <span className="text-sm text-gray-600">3 active chats</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Chat List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Active Chats</span>
              <Badge variant="secondary">{activeChats.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {activeChats.map((chat) => (
                <div key={chat.id} className="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-l-blue-500">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>
                          {chat.customer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{chat.customer}</p>
                        <p className="text-xs text-gray-500">{chat.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(chat.status)} variant="secondary">
                        {chat.status}
                      </Badge>
                      {chat.unread > 0 && <Badge className="bg-red-500 text-white text-xs">{chat.unread}</Badge>}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 truncate mb-1">{chat.lastMessage}</p>
                  <p className="text-xs text-gray-400">{chat.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === "agent" ? "flex-row-reverse" : ""}`}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={msg.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{msg.sender === "agent" ? "AG" : "JD"}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === "agent" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "agent" ? "text-blue-100" : "text-gray-500"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Smile className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setMessage("")
                  }
                }}
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Chats</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Response</p>
                <p className="text-2xl font-bold">45s</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Resolved Today</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-sm text-gray-600">Satisfaction</p>
              <p className="text-2xl font-bold">96%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
