"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AtSign, KeyRound, Heart } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real app, you would validate credentials with your backend
    // For this demo, we'll just redirect to the splash screen
    setTimeout(() => {
      router.push("/splash")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#FF5A5F] to-[#FFC1CC] p-4">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="bg-white p-1 rounded-full">
          <Heart className="h-5 w-5 text-[#FF5A5F] fill-[#FF5A5F]" />
        </div>
        <span className="text-2xl font-bold text-white">Lag Dates</span>
      </Link>

      <Card className="w-full max-w-md border-white/20 shadow-lg">
        <CardHeader className="space-y-1 bg-gradient-to-r from-[#FF5A5F] via-[#FF5A5F] to-[#FFC1CC] text-white rounded-t-xl">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription className="text-white/90">Enter your credentials to sign in to your account</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <AtSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  placeholder="you@university.edu"
                  type="email"
                  className="pl-10 border-slate-200 focus-visible:ring-[#FF5A5F]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/auth/forgot-password" className="text-xs text-[#FF5A5F] hover:text-[#FF5A5F]/80">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="password"
                  type="password"
                  className="pl-10 border-slate-200 focus-visible:ring-[#FF5A5F]"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="data-[state=checked]:bg-[#FF5A5F] data-[state=checked]:border-[#FF5A5F]"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full bg-white text-[#FF5A5F] hover:bg-white/90" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="mt-4 text-center">
              <span className="text-sm text-white/80">Don't have an account? </span>
              <Link href="/auth/signup" className="text-sm text-white font-medium hover:text-white/80">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
