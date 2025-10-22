import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock } from "lucide-react"

export function PaymentCheckout() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="h-5 w-5 mr-2" />
          Payment Details
        </CardTitle>
        <CardDescription>Complete your purchase securely</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="123" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Cardholder Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$29.99</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$2.40</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$32.39</span>
          </div>
        </div>
        <Button className="w-full">
          <Lock className="h-4 w-4 mr-2" />
          Complete Payment
        </Button>
        <p className="text-xs text-center text-muted-foreground">Your payment information is encrypted and secure</p>
      </CardContent>
    </Card>
  )
}
