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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ulrich Ziemes",
  honorificSuffix: "VR LL.M.",
  url: "https://ulrichziemes.de",
  image: "https://ulrichziemes.de/images/ulrich.jpg",
  jobTitle: "Geschäftsführer & Investor",
  description:
    "Erfahrener Geschäftsführer und Investor. Experte für Family Office, Kapitalanlagen und Immobilien.",
  knowsAbout: [
    "Family Office",
    "Kapitalanlagen",
    "Immobilien",
    "Vermögensverwaltung",
    "Private Equity",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Family Office",
  },
  nationality: {
    "@type": "Country",
    name: "Germany",
  },
  sameAs: [
    "https://www.xing.com/profile/Ulrich_Ziemes",
  ],
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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