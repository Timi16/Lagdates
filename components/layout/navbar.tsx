"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Heart, Home, Menu, MessageCircle, Search, User, Users, MapPin, Calendar } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { name: "Home", href: "/home", icon: Home },
    { name: "Matches", href: "/matches", icon: Heart },
    { name: "Messages", href: "/messages", icon: MessageCircle },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Places", href: "/places", icon: MapPin },
    { name: "Community", href: "/community", icon: Users },
  ]

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    // For this demo, we'll just redirect to the landing page
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FF5A5F]/95 text-white backdrop-blur supports-[backdrop-filter]:bg-[#FF5A5F]/90">
      <div className="container px-2 sm:px-4 flex h-14 items-center">
        <div className="mr-4 flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden bg-white !text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Lag Dates</SheetTitle>
              </SheetHeader>
              <div className="py-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-2 h-10 bg-white !text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/home" className="flex items-center">
          <Heart className="h-5 w-5 mr-2 fill-white" />
          <span className="font-bold text-lg text-white whitespace-nowrap">Lag Dates</span>
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" size="sm" className="text-sm bg-white !text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100 px-2 md:px-3">
                  <item.icon className="mr-1 md:mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">{item.name}</span>
                </Button>
              </Link>
            ))}
          </div>

          <Button variant="ghost" size="icon" className="rounded-full bg-white !text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white !text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-[#FFC1CC] rounded-full flex items-center justify-center">
              <span className="text-[10px] font-medium text-white">3</span>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer bg-white text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white border-none shadow-lg">
              <DropdownMenuLabel className="text-[#FF5A5F] font-bold">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#FF5A5F]/20" />
              <Link href="/profile">
                <DropdownMenuItem className="text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/matches">
                <DropdownMenuItem className="text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100 cursor-pointer">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Matches</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/settings">
                <DropdownMenuItem className="text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator className="bg-[#FF5A5F]/20" />
              <DropdownMenuItem className="!text-red-500 hover:!text-red-600 hover:bg-white/80 active:bg-white/70 transition-colors duration-100 cursor-pointer" onClick={handleLogout}>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
