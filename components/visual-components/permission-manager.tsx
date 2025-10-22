import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Shield, Users, Eye, Edit, Trash2, Plus } from "lucide-react"

export function PermissionManager() {
  const roles = [
    { name: "Admin", users: 3, color: "bg-red-100 text-red-700" },
    { name: "Manager", users: 8, color: "bg-blue-100 text-blue-700" },
    { name: "Editor", users: 15, color: "bg-green-100 text-green-700" },
    { name: "Viewer", users: 24, color: "bg-gray-100 text-gray-700" },
  ]

  const permissions = [
    { module: "User Management", read: true, write: true, delete: false },
    { module: "Content", read: true, write: true, delete: true },
    { module: "Analytics", read: true, write: false, delete: false },
    { module: "Settings", read: false, write: false, delete: false },
    { module: "Billing", read: true, write: false, delete: false },
  ]

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Permission Manager
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Role Overview */}
        <div>
          <h3 className="font-medium mb-3">Roles Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((role) => (
              <Card key={role.name} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={role.color}>{role.name}</Badge>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {role.users} users
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Permission Matrix */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Permission Matrix</h3>
            <Select defaultValue="manager">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-muted p-3 font-medium text-sm">
              <div>Module</div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                Read
              </div>
              <div className="flex items-center gap-1">
                <Edit className="h-4 w-4" />
                Write
              </div>
              <div className="flex items-center gap-1">
                <Trash2 className="h-4 w-4" />
                Delete
              </div>
            </div>
            {permissions.map((perm, index) => (
              <div
                key={perm.module}
                className={`grid grid-cols-4 p-3 items-center ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
              >
                <div className="font-medium">{perm.module}</div>
                <div>
                  <Switch checked={perm.read} />
                </div>
                <div>
                  <Switch checked={perm.write} />
                </div>
                <div>
                  <Switch checked={perm.delete} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Role */}
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-3">Create New Role</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="role-name">Role Name</Label>
              <Input id="role-name" placeholder="Enter role name" />
            </div>
            <div>
              <Label htmlFor="role-description">Description</Label>
              <Input id="role-description" placeholder="Role description" />
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Create Role
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
