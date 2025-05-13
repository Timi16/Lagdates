"use client"

import { useState } from "react"
import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Heart, MessageCircle, Star, MapPin, Briefcase, GraduationCap, Info } from "lucide-react"

type Profile = {
  id: number
  name: string
  age: number
  university: string
  major: string
  distance: string
  bio: string
  interests: string[]
}

export function SwipeDeck() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swipingDirection, setSwipingDirection] = useState<"left" | "right" | null>(null)
  const [showInfo, setShowInfo] = useState(false)

  const profiles: Profile[] = [
    {
      id: 1,
      name: "Emma",
      age: 21,
      university: "Stanford University",
      major: "Computer Science",
      distance: "2 miles away",
      bio: "Coffee enthusiast and coding fanatic. Looking for someone to explore hiking trails and discuss the latest tech trends.",
      interests: ["Photography", "Hiking", "Coffee", "Coding", "Music"],
    },
    {
      id: 2,
      name: "Michael",
      age: 22,
      university: "Stanford University",
      major: "Business Administration",
      distance: "1 mile away",
      bio: "Basketball player and entrepreneur. I enjoy trying new restaurants and watching movies on weekends.",
      interests: ["Basketball", "Startups", "Food", "Movies", "Travel"],
    },
    {
      id: 3,
      name: "Sophia",
      age: 20,
      university: "Stanford University",
      major: "Psychology",
      distance: "3 miles away",
      bio: "Bookworm and aspiring therapist. I love deep conversations over tea and exploring art galleries.",
      interests: ["Reading", "Art", "Psychology", "Tea", "Museums"],
    },
    {
      id: 4,
      name: "James",
      age: 23,
      university: "Stanford University",
      major: "Engineering",
      distance: "5 miles away",
      bio: "Robotics enthusiast and amateur chef. Looking for someone to cook with and attend tech events.",
      interests: ["Robotics", "Cooking", "Technology", "Gaming", "Hiking"],
    },
  ]

  const handleSwipe = (direction: "left" | "right") => {
    setSwipingDirection(direction)

    // Reset swiping animation and move to next card after animation completes
    setTimeout(() => {
      setSwipingDirection(null)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length)
      setShowInfo(false)
    }, 500)
  }

  const currentProfile = profiles[currentIndex]

  return (
    <div className="max-w-md mx-auto">
      <div className="swipe-card-container">
        <Card
          className={`swipe-card border-sage-100 shadow-lg ${swipingDirection ? `swiping-${swipingDirection}` : ""}`}
        >
          <div className="relative h-[500px] bg-slate-100 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <GraduationCap className="h-24 w-24 text-slate-200" />
            </div>

            {/* Profile info overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 transition-opacity duration-200 ${
                showInfo ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold">
                    {currentProfile.name}, {currentProfile.age}
                  </h2>
                </div>
                <div className="flex items-center text-white/80 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{currentProfile.distance}</span>
                </div>
                <div className="flex items-center text-white/80 mb-2">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  <span>{currentProfile.university}</span>
                </div>
                <div className="flex items-center text-white/80 mb-3">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span>{currentProfile.major}</span>
                </div>
                <p className="mb-3 text-white/90">{currentProfile.bio}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {currentProfile.interests.map((interest) => (
                    <Badge key={interest} className="bg-white/20 hover:bg-white/30 text-white">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Basic info always visible */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
              <div className="text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {currentProfile.name}, {currentProfile.age}
                    </h2>
                    <p className="text-white/80">{currentProfile.major}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
                    onClick={() => setShowInfo(!showInfo)}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <CardFooter className="flex justify-between p-4 bg-white">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-slate-200 text-slate-700 hover:bg-slate-50"
              onClick={() => handleSwipe("left")}
            >
              <X className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-coral-200 text-coral-500 hover:bg-coral-50"
            >
              <Star className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-sage-200 text-sage-500 hover:bg-sage-50"
              onClick={() => handleSwipe("right")}
            >
              <Heart className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate-500">
          {currentIndex + 1} of {profiles.length} potential matches
        </p>
      </div>
    </div>
  )
}
