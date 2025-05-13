"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Heart, MessageCircle, User, Plus } from "lucide-react"

export function MobileNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "Home", href: "/home", icon: Home },
    { name: "Matches", href: "/matches", icon: Heart },
    { name: "Messages", href: "/messages", icon: MessageCircle },
    { name: "Profile", href: "/profile", icon: User },
  ]

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-around relative">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center h-16 w-16 rounded-none ${
                pathname === item.href ? "text-sage-500 border-t-2 border-sage-500 -mt-[2px]" : "text-slate-500"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.name}</span>
            </Button>
          </Link>
        ))}

        {/* Center floating action button */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <Button size="icon" className="h-12 w-12 rounded-full bg-sage-500 hover:bg-sage-600 shadow-md">
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
