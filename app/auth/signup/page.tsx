"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { School, Lock, Heart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const triggerImageUpload = () => {
    fileInputRef.current?.click()
  }
  
  const handleNextStep = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setStep(step + 1)
    }, 1000)
  }
  
  const handleCreateAccount = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/home"
    }, 1500)
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#FF5A5F] to-[#FFC1CC] p-4">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="bg-white p-1 rounded-full">
          <School className="h-5 w-5 text-[#FF5A5F] fill-[#FF5A5F]" />
        </div>
        <span className="text-2xl font-bold text-white">Lag Dates</span>
      </Link>

      <Card className="w-full max-w-md border-white/20 shadow-lg">
        <CardHeader className="space-y-1 bg-gradient-to-r from-[#FF5A5F] via-[#FF5A5F] to-[#FFC1CC] text-white rounded-t-xl">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription className="text-white/90">Join the campus dating community in {step} easy steps</CardDescription>
        </CardHeader>
        
        <Tabs value={`step-${step}`} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4 bg-white/20">
            <TabsTrigger value="step-1" disabled className="data-[state=active]:bg-white data-[state=active]:text-[#FF5A5F]">Basic Info</TabsTrigger>
            <TabsTrigger value="step-2" disabled className="data-[state=active]:bg-white data-[state=active]:text-[#FF5A5F]">Profile</TabsTrigger>
            <TabsTrigger value="step-3" disabled className="data-[state=active]:bg-white data-[state=active]:text-[#FF5A5F]">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="step-1">
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email">University Email</Label>
                <div className="relative">
                  <School className="absolute left-3 top-3 h-4 w-4 text-[#FF5A5F]/70" />
                  <Input
                    id="signup-email"
                    placeholder="you@university.edu"
                    type="email"
                    className="pl-10 border-slate-200 focus-visible:ring-[#FF5A5F]"
                  />
                </div>
                <p className="text-xs text-gray-600">Must be a valid university email address</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" className="border-slate-200 focus-visible:ring-[#FF5A5F]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" className="border-slate-200 focus-visible:ring-[#FF5A5F]" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#FF5A5F]/70" />
                  <Input
                    id="signup-password"
                    type="password"
                    className="pl-10 border-slate-200 focus-visible:ring-[#FF5A5F]"
                    required
                    minLength={8}
                  />
                </div>
                <p className="text-xs text-gray-600">Must be at least 8 characters</p>
              </div>
              
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="terms" className="data-[state=checked]:bg-[#FF5A5F] data-[state=checked]:border-[#FF5A5F]" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#FF5A5F] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#FF5A5F] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <Button 
                className="w-full bg-white text-[#FF5A5F] hover:bg-white/90" 
                onClick={handleNextStep}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Continue"}
              </Button>
            </CardContent>
          </TabsContent>
          
          <TabsContent value="step-2">
            <CardContent className="space-y-4">
              <div className="text-center pb-4">
                <h3 className="text-lg font-medium">Upload Profile Picture</h3>
                <p className="text-sm text-gray-600">Choose a photo that clearly shows your face</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div 
                  className="h-32 w-32 rounded-full border-4 border-dashed border-[#FF5A5F] bg-white flex items-center justify-center cursor-pointer hover:border-[#FF5A5F]/80 transition-colors shadow-lg"
                  onClick={triggerImageUpload}
                >
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="h-full w-full object-cover rounded-full" />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <School className="h-8 w-8 text-[#FF5A5F] mb-1" />
                      <span className="text-[#FF5A5F] font-medium text-sm text-center px-2">Click to upload</span>
                    </div>
                  )}
                </div>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                />
              </div>
              
              <Button 
                className="w-full mt-6 bg-white !text-[#FF5A5F] hover:bg-white/90" 
                onClick={handleNextStep}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Continue"}
              </Button>
            </CardContent>
          </TabsContent>
          
          <TabsContent value="step-3">
            <CardContent className="space-y-4">
              <div className="text-center pb-4">
                <h3 className="text-lg font-medium text-[#FF5A5F]">Almost Done!</h3>
                <p className="text-sm text-white">Tell us what you're looking for</p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[#FF5A5F] font-medium">I'm interested in</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Women", "Men", "Everyone"].map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        className="bg-white border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white font-medium shadow-sm"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-[#FF5A5F] font-medium">Looking for</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Dating", "Friendship", "Study Partners", "Networking"].map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        className="bg-white border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white font-medium shadow-sm"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-white text-[#FF5A5F] hover:bg-white/90" 
                onClick={handleCreateAccount}
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
