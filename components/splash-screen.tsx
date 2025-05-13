"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

interface SplashScreenProps {
  onComplete?: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) onComplete()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-sage-600 via-sage-500 to-coral-500">
      <div className="flex flex-col items-center">
        <div className="animate-pulse">
          <Heart className="h-20 w-20 text-white fill-white" />
        </div>
        <h1 className="mt-4 text-3xl font-bold text-white">Lag Dates</h1>
        <p className="mt-2 text-white/80">Connect on Campus</p>

        <div className="mt-8 flex space-x-2">
          <div className="h-2 w-2 animate-bounce bg-white rounded-full" style={{ animationDelay: "0ms" }}></div>
          <div className="h-2 w-2 animate-bounce bg-white rounded-full" style={{ animationDelay: "300ms" }}></div>
          <div className="h-2 w-2 animate-bounce bg-white rounded-full" style={{ animationDelay: "600ms" }}></div>
        </div>
      </div>
    </div>
  )
}
