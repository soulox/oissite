import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe, TrendingUp, Star } from 'lucide-react'

const popularTLDs = [
  { tld: '.com', price: 12.99, description: 'Most popular TLD worldwide', popular: true },
  { tld: '.net', price: 14.99, description: 'Great for networks and technology', popular: false },
  { tld: '.org', price: 15.99, description: 'Perfect for organizations', popular: false },
  { tld: '.io', price: 45.99, description: 'Popular for tech startups', popular: true },
  { tld: '.co', price: 25.99, description: 'Short and memorable', popular: false },
  { tld: '.app', price: 18.99, description: 'For mobile and web apps', popular: true },
  { tld: '.dev', price: 12.99, description: 'For developers and tech', popular: false },
  { tld: '.tech', price: 35.99, description: 'Technology-focused', popular: false },
  { tld: '.store', price: 28.99, description: 'Perfect for e-commerce', popular: false },
  { tld: '.blog', price: 22.99, description: 'For bloggers and content creators', popular: false },
  { tld: '.online', price: 19.99, description: 'Modern and versatile', popular: false },
  { tld: '.site', price: 24.99, description: 'Simple and professional', popular: false },
]

export function PopularTLDs() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Popular Domain Extensions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from hundreds of domain extensions to find the perfect match for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {popularTLDs.map((tld, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              {tld.popular && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{tld.tld}</CardTitle>
                    <div className="text-lg font-semibold text-primary">
                      ${tld.price}/year
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-sm">
                  {tld.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for? We offer 500+ domain extensions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#search" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              View All TLDs
            </a>
            <a 
              href="/domains/transfer" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Transfer Your Domain
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
