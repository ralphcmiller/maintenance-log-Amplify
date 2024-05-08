"use client";
import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

// Assuming this is how you define your Schema type in TypeScript
interface LogItem {
  id?: string;
  date?: string | null;
  mileage?: string | null;
  cost?: string | null;
  task?: string | null;
  optionalInfo?: string | null;
}

const client = generateClient<Schema>();

const LogTable = () => {
  const [logItems, setLogItems] = useState<LogItem[]>([]);

  const fetchLogItems = async () => {
    try {
      const { data: items } = await client.models.LogItem.list(); // Assumes no errors for simplicity
      setLogItems(items as LogItem[]);
    } catch (error) {
      console.log("Error fetching log items: ", error);
    }
  };

  useEffect(() => {
    fetchLogItems();
  }, []);

  const deleteLogItem = async (logItemId: string) => {
    await client.models.LogItem.delete({ id: logItemId });
    fetchLogItems(); // Refresh the log items list after deletion
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Vehicle Maintenance</h1>
        <p className="text-gray-500">
          Track your vehicle&apos;s mileage, costs, and maintenance tasks.
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
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date || "N/A"}</TableCell>
                  <TableCell>{item.mileage || "N/A"}</TableCell>
                  <TableCell>{item.cost || "N/A"}</TableCell>
                  <TableCell>{item.task || "N/A"}</TableCell>
                  <TableCell>{item.optionalInfo || "N/A"}</TableCell>
                  <TableCell>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => deleteLogItem(item.id!)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {logItems.length === 0 && (
            <div className="text-center text-gray-500 mt-4">
              No log items found.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LogTable;
