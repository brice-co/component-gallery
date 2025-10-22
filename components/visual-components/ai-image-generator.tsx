import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ImageIcon, Wand2, Download, Share2, Sparkles, Palette, Settings } from "lucide-react"

export function AiImageGenerator() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-purple-600" />
            AI Image Generator
          </CardTitle>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            <Sparkles className="h-3 w-3 mr-1" />
            DALL-E 3
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Prompt Section */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Image Description:</label>
          <Input
            placeholder="A futuristic cityscape at sunset with flying cars and neon lights..."
            defaultValue="A modern minimalist workspace with a laptop, coffee cup, and plants"
            className="text-sm"
          />
          <div className="flex gap-2">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Wand2 className="h-4 w-4 mr-1" />
              Generate Image
            </Button>
            <Button size="sm" variant="outline">
              <Palette className="h-4 w-4 mr-1" />
              Style Presets
            </Button>
            <Button size="sm" variant="outline">
              <Settings className="h-4 w-4 mr-1" />
              Advanced
            </Button>
          </div>
        </div>

        {/* Settings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg">
          <div className="space-y-2">
            <label className="text-sm font-medium">Style</label>
            <Select defaultValue="realistic">
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realistic">Realistic</SelectItem>
                <SelectItem value="artistic">Artistic</SelectItem>
                <SelectItem value="cartoon">Cartoon</SelectItem>
                <SelectItem value="abstract">Abstract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Size</label>
            <Select defaultValue="1024x1024">
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="512x512">512×512</SelectItem>
                <SelectItem value="1024x1024">1024×1024</SelectItem>
                <SelectItem value="1024x1792">1024×1792</SelectItem>
                <SelectItem value="1792x1024">1792×1024</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Quality</label>
            <div className="px-2">
              <Slider defaultValue={[80]} max={100} step={10} className="w-full" />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>Standard</span>
                <span>HD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Generated Images Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Generated Images:</label>
            <div className="text-xs text-slate-500">4 variations created</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative group">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <ImageIcon className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <div className="text-sm">Generated Image {i}</div>
                    <div className="text-xs">1024×1024</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generation Stats */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex gap-4 text-sm text-slate-600">
            <span>Generated in 8.2s</span>
            <span>•</span>
            <span>4 variations</span>
            <span>•</span>
            <span>HD Quality</span>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-green-600 border-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Ready
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              Credits: 47/50
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
