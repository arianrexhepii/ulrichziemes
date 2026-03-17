"use client"

import { useLocale } from "@/lib/locale-context"
import { ArrowUp } from "lucide-react"
import { useRouter } from "next/navigation";

export function Footer() {
  const { t } = useLocale()
  const navigation = useRouter();

  return (
    <footer className="relative py-8 sm:py-12" style={{ borderTop: "1px solid hsl(38, 65%, 55%, 0.1)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg font-serif text-xs font-bold sm:h-10 sm:w-10 sm:text-sm"
              style={{ background: "hsl(38, 65%, 55%, 0.12)", color: "hsl(38, 65%, 55%)" }}
              onClick={()=>navigation.push("/")}
            >
              UZ
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-foreground">Ulrich Ziemes</span>
              <span className="text-[10px] text-muted-foreground sm:text-xs">
                &copy; {new Date().getFullYear()} {t.footer.rights}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="text-[10px] font-medium text-muted-foreground transition-colors hover:text-primary sm:text-xs">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-[10px] font-medium text-muted-foreground transition-colors hover:text-primary sm:text-xs">
              {t.footer.imprint}
            </a>
            <a
              href="https://www.xing.com/profile/Ulrich_Ziemes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="XING"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.643-.962-.643H3.648z" />
              </svg>
            </a>
            <div className="h-4 w-px" style={{ backgroundColor: "hsl(38, 65%, 55%, 0.15)" }} />
            <a
              href="#"
              className="group flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all duration-300 hover:text-primary-foreground"
              style={{ }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-gradient)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
