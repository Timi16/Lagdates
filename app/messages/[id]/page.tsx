"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Video, MoreHorizontal, ImageIcon, Smile, Mic, Send, X } from "lucide-react"
import Link from "next/link"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"

type Message = {
  id: number
  content: string
  sender: "me" | "them"
  time: string
  status?: "sent" | "delivered" | "read"
  type?: "text" | "image" | "voice"
  duration?: string
  imageUrl?: string
}

export default function ChatPage({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hey there! I noticed we're both CS majors. What classes are you taking this semester?",
      sender: "them",
      time: "11:42 AM",
      status: "read",
    },
    {
      id: 2,
      content: "Hi! I'm taking Data Structures, Algorithms, and a UI/UX design elective. How about you?",
      sender: "me",
      time: "11:45 AM",
      status: "read",
    },
    {
      id: 3,
      content: "Nice! I'm in Data Structures too. Professor Johnson's section?",
      sender: "them",
      time: "11:47 AM",
      status: "read",
    },
    {
      id: 4,
      content: "Yes! His lectures are great. Would you want to study together sometime?",
      sender: "me",
      time: "11:50 AM",
      status: "read",
    },
    {
      id: 5,
      content: "That would be awesome! I'm usually at the library in the evenings.",
      sender: "them",
      time: "11:52 AM",
      status: "read",
    },
    {
      id: 6,
      type: "voice",
      content: "Voice message",
      duration: "0:22",
      sender: "them",
      time: "11:55 AM",
      status: "read",
    },
    {
      id: 7,
      content: "Perfect! How about Wednesday at 7pm?",
      sender: "me",
      time: "12:01 PM",
      status: "delivered",
    },
    {
      id: 8,
      type: "image",
      content: "Image",
      imageUrl: "/placeholder.svg?height=200&width=300",
      sender: "them",
      time: "12:05 PM",
      status: "read",
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showImageUpload, setShowImageUpload] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if ((!newMessage.trim() && !imagePreview) || (showImageUpload && !imagePreview)) return

    const newMsg: Message = {
      id: messages.length + 1,
      content: newMessage || "Image",
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sent",
      type: imagePreview ? "image" : "text",
      imageUrl: imagePreview || undefined,
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
    setImagePreview(null)
    setShowImageUpload(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleEmojiSelect = (emoji: any) => {
    setNewMessage((prev) => prev + emoji.native)
    setShowEmojiPicker(false)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerImageUpload = () => {
    setShowImageUpload(true)
    fileInputRef.current?.click()
  }

  const cancelImageUpload = () => {
    setImagePreview(null)
    setShowImageUpload(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
          {/* Chat Header */}
          <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <Link href="/messages">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <ArrowLeft className="h-5 w-5 text-slate-600" />
                </Button>
              </Link>
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium text-slate-800">Emma</h2>
                <p className="text-xs text-sage-500">Online now</p>
              </div>
            </div>

            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Phone className="h-4 w-4 text-slate-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Video className="h-4 w-4 text-slate-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MoreHorizontal className="h-4 w-4 text-slate-600" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-4 bg-gradient-to-b from-sage-50/50 to-slate-50/50">
            <div className="flex justify-center mb-4">
              <Badge variant="outline" className="text-xs text-slate-500 bg-white border-slate-100">
                Today
              </Badge>
            </div>

            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                  {message.sender === "them" && (
                    <Avatar className="h-8 w-8 mr-2 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                  )}

                  <div className="max-w-[75%]">
                    {message.type === "voice" ? (
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.sender === "me" ? "chat-bubble-sent" : "chat-bubble-received"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="voice-wave">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <span className="text-xs">{message.duration}</span>
                        </div>
                      </div>
                    ) : message.type === "image" ? (
                      <div
                        className={`rounded-2xl overflow-hidden ${
                          message.sender === "me" ? "chat-bubble-sent p-1" : "chat-bubble-received p-1"
                        }`}
                      >
                        <img
                          src={message.imageUrl || "/placeholder.svg"}
                          alt="Shared image"
                          className="max-w-full rounded-lg"
                          style={{ maxHeight: "200px" }}
                        />
                      </div>
                    ) : (
                      <div className={`${message.sender === "me" ? "chat-bubble-sent" : "chat-bubble-received"}`}>
                        {message.content}
                      </div>
                    )}

                    <div className={`flex text-xs mt-1 ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                      <span className="text-slate-500">{message.time}</span>
                      {message.sender === "me" && message.status && (
                        <span className="ml-1 text-slate-400">
                          {message.status === "sent" ? "✓" : message.status === "delivered" ? "✓✓" : "✓✓"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="p-3 border-t border-slate-100 bg-slate-50">
              <div className="relative inline-block">
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Upload preview"
                  className="h-20 rounded-lg border border-slate-200"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                  onClick={cancelImageUpload}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div className="p-3 border-t border-slate-100 bg-white relative">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" onClick={triggerImageUpload}>
                <ImageIcon className="h-5 w-5 text-slate-600" />
              </Button>
              <Input
                placeholder="Type a message..."
                className="flex-1 border-slate-200 focus-visible:ring-sage-500 bg-slate-50"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <Smile className="h-5 w-5 text-slate-600" />
              </Button>
              {newMessage || imagePreview ? (
                <Button
                  size="icon"
                  className="rounded-full h-9 w-9 bg-sage-500 hover:bg-sage-600"
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                </Button>
              ) : (
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <Mic className="h-5 w-5 text-slate-600" />
                </Button>
              )}
            </div>

            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-16 right-0 z-10">
                <Picker data={data} onEmojiSelect={handleEmojiSelect} theme="light" previewPosition="none" />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
