import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, MapPin, School, Calendar, Users, Settings } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
            <Avatar className="h-32 w-32 border-4 border-white shadow-md">
              <AvatarImage src="/placeholder.svg?height=128&width=128" />
              <AvatarFallback className="text-4xl">JD</AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h1 className="text-3xl font-bold text-slate-800">Jessica Davis</h1>
                <Badge className="self-center md:self-auto bg-sage-100 text-sage-700 hover:bg-sage-200">
                  Premium Member
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start">
                <div className="flex items-center text-slate-600">
                  <School className="h-4 w-4 mr-1" />
                  <span>Stanford University</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Palo Alto, CA</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Class of 2026</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                {["Photography", "Hiking", "Reading", "Travel", "Coffee"].map((interest) => (
                  <Badge key={interest} variant="outline" className="bg-slate-50">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Link href="/settings">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
              </Link>
              <Link href="/profile/edit">
                <Button className="bg-sage-500 hover:bg-sage-600">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Content */}
          <Tabs defaultValue="about">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <Card className="border-sage-100">
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Computer Science major with a passion for photography and outdoor adventures. Looking for someone to
                    explore hiking trails and coffee shops with. I'm a big fan of indie music and love attending
                    concerts on weekends.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Basic Info</h3>
                      <dl className="space-y-2">
                        {[
                          { label: "Age", value: "20" },
                          { label: "Gender", value: "Female" },
                          { label: "Looking for", value: "Relationship, Friends" },
                          { label: "Major", value: "Computer Science" },
                          { label: "Minor", value: "Photography" },
                        ].map((item) => (
                          <div key={item.label} className="flex justify-between py-1 border-b border-slate-100">
                            <dt className="text-slate-500">{item.label}</dt>
                            <dd className="font-medium text-slate-800">{item.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Preferences</h3>
                      <dl className="space-y-2">
                        {[
                          { label: "Interested in", value: "Men" },
                          { label: "Age range", value: "19-24" },
                          { label: "Distance", value: "Up to 10 miles" },
                          { label: "Personality", value: "Ambivert" },
                          { label: "Lifestyle", value: "Active, Outdoorsy" },
                        ].map((item) => (
                          <div key={item.label} className="flex justify-between py-1 border-b border-slate-100">
                            <dt className="text-slate-500">{item.label}</dt>
                            <dd className="font-medium text-slate-800">{item.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photos">
              <Card className="border-sage-100">
                <CardHeader>
                  <CardTitle>My Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center">
                        <span className="text-slate-400">Photo {i + 1}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interests">
              <Card className="border-sage-100">
                <CardHeader>
                  <CardTitle>Interests & Hobbies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Top Interests</h3>
                      <ul className="space-y-3">
                        {["Photography", "Hiking", "Reading", "Travel", "Coffee"].map((interest) => (
                          <li key={interest} className="flex items-center gap-3">
                            <div className="bg-sage-100 p-2 rounded-full">
                              <Users className="h-4 w-4 text-sage-600" />
                            </div>
                            <span>{interest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Other Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Movies",
                          "Cooking",
                          "Yoga",
                          "Art",
                          "Music",
                          "Technology",
                          "Fashion",
                          "Fitness",
                          "Dancing",
                          "Gaming",
                        ].map((interest) => (
                          <Badge key={interest} variant="outline" className="bg-slate-50">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
