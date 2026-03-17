"use client"

import { useState, useEffect } from "react"
import { useLocale } from "@/lib/locale-context"
import type { Locale } from "@/lib/i18n"
import { Menu, X, Globe } from "lucide-react"

// const localeLabels: Record<Locale, string> = {
//   de: "DE",
//   en: "EN",
//   es: "ES",
// }

export function Navigation() {
  const { t, locale, setLocale } = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ["about", "experience", "companies", "contact"]
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  const navItems = [
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#experience", label: t.nav.experience, id: "experience" },
    { href: "#companies", label: t.nav.companies, id: "companies" },
     { href: "/my-story", label: t.nav.myStory, id: "my-story" },
    { href: "#contact", label: t.nav.contact, id: "contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-gold py-2.5 shadow-lg shadow-background/50" : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="#" className="group flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg font-serif text-xs font-bold transition-all duration-300 sm:h-9 sm:w-9 sm:text-sm"
              style={{
                background: "hsl(38, 65%, 55%, 0.12)",
                color: "hsl(38, 65%, 55%)",
              }}
            >
              UZ
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "gold-text"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full"
                    style={{ background: "var(--gold-gradient)" }}
                  />
                )}
              </a>
            ))}

            <div className="ml-4 h-5 w-px" style={{ backgroundColor: "hsl(38, 65%, 55%, 0.15)" }} />

            {/* Language switcher */}
            {/* <div className="relative ml-2">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
              >
                <Globe className="h-3.5 w-3.5" />
                {localeLabels[locale]}
              </button>
              {isLangOpen && (
                <div className="glass-gold absolute right-0 top-full mt-2 overflow-hidden rounded-xl shadow-2xl shadow-background/50">
                  {(Object.keys(localeLabels) as Locale[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLocale(l)
                        setIsLangOpen(false)
                      }}
                      className={`flex w-full items-center gap-2 px-5 py-2.5 text-sm transition-all duration-200 hover:bg-primary/10 ${
                        locale === l ? "gold-text font-semibold" : "text-foreground"
                      }`}
                    >
                      {locale === l && <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "hsl(38, 65%, 55%)" }} />}
                      {localeLabels[l]}
                    </button>
                  ))}
                </div>
              )}
            </div> */}
          </div>

          {/* Mobile toggle — only shows hamburger, never the X */}
          {!isMobileOpen && (
            <button
              onClick={() => setIsMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
          {/* Placeholder to keep layout stable when overlay is open */}
          {isMobileOpen && <div className="h-10 w-10 md:hidden" />}
        </nav>
      </header>

      {/* Mobile menu — rendered outside header as a true full-screen portal-like overlay */}
      {isMobileOpen && (
        <div
          className="glass-gold animate-fade-in fixed inset-0 z-[55] flex flex-col md:hidden"
          // Solid background so page content never bleeds through
          style={{ backgroundColor: "hsl(20, 10%, 6%, 0.97)" }}
        >
          {/* Header row inside overlay with logo + close button */}
          <div className="flex h-[60px] shrink-0 items-center justify-between px-5">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg font-serif text-xs font-bold sm:h-9 sm:w-9 sm:text-sm"
              style={{ background: "hsl(38, 65%, 55%, 0.12)", color: "hsl(38, 65%, 55%)" }}
            >
              UZ
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-2 px-8 py-6 overflow-y-auto">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`animate-fade-up rounded-xl px-5 py-4 text-lg font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "gold-text"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* <div className="flex gap-2 border-t px-8 py-6 shrink-0" style={{ borderColor: "hsl(38, 65%, 55%, 0.12)" }}>
            {(Object.keys(localeLabels) as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLocale(l)
                  setIsMobileOpen(false)
                }}
                className={`flex-1 rounded-xl py-3 text-center text-sm font-semibold transition-all duration-200 ${
                  locale === l
                    ? "text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
                style={locale === l ? { background: "var(--gold-gradient)", color: "hsl(0,0%,10%)" } : {}}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div> */}
        </div>
      )}
    </>
  )
}