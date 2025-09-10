import { Metadata } from 'next'
import { SupportContactHero } from '@/components/features/support/SupportContactHero'
import { SupportContactForm } from '@/components/features/support/SupportContactForm'
import { SupportContactInfo } from '@/components/features/support/SupportContactInfo'
import { SupportContactFAQ } from '@/components/features/support/SupportContactFAQ'

export const metadata: Metadata = {
  title: 'Contact Support - Get Help | OISSite',
  description: 'Contact our support team for help with hosting, domains, and technical issues. We\'re here to help 24/7.',
  keywords: ['contact support', 'support ticket', 'technical support', 'customer service', 'help'],
}

export default function SupportContactPage() {
  return (
    <div className="flex flex-col">
      <SupportContactHero />
      <SupportContactForm />
      <SupportContactInfo />
      <SupportContactFAQ />
    </div>
  )
}
