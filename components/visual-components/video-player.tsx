"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState([75])
  const [progress, setProgress] = useState([25])
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden relative group">
      {/* Video Container */}
      <div
        className="relative aspect-video bg-gray-900"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Placeholder Video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/nature-documentary-thumbnail.png" alt="Video thumbnail" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-black"
              onClick={togglePlay}
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
        )}

        {/* Controls Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
        >
          {/* Top Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Maximize className="w-5 h-5" />
            </Button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <Slider value={progress} onValueChange={setProgress} max={100} step={1} className="w-full" />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>

                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <SkipBack className="w-5 h-5" />
                </Button>

                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <SkipForward className="w-5 h-5" />
                </Button>

                <div className="flex items-center gap-2 ml-2">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </Button>
                  <div className="w-20">
                    <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white text-sm">
                <span>
                  {formatTime(progress[0] * 1.2)} / {formatTime(120)}
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-900 mb-1">Nature Documentary: Wildlife in 4K</h3>
        <p className="text-sm text-gray-600 mb-3">Experience the beauty of nature in stunning detail</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>1.2M views • 2 days ago</span>
          <div className="flex items-center gap-4">
            <span>👍 45K</span>
            <span>💬 1.2K</span>
            <span>📤 Share</span>
          </div>
        </div>
      </div>
    </div>
  )
}
