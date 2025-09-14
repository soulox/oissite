import { Button } from '@/components/ui/button'
import { ArrowRight, Headphones, MessageCircle, Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function SupportHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Headphones className="h-4 w-4" />
            24/7 Expert Support
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            We're Here to Help
            <span className="block text-primary">24/7 Support</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get expert help whenever you need it. Our support team is available around the clock 
            to assist you with hosting, domains, and technical issues.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>24/7 Live Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Phone Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Email Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Knowledge Base</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/support/contact">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="/support/help">
                Help Center
              </Link>
            </Button>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg">Live Chat</div>
                <div className="text-sm text-muted-foreground">Instant help 24/7</div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg">Phone Support</div>
                <div className="text-sm text-muted-foreground">Speak with experts</div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg">Email Support</div>
                <div className="text-sm text-muted-foreground">Detailed assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
