import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'
import { CookieConsentProvider } from '@/contexts/CookieConsentContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { CookieConsentBanner } from '@/components/ui/CookieConsentBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OISSite - Web Hosting & Domain Services',
  description: 'Comprehensive web hosting and domain services platform that empowers businesses and individuals to achieve online success through reliable, scalable, and user-friendly hosting solutions.',
  keywords: ['web hosting', 'domain registration', 'VPS hosting', 'cloud hosting', 'shared hosting', 'SSL certificates'],
  authors: [{ name: 'OISSite Team' }],
  creator: 'OISSite',
  publisher: 'OISSite',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oissite.com'),
  openGraph: {
    title: 'OISSite - Web Hosting & Domain Services',
    description: 'Reliable, scalable, and user-friendly hosting solutions for your online success.',
    url: 'https://oissite.com',
    siteName: 'OISSite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OISSite - Web Hosting & Domain Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OISSite - Web Hosting & Domain Services',
    description: 'Reliable, scalable, and user-friendly hosting solutions for your online success.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <CookieConsentProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
            <CookieConsentBanner />
          </CookieConsentProvider>
        </AuthProvider>
      </body>
    </html>
  )
}