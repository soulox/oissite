import { Metadata } from 'next'
import { SSLServiceHero } from '@/components/features/services/SSLServiceHero'
import { SSLServicePlans } from '@/components/features/services/SSLServicePlans'
import { SSLServiceFeatures } from '@/components/features/services/SSLServiceFeatures'
import { SSLServiceFAQ } from '@/components/features/services/SSLServiceFAQ'

export const metadata: Metadata = {
  title: 'SSL Certificates - Secure Your Website | OISSite',
  description: 'Get SSL certificates to secure your website with HTTPS encryption. Free and premium SSL options available.',
  keywords: ['SSL certificate', 'HTTPS', 'website security', 'encryption', 'SSL', 'security'],
}

export default function SSLServicePage() {
  return (
    <div className="flex flex-col">
      <SSLServiceHero />
      <SSLServicePlans />
      <SSLServiceFeatures />
      <SSLServiceFAQ />
    </div>
  )
}
