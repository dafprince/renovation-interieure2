import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Prêt à transformer votre intérieur ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de votre projet. Notre équipe d'experts est à votre écoute
              pour concrétiser vos idées.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Téléphone</p>
                  <a href="tel:+33123456789" className="text-muted-foreground hover:text-accent transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:contact@renovation-premium.fr"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@renovation-premium.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Adresse</p>
                  <p className="text-muted-foreground">
                    123 Avenue des Champs-Élysées
                    <br />
                    75008 Paris, France
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/devis">Demander un devis gratuit</Link>
            </Button>
          </div>

          {/* Right: Quick Contact Form */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-6">Contact rapide</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Prénom" className="bg-background" />
                  <Input placeholder="Nom" className="bg-background" />
                </div>
                <Input type="email" placeholder="Email" className="bg-background" />
                <Input type="tel" placeholder="Téléphone" className="bg-background" />
                <Textarea
                  placeholder="Décrivez brièvement votre projet..."
                  rows={4}
                  className="bg-background resize-none"
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
