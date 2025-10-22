"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Palette, Eye, Code2 } from "lucide-react"

export function StyleEditor() {
  const [selectedColor, setSelectedColor] = useState("#3b82f6")
  const [fontSize, setFontSize] = useState([16])
  const [borderRadius, setBorderRadius] = useState([8])
  const [spacing, setSpacing] = useState([16])
  const [showPreview, setShowPreview] = useState(true)

  const colorPresets = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#84cc16"]

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Style Editor</h2>
          <p className="text-gray-600">Customize component appearance with live preview</p>
        </div>
        <div className="flex items-center gap-2">
          <Switch checked={showPreview} onCheckedChange={setShowPreview} />
          <Label>Live Preview</Label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Style Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Style Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="colors" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="colors">Colors</TabsTrigger>
                <TabsTrigger value="typography">Type</TabsTrigger>
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="effects">Effects</TabsTrigger>
              </TabsList>

              <TabsContent value="colors" className="space-y-4">
                <div>
                  <Label>Primary Color</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      type="color"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-12 h-10 p-1 border rounded"
                    />
                    <Input
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div>
                  <Label>Color Presets</Label>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {colorPresets.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className="w-10 h-10 rounded border-2 border-gray-200 hover:border-gray-400"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="typography" className="space-y-4">
                <div>
                  <Label>Font Size: {fontSize[0]}px</Label>
                  <Slider value={fontSize} onValueChange={setFontSize} max={32} min={12} step={1} className="mt-2" />
                </div>
                <div>
                  <Label>Font Weight</Label>
                  <select className="w-full mt-2 p-2 border rounded">
                    <option>Normal</option>
                    <option>Medium</option>
                    <option>Semibold</option>
                    <option>Bold</option>
                  </select>
                </div>
              </TabsContent>

              <TabsContent value="layout" className="space-y-4">
                <div>
                  <Label>Border Radius: {borderRadius[0]}px</Label>
                  <Slider
                    value={borderRadius}
                    onValueChange={setBorderRadius}
                    max={24}
                    min={0}
                    step={1}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Spacing: {spacing[0]}px</Label>
                  <Slider value={spacing} onValueChange={setSpacing} max={48} min={8} step={4} className="mt-2" />
                </div>
              </TabsContent>

              <TabsContent value="effects" className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Drop Shadow</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Hover Effects</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Animations</Label>
                  <Switch defaultChecked />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex gap-2 mt-6">
              <Button className="flex-1">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Code2 className="h-4 w-4 mr-2" />
                Export CSS
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Live Preview */}
        {showPreview && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div
                  className="p-4 border rounded transition-all"
                  style={{
                    backgroundColor: selectedColor + "10",
                    borderColor: selectedColor,
                    borderRadius: `${borderRadius[0]}px`,
                    padding: `${spacing[0]}px`,
                  }}
                >
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      color: selectedColor,
                      fontSize: `${fontSize[0]}px`,
                    }}
                  >
                    Sample Component
                  </h3>
                  <p className="text-gray-600 mb-4">
                    This is how your styled component will look with the current settings.
                  </p>
                  <Button
                    style={{
                      backgroundColor: selectedColor,
                      borderRadius: `${borderRadius[0]}px`,
                    }}
                  >
                    Action Button
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-3 border rounded"
                    style={{
                      borderColor: selectedColor,
                      borderRadius: `${borderRadius[0]}px`,
                    }}
                  >
                    <Badge style={{ backgroundColor: selectedColor }}>Badge</Badge>
                  </div>
                  <div
                    className="p-3 border rounded"
                    style={{
                      borderColor: selectedColor,
                      borderRadius: `${borderRadius[0]}px`,
                    }}
                  >
                    <div
                      className="w-full h-2 rounded"
                      style={{
                        backgroundColor: selectedColor,
                        borderRadius: `${borderRadius[0]}px`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Generated CSS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            Generated CSS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`.custom-component {
  --primary-color: ${selectedColor};
  --font-size: ${fontSize[0]}px;
  --border-radius: ${borderRadius[0]}px;
  --spacing: ${spacing[0]}px;
  
  background-color: var(--primary-color);
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  padding: var(--spacing);
}`}
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
