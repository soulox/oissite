import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Zap, Globe, Headphones, Database, Lock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security measures including DDoS protection, malware scanning, and automated backups.',
    features: ['DDoS Protection', 'Malware Scanning', 'Automated Backups', 'SSL Certificates'],
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'SSD storage, CDN integration, and optimized servers for maximum performance.',
    features: ['SSD Storage', 'CDN Integration', 'Optimized Servers', 'Caching'],
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Multiple data centers worldwide for low latency and high availability.',
    features: ['Global CDN', 'Multiple Data Centers', 'Low Latency', 'High Availability'],
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock expert support via chat, phone, and email.',
    features: ['Live Chat', 'Phone Support', 'Email Support', 'Knowledge Base'],
  },
  {
    icon: Database,
    title: 'Easy Management',
    description: 'User-friendly control panels and one-click installations for popular applications.',
    features: ['Control Panel', 'One-Click Installs', 'File Manager', 'Database Tools'],
  },
  {
    icon: Lock,
    title: 'Reliable Backup',
    description: 'Automated daily backups with easy restoration options.',
    features: ['Daily Backups', 'Easy Restoration', 'Version Control', 'Offsite Storage'],
  },
]

export function HostingFeatures() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose OISSite Hosting?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide enterprise-grade hosting solutions with features designed 
            to help your website succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {feature.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to experience the difference?
          </p>
          <Link 
            href="/hosting/shared" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
