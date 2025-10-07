"use client"

import { useState } from "react"
import { Phone, Calendar, Ruler, Hammer, CheckCircle } from "lucide-react"

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: Phone,
      title: "Premier contact",
      description: "Appelez-nous ou remplissez notre formulaire en ligne pour discuter de votre projet.",
    },
    {
      icon: Calendar,
      title: "Visite technique",
      description: "Un expert se déplace gratuitement chez vous pour évaluer les travaux nécessaires.",
    },
    {
      icon: Ruler,
      title: "Devis détaillé",
      description: "Recevez un devis transparent et détaillé sous 48h avec tous les coûts.",
    },
    {
      icon: Hammer,
      title: "Réalisation",
      description: "Nos artisans qualifiés réalisent vos travaux dans les délais convenus.",
    },
    {
      icon: CheckCircle,
      title: "Réception",
      description: "Visite finale pour vérifier que tout correspond à vos attentes.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Notre processus en 5 étapes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement personnalisé du premier contact jusqu'à la réception de vos travaux
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative" onMouseEnter={() => setActiveStep(index)}>
                <div
                  className={`bg-card p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    activeStep === index ? "border-accent shadow-lg scale-105" : "border-border hover:border-accent/50"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                      activeStep === index ? "bg-accent" : "bg-primary"
                    }`}
                  >
                    <step.icon className="w-8 h-8 text-background" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-accent mb-2">Étape {index + 1}</div>
                    <h3 className="text-lg font-serif font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
