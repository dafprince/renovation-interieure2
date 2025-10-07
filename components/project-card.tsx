"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Maximize2 } from "lucide-react"
import { BeforeAfterSlider } from "@/components/before-after-slider"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    location: string
    surface: string
    imageBefore: string
    imageAfter: string
  }
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [showComparison, setShowComparison] = useState(false)

  return (
    <Card
      className="group cursor-pointer overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {showComparison ? (
          <BeforeAfterSlider beforeImage={project.imageBefore} afterImage={project.imageAfter} />
        ) : (
          <img
            src={project.imageAfter || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* Overlay with comparison toggle */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowComparison(!showComparison)
              }}
              className="px-4 py-2 bg-primary-foreground text-primary rounded-lg text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              {showComparison ? "Voir après" : "Avant / Après"}
            </button>
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
              <Maximize2 className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-3">
          <Badge variant="secondary" className="mb-2 capitalize">
            {project.category.replace("-", " ")}
          </Badge>
        </div>
        <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">{project.title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span>{project.location}</span>
        </div>
        <p className="text-sm text-muted-foreground">Surface: {project.surface}</p>
      </CardContent>
    </Card>
  )
}
