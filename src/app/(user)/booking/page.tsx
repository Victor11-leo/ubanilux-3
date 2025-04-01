"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Car, Check, ChevronLeft, Clock, CreditCard, MapPin, Phone, Shield } from "lucide-react"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("mpesa")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [vehicleReg, setVehicleReg] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Get booking details from URL params
  const id = searchParams.get("id") || "1"
  const dateParam = searchParams.get("date")
  const startTime = searchParams.get("start") || "09:00"
  const endTime = searchParams.get("end") || "17:00"

  const date = dateParam ? new Date(dateParam) : new Date()

  // Calculate duration and price (mock data)
  const calculateDuration = () => {
    const [startHour, startMinute] = startTime.split(":").map(Number)
    const [endHour, endMinute] = endTime.split(":").map(Number)

    let hours = endHour - startHour
    let minutes = endMinute - startMinute

    if (minutes < 0) {
      hours -= 1
      minutes += 60
    }

    return hours + minutes / 60
  }

  const duration = calculateDuration()
  const pricePerHour = 200
  const subtotal = Math.ceil(duration * pricePerHour)
  const serviceFee = 50
  const total = subtotal + serviceFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      router.push(`/booking/confirmation?id=${id}&ref=${Math.random().toString(36).substring(2, 10).toUpperCase()}`)
    }, 2000)
  }

  return (
    <div className="container py-8 max-w-5xl mx-auto px-5">
      <Button variant="ghost" className="mb-6 gap-2" asChild>
        <Link href={`/parking/${id}`}>
          <ChevronLeft className="h-4 w-4" />
          Back to Parking Details
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Complete Your Booking</h1>
        <p className="mt-2 text-muted-foreground">Review your details and make payment to secure your parking spot</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_400px]">
        <div>
          <form onSubmit={handleSubmit}>
            {/* Vehicle Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Vehicle Information
                </CardTitle>
                <CardDescription>Enter your vehicle details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicle-reg">Vehicle Registration Number</Label>
                  <Input
                    id="vehicle-reg"
                    placeholder="e.g., KAA 123A"
                    value={vehicleReg}
                    onChange={(e) => setVehicleReg(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicle-type">Vehicle Type</Label>
                  <select
                    id="vehicle-type"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="sedan"
                  >
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="van">Van</option>
                    <option value="truck">Truck</option>
                    <option value="motorcycle">Motorcycle</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>We'll send your booking confirmation to this contact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g., 0700000000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll send booking confirmation and parking instructions via SMS
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Method
                </CardTitle>
                <CardDescription>Select your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="mobile" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="mobile">Mobile Money</TabsTrigger>
                    <TabsTrigger value="card">Card Payment</TabsTrigger>
                  </TabsList>
                  <TabsContent value="mobile" className="space-y-4 pt-4">
                    <RadioGroup defaultValue="mpesa" value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mpesa" id="mpesa" />
                        <Label htmlFor="mpesa" className="flex items-center gap-2">
                          M-Pesa
                          <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                            Recommended
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="airtel" id="airtel" />
                        <Label htmlFor="airtel">Airtel Money</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tkash" id="tkash" />
                        <Label htmlFor="tkash">T-Kash</Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "mpesa" && (
                      <div className="rounded-md bg-muted p-4">
                        <p className="mb-2 text-sm">Enter the phone number to receive M-Pesa payment prompt</p>
                        <Input
                          placeholder="e.g., 0700000000"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="card" className="space-y-4 pt-4">
                    <div className="rounded-md bg-muted p-4">
                      <p className="text-sm">Card payment will be processed securely through our payment gateway</p>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name on Card</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" size="lg" disabled={isLoading} className="gap-2">
                {isLoading ? "Processing..." : "Complete Booking"}
                {!isLoading && <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </form>
        </div>

        {/* Booking Summary */}
        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <h3 className="mb-2 font-semibold">CBD Parking Plaza</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Central Business District, Nairobi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{format(date, "EEEE, MMMM d, yyyy")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {startTime} - {endTime} ({duration.toFixed(1)} hours)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Parking Fee</span>
                  <span>KSh {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Fee</span>
                  <span>KSh {serviceFee}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>KSh {total}</span>
                </div>
              </div>

              <div className="space-y-2 rounded-md bg-primary/10 p-4 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Free cancellation up to 1 hour before your booking</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Your spot is guaranteed upon successful payment</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>You'll receive a QR code for easy check-in</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Secure payment · 24/7 customer support</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

