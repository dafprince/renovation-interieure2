"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"

const projects = [
  {
    id: 1,
    title: "Cuisine Moderne Épurée",
    category: "cuisine",
    location: "Paris 16ème",
    surface: "25 m²",
    duration: "3 semaines",
    budget: "35 000 - 40 000 €",
    imageBefore: "/kitchen-before-renovation.jpg",
    imageAfter: "/modern-luxury-kitchen-renovation-with-marble-count.jpg",
    description:
      "Transformation complète d'une cuisine classique en un espace moderne et fonctionnel. Installation de meubles sur mesure, plan de travail en marbre, électroménager haut de gamme.",
    materials: ["Marbre Calacatta", "Bois de chêne", "Acier inoxydable", "Carrelage grand format"],
    features: ["Îlot central", "Éclairage LED intégré", "Électroménager Miele", "Rangements optimisés"],
    images: [
      "/modern-luxury-kitchen-renovation-with-marble-count.jpg",
      "/kitchen-detail-marble-countertop.jpg",
      "/kitchen-island-view.jpg",
    ],
  },
  {
    id: 2,
    title: "Salle de Bain Luxe",
    category: "salle-de-bain",
    location: "Neuilly-sur-Seine",
    surface: "15 m²",
    duration: "2 semaines",
    budget: "25 000 - 30 000 €",
    imageBefore: "/bathroom-before-renovation.jpg",
    imageAfter: "/luxury-bathroom-renovation-marble.jpg",
    description:
      "Création d'une salle de bain spa avec douche à l'italienne, baignoire îlot, et finitions en pierre naturelle. Ambiance zen et épurée.",
    materials: ["Pierre naturelle", "Marbre blanc", "Robinetterie dorée", "Verre trempé"],
    features: ["Douche à l'italienne", "Baignoire îlot", "Chauffage au sol", "Miroir lumineux"],
    images: ["/luxury-bathroom-renovation-marble.jpg", "/bathroom-shower-detail.jpg", "/bathroom-vanity.jpg"],
  },
  {
    id: 3,
    title: "Salon Contemporain",
    category: "salon",
    location: "Boulogne-Billancourt",
    surface: "40 m²",
    duration: "4 semaines",
    budget: "30 000 - 35 000 €",
    imageBefore: "/living-room-before.jpg",
    imageAfter: "/contemporary-living-room-interior.jpg",
    description:
      "Réaménagement complet d'un salon avec création d'une bibliothèque sur mesure, cheminée moderne, et optimisation de l'espace.",
    materials: ["Parquet chêne massif", "Plâtre décoratif", "Métal noir", "Tissu haut de gamme"],
    features: ["Bibliothèque sur mesure", "Cheminée bioéthanol", "Éclairage d'ambiance", "Acoustique optimisée"],
    images: ["/contemporary-living-room-interior.jpg", "/living-room-bookshelf.jpg", "/living-room-fireplace.jpg"],
  },
  {
    id: 4,
    title: "Dressing Sur Mesure",
    category: "dressing",
    location: "Versailles",
    surface: "12 m²",
    duration: "2 semaines",
    budget: "15 000 - 18 000 €",
    imageBefore: "/closet-before.jpg",
    imageAfter: "/custom-walk-in-closet.jpg",
    description:
      "Conception et installation d'un dressing walk-in avec rangements optimisés, éclairage LED, et finitions luxueuses.",
    materials: ["Bois laqué", "Miroirs", "LED intégrés", "Accessoires chromés"],
    features: ["Rangements modulables", "Îlot central", "Éclairage automatique", "Miroir pleine hauteur"],
    images: ["/custom-walk-in-closet.jpg", "/closet-detail-shelving.jpg", "/closet-island.jpg"],
  },
  {
    id: 5,
    title: "Chambre Parentale Cosy",
    category: "chambre",
    location: "Saint-Cloud",
    surface: "20 m²",
    duration: "2 semaines",
    budget: "18 000 - 22 000 €",
    imageBefore: "/bedroom-before.jpg",
    imageAfter: "/cozy-master-bedroom.jpg",
    description:
      "Transformation d'une chambre en suite parentale avec tête de lit sur mesure, dressing intégré, et ambiance chaleureuse.",
    materials: ["Bois naturel", "Tissu velours", "Peinture mate", "Parquet contrecollé"],
    features: ["Tête de lit capitonnée", "Dressing intégré", "Éclairage indirect", "Isolation phonique"],
    images: ["/cozy-master-bedroom.jpg", "/bedroom-headboard.jpg", "/bedroom-closet.jpg"],
  },
  {
    id: 6,
    title: "Bureau Moderne",
    category: "bureau",
    location: "Levallois-Perret",
    surface: "18 m²",
    duration: "2 semaines",
    budget: "12 000 - 15 000 €",
    imageBefore: "/office-before.jpg",
    imageAfter: "/modern-home-office.jpg",
    description:
      "Création d'un espace de travail fonctionnel et design avec bibliothèque murale, bureau intégré, et éclairage optimisé.",
    materials: ["Bois de noyer", "Métal noir mat", "Verre", "Peinture ardoise"],
    features: ["Bureau sur mesure", "Bibliothèque murale", "Câblage intégré", "Acoustique traitée"],
    images: ["/modern-home-office.jpg", "/office-desk-detail.jpg", "/office-bookshelf.jpg"],
  },
]

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  )
}
