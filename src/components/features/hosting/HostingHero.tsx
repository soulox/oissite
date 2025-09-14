import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Shield, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export function HostingHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            Trusted by 50,000+ websites
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Powerful Web Hosting
            <span className="block text-primary">Made Simple</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From shared hosting for beginners to enterprise cloud solutions, 
            we have the perfect hosting plan for your website's needs.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>99.9% Uptime Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Free SSL Certificates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>30-Day Money Back</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/hosting/shared">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="/hosting/cloud">
                View All Plans
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Websites Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
