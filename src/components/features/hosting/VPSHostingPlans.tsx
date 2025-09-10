import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const vpsPlans = [
  {
    id: 'starter',
    name: 'VPS Starter',
    price: 29.99,
    originalPrice: 59.99,
    description: 'Perfect for small applications and development',
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
  },
  {
    id: 'professional',
    name: 'VPS Professional',
    price: 59.99,
    originalPrice: 119.99,
    description: 'Ideal for growing businesses and applications',
    isPopular: true,
    features: [
      '2 vCPU',
      '4 GB RAM',
      '80 GB SSD Storage',
      '2 TB Bandwidth',
      'Full Root Access',
      'Free SSL Certificate',
      '24/7 Priority Support',
      '99.9% Uptime',
      'OS Choice',
      'Daily Backups',
    ],
  },
  {
    id: 'business',
    name: 'VPS Business',
    price: 119.99,
    originalPrice: 239.99,
    description: 'Perfect for high-traffic applications',
    isPopular: false,
    features: [
      '4 vCPU',
      '8 GB RAM',
      '160 GB SSD Storage',
      '4 TB Bandwidth',
      'Full Root Access',
      'Free SSL Certificate',
      '24/7 Priority Support',
      '99.9% Uptime',
      'OS Choice',
      'Daily Backups',
      'Advanced Security',
    ],
  },
]

export function VPSHostingPlans() {
  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Choose Your VPS Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All VPS plans include full root access, dedicated resources, and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {vpsPlans.map((plan) => (
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
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                <div className="pt-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  {plan.originalPrice > plan.price && (
                    <div className="text-sm text-muted-foreground line-through">
                      ${plan.originalPrice}/month
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="text-sm font-medium">Features:</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.isPopular ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <Link href={`/hosting/vps/order?plan=${plan.id}`}>
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
