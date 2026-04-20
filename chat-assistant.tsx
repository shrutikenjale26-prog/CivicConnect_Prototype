"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, User, Loader2, Sparkles } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const suggestedQuestions = [
  "How do I report a pothole?",
  "What is the average resolution time?",
  "How can I track my complaint?",
  "What issues can I report?",
]

const mockResponses: Record<string, string> = {
  "pothole": "To report a pothole, navigate to the 'Report Issue' section above. Select 'Pothole' as the issue type, provide the exact location (you can use the map), add a description, and optionally upload a photo. Our AI will automatically categorize it and route it to the Roads Department.",
  "time": "Our average resolution time varies by issue type. Potholes typically take 3-5 business days, street lights 1-2 days, and water leakages are prioritized for same-day response. You can track real-time updates in your dashboard.",
  "track": "You can track your complaint by visiting the Dashboard section. Each report has a unique ID and shows a detailed timeline of progress. You'll also receive notifications via email or SMS when the status changes.",
  "report": "You can report various civic issues including: potholes, street light malfunctions, water leakages, garbage collection problems, drainage issues, road damage, traffic signal problems, and public property damage. Our AI helps categorize your report automatically.",
  "default": "I'm here to help with civic issues! You can ask me about reporting problems, tracking complaints, or any questions about how CivicConnect AI works. Try asking about specific issues like potholes, street lights, or water leakages.",
}

function getAIResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  if (lowerMessage.includes("pothole")) return mockResponses.pothole
  if (lowerMessage.includes("time") || lowerMessage.includes("resolution") || lowerMessage.includes("average")) return mockResponses.time
  if (lowerMessage.includes("track") || lowerMessage.includes("status") || lowerMessage.includes("follow")) return mockResponses.track
  if (lowerMessage.includes("report") || lowerMessage.includes("issue") || lowerMessage.includes("what")) return mockResponses.report
  return mockResponses.default
}

export function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your CivicConnect AI assistant. How can I help you today? You can ask me about reporting issues, tracking complaints, or any other civic-related questions.",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000))

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getAIResponse(input),
    }

    setMessages((prev) => [...prev, aiResponse])
    setIsTyping(false)
  }

  const handleSuggestion = (question: string) => {
    setInput(question)
  }

  return (
    <section id="chat" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">AI Assistant</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Get Instant Help with AI
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Have questions about reporting civic issues? Our AI assistant is here to help 24/7. Get instant answers about the reporting process, track your complaints, or learn more about our platform.
            </p>

            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-4">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <Button
                    key={question}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestion(question)}
                    className="text-sm"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-secondary/50 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Powered by AI</p>
                  <p className="text-sm text-muted-foreground">Fast, accurate responses 24/7</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI assistant is trained on civic processes and can help you navigate the reporting system efficiently. For complex issues, you can always escalate to human support.
              </p>
            </div>
          </div>

          <Card className="shadow-xl shadow-primary/5">
            <CardHeader className="border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-lg">CivicConnect Assistant</CardTitle>
                  <CardDescription>AI-powered help</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        message.role === "user" ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <Bot className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-secondary rounded-2xl px-4 py-3">
                      <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-border">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
