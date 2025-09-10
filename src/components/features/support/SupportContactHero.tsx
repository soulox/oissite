import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'

export function SupportContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              <MessageCircle className="h-3 w-3 mr-1" />
              24/7 Support
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Contact Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get help from our expert support team. We're here 24/7 to assist with any questions or issues.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#contact-form">
                Submit Support Ticket
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/support/help">
                Browse Help Center
              </Link>
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Live Chat</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Phone Support</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Email Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
