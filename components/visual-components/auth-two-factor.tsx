import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield } from "lucide-react"

export function AuthTwoFactor() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <Shield className="h-6 w-6 text-green-600" />
        </div>
        <CardTitle>Two-Factor Authentication</CardTitle>
        <CardDescription>Enter the 6-digit code from your authenticator app</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code">Verification Code</Label>
          <Input id="code" placeholder="000000" className="text-center text-lg tracking-widest" maxLength={6} />
        </div>
        <Button className="w-full">Verify Code</Button>
        <div className="text-center">
          <Button variant="link" className="text-sm">
            Use backup code instead
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
