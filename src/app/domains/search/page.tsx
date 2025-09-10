import { Metadata } from 'next'
import { DomainSearchHero } from '@/components/features/domains/DomainSearchHero'
import { DomainSearchForm } from '@/components/features/domains/DomainSearchForm'
import { PopularTLDs } from '@/components/features/domains/PopularTLDs'
import { DomainFeatures } from '@/components/features/domains/DomainFeatures'

export const metadata: Metadata = {
  title: 'Domain Search - Find Your Perfect Domain | OISSite',
  description: 'Search and register your perfect domain name. Check availability instantly and secure your online identity with our domain registration services.',
  keywords: ['domain search', 'domain registration', 'domain names', 'buy domain', 'domain availability'],
}

export default function DomainSearchPage() {
  return (
    <div className="flex flex-col">
      <DomainSearchHero />
      <DomainSearchForm />
      <PopularTLDs />
      <DomainFeatures />
    </div>
  )
}
