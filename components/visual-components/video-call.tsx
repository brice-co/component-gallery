"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, VideoOff, Mic, MicOff, PhoneOff, Users, MessageSquare, Settings, Monitor } from "lucide-react"

export function VideoCall() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isCallActive, setIsCallActive] = useState(true)

  const participants = [
    { id: 1, name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", isHost: true },
    { id: 2, name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40", isHost: false },
    { id: 3, name: "Mike Johnson", avatar: "/placeholder.svg?height=40&width=40", isHost: false },
    { id: 4, name: "Sarah Wilson", avatar: "/placeholder.svg?height=40&width=40", isHost: false },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      {/* Main Video Area */}
      <Card className="relative">
        <CardContent className="p-0">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
            {/* Main Speaker Video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback className="text-4xl">JD</AvatarFallback>
              </Avatar>
            </div>

            {/* Meeting Info Overlay */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Live • 45:23</span>
              </div>
            </div>

            {/* Participant Grid */}
            <div className="absolute top-4 right-4 grid grid-cols-2 gap-2">
              {participants.slice(1).map((participant) => (
                <div key={participant.id} className="relative">
                  <div className="w-24 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs">
                        {participant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute bottom-1 left-1 text-white text-xs bg-black/50 px-1 rounded">
                    {participant.name.split(" ")[0]}
                  </div>
                </div>
              ))}
            </div>

            {/* Controls Overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-3 bg-black/70 px-6 py-3 rounded-full">
                <Button
                  variant={isAudioOn ? "secondary" : "destructive"}
                  size="sm"
                  className="rounded-full w-12 h-12"
                  onClick={() => setIsAudioOn(!isAudioOn)}
                >
                  {isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                </Button>

                <Button
                  variant={isVideoOn ? "secondary" : "destructive"}
                  size="sm"
                  className="rounded-full w-12 h-12"
                  onClick={() => setIsVideoOn(!isVideoOn)}
                >
                  {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </Button>

                <Button variant="secondary" size="sm" className="rounded-full w-12 h-12">
                  <Monitor className="w-5 h-5" />
                </Button>

                <Button variant="secondary" size="sm" className="rounded-full w-12 h-12">
                  <MessageSquare className="w-5 h-5" />
                </Button>

                <Button variant="secondary" size="sm" className="rounded-full w-12 h-12">
                  <Settings className="w-5 h-5" />
                </Button>

                <Button
                  variant="destructive"
                  size="sm"
                  className="rounded-full w-12 h-12"
                  onClick={() => setIsCallActive(!isCallActive)}
                >
                  <PhoneOff className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Participants Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Participants ({participants.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {participants.map((participant) => (
                <div key={participant.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {participant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{participant.name}</p>
                      {participant.isHost && <p className="text-sm text-blue-600">Host</p>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meeting Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Meeting ID</p>
              <p className="font-mono text-sm">123-456-789</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-medium">45:23</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Quality</p>
              <p className="font-medium text-green-600">HD</p>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Invite Others
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
