"use client"

import { useState } from "react"
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState("14:30")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [view, setView] = useState<"date" | "time">("date")

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev)
      if (direction === "prev") {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  const selectDate = (date: Date) => {
    setSelectedDate(date)
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString()
  }

  const generateTimeOptions = () => {
    const times = []
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
        times.push(timeString)
      }
    }
    return times
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-lg">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Select Date & Time</h3>
          <div className="flex gap-1">
            <Button variant={view === "date" ? "default" : "ghost"} size="sm" onClick={() => setView("date")}>
              <Calendar className="w-4 h-4" />
            </Button>
            <Button variant={view === "time" ? "default" : "ghost"} size="sm" onClick={() => setView("time")}>
              <Clock className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="text-lg text-blue-600 font-medium mt-1">{selectedTime}</div>
        </div>
      </div>

      {/* Date View */}
      {view === "date" && (
        <div className="p-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h4 className="font-semibold text-gray-900">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h4>
            <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekdays.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentMonth).map((date, index) => (
              <div key={index} className="aspect-square">
                {date && (
                  <button
                    onClick={() => selectDate(date)}
                    className={`w-full h-full rounded-md text-sm font-medium transition-colors ${
                      isSelected(date)
                        ? "bg-blue-500 text-white"
                        : isToday(date)
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Time View */}
      {view === "time" && (
        <div className="p-4">
          <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto">
            {generateTimeOptions().map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTime === time ? "bg-blue-500 text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="p-4 border-t bg-gray-50 rounded-b-lg">
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 bg-transparent">
            Cancel
          </Button>
          <Button className="flex-1">Confirm Selection</Button>
        </div>
      </div>
    </div>
  )
}
