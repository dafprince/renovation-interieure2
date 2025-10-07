import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  service: {
    icon: LucideIcon
    title: string
    slug: string
    description: string
    image: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <div className="w-14 h-14 rounded-lg bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <service.icon className="w-7 h-7 text-primary-foreground" />
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
        <Button
          variant="outline"
          asChild
          className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors bg-transparent"
        >
          <Link href={`/services/${service.slug}`}>
            En savoir plus
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
