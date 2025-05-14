"use client"

import { useEffect, useRef, useState } from "react"
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
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const notificationRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

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
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

          <div className="relative" ref={searchRef}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-white !text-[#FF5A5F] hover:bg-white/80 active:bg-white/70 transition-colors duration-100"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            {showSearch && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-[#FF5A5F]/10 animate-in slide-in-from-top-5 fade-in-20">
                <div className="p-3">
                  <h3 className="font-medium text-[#FF5A5F] mb-2">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FF5A5F]/70" />
                    <input 
                      placeholder="Search for people, events, groups..." 
                      className="w-full pl-9 pr-4 py-2 border border-[#FF5A5F]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]/30"
                    />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">Press Enter to search</div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={notificationRef}>
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
            
            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-[#FF5A5F]/10 animate-in slide-in-from-top-5 fade-in-20">
                <div className="p-3 border-b border-[#FF5A5F]/10">
                  <h3 className="font-medium text-[#FF5A5F]">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[
                    {
                      id: 1,
                      title: "New Match!",
                      message: "You matched with Sophia. Send a message to start a conversation!",
                      time: "Just now",
                      read: false,
                    },
                    {
                      id: 2,
                      title: "Event Reminder",
                      message: "'Coffee Meetup' is starting in 30 minutes at Campus Cafe",
                      time: "30m ago",
                      read: false,
                    },
                    {
                      id: 3,
                      title: "New Message",
                      message: "Alex sent you a new message",
                      time: "1h ago",
                      read: false,
                    },
                    {
                      id: 4,
                      title: "Profile Visit",
                      message: "Someone viewed your profile recently",
                      time: "3h ago",
                      read: true,
                    },
                  ].map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-3 border-b border-[#FF5A5F]/10 hover:bg-[#FF5A5F]/5 transition-colors cursor-pointer ${
                        !notification.read ? 'bg-[#FF5A5F]/5' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-[#FF5A5F]">{notification.title}</h4>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{notification.message}</p>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t border-[#FF5A5F]/10 bg-[#FF5A5F]/5">
                  <button className="w-full text-center text-sm text-[#FF5A5F] py-1 hover:underline">
                    Mark all as read
                  </button>
                </div>
              </div>
            )}
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
