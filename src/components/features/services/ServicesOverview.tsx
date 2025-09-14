import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Mail, Database, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Shield,
    title: 'SSL Certificates',
    description: 'Secure your website with industry-standard SSL certificates. Protect your visitors\' data and boost your SEO rankings.',
    features: ['Free SSL Included', 'Wildcard SSL Available', 'Auto-Renewal', 'Trust Seal'],
    price: 'Starting at $0/mo',
    href: '/services/ssl',
    popular: true,
  },
  {
    icon: Mail,
    title: 'Email Hosting',
    description: 'Professional email hosting with your domain name. Get reliable email service with advanced features.',
    features: ['Custom Domain Email', 'Spam Protection', 'Webmail Access', 'Mobile Sync'],
    price: 'Starting at $1.99/mo',
    href: '/services/email',
    popular: false,
  },
  {
    icon: Database,
    title: 'Backup Services',
    description: 'Automated backup solutions to protect your website data. Never lose your content again.',
    features: ['Daily Backups', 'Easy Restoration', 'Offsite Storage', 'Version History'],
    price: 'Starting at $2.99/mo',
    href: '/services/backup',
    popular: false,
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Professional Services Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your hosting experience with our professional services designed 
            to secure, protect, and optimize your website.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-shadow ${
                service.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                <div className="text-2xl font-bold text-primary mt-4">
                  {service.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={service.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need help choosing the right services for your website?
          </p>
          <Button variant="outline" asChild>
            <Link href="/support/contact">
              Contact Our Experts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
