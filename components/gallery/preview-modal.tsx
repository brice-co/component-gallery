"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, X } from "lucide-react"
import type { ComponentItem } from "@/types/catalog"
import { VISUAL_COMPONENTS } from "@/components/visual-components"

interface PreviewModalProps {
  item: ComponentItem | null
  isOpen: boolean
  onClose: () => void
  onCopy: (item: ComponentItem) => void
}

export function PreviewModal({ item, isOpen, onClose, onCopy }: PreviewModalProps) {
  if (!item) return null

  const VisualComponent = VISUAL_COMPONENTS[item.id as keyof typeof VISUAL_COMPONENTS]
  const Icon = item.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${item.tagColor}`}>
              <Icon className="h-4 w-4" />
              <span>{item.group}</span>
            </div>
            <DialogTitle className="text-xl">{item.title}</DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => onCopy(item)} className="gap-2">
              <Copy className="h-4 w-4" />
              Copy ID
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Component ID: <code className="bg-muted px-2 py-1 rounded text-xs">{item.id}</code>
            </p>
            {item.featured && <Badge variant="secondary">Featured</Badge>}
          </div>

          {/* Visual Preview */}
          <div className="border rounded-lg overflow-hidden bg-white">
            {VisualComponent ? (
              <div className="p-6">
                <VisualComponent />
              </div>
            ) : (
              <div className="p-12 text-center text-muted-foreground">
                <Icon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Visual preview not available</p>
                <p className="text-sm">Component ID: {item.id}</p>
              </div>
            )}
          </div>

          {/* Description and Tags */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{item.customDescription || item.groupDescription}</p>

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
