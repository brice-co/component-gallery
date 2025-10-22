"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    { id: 1, src: "/majestic-mountain-vista.png", alt: "Mountain Landscape", title: "Alpine Vista" },
    { id: 2, src: "/ocean-sunset.png", alt: "Ocean Sunset", title: "Golden Hour" },
    { id: 3, src: "/forest-path.png", alt: "Forest Path", title: "Woodland Trail" },
    { id: 4, src: "/vibrant-city-skyline.png", alt: "City Skyline", title: "Urban Lights" },
    { id: 5, src: "/desert-dunes.png", alt: "Desert Dunes", title: "Sand Waves" },
    { id: 6, src: "/tranquil-lake-reflection.png", alt: "Lake Reflection", title: "Mirror Lake" },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg border">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Photo Gallery</h3>
        <p className="text-sm text-gray-600">Click any image to view in full size</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-white text-sm font-medium">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Controls */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 rounded-lg px-4 py-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <span className="text-white text-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
