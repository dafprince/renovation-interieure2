"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "Tous les projets" },
  { id: "cuisine", label: "Cuisines" },
  { id: "salle-de-bain", label: "Salles de bain" },
  { id: "salon", label: "Salons" },
  { id: "chambre", label: "Chambres" },
  { id: "bureau", label: "Bureaux" },
  { id: "dressing", label: "Dressings" },
]

export function GalleryFilters() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeFilter === category.id ? "default" : "outline"}
            onClick={() => setActiveFilter(category.id)}
            className={
              activeFilter === category.id
                ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                : "hover:bg-accent/10"
            }
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
