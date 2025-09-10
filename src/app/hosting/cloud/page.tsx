import { Metadata } from 'next'
import { CloudHostingHero } from '@/components/features/hosting/CloudHostingHero'
import { CloudHostingPlans } from '@/components/features/hosting/CloudHostingPlans'
import { CloudHostingFeatures } from '@/components/features/hosting/CloudHostingFeatures'
import { CloudHostingFAQ } from '@/components/features/hosting/CloudHostingFAQ'

export const metadata: Metadata = {
  title: 'Cloud Hosting - Scalable Cloud Solutions | OISSite',
  description: 'Scale your business with our cloud hosting solutions. Auto-scaling, load balancing, and global CDN for maximum performance.',
  keywords: ['cloud hosting', 'auto-scaling', 'load balancing', 'CDN', 'scalable hosting'],
}

export default function CloudHostingPage() {
  return (
    <div className="flex flex-col">
      <CloudHostingHero />
      <CloudHostingPlans />
      <CloudHostingFeatures />
      <CloudHostingFAQ />
    </div>
  )
}
