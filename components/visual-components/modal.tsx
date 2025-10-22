import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

export function Modal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Modal Title</CardTitle>
            <CardDescription>This is a modal dialog example</CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            This is the content of the modal. You can put forms, information, or any other content here.
          </p>
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
