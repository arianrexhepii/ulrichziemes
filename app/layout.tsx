import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from '@/lib/locale-context'
import './globals.css'
import { PageLoader } from '@/components/pageLoader'
import { Toaster } from '@/components/ui/toaster'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Ulrich Ziemes | VR LL.M.',
  description: 'Erfahrener Geschäftsführer und Investor - Family Office, Kapitalanlagen & Immobilien',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/ulrich-ziemes.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/ulrich-ziemes.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/ulrich-ziemes.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1f2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${_inter.variable} ${_playfair.variable} font-sans antialiased`}>
        <PageLoader/>
        <LocaleProvider defaultLocale="de">
          {children}
          <Toaster/>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
