"use client"

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Marc Dubois",
      role: "Fondateur & Directeur",
      image: "/team-marc.jpg",
      bio: "Compagnon du devoir, 25 ans d'expérience",
      linkedin: "#",
      email: "marc@renovision.fr",
    },
    {
      name: "Sophie Martin",
      role: "Architecte d'intérieur",
      image: "/team-sophie.jpg",
      bio: "Diplômée ENSAD, spécialiste design contemporain",
      linkedin: "#",
      email: "sophie@renovision.fr",
    },
    {
      name: "Thomas Leroy",
      role: "Chef de chantier",
      image: "/team-thomas.jpg",
      bio: "15 ans d'expérience, expert en coordination",
      linkedin: "#",
      email: "thomas@renovision.fr",
    },
    {
      name: "Julie Rousseau",
      role: "Responsable clientèle",
      image: "/team-julie.jpg",
      bio: "À votre écoute pour concrétiser vos projets",
      linkedin: "#",
      email: "julie@renovision.fr",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Notre équipe</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des professionnels passionnés et qualifiés à votre service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                <div className="text-accent font-semibold mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
