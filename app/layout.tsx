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
    default: 'Ulrich Ziemes | Managing Director, Investor & Family Office Expert',
    template: '%s | Ulrich Ziemes VR LL.M.',
  },
  description:
    'Ulrich Ziemes VR LL.M. – experienced Managing Director, investor and expert in family office, capital investments and real estate. Strategic wealth management and entrepreneurial leadership at the highest level.',

  keywords: [
    'Ulrich Ziemes',
    'Ulrich Jakob Ziemes',
    'Ulrich Ziemes VR LL.M.',
    'Managing Director',
    'Investor',
    'Family Office',
    'Capital Investments',
    'Real Estate',
    'Wealth Management',
    'Private Equity',
    'Corporate Leadership',
    'Ulrich Ziemes Investor',
    'Ulrich Ziemes Managing Director',
    'Family Office Germany',
    'Real Estate Investor Germany',
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
    locale: 'en_US',
    url: 'https://ulrichziemes.de',
    siteName: 'Ulrich Ziemes',
    title: 'Ulrich Ziemes VR LL.M. | Managing Director, Investor & Family Office',
    description:
      'Experienced Managing Director and investor. Specialist in family office, capital investments and real estate.',
    images: [
      {
        url: '/images/ulrich.jpg', // ideally 1200×630px
        width: 1200,
        height: 630,
        alt: 'Ulrich Ziemes – Managing Director and Investor',
      },
    ],
    // OG profile fields boost name-search relevance
    firstName: 'Ulrich',
    lastName: 'Ziemes',
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Ulrich Ziemes VR LL.M. | Managing Director & Investor',
    description:
      'Expert in family office, capital investments and real estate. Strategic wealth management.',
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
    <html lang="en">
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