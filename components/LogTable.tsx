import React from "react";

// Assuming Card, Table, etc. components are imported or defined elsewhere
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const LogTable = () => {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Vehicle Maintenance</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Track your vehicle's mileage, costs, and maintenance tasks.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Mileage</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Task</TableHead>
                <TableHead>Optional Info</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-04-15</TableCell>
                <TableCell>12,345</TableCell>
                <TableCell>$50.00</TableCell>
                <TableCell>Oil Change</TableCell>
                <TableCell>Synthetic oil, filter replaced</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LogTable;
