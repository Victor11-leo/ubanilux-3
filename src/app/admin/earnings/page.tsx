"use client"

import { ArrowUp, Calendar, Download, Filter, LineChart, PieChart, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useState } from "react"

// Mock data for earnings
const earningsSummary = {
  total: 245500,
  previous: 218000,
  percentageChange: 12.6,
  breakdown: {
    cbd: 98200,
    westlands: 73650,
    kilimani: 49100,
    upperhill: 24550,
  },
  byPaymentMethod: {
    mpesa: 171850,
    card: 73650,
  },
}

// Mock data for transactions
const transactions = [
  {
    id: "T-54321",
    date: "2024-03-22",
    time: "08:45",
    customer: "John Kamau",
    parkingSpot: "CBD Parking Plaza",
    amount: 1600,
    method: "M-Pesa",
    status: "successful",
  },
  {
    id: "T-54320",
    date: "2024-03-22",
    time: "10:15",
    customer: "Sarah Wanjiku",
    parkingSpot: "Westlands Secure Parking",
    amount: 600,
    method: "M-Pesa",
    status: "successful",
  },
  {
    id: "T-54319",
    date: "2024-03-21",
    time: "07:30",
    customer: "Michael Omondi",
    parkingSpot: "Kilimani Parking Complex",
    amount: 1800,
    method: "Card",
    status: "successful",
  },
  {
    id: "T-54318",
    date: "2024-03-21",
    time: "11:45",
    customer: "Jane Muthoni",
    parkingSpot: "CBD Parking Plaza",
    amount: 450,
    method: "M-Pesa",
    status: "successful",
  },
  {
    id: "T-54317",
    date: "2024-03-20",
    time: "08:30",
    customer: "David Njoroge",
    parkingSpot: "Upperhill Business Center",
    amount: 1600,
    method: "Card",
    status: "successful",
  },
  {
    id: "T-54316",
    date: "2024-03-20",
    time: "09:15",
    customer: "Lucy Wambui",
    parkingSpot: "Gigiri Embassy Parking",
    amount: 1500,
    method: "M-Pesa",
    status: "successful",
  },
  {
    id: "T-54315",
    date: "2024-03-19",
    time: "14:30",
    customer: "Peter Kimani",
    parkingSpot: "Karen Shopping Center",
    amount: 360,
    method: "M-Pesa",
    status: "successful",
  },
]

export default function EarningsPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Earnings</h1>
          <p className="text-muted-foreground">Track your revenue and financial performance.</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Earnings Summary */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KSh {earningsSummary.total.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This month</p>
            <div className="mt-3 flex items-center gap-1 text-xs">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 gap-1">
                <ArrowUp className="h-3 w-3" />
                {earningsSummary.percentageChange}%
              </Badge>
              <span className="text-muted-foreground">vs. last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue by Location</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm">CBD</div>
              <div className="font-medium">KSh {earningsSummary.breakdown.cbd.toLocaleString()}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">Westlands</div>
              <div className="font-medium">KSh {earningsSummary.breakdown.westlands.toLocaleString()}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">Kilimani</div>
              <div className="font-medium">KSh {earningsSummary.breakdown.kilimani.toLocaleString()}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">Upperhill</div>
              <div className="font-medium">KSh {earningsSummary.breakdown.upperhill.toLocaleString()}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Total</div>
                    <div className="text-xl font-bold">KSh {earningsSummary.total.toLocaleString()}</div>
                  </div>
                </div>
                <div className="h-full w-full rounded-full bg-muted/60">
                  {/* This would be a real chart in a production app */}
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <div className="text-sm">M-Pesa</div>
                </div>
                <div className="font-medium">KSh {earningsSummary.byPaymentMethod.mpesa.toLocaleString()}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
                  <div className="text-sm">Card</div>
                </div>
                <div className="font-medium">KSh {earningsSummary.byPaymentMethod.card.toLocaleString()}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KSh 8,183</div>
            <p className="text-xs text-muted-foreground">Per day this month</p>
            <div className="mt-3 flex items-center gap-1 text-xs">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 gap-1">
                <ArrowUp className="h-3 w-3" />
                5.2%
              </Badge>
              <span className="text-muted-foreground">vs. last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Daily revenue for the current month</CardDescription>
            </div>
            <Select defaultValue="month">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full rounded-lg bg-muted/60 flex items-center justify-center">
            <LineChart className="h-8 w-8 text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Revenue chart would be displayed here</span>
          </div>
        </CardContent>
      </Card>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Button variant="outline" className="gap-1">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Parking Spot</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>
                    {format(new Date(`${transaction.date}T${transaction.time}`), "dd MMM yyyy, HH:mm")}
                  </TableCell>
                  <TableCell>{transaction.customer}</TableCell>
                  <TableCell>{transaction.parkingSpot}</TableCell>
                  <TableCell>KSh {transaction.amount.toLocaleString()}</TableCell>
                  <TableCell>{transaction.method}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        transaction.status === "successful"
                          ? "bg-green-500/10 text-green-500"
                          : transaction.status === "pending"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-red-500/10 text-red-500"
                      }
                    >
                      {transaction.status === "successful"
                        ? "Successful"
                        : transaction.status === "pending"
                          ? "Pending"
                          : "Failed"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t">
          <div className="text-sm text-muted-foreground">
            Showing <strong>7</strong> of <strong>120</strong> transactions
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Revenue by Category */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Location</CardTitle>
            <CardDescription>Distribution of revenue across parking locations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-lg bg-muted/60 flex items-center justify-center">
              <PieChart className="h-8 w-8 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Location chart would be displayed here</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue by Time of Day</CardTitle>
            <CardDescription>When your parking spots generate the most revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-lg bg-muted/60 flex items-center justify-center">
              <LineChart className="h-8 w-8 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Time chart would be displayed here</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

