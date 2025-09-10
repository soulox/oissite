'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, ShoppingCart, Lock, Globe } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { domainSearchSchema, type DomainSearchData } from '@/lib/validations'

const popularTLDs = ['.com', '.net', '.org', '.io', '.co', '.app', '.dev', '.tech']

const mockSearchResults = [
  { domain: 'example.com', available: false, price: 0 },
  { domain: 'example.net', available: true, price: 12.99 },
  { domain: 'example.org', available: true, price: 15.99 },
  { domain: 'example.io', available: true, price: 45.99 },
  { domain: 'example.co', available: true, price: 25.99 },
  { domain: 'example.app', available: true, price: 18.99 },
  { domain: 'example.dev', available: true, price: 12.99 },
  { domain: 'example.tech', available: true, price: 35.99 },
]

export function DomainSearchForm() {
  const [searchResults, setSearchResults] = useState<typeof mockSearchResults>([])
  const [isSearching, setIsSearching] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<DomainSearchData>({
    resolver: zodResolver(domainSearchSchema),
  })

  const domainValue = watch('domain')

  const onSubmit = async (data: DomainSearchData) => {
    setIsSearching(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Generate mock results based on the search term
    const results = popularTLDs.map(tld => ({
      domain: `${data.domain}${tld}`,
      available: Math.random() > 0.3, // 70% chance of being available
      price: Math.floor(Math.random() * 50) + 10,
    }))
    
    setSearchResults(results)
    setIsSearching(false)
  }

  const handleTLDClick = (tld: string) => {
    if (domainValue) {
      setValue('domain', domainValue.replace(/\.(com|net|org|io|co|app|dev|tech)$/, '') + tld)
    }
  }

  return (
    <section id="search" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Search Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Search for Your Domain</CardTitle>
              <CardDescription className="text-center">
                Enter your desired domain name to check availability and pricing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      {...register('domain')}
                      placeholder="Enter your domain name"
                      className="text-lg h-12"
                    />
                    {errors.domain && (
                      <p className="text-sm text-destructive mt-1">{errors.domain.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSearching}
                    className="h-12 px-8"
                  >
                    {isSearching ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </>
                    )}
                  </Button>
                </div>

                {/* Popular TLDs */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Popular TLDs:</p>
                  <div className="flex flex-wrap gap-2">
                    {popularTLDs.map((tld) => (
                      <Button
                        key={tld}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleTLDClick(tld)}
                        className="text-xs"
                      >
                        {tld}
                      </Button>
                    ))}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Search Results</CardTitle>
                <CardDescription>
                  Available domains for your search term
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{result.domain}</span>
                        {result.available ? (
                          <Badge variant="default" className="bg-green-500">
                            Available
                          </Badge>
                        ) : (
                          <Badge variant="destructive">Taken</Badge>
                        )}
                      </div>
                      
                      {result.available && (
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="font-semibold">${result.price}/year</div>
                            <div className="text-sm text-muted-foreground">First year</div>
                          </div>
                          <Button size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional features */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="h-4 w-4 text-primary" />
                    <span className="font-medium">Included with every domain:</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Free WHOIS Privacy Protection</li>
                    <li>• Free DNS Management</li>
                    <li>• Free Email Forwarding</li>
                    <li>• 24/7 Customer Support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
