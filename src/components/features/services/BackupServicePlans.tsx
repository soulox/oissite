import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const backupPlans = [
  {
    id: 'starter',
    name: 'Backup Starter',
    price: 9.99,
    description: 'Perfect for small websites and personal projects',
    isPopular: true,
    features: [
      'Daily Automated Backups',
      '10 GB Storage',
      '7-Day Retention',
      'Easy Restoration',
      'Email Notifications',
      'Basic Support',
      'Website Files',
      'Database Backups',
    ],
  },
  {
    id: 'professional',
    name: 'Backup Professional',
    price: 19.99,
    description: 'Ideal for business websites',
    isPopular: false,
    features: [
      'Daily Automated Backups',
      '50 GB Storage',
      '30-Day Retention',
      'Easy Restoration',
      'Email Notifications',
      'Priority Support',
      'Website Files',
      'Database Backups',
      'Incremental Backups',
    ],
  },
  {
    id: 'enterprise',
    name: 'Backup Enterprise',
    price: 39.99,
    description: 'Perfect for large websites and applications',
    isPopular: false,
    features: [
      'Multiple Daily Backups',
      '100 GB Storage',
      '90-Day Retention',
      'Easy Restoration',
      'Email Notifications',
      'Dedicated Support',
      'Website Files',
      'Database Backups',
      'Incremental Backups',
      'Advanced Security',
    ],
  },
]

export function BackupServicePlans() {
  return (
    <section id="backup-plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Backup Service Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the backup plan that fits your data protection needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {backupPlans.map((plan) => (
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
                  <Link href={`/services/backup/order?plan=${plan.id}`}>
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
