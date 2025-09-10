import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Settings, Shield, Zap, Globe, Mail, Database, Lock, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'DNS Management',
    description: 'Full control over your domain\'s DNS settings with an intuitive interface.',
  },
  {
    icon: Mail,
    title: 'Email Forwarding',
    description: 'Set up email forwarding to any email address with unlimited forwards.',
  },
  {
    icon: Globe,
    title: 'Subdomain Creation',
    description: 'Create unlimited subdomains for your domain with easy management.',
  },
  {
    icon: Shield,
    title: 'Domain Privacy',
    description: 'Protect your personal information with free domain privacy protection.',
  },
  {
    icon: Lock,
    title: 'SSL Management',
    description: 'Easy SSL certificate management and automatic HTTPS redirection.',
  },
  {
    icon: Database,
    title: 'Auto-Renewal',
    description: 'Never lose your domain with automatic renewal and payment processing.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Track your domain performance with detailed analytics and reports.',
  },
  {
    icon: Zap,
    title: 'API Access',
    description: 'Manage your domains programmatically with our powerful API.',
  },
]

export function DomainManageFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Domain Management Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your domains effectively and efficiently.
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
      </div>
    </section>
  )
}
