import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Upload, File, X, Check } from "lucide-react"

export function FileUploader() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="h-5 w-5 mr-2" />
          File Upload
        </CardTitle>
        <CardDescription>Drag and drop files or click to browse</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
          <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-sm text-muted-foreground mb-2">Drop files here or click to upload</p>
          <Button variant="outline" size="sm">
            Browse Files
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-muted rounded">
            <div className="flex items-center space-x-2">
              <File className="h-4 w-4" />
              <span className="text-sm">document.pdf</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <Button variant="ghost" size="sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2 p-2 bg-muted rounded">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <File className="h-4 w-4" />
                <span className="text-sm">image.jpg</span>
              </div>
              <span className="text-xs text-muted-foreground">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
