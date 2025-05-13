import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Coffee, Utensils, Music, Film, BookOpen } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Campus Events</h1>
          <Button className="bg-sage-500 hover:bg-sage-600">Create Event</Button>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList className="mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="my-events">My Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Coffee Chat Mixer",
                  date: "May 15, 2025",
                  time: "3:00 PM - 5:00 PM",
                  location: "Campus Coffee House",
                  attendees: 24,
                  icon: Coffee,
                  tags: ["Social", "Casual"],
                },
                {
                  title: "Dinner & Dating",
                  date: "May 20, 2025",
                  time: "7:00 PM - 9:00 PM",
                  location: "Student Union",
                  attendees: 42,
                  icon: Utensils,
                  tags: ["Dinner", "Formal"],
                },
                {
                  title: "Concert Connections",
                  date: "May 25, 2025",
                  time: "8:00 PM - 11:00 PM",
                  location: "Amphitheater",
                  attendees: 86,
                  icon: Music,
                  tags: ["Music", "Outdoor"],
                },
                {
                  title: "Movie Night Meetup",
                  date: "May 28, 2025",
                  time: "7:30 PM - 10:00 PM",
                  location: "Student Center",
                  attendees: 38,
                  icon: Film,
                  tags: ["Movies", "Casual"],
                },
                {
                  title: "Book Club Singles",
                  date: "June 2, 2025",
                  time: "6:00 PM - 8:00 PM",
                  location: "University Library",
                  attendees: 22,
                  icon: BookOpen,
                  tags: ["Books", "Discussion"],
                },
                {
                  title: "Hiking Adventure",
                  date: "June 5, 2025",
                  time: "10:00 AM - 2:00 PM",
                  location: "Campus Trailhead",
                  attendees: 32,
                  icon: MapPin,
                  tags: ["Outdoor", "Active"],
                },
              ].map((event, i) => (
                <Card key={i} className="border-sage-100 overflow-hidden">
                  <div className="bg-sage-50 p-4 flex items-center justify-center border-b border-sage-100">
                    <event.icon className="h-8 w-8 text-sage-500" />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <h3 className="font-semibold text-xl mb-1">{event.title}</h3>
                      <div className="flex items-center text-sm text-slate-600 mb-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {event.date}, {event.time}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {event.location}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-slate-600">
                        <Users className="h-3.5 w-3.5 mr-1" />
                        {event.attendees} attending
                      </div>
                      <div className="flex gap-1">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-slate-50 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-sage-500 hover:bg-sage-600">RSVP</Button>
                      <Button variant="outline" className="flex-1 border-slate-200">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Coffee Chat Mixer",
                  date: "May 15, 2025",
                  time: "3:00 PM - 5:00 PM",
                  location: "Campus Coffee House",
                  attendees: 24,
                  icon: Coffee,
                  tags: ["Social", "Casual"],
                  status: "Going",
                },
                {
                  title: "Movie Night Meetup",
                  date: "May 28, 2025",
                  time: "7:30 PM - 10:00 PM",
                  location: "Student Center",
                  attendees: 38,
                  icon: Film,
                  tags: ["Movies", "Casual"],
                  status: "Maybe",
                },
              ].map((event, i) => (
                <Card key={i} className="border-sage-100 overflow-hidden">
                  <div className="bg-sage-50 p-4 flex items-center justify-between border-b border-sage-100">
                    <event.icon className="h-8 w-8 text-sage-500" />
                    <Badge className={event.status === "Going" ? "bg-sage-500" : "bg-slate-500"}>{event.status}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <h3 className="font-semibold text-xl mb-1">{event.title}</h3>
                      <div className="flex items-center text-sm text-slate-600 mb-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {event.date}, {event.time}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {event.location}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-slate-600">
                        <Users className="h-3.5 w-3.5 mr-1" />
                        {event.attendees} attending
                      </div>
                      <div className="flex gap-1">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-slate-50 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 border-slate-200">
                        Cancel RSVP
                      </Button>
                      <Button variant="outline" className="flex-1 border-slate-200">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty state for when user has no events */}
            {false && (
              <div className="text-center py-12">
                <div className="bg-slate-50 inline-flex p-4 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-2">No events yet</h3>
                <p className="text-slate-500 mb-6">You haven't RSVP'd to any upcoming events</p>
                <Button className="bg-sage-500 hover:bg-sage-600">Browse Events</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Spring Mixer",
                  date: "April 15, 2025",
                  time: "3:00 PM - 5:00 PM",
                  location: "Campus Quad",
                  attendees: 56,
                  icon: Users,
                  tags: ["Social", "Outdoor"],
                },
                {
                  title: "Game Night",
                  date: "April 5, 2025",
                  time: "7:00 PM - 10:00 PM",
                  location: "Student Lounge",
                  attendees: 28,
                  icon: Film,
                  tags: ["Games", "Casual"],
                },
              ].map((event, i) => (
                <Card key={i} className="border-slate-100 overflow-hidden opacity-75">
                  <div className="bg-slate-50 p-4 flex items-center justify-center border-b border-slate-100">
                    <event.icon className="h-8 w-8 text-slate-400" />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <h3 className="font-semibold text-xl mb-1">{event.title}</h3>
                      <div className="flex items-center text-sm text-slate-600 mb-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {event.date}, {event.time}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {event.location}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-slate-600">
                        <Users className="h-3.5 w-3.5 mr-1" />
                        {event.attendees} attended
                      </div>
                      <div className="flex gap-1">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-slate-50 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-slate-200">
                      View Photos
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
