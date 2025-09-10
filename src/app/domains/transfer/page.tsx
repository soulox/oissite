import { Metadata } from 'next'
import { DomainTransferHero } from '@/components/features/domains/DomainTransferHero'
import { DomainTransferForm } from '@/components/features/domains/DomainTransferForm'
import { DomainTransferBenefits } from '@/components/features/domains/DomainTransferBenefits'
import { DomainTransferFAQ } from '@/components/features/domains/DomainTransferFAQ'

export const metadata: Metadata = {
  title: 'Domain Transfer - Transfer Your Domain to OISSite',
  description: 'Transfer your domain to OISSite for better management, pricing, and support. Free transfer with no hidden fees.',
  keywords: ['domain transfer', 'transfer domain', 'domain migration', 'domain management'],
}

export default function DomainTransferPage() {
  return (
    <div className="flex flex-col">
      <DomainTransferHero />
      <DomainTransferForm />
      <DomainTransferBenefits />
      <DomainTransferFAQ />
    </div>
  )
}
