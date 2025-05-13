"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { School, Lock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sage-50 to-slate-50 p-4">
      <Link href="/" className="mb-8 flex items-center text-2xl font-bold text-slate-800">
        <span className="bg-gradient-to-r from-sage-500 to-coral-500 text-transparent bg-clip-text">Lag Dates</span>
      </Link>

      <Card className="w-full max-w-md border-sage-100 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-slate-800">Create an account</CardTitle>
          <CardDescription>Join the campus dating community in {step} easy steps</CardDescription>
        </CardHeader>
        
        <Tabs value={`step-${step}`} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="step-1" disabled>Basic Info</TabsTrigger>
            <TabsTrigger value="step-2" disabled>Profile</TabsTrigger>
            <TabsTrigger value="step-3" disabled>Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="step-1">
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email">University Email</Label>
                <div className="relative">
                  <School className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="signup-email"
                    placeholder="you@university.edu"
                    type="email"
                    className="pl-10 border-slate-200 focus-visible:ring-sage-500"
                  />
                </div>
                <p className="text-xs text-slate-500">Must be a valid university email address</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" className="border-slate-200 focus-visible:ring-sage-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" className="border-slate-200 focus-visible:ring-sage-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="signup-password"
                    type="password"
                    className="pl-10 border-slate-200 focus-visible:ring-sage-500"
                  />
                </div>
                <p className="text-xs text-slate-500">Must be at least 8 characters</p>
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  className="mt-1 data-[state=checked]:bg-sage-500 data-[state=checked]:border-sage-500"
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  I agree to the&nbsp;
                  <Link href="/

\
