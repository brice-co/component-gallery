import { Play, Save, History, Database, Code, Table } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DatabaseQueryBuilder() {
  const queryHistory = [
    { query: "SELECT * FROM users WHERE created_at > '2024-01-01'", time: "2m ago", rows: 1247 },
    { query: "UPDATE products SET price = price * 1.1 WHERE category = 'electronics'", time: "5m ago", rows: 89 },
    { query: "SELECT COUNT(*) FROM orders GROUP BY status", time: "10m ago", rows: 5 },
  ]

  const tables = [
    { name: "users", rows: 15420, columns: 12 },
    { name: "products", rows: 8934, columns: 8 },
    { name: "orders", rows: 45231, columns: 15 },
    { name: "categories", rows: 24, columns: 4 },
  ]

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          SQL Query Builder
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-6">
          {/* Query Editor */}
          <div className="col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span className="text-sm font-medium">Production Database</span>
                <Badge variant="outline">PostgreSQL</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Execute
                </Button>
              </div>
            </div>

            <Textarea
              placeholder="Enter your SQL query here..."
              className="min-h-[200px] font-mono text-sm"
              defaultValue="SELECT u.name, u.email, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.id, u.name, u.email
ORDER BY order_count DESC
LIMIT 10;"
            />

            <Tabs defaultValue="results" className="w-full">
              <TabsList>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="explain">Explain Plan</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="results" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Query executed successfully • 10 rows returned • 0.045s
                  </div>
                  <Badge className="bg-green-100 text-green-700">Success</Badge>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Email</th>
                        <th className="text-left p-3 font-medium">Order Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">John Smith</td>
                        <td className="p-3">john@example.com</td>
                        <td className="p-3">24</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3">Sarah Johnson</td>
                        <td className="p-3">sarah@example.com</td>
                        <td className="p-3">18</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3">Mike Davis</td>
                        <td className="p-3">mike@example.com</td>
                        <td className="p-3">15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-2">
                {queryHistory.map((item, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                      <Badge variant="outline">{item.rows} rows</Badge>
                    </div>
                    <code className="text-sm bg-muted p-2 rounded block">{item.query}</code>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Table className="h-4 w-4" />
                Tables
              </h3>
              <div className="space-y-2">
                {tables.map((table, index) => (
                  <div key={index} className="p-2 border rounded cursor-pointer hover:bg-muted/50">
                    <div className="font-medium text-sm">{table.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {table.rows.toLocaleString()} rows • {table.columns} cols
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <History className="h-4 w-4" />
                Recent Queries
              </h3>
              <div className="space-y-2">
                {queryHistory.slice(0, 3).map((item, index) => (
                  <div key={index} className="p-2 border rounded cursor-pointer hover:bg-muted/50">
                    <div className="text-xs text-muted-foreground mb-1">{item.time}</div>
                    <code className="text-xs line-clamp-2">{item.query.substring(0, 50)}...</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
