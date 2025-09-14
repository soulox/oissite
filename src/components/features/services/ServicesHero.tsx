import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Mail, Database, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function ServicesHero() {
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
            Professional Services
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Professional Services
            <span className="block text-primary">For Your Website</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enhance your hosting experience with our professional services including 
            SSL certificates, email hosting, and automated backup solutions.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>SSL Certificates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Email Hosting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Automated Backups</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/services/ssl">
                Get SSL Certificate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="/services/email">
                View All Services
              </Link>
            </Button>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg">SSL Certificates</div>
                <div className="text-sm text-muted-foreground">Secure your website</div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg">Email Hosting</div>
                <div className="text-sm text-muted-foreground">Professional email</div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg">Backup Services</div>
                <div className="text-sm text-muted-foreground">Protect your data</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
