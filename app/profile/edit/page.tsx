import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Camera, X, Save } from "lucide-react"

export default function ProfileEditPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Edit Profile</h1>
            <Button className="bg-sage-500 hover:bg-sage-600">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>

          <Tabs defaultValue="basic">
            <TabsList className="mb-8">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <Card className="border-sage-100">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <Avatar className="h-32 w-32 border-4 border-white shadow-md">
                        <AvatarImage src="/placeholder.svg?height=128&width=128" />
                        <AvatarFallback className="text-4xl">JD</AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 bg-sage-500 hover:bg-sage-600"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="border-slate-200">
                      Change Profile Photo
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        defaultValue="Jessica"
                        className="border-slate-200 focus-visible:ring-sage-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        defaultValue="Davis"
                        className="border-slate-200 focus-visible:ring-sage-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="university">University</Label>
                      <Select defaultValue="stanford">
                        <SelectTrigger className="border-slate-200 focus:ring-sage-500">
                          <SelectValue placeholder="Select your university" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stanford">Stanford University</SelectItem>
                          <SelectItem value="berkeley">UC Berkeley</SelectItem>
                          <SelectItem value="ucla">UCLA</SelectItem>
                          <SelectItem value="usc">USC</SelectItem>
                          <SelectItem value="mit">MIT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="major">Major</Label>
                      <Input
                        id="major"
                        defaultValue="Computer Science"
                        className="border-slate-200 focus-visible:ring-sage-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="graduation-year">Graduation Year</Label>
                      <Select defaultValue="2026">
                        <SelectTrigger className="border-slate-200 focus:ring-sage-500">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        defaultValue="Palo Alto, CA"
                        className="border-slate-200 focus-visible:ring-sage-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell potential matches about yourself..."
                      className="min-h-[150px] border-slate-200 focus-visible:ring-sage-500"
                      defaultValue="Computer Science major with a passion for photography and outdoor adventures. Looking for someone to explore hiking trails and coffee shops with. I'm a big fan of indie music and love attending concerts on weekends."
                    />
                    <p className="text-xs text-slate-500">Max 300 characters</p>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-4">
                  <Button className="bg-sage-500 hover:bg-sage-600">Save Basic Info</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="photos">
              <Card className="border-sage-100">
                <CardHeader>
                  <CardTitle>Profile Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="relative aspect-square bg-slate-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-slate-200"
                      >
                        {i === 0 ? (
                          <>
                            <img
                              src="/placeholder.svg?height=150&width=150"
                              alt="Profile"
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <Badge className="absolute top-2 left-2 bg-sage-500">Main Photo</Badge>
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-6 w-6 rounded-full"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </>
                        ) : i < 3 ? (
                          <>
                            <img
                              src="/placeholder.svg?height=150&width=150"
                              alt="Profile"
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-6 w-6 rounded-full"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Camera className="h-8 w-8 text-slate-400 mb-2" />
                            <span className="text-xs text-slate-500 font-medium">Add Photo</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mt-6">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Photo Tips</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Add at least 3 photos of yourself</li>
                      <li>• Your first photo should clearly show your face</li>
                      <li>• Show your interests and personality</li>
                      <li>• Photos with friends are great too!</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-4">
                  <Button className="bg-sage-500 hover:bg-sage-600">Save Photos</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="interests">
              <Card className="border-sage-100">
                <CardHeader>
                  <CardTitle>Interests & Personality</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-3 block">Select up to 5 interests to show on your profile</Label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Photography",
                        "Hiking",
                        "Reading",
                        "Travel",
                        "Coffee",
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
                        <Badge
                          key={interest}
                          variant={
                            ["Photography", "Hiking", "Reading", "Travel", "Coffee"].includes(interest)
                              ? "default"
                              : "outline"
                          }
                          className={`cursor-pointer text-sm py-1.5 px-3 ${
                            ["Photography", "Hiking", "Reading", "Travel", "Coffee"].includes(interest)
                              ? "bg-sage-500 hover:bg-sage-600"
                              : "bg-transparent hover:bg-slate-50 border-slate-200 text-slate-700"
                          }`}
                        >
                          {interest}
                          {["Photography", "Hiking", "Reading", "Travel", "Coffee"].includes(interest) && (
                            <X className="ml-1 h-3 w-3" />
                          )}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-2">5/5 interests selected</p>
                  </div>

                  <div className="space-y-4">
                    <Label>I consider myself more of a:</Label>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>Introvert</span>
                        <span>Extrovert</span>
                      </div>
                      <Slider defaultValue={[65]} max={100} step={1} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>On weekends, I prefer to:</Label>
                    <RadioGroup defaultValue="balance">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="stay-in" id="stay-in" className="text-sage-500 border-slate-300" />
                        <Label htmlFor="stay-in" className="font-normal">
                          Stay in and relax
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="balance" id="balance" className="text-sage-500 border-slate-300" />
                        <Label htmlFor="balance" className="font-normal">
                          A balance of both
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="go-out" id="go-out" className="text-sage-500 border-slate-300" />
                        <Label htmlFor="go-out" className="font-normal">
                          Go out and socialize
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-4">
                  <Button className="bg-sage-500 hover:bg-sage-600">Save Interests</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card className="border-sage-100">
                <CardHeader>
                  <CardTitle>Dating Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>I'm interested in:</Label>
                    <RadioGroup defaultValue="men">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="men" id="men" className="text-sage-500 border-slate-300" />
                        <Label htmlFor="men" className="font-normal">
                          Men
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="women" id="women" className="text-sage-500 border-slate-300" />
                        <Label htmlFor="women" className="font-normal">
                          Women
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="everyone" id="everyone" className="text-sage-500 border-slate-300" />
                        <Label htmlFor="everyone" className="font-normal">
                          Everyone
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>Age range preference:</Label>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>18</span>
                        <span>30+</span>
                      </div>
                      <Slider defaultValue={[19, 24]} min={18} max={30} step={1} />
                      <div className="text-center text-sm text-slate-700 font-medium">19 - 24 years</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Distance preference:</Label>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>1 mile</span>
                        <span>50+ miles</span>
                      </div>
                      <Slider defaultValue={[10]} min={1} max={50} step={1} />
                      <div className="text-center text-sm text-slate-700 font-medium">10 miles</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Looking for:</Label>
                    <div className="space-y-2">
                      {[
                        { id: "casual", label: "Casual dating", checked: true },
                        { id: "relationship", label: "Relationship", checked: true },
                        { id: "friendship", label: "Friendship", checked: true },
                        { id: "study", label: "Study buddy", checked: false },
                      ].map((option) => (
                        <div key={option.id} className="flex items-center justify-between">
                          <Label htmlFor={option.id} className="font-normal">
                            {option.label}
                          </Label>
                          <input
                            type="checkbox"
                            id={option.id}
                            defaultChecked={option.checked}
                            className="h-4 w-4 rounded border-slate-300 text-sage-500 focus:ring-sage-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-4">
                  <Button className="bg-sage-500 hover:bg-sage-600">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
