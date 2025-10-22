"use client"

import type React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LayoutGrid } from "lucide-react"
import type { GroupMeta } from "@/types/catalog"

interface GalleryTabsProps {
  groups: string[]
  groupMeta: Record<string, GroupMeta>
  activeGroup: string
  onGroupChange: (group: string) => void
  children: React.ReactNode
}

export function GalleryTabs({ groups, groupMeta, activeGroup, onGroupChange, children }: GalleryTabsProps) {
  return (
    <Tabs value={activeGroup} onValueChange={onGroupChange} className="w-full">
      <TabsList className="mb-6 grid w-full grid-cols-2 gap-2 overflow-x-auto rounded-2xl bg-white p-1 shadow-sm md:grid-cols-4 lg:grid-cols-6">
        {groups.map((group) => {
          const meta = groupMeta[group] ?? groupMeta["Layout"]
          const Icon = meta?.icon || LayoutGrid
          return (
            <TabsTrigger
              key={group}
              value={group}
              className="flex items-center gap-2 rounded-xl border border-transparent data-[state=active]:border-slate-200 data-[state=active]:bg-slate-50"
            >
              <Icon className="h-4 w-4" />
              <span className="truncate">{group}</span>
            </TabsTrigger>
          )
        })}
      </TabsList>

      {groups.map((group) => (
        <TabsContent key={group} value={group} className="space-y-6">
          {children}
        </TabsContent>
      ))}
    </Tabs>
  )
}
