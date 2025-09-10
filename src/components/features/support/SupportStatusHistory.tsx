import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertCircle, XCircle, Clock } from 'lucide-react'

const incidents = [
  {
    date: '2024-01-15',
    time: '14:30 UTC',
    service: 'Web Hosting',
    status: 'resolved',
    description: 'Brief connectivity issue affecting some users',
    duration: '15 minutes',
  },
  {
    date: '2024-01-10',
    time: '09:15 UTC',
    service: 'Email Services',
    status: 'resolved',
    description: 'Email delivery delays due to maintenance',
    duration: '45 minutes',
  },
  {
    date: '2024-01-05',
    time: '16:20 UTC',
    service: 'Domain Services',
    status: 'resolved',
    description: 'DNS propagation delays during maintenance',
    duration: '30 minutes',
  },
]

export function SupportStatusHistory() {
  return (
    <section id="incident-history" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Incident History
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recent incidents and maintenance activities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {incidents.map((incident, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{incident.service}</CardTitle>
                    <CardDescription>
                      {incident.date} at {incident.time}
                    </CardDescription>
                  </div>
                  <Badge variant="default" className="bg-green-500">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Resolved
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm">{incident.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Duration: {incident.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>Status: Resolved</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
