import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Users, MessageSquare, Phone, Mail, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const supportChannels = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7',
    responseTime: '< 2 minutes',
    features: ['Instant responses', 'Screen sharing', 'File sharing', 'Chat history'],
    href: '/support/contact',
    buttonText: 'Start Chat',
    popular: true,
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    availability: '24/7',
    responseTime: 'Immediate',
    features: ['Direct communication', 'Complex issue resolution', 'Personalized help', 'Call recording'],
    href: '/support/contact',
    buttonText: 'Call Now',
    popular: false,
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send detailed questions and get comprehensive answers',
    availability: '24/7',
    responseTime: '< 4 hours',
    features: ['Detailed responses', 'Documentation', 'Ticket tracking', 'Follow-up support'],
    href: '/support/contact',
    buttonText: 'Send Email',
    popular: false,
  },
  {
    icon: BookOpen,
    title: 'Help Center',
    description: 'Self-service support with tutorials and guides',
    availability: '24/7',
    responseTime: 'Instant',
    features: ['Self-service', 'Video tutorials', 'Step-by-step guides', 'Searchable content'],
    href: '/support/help',
    buttonText: 'Browse Help',
    popular: false,
  },
]

export function SupportChannels() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Support Channels
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to get the help you need, when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {supportChannels.map((channel, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-shadow ${
                channel.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {channel.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <channel.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Availability</div>
                      <div className="text-sm text-muted-foreground">{channel.availability}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Response Time</div>
                      <div className="text-sm text-muted-foreground">{channel.responseTime}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {channel.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full" 
                  variant={channel.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={channel.href}>
                    {channel.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need immediate assistance? Our live chat is available 24/7.
          </p>
          <Button size="lg" asChild>
            <Link href="/support/contact">
              Get Help Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
