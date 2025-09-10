import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, Shield, Zap, Globe, Headphones, Database, Lock, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Cloud,
    title: 'Auto-Scaling',
    description: 'Automatically scale your resources based on traffic and demand.',
  },
  {
    icon: Shield,
    title: 'Load Balancing',
    description: 'Distribute traffic across multiple servers for optimal performance.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivery network with servers worldwide for fast loading.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'SSD storage and optimized infrastructure for maximum speed.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert support team available around the clock.',
  },
  {
    icon: Database,
    title: 'Automated Backups',
    description: 'Daily automated backups with point-in-time recovery.',
  },
  {
    icon: Lock,
    title: 'Advanced Security',
    description: 'Enterprise-grade security with DDoS protection.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Monitoring',
    description: 'Comprehensive monitoring and analytics dashboard.',
  },
]

export function CloudHostingFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Cloud Hosting Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for enterprise-grade cloud hosting and scalability.
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
