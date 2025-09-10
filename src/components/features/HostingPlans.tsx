import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const hostingPlans = [
  {
    id: 'shared-basic',
    name: 'Shared Basic',
    type: 'shared',
    price: 4.99,
    originalPrice: 9.99,
    billingCycle: 'monthly',
    description: 'Perfect for personal websites and small blogs',
    isPopular: false,
    features: [
      '1 Website',
      '10 GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      '24/7 Support',
      '99.9% Uptime',
    ],
    specifications: {
      storage: '10 GB',
      bandwidth: 'Unlimited',
      websites: 1,
      databases: 1,
      emailAccounts: 5,
    },
  },
  {
    id: 'shared-professional',
    name: 'Shared Professional',
    type: 'shared',
    price: 9.99,
    originalPrice: 19.99,
    billingCycle: 'monthly',
    description: 'Ideal for growing businesses and professional websites',
    isPopular: true,
    features: [
      '5 Websites',
      '50 GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Free Domain (1 year)',
      '24/7 Priority Support',
      '99.9% Uptime',
      'Daily Backups',
    ],
    specifications: {
      storage: '50 GB',
      bandwidth: 'Unlimited',
      websites: 5,
      databases: 5,
      emailAccounts: 25,
    },
  },
  {
    id: 'shared-business',
    name: 'Shared Business',
    type: 'shared',
    price: 19.99,
    originalPrice: 39.99,
    billingCycle: 'monthly',
    description: 'Perfect for established businesses and e-commerce sites',
    isPopular: false,
    features: [
      'Unlimited Websites',
      '100 GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Free Domain (1 year)',
      '24/7 Priority Support',
      '99.9% Uptime',
      'Daily Backups',
      'Advanced Security',
      'Performance Optimization',
    ],
    specifications: {
      storage: '100 GB',
      bandwidth: 'Unlimited',
      websites: -1, // Unlimited
      databases: 10,
      emailAccounts: 100,
    },
  },
  {
    id: 'vps-starter',
    name: 'VPS Starter',
    type: 'vps',
    price: 29.99,
    originalPrice: 59.99,
    billingCycle: 'monthly',
    description: 'Full control with dedicated resources',
    isPopular: false,
    features: [
      '1 vCPU',
      '2 GB RAM',
      '40 GB SSD Storage',
      '1 TB Bandwidth',
      'Full Root Access',
      'Free SSL Certificate',
      '24/7 Support',
      '99.9% Uptime',
      'OS Choice',
    ],
    specifications: {
      storage: '40 GB',
      bandwidth: '1 TB',
      websites: -1, // Unlimited
      databases: -1, // Unlimited
      emailAccounts: -1, // Unlimited
      cpu: '1 vCPU',
      ram: '2 GB',
      cores: 1,
    },
  },
]

export function HostingPlans() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Choose Your Perfect Hosting Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From shared hosting for beginners to VPS solutions for advanced users, we have the perfect plan for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostingPlans.map((plan) => (
            <Card key={plan.id} className={`relative ${plan.isPopular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
                <div className="pt-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  {plan.originalPrice > plan.price && (
                    <div className="text-sm text-muted-foreground line-through">
                      ${plan.originalPrice}/month
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Specifications:</div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Storage: {plan.specifications.storage}</div>
                    <div>Bandwidth: {plan.specifications.bandwidth}</div>
                    <div>
                      Websites: {plan.specifications.websites === -1 ? 'Unlimited' : plan.specifications.websites}
                    </div>
                    {plan.specifications.cpu && (
                      <div>CPU: {plan.specifications.cpu}</div>
                    )}
                    {plan.specifications.ram && (
                      <div>RAM: {plan.specifications.ram}</div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Features:</div>
                  <ul className="space-y-1">
                    {plan.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 4 && (
                      <li className="text-sm text-muted-foreground">
                        +{plan.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.isPopular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={`/hosting/${plan.type}?plan=${plan.id}`}>
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We also offer cloud hosting and dedicated servers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/hosting/cloud">Cloud Hosting</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/hosting/dedicated">Dedicated Servers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
