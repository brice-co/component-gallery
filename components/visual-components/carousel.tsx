"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      id: 1,
      title: "Mountain Adventure",
      description: "Explore breathtaking mountain landscapes and discover hidden trails",
      image: "/mountain-hiking-trail.png",
      color: "from-blue-600 to-purple-600",
    },
    {
      id: 2,
      title: "Ocean Paradise",
      description: "Dive into crystal clear waters and experience marine life",
      image: "/tropical-beach-clear-water.png",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Forest Serenity",
      description: "Find peace among ancient trees and wildlife",
      image: "/backgrounds/forest.png",
      color: "from-green-600 to-emerald-600",
    },
    {
      id: 4,
      title: "Desert Wonders",
      description: "Experience the beauty and mystery of vast desert landscapes",
      image: "/desert-dunes-at-sunset-with-golden-light.png",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "City Lights",
      description: "Discover urban adventures and vibrant nightlife",
      image: "/city-night-skyline.png",
      color: "from-purple-600 to-pink-600",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg border shadow-lg overflow-hidden">
      {/* Main Carousel */}
      <div className="relative aspect-[3/2] overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-20`} />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-lg opacity-90">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Auto-play Control */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white border-0"
          onClick={toggleAutoPlay}
        >
          {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>

        {/* Slide Counter */}
        <div className="absolute top-4 left-4 bg-black/40 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="p-4 bg-gray-50">
        <div className="flex gap-2 justify-center overflow-x-auto">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                currentSlide === index ? "border-blue-500 scale-105" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 pb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-blue-500 w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
