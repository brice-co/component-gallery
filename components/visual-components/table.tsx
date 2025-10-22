import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TableComponent() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Data Table</CardTitle>
        <CardDescription>A list of recent transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>
                <Badge variant="default">Completed</Badge>
              </TableCell>
              <TableCell>2024-01-15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#002</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>$150.00</TableCell>
              <TableCell>
                <Badge variant="secondary">Pending</Badge>
              </TableCell>
              <TableCell>2024-01-14</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#003</TableCell>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>$75.00</TableCell>
              <TableCell>
                <Badge variant="destructive">Failed</Badge>
              </TableCell>
              <TableCell>2024-01-13</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
