"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { MobileNav } from "@/components/layout/mobile-nav"
import { SplashScreen } from "@/components/splash-screen"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Calendar,
  ChevronRight,
  Coffee,
  Film,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  Plus,
  Search,
  Star,
  Sparkles,
  Users,
  Zap,
} from "lucide-react"

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)

  // Check if this is the first visit in this session
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited")
    if (hasVisited) {
      setShowSplash(false)
    } else {
      sessionStorage.setItem("hasVisited", "true")
    }
  }, [])

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />

        <main className="flex-1 container mx-auto py-4 px-4 md:py-8">
          {/* Welcome Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Hey, Jessica! 👋</h1>
              <p className="text-slate-500">Ready to make some connections today?</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5 text-slate-600" />
                <span className="sr-only">Search</span>
              </Button>
              <div className="relative">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bell className="h-5 w-5 text-slate-600" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-medium text-white">3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Feed and Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Profile Views", value: "128", icon: Users, color: "bg-sage-100 text-sage-600" },
                  { label: "Matches", value: "24", icon: Heart, color: "bg-coral-100 text-coral-600" },
                  { label: "Messages", value: "12", icon: MessageCircle, color: "bg-slate-100 text-slate-600" },
                  { label: "Likes", value: "36", icon: Star, color: "bg-amber-100 text-amber-600" },
                ].map((stat, i) => (
                  <Card key={i} className="border-none shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className={`${stat.color} p-2 rounded-full mb-2`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Discover Section */}
              <Card className="border-sage-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">Discover</CardTitle>
                    <Button variant="ghost" size="sm" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                      See All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: "Emma",
                        age: 21,
                        distance: "2 miles",
                        mutual: 3,
                        image: "/placeholder.svg?height=300&width=200",
                      },
                      {
                        name: "Michael",
                        age: 22,
                        distance: "1 mile",
                        mutual: 5,
                        image: "/placeholder.svg?height=300&width=200",
                      },
                      {
                        name: "Sophia",
                        age: 20,
                        distance: "3 miles",
                        mutual: 2,
                        image: "/placeholder.svg?height=300&width=200",
                      },
                    ].map((profile, i) => (
                      <div key={i} className="relative group cursor-pointer">
                        <div className="aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden">
                          <img
                            src={profile.image || "/placeholder.svg"}
                            alt={profile.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                          <h3 className="text-white font-medium">
                            {profile.name}, {profile.age}
                          </h3>
                          <div className="flex items-center text-white/80 text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{profile.distance}</span>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" className="h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-sm">
                            <Heart className="h-4 w-4 text-coral-500" />
                          </Button>
                        </div>
                        <Badge className="absolute top-2 left-2 bg-sage-500">{profile.mutual} mutual interests</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button className="w-full bg-sage-500 hover:bg-sage-600">
                    <Zap className="mr-2 h-4 w-4" />
                    Find More Matches
                  </Button>
                </CardFooter>
              </Card>

              {/* Activity Feed */}
              <Card className="border-sage-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">Activity</CardTitle>
                    <Button variant="ghost" size="sm" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      type: "match",
                      user: "Emma",
                      time: "2 hours ago",
                      icon: Heart,
                      color: "bg-coral-100 text-coral-600",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      type: "message",
                      user: "Michael",
                      time: "5 hours ago",
                      icon: MessageCircle,
                      color: "bg-slate-100 text-slate-600",
                      message: "Would you like to grab coffee sometime?",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      type: "like",
                      user: "Sophia",
                      time: "Yesterday",
                      icon: Star,
                      color: "bg-amber-100 text-amber-600",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      type: "event",
                      event: "Coffee Chat Mixer",
                      time: "Tomorrow, 3:00 PM",
                      icon: Calendar,
                      color: "bg-sage-100 text-sage-600",
                    },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50">
                      {activity.image ? (
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={activity.image || "/placeholder.svg"} alt={activity.user || ""} />
                          <AvatarFallback>{activity.user?.[0] || "E"}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className={`${activity.color} p-2 rounded-full shrink-0`}>
                          <activity.icon className="h-4 w-4" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            {activity.type === "match" && (
                              <p className="font-medium text-slate-800">
                                You matched with <span className="text-coral-600">{activity.user}</span>
                              </p>
                            )}
                            {activity.type === "message" && (
                              <p className="font-medium text-slate-800">
                                <span className="text-slate-700">{activity.user}</span> sent you a message
                              </p>
                            )}
                            {activity.type === "like" && (
                              <p className="font-medium text-slate-800">
                                <span className="text-amber-600">{activity.user}</span> liked your profile
                              </p>
                            )}
                            {activity.type === "event" && (
                              <p className="font-medium text-slate-800">
                                Upcoming event: <span className="text-sage-600">{activity.event}</span>
                              </p>
                            )}
                            {activity.message && <p className="text-sm text-slate-600 mt-1">{activity.message}</p>}
                          </div>
                          <span className="text-xs text-slate-500 whitespace-nowrap ml-2">{activity.time}</span>
                        </div>
                        {activity.type === "match" && (
                          <div className="mt-2 flex gap-2">
                            <Button size="sm" className="bg-sage-500 hover:bg-sage-600">
                              Send Message
                            </Button>
                            <Button size="sm" variant="outline" className="border-slate-200">
                              View Profile
                            </Button>
                          </div>
                        )}
                        {activity.type === "message" && (
                          <div className="mt-2">
                            <Button size="sm" className="bg-sage-500 hover:bg-sage-600">
                              Reply
                            </Button>
                          </div>
                        )}
                        {activity.type === "like" && (
                          <div className="mt-2 flex gap-2">
                            <Button size="sm" className="bg-coral-500 hover:bg-coral-600">
                              Like Back
                            </Button>
                            <Button size="sm" variant="outline" className="border-slate-200">
                              View Profile
                            </Button>
                          </div>
                        )}
                        {activity.type === "event" && (
                          <div className="mt-2">
                            <Button size="sm" className="bg-sage-500 hover:bg-sage-600">
                              RSVP
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Events, Places, Communities */}
            <div className="space-y-6">
              {/* Premium Upgrade Card */}
              <Card className="border-none bg-gradient-to-r from-sage-500 to-sage-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">Upgrade to Premium</h3>
                  </div>
                  <p className="mb-4 text-white/90">
                    Get unlimited matches, see who likes you, and more premium features.
                  </p>
                  <Button className="w-full bg-white text-sage-700 hover:bg-white/90">Upgrade Now</Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-sage-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Upcoming Events</CardTitle>
                    <Link href="/events">
                      <Button variant="ghost" size="sm" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                        View All
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      title: "Coffee Chat Mixer",
                      date: "May 15, 2025",
                      time: "3:00 PM",
                      location: "Campus Coffee House",
                      icon: Coffee,
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      title: "Movie Night Meetup",
                      date: "May 28, 2025",
                      time: "7:30 PM",
                      location: "Student Center",
                      icon: Film,
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      title: "Concert Connections",
                      date: "May 25, 2025",
                      time: "8:00 PM",
                      location: "Amphitheater",
                      icon: Music,
                      image: "/placeholder.svg?height=40&width=40",
                    },
                  ].map((event, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                      <div className="bg-slate-100 h-10 w-10 rounded-lg overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-800 truncate">{event.title}</h4>
                        <p className="text-xs text-slate-500">
                          {event.date}, {event.time}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="shrink-0">
                        RSVP
                      </Button>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full border-sage-200 text-sage-700 hover:bg-sage-50">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Event
                  </Button>
                </CardFooter>
              </Card>

              {/* Popular Places */}
              <Card className="border-sage-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Popular Places</CardTitle>
                    <Link href="/places">
                      <Button variant="ghost" size="sm" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                        View All
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      title: "The Cozy Bean",
                      category: "Coffee Shop",
                      rating: 4.8,
                      distance: "0.3 miles",
                      icon: Coffee,
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      title: "Campus Bistro",
                      category: "Restaurant",
                      rating: 4.5,
                      distance: "0.5 miles",
                      icon: Coffee,
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      title: "Melody Cafe",
                      category: "Coffee & Music",
                      rating: 4.7,
                      distance: "0.7 miles",
                      icon: Music,
                      image: "/placeholder.svg?height=40&width=40",
                    },
                  ].map((place, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                      <div className="h-10 w-10 rounded-lg overflow-hidden">
                        <img
                          src={place.image || "/placeholder.svg"}
                          alt={place.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-800 truncate">{place.title}</h4>
                        <div className="flex items-center text-xs text-slate-500">
                          <span>{place.category}</span>
                          <span className="mx-1">•</span>
                          <span>{place.distance}</span>
                        </div>
                      </div>
                      <div className="flex items-center bg-sage-50 px-2 py-1 rounded text-sage-700">
                        <Star className="h-3 w-3 fill-current mr-1" />
                        <span className="text-xs font-medium">{place.rating}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Community Groups */}
              <Card className="border-sage-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Your Communities</CardTitle>
                    <Link href="/community">
                      <Button variant="ghost" size="sm" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                        View All
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      title: "Movie Lovers",
                      members: 156,
                      icon: Film,
                      role: "Member",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      title: "Coffee Connoisseurs",
                      members: 124,
                      icon: Coffee,
                      role: "Admin",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                  ].map((group, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                      <div className="h-10 w-10 rounded-lg overflow-hidden">
                        <img
                          src={group.image || "/placeholder.svg"}
                          alt={group.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-800 truncate">{group.title}</h4>
                        <div className="flex items-center">
                          <div className="flex -space-x-2 mr-2">
                            {[...Array(3)].map((_, i) => (
                              <Avatar key={i} className="h-5 w-5 border border-white">
                                <AvatarImage src={`/placeholder.svg?height=20&width=20`} />
                                <AvatarFallback className="text-[10px]">{String.fromCharCode(65 + i)}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <span className="text-xs text-slate-500">{group.members} members</span>
                        </div>
                      </div>
                      <Badge
                        className={
                          group.role === "Admin" ? "bg-coral-100 text-coral-700" : "bg-slate-100 text-slate-700"
                        }
                      >
                        {group.role}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full border-sage-200 text-sage-700 hover:bg-sage-50">
                    <Plus className="mr-2 h-4 w-4" />
                    Join More Groups
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>

        {/* Mobile Navigation - Only visible on mobile */}
        <MobileNav />
      </div>
    </>
  )
}
