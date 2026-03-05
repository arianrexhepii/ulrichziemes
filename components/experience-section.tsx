"use client"

import { useLocale } from "@/lib/locale-context"
import { useInView } from "@/hooks/use-in-view"
import { ArrowUpRight } from "lucide-react"

export function ExperienceSection() {
  const { t } = useLocale()
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="relative py-32" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.72_0.14_180_/_0.03),_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className={`flex items-end justify-between gap-8 transition-all duration-700 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                {t.experience.sectionLabel}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              <span className="text-balance">{t.experience.title}</span>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Animated vertical line */}
          <div className="absolute left-8 top-0 hidden w-px lg:block">
            <div
              className={`bg-gradient-to-b from-primary via-primary/40 to-transparent ${isInView ? "animate-line-grow" : "h-0"}`}
              style={{ width: "1px", height: isInView ? "100%" : "0" }}
            />
          </div>

          <div className="flex flex-col gap-6">
            {t.experience.roles.map((role, i) => (
              <div
                key={i}
                className={`group transition-all duration-700 ${isInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.2 + i * 0.12}s` }}
              >
                <div className="flex gap-8 lg:gap-12">
                  {/* Timeline dot */}
                  <div className="relative hidden flex-shrink-0 lg:flex lg:w-16 lg:justify-center">
                    <div className="absolute top-8 z-10 flex h-4 w-4 items-center justify-center">
                      <div className="h-4 w-4 rounded-full border-2 border-primary/40 bg-background transition-all duration-500 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20" />
                      <div className="absolute h-2 w-2 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="glass noise relative flex-1 overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 lg:p-8">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

                    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                            {role.title}
                          </h3>
                          <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />
                        </div>
                        <p className="mt-1 text-sm font-semibold text-primary/80">
                          {role.company}
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {role.description}
                        </p>
                      </div>
                      <span className="inline-flex flex-shrink-0 items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                        {role.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
