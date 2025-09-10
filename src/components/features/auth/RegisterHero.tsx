import { Badge } from '@/components/ui/badge'
import { Rocket, Users } from 'lucide-react'

export function RegisterHero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            <Rocket className="h-3 w-3 mr-1" />
            Get Started Today
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Join{' '}
            <span className="text-primary">OISSite</span>{' '}
            Today
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your web hosting journey with our reliable, fast, and secure hosting solutions. 
            Join thousands of satisfied customers who trust OISSite for their online success.
          </p>
          
          <div className="flex items-center justify-center space-x-8 pt-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>50,000+ customers</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Rocket className="h-4 w-4" />
              <span>Free Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
