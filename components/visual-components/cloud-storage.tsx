import { Cloud, Upload, Download, Folder, File } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function CloudStorage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Cloud className="h-5 w-5 text-blue-500" />
          Cloud Storage
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Storage Used</span>
            <span className="font-medium">2.4 GB / 10 GB</span>
          </div>
          <Progress value={24} className="h-2" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                AWS
              </div>
              <span className="text-sm font-medium">S3 Bucket</span>
            </div>
            <Badge className="bg-green-100 text-green-700">Connected</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                GCS
              </div>
              <span className="text-sm font-medium">Google Cloud</span>
            </div>
            <Badge variant="outline">Setup</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded">
            <Folder className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Documents</span>
            <span className="text-xs text-slate-400 ml-auto">24 files</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded">
            <File className="h-4 w-4 text-slate-400" />
            <span className="text-sm">report.pdf</span>
            <span className="text-xs text-slate-400 ml-auto">2.1 MB</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
