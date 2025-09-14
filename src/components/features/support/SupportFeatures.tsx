import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Mail, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const supportFeatures = [
  {
    icon: MessageCircle,
    title: 'Live Chat Support',
    description: 'Get instant help from our expert support team via live chat. Available 24/7 for immediate assistance.',
    features: ['24/7 Availability', 'Instant Response', 'Expert Technicians', 'Real-time Help'],
    href: '/support/contact',
    buttonText: 'Start Chat',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our support specialists. Get personalized help for complex technical issues.',
    features: ['Direct Communication', 'Expert Technicians', 'Personalized Help', 'Complex Issue Resolution'],
    href: '/support/contact',
    buttonText: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send detailed questions and receive comprehensive answers from our support team.',
    features: ['Detailed Responses', 'Documentation', 'Follow-up Support', 'Ticket Tracking'],
    href: '/support/contact',
    buttonText: 'Send Email',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Access our comprehensive knowledge base with tutorials, guides, and frequently asked questions.',
    features: ['Self-Service', 'Tutorials & Guides', 'Video Tutorials', 'Searchable Content'],
    href: '/support/help',
    buttonText: 'Browse Help',
  },
]

export function SupportFeatures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Multiple Ways to Get Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the support method that works best for you. We're here to help 
            with any questions or issues you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportFeatures.map((feature, index) => (
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
              <CardContent className="space-y-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {feature.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" asChild>
                  <Link href={feature.href}>
                    {feature.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for?
          </p>
          <Button variant="outline" asChild>
            <Link href="/support/contact">
              Contact Our Support Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
