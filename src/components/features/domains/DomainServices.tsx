import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, ArrowRightLeft, Settings, Shield } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Search,
    title: 'Domain Registration',
    description: 'Register your perfect domain name with competitive pricing and instant activation.',
    features: ['Competitive Pricing', 'Instant Activation', 'Free DNS Management', '24/7 Support'],
    buttonText: 'Search Domains',
    href: '/domains/search',
  },
  {
    icon: ArrowRightLeft,
    title: 'Domain Transfer',
    description: 'Transfer your existing domain to OISSite for better management and pricing.',
    features: ['Free Transfer', 'No Hidden Fees', 'Easy Process', 'Expert Support'],
    buttonText: 'Transfer Domain',
    href: '/domains/transfer',
  },
  {
    icon: Settings,
    title: 'Domain Management',
    description: 'Complete control over your domain with our easy-to-use management tools.',
    features: ['DNS Management', 'Email Forwarding', 'Subdomain Creation', 'Auto-Renewal'],
    buttonText: 'Manage Domains',
    href: '/dashboard/domains',
  },
  {
    icon: Shield,
    title: 'Domain Privacy',
    description: 'Protect your personal information with our free domain privacy protection.',
    features: ['Free Privacy', 'WHOIS Protection', 'Spam Prevention', 'Identity Protection'],
    buttonText: 'Learn More',
    href: '/domains/privacy',
  },
]

export function DomainServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Complete Domain Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your domain names with ease and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href={service.href}>
                    {service.buttonText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
