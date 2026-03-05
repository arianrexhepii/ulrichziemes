"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useLocale } from "@/lib/locale-context"
import { ArrowDown, ArrowRight } from "lucide-react"

function FloatingOrb({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) {
  return (
    <div
      className="animate-float absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        animationDelay: `${delay}s`,
        background: "linear-gradient(135deg, hsl(38, 65%, 55%, 0.08), hsl(45, 80%, 70%, 0.04))",
      }}
    />
  )
}

function useTypewriter(text: string, speed = 50, startDelay = 800) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    setDisplayed("")
    setStarted(false)
    const timeout = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(timeout)
  }, [text, startDelay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timeout)
  }, [displayed, started, text, speed])

  return displayed
}

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function HeroSection() {
  const { t } = useLocale()
  const subtitleText = useTypewriter(t.hero.subtitle, 60, 1200)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="noise relative flex min-h-screen items-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="animate-gradient-shift absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38,65%,55%,0.06),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(45,80%,70%,0.04),_transparent_50%)]" />
      </div>

      {/* Floating orbs - hidden on very small screens for performance */}
      <div className="hidden sm:block">
        <FloatingOrb delay={0} size={300} x="10%" y="20%" />
        <FloatingOrb delay={2} size={200} x="70%" y="60%" />
        <FloatingOrb delay={4} size={150} x="80%" y="15%" />
        <FloatingOrb delay={1} size={100} x="20%" y="70%" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.95 0.01 80) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0.01 80) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pb-24 pt-28 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-0 lg:pt-0">
        {/* Photo - top on mobile, right on desktop */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div
            className={`relative ${mounted ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            {/* Decorative glow */}
            <div className="animate-pulse-glow absolute -inset-4 rounded-3xl blur-xl" style={{ background: "linear-gradient(135deg, hsl(38,65%,55%,0.15), transparent, hsl(45,80%,70%,0.08))" }} />

            {/* Corner accents */}
            <div className="absolute -right-3 -top-3 h-16 w-16 border-r-2 border-t-2 rounded-tr-2xl sm:-right-6 sm:-top-6 sm:h-24 sm:w-24 sm:rounded-tr-3xl" style={{ borderColor: "hsl(38, 65%, 55%, 0.3)" }} />
            <div className="absolute -bottom-3 -left-3 h-16 w-16 border-b-2 border-l-2 rounded-bl-2xl sm:-bottom-6 sm:-left-6 sm:h-24 sm:w-24 sm:rounded-bl-3xl" style={{ borderColor: "hsl(45, 80%, 70%, 0.3)" }} />

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/ulrich.jpg"
                alt="Ulrich Ziemes"
                width={480}
                height={580}
                priority
                className="relative h-[300px] w-[240px] object-cover object-top sm:h-[420px] sm:w-[340px] lg:h-[500px] lg:w-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Badge */}
              <div className="glass-gold absolute bottom-4 left-4 right-4 rounded-xl p-3 sm:bottom-6 sm:left-6 sm:right-6 sm:p-4">
                <p className="gold-text text-[10px] font-semibold uppercase tracking-wider sm:text-xs">
                  {"Geschäftsführer & Investor"}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-foreground sm:mt-1 sm:text-sm">
                  {"Family Office | VR LL.M."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text content - below photo on mobile, left on desktop */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div
            className={`transition-all duration-1000 ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ border: "1px solid hsl(38, 65%, 55%, 0.25)", background: "hsl(38, 65%, 55%, 0.06)" }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "hsl(38, 65%, 55%)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "hsl(38, 65%, 55%)" }} />
              </span>
              <span className="gold-text text-xs font-medium tracking-wider">
                {t.hero.greeting}
              </span>
            </div>
          </div>

          <h1
            className={`mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:mt-8 sm:text-5xl lg:text-7xl xl:text-8xl ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.25s" }}
          >
            <span className="text-balance font-serif">{t.hero.title}</span>
          </h1>

          <div
            className={`mt-4 h-7 sm:mt-5 sm:h-8 ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]">
              <span className="gold-text">{subtitleText}</span>
              <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse sm:h-4" style={{ backgroundColor: "hsl(38, 65%, 55%)" }} />
            </p>
          </div>

          <p
            className={`mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base lg:text-lg ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.55s" }}
          >
            {t.hero.description}
          </p>

          <div
            className={`mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4 ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-500 hover:shadow-2xl sm:px-8 sm:py-4"
              style={{ background: "var(--gold-gradient)", color: "hsl(0, 0%, 10%)" }}
            >
              <span className="absolute inset-0 -translate-x-full bg-foreground/10 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative flex items-center gap-2">
                {t.hero.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#about"
              className="group flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:text-primary sm:px-8 sm:py-4"
              style={{ borderColor: "hsl(38, 65%, 55%, 0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "hsl(38, 65%, 55%, 0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "hsl(38, 65%, 55%, 0.25)")}
            >
              {t.hero.learnMore}
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-10 flex items-center gap-5 border-t pt-6 sm:mt-14 sm:gap-8 sm:pt-8 ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.9s", borderColor: "hsl(38, 65%, 55%, 0.12)" }}
          >
            <div>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                <AnimatedCounter end={30} suffix="+" />
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground sm:mt-1 sm:text-xs">
                {t.hero.statYears}
              </p>
            </div>
            <div className="h-8 w-px sm:h-10" style={{ backgroundColor: "hsl(38, 65%, 55%, 0.15)" }} />
            <div>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                <AnimatedCounter end={3} />
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground sm:mt-1 sm:text-xs">
                {t.hero.statCompanies}
              </p>
            </div>
            <div className="h-8 w-px sm:h-10" style={{ backgroundColor: "hsl(38, 65%, 55%, 0.15)" }} />
            <div>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                <AnimatedCounter end={2} />
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground sm:mt-1 sm:text-xs">
                {t.hero.statDegrees}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small mobile */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <a href="#about" aria-label="Scroll down" className="group flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground/60 transition-colors group-hover:text-primary">
            Scroll
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full p-1.5" style={{ border: "1px solid hsl(38, 65%, 55%, 0.2)" }}>
            <div className="h-2 w-1 animate-bounce rounded-full" style={{ backgroundColor: "hsl(38, 65%, 55%)" }} />
          </div>
        </a>
      </div>
    </section>
  )
}
