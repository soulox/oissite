import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, Shield, Zap, Globe, Headphones, Settings, Lock, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Automated Backups',
    description: 'Daily automated backups of your website files and databases.',
  },
  {
    icon: Shield,
    title: 'Secure Storage',
    description: 'Your backups are stored securely with encryption and redundancy.',
  },
  {
    icon: Zap,
    title: 'Easy Restoration',
    description: 'Restore your website with just a few clicks from our control panel.',
  },
  {
    icon: Globe,
    title: 'Multiple Locations',
    description: 'Backups are stored in multiple secure locations for redundancy.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert support team available to help with backup and restoration.',
  },
  {
    icon: Settings,
    title: 'Flexible Scheduling',
    description: 'Customize backup schedules to fit your website\'s needs.',
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'All backups are encrypted to protect your sensitive data.',
  },
  {
    icon: BarChart3,
    title: 'Backup Monitoring',
    description: 'Monitor backup status and receive notifications of any issues.',
  },
]

export function BackupServiceFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Backup Service Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to protect your website data.
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
