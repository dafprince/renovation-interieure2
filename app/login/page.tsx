"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LogIn, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Login attempt:", formData)
    // Simulate login - in production, this would call your auth API
    localStorage.setItem("user", JSON.stringify({ email: formData.email, name: "Client" }))
    router.push("/espace-client")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <LogIn className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-4">Connexion</h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">Accédez à votre espace client</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-primary font-semibold mb-2 block">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-primary font-semibold mb-2 block">
                  Mot de passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Se souvenir de moi</span>
                </label>
                <Link href="/forgot-password" className="text-accent hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Se connecter
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Pas encore de compte ?{" "}
                <Link href="/register" className="text-accent font-semibold hover:underline">
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
