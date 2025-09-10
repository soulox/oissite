import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  Zap, 
  Headphones, 
  Users,
  Lock,
  Globe,
  Award,
  Heart
} from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We guarantee 99.9% uptime and provide robust infrastructure to keep your websites online.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast loading times with SSD storage and optimized servers for the best user experience.',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: '24/7 expert support from our knowledgeable team to help you succeed online.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Every decision we make is guided by what\'s best for our customers and their success.',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Advanced security measures and free SSL certificates to protect your data and visitors.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We continuously invest in new technologies to provide cutting-edge hosting solutions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from our technology to our customer service.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    description: 'No hidden fees, clear pricing, and honest communication about our services and policies.',
  },
]

export function AboutValues() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            What We Stand For
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our core values guide everything we do and shape the experience we provide to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
