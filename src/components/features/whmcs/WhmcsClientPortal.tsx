import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, User, CreditCard, FileText, Headphones } from 'lucide-react'
import { whmcsConfig } from '@/lib/config/whmcs'

export function WhmcsClientPortal() {
  const portalLinks = [
    {
      title: 'Client Area',
      description: 'Access your account, manage services, and view billing information',
      icon: User,
      href: whmcsConfig.clientPortal.url,
      color: 'bg-blue-500',
    },
    {
      title: 'Billing Portal',
      description: 'View invoices, make payments, and manage billing details',
      icon: CreditCard,
      href: whmcsConfig.clientPortal.billingUrl,
      color: 'bg-green-500',
    },
    {
      title: 'Support Tickets',
      description: 'Submit and track support tickets with our technical team',
      icon: Headphones,
      href: `${whmcsConfig.clientPortal.url}?action=tickets`,
      color: 'bg-purple-500',
    },
    {
      title: 'Knowledge Base',
      description: 'Browse tutorials, guides, and frequently asked questions',
      icon: FileText,
      href: `${whmcsConfig.clientPortal.url}?action=knowledgebase`,
      color: 'bg-orange-500',
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Client Portal Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your hosting services, billing, and support tickets through our secure client portal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portalLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className={`mx-auto w-16 h-16 ${link.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{link.title}</CardTitle>
                <CardDescription className="text-sm">
                  {link.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  variant="outline"
                  asChild
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Access Portal
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need help accessing your account?
          </p>
          <Button variant="outline" asChild>
            <a href="/support/contact">
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
