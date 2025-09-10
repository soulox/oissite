import { Metadata } from 'next'
import { DomainsHero } from '@/components/features/domains/DomainsHero'
import { DomainServices } from '@/components/features/domains/DomainServices'
import { PopularTLDs } from '@/components/features/domains/PopularTLDs'
import { DomainFeatures } from '@/components/features/domains/DomainFeatures'

export const metadata: Metadata = {
  title: 'Domain Services - Domain Registration & Management | OISSite',
  description: 'Complete domain services including registration, transfer, and management. Find your perfect domain name with our comprehensive domain solutions.',
  keywords: ['domain services', 'domain registration', 'domain management', 'domain search', 'domain transfer'],
}

export default function DomainsPage() {
  return (
    <div className="flex flex-col">
      <DomainsHero />
      <DomainServices />
      <PopularTLDs />
      <DomainFeatures />
    </div>
  )
}
