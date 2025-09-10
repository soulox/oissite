import { Badge } from '@/components/ui/badge'
import { Shield, Users } from 'lucide-react'

export function LoginHero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            <Shield className="h-3 w-3 mr-1" />
            Secure Login
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Welcome Back to{' '}
            <span className="text-primary">OISSite</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access your hosting dashboard, manage your domains, and get the support you need. 
            Your account is protected with enterprise-grade security.
          </p>
          
          <div className="flex items-center justify-center space-x-8 pt-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>50,000+ customers</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>SSL Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
