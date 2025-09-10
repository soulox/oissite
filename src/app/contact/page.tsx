import { Metadata } from 'next'
import { ContactHero } from '@/components/features/contact/ContactHero'
import { ContactForm } from '@/components/features/contact/ContactForm'
import { ContactInfo } from '@/components/features/contact/ContactInfo'
import { ContactFAQ } from '@/components/features/contact/ContactFAQ'

export const metadata: Metadata = {
  title: 'Contact Us - Get Help with Your Hosting | OISSite',
  description: 'Get in touch with our expert support team. We\'re here to help with your hosting needs 24/7. Contact us via chat, email, or phone.',
  keywords: ['contact oissite', 'hosting support', 'customer service', 'help', 'support'],
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
    </div>
  )
}
