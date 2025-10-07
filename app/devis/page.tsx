"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calculator, Euro, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function DevisPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: "",
    surface: "",
    rooms: [],
    budget: "",
    timeline: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  })
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)

  const projectTypes = [
    { value: "peinture", label: "Peinture & Décoration", pricePerM2: 35 },
    { value: "menuiserie", label: "Menuiserie", pricePerM2: 80 },
    { value: "carrelage", label: "Carrelage & Faïence", pricePerM2: 60 },
    { value: "cuisine", label: "Cuisine sur-mesure", pricePerM2: 150 },
    { value: "salle-bain", label: "Salle de bain", pricePerM2: 120 },
    { value: "renovation-complete", label: "Rénovation complète", pricePerM2: 800 },
  ]

  const roomOptions = ["Salon", "Cuisine", "Chambre", "Salle de bain", "WC", "Entrée", "Couloir", "Bureau"]

  const calculateEstimate = () => {
    const type = projectTypes.find((t) => t.value === formData.projectType)
    if (type && formData.surface) {
      const base = type.pricePerM2 * Number.parseInt(formData.surface)
      const roomMultiplier = 1 + formData.rooms.length * 0.05
      const estimate = base * roomMultiplier
      setEstimatedPrice(Math.round(estimate))
    }
  }

  const handleNext = () => {
    if (step === 3) {
      calculateEstimate()
    }
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the form data to your backend
    console.log("[v0] Form submitted:", formData)
    alert("Votre demande de devis a été envoyée ! Nous vous contacterons sous 24h.")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-4">
            Calculateur de devis en ligne
          </h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Obtenez une estimation instantanée pour votre projet de rénovation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`flex items-center ${s < 4 ? "flex-1" : ""}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s ? "bg-accent text-background" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle className="w-6 h-6" /> : s}
                  </div>
                  {s < 4 && <div className={`flex-1 h-1 mx-2 ${step > s ? "bg-accent" : "bg-muted"}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Type de projet</span>
              <span>Détails</span>
              <span>Budget & Délai</span>
              <span>Coordonnées</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Project Type */}
            {step === 1 && (
              <div className="bg-card p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  Quel type de projet souhaitez-vous réaliser ?
                </h2>
                <RadioGroup
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          formData.projectType === type.value
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-accent/50"
                        }`}
                        onClick={() => setFormData({ ...formData, projectType: type.value })}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={type.value} id={type.value} />
                          <Label htmlFor={type.value} className="cursor-pointer flex-1">
                            <div className="font-semibold text-primary">{type.label}</div>
                            <div className="text-sm text-muted-foreground">À partir de {type.pricePerM2}€/m²</div>
                          </Label>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="bg-card p-8 rounded-lg border border-border space-y-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Détails de votre projet</h2>

                <div>
                  <Label htmlFor="surface" className="text-primary font-semibold mb-2 block">
                    Surface à rénover (m²) *
                  </Label>
                  <Input
                    id="surface"
                    type="number"
                    placeholder="Ex: 50"
                    value={formData.surface}
                    onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label className="text-primary font-semibold mb-3 block">Pièces concernées</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {roomOptions.map((room) => (
                      <div
                        key={room}
                        className="flex items-center space-x-2 border border-border rounded p-3 hover:border-accent transition-colors"
                      >
                        <Checkbox
                          id={room}
                          checked={formData.rooms.includes(room)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                rooms: [...formData.rooms, room],
                              })
                            } else {
                              setFormData({
                                ...formData,
                                rooms: formData.rooms.filter((r) => r !== room),
                              })
                            }
                          }}
                        />
                        <Label htmlFor={room} className="cursor-pointer">
                          {room}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-primary font-semibold mb-2 block">
                    Description de votre projet
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez votre projet en détail : état actuel, travaux souhaités, style recherché..."
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
              <div className="bg-card p-8 rounded-lg border border-border space-y-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Budget et délai souhaités</h2>

                <div>
                  <Label htmlFor="budget" className="text-primary font-semibold mb-2 block">
                    Budget estimé
                  </Label>
                  <RadioGroup
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <div className="space-y-3">
                      {[
                        { value: "moins-5000", label: "Moins de 5 000€" },
                        { value: "5000-10000", label: "5 000€ - 10 000€" },
                        { value: "10000-20000", label: "10 000€ - 20 000€" },
                        { value: "20000-50000", label: "20 000€ - 50 000€" },
                        { value: "plus-50000", label: "Plus de 50 000€" },
                      ].map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3 border border-border rounded p-4 hover:border-accent transition-colors cursor-pointer"
                          onClick={() => setFormData({ ...formData, budget: option.value })}
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value} className="cursor-pointer flex-1">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-primary font-semibold mb-2 block">
                    Délai souhaité pour le début des travaux
                  </Label>
                  <RadioGroup
                    value={formData.timeline}
                    onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                  >
                    <div className="space-y-3">
                      {[
                        { value: "urgent", label: "Urgent (moins d'1 mois)" },
                        { value: "1-3-mois", label: "1 à 3 mois" },
                        { value: "3-6-mois", label: "3 à 6 mois" },
                        { value: "flexible", label: "Flexible" },
                      ].map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3 border border-border rounded p-4 hover:border-accent transition-colors cursor-pointer"
                          onClick={() => setFormData({ ...formData, timeline: option.value })}
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value} className="cursor-pointer flex-1">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 4: Contact Info & Estimate */}
            {step === 4 && (
              <div className="space-y-6">
                {estimatedPrice && (
                  <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 text-center">
                    <Euro className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">Estimation de votre projet</h3>
                    <div className="text-5xl font-bold text-accent mb-4">{estimatedPrice.toLocaleString()}€</div>
                    <p className="text-muted-foreground">
                      Cette estimation est indicative. Un devis détaillé vous sera envoyé après étude de votre projet.
                    </p>
                  </div>
                )}

                <div className="bg-card p-8 rounded-lg border border-border space-y-6">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">Vos coordonnées</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-primary font-semibold mb-2 block">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-primary font-semibold mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jean.dupont@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-primary font-semibold mb-2 block">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="city" className="text-primary font-semibold mb-2 block">
                        Ville *
                      </Label>
                      <Input
                        id="city"
                        placeholder="Lyon"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-primary font-semibold mb-2 block">
                      Adresse du chantier *
                    </Label>
                    <Input
                      id="address"
                      placeholder="45 Avenue Jean Jaurès"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded p-4">
                    <p className="text-sm text-muted-foreground">
                      En soumettant ce formulaire, vous acceptez d'être contacté par RénoVision pour l'étude de votre
                      projet. Vos données sont protégées et ne seront jamais partagées.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={handleBack} className="gap-2 bg-transparent">
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Button>
              )}
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto gap-2 bg-accent hover:bg-accent/90"
                  disabled={(step === 1 && !formData.projectType) || (step === 2 && !formData.surface)}
                >
                  Suivant
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" className="ml-auto gap-2 bg-accent hover:bg-accent/90">
                  Envoyer ma demande
                  <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
