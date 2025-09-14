import { Metadata } from 'next'
import { SupportHero } from '@/components/features/support/SupportHero'
import { SupportFeatures } from '@/components/features/support/SupportFeatures'
import { SupportChannels } from '@/components/features/support/SupportChannels'
import { SupportFAQ } from '@/components/features/support/SupportFAQ'
import { CTA } from '@/components/features/CTA'

export const metadata: Metadata = {
  title: 'Support Center - 24/7 Help & Support | OISSite',
  description: 'Get 24/7 support for your hosting, domains, and technical needs. Access our help center, contact support, and check system status.',
  keywords: ['support', 'help', 'customer service', 'technical support', '24/7 support', 'hosting support'],
}

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      <SupportHero />
      <SupportFeatures />
      <SupportChannels />
      <SupportFAQ />
      <CTA />
    </div>
  )
}
