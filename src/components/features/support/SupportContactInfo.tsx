import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react'

export function SupportContactInfo() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Contact Information
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to reach our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-4">
                Get instant help with our live chat support.
              </CardDescription>
              <div className="text-sm font-medium text-green-600">Online Now</div>
              <div className="text-xs text-muted-foreground">&lt; 2 min response</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Phone Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-4">
                Call us for immediate assistance.
              </CardDescription>
              <div className="text-sm font-medium">+1 (555) 123-4567</div>
              <div className="text-xs text-muted-foreground">24/7 Available</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-4">
                Send us an email and we'll respond quickly.
              </CardDescription>
              <div className="text-sm font-medium">support@oissite.com</div>
              <div className="text-xs text-muted-foreground">&lt; 2 hours response</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Support Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-4">
                We're here when you need us.
              </CardDescription>
              <div className="text-sm font-medium">24/7 Support</div>
              <div className="text-xs text-muted-foreground">Always Available</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
