import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Marie Dubois",
    location: "Lyon 6ème",
    rating: 5,
    text: "Nous avons fait appel à RénoVision pour la rénovation complète de notre appartement. Le résultat dépasse toutes nos attentes ! L'équipe est professionnelle, à l'écoute et d'une grande créativité. Les délais ont été respectés et le chantier était toujours impeccable.",
    project: "Rénovation complète 85m²",
    image: "/client-marie.jpg",
  },
  {
    name: "Pierre Rousseau",
    location: "Villeurbanne",
    rating: 5,
    text: "Excellente expérience du début à la fin. Marc et son équipe ont transformé notre cuisine en un espace moderne et fonctionnel. La qualité des matériaux et des finitions est remarquable. Je recommande sans hésitation !",
    project: "Cuisine sur-mesure",
    image: "/client-pierre.jpg",
  },
  {
    name: "Isabelle Martin",
    location: "Lyon 3ème",
    rating: 5,
    text: "Un grand merci à toute l'équipe pour la rénovation de notre salle de bain. Sophie, l'architecte d'intérieur, a su créer un espace élégant et pratique. Les artisans sont très qualifiés et le suivi de chantier était parfait.",
    project: "Salle de bain luxe",
    image: "/client-isabelle.jpg",
  },
  {
    name: "Jean Lefebvre",
    location: "Caluire",
    rating: 5,
    text: "Projet de peinture et parquet dans tout l'appartement. Travail soigné, propre et rapide. L'équipe est ponctuelle et respectueuse. Le rapport qualité-prix est excellent. Nous ferons à nouveau appel à eux pour nos futurs projets.",
    project: "Peinture & Parquet",
    image: "/client-jean.jpg",
  },
  {
    name: "Sophie Durand",
    location: "Lyon 7ème",
    rating: 5,
    text: "RénoVision a réalisé l'aménagement de notre dressing et la pose de menuiseries sur-mesure. Le résultat est magnifique et parfaitement adapté à nos besoins. L'accompagnement tout au long du projet était rassurant.",
    project: "Menuiserie sur-mesure",
    image: "/client-sophie.jpg",
  },
  {
    name: "Laurent Bernard",
    location: "Écully",
    rating: 5,
    text: "Rénovation de notre salon avec création d'une bibliothèque intégrée. Le design proposé était exactement ce que nous voulions. Les finitions sont impeccables et le chantier s'est déroulé sans aucun problème. Bravo !",
    project: "Aménagement salon",
    image: "/client-laurent.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus de 450 clients satisfaits nous ont fait confiance pour leurs projets de rénovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-background hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-accent font-semibold">{testimonial.project}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
