"use client"

import { Check, Minus } from "lucide-react"
import { useState } from "react"

export function Checkbox() {
  const [basicChecked, setBasicChecked] = useState(true)
  const [termsChecked, setTermsChecked] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  })
  const [indeterminate, setIndeterminate] = useState(true)

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg border border-gray-200">
      <div className="space-y-6">
        {/* Basic Checkbox */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700">Basic Options</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="checkbox"
                id="basic"
                checked={basicChecked}
                onChange={(e) => setBasicChecked(e.target.checked)}
                className="sr-only"
              />
              <label htmlFor="basic" className="flex items-center cursor-pointer">
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                    basicChecked ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"
                  }`}
                >
                  {basicChecked && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="ml-3 text-sm text-gray-700">Subscribe to newsletter</span>
              </label>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="checkbox"
                id="terms"
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
                className="sr-only"
              />
              <label htmlFor="terms" className="flex items-center cursor-pointer">
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                    termsChecked ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"
                  }`}
                >
                  {termsChecked && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="ml-3 text-sm text-gray-700">
                  I agree to the <span className="text-blue-500 underline">Terms of Service</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Checkbox Group */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700">Notification Preferences</h3>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="checkbox"
                id="email"
                checked={notifications.email}
                onChange={() => handleNotificationChange("email")}
                className="sr-only"
              />
              <label htmlFor="email" className="flex items-center cursor-pointer">
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                    notifications.email ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"
                  }`}
                >
                  {notifications.email && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="ml-3 text-sm text-gray-700">Email notifications</span>
              </label>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="checkbox"
                id="sms"
                checked={notifications.sms}
                onChange={() => handleNotificationChange("sms")}
                className="sr-only"
              />
              <label htmlFor="sms" className="flex items-center cursor-pointer">
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                    notifications.sms ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"
                  }`}
                >
                  {notifications.sms && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="ml-3 text-sm text-gray-700">SMS notifications</span>
              </label>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="checkbox"
                id="push"
                checked={notifications.push}
                onChange={() => handleNotificationChange("push")}
                className="sr-only"
              />
              <label htmlFor="push" className="flex items-center cursor-pointer">
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                    notifications.push ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"
                  }`}
                >
                  {notifications.push && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="ml-3 text-sm text-gray-700">Push notifications</span>
              </label>
            </div>
          </div>
        </div>

        {/* Indeterminate Checkbox */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700">Advanced Options</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="checkbox"
                id="indeterminate"
                checked={indeterminate}
                onChange={(e) => setIndeterminate(e.target.checked)}
                className="sr-only"
              />
              <label htmlFor="indeterminate" className="flex items-center cursor-pointer">
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                    indeterminate ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"
                  }`}
                >
                  <Minus className="w-3 h-3 text-white" />
                </div>
                <span className="ml-3 text-sm text-gray-700">Partially selected option</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
