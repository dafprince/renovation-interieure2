import { Paintbrush, Hammer, Ruler, Sparkles, Home, Wrench } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    icon: Ruler,
    title: "Design d'intérieur",
    description: "Conception sur mesure et plans 3D pour visualiser votre projet avant réalisation.",
    link: "/services/design",
    image: "contemporary-living-room-interior.jpg",
  },
  {
    icon: Paintbrush,
    title: "Peinture",
    description: "Travaux de peinture intérieure avec finitions impeccables et matériaux premium.",
    link: "/services/peinture",
    image: "/service-painting.jpg",
  },
  {
    icon: Sparkles,
    title: "Carrelage",
    description: "Pose de carrelage, faïence et revêtements de sol haut de gamme.",
    link: "/services/carrelage",
    image: "/service-tiling.jpg",
  },
  {
    icon: Hammer,
    title: "Menuiserie",
    description: "Création et installation de menuiseries sur mesure, placards et aménagements.",
    link: "/services/menuiserie",
    image: "/service-carpentry.jpg",
  },
  {
    icon: Home,
    title: "Rénovation complète",
    description: "Gestion de projet clé en main pour une transformation totale de votre espace.",
    link: "/services/renovation-complete",
    image: "/service-renovation.jpg",
  },
  {
    icon: Wrench,
    title: "Plomberie & Électricité",
    description: "Installation et rénovation de systèmes électriques et sanitaires aux normes.",
    link: "/services/plomberie",
    image: "/service-plumbing.jpg",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos services d'excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise complète pour tous vos projets de rénovation intérieure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-accent font-medium inline-flex items-center hover:gap-2 transition-all"
                >
                  En savoir plus
                  <span className="ml-1">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
            <Link href="/services">Découvrir tous nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
