"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Eye, Copy, Star } from "lucide-react"
import type { ComponentItem } from "@/types/catalog"
import { VISUAL_COMPONENTS } from "@/components/visual-components"

interface ComponentCardProps {
  item: ComponentItem
  onPreview: (item: ComponentItem) => void
  onCopy: (item: ComponentItem) => void
  className?: string
  showFeatured?: boolean
  customActions?: React.ReactNode
}

export function ComponentCard({
  item,
  onPreview,
  onCopy,
  className = "",
  showFeatured = true,
  customActions,
}: ComponentCardProps) {
  const Icon = item.icon
  const VisualComponent = VISUAL_COMPONENTS[item.id as keyof typeof VISUAL_COMPONENTS]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`h-full ${className}`}
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
        {VisualComponent && (
          <div className="h-32 overflow-hidden bg-gradient from-gray-50 to-gray-100 border-b">
            <div className="scale-[0.3] origin-top-left w-[333%] h-[333%] pointer-events-none">
              <VisualComponent />
            </div>
          </div>
        )}

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-2 rounded-full px-2 py-1 text-xs font-medium ${item.tagColor}`}>
                <Icon className="h-4 w-4" />
                <span>{item.group}</span>
              </div>
              {showFeatured && item.featured && (
                <Badge variant="secondary" className="text-xs">
                  <Star className="mr-1 h-3 w-3" />
                  Featured
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => onPreview(item)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Preview</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => onCopy(item)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy ID</TooltipContent>
                </Tooltip>
                {customActions}
              </TooltipProvider>
            </div>
          </div>
          <CardTitle className="mt-3 text-lg">{item.title}</CardTitle>
          <CardDescription className="line-clamp-2">{item.customDescription || item.groupDescription}</CardDescription>
        </CardHeader>

        {item.tags && item.tags.length > 0 && (
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1">
              {item.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {item.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{item.tags.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </motion.div>
  )
}
