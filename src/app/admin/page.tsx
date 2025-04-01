import type React from "react"
import {
  ArrowDown,
  ArrowUp,
  CalendarClock,
  Car,
  CircleDollarSign,
  Clock,
  MapPin,
  MoreHorizontal,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your parking business performance and recent activities.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Download Report</Button>
          <Button>Add Parking Spot</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="KSh 245,500"
          description="This month"
          trend="up"
          percentage="12.5%"
          icon={CircleDollarSign}
        />
        <StatsCard
          title="Active Bookings"
          value="38"
          description="Current"
          trend="up"
          percentage="8.2%"
          icon={CalendarClock}
        />
        <StatsCard
          title="Parking Spots"
          value="142"
          description="Total spots"
          trend="up"
          percentage="4.3%"
          icon={MapPin}
        />
        <StatsCard
          title="Customers"
          value="1,245"
          description="Total users"
          trend="up"
          percentage="18.7%"
          icon={Users}
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Daily revenue for the current month</CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Download Data</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-lg bg-muted/60 flex items-center justify-center">
              <p className="text-muted-foreground">Revenue chart would be displayed here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Parking Spot Occupancy</CardTitle>
            <CardDescription>Current occupancy by location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-lg bg-muted/60 flex items-center justify-center">
              <p className="text-muted-foreground">Occupancy chart would be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Tabs defaultValue="bookings" className="ml-auto">
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest bookings and transactions</CardDescription>
          </div>
            <TabsList>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>      
        </CardHeader>
        <CardContent>
          <TabsContent value="bookings" className="m-0">
            <div className="space-y-4">
              {[
                {
                  id: "B-12345",
                  customer: "John Kamau",
                  location: "CBD Parking Plaza",
                  vehicle: "KAA 123A",
                  time: "09:00 - 17:00",
                  date: "Today",
                  status: "active",
                },
                {
                  id: "B-12344",
                  customer: "Sarah Wanjiku",
                  location: "Westlands Secure Parking",
                  vehicle: "KBB 456B",
                  time: "10:30 - 14:30",
                  date: "Today",
                  status: "active",
                },
                {
                  id: "B-12343",
                  customer: "Michael Omondi",
                  location: "Kilimani Parking Complex",
                  vehicle: "KCC 789C",
                  time: "08:00 - 18:00",
                  date: "Yesterday",
                  status: "completed",
                },
                {
                  id: "B-12342",
                  customer: "Jane Muthoni",
                  location: "CBD Parking Plaza",
                  vehicle: "KDD 012D",
                  time: "12:00 - 15:00",
                  date: "Yesterday",
                  status: "completed",
                },
                {
                  id: "B-12341",
                  customer: "David Njoroge",
                  location: "Upperhill Business Center",
                  vehicle: "KEE 345E",
                  time: "09:00 - 17:00",
                  date: "2 days ago",
                  status: "completed",
                },
              ].map((booking) => (
                <div
                  key={booking.id}
                  className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {booking.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{booking.customer}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Car className="h-3.5 w-3.5" />
                        <span>{booking.vehicle}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="min-w-[120px]">
                      <p className="text-sm font-medium">{booking.location}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{booking.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={booking.status === "active" ? "default" : "outline"}
                        className={booking.status === "active" ? "bg-green-500" : ""}
                      >
                        {booking.status === "active" ? "Active" : "Completed"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{booking.date}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="transactions" className="m-0">
            <div className="space-y-4">
              {[
                {
                  id: "T-54321",
                  customer: "John Kamau",
                  amount: "KSh 1,600",
                  method: "M-Pesa",
                  date: "Today, 08:45 AM",
                  status: "successful",
                },
                {
                  id: "T-54320",
                  customer: "Sarah Wanjiku",
                  amount: "KSh 600",
                  method: "M-Pesa",
                  date: "Today, 10:15 AM",
                  status: "successful",
                },
                {
                  id: "T-54319",
                  customer: "Michael Omondi",
                  amount: "KSh 1,800",
                  method: "Card",
                  date: "Yesterday, 07:30 AM",
                  status: "successful",
                },
                {
                  id: "T-54318",
                  customer: "Jane Muthoni",
                  amount: "KSh 450",
                  method: "M-Pesa",
                  date: "Yesterday, 11:45 AM",
                  status: "successful",
                },
                {
                  id: "T-54317",
                  customer: "David Njoroge",
                  amount: "KSh 1,600",
                  method: "Card",
                  date: "2 days ago, 08:30 AM",
                  status: "successful",
                },
              ].map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {transaction.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{transaction.customer}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{transaction.id}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="min-w-[100px]">
                      <p className="text-sm font-medium">{transaction.amount}</p>
                      <p className="text-xs text-muted-foreground">{transaction.method}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        Successful
                      </Badge>
                      <span className="text-sm text-muted-foreground">{transaction.date}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Activity
          </Button>
        </CardFooter>
      </Card>
      </Tabs>
    </div>
  )
}

interface StatsCardProps {
  title: string
  value: string
  description: string
  trend: "up" | "down" | "neutral"
  percentage: string
  icon: React.ComponentType<{ className?: string }>
}

function StatsCard({ title, value, description, trend, percentage, icon: Icon }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        <div className="mt-3 flex items-center gap-1 text-xs">
          {trend === "up" ? (
            <Badge variant="outline" className="bg-green-500/10 text-green-500 gap-1">
              <ArrowUp className="h-3 w-3" />
              {percentage}
            </Badge>
          ) : trend === "down" ? (
            <Badge variant="outline" className="bg-red-500/10 text-red-500 gap-1">
              <ArrowDown className="h-3 w-3" />
              {percentage}
            </Badge>
          ) : null}
          <span className="text-muted-foreground">vs. last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

