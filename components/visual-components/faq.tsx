import { ChevronDown, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Faq() {
  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Get full access to all features for 14 days, no credit card required.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
  ]

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-sm">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-blue-500" />
          <h3 className="font-semibold">Frequently Asked Questions</h3>
        </div>
      </div>
      <div className="divide-y">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4">
            <Button variant="ghost" className="w-full justify-between p-0 h-auto font-medium text-left">
              {faq.question}
              <ChevronDown className="h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-600 mt-2 pl-0">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 rounded-b-lg">
        <p className="text-sm text-gray-600 text-center">
          Still have questions?{" "}
          <Button variant="link" className="p-0 h-auto">
            Contact Support
          </Button>
        </p>
      </div>
    </div>
  )
}
