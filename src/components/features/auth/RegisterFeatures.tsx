import { Card, CardContent } from '@/components/ui/card'
import { Gift, Shield, Headphones, Zap } from 'lucide-react'

const features = [
  {
    icon: Gift,
    title: 'Free Setup',
    description: 'Get your hosting account set up for free with our expert team.'
  },
  {
    icon: Shield,
    title: '30-Day Money Back',
    description: 'Try our services risk-free with our 30-day money-back guarantee.'
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Get help from our hosting experts whenever you need it.'
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Your hosting account is activated immediately after registration.'
  }
]

export function RegisterFeatures() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">What You Get</h3>
        <p className="text-muted-foreground">
          Join OISSite today and get access to premium hosting features and support.
        </p>
      </div>
      
      <div className="grid gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="border-l-4 border-l-primary">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h4 className="font-semibold text-primary mb-2">Special Offer</h4>
        <p className="text-sm text-muted-foreground">
          New customers get 20% off their first year of hosting. Use code{' '}
          <span className="font-mono bg-primary/10 px-2 py-1 rounded text-primary">
            WELCOME20
          </span>{' '}
          at checkout.
        </p>
      </div>
    </div>
  )
}
