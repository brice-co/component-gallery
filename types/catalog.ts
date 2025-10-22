import type { LucideIcon } from "lucide-react"

export interface ComponentItem {
  id: string
  title: string
  group: string
  icon: LucideIcon
  tagColor: string
  groupDescription: string
  customDescription?: string
  tags?: string[]
  featured?: boolean
  difficulty?: "beginner" | "intermediate" | "advanced"
}

export interface GroupMeta {
  icon: LucideIcon
  color: string
  description: string
}

export interface CatalogData {
  groups: Record<string, GroupMeta>
  components: Record<string, string[]>
}
