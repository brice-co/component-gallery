import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, ArrowRight } from "lucide-react"

export function UserOnboarding() {
  const steps = [
    { title: "Create Account", description: "Set up your profile", completed: true },
    { title: "Verify Email", description: "Confirm your email address", completed: true },
    { title: "Complete Profile", description: "Add your personal information", completed: false, current: true },
    { title: "Invite Team", description: "Add team members", completed: false },
    { title: "Setup Preferences", description: "Customize your experience", completed: false },
  ]

  const completedSteps = steps.filter((step) => step.completed).length
  const progress = (completedSteps / steps.length) * 100

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Welcome! Let's get you started</CardTitle>
        <CardDescription>Complete these steps to set up your account</CardDescription>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>
              {completedSteps} of {steps.length} completed
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-3 rounded-lg ${step.current ? "bg-blue-50 border border-blue-200" : ""}`}
          >
            {step.completed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-gray-400" />
            )}
            <div className="flex-1">
              <h3
                className={`font-medium ${step.current ? "text-blue-900" : step.completed ? "text-green-900" : "text-gray-900"}`}
              >
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
            {step.current && (
              <Button size="sm">
                Continue <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
