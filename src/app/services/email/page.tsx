import { Metadata } from 'next'
import { EmailServiceHero } from '@/components/features/services/EmailServiceHero'
import { EmailServicePlans } from '@/components/features/services/EmailServicePlans'
import { EmailServiceFeatures } from '@/components/features/services/EmailServiceFeatures'
import { EmailServiceFAQ } from '@/components/features/services/EmailServiceFAQ'

export const metadata: Metadata = {
  title: 'Email Hosting - Professional Email Service | OISSite',
  description: 'Professional email hosting with custom domains, spam protection, and mobile sync. Business email solutions.',
  keywords: ['email hosting', 'business email', 'custom email', 'email service', 'professional email'],
}

export default function EmailServicePage() {
  return (
    <div className="flex flex-col">
      <EmailServiceHero />
      <EmailServicePlans />
      <EmailServiceFeatures />
      <EmailServiceFAQ />
    </div>
  )
}
