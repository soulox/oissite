import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react'

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    contact: 'Available 24/7',
    action: 'Start Chat',
    href: '#chat',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    contact: 'support@oissite.com',
    action: 'Send Email',
    href: 'mailto:support@oissite.com',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    contact: '+1 (555) 123-4567',
    action: 'Call Now',
    href: 'tel:+15551234567',
  },
  {
    icon: Headphones,
    title: 'Help Center',
    description: 'Find answers in our knowledge base',
    contact: '500+ Articles',
    action: 'Browse Help',
    href: '/support/help',
  },
]

const officeInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    description: '123 Hosting Street, Tech City, TC 12345, United States',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
  },
  {
    icon: MessageCircle,
    title: 'Support Hours',
    description: '24/7 - We\'re always here to help',
  },
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the contact method that works best for you. We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription className="text-sm">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  {method.contact}
                </div>
                <a
                  href={method.href}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
                >
                  {method.action}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officeInfo.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {info.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Response Time Promise */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold text-primary">Our Response Promise</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Live Chat</div>
                    <div className="text-muted-foreground">&lt; 2 minutes</div>
                  </div>
                  <div>
                    <div className="font-semibold">Email Support</div>
                    <div className="text-muted-foreground">&lt; 2 hours</div>
                  </div>
                  <div>
                    <div className="font-semibold">Phone Support</div>
                    <div className="text-muted-foreground">Immediate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
