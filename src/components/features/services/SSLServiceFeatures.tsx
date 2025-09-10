import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, CheckCircle, Globe, Zap, Settings, Headphones, Database } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Free SSL Included',
    description: 'Get free SSL certificates with all hosting plans using Let\'s Encrypt.',
  },
  {
    icon: Lock,
    title: 'HTTPS Encryption',
    description: 'Secure your website with industry-standard HTTPS encryption.',
  },
  {
    icon: CheckCircle,
    title: 'Easy Installation',
    description: 'One-click SSL installation and automatic configuration.',
  },
  {
    icon: Globe,
    title: 'Browser Trust',
    description: 'Trusted by all major browsers and search engines.',
  },
  {
    icon: Zap,
    title: 'Auto-Renewal',
    description: 'Automatic certificate renewal to ensure continuous security.',
  },
  {
    icon: Settings,
    title: 'Easy Management',
    description: 'Simple SSL management through our control panel.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert support team available to help with SSL setup.',
  },
  {
    icon: Database,
    title: 'Multiple Domains',
    description: 'Secure multiple domains and subdomains with one certificate.',
  },
]

export function SSLServiceFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            SSL Certificate Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to secure your website with SSL certificates.
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
