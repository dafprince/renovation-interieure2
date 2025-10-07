"use client"

import { useEffect, useState } from "react"
import { Award, Users, Home, Star } from "lucide-react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Home, value: "500+", label: "Projets réalisés", suffix: "" },
    { icon: Users, value: "450+", label: "Clients satisfaits", suffix: "" },
    { icon: Award, value: "15", label: "Années d'expérience", suffix: "ans" },
    { icon: Star, value: "4.9", label: "Note moyenne", suffix: "/5" },
  ]

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl md:text-5xl font-serif font-bold text-background mb-2">
                {stat.value}
                {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
              </div>
              <div className="text-background/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
