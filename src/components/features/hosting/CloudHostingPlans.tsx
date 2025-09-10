import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const cloudPlans = [
  {
    id: 'starter',
    name: 'Cloud Starter',
    price: 99.99,
    originalPrice: 199.99,
    description: 'Perfect for small to medium applications',
    isPopular: false,
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Global CDN',
      '2 vCPU',
      '4 GB RAM',
      '50 GB SSD Storage',
      'Unlimited Bandwidth',
      '99.99% Uptime',
      '24/7 Support',
    ],
  },
  {
    id: 'professional',
    name: 'Cloud Professional',
    price: 199.99,
    originalPrice: 399.99,
    description: 'Ideal for growing businesses',
    isPopular: true,
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Global CDN',
      '4 vCPU',
      '8 GB RAM',
      '100 GB SSD Storage',
      'Unlimited Bandwidth',
      '99.99% Uptime',
      '24/7 Priority Support',
      'Advanced Monitoring',
    ],
  },
  {
    id: 'enterprise',
    name: 'Cloud Enterprise',
    price: 399.99,
    originalPrice: 799.99,
    description: 'Perfect for high-traffic applications',
    isPopular: false,
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Global CDN',
      '8 vCPU',
      '16 GB RAM',
      '200 GB SSD Storage',
      'Unlimited Bandwidth',
      '99.99% Uptime',
      '24/7 Priority Support',
      'Advanced Monitoring',
      'Dedicated Support',
    ],
  },
]

export function CloudHostingPlans() {
  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Choose Your Cloud Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All cloud plans include auto-scaling, load balancing, and global CDN.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cloudPlans.map((plan) => (
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
                  <Link href={`/hosting/cloud/order?plan=${plan.id}`}>
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
