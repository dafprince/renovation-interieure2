import Header from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import StatsSection from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import { RecentProjects } from "@/components/recent-projects"
import { TestimonialsSection } from "@/components/testimonials-section"
import CompanyStory from "@/components/company-story"
import TeamSection from "@/components/team-section"
import InterventionZones from "@/components/intervention-zones"
import GoogleMapSection from "@/components/google-map-section"
import { CTASection } from "@/components/cta-section"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <RecentProjects />
      <TestimonialsSection />
      <CompanyStory />
      <TeamSection />
      <InterventionZones />
      <GoogleMapSection />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  )
}
