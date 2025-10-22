import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Printer, Send, FileText } from "lucide-react"

export function InvoiceGenerator() {
  const invoice = {
    number: "INV-2024-001",
    date: "March 10, 2024",
    dueDate: "April 10, 2024",
    status: "Paid",
    from: {
      company: "Your Company Inc.",
      address: "123 Business St",
      city: "New York, NY 10001",
      email: "billing@yourcompany.com",
      phone: "(555) 123-4567",
    },
    to: {
      company: "Client Company LLC",
      address: "456 Client Ave",
      city: "Los Angeles, CA 90210",
      email: "accounts@clientcompany.com",
      phone: "(555) 987-6543",
    },
    items: [
      { description: "Web Development Services", quantity: 40, rate: 150, amount: 6000 },
      { description: "UI/UX Design", quantity: 20, rate: 120, amount: 2400 },
      { description: "Project Management", quantity: 10, rate: 100, amount: 1000 },
    ],
  }

  const subtotal = invoice.items.reduce((sum, item) => sum + item.amount, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Invoice Generator
              </CardTitle>
              <p className="text-gray-600">Create and manage professional invoices</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button size="sm">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Invoice Header */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">INVOICE</h1>
                <p className="text-lg text-gray-600">#{invoice.number}</p>
              </div>
              <Badge variant={invoice.status === "Paid" ? "default" : "secondary"}>{invoice.status}</Badge>
            </div>

            {/* Company Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">From:</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium text-gray-900">{invoice.from.company}</p>
                  <p>{invoice.from.address}</p>
                  <p>{invoice.from.city}</p>
                  <p>{invoice.from.email}</p>
                  <p>{invoice.from.phone}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">To:</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium text-gray-900">{invoice.to.company}</p>
                  <p>{invoice.to.address}</p>
                  <p>{invoice.to.city}</p>
                  <p>{invoice.to.email}</p>
                  <p>{invoice.to.phone}</p>
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Invoice Date</p>
                <p className="font-semibold">{invoice.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Due Date</p>
                <p className="font-semibold">{invoice.dueDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Amount Due</p>
                <p className="font-semibold text-lg">${total.toFixed(2)}</p>
              </div>
            </div>

            <Separator />

            {/* Invoice Items */}
            <div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Description</th>
                      <th className="text-right py-2">Qty</th>
                      <th className="text-right py-2">Rate</th>
                      <th className="text-right py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3">{item.description}</td>
                        <td className="text-right py-3">{item.quantity}</td>
                        <td className="text-right py-3">${item.rate}</td>
                        <td className="text-right py-3">${item.amount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Invoice Totals */}
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Payment Terms</h4>
              <p className="text-sm text-gray-600">
                Payment is due within 30 days of invoice date. Late payments may incur additional fees. Please include
                invoice number with payment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
