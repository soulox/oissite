import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Settings, Mail, Globe, Shield } from 'lucide-react'
import Link from 'next/link'

const tools = [
  {
    icon: Settings,
    title: 'DNS Management',
    description: 'Configure A, CNAME, MX, and other DNS records with our easy-to-use interface.',
    buttonText: 'Manage DNS',
    href: '/dashboard/dns',
  },
  {
    icon: Mail,
    title: 'Email Forwarding',
    description: 'Set up email forwarding rules to redirect emails to your preferred address.',
    buttonText: 'Setup Forwarding',
    href: '/dashboard/email',
  },
  {
    icon: Globe,
    title: 'Subdomain Manager',
    description: 'Create and manage subdomains for your main domain with just a few clicks.',
    buttonText: 'Create Subdomain',
    href: '/dashboard/subdomains',
  },
  {
    icon: Shield,
    title: 'Security Settings',
    description: 'Configure domain security settings including privacy protection and locks.',
    buttonText: 'Security Settings',
    href: '/dashboard/security',
  },
]

export function DomainManageTools() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Management Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools to manage every aspect of your domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
                <CardDescription className="text-sm">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={tool.href}>
                    {tool.buttonText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
