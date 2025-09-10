import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const sslPlans = [
  {
    id: 'free',
    name: 'Free SSL',
    price: 0,
    description: 'Perfect for personal websites and small businesses',
    isPopular: true,
    features: [
      'Let\'s Encrypt Certificate',
      'Automatic Installation',
      'Auto-Renewal',
      'Basic Security',
      'HTTPS Encryption',
      'Browser Trust',
      '90-Day Validity',
      'Unlimited Domains',
    ],
  },
  {
    id: 'premium',
    name: 'Premium SSL',
    price: 49.99,
    description: 'Enhanced security for business websites',
    isPopular: false,
    features: [
      'Extended Validation',
      'Green Address Bar',
      'Higher Warranty',
      'Priority Support',
      'Multi-Domain Support',
      'Wildcard Support',
      '2-Year Validity',
      'Advanced Security',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise SSL',
    price: 199.99,
    description: 'Maximum security for enterprise applications',
    isPopular: false,
    features: [
      'Extended Validation',
      'Green Address Bar',
      'Maximum Warranty',
      'Dedicated Support',
      'Unlimited Domains',
      'Wildcard Support',
      '3-Year Validity',
      'Advanced Security',
      'Compliance Support',
    ],
  },
]

export function SSLServicePlans() {
  return (
    <section id="ssl-plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            SSL Certificate Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the SSL certificate that fits your security needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sslPlans.map((plan) => (
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
                    <span className="text-lg text-muted-foreground">{plan.price === 0 ? '' : '/year'}</span>
                  </div>
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
                  <Link href={`/services/ssl/order?plan=${plan.id}`}>
                    {plan.price === 0 ? 'Get Free SSL' : 'Get Started'}
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
