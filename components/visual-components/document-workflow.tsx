import { FileText, Upload, Download, Eye, Edit, Share, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export function DocumentWorkflow() {
  const documents = [
    {
      id: 1,
      name: "Project Proposal - Q1 2024",
      type: "PDF",
      size: "2.4 MB",
      status: "review",
      progress: 75,
      reviewer: "Sarah Chen",
      lastModified: "2 hours ago",
      version: "v2.1",
      comments: 3,
    },
    {
      id: 2,
      name: "Technical Specification",
      type: "DOCX",
      size: "1.8 MB",
      status: "approved",
      progress: 100,
      reviewer: "Mike Johnson",
      lastModified: "1 day ago",
      version: "v1.0",
      comments: 0,
    },
    {
      id: 3,
      name: "User Research Report",
      type: "PDF",
      size: "5.2 MB",
      status: "draft",
      progress: 45,
      reviewer: "Alex Rivera",
      lastModified: "3 hours ago",
      version: "v0.3",
      comments: 7,
    },
    {
      id: 4,
      name: "Marketing Strategy",
      type: "PPTX",
      size: "12.1 MB",
      status: "rejected",
      progress: 60,
      reviewer: "Lisa Wong",
      lastModified: "5 hours ago",
      version: "v1.2",
      comments: 12,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "review":
        return "bg-blue-100 text-blue-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />
      case "review":
        return <Eye className="h-4 w-4" />
      case "draft":
        return <Edit className="h-4 w-4" />
      case "rejected":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getFileIcon = (type: string) => {
    return <FileText className="h-5 w-5 text-blue-600" />
  }

  return (
    <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Document Workflow</h2>
          <p className="text-gray-600">Manage document reviews and approvals</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      <div className="grid gap-4">
        {documents.map((doc) => (
          <Card key={doc.id} className="border border-gray-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {getFileIcon(doc.type)}
                  <div>
                    <CardTitle className="text-lg font-semibold">{doc.name}</CardTitle>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <span>
                        {doc.type} • {doc.size}
                      </span>
                      <span>Version {doc.version}</span>
                      <span>Modified {doc.lastModified}</span>
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(doc.status)}>
                  {getStatusIcon(doc.status)}
                  <span className="ml-1 capitalize">{doc.status}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Review Progress</span>
                    <span className="text-sm text-gray-600">{doc.progress}%</span>
                  </div>
                  <Progress value={doc.progress} className="h-2" />
                </div>

                {/* Reviewer and Comments */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {doc.reviewer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">Reviewer: {doc.reviewer}</span>
                  </div>
                  {doc.comments > 0 && (
                    <Badge variant="outline">
                      {doc.comments} comment{doc.comments !== 1 ? "s" : ""}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                  {doc.status === "review" && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Request Changes
                      </Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-blue-600">24</div>
          <div className="text-sm text-gray-600">Total Documents</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-yellow-600">8</div>
          <div className="text-sm text-gray-600">Pending Review</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-green-600">15</div>
          <div className="text-sm text-gray-600">Approved</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-gray-600">72%</div>
          <div className="text-sm text-gray-600">Avg. Progress</div>
        </Card>
      </div>
    </div>
  )
}
