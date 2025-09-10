import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const emailPlans = [
  {
    id: 'starter',
    name: 'Email Starter',
    price: 2.99,
    description: 'Perfect for small businesses and personal use',
    isPopular: true,
    features: [
      '5 Email Accounts',
      '10 GB Storage',
      'Spam Protection',
      'Mobile Sync',
      'Webmail Access',
      'Email Forwarding',
      'Basic Support',
      'Custom Domain',
    ],
  },
  {
    id: 'professional',
    name: 'Email Professional',
    price: 9.99,
    description: 'Ideal for growing businesses',
    isPopular: false,
    features: [
      '25 Email Accounts',
      '50 GB Storage',
      'Advanced Spam Protection',
      'Mobile Sync',
      'Webmail Access',
      'Email Forwarding',
      'Priority Support',
      'Custom Domain',
      'Calendar Sync',
    ],
  },
  {
    id: 'enterprise',
    name: 'Email Enterprise',
    price: 19.99,
    description: 'Perfect for large organizations',
    isPopular: false,
    features: [
      'Unlimited Email Accounts',
      '100 GB Storage',
      'Enterprise Spam Protection',
      'Mobile Sync',
      'Webmail Access',
      'Email Forwarding',
      'Dedicated Support',
      'Custom Domain',
      'Calendar Sync',
      'Advanced Security',
    ],
  },
]

export function EmailServicePlans() {
  return (
    <section id="email-plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Email Hosting Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the email hosting plan that fits your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {emailPlans.map((plan) => (
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
                  <Link href={`/services/email/order?plan=${plan.id}`}>
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
