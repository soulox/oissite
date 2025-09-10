import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, Search, BookOpen, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function SupportHelpHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              <HelpCircle className="h-3 w-3 mr-1" />
              24/7 Support
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Help Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to your questions, tutorials, and guides. Get help with hosting, domains, and all our services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#search">
                Search Help Articles
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/support/contact">
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">500+ Articles</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">50+ Tutorials</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">24/7 Chat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
