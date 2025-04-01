import type React from "react"
import type { ReactNode } from "react"
import Link from "next/link"
import {
  BarChart3,
  CalendarClock,
  Car,
  CreditCard,
  Home,
  LayoutDashboard,
  LogOut,
  MapPin,
  Settings,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <div className="rounded-md bg-primary p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary-foreground"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 17h6" />
              <path d="M12 6v7" />
            </svg>
          </div>
          <span>Nai Park Admin</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="gap-1">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline-block">View Site</span>
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Admin User" />
                  <AvatarFallback>AU</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 shrink-0 border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1 py-2">
              <NavLink href="/admin" icon={LayoutDashboard}>
                Dashboard
              </NavLink>
              <NavLink href="/admin/parking-spots" icon={MapPin}>
                Parking Spots
              </NavLink>
              <NavLink href="/admin/bookings" icon={CalendarClock}>
                Bookings
              </NavLink>
              <NavLink href="/admin/earnings" icon={BarChart3}>
                Earnings
              </NavLink>
              <NavLink href="/admin/customers" icon={Users}>
                Customers
              </NavLink>
              <NavLink href="/admin/payments" icon={CreditCard}>
                Payments
              </NavLink>
              <NavLink href="/admin/vehicles" icon={Car}>
                Vehicles
              </NavLink>
              <NavLink href="/admin/settings" icon={Settings}>
                Settings
              </NavLink>
            </nav>
            <Separator className="my-4" />
            <div className="mt-auto">
              <div className="rounded-lg border bg-card p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Admin User" />
                    <AvatarFallback>AU</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Parking Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

interface NavLinkProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}

function NavLink({ href, icon: Icon, children }: NavLinkProps) {
  // In a real app, you'd use a router hook to determine if the link is active
  const isActive = false

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </Link>
  )
}

