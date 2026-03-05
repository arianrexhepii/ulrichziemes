"use client"

import { useLocale } from "@/lib/locale-context"
import { useInView } from "@/hooks/use-in-view"
import { Building2, MapPin, FileText, ExternalLink } from "lucide-react"

export function CompaniesSection() {
  const { t } = useLocale()
  const { ref, isInView } = useInView()

  return (
    <section id="companies" className="relative py-32" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.72_0.14_180_/_0.04),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className={`max-w-3xl transition-all duration-700 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {t.companies.sectionLabel}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-foreground lg:text-6xl">
            <span className="text-balance">{t.companies.title}</span>
          </h2>
        </div>

        {/* Company cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.companies.items.map((company, i) => (
            <div
              key={i}
              className={`glass noise group relative overflow-hidden rounded-2xl transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Top color bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary/30 to-transparent transition-all duration-500 group-hover:from-primary group-hover:via-primary/60" />

              <div className="p-6 lg:p-8">
                {/* Icon and role */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {company.name}
                </h3>

                <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {company.role}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {company.description}
                </p>

                {/* Meta info */}
                <div className="mt-6 flex flex-col gap-2 border-t border-border/50 pt-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary/60" />
                    <span>{company.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <FileText className="h-3.5 w-3.5 text-primary/60" />
                    <span>{company.registered}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee ticker */}
        <div className={`mt-20 overflow-hidden transition-all duration-700 ${isInView ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="relative">
            <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
            <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-12">
                  {["Kapitalanlagen", "Immobilien", "Investment", "Family Office", "Vermögensverwaltung", "Unternehmensführung", "Beteiligungen", "Real Estate"].map(
                    (word, j) => (
                      <span
                        key={`${setIndex}-${j}`}
                        className="text-2xl font-bold text-white/35 tracking-tight sm:text-4xl"
                      >
                        {word}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
