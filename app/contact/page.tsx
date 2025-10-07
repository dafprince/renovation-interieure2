"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("Votre message a été envoyé ! Nous vous répondrons dans les plus brefs délais.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <Mail className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-4">Contactez-nous</h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-primary font-semibold mb-2 block">
                    Nom complet *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-primary font-semibold mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-primary font-semibold mb-2 block">
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-primary font-semibold mb-2 block">
                    Sujet *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Demande de devis pour rénovation cuisine"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary font-semibold mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet en détail..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 gap-2">
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">Nos coordonnées</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Adresse</div>
                      <p className="text-muted-foreground">45 Avenue Jean Jaurès</p>
                      <p className="text-muted-foreground">69007 Lyon, France</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Téléphone</div>
                      <a href="tel:+33472123456" className="text-muted-foreground hover:text-accent transition-colors">
                        +33 4 72 12 34 56
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Email</div>
                      <a
                        href="mailto:contact@renovision.fr"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        contact@renovision.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Horaires</div>
                      <p className="text-muted-foreground">Lundi - Vendredi : 8h - 18h</p>
                      <p className="text-muted-foreground">Samedi : 9h - 12h</p>
                      <p className="text-muted-foreground">Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h3 className="font-serif font-bold text-primary mb-3">Urgence ?</h3>
                <p className="text-muted-foreground mb-4">
                  Pour les urgences, appelez-nous directement. Nous intervenons rapidement dans toute la région.
                </p>
                <a
                  href="tel:+33472123456"
                  className="inline-block bg-accent text-background px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
