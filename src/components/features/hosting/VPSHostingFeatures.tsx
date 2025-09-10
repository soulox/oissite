import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Server, Shield, Zap, Globe, Headphones, Database, Lock, Settings } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'Dedicated Resources',
    description: 'Get guaranteed CPU, RAM, and storage resources that are exclusively yours.',
  },
  {
    icon: Shield,
    title: 'Full Root Access',
    description: 'Complete control over your server with full root access and custom configurations.',
  },
  {
    icon: Zap,
    title: 'SSD Storage',
    description: 'Fast SSD storage for improved performance and faster data access.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'High-speed network connectivity with global reach and low latency.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert support team available around the clock to help with your VPS.',
  },
  {
    icon: Database,
    title: 'Automated Backups',
    description: 'Daily automated backups to protect your data and ensure business continuity.',
  },
  {
    icon: Lock,
    title: 'Advanced Security',
    description: 'Enterprise-grade security features to protect your VPS and data.',
  },
  {
    icon: Settings,
    title: 'Easy Management',
    description: 'User-friendly control panel for easy server management and monitoring.',
  },
]

export function VPSHostingFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            VPS Hosting Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run your applications with complete control and reliability.
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
