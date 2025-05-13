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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sage-500 to-coral-500">
      <div className="flex flex-col items-center animate-fade-in">
        <div className="animate-pulse-scale">
          <Heart className="h-20 w-20 text-white fill-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mt-6 animate-slide-up">Lag Dates</h1>
        <p className="text-white/80 mt-2 animate-slide-up animation-delay-300">Connect. Chat. Meet.</p>
      </div>

      <div className="absolute bottom-12 flex space-x-2 animate-fade-in animation-delay-500">
        <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
        <div className="h-2 w-2 bg-white rounded-full animate-bounce animation-delay-150"></div>
        <div className="h-2 w-2 bg-white rounded-full animate-bounce animation-delay-300"></div>
      </div>
    </div>
  )
}
