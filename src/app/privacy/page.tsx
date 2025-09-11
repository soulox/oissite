import { Metadata } from 'next'
import { PrivacyHero } from '@/components/features/legal/PrivacyHero'
import { PrivacyContent } from '@/components/features/legal/PrivacyContent'
import { PrivacyContact } from '@/components/features/legal/PrivacyContact'

export const metadata: Metadata = {
  title: 'Privacy Policy - OISSite',
  description: 'Learn how OISSite collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'personal information', 'OISSite privacy'],
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <PrivacyHero />
      <PrivacyContent />
      <PrivacyContact />
    </div>
  )
}
