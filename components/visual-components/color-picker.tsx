"use client"

import { useState } from "react"
import { Palette, Pipette, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("#3B82F6")
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"palette" | "custom">("palette")

  const colorPalettes = {
    primary: ["#3B82F6", "#1D4ED8", "#1E40AF", "#1E3A8A", "#172554"],
    secondary: ["#6B7280", "#4B5563", "#374151", "#1F2937", "#111827"],
    success: ["#10B981", "#059669", "#047857", "#065F46", "#064E3B"],
    warning: ["#F59E0B", "#D97706", "#B45309", "#92400E", "#78350F"],
    danger: ["#EF4444", "#DC2626", "#B91C1C", "#991B1B", "#7F1D1D"],
    purple: ["#8B5CF6", "#7C3AED", "#6D28D9", "#5B21B6", "#4C1D95"],
    pink: ["#EC4899", "#DB2777", "#BE185D", "#9D174D", "#831843"],
    indigo: ["#6366F1", "#4F46E5", "#4338CA", "#3730A3", "#312E81"],
  }

  const recentColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8"]

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  const rgb = hexToRgb(selectedColor)

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-lg">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-lg border-2 border-gray-200 shadow-sm"
            style={{ backgroundColor: selectedColor }}
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Color Picker</h3>
            <p className="text-sm text-gray-600">Choose your perfect color</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("palette")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === "palette" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Palette className="w-4 h-4" />
            Palette
          </button>
          <button
            onClick={() => setActiveTab("custom")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === "custom" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Pipette className="w-4 h-4" />
            Custom
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "palette" && (
          <div className="space-y-4">
            {/* Color Palettes */}
            {Object.entries(colorPalettes).map(([name, colors]) => (
              <div key={name}>
                <h4 className="text-sm font-medium text-gray-700 mb-2 capitalize">{name}</h4>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-md border-2 transition-all hover:scale-110 ${
                        selectedColor === color ? "border-gray-400 shadow-md" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Recent Colors */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Recent</h4>
              <div className="flex gap-2">
                {recentColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-md border-2 transition-all hover:scale-110 ${
                      selectedColor === color ? "border-gray-400 shadow-md" : "border-gray-200"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "custom" && (
          <div className="space-y-4">
            {/* Color Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hex Color</label>
              <Input
                type="text"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                placeholder="#3B82F6"
                className="font-mono"
              />
            </div>

            {/* RGB Values */}
            {rgb && (
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Red</label>
                  <Input type="number" value={rgb.r} readOnly className="text-center" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Green</label>
                  <Input type="number" value={rgb.g} readOnly className="text-center" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Blue</label>
                  <Input type="number" value={rgb.b} readOnly className="text-center" />
                </div>
              </div>
            )}

            {/* Color Preview */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Preview</label>
              <div
                className="w-full h-20 rounded-lg border-2 border-gray-200"
                style={{ backgroundColor: selectedColor }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-gray-50 rounded-b-lg">
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => copyToClipboard(selectedColor)} className="flex-1">
            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? "Copied!" : "Copy"}
          </Button>
          <Button className="flex-1">Apply Color</Button>
        </div>

        <div className="mt-3 text-center">
          <div className="text-sm text-gray-600">
            Selected: <span className="font-mono font-medium">{selectedColor}</span>
          </div>
          {rgb && (
            <div className="text-xs text-gray-500 mt-1">
              RGB({rgb.r}, {rgb.g}, {rgb.b})
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
