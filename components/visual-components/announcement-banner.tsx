"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Megaphone, Star, Gift, AlertCircle, Info } from "lucide-react"

export function AnnouncementBanner() {
  const [banners, setBanners] = useState([
    {
      id: 1,
      type: "promotion",
      title: "Limited Time Offer!",
      message: "Get 50% off all premium plans. Use code SAVE50 at checkout.",
      icon: Gift,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-white",
      visible: true,
    },
    {
      id: 2,
      type: "update",
      title: "New Feature Available",
      message: "Check out our new dashboard analytics. More insights, better decisions.",
      icon: Star,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      textColor: "text-white",
      visible: true,
    },
    {
      id: 3,
      type: "maintenance",
      title: "Scheduled Maintenance",
      message: "System maintenance on Sunday 2-4 AM EST. Minimal disruption expected.",
      icon: AlertCircle,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      textColor: "text-white",
      visible: true,
    },
  ])

  const dismissBanner = (id: number) => {
    setBanners(banners.map((banner) => (banner.id === id ? { ...banner, visible: false } : banner)))
  }

  const visibleBanners = banners.filter((banner) => banner.visible)

  return (
    <div className="space-y-4">
      {/* Active Banners */}
      {visibleBanners.map((banner) => {
        const IconComponent = banner.icon
        return (
          <Card key={banner.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className={`${banner.color} ${banner.textColor} p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <IconComponent className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{banner.title}</h3>
                      <p className="opacity-90">{banner.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {banner.type === "promotion" && (
                      <Button variant="secondary" size="sm" className="text-gray-900">
                        Shop Now
                      </Button>
                    )}
                    {banner.type === "update" && (
                      <Button variant="secondary" size="sm" className="text-gray-900">
                        Learn More
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dismissBanner(banner.id)}
                      className={`${banner.textColor} hover:bg-white/20`}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}

      {/* Banner Styles Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Simple Info Banner */}
        <Card>
          <CardContent className="p-4 bg-blue-50 border-l-4 border-blue-500">
            <div className="flex items-center space-x-3">
              <Info className="w-5 h-5 text-blue-600" />
              <div>
                <h4 className="font-medium text-blue-900">Information</h4>
                <p className="text-sm text-blue-700">Your account has been successfully updated.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Banner */}
        <Card>
          <CardContent className="p-4 bg-green-50 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-green-900">Success!</h4>
                  <p className="text-sm text-green-700">Payment processed successfully.</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                New
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Compact Announcement */}
        <Card className="md:col-span-2">
          <CardContent className="p-3 bg-gray-900 text-white">
            <div className="flex items-center justify-center space-x-4">
              <Megaphone className="w-5 h-5" />
              <p className="text-center">
                <span className="font-medium">Product Hunt Launch:</span> We're live! Support us with your vote 🚀
              </p>
              <Button variant="secondary" size="sm">
                Vote Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Banner Management Preview */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Banner Management</h3>
          <div className="space-y-3">
            {banners.map((banner) => (
              <div key={banner.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded ${banner.visible ? "bg-green-500" : "bg-gray-300"}`}></div>
                  <div>
                    <p className="font-medium">{banner.title}</p>
                    <p className="text-sm text-gray-600 capitalize">{banner.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={banner.visible ? "default" : "secondary"}>
                    {banner.visible ? "Active" : "Hidden"}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
