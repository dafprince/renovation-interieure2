"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryFilters } from "@/components/gallery-filters"
import { ProjectGrid } from "@/components/project-grid"
import { Award, Users, Clock, TrendingUp, CheckCircle, Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function RealisationsPage() {
  const [showVideo, setShowVideo] = useState(false)

  const stats = [
    { icon: TrendingUp, value: "500+", label: "Projets réalisés", color: "text-accent" },
    { icon: Users, value: "450+", label: "Clients satisfaits", color: "text-green-500" },
    { icon: Clock, value: "15 ans", label: "D'expérience", color: "text-blue-500" },
    { icon: Award, value: "25+", label: "Récompenses", color: "text-amber-500" },
  ]

  const process = [
    {
      step: "01",
      title: "Consultation initiale",
      description: "Rencontre pour comprendre vos besoins, vos goûts et votre budget",
    },
    {
      step: "02",
      title: "Conception & Design",
      description: "Création de plans 3D et sélection des matériaux avec votre validation",
    },
    {
      step: "03",
      title: "Réalisation",
      description: "Exécution des travaux par nos artisans qualifiés avec suivi quotidien",
    },
    {
      step: "04",
      title: "Livraison & Garantie",
      description: "Réception des travaux et garantie décennale pour votre tranquillité",
    },
  ]

  const certifications = [
    { name: "Qualibat", description: "Certification qualité bâtiment" },
    { name: "RGE", description: "Reconnu Garant Environnement" },
    { name: "Artisan d'Art", description: "Label excellence artisanale" },
    { name: "Garantie Décennale", description: "Assurance tous risques" },
  ]

  const featuredProjects = [
    {
      title: "Villa Moderne - Paris 16ème",
      category: "Rénovation complète",
      surface: "180m²",
      duration: "3 mois",
      budget: "150 000€",
      image: "living-room-fireplace.jpg",
      description: "Transformation complète d'une villa avec création d'espaces ouverts et matériaux nobles",
    },
    {
      title: "Appartement Haussmannien",
      category: "Rénovation prestige",
      surface: "120m²",
      duration: "2 mois",
      budget: "95 000€",
      image: "contemporary-living-room-interior.jpg",
      description: "Rénovation respectant le cachet ancien avec équipements modernes",
    },
  ]

  const clientTestimonials = [
    {
      name: "Marie Lefebvre",
      project: "Rénovation appartement",
      location: "Paris 15ème",
      text: "Une équipe exceptionnelle qui a su transformer notre appartement en respectant nos contraintes de temps et de budget. Le résultat est au-delà de nos espérances !",
      rating: 5,
      image: "/client-marie.jpg",
      date: "Janvier 2025",
    },
    {
      name: "Pierre Durand",
      project: "Cuisine sur mesure",
      location: "Neuilly-sur-Seine",
      text: "Professionnalisme, créativité et qualité d'exécution. Notre cuisine est devenue la pièce maîtresse de notre maison. Merci à toute l'équipe !",
      rating: 5,
      image: "/client-pierre.jpg",
      date: "Décembre 2024",
    },
    {
      name: "Sophie Bernard",
      project: "Salle de bain luxe",
      location: "Boulogne",
      text: "Un travail d'orfèvre ! Chaque détail a été pensé et réalisé avec soin. La transformation est spectaculaire et la qualité irréprochable.",
      rating: 5,
      image: "client-sophie.jpg",
      date: "Novembre 2024",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold mb-6">
              Portfolio Excellence
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-6 text-balance">
              Nos Réalisations
            </h1>
            <p className="text-xl text-background/90 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos projets de rénovation intérieure haut de gamme. Chaque réalisation témoigne de notre
              expertise et de notre engagement envers l'excellence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background/10 backdrop-blur-sm p-6 rounded-xl text-center border border-background/20"
              >
                <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl md:text-4xl font-bold text-background mb-1">{stat.value}</div>
                <div className="text-sm text-background/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Projets d'exception</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos réalisations les plus prestigieuses qui illustrent notre savoir-faire
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm text-accent font-semibold mb-2">{project.category}</div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-secondary/50 p-3 rounded-lg text-center">
                      <div className="text-sm font-semibold text-primary">{project.surface}</div>
                      <div className="text-xs text-muted-foreground">Surface</div>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg text-center">
                      <div className="text-sm font-semibold text-primary">{project.duration}</div>
                      <div className="text-xs text-muted-foreground">Durée</div>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg text-center">
                      <div className="text-sm font-semibold text-primary">{project.budget}</div>
                      <div className="text-xs text-muted-foreground">Budget</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-6">
              Découvrez nos réalisations en vidéo
            </h2>
            <p className="text-xl text-background/90 mb-8">
              Plongez dans l'univers de nos transformations exceptionnelles
            </p>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {!showVideo ? (
                <div
                  className="relative w-full h-full bg-gradient-to-br from-accent/20 to-primary/40 flex items-center justify-center cursor-pointer group"
                  onClick={() => setShowVideo(true)}
                >
                  <Image src="/video-thumbnail.jpg" alt="Vidéo réalisations" fill className="object-cover opacity-50" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-primary ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Nos réalisations"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Notre méthodologie éprouvée</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un processus structuré pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-accent/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Toutes nos réalisations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorez notre portfolio complet et filtrez par catégorie
            </p>
          </div>
          <GalleryFilters />
          <ProjectGrid />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Certifications & Garanties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des labels reconnus qui attestent de notre expertise et de notre engagement qualité
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border text-center hover:border-accent transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Témoignages clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus belle récompense
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.location} • {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-4">
            Votre projet mérite l'excellence
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Rejoignez nos centaines de clients satisfaits et concrétisez votre projet de rénovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/devis">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-background text-background hover:bg-background/10 bg-transparent"
              >
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
