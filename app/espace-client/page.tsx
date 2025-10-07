"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, Calendar, MessageSquare, Settings, LogOut, Download, Eye, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EspaceClientPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const projects = [
    {
      id: 1,
      title: "Rénovation cuisine",
      status: "En cours",
      progress: 65,
      startDate: "15 Jan 2025",
      estimatedEnd: "28 Fév 2025",
      statusColor: "text-blue-500",
      icon: Clock,
    },
    {
      id: 2,
      title: "Peinture salon",
      status: "Terminé",
      progress: 100,
      startDate: "1 Déc 2024",
      estimatedEnd: "20 Déc 2024",
      statusColor: "text-green-500",
      icon: CheckCircle,
    },
  ]

  const documents = [
    { name: "Devis_Cuisine_2025.pdf", date: "10 Jan 2025", size: "245 KB" },
    { name: "Facture_Peinture.pdf", date: "20 Déc 2024", size: "180 KB" },
    { name: "Garantie_Travaux.pdf", date: "20 Déc 2024", size: "320 KB" },
  ]

  const messages = [
    {
      from: "Marc Dubois",
      subject: "Avancement de votre projet",
      date: "Aujourd'hui",
      unread: true,
    },
    {
      from: "Julie Rousseau",
      subject: "Confirmation rendez-vous",
      date: "Hier",
      unread: false,
    },
  ]

  if (!user) return null

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-background mb-2">Bienvenue, {user.name}</h1>
              <p className="text-background/80">{user.email}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="gap-2 bg-transparent text-background border-background hover:bg-background hover:text-primary"
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all cursor-pointer">
              <FileText className="w-10 h-10 text-accent mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Documents</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all cursor-pointer">
              <Calendar className="w-10 h-10 text-accent mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">1</div>
              <div className="text-sm text-muted-foreground">RDV à venir</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all cursor-pointer">
              <MessageSquare className="w-10 h-10 text-accent mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">2</div>
              <div className="text-sm text-muted-foreground">Messages</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all cursor-pointer">
              <Settings className="w-10 h-10 text-accent mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">-</div>
              <div className="text-sm text-muted-foreground">Paramètres</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Mes projets</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-serif font-bold text-primary mb-1">{project.title}</h3>
                        <div className={`flex items-center gap-2 ${project.statusColor} font-semibold text-sm`}>
                          <project.icon className="w-4 h-4" />
                          {project.status}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Eye className="w-4 h-4" />
                        Voir
                      </Button>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Progression</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-accent rounded-full h-2 transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Début : {project.startDate}</span>
                      <span>Fin prévue : {project.estimatedEnd}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Mes documents</h2>
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-accent" />
                        <div>
                          <div className="font-semibold text-primary">{doc.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {doc.date} • {doc.size}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Messages</h2>
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-4 hover:bg-muted transition-colors border-b border-border last:border-b-0 cursor-pointer ${
                        message.unread ? "bg-accent/5" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-semibold text-primary">{message.from}</div>
                        <div className="text-sm text-muted-foreground">{message.date}</div>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        {message.unread && <div className="w-2 h-2 bg-accent rounded-full" />}
                        {message.subject}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
