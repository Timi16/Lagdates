import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Coffee, Utensils, Book, Users, Music, Star, Heart } from "lucide-react"

export default function PlacesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Campus Hotspots</h1>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search places..." className="pl-9 border-slate-200 focus-visible:ring-sage-500" />
            </div>
            <Button className="bg-sage-500 hover:bg-sage-600">
              <MapPin className="mr-2 h-4 w-4" />
              Near Me
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Places</TabsTrigger>
            <TabsTrigger value="cafes">Cafes</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="study">Study Spots</TabsTrigger>
            <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "The Cozy Bean",
                  category: "Coffee Shop",
                  rating: 4.8,
                  reviews: 124,
                  distance: "0.3 miles",
                  icon: Coffee,
                  tags: ["Coffee", "Quiet", "WiFi"],
                  popular: true,
                },
                {
                  title: "Campus Bistro",
                  category: "Restaurant",
                  rating: 4.5,
                  reviews: 87,
                  distance: "0.5 miles",
                  icon: Utensils,
                  tags: ["Lunch", "Dinner", "Casual"],
                  popular: false,
                },
                {
                  title: "Library Commons",
                  category: "Study Spot",
                  rating: 4.9,
                  reviews: 203,
                  distance: "0.1 miles",
                  icon: Book,
                  tags: ["Quiet", "WiFi", "Group Tables"],
                  popular: true,
                },
                {
                  title: "Student Union",
                  category: "Social Hub",
                  rating: 4.6,
                  reviews: 156,
                  distance: "0.2 miles",
                  icon: Users,
                  tags: ["Events", "Food", "Games"],
                  popular: true,
                },
                {
                  title: "Melody Cafe",
                  category: "Coffee & Music",
                  rating: 4.7,
                  reviews: 92,
                  distance: "0.7 miles",
                  icon: Music,
                  tags: ["Live Music", "Coffee", "Evening"],
                  popular: false,
                },
                {
                  title: "Green Park",
                  category: "Outdoor Space",
                  rating: 4.8,
                  reviews: 178,
                  distance: "0.4 miles",
                  icon: MapPin,
                  tags: ["Picnic", "Sports", "Nature"],
                  popular: false,
                },
              ].map((place, i) => (
                <Card key={i} className="border-sage-100 overflow-hidden">
                  <div className="h-40 bg-slate-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <place.icon className="h-12 w-12 text-slate-300" />
                    </div>
                    {place.popular && <Badge className="absolute top-2 left-2 bg-coral-500">Popular</Badge>}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4 text-slate-600" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{place.title}</h3>
                        <p className="text-sm text-slate-500">{place.category}</p>
                      </div>
                      <div className="flex items-center bg-sage-50 px-2 py-1 rounded text-sage-700">
                        <Star className="h-3.5 w-3.5 fill-current mr-1" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-slate-500">{place.reviews} reviews</div>
                      <div className="flex items-center text-xs text-slate-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {place.distance}
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                      {place.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-slate-50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-sage-500 hover:bg-sage-600">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cafes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "The Cozy Bean",
                  category: "Coffee Shop",
                  rating: 4.8,
                  reviews: 124,
                  distance: "0.3 miles",
                  icon: Coffee,
                  tags: ["Coffee", "Quiet", "WiFi"],
                  popular: true,
                },
                {
                  title: "Melody Cafe",
                  category: "Coffee & Music",
                  rating: 4.7,
                  reviews: 92,
                  distance: "0.7 miles",
                  icon: Music,
                  tags: ["Live Music", "Coffee", "Evening"],
                  popular: false,
                },
              ].map((place, i) => (
                <Card key={i} className="border-sage-100 overflow-hidden">
                  <div className="h-40 bg-slate-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <place.icon className="h-12 w-12 text-slate-300" />
                    </div>
                    {place.popular && <Badge className="absolute top-2 left-2 bg-coral-500">Popular</Badge>}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4 text-slate-600" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{place.title}</h3>
                        <p className="text-sm text-slate-500">{place.category}</p>
                      </div>
                      <div className="flex items-center bg-sage-50 px-2 py-1 rounded text-sage-700">
                        <Star className="h-3.5 w-3.5 fill-current mr-1" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-slate-500">{place.reviews} reviews</div>
                      <div className="flex items-center text-xs text-slate-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {place.distance}
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                      {place.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-slate-50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-sage-500 hover:bg-sage-600">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would follow the same pattern */}
          <TabsContent value="restaurants">
            <div className="text-center py-12">
              <div className="bg-slate-50 inline-flex p-4 rounded-full mb-4">
                <Utensils className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-2">Coming Soon</h3>
              <p className="text-slate-500 mb-6">We're adding more restaurants to our database</p>
            </div>
          </TabsContent>

          <TabsContent value="study">
            <div className="text-center py-12">
              <div className="bg-slate-50 inline-flex p-4 rounded-full mb-4">
                <Book className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-2">Coming Soon</h3>
              <p className="text-slate-500 mb-6">We're adding more study spots to our database</p>
            </div>
          </TabsContent>

          <TabsContent value="entertainment">
            <div className="text-center py-12">
              <div className="bg-slate-50 inline-flex p-4 rounded-full mb-4">
                <Music className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-2">Coming Soon</h3>
              <p className="text-slate-500 mb-6">We're adding more entertainment venues to our database</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
