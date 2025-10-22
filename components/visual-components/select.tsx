"use client"

import { ChevronDown, Check } from "lucide-react"
import { useState } from "react"

export function Select() {
  const [selectedCountry, setSelectedCountry] = useState("us")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { value: "tech", label: "Technology" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
    { value: "support", label: "Support" },
  ]

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg border border-gray-200">
      <div className="space-y-6">
        {/* Basic Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Country</label>
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="jp">Japan</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Multi-Select Style */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Department</label>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-left flex items-center justify-between"
            >
              <span className="text-gray-900">
                {selectedCategory
                  ? categories.find((c) => c.value === selectedCategory)?.label
                  : "Select department..."}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>

            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setSelectedCategory(category.value)
                      setIsOpen(false)
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center justify-between"
                  >
                    <span>{category.label}</span>
                    {selectedCategory === category.value && <Check className="h-4 w-4 text-blue-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Select with Groups */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Time Zone</label>
          <div className="relative">
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
              <optgroup label="North America">
                <option value="est">Eastern Time (EST)</option>
                <option value="cst">Central Time (CST)</option>
                <option value="mst">Mountain Time (MST)</option>
                <option value="pst">Pacific Time (PST)</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="gmt">Greenwich Mean Time (GMT)</option>
                <option value="cet">Central European Time (CET)</option>
                <option value="eet">Eastern European Time (EET)</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="jst">Japan Standard Time (JST)</option>
                <option value="cst-asia">China Standard Time (CST)</option>
                <option value="ist">India Standard Time (IST)</option>
              </optgroup>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}
