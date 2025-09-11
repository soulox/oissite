import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export function PrivacyContact() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Us About Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, your personal information, or your privacy rights, 
                  please don't hesitate to contact us. We're here to help.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Privacy Officer</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">privacy@oissite.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          OISSite Privacy Department<br />
                          123 Hosting Street<br />
                          Tech City, TC 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-sm text-muted-foreground">Within 48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Data Protection Rights</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm">Access Your Data</h4>
                      <p className="text-xs text-muted-foreground">Request a copy of your personal information</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm">Correct Your Data</h4>
                      <p className="text-xs text-muted-foreground">Update or correct inaccurate information</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm">Delete Your Data</h4>
                      <p className="text-xs text-muted-foreground">Request deletion of your personal information</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm">Restrict Processing</h4>
                      <p className="text-xs text-muted-foreground">Limit how we use your information</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold">Quick Actions</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/contact">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Support
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/support/help">
                        <Phone className="h-4 w-4 mr-2" />
                        Help Center
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-2">Important Notice</h4>
                <p className="text-sm text-muted-foreground">
                  When contacting us about privacy matters, please include your account information and a clear description of your request. 
                  We may need to verify your identity before processing certain requests to protect your privacy and security.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
