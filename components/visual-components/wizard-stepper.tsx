"use client"

import { useState } from "react"
import { Check, ChevronRight, User, CreditCard, Settings, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function WizardStepper() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const steps = [
    {
      id: 0,
      title: "Personal Info",
      description: "Basic information about you",
      icon: User,
    },
    {
      id: 1,
      title: "Payment Details",
      description: "Billing and payment setup",
      icon: CreditCard,
    },
    {
      id: 2,
      title: "Preferences",
      description: "Customize your experience",
      icon: Settings,
    },
    {
      id: 3,
      title: "Complete",
      description: "Review and finish setup",
      icon: CheckCircle,
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep])
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepIndex: number) => {
    if (stepIndex <= Math.max(...completedSteps) + 1) {
      setCurrentStep(stepIndex)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1 (555) 123-4567" />
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            <div>
              <Label htmlFor="billingAddress">Billing Address</Label>
              <Input id="billingAddress" placeholder="123 Main St, City, State 12345" />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label>Notification Preferences</Label>
              <div className="space-y-2 mt-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Email notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">SMS notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Marketing updates</span>
                </label>
              </div>
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <select id="timezone" className="w-full p-2 border rounded-md">
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC+0 (GMT)</option>
              </select>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Setup Complete!</h3>
            <p className="text-gray-600">
              Your account has been successfully configured. You can now start using all features.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h4 className="font-medium text-gray-900 mb-2">Summary:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Personal information verified</li>
                <li>✓ Payment method added</li>
                <li>✓ Preferences configured</li>
                <li>✓ Account activated</li>
              </ul>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg border">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(index)
            const isCurrent = currentStep === index
            const isAccessible = index <= Math.max(...completedSteps) + 1

            return (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex flex-col items-center cursor-pointer ${
                    isAccessible ? "cursor-pointer" : "cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => isAccessible && goToStep(index)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      isCompleted
                        ? "bg-green-500 border-green-500 text-white"
                        : isCurrent
                          ? "bg-blue-500 border-blue-500 text-white"
                          : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {isCompleted ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                  </div>
                  <div className="mt-2 text-center">
                    <div
                      className={`text-sm font-medium ${
                        isCurrent ? "text-blue-600" : isCompleted ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && <ChevronRight className="w-5 h-5 text-gray-300 mx-4 mt-[-20px]" />}
              </div>
            )
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Step {currentStep + 1}: {steps[currentStep].title}
          </h2>
          {renderStepContent()}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </Button>
        <div className="flex gap-2">
          {currentStep < steps.length - 1 ? (
            <Button onClick={nextStep}>
              Next Step
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          )}
        </div>
      </div>
    </div>
  )
}
