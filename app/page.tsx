"use client"

import { useMemo, useState } from "react"
import { GalleryHeader } from "@/components/gallery/gallery-header"
import { GalleryTabs } from "@/components/gallery/gallery-tabs"
import { PreviewModal } from "@/components/gallery/preview-modal"
import type { ComponentItem } from "@/types/catalog"
import { CATALOG_DATA } from "@/data/catalog-data"
import dynamic from "next/dynamic"
import { generateCatalogItems, filterCatalogItems } from "@/utils/catalog-utils"
const ComponentCard = dynamic(() => import('@/components/gallery/component-card').then(c => c.ComponentCard), {
  ssr: false,
});


export default function ComponentGalleryPage() {
  const [query, setQuery] = useState("")
  const [activeGroup, setActiveGroup] = useState<string>("All")
  const [preview, setPreview] = useState<ComponentItem | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const catalogItems = useMemo(() => generateCatalogItems(), [])

  const groups = useMemo(() => ["All", ...Object.keys(CATALOG_DATA.components)], [])

  const filteredItems = useMemo(
    () => filterCatalogItems(catalogItems, query, activeGroup),
    [catalogItems, query, activeGroup],
  )

  const handleCopy = async (item: ComponentItem) => {
    await navigator.clipboard.writeText(item.id)
    console.log(`Copied ${item.id} to clipboard`)
  }

  const handlePreview = (item: ComponentItem) => {
    setPreview(item)
    setIsPreviewOpen(true)
    console.log(`Previewing ${item.id}`)
  }

  const handleClosePreview = () => {
    setIsPreviewOpen(false)
    setPreview(null)
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-slate-50 to-white">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <GalleryHeader query={query} onQueryChange={setQuery} onFilterClick={() => console.log("Filters clicked")} />

        <GalleryTabs
          groups={groups}
          groupMeta={CATALOG_DATA.groups}
          activeGroup={activeGroup}
          onGroupChange={setActiveGroup}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Showing <span className="font-medium">{filteredItems.length}</span> components{" "}
              {activeGroup !== "All" && (
                <>
                  in <span className="font-medium">{activeGroup}</span>
                </>
              )}
            </p>
          </div>

          <div
            className="grid auto-rows-fr gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            role="list"
          >
            {filteredItems.map((item) => (
              <ComponentCard
                key={item.id}
                item={item}
                onPreview={handlePreview}
                onCopy={handleCopy}
                showFeatured={true}
              />
            ))}
          </div>
        </GalleryTabs>
      </section>

      <PreviewModal item={preview} isOpen={isPreviewOpen} onClose={handleClosePreview} onCopy={handleCopy} />
    </div>
  )
}
