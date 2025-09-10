import { Metadata } from 'next'
import { AboutHero } from '@/components/features/about/AboutHero'
import { AboutMission } from '@/components/features/about/AboutMission'
import { AboutTeam } from '@/components/features/about/AboutTeam'
import { AboutValues } from '@/components/features/about/AboutValues'
import { AboutStats } from '@/components/features/about/AboutStats'

export const metadata: Metadata = {
  title: 'About Us - OISSite Web Hosting & Domain Services',
  description: 'Learn about OISSite, your trusted partner for web hosting and domain services. Discover our mission, values, and the team behind our reliable hosting solutions.',
  keywords: ['about oissite', 'web hosting company', 'hosting provider', 'domain services', 'company mission'],
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
    </div>
  )
}
