"use client"

import { useState, type FormEvent } from "react"
import { useLocale } from "@/lib/locale-context"
import { useInView } from "@/hooks/use-in-view"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle, Mail, MapPin, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const { t } = useLocale()
  const { ref, isInView } = useInView()
  const { toast } = useToast()
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to send")

      setIsSent(true)
      form.reset()
      setTimeout(() => setIsSent(false), 4000)

      toast({
        className: "border-green-500 border text-green-900",
        title: t.contact.toastSuccessTitle,
        description: t.contact.toastSuccessDescription,
      })
    } catch {
      toast({
        className: "border-red-500 border text-red-900",
        title: t.contact.toastErrorTitle,
        description: t.contact.toastErrorDescription,
      })
    } finally {
      setIsSending(false)
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-border/50 bg-card/50 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:border-primary focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/5"

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.72_0.14_180_/_0.05),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left content - 2 cols */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${isInView ? "animate-slide-in-left" : "opacity-0"
              }`}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                {t.contact.sectionLabel}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            <h2 className="mt-6 font-serif text-4xl font-bold text-foreground lg:text-5xl">
              <span className="text-balance">{t.contact.title}</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.contact.description}
            </p>

            {/* Contact cards */}
            <div className="mt-10 flex flex-col gap-4">
              <a
                href="mailto:info@ulrichziemes.de"
                className="glass noise group relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Email
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">
                        info@ulrichziemes.de
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>

              <div className="glass noise group relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {"Standort"}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground">
                      {"Berlin, Deutschland"}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.xing.com/profile/Ulrich_Ziemes"
                target="_blank"
                rel="noopener noreferrer"
                className="glass noise group relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.643-.962-.643H3.648z" />
                    </svg>
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        XING
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">
                        Ulrich Ziemes
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right form - 3 cols */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? "animate-slide-in-right" : "opacity-0"
              }`}
          >
            <form
              onSubmit={handleSubmit}
              className="glass noise relative overflow-hidden rounded-2xl p-8 lg:p-10"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />

              <div className="relative flex flex-col gap-6">
                {/* Name & Email row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.contact.name}
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder={t.contact.namePlaceholder}
                        className={inputClasses}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                      />
                      {focusedField === "name" && (
                        <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 -z-10 blur-sm" />
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.contact.email}
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        className={inputClasses}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                      />
                      {focusedField === "email" && (
                        <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 -z-10 blur-sm" />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.contact.subject}
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder={t.contact.subjectPlaceholder}
                      className={inputClasses}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                    />
                    {focusedField === "subject" && (
                      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 -z-10 blur-sm" />
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.contact.message}
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
                      className={`${inputClasses} resize-none`}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                    />
                    {focusedField === "message" && (
                      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 -z-10 blur-sm" />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 disabled:opacity-60"
                >
                  <span className="absolute inset-0 -translate-x-full bg-foreground/10 transition-transform duration-500 group-hover:translate-x-0" />
                  <span className="relative flex items-center gap-2.5">
                    {isSent ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        {t.contact.success}
                      </>
                    ) : isSending ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        {t.contact.send}
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}