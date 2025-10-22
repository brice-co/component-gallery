import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Calendar, CreditCard } from "lucide-react"

export function BillingHistory() {
  const invoices = [
    { id: "INV-001", date: "2024-01-15", amount: "$99.00", status: "paid", plan: "Pro Plan" },
    { id: "INV-002", date: "2023-12-15", amount: "$99.00", status: "paid", plan: "Pro Plan" },
    { id: "INV-003", date: "2023-11-15", amount: "$49.00", status: "paid", plan: "Basic Plan" },
    { id: "INV-004", date: "2023-10-15", amount: "$49.00", status: "failed", plan: "Basic Plan" },
  ]

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5" />
          <span>Billing History</span>
        </CardTitle>
        <CardDescription>View and download your past invoices</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-medium">{invoice.id}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>{invoice.date}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{invoice.plan}</p>
                  <p className="font-medium">{invoice.amount}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant={invoice.status === "paid" ? "default" : "destructive"}>{invoice.status}</Badge>
                {invoice.status === "paid" && (
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
