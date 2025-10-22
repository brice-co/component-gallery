"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Settings, Shield, CreditCard, Users } from "lucide-react"

export function Accordion() {
  const [openItems, setOpenItems] = useState<string[]>(["faq-1"])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const faqItems = [
    {
      id: "faq-1",
      icon: HelpCircle,
      question: "How do I get started with the platform?",
      answer:
        "Getting started is easy! Simply sign up for an account, complete the onboarding process, and you'll have access to all our features. Our step-by-step guide will walk you through setting up your first project.",
    },
    {
      id: "faq-2",
      icon: CreditCard,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based billing with NET 30 terms.",
    },
    {
      id: "faq-3",
      icon: Shield,
      question: "How secure is my data?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with SOC 2 Type II standards. Your data is stored in secure, geographically distributed data centers with 99.9% uptime guarantee.",
    },
    {
      id: "faq-4",
      icon: Users,
      question: "Can I collaborate with my team?",
      answer:
        "Our platform is built for collaboration. You can invite team members, assign roles and permissions, share projects, and work together in real-time. We support teams of all sizes from small startups to large enterprises.",
    },
    {
      id: "faq-5",
      icon: Settings,
      question: "How do I customize my workspace?",
      answer:
        "You can fully customize your workspace through the Settings panel. Change themes, rearrange dashboard widgets, set up custom workflows, configure notifications, and much more. Everything is designed to adapt to your preferred way of working.",
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg border shadow-sm">
      {/* Header */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
        <p className="text-sm text-gray-600">Find answers to common questions about our platform</p>
      </div>

      {/* Accordion Items */}
      <div className="divide-y">
        {faqItems.map((item) => {
          const isOpen = openItems.includes(item.id)

          return (
            <div key={item.id} className="group">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <item.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">{item.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Collapsible Content */}
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 pl-17">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="p-6 border-t bg-gray-50 rounded-b-lg">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Still have questions?</p>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Contact our support team →</button>
        </div>
      </div>
    </div>
  )
}
