import { Navbar } from "@/components/layout/navbar"
import { SwipeDeck } from "@/components/swipe-deck"

export default function MatchesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-[#FF5A5F] mb-8">Find Matches</h1>

        <SwipeDeck />
      </main>
    </div>
  )
}
