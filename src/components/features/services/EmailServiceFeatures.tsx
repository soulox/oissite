import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Shield, Zap, Globe, Headphones, Database, Lock, Settings } from 'lucide-react'

const features = [
  {
    icon: Mail,
    title: 'Custom Email Domains',
    description: 'Create professional email addresses with your own domain name.',
  },
  {
    icon: Shield,
    title: 'Advanced Spam Protection',
    description: 'Protect your inbox from spam and malicious emails with advanced filtering.',
  },
  {
    icon: Zap,
    title: 'Mobile Sync',
    description: 'Sync your email across all devices with IMAP and POP3 support.',
  },
  {
    icon: Globe,
    title: 'Webmail Access',
    description: 'Access your email from anywhere with our web-based email client.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert support team available to help with email setup and issues.',
  },
  {
    icon: Database,
    title: 'Generous Storage',
    description: 'Plenty of storage space for your emails and attachments.',
  },
  {
    icon: Lock,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee.',
  },
  {
    icon: Settings,
    title: 'Easy Management',
    description: 'Simple email management through our intuitive control panel.',
  },
]

export function EmailServiceFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Email Hosting Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for professional email hosting.
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
