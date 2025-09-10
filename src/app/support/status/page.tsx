import { Metadata } from 'next'
import { SupportStatusHero } from '@/components/features/support/SupportStatusHero'
import { SupportStatusOverview } from '@/components/features/support/SupportStatusOverview'
import { SupportStatusServices } from '@/components/features/support/SupportStatusServices'
import { SupportStatusHistory } from '@/components/features/support/SupportStatusHistory'

export const metadata: Metadata = {
  title: 'Service Status - System Status | OISSite',
  description: 'Check the current status of our hosting services, domains, and all systems. Real-time monitoring and incident reports.',
  keywords: ['service status', 'system status', 'uptime', 'monitoring', 'incidents', 'downtime'],
}

export default function SupportStatusPage() {
  return (
    <div className="flex flex-col">
      <SupportStatusHero />
      <SupportStatusOverview />
      <SupportStatusServices />
      <SupportStatusHistory />
    </div>
  )
}
