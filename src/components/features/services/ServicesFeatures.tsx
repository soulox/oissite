import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Zap, Globe, Headphones, Database, Lock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security measures including SSL certificates, malware protection, and secure email hosting.',
    features: ['SSL Certificates', 'Malware Protection', 'Secure Email', 'Data Encryption'],
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized services with fast SSL installation, quick email setup, and rapid backup processes.',
    features: ['Quick Setup', 'Fast Installation', 'Optimized Performance', 'Instant Activation'],
  },
  {
    icon: Globe,
    title: 'Global Reliability',
    description: 'Worldwide service availability with 99.9% uptime guarantee for all our professional services.',
    features: ['99.9% Uptime', 'Global Availability', 'Reliable Service', '24/7 Monitoring'],
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated support team available 24/7 to help you with SSL setup, email configuration, and backup management.',
    features: ['24/7 Support', 'Expert Guidance', 'Setup Assistance', 'Technical Help'],
  },
  {
    icon: Database,
    title: 'Easy Management',
    description: 'Simple control panels and management tools for SSL certificates, email accounts, and backup settings.',
    features: ['Control Panel', 'Easy Setup', 'Management Tools', 'User-Friendly Interface'],
  },
  {
    icon: Lock,
    title: 'Secure Backup',
    description: 'Automated backup solutions with secure storage, easy restoration, and version control.',
    features: ['Automated Backups', 'Secure Storage', 'Easy Restoration', 'Version Control'],
  },
]

export function ServicesFeatures() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose Our Professional Services?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our professional services are designed to enhance your hosting experience 
            with enterprise-grade features and expert support.
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
            Ready to enhance your website with professional services?
          </p>
          <Link 
            href="/services/ssl" 
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
