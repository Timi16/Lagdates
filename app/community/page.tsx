import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Users, BookOpen, Music, Film, Coffee, MapPin, Gamepad, Camera, Heart } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Community Groups</h1>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search groups..." className="pl-9 border-slate-200 focus-visible:ring-sage-500" />
            </div>
            <Button className="bg-sage-500 hover:bg-sage-600">Create Group</Button>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Groups</TabsTrigger>
            <TabsTrigger value="my-groups">My Groups</TabsTrigger>
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Movie Lovers",
                  description: "Find your perfect movie date partner",
                  members: 156,
                  icon: Film,
                  tags: ["Movies", "Entertainment"],
                },
                {
                  title: "Book Club Singles",
                  description: "Connect over literature and love",
                  members: 89,
                  icon: BookOpen,
                  tags: ["Books", "Discussion"],
                },
                {
                  title: "Outdoor Adventures",
                  description: "Hiking, camping, and outdoor activities",
                  members: 213,
                  icon: MapPin,
                  tags: ["Outdoors", "Active"],
                },
                {
                  title: "Music Enthusiasts",
                  description: "Share your passion for music and concerts",
                  members: 178,
                  icon: Music,
                  tags: ["Music", "Concerts"],
                },
                {
                  title: "Coffee Connoisseurs",
                  description: "Explore local cafes and coffee shops",
                  members: 124,
                  icon: Coffee,
                  tags: ["Coffee", "Casual"],
                },
                {
                  title: "Gaming Squad",
                  description: "Connect with fellow gamers on campus",
                  members: 201,
                  icon: Gamepad,
                  tags: ["Gaming", "Tech"],
                },
                {
                  title: "Photography Club",
                  description: "Share photos and photography tips",
                  members: 97,
                  icon: Camera,
                  tags: ["Photography", "Art"],
                },
                {
                  title: "Relationship Goals",
                  description: "For those seeking serious relationships",
                  members: 142,
                  icon: Heart,
                  tags: ["Dating", "Relationships"],
                },
                {
                  title: "International Students",
                  description: "Connect with students from around the world",
                  members: 168,
                  icon: Users,
                  tags: ["International", "Cultural"],
                },
              ].map((group, i) => (
                <Card key={i} className="border-sage-100">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-full">
                          <group.icon className="h-5 w-5 text-slate-600" />
                        </div>
                        <CardTitle className="text-lg">{group.title}</CardTitle>
                      </div>
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">{group.members} members</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{group.description}</p>

                    <div className="mt-3 flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <Avatar key={i} className="border-2 border-white">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                          <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-white text-xs font-medium text-slate-600">
                        +{group.members - 4}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      {group.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-slate-50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-slate-100 pt-3">
                    <Button className="w-full bg-sage-500 hover:bg-sage-600">Join Group</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-groups" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Movie Lovers",
                  description: "Find your perfect movie date partner",
                  members: 156,
                  icon: Film,
                  tags: ["Movies", "Entertainment"],
                  role: "Member",
                },
                {
                  title: "Coffee Connoisseurs",
                  description: "Explore local cafes and coffee shops",
                  members: 124,
                  icon: Coffee,
                  tags: ["Coffee", "Casual"],
                  role: "Admin",
                },
              ].map((group, i) => (
                <Card key={i} className="border-sage-100">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-full">
                          <group.icon className="h-5 w-5 text-slate-600" />
                        </div>
                        <CardTitle className="text-lg">{group.title}</CardTitle>
                      </div>
                      <Badge
                        className={
                          group.role === "Admin" ? "bg-coral-100 text-coral-700" : "bg-slate-100 text-slate-700"
                        }
                      >
                        {group.role}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{group.description}</p>

                    <div className="mt-3 flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <Avatar key={i} className="border-2 border-white">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                          <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-white text-xs font-medium text-slate-600">
                        +{group.members - 4}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      {group.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-slate-50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-slate-100 pt-3">
                    <Button className="w-full" variant="outline">
                      View Group
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Empty state for when user has no groups */}
            {false && (
              <div className="text-center py-12">
                <div className="bg-slate-50 inline-flex p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-2">No groups yet</h3>
                <p className="text-slate-500 mb-6">You haven't joined any community groups</p>
                <Button className="bg-sage-500 hover:bg-sage-600">Browse Groups</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="suggested" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Photography Club",
                  description: "Share photos and photography tips",
                  members: 97,
                  icon: Camera,
                  tags: ["Photography", "Art"],
                  match: "95% Match",
                },
                {
                  title: "Outdoor Adventures",
                  description: "Hiking, camping, and outdoor activities",
                  members: 213,
                  icon: MapPin,
                  tags: ["Outdoors", "Active"],
                  match: "87% Match",
                },
                {
                  title: "Book Club Singles",
                  description: "Connect over literature and love",
                  members: 89,
                  icon: BookOpen,
                  tags: ["Books", "Discussion"],
                  match: "82% Match",
                },
              ].map((group, i) => (
                <Card key={i} className="border-sage-100">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-full">
                          <group.icon className="h-5 w-5 text-slate-600" />
                        </div>
                        <CardTitle className="text-lg">{group.title}</CardTitle>
                      </div>
                      <Badge className="bg-sage-100 text-sage-700">{group.match}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{group.description}</p>

                    <div className="mt-3 flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <Avatar key={i} className="border-2 border-white">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                          <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-white text-xs font-medium text-slate-600">
                        +{group.members - 4}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      {group.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-slate-50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-slate-100 pt-3">
                    <Button className="w-full bg-sage-500 hover:bg-sage-600">Join Group</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
