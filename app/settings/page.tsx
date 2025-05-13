import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Lock, Shield, Eye, Moon, MapPin } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">Settings</h1>

          <Tabs defaultValue="account">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-64 flex-shrink-0">
                <TabsList className="flex flex-col w-full h-auto bg-transparent space-y-1">
                  <TabsTrigger
                    value="account"
                    className="justify-start w-full data-[state=active]:bg-sage-50 data-[state=active]:text-sage-700"
                  >
                    Account
                  </TabsTrigger>
                  <TabsTrigger
                    value="privacy"
                    className="justify-start w-full data-[state=active]:bg-sage-50 data-[state=active]:text-sage-700"
                  >
                    Privacy & Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="justify-start w-full data-[state=active]:bg-sage-50 data-[state=active]:text-sage-700"
                  >
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="preferences"
                    className="justify-start w-full data-[state=active]:bg-sage-50 data-[state=active]:text-sage-700"
                  >
                    Dating Preferences
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1">
                <TabsContent value="account" className="m-0">
                  <Card className="border-sage-100">
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Manage your account details and preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" value="jessica.davis@stanford.edu" disabled className="bg-slate-50" />
                        <p className="text-xs text-slate-500">Your university email cannot be changed</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Display Name</Label>
                        <Input
                          id="name"
                          defaultValue="Jessica Davis"
                          className="border-slate-200 focus-visible:ring-sage-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          defaultValue="jessicad"
                          className="border-slate-200 focus-visible:ring-sage-500"
                        />
                        <p className="text-xs text-slate-500">This will be your unique username on Lag Dates</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label>Theme Preference</Label>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Moon className="h-4 w-4 text-slate-600" />
                            <span>Dark Mode</span>
                          </div>
                          <Switch />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label className="text-red-500">Danger Zone</Label>
                        <div className="flex flex-col gap-3">
                          <Button
                            variant="outline"
                            className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 justify-start"
                          >
                            Deactivate Account
                          </Button>
                          <Button
                            variant="outline"
                            className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 justify-start"
                          >
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-slate-100 pt-4">
                      <Button className="bg-sage-500 hover:bg-sage-600">Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="privacy" className="m-0">
                  <Card className="border-sage-100">
                    <CardHeader>
                      <CardTitle>Privacy & Security</CardTitle>
                      <CardDescription>Control your privacy settings and security options</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full">
                              <Eye className="h-4 w-4 text-slate-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Profile Visibility</h4>
                              <p className="text-sm text-slate-500">Control who can see your profile</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full">
                              <MapPin className="h-4 w-4 text-slate-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Location Services</h4>
                              <p className="text-sm text-slate-500">Allow app to use your location</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full">
                              <Lock className="h-4 w-4 text-slate-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Change Password</h4>
                              <p className="text-sm text-slate-500">Update your account password</p>
                            </div>
                          </div>
                          <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
                            Change
                          </Button>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full">
                              <Shield className="h-4 w-4 text-slate-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Two-Factor Authentication</h4>
                              <p className="text-sm text-slate-500">Add an extra layer of security</p>
                            </div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-slate-100 pt-4">
                      <Button className="bg-sage-500 hover:bg-sage-600">Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="m-0">
                  <Card className="border-sage-100">
                    <CardHeader>
                      <CardTitle>Notification Settings</CardTitle>
                      <CardDescription>Manage how and when you receive notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full">
                              <Bell className="h-4 w-4 text-slate-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Push Notifications</h4>
                              <p className="text-sm text-slate-500">Receive notifications on your device</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <Separator />

                        <div>
                          <h4 className="font-medium mb-3">Notify me about:</h4>
                          <div className="space-y-3">
                            {["New matches", "New messages", "Profile likes", "Campus events", "App updates"].map(
                              (item) => (
                                <div key={item} className="flex items-center justify-between">
                                  <span>{item}</span>
                                  <Switch defaultChecked={item !== "App updates"} />
                                </div>
                              ),
                            )}
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <Label>Email Notifications</Label>
                          <div className="space-y-3">
                            {["Weekly digest", "New matches", "Special promotions", "Security alerts"].map((item) => (
                              <div key={item} className="flex items-center justify-between">
                                <span>{item}</span>
                                <Switch defaultChecked={item === "Security alerts"} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-slate-100 pt-4">
                      <Button className="bg-sage-500 hover:bg-sage-600">Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="preferences" className="m-0">
                  <Card className="border-sage-100">
                    <CardHeader>
                      <CardTitle>Dating Preferences</CardTitle>
                      <CardDescription>Customize your matching preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label>I'm interested in:</Label>
                        <div className="flex gap-2">
                          {["Men", "Women", "Everyone"].map((option) => (
                            <Button
                              key={option}
                              variant={option === "Men" ? "default" : "outline"}
                              className={option === "Men" ? "bg-sage-500 hover:bg-sage-600" : "border-slate-200"}
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Age range:</Label>
                        <div className="flex items-center gap-4">
                          <Input
                            type="number"
                            defaultValue="19"
                            min="18"
                            max="30"
                            className="w-20 border-slate-200 focus-visible:ring-sage-500"
                          />
                          <span>to</span>
                          <Input
                            type="number"
                            defaultValue="24"
                            min="18"
                            max="30"
                            className="w-20 border-slate-200 focus-visible:ring-sage-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Maximum distance:</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            defaultValue="10"
                            min="1"
                            max="50"
                            className="w-20 border-slate-200 focus-visible:ring-sage-500"
                          />
                          <span>miles</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label>Looking for:</Label>
                        <div className="space-y-2">
                          {["Casual dating", "Relationship", "Friendship", "Study buddy"].map((option) => (
                            <div key={option} className="flex items-center justify-between">
                              <span>{option}</span>
                              <Switch defaultChecked={option === "Relationship" || option === "Friendship"} />
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
              </div>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
