import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-primary font-serif text-xl font-bold">R</span>
              </div>
              <span className="font-serif text-xl font-semibold">RénoVision</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de rénovation intérieure haut de gamme.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/design"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Design d'intérieur
                </Link>
              </li>
              <li>
                <Link
                  href="/services/peinture"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Peinture
                </Link>
              </li>
              <li>
                <Link
                  href="/services/carrelage"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Carrelage
                </Link>
              </li>
              <li>
                <Link
                  href="/services/menuiserie"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Menuiserie
                </Link>
              </li>
              <li>
                <Link
                  href="/services/renovation-complete"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Rénovation complète
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/realisations"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/comparateur"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Comparateur
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/devis"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Demander un devis
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Recevez nos dernières actualités et conseils en rénovation.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">© 2025 RénoVision. Tous droits réservés.</p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/mentions-legales"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Confidentialité
              </Link>
              <Link href="/cgv" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
