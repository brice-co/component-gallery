import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, User, Send, Mic, Paperclip } from "lucide-react"

export function AiChatbot() {
  const messages = [
    { id: 1, type: "bot", content: "Hello! I'm your AI assistant. How can I help you today?", time: "10:30 AM" },
    { id: 2, type: "user", content: "Can you help me analyze my sales data?", time: "10:31 AM" },
    {
      id: 3,
      type: "bot",
      content:
        "I'd be happy to help you analyze your sales data! I can help you with trends, forecasting, and insights. Could you share what specific aspects you'd like to focus on?",
      time: "10:31 AM",
    },
    {
      id: 4,
      type: "user",
      content: "I want to understand which products are performing best this quarter",
      time: "10:32 AM",
    },
    {
      id: 5,
      type: "bot",
      content:
        "Great! To analyze your top-performing products this quarter, I'll need access to your sales data. I can help you identify:\n\n• Revenue leaders\n• Units sold comparison\n• Growth trends\n• Seasonal patterns\n\nWould you like me to create a dashboard for this analysis?",
      time: "10:33 AM",
    },
  ]

  return (
    <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Assistant</CardTitle>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Online</span>
              </div>
            </div>
          </div>
          <Badge variant="secondary">GPT-4</Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === "bot" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                {message.type === "bot" ? (
                  <Bot className="h-4 w-4 text-blue-600" />
                ) : (
                  <User className="h-4 w-4 text-gray-600" />
                )}
              </div>
              <div className={`max-w-[80%] ${message.type === "user" ? "text-right" : ""}`}>
                <div
                  className={`rounded-2xl px-4 py-2 ${
                    message.type === "bot" ? "bg-gray-100 text-gray-900" : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 px-2">{message.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Input placeholder="Type your message..." className="pr-20" />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <Button variant="ghost" size="sm">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
