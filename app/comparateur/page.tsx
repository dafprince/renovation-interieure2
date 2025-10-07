"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeftRight, Upload, X, TrendingUp, Award, Clock, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComparateurPage() {
  const [beforeImage, setBeforeImage] = useState<string | null>(null)
  const [afterImage, setAfterImage] = useState<string | null>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "before" | "after") => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type === "before") {
          setBeforeImage(reader.result as string)
        } else {
          setAfterImage(reader.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const exampleProjects = [
    {
      title: "Cuisine moderne",
      before: "/kitchen-before-renovation.jpg",
      after: "kitchen-island-view.jpg",
      duration: "3 semaines",
      budget: "25 000€",
      surface: "18m²",
      description: "Transformation complète avec îlot central et électroménagers haut de gamme",
    },
    {
      title: "Salle de bain",
      before: "/bathroom-before-renovation.jpg",
      after: "elegant-bathroom-renovation-with-natural-stone.jpg",
      duration: "2 semaines",
      budget: "15 000€",
      surface: "8m²",
      description: "Rénovation luxueuse avec douche italienne et matériaux premium",
    },
    {
      title: "Salon contemporain",
      before: "/living-room-before.jpg",
      after: "contemporary-living-room-design.jpg",
      duration: "4 semaines",
      budget: "30 000€",
      surface: "35m²",
      description: "Aménagement complet avec parquet massif et éclairage design",
    },
  ]

  const stats = [
    { icon: TrendingUp, value: "500+", label: "Transformations réussies" },
    { icon: Award, value: "98%", label: "Clients satisfaits" },
    { icon: Clock, value: "15 ans", label: "D'expérience" },
    { icon: Star, value: "4.9/5", label: "Note moyenne" },
  ]

  const testimonials = [
    {
      name: "Sophie Martin",
      project: "Rénovation cuisine",
      text: "La transformation est spectaculaire ! L'équipe a su comprendre nos besoins et le résultat dépasse nos attentes.",
      rating: 5,
      image: "/client-sophie.jpg",
    },
    {
      name: "Thomas Dubois",
      project: "Salle de bain",
      text: "Travail impeccable et respect des délais. Notre salle de bain est devenue un véritable spa.",
      rating: 5,
      image: "team-thomas.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-4 bg-accent/20 rounded-full mb-6 animate-pulse">
            <ArrowLeftRight className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-6 text-balance">
            Comparateur Avant/Après
          </h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Visualisez la transformation de vos espaces ou explorez nos réalisations exceptionnelles
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
              Télécharger mes photos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background/10 bg-transparent"
            >
              Voir les exemples
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-br from-card to-secondary/20 p-8 md:p-12 rounded-2xl border border-border shadow-xl mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Comparez vos photos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Téléchargez vos photos avant et après pour visualiser la transformation avec notre outil interactif
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-center">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-accent transition-colors cursor-pointer">
                    {beforeImage ? (
                      <div className="relative">
                        <Image
                          src={beforeImage || "/placeholder.svg"}
                          alt="Avant"
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover rounded"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            setBeforeImage(null)
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <div className="text-primary font-semibold mb-2">Photo AVANT</div>
                        <div className="text-sm text-muted-foreground">Cliquez pour télécharger</div>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, "before")}
                  />
                </label>
              </div>

              <div>
                <label className="block text-center">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-accent transition-colors cursor-pointer">
                    {afterImage ? (
                      <div className="relative">
                        <Image
                          src={afterImage || "/placeholder.svg"}
                          alt="Après"
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover rounded"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            setAfterImage(null)
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <div className="text-primary font-semibold mb-2">Photo APRÈS</div>
                        <div className="text-sm text-muted-foreground">Cliquez pour télécharger</div>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, "after")}
                  />
                </label>
              </div>
            </div>

            {beforeImage && afterImage && (
              <div
                className="relative h-[500px] rounded-xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div className="absolute inset-0">
                  <Image src={afterImage || "/placeholder.svg"} alt="Après" fill className="object-cover" />
                </div>
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image src={beforeImage || "/placeholder.svg"} alt="Avant" fill className="object-cover" />
                </div>
                <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%` }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ArrowLeftRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded">AVANT</div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded">APRÈS</div>
              </div>
            )}
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Nos transformations spectaculaires
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez comment nous avons transformé ces espaces en lieux de vie exceptionnels
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {exampleProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.before || "/placeholder.svg"}
                      alt={`${project.title} - Avant`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      AVANT
                    </div>
                  </div>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.after || "/placeholder.svg"}
                      alt={`${project.title} - Après`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      APRÈS
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-secondary/50 p-2 rounded text-center">
                        <div className="font-semibold text-primary">{project.duration}</div>
                        <div className="text-muted-foreground">Durée</div>
                      </div>
                      <div className="bg-secondary/50 p-2 rounded text-center">
                        <div className="font-semibold text-primary">{project.budget}</div>
                        <div className="text-muted-foreground">Budget</div>
                      </div>
                      <div className="bg-secondary/50 p-2 rounded text-center">
                        <div className="font-semibold text-primary">{project.surface}</div>
                        <div className="text-muted-foreground">Surface</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/30 to-accent/5 p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Ce que disent nos clients</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-4">
            Prêt à transformer votre intérieur ?
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit et découvrez comment nous pouvons sublimer votre espace
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
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
