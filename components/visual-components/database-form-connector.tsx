import { Link, Settings, CheckCircle, AlertCircle, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export function DatabaseFormConnector() {
  const formFields = [
    { name: "name", label: "Full Name", type: "text", required: true, mapped: "users.name" },
    { name: "email", label: "Email Address", type: "email", required: true, mapped: "users.email" },
    { name: "phone", label: "Phone Number", type: "tel", required: false, mapped: "users.phone" },
    { name: "company", label: "Company", type: "text", required: false, mapped: "users.company" },
    { name: "role", label: "Role", type: "select", required: true, mapped: "users.role" },
  ]

  const connections = [
    { name: "Production DB", status: "connected", tables: 47 },
    { name: "Staging DB", status: "connected", tables: 45 },
    { name: "Analytics DB", status: "error", tables: 0 },
  ]

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Database Form Connector
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          {/* Form Configuration */}
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Form Configuration</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="form-name">Form Name</Label>
                  <Input id="form-name" defaultValue="User Registration Form" />
                </div>

                <div>
                  <Label htmlFor="database">Target Database</Label>
                  <Select defaultValue="production">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="production">Production DB</SelectItem>
                      <SelectItem value="staging">Staging DB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="table">Target Table</Label>
                  <Select defaultValue="users">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="users">users</SelectItem>
                      <SelectItem value="customers">customers</SelectItem>
                      <SelectItem value="leads">leads</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="auto-submit" defaultChecked />
                  <Label htmlFor="auto-submit">Auto-submit on form completion</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="validation" defaultChecked />
                  <Label htmlFor="validation">Enable server-side validation</Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Database Connections</h3>
              <div className="space-y-2">
                {connections.map((conn, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {conn.status === "connected" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                      <div>
                        <div className="font-medium">{conn.name}</div>
                        <div className="text-sm text-muted-foreground">{conn.tables} tables available</div>
                      </div>
                    </div>
                    <Badge
                      className={
                        conn.status === "connected" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }
                    >
                      {conn.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Field Mapping */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Field Mapping</h3>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Field
                </Button>
              </div>

              <div className="space-y-4">
                {formFields.map((field, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Label className="font-medium">{field.label}</Label>
                        {field.required && (
                          <Badge variant="outline" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <Badge variant="outline">{field.type}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-xs text-muted-foreground">Form Field</Label>
                        <Input value={field.name} disabled className="text-sm" />
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Database Column</Label>
                        <Select defaultValue={field.mapped}>
                          <SelectTrigger className="text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="users.name">users.name</SelectItem>
                            <SelectItem value="users.email">users.email</SelectItem>
                            <SelectItem value="users.phone">users.phone</SelectItem>
                            <SelectItem value="users.company">users.company</SelectItem>
                            <SelectItem value="users.role">users.role</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Connection Status
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Database:</span>
                  <span className="text-green-600">Connected</span>
                </div>
                <div className="flex justify-between">
                  <span>Table:</span>
                  <span>users (12 columns)</span>
                </div>
                <div className="flex justify-between">
                  <span>Mapped Fields:</span>
                  <span>5 of 5</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Test:</span>
                  <span>2 minutes ago</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline">
                  Test Connection
                </Button>
                <Button size="sm">Save Configuration</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
