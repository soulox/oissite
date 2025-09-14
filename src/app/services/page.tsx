import { Metadata } from 'next'
import { ServicesHero } from '@/components/features/services/ServicesHero'
import { ServicesOverview } from '@/components/features/services/ServicesOverview'
import { ServicesFeatures } from '@/components/features/services/ServicesFeatures'
import { ServicesFAQ } from '@/components/features/services/ServicesFAQ'
import { CTA } from '@/components/features/CTA'

export const metadata: Metadata = {
  title: 'Professional Services - SSL, Email & Backup | OISSite',
  description: 'Enhance your hosting with our professional services: SSL certificates, email hosting, and automated backup solutions.',
  keywords: ['SSL certificates', 'email hosting', 'backup services', 'professional services', 'hosting add-ons'],
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesOverview />
      <ServicesFeatures />
      <ServicesFAQ />
      <CTA />
    </div>
  )
}
