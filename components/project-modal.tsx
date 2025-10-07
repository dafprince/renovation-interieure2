"use client"

import { X, MapPin, Clock, Euro, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import Link from "next/link"

interface ProjectModalProps {
  project: {
    id: number
    title: string
    category: string
    location: string
    surface: string
    duration: string
    budget: string
    imageBefore: string
    imageAfter: string
    description: string
    materials: string[]
    features: string[]
    images: string[]
  }
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-3 capitalize">
              {project.category.replace("-", " ")}
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 className="w-5 h-5" />
                <span>{project.surface}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="w-5 h-5" />
                <span>{project.budget}</span>
              </div>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Avant / Après</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <BeforeAfterSlider beforeImage={project.imageBefore} afterImage={project.imageAfter} />
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Description du projet</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Materials & Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Matériaux utilisés</h3>
              <ul className="space-y-2">
                {project.materials.map((material, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Caractéristiques</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Images */}
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Plus de photos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-border">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/devis">Demander un devis similaire</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
