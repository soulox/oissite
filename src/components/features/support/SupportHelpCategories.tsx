import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Server, Globe, Shield, Mail, Database, Settings } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    icon: Server,
    title: 'Hosting',
    description: 'Get help with shared hosting, VPS, and cloud hosting.',
    articles: 150,
  },
  {
    icon: Globe,
    title: 'Domains',
    description: 'Domain registration, transfer, and management guides.',
    articles: 100,
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'SSL certificates, security settings, and best practices.',
    articles: 75,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Email hosting, forwarding, and configuration help.',
    articles: 50,
  },
  {
    icon: Database,
    title: 'Backups',
    description: 'Backup services, restoration, and data protection.',
    articles: 40,
  },
  {
    icon: Settings,
    title: 'Technical',
    description: 'Advanced technical support and troubleshooting.',
    articles: 85,
  },
]

export function SupportHelpCategories() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find help articles organized by topic and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.articles} articles</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {category.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
