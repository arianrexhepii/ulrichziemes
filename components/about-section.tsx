"use client"

import { useLocale } from "@/lib/locale-context"
import { useInView } from "@/hooks/use-in-view"
import { MapPin, GraduationCap, Briefcase, TrendingUp } from "lucide-react"

export function AboutSection() {
  const { t } = useLocale()
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className={`max-w-3xl transition-all duration-700 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {t.about.sectionLabel}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-foreground lg:text-6xl">
            <span className="text-balance">{t.about.title}</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Large text card */}
          <div
            className={`glass noise relative overflow-hidden rounded-2xl p-8 sm:col-span-2 lg:row-span-2 ${
              isInView ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="flex flex-col gap-5">
                <p className="text-base leading-relaxed text-muted-foreground">{t.about.p1}</p>
                <p className="text-base leading-relaxed text-muted-foreground">{t.about.p2}</p>
                <p className="text-base leading-relaxed text-muted-foreground">{t.about.p3}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Location card */}
          <div
            className={`glass noise group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 ${
              isInView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.25s" }}
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t.about.locationLabel}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {t.about.location}
              </p>
            </div>
          </div>

          {/* Education card */}
          <div
            className={`glass noise group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 ${
              isInView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.35s" }}
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t.about.educationLabel}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {t.about.education}
              </p>
            </div>
          </div>

          {/* Focus card - spans 2 columns */}
          <div
            className={`glass noise group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 sm:col-span-2 ${
              isInView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.45s" }}
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
            <div className="relative flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t.about.focusLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {t.about.focus}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"DSi - Deutsche Sachinvest GmbH | Kaveca GmbH | CRB Immobilien UG"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
