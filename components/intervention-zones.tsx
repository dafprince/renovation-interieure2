"use client"

import { MapPin, Check } from "lucide-react"

export default function InterventionZones() {
  const zones = [
    { city: "Lyon", departments: ["Rhône (69)"], delay: "24-48h" },
    { city: "Villeurbanne", departments: ["Rhône (69)"], delay: "24-48h" },
    { city: "Grenoble", departments: ["Isère (38)"], delay: "48-72h" },
    { city: "Saint-Étienne", departments: ["Loire (42)"], delay: "48-72h" },
    { city: "Chambéry", departments: ["Savoie (73)"], delay: "72h" },
    { city: "Annecy", departments: ["Haute-Savoie (74)"], delay: "72h" },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Nos zones d'intervention</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous intervenons dans toute la région Auvergne-Rhône-Alpes avec des délais d'intervention rapides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">{zone.city}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Check className="w-4 h-4 text-accent" />
                    {zone.departments.join(", ")}
                  </div>
                  <div className="text-sm font-semibold text-accent">Délai d'intervention : {zone.delay}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <p className="text-lg text-primary font-semibold mb-2">Votre ville n'est pas dans la liste ?</p>
          <p className="text-muted-foreground mb-4">
            Contactez-nous ! Nous étudions toutes les demandes et pouvons intervenir dans d'autres zones selon la nature
            du projet.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  )
}
