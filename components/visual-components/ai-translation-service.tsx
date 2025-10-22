import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Languages, ArrowRight, Copy, Volume2, RefreshCw } from "lucide-react"

export function AiTranslationService() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Languages className="h-5 w-5 text-green-600" />
          AI Translation Service
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 items-end">
          <div>
            <label className="text-sm font-medium mb-2 block">From</label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="es">🇪🇸 Spanish</SelectItem>
                <SelectItem value="fr">🇫🇷 French</SelectItem>
                <SelectItem value="de">🇩🇪 German</SelectItem>
                <SelectItem value="zh">🇨🇳 Chinese</SelectItem>
                <SelectItem value="ja">🇯🇵 Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center">
            <ArrowRight className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">To</label>
            <Select defaultValue="es">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">🇪🇸 Spanish</SelectItem>
                <SelectItem value="fr">🇫🇷 French</SelectItem>
                <SelectItem value="de">🇩🇪 German</SelectItem>
                <SelectItem value="zh">🇨🇳 Chinese</SelectItem>
                <SelectItem value="ja">🇯🇵 Japanese</SelectItem>
                <SelectItem value="en">🇺🇸 English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Source Text</label>
          <Textarea
            placeholder="Enter text to translate..."
            className="min-h-[100px]"
            defaultValue="Welcome to our innovative platform! We're excited to help you streamline your workflow and boost productivity with our AI-powered tools."
          />
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium">Translation</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Volume2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            ¡Bienvenido a nuestra plataforma innovadora! Estamos emocionados de ayudarte a optimizar tu flujo de trabajo
            y aumentar la productividad con nuestras herramientas impulsadas por IA.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-xs text-gray-500 mb-1">Confidence Score</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "94%" }}></div>
              </div>
              <span className="text-sm font-medium">94%</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-xs text-gray-500 mb-1">Processing Time</div>
            <div className="text-sm font-medium">0.8s</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant="secondary">Professional</Badge>
            <Badge variant="secondary">142 characters</Badge>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">Translate</Button>
        </div>
      </CardContent>
    </Card>
  )
}
