import { Metadata } from 'next'
import { SupportHelpHero } from '@/components/features/support/SupportHelpHero'
import { SupportHelpSearch } from '@/components/features/support/SupportHelpSearch'
import { SupportHelpCategories } from '@/components/features/support/SupportHelpCategories'
import { SupportHelpFAQ } from '@/components/features/support/SupportHelpFAQ'

export const metadata: Metadata = {
  title: 'Help Center - Get Support | OISSite',
  description: 'Find answers to common questions, tutorials, and guides. Get help with hosting, domains, and all our services.',
  keywords: ['help center', 'support', 'tutorials', 'guides', 'FAQ', 'documentation'],
}

export default function SupportHelpPage() {
  return (
    <div className="flex flex-col">
      <SupportHelpHero />
      <SupportHelpSearch />
      <SupportHelpCategories />
      <SupportHelpFAQ />
    </div>
  )
}
