import { Metadata } from 'next'
import { HostingHero } from '@/components/features/hosting/HostingHero'
import { HostingPlans } from '@/components/features/HostingPlans'
import { HostingFeatures } from '@/components/features/hosting/HostingFeatures'
import { HostingComparison } from '@/components/features/hosting/HostingComparison'
import { HostingFAQ } from '@/components/features/hosting/HostingFAQ'
import { CTA } from '@/components/features/CTA'

export const metadata: Metadata = {
  title: 'Web Hosting Solutions - Shared, VPS & Cloud | OISSite',
  description: 'Choose from our range of hosting solutions: shared hosting for beginners, VPS for growing sites, and cloud hosting for enterprise needs.',
  keywords: ['web hosting', 'shared hosting', 'VPS hosting', 'cloud hosting', 'website hosting', 'hosting plans'],
}

export default function HostingPage() {
  return (
    <div className="flex flex-col">
      <HostingHero />
      <HostingPlans />
      <HostingFeatures />
      <HostingComparison />
      <HostingFAQ />
      <CTA />
    </div>
  )
}
