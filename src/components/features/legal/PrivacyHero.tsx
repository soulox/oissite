import { Badge } from '@/components/ui/badge'
import { Shield, FileText, Calendar } from 'lucide-react'

export function PrivacyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Shield className="h-3 w-3 mr-1" />
              Your Privacy Matters
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At OISSite, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8 pt-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>Last Updated: December 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Effective: January 1, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
