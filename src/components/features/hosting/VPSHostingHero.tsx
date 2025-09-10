import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Server, Shield, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export function VPSHostingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Server className="h-3 w-3 mr-1" />
                Full Root Access
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                VPS Hosting with{' '}
                <span className="text-primary">Complete Control</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Get dedicated resources and full root access with our VPS hosting plans. Perfect for developers, growing businesses, and applications that need more power.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#plans">
                  View VPS Plans
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Talk to Sales
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Dedicated Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Full Root Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">SSD Storage</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* VPS dashboard mockup */}
              <div className="bg-card border rounded-lg shadow-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">VPS Control Panel</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="text-sm">CPU Usage</span>
                      <span className="text-sm font-semibold">2 vCPU</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="text-sm">RAM</span>
                      <span className="text-sm font-semibold">4 GB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="text-sm">Storage</span>
                      <span className="text-sm font-semibold">80 GB SSD</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="text-sm">Bandwidth</span>
                      <span className="text-sm font-semibold">2 TB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$29.99</div>
                  <div className="text-xs">Starting</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">Root</div>
                  <div className="text-xs">Access</div>
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
