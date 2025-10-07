import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const articles = [
    {
      title: "10 tendances déco 2025 pour votre intérieur",
      excerpt: "Découvrez les couleurs, matériaux et styles qui vont marquer l'année 2025 en décoration d'intérieur.",
      image: "living-room-bookshelf.jpg",
      category: "Tendances",
      author: "Sophie Martin",
      date: "15 Janvier 2025",
      slug: "tendances-deco-2025",
    },
    {
      title: "Rénover sa cuisine : budget et étapes clés",
      excerpt: "Guide complet pour planifier et budgétiser votre projet de rénovation de cuisine.",
      image: "kitchen-island-view.jpg",
      category: "Guides",
      author: "Marc Dubois",
      date: "10 Janvier 2025",
      slug: "renover-cuisine-budget-etapes",
    },
    {
      title: "Matériaux écologiques : le choix responsable",
      excerpt: "Comment choisir des matériaux durables et écologiques pour vos travaux de rénovation.",
      image: "service-carpentry.jpg",
      category: "Écologie",
      author: "Thomas Leroy",
      date: "5 Janvier 2025",
      slug: "materiaux-ecologiques",
    },
    {
      title: "Optimiser l'espace dans un petit appartement",
      excerpt: "Astuces et solutions d'aménagement pour maximiser l'espace dans les petites surfaces.",
      image: "service-renovation.jpg",
      category: "Aménagement",
      author: "Sophie Martin",
      date: "28 Décembre 2024",
      slug: "optimiser-espace-petit-appartement",
    },
    {
      title: "Salle de bain : les erreurs à éviter",
      excerpt: "Les pièges courants lors de la rénovation d'une salle de bain et comment les éviter.",
      image: "bathroom-shower-detail.jpg",
      category: "Conseils",
      author: "Marc Dubois",
      date: "20 Décembre 2024",
      slug: "salle-bain-erreurs-eviter",
    },
    {
      title: "Le parquet : quel type choisir ?",
      excerpt: "Comparatif des différents types de parquet pour vous aider à faire le bon choix.",
      image: "company-workshop.jpg",
      category: "Matériaux",
      author: "Thomas Leroy",
      date: "15 Décembre 2024",
      slug: "parquet-type-choisir",
    },
  ]

  const categories = ["Tous", "Tendances", "Guides", "Conseils", "Écologie", "Matériaux", "Aménagement"]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-background mb-4">Blog & Actualités</h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Conseils, tendances et actualités de la rénovation intérieure
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-border hover:border-accent hover:bg-accent hover:text-background transition-all font-semibold"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-background px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                  </div>
                  <div className="mt-4 text-accent font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary text-background px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Restez informé</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:border-accent focus:outline-none"
            />
            <button className="bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
