"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Layers } from "lucide-react"

interface GalleryHeaderProps {
  query: string
  onQueryChange: (query: string) => void
  onFilterClick?: () => void
  title?: string
  description?: string
  showFilters?: boolean
}

export function GalleryHeader({
  query,
  onQueryChange,
  onFilterClick,
  title = "Build your AI SaaS with ready‑made blocks",
  description = "Explore a curated gallery of production‑ready components. Click any card to preview and copy its ID for your drag‑and‑drop editor.",
  showFilters = true,
}: GalleryHeaderProps) {
  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
      <div>
        <Badge variant="secondary" className="mb-3">
          <Layers className="mr-2 h-3.5 w-3.5" />
          Visual Component Library
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-slate-600">{description}</p>
      </div>
      <div className="flex w-full max-w-xl items-center gap-2 md:w-auto">
        <div className="relative w-full">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by name, ID, or group…"
            className="w-full rounded-xl pl-9"
          />
        </div>
        {showFilters && (
          <Button variant="outline" className="rounded-xl bg-transparent" onClick={onFilterClick}>
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        )}
      </div>
    </div>
  )
}
