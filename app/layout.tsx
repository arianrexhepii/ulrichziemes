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
  // Core identity — name + title for direct name searches
  title: {
    default: 'Ulrich Ziemes | Geschäftsführer, Investor & Family Office Experte',
    template: '%s | Ulrich Ziemes VR LL.M.',
  },
  description:
    'Ulrich Ziemes VR LL.M. – erfahrener Geschäftsführer, Investor und Experte für Family Office, Kapitalanlagen und Immobilien. Strategische Vermögensverwaltung und unternehmerische Führung auf höchstem Niveau.',

  keywords: [
    'Ulrich Ziemes',
    'Ulrich Jakob Ziemes',
    'Ulrich Ziemes VR LL.M.',
    'Geschäftsführer',
    'Investor',
    'Family Office',
    'Kapitalanlagen',
    'Immobilien',
    'Vermögensverwaltung',
    'Private Equity',
    'Unternehmensführung',
    'Ulrich Ziemes Investor',
    'Ulrich Ziemes Geschäftsführer',
    'Family Office Deutschland',
    'Immobilieninvestor Deutschland',
  ],

  metadataBase: new URL('https://ulrichziemes.de'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
      'en-US': '/en',
    },
  },

  authors: [{ name: 'Ulrich Ziemes', url: 'https://ulrichziemes.de' }],
  creator: 'Ulrich Ziemes',
  publisher: 'Ulrich Ziemes',

  openGraph: {
    type: 'profile',
    locale: 'de_DE',
    url: 'https://ulrichziemes.de',
    siteName: 'Ulrich Ziemes',
    title: 'Ulrich Ziemes VR LL.M. | Geschäftsführer, Investor & Family Office',
    description:
      'Erfahrener Geschäftsführer und Investor. Spezialist für Family Office, Kapitalanlagen und Immobilien.',
    images: [
      {
        url: '/images/ulrich.jpg', // ideally 1200×630px
        width: 1200,
        height: 630,
        alt: 'Ulrich Ziemes – Geschäftsführer und Investor',
      },
    ],
    // OG profile fields boost name-search relevance
    firstName: 'Ulrich',
    lastName: 'Ziemes',
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Ulrich Ziemes VR LL.M. | Geschäftsführer & Investor',
    description:
      'Experte für Family Office, Kapitalanlagen und Immobilien. Strategische Vermögensverwaltung.',
    images: ['/images/ulrich.jpg'],
    creator: '@ulrichziemes', // update if you have a handle
  },

  // Robots — make sure search engines index everything
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Favicons
  icons: {
    icon: [
      { url: '/images/ulrich.jpg', media: '(prefers-color-scheme: light)' },
      { url: '/images/ulrich.jpg', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/ulrich.jpg',
  },

  // Verification tags — add once you verify in Google / Bing Search Console
  // verification: {
  //   google: 'your-google-verification-token',
  //   yandex: 'your-yandex-token',
  // },

  // Category hint for search engines
  category: 'business',
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
        <LocaleProvider defaultLocale="en">
          {children}
          <Toaster/>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
