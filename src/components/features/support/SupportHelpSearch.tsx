import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export function SupportHelpSearch() {
  return (
    <section id="search" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Search Help Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the information you need quickly with our comprehensive help database.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Help Center
              </CardTitle>
              <CardDescription>
                Enter your question or keywords to find relevant help articles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Search for help articles..."
                  className="flex-1"
                />
                <Button>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Popular searches: <span className="text-primary cursor-pointer hover:underline">hosting setup</span>, <span className="text-primary cursor-pointer hover:underline">domain transfer</span>, <span className="text-primary cursor-pointer hover:underline">SSL certificate</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
