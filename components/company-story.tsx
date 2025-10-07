"use client"

import Image from "next/image"
import { Award, Heart, Shield, TrendingUp } from "lucide-react"

export default function CompanyStory() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Des artisans qualifiés et certifiés pour un travail impeccable",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Chaque projet est unique et mérite notre attention totale",
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Garantie décennale et assurance tous risques chantier",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Techniques modernes et matériaux écologiques",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Notre histoire</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fondée en 2009 par Marc Dubois, ancien compagnon du devoir,{" "}
                <span className="font-bold text-primary">RénoVision</span> est née d'une passion pour l'artisanat et le
                désir de redonner vie aux intérieurs.
              </p>
              <p>
                Tout a commencé dans un petit atelier de 50m² à Lyon. Marc, fort de ses 10 années d'expérience dans la
                menuiserie et la décoration, a décidé de créer une entreprise qui placerait la satisfaction client au
                cœur de chaque projet.
              </p>
              <p>
                Aujourd'hui, nous sommes une équipe de 25 professionnels passionnés : menuisiers, peintres, carreleurs,
                plaquistes et décorateurs d'intérieur. Nous avons réalisé plus de 500 projets dans toute la région
                Auvergne-Rhône-Alpes.
              </p>
              <p className="font-semibold text-primary">
                Notre mission : transformer vos espaces de vie en lieux qui vous ressemblent, alliant esthétique,
                fonctionnalité et durabilité.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image src="/company-workshop.jpg" alt="Notre atelier et équipe" fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <value.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-serif font-bold text-primary mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
