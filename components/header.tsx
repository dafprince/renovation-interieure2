"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-xl font-bold">R</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">RénoVision</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link
              href="/realisations"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Réalisations
            </Link>
            <Link
              href="/comparateur"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Comparateur
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/login" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Espace client
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Nous appeler
              </Link>
            </Button>
            <Button size="sm" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/devis">Demander un devis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Accueil
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                href="/realisations"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Réalisations
              </Link>
              <Link
                href="/comparateur"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Comparateur
              </Link>
              <Link href="/blog" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <Link href="/login" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Espace client
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Nous appeler
                  </Link>
                </Button>
                <Button size="sm" asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/devis">Demander un devis</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
