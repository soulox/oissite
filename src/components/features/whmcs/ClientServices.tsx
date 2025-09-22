'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Server, 
  Loader2, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  ExternalLink,
  Settings,
  Power
} from 'lucide-react'

interface ClientServicesProps {
  clientId: string
}

interface Service {
  id: string
  pid: string
  domain: string
  status: string
  username: string
  productname: string
  producttype: string
  regdate: string
  nextduedate: string
  amount: string
  paymentmethod: string
  billingcycle: string
}

export function ClientServices({ clientId }: ClientServicesProps) {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`/api/whmcs/services?clientId=${clientId}`)
        const result = await response.json()

        if (result.success) {
          setServices(result.data?.products?.product || [])
        } else {
          setError(result.error || 'Failed to load services')
        }
      } catch (error) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [clientId])

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'suspended':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'terminated':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'suspended':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      case 'terminated':
        return <AlertCircle className="h-4 w-4 text-gray-600" />
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <Server className="h-4 w-4 text-blue-600" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading services...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (services.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Server className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Services Found</h3>
          <p className="text-muted-foreground text-center mb-4">
            You don't have any hosting services yet.
          </p>
          <Button asChild>
            <a href="/hosting">Browse Hosting Plans</a>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Your Hosting Services</h3>
          <p className="text-muted-foreground">
            Manage your active hosting services and domains
          </p>
        </div>
        <Button asChild>
          <a href="/hosting">Order New Service</a>
        </Button>
      </div>

      <div className="grid gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(service.status)}
                  <div>
                    <CardTitle className="text-lg">{service.productname}</CardTitle>
                    <CardDescription>
                      {service.domain || 'No domain assigned'}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={getStatusColor(service.status)}>
                  {service.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Billing Cycle</p>
                  <p className="text-sm capitalize">{service.billingcycle}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Next Due Date</p>
                  <p className="text-sm">{formatDate(service.nextduedate)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Amount</p>
                  <p className="text-sm font-semibold">${service.amount}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage
                </Button>
                {service.status.toLowerCase() === 'active' && (
                  <Button variant="outline" size="sm">
                    <Power className="h-4 w-4 mr-2" />
                    Control Panel
                  </Button>
                )}
                <Button variant="outline" size="sm" asChild>
                  <a href={`/client-portal?action=services&serviceid=${service.id}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
