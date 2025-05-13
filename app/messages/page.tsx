import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus } from "lucide-react"
import Link from "next/link"

type Match = {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: boolean
}

export default function MessagesPage() {
  const matches: Match[] = [
    {
      id: 1,
      name: "Emma",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Perfect! How about Wednesday at 7pm?",
      time: "2m",
      unread: true,
    },
    {
      id: 2,
      name: "James",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "That coffee shop sounds great!",
      time: "1h",
      unread: false,
    },
    {
      id: 3,
      name: "Sophia",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Did you see the new exhibit?",
      time: "3h",
      unread: false,
    },
    {
      id: 4,
      name: "Michael",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let's meet at the library tomorrow",
      time: "5h",
      unread: false,
    },
    {
      id: 5,
      name: "Olivia",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the study notes!",
      time: "1d",
      unread: false,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Messages</h1>
            <Button className="bg-sage-500 hover:bg-sage-600">
              <Plus className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Search messages..." className="pl-9 border-slate-200 focus-visible:ring-sage-500" />
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Messages</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <Card className="border-sage-100 overflow-hidden">
                {matches.map((match, index) => (
                  <Link href={`/messages/${match.id}`} key={match.id}>
                    <div
                      className={`flex items-center gap-3 p-4 hover:bg-slate-50 cursor-pointer ${
                        index !== matches.length - 1 ? "border-b border-slate-100" : ""
                      }`}
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={match.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{match.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className={`font-medium ${match.unread ? "text-slate-800" : "text-slate-700"}`}>
                            {match.name}
                          </h3>
                          <span className="text-xs text-slate-500">{match.time}</span>
                        </div>
                        <p
                          className={`text-sm truncate ${
                            match.unread ? "text-slate-800 font-medium" : "text-slate-500"
                          }`}
                        >
                          {match.lastMessage}
                        </p>
                      </div>
                      {match.unread && <div className="h-2.5 w-2.5 rounded-full bg-sage-500" />}
                    </div>
                  </Link>
                ))}
              </Card>
            </TabsContent>

            <TabsContent value="unread">
              <Card className="border-sage-100 overflow-hidden">
                {matches
                  .filter((match) => match.unread)
                  .map((match, index, filtered) => (
                    <Link href={`/messages/${match.id}`} key={match.id}>
                      <div
                        className={`flex items-center gap-3 p-4 hover:bg-slate-50 cursor-pointer ${
                          index !== filtered.length - 1 ? "border-b border-slate-100" : ""
                        }`}
                      >
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={match.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{match.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium text-slate-800">{match.name}</h3>
                            <span className="text-xs text-slate-500">{match.time}</span>
                          </div>
                          <p className="text-sm text-slate-800 font-medium truncate">{match.lastMessage}</p>
                        </div>
                        <div className="h-2.5 w-2.5 rounded-full bg-sage-500" />
                      </div>
                    </Link>
                  ))}

                {matches.filter((match) => match.unread).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No unread messages</p>
                  </div>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="archived">
              <Card className="border-sage-100">
                <div className="text-center py-12">
                  <p className="text-slate-500">No archived messages</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
