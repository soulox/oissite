import { Badge } from '@/components/ui/badge'
import { Cookie, Calendar, FileText } from 'lucide-react'

export function CookiePolicyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Cookie className="h-3 w-3 mr-1" />
              Cookie Information
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Cookie <span className="text-primary">Policy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This Cookie Policy explains how OISSite uses cookies and similar technologies when you visit our website. 
              Learn about the types of cookies we use and how you can control them.
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
