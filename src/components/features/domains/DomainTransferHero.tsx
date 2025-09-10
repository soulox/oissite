import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRightLeft, Shield, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function DomainTransferHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <ArrowRightLeft className="h-3 w-3 mr-1" />
                Free Transfer
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Transfer Your Domain{' '}
                <span className="text-primary">to OISSite</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transfer your domain to OISSite for better management, competitive pricing, and superior support. Free transfer with no hidden fees.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#transfer-form">
                  Start Transfer
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get Help
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Free Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Easy Process</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Transfer process mockup */}
              <div className="bg-card border rounded-lg shadow-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Transfer Process</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Enter Domain Name</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Verify Ownership</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Complete Transfer</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Manage Your Domain</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-xs">Transfer</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs">Support</div>
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
