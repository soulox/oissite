import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Mail, Phone, Clock } from 'lucide-react'
import Link from 'next/link'

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <MessageCircle className="h-3 w-3 mr-1" />
                24/7 Support Available
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                We're Here to{' '}
                <span className="text-primary">Help You Succeed</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Our expert support team is available 24/7 to help you with any questions or issues. Get in touch and let us help you achieve your online goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact-form">
                  Send Message
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+15551234567">
                  Call Now
                </Link>
              </Button>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Live Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Email Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Phone Support</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Support dashboard mockup */}
              <div className="bg-card border rounded-lg shadow-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Support Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="text-sm">Live Chat</span>
                      <Badge variant="default" className="bg-green-500">Online</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="text-sm">Response Time</span>
                      <span className="text-sm font-semibold text-green-600">&lt; 2 min</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="text-sm">Support Hours</span>
                      <span className="text-sm font-semibold">24/7</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="text-sm">Satisfaction</span>
                      <span className="text-sm font-semibold text-green-600">98%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">&lt; 2h</div>
                  <div className="text-xs">Response</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
