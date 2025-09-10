import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const sharedPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 4.99,
    originalPrice: 9.99,
    description: 'Perfect for personal websites and blogs',
    isPopular: false,
    features: [
      '1 Website',
      '10 GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      '24/7 Support',
      '99.9% Uptime',
      'cPanel Control Panel',
      '1-Click WordPress Install',
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
    id: 'professional',
    name: 'Professional',
    price: 9.99,
    originalPrice: 19.99,
    description: 'Ideal for growing businesses',
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
      'cPanel Control Panel',
      '1-Click WordPress Install',
      'Advanced Security',
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
    id: 'business',
    name: 'Business',
    price: 19.99,
    originalPrice: 39.99,
    description: 'Perfect for established businesses',
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
      'cPanel Control Panel',
      '1-Click WordPress Install',
      'Free CDN',
    ],
    specifications: {
      storage: '100 GB',
      bandwidth: 'Unlimited',
      websites: -1, // Unlimited
      databases: 10,
      emailAccounts: 100,
    },
  },
]

export function SharedHostingPlans() {
  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Choose Your Shared Hosting Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All plans include our 99.9% uptime guarantee, 24/7 support, and 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sharedPlans.map((plan) => (
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
                  <div className="text-sm font-medium">Key Specifications:</div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Storage: {plan.specifications.storage}</div>
                    <div>Bandwidth: {plan.specifications.bandwidth}</div>
                    <div>
                      Websites: {plan.specifications.websites === -1 ? 'Unlimited' : plan.specifications.websites}
                    </div>
                    <div>Email Accounts: {plan.specifications.emailAccounts === -1 ? 'Unlimited' : plan.specifications.emailAccounts}</div>
                  </div>
                </div>

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
                  <Link href={`/hosting/shared/order?plan=${plan.id}`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 30-day money-back guarantee and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/hosting/vps">Need More Power? Try VPS</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
