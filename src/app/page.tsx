import { Hero } from '@/components/features/Hero'
import { HostingPlans } from '@/components/features/HostingPlans'
import { Features } from '@/components/features/Features'
import { Testimonials } from '@/components/features/Testimonials'
import { Stats } from '@/components/features/Stats'
import { CTA } from '@/components/features/CTA'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <HostingPlans />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}