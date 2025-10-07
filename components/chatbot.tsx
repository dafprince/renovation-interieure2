"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Bonjour ! Je suis l'assistant virtuel de RénoVision. Comment puis-je vous aider aujourd'hui ?",
    },
  ])
  const [input, setInput] = useState("")

  const quickReplies = ["Demander un devis", "Voir les réalisations", "Prendre rendez-vous", "Zones d'intervention"]

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([...messages, { type: "user", text: input }])

    // Simulate bot response
    setTimeout(() => {
      let botResponse = ""
      if (input.toLowerCase().includes("devis")) {
        botResponse =
          "Je vous invite à remplir notre formulaire de devis en ligne pour obtenir une estimation rapide. Souhaitez-vous que je vous y redirige ?"
      } else if (input.toLowerCase().includes("prix") || input.toLowerCase().includes("tarif")) {
        botResponse =
          "Nos tarifs varient selon le type de projet. Pour une estimation précise, je vous recommande de demander un devis personnalisé. Puis-je vous aider avec autre chose ?"
      } else {
        botResponse =
          "Merci pour votre message. Un conseiller vous répondra dans les plus brefs délais. Puis-je vous aider avec autre chose ?"
      }
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }])
    }, 1000)

    setInput("")
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-accent text-background rounded-full shadow-lg hover:bg-accent/90 transition-all hover:scale-110 flex items-center justify-center z-50"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-card border-2 border-border rounded-lg shadow-2xl flex flex-col z-50">
          <div className="bg-primary p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-background" />
              </div>
              <div>
                <div className="font-bold text-background">Assistant RénoVision</div>
                <div className="text-xs text-background/80">En ligne</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-background hover:bg-background/10 p-2 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === "user" ? "bg-accent text-background" : "bg-muted text-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(reply)
                    handleSend()
                  }}
                  className="text-xs bg-muted hover:bg-accent hover:text-background px-3 py-1 rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Tapez votre message..."
                className="flex-1"
              />
              <Button onClick={handleSend} className="bg-accent hover:bg-accent/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
