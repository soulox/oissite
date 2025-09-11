import { Metadata } from 'next'
import { CookiePolicyHero } from '@/components/features/legal/CookiePolicyHero'
import { CookiePolicyContent } from '@/components/features/legal/CookiePolicyContent'
import { CookieSettings } from '@/components/ui/CookieSettings'

export const metadata: Metadata = {
  title: 'Cookie Policy - OISSite',
  description: 'Learn about how OISSite uses cookies and similar technologies to enhance your browsing experience and analyze website traffic.',
  keywords: ['cookie policy', 'cookies', 'tracking', 'analytics', 'GDPR', 'OISSite'],
}

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col">
      <CookiePolicyHero />
      <CookiePolicyContent />
      <div className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <CookieSettings />
        </div>
      </div>
    </div>
  )
}
