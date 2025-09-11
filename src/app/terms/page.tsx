import { Metadata } from 'next'
import { TermsHero } from '@/components/features/legal/TermsHero'
import { TermsContent } from '@/components/features/legal/TermsContent'
import { PrivacyContact } from '@/components/features/legal/PrivacyContact'

export const metadata: Metadata = {
  title: 'Terms of Service - OISSite',
  description: 'Read OISSite\'s Terms of Service to understand the rules and guidelines for using our web hosting and domain services.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'OISSite terms'],
}

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <TermsHero />
      <TermsContent />
      <PrivacyContact />
    </div>
  )
}
