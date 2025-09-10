import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Activity, CheckCircle, AlertCircle, XCircle } from 'lucide-react'

export function SupportStatusHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Activity className="h-3 w-3 mr-1" />
              Real-time Status
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Service Status
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check the current status of our hosting services, domains, and all systems. Real-time monitoring and incident reports.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#status-overview">
                View Status Overview
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#incident-history">
                Incident History
              </a>
            </Button>
          </div>

          {/* Status Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">All Systems Operational</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">No Active Incidents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
