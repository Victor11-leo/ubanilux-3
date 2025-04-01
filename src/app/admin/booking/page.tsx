"use client"

import { useState } from "react"
import {
  ArrowUpDown,
  Calendar,
  Car,
  Check,
  Clock,
  Download,
  Eye,
  Filter,
  MapPin,
  MoreHorizontal,
  Search,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

// Mock data for bookings
const bookings = [
  {
    id: "B-12345",
    customer: {
      name: "John Kamau",
      phone: "+254 700 123 456",
      email: "john.kamau@example.com",
    },
    parkingSpot: {
      name: "CBD Parking Plaza",
      location: "Central Business District",
    },
    vehicle: {
      regNumber: "KAA 123A",
      type: "Sedan",
    },
    dateTime: {
      date: "2024-03-22",
      startTime: "09:00",
      endTime: "17:00",
      duration: 8,
    },
    payment: {
      amount: 1650,
      status: "paid",
      method: "M-Pesa",
    },
    status: "active",
  },
  {
    id: "B-12344",
    customer: {
      name: "Sarah Wanjiku",
      phone: "+254 700 234 567",
      email: "sarah.wanjiku@example.com",
    },
    parkingSpot: {
      name: "Westlands Secure Parking",
      location: "Westlands",
    },
    vehicle: {
      regNumber: "KBB 456B",
      type: "SUV",
    },
    dateTime: {
      date: "2024-03-22",
      startTime: "10:30",
      endTime: "14:30",
      duration: 4,
    },
    payment: {
      amount: 650,
      status: "paid",
      method: "Card",
    },
    status: "active",
  },
  {
    id: "B-12343",
    customer: {
      name: "Michael Omondi",
      phone: "+254 700 345 678",
      email: "michael.omondi@example.com",
    },
    parkingSpot: {
      name: "Kilimani Parking Complex",
      location: "Kilimani",
    },
    vehicle: {
      regNumber: "KCC 789C",
      type: "Sedan",
    },
    dateTime: {
      date: "2024-03-21",
      startTime: "08:00",
      endTime: "18:00",
      duration: 10,
    },
    payment: {
      amount: 1850,
      status: "paid",
      method: "M-Pesa",
    },
    status: "completed",
  },
  {
    id: "B-12342",
    customer: {
      name: "Jane Muthoni",
      phone: "+254 700 456 789",
      email: "jane.muthoni@example.com",
    },
    parkingSpot: {
      name: "CBD Parking Plaza",
      location: "Central Business District",
    },
    vehicle: {
      regNumber: "KDD 012D",
      type: "Hatchback",
    },
    dateTime: {
      date: "2024-03-21",
      startTime: "12:00",
      endTime: "15:00",
      duration: 3,
    },
    payment: {
      amount: 650,
      status: "paid",
      method: "M-Pesa",
    },
    status: "completed",
  },
  {
    id: "B-12341",
    customer: {
      name: "David Njoroge",
      phone: "+254 700 567 890",
      email: "david.njoroge@example.com",
    },
    parkingSpot: {
      name: "Upperhill Business Center",
      location: "Upperhill",
    },
    vehicle: {
      regNumber: "KEE 345E",
      type: "SUV",
    },
    dateTime: {
      date: "2024-03-20",
      startTime: "09:00",
      endTime: "17:00",
      duration: 8,
    },
    payment: {
      amount: 1850,
      status: "paid",
      method: "Card",
    },
    status: "completed",
  },
  {
    id: "B-12340",
    customer: {
      name: "Lucy Wambui",
      phone: "+254 700 678 901",
      email: "lucy.wambui@example.com",
    },
    parkingSpot: {
      name: "Gigiri Embassy Parking",
      location: "Gigiri",
    },
    vehicle: {
      regNumber: "KFF 678F",
      type: "Sedan",
    },
    dateTime: {
      date: "2024-03-20",
      startTime: "10:00",
      endTime: "16:00",
      duration: 6,
    },
    payment: {
      amount: 1550,
      status: "paid",
      method: "M-Pesa",
    },
    status: "completed",
  },
  {
    id: "B-12339",
    customer: {
      name: "Peter Kimani",
      phone: "+254 700 789 012",
      email: "peter.kimani@example.com",
    },
    parkingSpot: {
      name: "Karen Shopping Center",
      location: "Karen",
    },
    vehicle: {
      regNumber: "KGG 901G",
      type: "Van",
    },
    dateTime: {
      date: "2024-03-23",
      startTime: "09:00",
      endTime: "12:00",
      duration: 3,
    },
    payment: {
      amount: 410,
      status: "pending",
      method: "M-Pesa",
    },
    status: "upcoming",
  },
]

export default function BookingsPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
          <p className="text-muted-foreground">View and manage all parking bookings.</p>
        </div>
        <Button variant="outline" className="gap-1">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search by ID, customer, or vehicle..." className="pl-10" />
        </div>
        <div className="flex gap-2">
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
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-1">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
          </Button>
        </div>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardHeader className="px-6 py-4">
          <CardTitle>All Bookings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <Button variant="ghost" className="gap-1 font-medium">
                    ID
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="gap-1 font-medium">
                    Customer
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="gap-1 font-medium">
                    Parking Spot
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="gap-1 font-medium">
                    Vehicle
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="gap-1 font-medium">
                    Date & Time
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="gap-1 font-medium">
                    Payment
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {booking.customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{booking.customer.name}</div>
                        <div className="text-xs text-muted-foreground">{booking.customer.phone}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{booking.parkingSpot.name}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{booking.parkingSpot.location}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <span>{booking.vehicle.regNumber}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{booking.vehicle.type}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{format(new Date(booking.dateTime.date), "dd MMM yyyy")}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>
                        {booking.dateTime.startTime} - {booking.dateTime.endTime} ({booking.dateTime.duration}h)
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">KSh {booking.payment.amount}</div>
                    <div className="flex items-center gap-1 text-xs">
                      <Badge
                        variant="outline"
                        className={
                          booking.payment.status === "paid"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }
                      >
                        {booking.payment.status === "paid" ? "Paid" : "Pending"}
                      </Badge>
                      <span className="text-muted-foreground">{booking.payment.method}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        booking.status === "active"
                          ? "bg-green-500/10 text-green-500"
                          : booking.status === "upcoming"
                            ? "bg-blue-500/10 text-blue-500"
                            : booking.status === "completed"
                              ? "bg-gray-500/10 text-gray-500"
                              : "bg-red-500/10 text-red-500"
                      }
                    >
                      {booking.status === "active"
                        ? "Active"
                        : booking.status === "upcoming"
                          ? "Upcoming"
                          : booking.status === "completed"
                            ? "Completed"
                            : "Cancelled"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Check className="mr-2 h-4 w-4" />
                          <span>Mark as Completed</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                          <X className="mr-2 h-4 w-4" />
                          <span>Cancel Booking</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="text-sm text-muted-foreground">
            Showing <strong>7</strong> of <strong>7</strong> bookings
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

