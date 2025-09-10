import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Zap, 
  Shield, 
  Globe, 
  Headphones, 
  Database, 
  Lock,
  Server,
  BarChart3,
  Download,
  Settings,
  Mail,
  Code
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'SSD storage and optimized servers ensure your website loads in under 2 seconds.',
  },
  {
    icon: Shield,
    title: '99.9% Uptime Guarantee',
    description: 'Our reliable infrastructure ensures your website stays online when your customers need it.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivery network with servers worldwide for fast loading times globally.',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Round-the-clock support from our hosting experts via chat, email, and phone.',
  },
  {
    icon: Database,
    title: 'Automated Backups',
    description: 'Daily automated backups with 30-day retention to protect your data.',
  },
  {
    icon: Lock,
    title: 'Free SSL Certificates',
    description: 'Secure your website with free SSL certificates for all hosting plans.',
  },
  {
    icon: Server,
    title: 'cPanel Control Panel',
    description: 'Easy-to-use control panel for managing your website, email, and databases.',
  },
  {
    icon: BarChart3,
    title: 'Website Analytics',
    description: 'Built-in analytics to track your website performance and visitor statistics.',
  },
  {
    icon: Download,
    title: '1-Click WordPress Install',
    description: 'Install WordPress and other popular applications with just one click.',
  },
  {
    icon: Settings,
    title: 'Easy Website Builder',
    description: 'Drag-and-drop website builder to create professional websites without coding.',
  },
  {
    icon: Mail,
    title: 'Professional Email',
    description: 'Create professional email addresses with your domain name.',
  },
  {
    icon: Code,
    title: 'Developer Tools',
    description: 'Access to PHP, MySQL, and other development tools for custom applications.',
  },
]

export function SharedHostingFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our shared hosting plans include all the features and tools you need to build, manage, and grow your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="text-2xl font-bold text-primary">30 Days</div>
              <div className="text-sm text-muted-foreground">Money-back guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Expert support</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
