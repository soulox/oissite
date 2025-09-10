import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertCircle, XCircle, Activity } from 'lucide-react'

const services = [
  {
    name: 'Web Hosting',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '45ms',
  },
  {
    name: 'Domain Services',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '32ms',
  },
  {
    name: 'Email Services',
    status: 'operational',
    uptime: '99.8%',
    responseTime: '28ms',
  },
  {
    name: 'SSL Certificates',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '15ms',
  },
  {
    name: 'Backup Services',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '120ms',
  },
  {
    name: 'API Services',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '25ms',
  },
]

export function SupportStatusOverview() {
  return (
    <section id="status-overview" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Service Status Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time status of all our services and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <Badge variant="default" className="bg-green-500">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uptime</span>
                  <span className="font-medium">{service.uptime}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium">{service.responseTime}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-green-600">All Systems Normal</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
