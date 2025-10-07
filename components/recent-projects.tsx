import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    image: "/modern-kitchen-renovation-before-after.jpg",
    title: "Cuisine moderne",
    category: "Rénovation complète",
    location: "Paris 16ème",
  },
  {
    image: "/luxury-bathroom-renovation-marble.jpg",
    title: "Salle de bain luxe",
    category: "Design & Carrelage",
    location: "Neuilly-sur-Seine",
  },
  {
    image: "/contemporary-living-room-interior.jpg",
    title: "Salon contemporain",
    category: "Aménagement",
    location: "Boulogne",
  },
  {
    image: "/custom-walk-in-closet.jpg",
    title: "Dressing sur mesure",
    category: "Menuiserie",
    location: "Versailles",
  },
]

export function RecentProjects() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos réalisations récentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos projets de rénovation intérieure haut de gamme
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/realisations"
              className="group relative overflow-hidden rounded-lg aspect-[3/4] block"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <p className="text-sm font-medium mb-2 text-accent-foreground">{project.category}</p>
                <h3 className="font-serif text-2xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm opacity-90">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/realisations">
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
