import { Metadata } from 'next'
import { VPSHostingHero } from '@/components/features/hosting/VPSHostingHero'
import { VPSHostingPlans } from '@/components/features/hosting/VPSHostingPlans'
import { VPSHostingFeatures } from '@/components/features/hosting/VPSHostingFeatures'
import { VPSHostingFAQ } from '@/components/features/hosting/VPSHostingFAQ'

export const metadata: Metadata = {
  title: 'VPS Hosting - Virtual Private Servers | OISSite',
  description: 'Get full control with our VPS hosting plans. Dedicated resources, root access, and scalable configurations for your growing business.',
  keywords: ['VPS hosting', 'virtual private server', 'dedicated resources', 'root access', 'scalable hosting'],
}

export default function VPSHostingPage() {
  return (
    <div className="flex flex-col">
      <VPSHostingHero />
      <VPSHostingPlans />
      <VPSHostingFeatures />
      <VPSHostingFAQ />
    </div>
  )
}
