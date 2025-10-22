import type { ComponentItem } from "@/types/catalog"
import { CATALOG_DATA } from "@/data/catalog-data"

export const toTitle = (slug: string) => slug.replace(/-/g, " ").replace(/\b([a-z])/g, (m) => m.toUpperCase())

export function generateCatalogItems(): ComponentItem[] {
  return Object.entries(CATALOG_DATA.components).flatMap(([group, items]) => {
    const meta = CATALOG_DATA.groups[group] ?? {
      icon: CATALOG_DATA.groups["Layout"].icon,
      color: "bg-slate-100 text-slate-700",
      description: "",
    }

    return items.map((id) => ({
      id,
      title: toTitle(id),
      group,
      icon: meta.icon,
      tagColor: meta.color,
      groupDescription: meta.description,
    }))
  })
}

export function filterCatalogItems(items: ComponentItem[], query: string, activeGroup: string): ComponentItem[] {
  const q = query.trim().toLowerCase()
  const filtered = items.filter((item) =>
    [item.id, item.title, item.group].some((value) => value.toLowerCase().includes(q)),
  )

  return activeGroup === "All" ? filtered : filtered.filter((item) => item.group === activeGroup)
}

export function customizeComponent(id: string, customizations: Partial<ComponentItem>): ComponentItem | null {
  const items = generateCatalogItems()
  const item = items.find((item) => item.id === id)

  if (!item) return null

  return { ...item, ...customizations }
}
