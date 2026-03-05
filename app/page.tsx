import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { CompaniesSection } from "@/components/companies-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <CompaniesSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </main>
  )
}
