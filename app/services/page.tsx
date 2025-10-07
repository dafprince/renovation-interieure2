"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import {
  Paintbrush,
  Hammer,
  Ruler,
  Sparkles,
  Home,
  Wrench,
  CheckCircle,
  Shield,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Ruler,
    title: "Design d'intérieur",
    slug: "design",
    description: "Conception sur mesure et plans 3D pour visualiser votre projet avant réalisation.",
    image: "contemporary-living-room-design.jpg",
  },
  {
    icon: Paintbrush,
    title: "Peinture",
    slug: "peinture",
    description: "Travaux de peinture intérieure avec finitions impeccables et matériaux premium.",
    image: "service-painting.jpg",
  },
  {
    icon: Sparkles,
    title: "Carrelage",
    slug: "carrelage",
    description: "Pose de carrelage, faïence et revêtements de sol haut de gamme.",
    image: "service-tiling.jpg",
  },
  {
    icon: Hammer,
    title: "Menuiserie",
    slug: "menuiserie",
    description: "Création et installation de menuiseries sur mesure, placards et aménagements.",
    image: "service-carpentry.jpg",
  },
  {
    icon: Home,
    title: "Rénovation complète",
    slug: "renovation-complete",
    description: "Gestion de projet clé en main pour une transformation totale de votre espace.",
    image: "service-renovation.jpg",
  },
  {
    icon: Wrench,
    title: "Aménagement",
    slug: "amenagement",
    description: "Optimisation et aménagement d'espaces pour un confort maximal.",
    image: "living-room-fireplace.jpg",
  },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const advantages = [
    {
      icon: Shield,
      title: "Garantie décennale",
      description: "Tous nos travaux sont couverts par une garantie décennale pour votre tranquillité",
    },
    {
      icon: Award,
      title: "Artisans qualifiés",
      description: "Une équipe d'artisans certifiés avec plus de 15 ans d'expérience",
    },
    {
      icon: Clock,
      title: "Respect des délais",
      description: "98% de nos projets sont livrés dans les délais convenus",
    },
    {
      icon: CheckCircle,
      title: "Devis gratuit",
      description: "Estimation détaillée et transparente sans engagement de votre part",
    },
  ]

  const priceRanges = [
    {
      service: "Peinture",
      price: "25-45€/m²",
      includes: ["Préparation des surfaces", "2 couches de peinture", "Protection du mobilier"],
    },
    {
      service: "Carrelage",
      price: "40-80€/m²",
      includes: ["Fourniture et pose", "Joints et finitions", "Évacuation gravats"],
    },
    {
      service: "Cuisine complète",
      price: "8 000-25 000€",
      includes: ["Meubles sur mesure", "Électroménager", "Plan de travail", "Installation"],
    },
    {
      service: "Salle de bain",
      price: "6 000-18 000€",
      includes: ["Sanitaires", "Carrelage", "Plomberie", "Électricité"],
    },
  ]

  const faqs = [
    {
      question: "Quels sont les délais moyens pour un projet de rénovation ?",
      answer:
        "Les délais varient selon l'ampleur du projet. Une cuisine prend généralement 2-3 semaines, une salle de bain 1-2 semaines, et une rénovation complète d'appartement 2-4 mois. Nous établissons un planning détaillé lors du devis.",
    },
    {
      question: "Proposez-vous un service de conception 3D ?",
      answer:
        "Oui, nous créons des plans 3D réalistes pour tous nos projets de rénovation. Cela vous permet de visualiser le résultat final avant le début des travaux et d'apporter des modifications si nécessaire.",
    },
    {
      question: "Gérez-vous les démarches administratives ?",
      answer:
        "Absolument. Nous nous occupons de toutes les démarches : déclarations de travaux, demandes de permis si nécessaire, et coordination avec la copropriété. Vous n'avez qu'à vous concentrer sur vos choix esthétiques.",
    },
    {
      question: "Quelles garanties offrez-vous sur vos travaux ?",
      answer:
        "Tous nos travaux sont couverts par une garantie décennale. Nous offrons également une garantie de parfait achèvement d'un an et une garantie biennale sur les équipements. Nos artisans sont tous assurés et certifiés.",
    },
    {
      question: "Puis-je rester dans mon logement pendant les travaux ?",
      answer:
        "Cela dépend de l'ampleur des travaux. Pour des rénovations partielles (cuisine, salle de bain), c'est généralement possible. Pour des rénovations complètes, nous recommandons de libérer le logement pour optimiser les délais et votre confort.",
    },
    {
      question: "Comment se déroule le paiement ?",
      answer:
        "Le paiement s'effectue en plusieurs fois : 30% à la signature du devis, 40% en milieu de chantier, et 30% à la réception des travaux. Nous acceptons les virements, chèques et proposons des solutions de financement.",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Consultation gratuite",
      description: "Visite de votre espace et discussion de vos besoins",
      duration: "1h",
    },
    {
      number: "02",
      title: "Devis détaillé",
      description: "Proposition chiffrée avec plans 3D et sélection matériaux",
      duration: "3-5 jours",
    },
    {
      number: "03",
      title: "Planification",
      description: "Validation du projet et organisation du chantier",
      duration: "1 semaine",
    },
    {
      number: "04",
      title: "Réalisation",
      description: "Exécution des travaux avec suivi quotidien",
      duration: "Variable",
    },
    {
      number: "05",
      title: "Réception",
      description: "Visite finale et remise des garanties",
      duration: "1 jour",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold mb-6">
              Excellence & Savoir-faire
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-6 text-balance">
              Nos Services
            </h1>
            <p className="text-xl text-background/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Une expertise complète pour tous vos projets de rénovation intérieure. De la conception à la réalisation,
              nous vous accompagnons à chaque étape.
            </p>
            <Link href="/devis">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des garanties solides et un engagement qualité pour votre tranquillité
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <advantage.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Notre gamme de services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des prestations complètes adaptées à tous vos besoins de rénovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Notre processus en 5 étapes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement structuré de A à Z pour la réussite de votre projet
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 bg-card p-6 rounded-xl border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-bold text-primary">{step.title}</h3>
                      <span className="text-sm text-accent font-semibold">{step.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Fourchettes de prix indicatives
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des tarifs transparents pour vous aider à budgétiser votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {priceRanges.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-primary">{item.service}</h3>
                  <div className="text-2xl font-bold text-accent">{item.price}</div>
                </div>
                <div className="space-y-2">
                  {item.includes.map((include, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{include}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              * Prix indicatifs pouvant varier selon la complexité du projet et les matériaux choisis
            </p>
            <Link href="/devis">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background">
                Obtenir un devis personnalisé
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Questions fréquentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos services et notre façon de travailler
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-secondary/20 transition-colors"
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && <div className="px-6 pb-6 text-muted-foreground">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une consultation gratuite et un devis personnalisé
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/devis">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                Demander un devis
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
