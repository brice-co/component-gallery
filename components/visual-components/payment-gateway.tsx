import { CreditCard, Shield, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PaymentGateway() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CreditCard className="h-5 w-5 text-blue-500" />
          Payment Gateway
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                S
              </div>
              <span className="text-sm font-medium">Stripe</span>
            </div>
            <Badge className="bg-green-100 text-green-700">
              <CheckCircle className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                P
              </div>
              <span className="text-sm font-medium">PayPal</span>
            </div>
            <Badge variant="secondary">Test</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-5 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
                A
              </div>
              <span className="text-sm font-medium">Apple Pay</span>
            </div>
            <Badge variant="outline">Setup</Badge>
          </div>
        </div>

        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
          <Shield className="h-4 w-4 text-green-600" />
          <span className="text-sm text-green-700">PCI DSS Compliant</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">Processing Fee</span>
          <span className="font-medium">2.9% + $0.30</span>
        </div>
      </CardContent>
    </Card>
  )
}
