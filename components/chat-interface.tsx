"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, Heart, Star } from "lucide-react"
import Link from "next/link"

type ChatPreview = {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
  matched?: boolean
  liked?: boolean
}

export function ChatInterface() {
  const [searchQuery, setSearchQuery] = useState("")

  const allChats: ChatPreview[] = [
    {
      id: "1",
      name: "Emma",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Hey there! I noticed we're both CS majors...",
      time: "11:42 AM",
      unread: 2,
      online: true,
      matched: true,
    },
    {
      id: "2",
      name: "Michael",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Would you like to grab coffee sometime?",
      time: "Yesterday",
      unread: 0,
      online: false,
      matched: true,
    },
    {
      id: "3",
      name: "Sophia",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I'm heading to the library now. See you there!",
      time: "Yesterday",
      unread: 0,
      online: true,
      matched: true,
    },
    {
      id: "4",
      name: "James",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "That concert sounds amazing!",
      time: "Monday",
      unread: 0,
      online: false,
      liked: true,
    },
    {
      id: "5",
      name: "Olivia",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the study group invite",
      time: "Monday",
      unread: 0,
      online: false,
    },
    {
      id: "6",
      name: "Noah",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let me know when you're free this weekend",
      time: "Sunday",
      unread: 0,
      online: false,
    },
  ]

  const filteredChats = allChats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const matchedChats = filteredChats.filter((chat) => chat.matched)
  const likedChats = filteredChats.filter((chat) => chat.liked)

  return (
    <Card className="border-sage-100">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle>Messages</CardTitle>
          <Button variant="outline" size="sm" className="border-slate-200">
            <MessageCircle className="h-4 w-4 mr-2" />
            New Chat
          </Button>
        </div>
        <div className="relative mt-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search messages..."
            className="pl-9 border-slate-200 focus-visible:ring-sage-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-0 -mx-2">
            {filteredChats.length > 0 ? (
              filteredChats.map((chat) => (
                <Link href={`/messages/${chat.id}`} key={chat.id}>
                  <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {chat.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-slate-800 truncate">{chat.name}</h4>
                        <span className="text-xs text-slate-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && <Badge className="bg-sage-500 ml-2">{chat.unread}</Badge>}
                    {chat.matched && <Heart className="h-4 w-4 text-coral-500 fill-coral-500" />}
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-500">No messages found</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="matches" className="space-y-0 -mx-2">
            {matchedChats.length > 0 ? (
              matchedChats.map((chat) => (
                <Link href={`/messages/${chat.id}`} key={chat.id}>
                  <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {chat.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-slate-800 truncate">{chat.name}</h4>
                        <span className="text-xs text-slate-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && <Badge className="bg-sage-500 ml-2">{chat.unread}</Badge>}
                    <Heart className="h-4 w-4 text-coral-500 fill-coral-500" />
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="bg-slate-50 inline-flex p-4 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">No matches yet</h3>
                <p className="text-slate-500 mb-4">Start swiping to find your matches</p>
                <Link href="/matches">
                  <Button className="bg-sage-500 hover:bg-sage-600">Find Matches</Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="likes" className="space-y-0 -mx-2">
            {likedChats.length > 0 ? (
              likedChats.map((chat) => (
                <Link href={`/messages/${chat.id}`} key={chat.id}>
                  <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {chat.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-slate-800 truncate">{chat.name}</h4>
                        <span className="text-xs text-slate-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && <Badge className="bg-sage-500 ml-2">{chat.unread}</Badge>}
                    <Star className="h-4 w-4 text-coral-500 fill-coral-500" />
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="bg-slate-50 inline-flex p-4 rounded-full mb-4">
                  <Star className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">No likes yet</h3>
                <p className="text-slate-500">You'll see people who liked your profile here</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
