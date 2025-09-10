import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  Globe, 
  Lock, 
  Mail,
  Settings,
  Headphones,
  Zap,
  BarChart3
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'WHOIS Privacy Protection',
    description: 'Keep your personal information private with free WHOIS privacy protection on all domains.',
  },
  {
    icon: Globe,
    title: 'DNS Management',
    description: 'Easy-to-use DNS management tools to configure your domain settings and point to your hosting.',
  },
  {
    icon: Lock,
    title: 'Domain Lock',
    description: 'Protect your domain from unauthorized transfers with our domain lock feature.',
  },
  {
    icon: Mail,
    title: 'Email Forwarding',
    description: 'Set up professional email addresses and forward them to your existing email accounts.',
  },
  {
    icon: Settings,
    title: 'Auto-Renewal',
    description: 'Never lose your domain with automatic renewal options and expiration reminders.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Get help with your domain management from our expert support team around the clock.',
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Your domain is activated immediately after registration with instant DNS propagation.',
  },
  {
    icon: BarChart3,
    title: 'Domain Analytics',
    description: 'Track your domain performance with detailed analytics and traffic insights.',
  },
]

export function DomainFeatures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Complete Domain Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get everything you need to manage your domain professionally with our comprehensive domain services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Domain extensions</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Expert support</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Free</div>
              <div className="text-sm text-muted-foreground">WHOIS privacy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
