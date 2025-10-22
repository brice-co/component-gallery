import { CheckCircle, Clock, XCircle, User, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ApprovalWorkflow() {
  const workflows = [
    {
      id: 1,
      title: "Budget Request - Q4 Marketing",
      requester: "Sarah Chen",
      amount: "$15,000",
      status: "pending",
      stage: "Manager Review",
      stages: ["Submitted", "Manager Review", "Finance Review", "Final Approval"],
      currentStage: 1,
      daysWaiting: 2,
    },
    {
      id: 2,
      title: "New Hire Approval - Frontend Dev",
      requester: "Mike Johnson",
      amount: "$85,000/year",
      status: "approved",
      stage: "Completed",
      stages: ["HR Review", "Technical Review", "Budget Approval", "Final Approval"],
      currentStage: 4,
      daysWaiting: 0,
    },
    {
      id: 3,
      title: "Software License Renewal",
      requester: "Alex Rivera",
      amount: "$2,400",
      status: "rejected",
      stage: "Budget Review",
      stages: ["Submitted", "Manager Review", "Budget Review"],
      currentStage: 2,
      daysWaiting: 5,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "approved":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Approval Workflows</h2>
        <p className="text-gray-600">Track and manage approval processes</p>
      </div>

      <div className="space-y-4">
        {workflows.map((workflow) => (
          <Card key={workflow.id} className="border border-gray-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">{workflow.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{workflow.requester}</span>
                    <span className="text-sm font-medium text-gray-900">{workflow.amount}</span>
                  </div>
                </div>
                <Badge className={getStatusColor(workflow.status)}>
                  {getStatusIcon(workflow.status)}
                  <span className="ml-1 capitalize">{workflow.status}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Progress Steps */}
                <div className="flex items-center justify-between">
                  {workflow.stages.map((stage, index) => (
                    <div key={stage} className="flex items-center">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                          index < workflow.currentStage
                            ? "bg-green-500 border-green-500 text-white"
                            : index === workflow.currentStage
                              ? "bg-blue-500 border-blue-500 text-white"
                              : "bg-gray-100 border-gray-300 text-gray-500"
                        }`}
                      >
                        {index < workflow.currentStage ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <span className="text-xs font-medium">{index + 1}</span>
                        )}
                      </div>
                      {index < workflow.stages.length - 1 && <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />}
                    </div>
                  ))}
                </div>

                {/* Stage Labels */}
                <div className="flex items-center justify-between text-xs text-gray-600">
                  {workflow.stages.map((stage, index) => (
                    <div key={stage} className="flex items-center">
                      <span className={index === workflow.currentStage ? "font-medium text-blue-600" : ""}>
                        {stage}
                      </span>
                      {index < workflow.stages.length - 1 && <div className="w-8" />}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">View Details</span>
                    </div>
                    {workflow.daysWaiting > 0 && (
                      <span className="text-sm text-orange-600">Waiting {workflow.daysWaiting} days</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {workflow.status === "pending" && (
                      <>
                        <Button variant="outline" size="sm">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                        <Button size="sm">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
