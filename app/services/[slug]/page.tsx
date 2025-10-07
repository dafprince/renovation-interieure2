import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const servicesData: Record<string, any> = {
  design: {
    title: "Design d'intérieur",
    subtitle: "Conception sur mesure pour des espaces uniques",
    heroImage: "/interior-design-service.jpg",
    description:
      "Notre service de design d'intérieur transforme vos idées en réalité. Nous créons des espaces qui reflètent votre personnalité tout en optimisant la fonctionnalité et l'esthétique.",
    benefits: [
      "Plans 3D photoréalistes",
      "Sélection de matériaux premium",
      "Optimisation de l'espace",
      "Conseil en décoration",
      "Suivi personnalisé",
      "Respect de votre budget",
    ],
    process: [
      {
        step: "1",
        title: "Consultation initiale",
        description: "Rencontre pour comprendre vos besoins, votre style et votre budget.",
      },
      {
        step: "2",
        title: "Conception 3D",
        description: "Création de plans détaillés et visualisations 3D de votre projet.",
      },
      {
        step: "3",
        title: "Sélection matériaux",
        description: "Choix des matériaux, couleurs et finitions avec notre expertise.",
      },
      {
        step: "4",
        title: "Réalisation",
        description: "Coordination des travaux et suivi jusqu'à la livraison finale.",
      },
    ],
    gallery: ["/design-example-1.jpg", "/design-example-2.jpg", "/design-example-3.jpg"],
    testimonial: {
      text: "L'équipe a su comprendre exactement ce que nous voulions. Le rendu 3D nous a permis de visualiser le projet avant même le début des travaux. Résultat exceptionnel !",
      author: "Marie Dubois",
      location: "Paris 8ème",
    },
  },
  peinture: {
    title: "Peinture",
    subtitle: "Finitions impeccables et matériaux premium",
    heroImage: "/painting-service.jpg",
    description:
      "Nos artisans peintres qualifiés apportent une touche de perfection à vos murs. Nous utilisons uniquement des peintures haut de gamme pour un résultat durable et esthétique.",
    benefits: [
      "Peintures écologiques",
      "Finitions multiples (mate, satinée, brillante)",
      "Préparation soignée des surfaces",
      "Protection des meubles et sols",
      "Nettoyage complet après travaux",
      "Garantie 2 ans",
    ],
    process: [
      {
        step: "1",
        title: "Diagnostic",
        description: "Évaluation de l'état des surfaces et conseil sur les finitions.",
      },
      {
        step: "2",
        title: "Préparation",
        description: "Rebouchage, ponçage et protection de votre mobilier.",
      },
      {
        step: "3",
        title: "Application",
        description: "Pose de la peinture avec techniques professionnelles.",
      },
      {
        step: "4",
        title: "Finitions",
        description: "Retouches et nettoyage complet de l'espace.",
      },
    ],
    gallery: ["/painting-example-1.jpg", "/painting-example-2.jpg", "/painting-example-3.jpg"],
    testimonial: {
      text: "Travail soigné et propre. Les peintres sont arrivés à l'heure chaque jour et ont respecté les délais. La qualité de la peinture est excellente.",
      author: "Jean Martin",
      location: "Versailles",
    },
  },
  carrelage: {
    title: "Carrelage",
    subtitle: "Pose experte de revêtements haut de gamme",
    heroImage: "/tiling-service.jpg",
    description:
      "Spécialistes de la pose de carrelage, nous transformons vos sols et murs avec des matériaux nobles. Du carrelage classique aux grands formats contemporains.",
    benefits: [
      "Large choix de matériaux",
      "Pose traditionnelle et moderne",
      "Étanchéité garantie",
      "Joints parfaits",
      "Conseils techniques",
      "Garantie décennale",
    ],
    process: [
      {
        step: "1",
        title: "Choix du carrelage",
        description: "Sélection du type, format et style de carrelage adapté.",
      },
      {
        step: "2",
        title: "Préparation du support",
        description: "Nivellement et traitement des surfaces pour une pose optimale.",
      },
      {
        step: "3",
        title: "Pose",
        description: "Installation professionnelle avec techniques adaptées.",
      },
      {
        step: "4",
        title: "Joints et finitions",
        description: "Réalisation des joints et nettoyage final.",
      },
    ],
    gallery: ["/tiling-example-1.jpg", "/tiling-example-2.jpg", "/tiling-example-3.jpg"],
    testimonial: {
      text: "La pose du carrelage dans notre salle de bain est parfaite. Les joints sont impeccables et l'étanchéité est garantie. Très professionnel.",
      author: "Sophie Leclerc",
      location: "Neuilly-sur-Seine",
    },
  },
  menuiserie: {
    title: "Menuiserie",
    subtitle: "Créations sur mesure pour votre intérieur",
    heroImage: "/carpentry-service.jpg",
    description:
      "Nos menuisiers créent des pièces uniques adaptées à vos besoins. Placards, bibliothèques, dressings, chaque réalisation est conçue sur mesure.",
    benefits: [
      "Conception sur mesure",
      "Bois nobles et durables",
      "Finitions haut de gamme",
      "Optimisation de l'espace",
      "Installation professionnelle",
      "Garantie fabricant",
    ],
    process: [
      {
        step: "1",
        title: "Prise de mesures",
        description: "Relevé précis des dimensions et analyse de l'espace.",
      },
      {
        step: "2",
        title: "Conception",
        description: "Création de plans détaillés et choix des matériaux.",
      },
      {
        step: "3",
        title: "Fabrication",
        description: "Réalisation en atelier avec contrôle qualité.",
      },
      {
        step: "4",
        title: "Installation",
        description: "Pose et ajustements finaux sur site.",
      },
    ],
    gallery: ["/carpentry-example-1.jpg", "/carpentry-example-2.jpg", "/carpentry-example-3.jpg"],
    testimonial: {
      text: "Notre dressing sur mesure est magnifique. La qualité du bois et des finitions est exceptionnelle. Exactement ce que nous voulions.",
      author: "Pierre Durand",
      location: "Saint-Cloud",
    },
  },
  "renovation-complete": {
    title: "Rénovation complète",
    subtitle: "Gestion de projet clé en main",
    heroImage: "/full-renovation-service.jpg",
    description:
      "Nous prenons en charge l'intégralité de votre projet de rénovation. De la conception à la réalisation, notre équipe coordonne tous les corps de métier pour un résultat harmonieux.",
    benefits: [
      "Gestion complète du projet",
      "Coordination des artisans",
      "Respect des délais",
      "Suivi budgétaire",
      "Garanties tous corps d'état",
      "Un seul interlocuteur",
    ],
    process: [
      {
        step: "1",
        title: "Audit complet",
        description: "Analyse de l'existant et définition du projet global.",
      },
      {
        step: "2",
        title: "Planification",
        description: "Établissement du planning et coordination des intervenants.",
      },
      {
        step: "3",
        title: "Réalisation",
        description: "Exécution des travaux avec suivi quotidien.",
      },
      {
        step: "4",
        title: "Livraison",
        description: "Réception des travaux et garanties.",
      },
    ],
    gallery: ["/renovation-example-1.jpg", "/renovation-example-2.jpg", "/renovation-example-3.jpg"],
    testimonial: {
      text: "Rénovation complète de notre appartement. L'équipe a géré tous les aspects du projet. Nous n'avons eu qu'un seul interlocuteur, c'était parfait.",
      author: "Anne et Marc Petit",
      location: "Boulogne-Billancourt",
    },
  },
  amenagement: {
    title: "Aménagement",
    subtitle: "Optimisation et transformation d'espaces",
    heroImage: "/layout-service.jpg",
    description:
      "Nous réinventons vos espaces pour les rendre plus fonctionnels et agréables. Aménagement de combles, création de rangements, optimisation de chaque mètre carré.",
    benefits: [
      "Gain d'espace",
      "Solutions innovantes",
      "Rangements optimisés",
      "Respect de l'architecture",
      "Conseils d'expert",
      "Réalisation sur mesure",
    ],
    process: [
      {
        step: "1",
        title: "Analyse de l'espace",
        description: "Étude des possibilités et contraintes techniques.",
      },
      {
        step: "2",
        title: "Proposition",
        description: "Présentation de solutions d'aménagement adaptées.",
      },
      {
        step: "3",
        title: "Réalisation",
        description: "Mise en œuvre des aménagements prévus.",
      },
      {
        step: "4",
        title: "Optimisation",
        description: "Ajustements finaux pour un résultat optimal.",
      },
    ],
    gallery: ["/layout-example-1.jpg", "/layout-example-2.jpg", "/layout-example-3.jpg"],
    testimonial: {
      text: "L'aménagement de nos combles a créé un véritable espace de vie. L'optimisation des rangements est remarquable. Nous avons gagné 20m² habitables.",
      author: "Isabelle Moreau",
      location: "Levallois-Perret",
    },
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={service.heroImage || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-accent text-accent-foreground">Service Premium</Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-4 text-balance">
              {service.title}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">{service.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Nos avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((benefit: string, index: number) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-card-foreground font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Notre processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.process.map((step: any, index: number) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold font-serif mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Exemples de réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.gallery.map((image: string, index: number) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${service.title} exemple ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-border bg-card">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💬</span>
              </div>
              <p className="text-lg text-card-foreground italic mb-6 leading-relaxed">"{service.testimonial.text}"</p>
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-card-foreground">{service.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{service.testimonial.location}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Intéressé par ce service ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/devis">
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
