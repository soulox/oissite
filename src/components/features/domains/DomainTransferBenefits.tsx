import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Shield, Headphones, Settings, Clock, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Free Transfer',
    description: 'No transfer fees or hidden costs. Save money while getting better service.',
  },
  {
    icon: Shield,
    title: 'Better Security',
    description: 'Enhanced security features and free domain privacy protection included.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert support team available around the clock to help with your domain.',
  },
  {
    icon: Settings,
    title: 'Easy Management',
    description: 'User-friendly domain management tools and intuitive control panel.',
  },
  {
    icon: Clock,
    title: 'Fast Transfer',
    description: 'Quick and efficient transfer process with minimal downtime.',
  },
  {
    icon: CheckCircle,
    title: 'Reliable Service',
    description: '99.9% uptime guarantee with reliable domain management services.',
  },
]

export function DomainTransferBenefits() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Transfer to OISSite?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get better domain management, competitive pricing, and superior support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
