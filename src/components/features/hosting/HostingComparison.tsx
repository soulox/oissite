import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

const hostingTypes = [
  {
    name: 'Shared Hosting',
    description: 'Perfect for small websites and blogs',
    price: 'Starting at $2.99/mo',
    href: '/hosting/shared',
    features: [
      { name: '1 Website', included: true },
      { name: '10GB SSD Storage', included: true },
      { name: 'Unlimited Bandwidth', included: true },
      { name: 'Free SSL Certificate', included: true },
      { name: 'Email Accounts', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Root Access', included: false },
      { name: 'Dedicated Resources', included: false },
    ],
    popular: false,
  },
  {
    name: 'VPS Hosting',
    description: 'Ideal for growing websites and applications',
    price: 'Starting at $19.99/mo',
    href: '/hosting/vps',
    features: [
      { name: 'Multiple Websites', included: true },
      { name: '40GB SSD Storage', included: true },
      { name: 'Unlimited Bandwidth', included: true },
      { name: 'Free SSL Certificate', included: true },
      { name: 'Email Accounts', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Root Access', included: true },
      { name: 'Dedicated Resources', included: true },
    ],
    popular: true,
  },
  {
    name: 'Cloud Hosting',
    description: 'Scalable solution for high-traffic sites',
    price: 'Starting at $39.99/mo',
    href: '/hosting/cloud',
    features: [
      { name: 'Unlimited Websites', included: true },
      { name: '100GB SSD Storage', included: true },
      { name: 'Unlimited Bandwidth', included: true },
      { name: 'Free SSL Certificate', included: true },
      { name: 'Email Accounts', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Root Access', included: true },
      { name: 'Auto Scaling', included: true },
    ],
    popular: false,
  },
]

export function HostingComparison() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Choose Your Perfect Hosting Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare our hosting solutions and find the one that fits your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hostingTypes.map((type, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-shadow ${
                type.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {type.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{type.name}</CardTitle>
                <CardDescription className="text-base">
                  {type.description}
                </CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">
                  {type.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={type.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={type.href}>
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which plan is right for you?
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
