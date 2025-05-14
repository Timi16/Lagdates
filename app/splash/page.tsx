"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home after splash animation (2.5 seconds)
    const timer = setTimeout(() => {
      router.push("/home")
    }, 2500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#FF5A5F] to-[#FFC1CC]">
      <div className="flex flex-col items-center animate-fade-in">
        <div className="animate-pulse-scale bg-white/10 p-5 rounded-full shadow-lg">
          <Heart className="h-24 w-24 text-white fill-white" />
        </div>
        <h1 className="text-5xl font-bold text-white mt-8 animate-slide-up">Lag Dates</h1>
        <p className="text-white/90 text-xl mt-3 animate-slide-up animation-delay-300">Connect. Chat. Meet.</p>
      </div>

      <div className="absolute bottom-12 flex space-x-3 animate-fade-in animation-delay-500">
        <div className="h-3 w-3 bg-white rounded-full animate-bounce"></div>
        <div className="h-3 w-3 bg-white rounded-full animate-bounce animation-delay-150"></div>
        <div className="h-3 w-3 bg-white rounded-full animate-bounce animation-delay-300"></div>
      </div>
    </div>
  )
}
