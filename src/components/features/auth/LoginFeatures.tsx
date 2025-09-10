import { Card, CardContent } from '@/components/ui/card'
import { Shield, Zap, Headphones, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Your account is protected with enterprise-grade security and 2FA support.'
  },
  {
    icon: Zap,
    title: 'Fast Dashboard',
    description: 'Access your hosting control panel with lightning-fast performance.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Get instant help from our expert support team whenever you need it.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Manage your websites and domains from anywhere in the world.'
  }
]

export function LoginFeatures() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Why Choose OISSite?</h3>
        <p className="text-muted-foreground">
          Experience the difference with our premium hosting services and customer support.
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
    </div>
  )
}
