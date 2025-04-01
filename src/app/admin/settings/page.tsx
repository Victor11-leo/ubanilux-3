"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { CreditCard, Globe, Lock, Save, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full justify-start border-b bg-transparent p-0">
          <TabsTrigger
            value="general"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="parking"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Parking Spots
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Billing
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Security
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="pt-6">
          <div className="grid gap-6 md:grid-cols-[1fr_250px]">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Update your company details and contact information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="Nai Park Ltd" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-type">Business Type</Label>
                    <Select defaultValue="parking">
                      <SelectTrigger id="business-type">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parking">Parking Management</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="transportation">Transportation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" type="email" defaultValue="info@naipark.co.ke" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Contact Phone</Label>
                    <Input id="contact-phone" defaultValue="+254 700 000 000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea id="address" defaultValue="Kimathi Street, Nairobi CBD, Kenya" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="Nairobi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="kenya">
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kenya">Kenya</SelectItem>
                        <SelectItem value="uganda">Uganda</SelectItem>
                        <SelectItem value="tanzania">Tanzania</SelectItem>
                        <SelectItem value="rwanda">Rwanda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isLoading} className="gap-1">
                  {isLoading ? "Saving..." : "Save Changes"}
                  {!isLoading && <Save className="h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Logo</CardTitle>
                  <CardDescription>Upload your company logo.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="Company Logo" />
                      <AvatarFallback>NP</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Logo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Status</CardTitle>
                  <CardDescription>Your current account status.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Plan</div>
                      <div className="text-sm">Business</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Billing Cycle</div>
                      <div className="text-sm">Monthly</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Next Billing</div>
                      <div className="text-sm">April 15, 2024</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Upgrade Plan
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Parking Spots Settings */}
        <TabsContent value="parking" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Parking Spot Settings</CardTitle>
              <CardDescription>Configure default settings for your parking spots.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Default Pricing</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="hourly-rate">Hourly Rate (KSh)</Label>
                    <Input id="hourly-rate" type="number" defaultValue="200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="daily-rate">Daily Rate (KSh)</Label>
                    <Input id="daily-rate" type="number" defaultValue="1500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthly-rate">Monthly Rate (KSh)</Label>
                    <Input id="monthly-rate" type="number" defaultValue="15000" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Booking Settings</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="min-duration">Minimum Booking Duration (hours)</Label>
                    <Input id="min-duration" type="number" defaultValue="1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-duration">Maximum Booking Duration (hours)</Label>
                    <Input id="max-duration" type="number" defaultValue="24" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="advance-booking">Maximum Advance Booking (days)</Label>
                    <Input id="advance-booking" type="number" defaultValue="30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cancellation-time">Free Cancellation Period (hours)</Label>
                    <Input id="cancellation-time" type="number" defaultValue="1" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Service Fees</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="booking-fee">Booking Fee (KSh)</Label>
                    <Input id="booking-fee" type="number" defaultValue="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service-percentage">Service Fee Percentage (%)</Label>
                    <Input id="service-percentage" type="number" defaultValue="5" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Operating Hours</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="opening-time">Default Opening Time</Label>
                    <Select defaultValue="00:00">
                      <SelectTrigger id="opening-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="00:00">00:00 (24/7)</SelectItem>
                        <SelectItem value="06:00">06:00 AM</SelectItem>
                        <SelectItem value="07:00">07:00 AM</SelectItem>
                        <SelectItem value="08:00">08:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="closing-time">Default Closing Time</Label>
                    <Select defaultValue="00:00">
                      <SelectTrigger id="closing-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="00:00">00:00 (24/7)</SelectItem>
                        <SelectItem value="18:00">06:00 PM</SelectItem>
                        <SelectItem value="20:00">08:00 PM</SelectItem>
                        <SelectItem value="22:00">10:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="24-7" defaultChecked />
                  <Label htmlFor="24-7">Enable 24/7 operation by default</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave} disabled={isLoading} className="gap-1">
                {isLoading ? "Saving..." : "Save Changes"}
                {!isLoading && <Save className="h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Billing Settings */}
        <TabsContent value="billing" className="pt-6">
          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods and billing information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                        <CreditCard className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">M-Pesa Business Till</div>
                        <div className="text-sm text-muted-foreground">Till Number: 123456</div>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Credit Card</div>
                        <div className="text-sm text-muted-foreground">Visa ending in 4242</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Set as Default
                    </Button>
                  </div>
                </div>

                <Button variant="outline" className="gap-1">
                  <CreditCard className="h-4 w-4" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                  <CardDescription>Your billing details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Billing Contact</div>
                    <div className="text-sm">John Doe</div>
                    <div className="text-sm">finance@naipark.co.ke</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Billing Address</div>
                    <div className="text-sm">Kimathi Street</div>
                    <div className="text-sm">Nairobi, Kenya</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Update Billing Info
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscription</CardTitle>
                  <CardDescription>Your current plan and usage.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Plan</div>
                    <div className="text-sm">Business</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Price</div>
                    <div className="text-sm">KSh 5,000/month</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Renewal</div>
                    <div className="text-sm">April 15, 2024</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Change Plan
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-bookings">New Bookings</Label>
                      <p className="text-xs text-muted-foreground">Receive an email when a new booking is made</p>
                    </div>
                    <Switch id="email-bookings" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-cancellations">Cancellations</Label>
                      <p className="text-xs text-muted-foreground">Receive an email when a booking is cancelled</p>
                    </div>
                    <Switch id="email-cancellations" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-payments">Payment Confirmations</Label>
                      <p className="text-xs text-muted-foreground">Receive an email when a payment is processed</p>
                    </div>
                    <Switch id="email-payments" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-reports">Weekly Reports</Label>
                      <p className="text-xs text-muted-foreground">Receive weekly summary reports of your business</p>
                    </div>
                    <Switch id="email-reports" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">SMS Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-bookings">New Bookings</Label>
                      <p className="text-xs text-muted-foreground">Receive an SMS when a new booking is made</p>
                    </div>
                    <Switch id="sms-bookings" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-cancellations">Cancellations</Label>
                      <p className="text-xs text-muted-foreground">Receive an SMS when a booking is cancelled</p>
                    </div>
                    <Switch id="sms-cancellations" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-payments">Payment Confirmations</Label>
                      <p className="text-xs text-muted-foreground">Receive an SMS when a payment is processed</p>
                    </div>
                    <Switch id="sms-payments" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">System Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="system-alerts">System Alerts</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive notifications about system updates and maintenance
                      </p>
                    </div>
                    <Switch id="system-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="security-alerts">Security Alerts</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive notifications about security-related events
                      </p>
                    </div>
                    <Switch id="security-alerts" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSave} disabled={isLoading} className="gap-1">
                {isLoading ? "Saving..." : "Save Changes"}
                {!isLoading && <Save className="h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="pt-6">
          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and authentication methods.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Change Password</h3>
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="gap-1">
                    <Lock className="h-4 w-4" />
                    Update Password
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enable-2fa">Enable Two-Factor Authentication</Label>
                      <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="enable-2fa" />
                  </div>
                  <Button variant="outline" className="gap-1">
                    <Lock className="h-4 w-4" />
                    Set Up Two-Factor Authentication
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Session Management</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Current Session</div>
                        <div className="text-xs text-muted-foreground">
                          Nairobi, Kenya · Chrome on Windows · Started 2 hours ago
                        </div>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-1">
                    <Lock className="h-4 w-4" />
                    Log Out All Other Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Access</CardTitle>
                  <CardDescription>Manage who has access to your account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-xs text-muted-foreground">Admin</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>JM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Muthoni</div>
                        <div className="text-xs text-muted-foreground">Manager</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full gap-1">
                    <User className="h-4 w-4" />
                    Manage Users
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Access</CardTitle>
                  <CardDescription>Manage API keys and access.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">API Key Status</div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        Active
                      </Badge>
                      <span className="text-xs text-muted-foreground">Created 30 days ago</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full gap-1">
                    <Globe className="h-4 w-4" />
                    Manage API Keys
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

