import { Metadata } from 'next'
import { SharedHostingHero } from '@/components/features/hosting/SharedHostingHero'
import { SharedHostingPlans } from '@/components/features/hosting/SharedHostingPlans'
import { SharedHostingFeatures } from '@/components/features/hosting/SharedHostingFeatures'
import { SharedHostingFAQ } from '@/components/features/hosting/SharedHostingFAQ'

export const metadata: Metadata = {
  title: 'Shared Hosting - Affordable Web Hosting | OISSite',
  description: 'Get started with our reliable shared hosting plans. Perfect for personal websites, blogs, and small businesses. 99.9% uptime guarantee.',
  keywords: ['shared hosting', 'web hosting', 'affordable hosting', 'website hosting', 'blog hosting'],
}

export default function SharedHostingPage() {
  return (
    <div className="flex flex-col">
      <SharedHostingHero />
      <SharedHostingPlans />
      <SharedHostingFeatures />
      <SharedHostingFAQ />
    </div>
  )
}
