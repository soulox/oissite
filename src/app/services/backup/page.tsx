import { Metadata } from 'next'
import { BackupServiceHero } from '@/components/features/services/BackupServiceHero'
import { BackupServicePlans } from '@/components/features/services/BackupServicePlans'
import { BackupServiceFeatures } from '@/components/features/services/BackupServiceFeatures'
import { BackupServiceFAQ } from '@/components/features/services/BackupServiceFAQ'

export const metadata: Metadata = {
  title: 'Backup Services - Protect Your Data | OISSite',
  description: 'Automated backup services to protect your website data. Daily backups, easy restoration, and secure storage.',
  keywords: ['backup service', 'data backup', 'website backup', 'automated backup', 'data protection'],
}

export default function BackupServicePage() {
  return (
    <div className="flex flex-col">
      <BackupServiceHero />
      <BackupServicePlans />
      <BackupServiceFeatures />
      <BackupServiceFAQ />
    </div>
  )
}
