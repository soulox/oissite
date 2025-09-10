import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRightLeft, CheckCircle } from 'lucide-react'

export function DomainTransferForm() {
  return (
    <section id="transfer-form" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Start Your Domain Transfer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transfer your domain to OISSite in just a few simple steps. Free transfer with no hidden fees.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRightLeft className="h-5 w-5" />
                Domain Transfer Form
              </CardTitle>
              <CardDescription>
                Enter your domain name and authorization code to start the transfer process.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="domain">Domain Name</Label>
                <Input
                  id="domain"
                  placeholder="example.com"
                  type="text"
                />
                <p className="text-sm text-muted-foreground">
                  Enter the domain you want to transfer (without www)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="auth-code">Authorization Code</Label>
                <Input
                  id="auth-code"
                  placeholder="Enter your domain's authorization code"
                  type="text"
                />
                <p className="text-sm text-muted-foreground">
                  Get this code from your current domain registrar
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input
                  id="email"
                  placeholder="your@email.com"
                  type="email"
                />
                <p className="text-sm text-muted-foreground">
                  We'll send transfer updates to this email address
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Transfer Benefits</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Free domain transfer with no hidden fees</li>
                      <li>• Better domain management tools</li>
                      <li>• 24/7 expert support</li>
                      <li>• Free domain privacy protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Start Domain Transfer
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By proceeding, you agree to our{' '}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
