import { Metadata } from 'next'
import { DomainManageHero } from '@/components/features/domains/DomainManageHero'
import { DomainManageFeatures } from '@/components/features/domains/DomainManageFeatures'
import { DomainManageTools } from '@/components/features/domains/DomainManageTools'
import { DomainManageFAQ } from '@/components/features/domains/DomainManageFAQ'

export const metadata: Metadata = {
  title: 'Domain Management - Manage Your Domains | OISSite',
  description: 'Complete domain management tools including DNS settings, email forwarding, subdomains, and more. Take full control of your domains.',
  keywords: ['domain management', 'DNS management', 'email forwarding', 'subdomain', 'domain control panel'],
}

export default function DomainManagePage() {
  return (
    <div className="flex flex-col">
      <DomainManageHero />
      <DomainManageFeatures />
      <DomainManageTools />
      <DomainManageFAQ />
    </div>
  )
}