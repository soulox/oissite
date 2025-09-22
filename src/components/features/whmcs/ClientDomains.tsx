'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Globe, 
  Loader2, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  ExternalLink,
  Settings,
  Shield
} from 'lucide-react'

interface ClientDomainsProps {
  clientId: string
}

interface Domain {
  id: string
  domain: string
  status: string
  regdate: string
  nextduedate: string
  expirydate: string
  dnsmanagement: string
  emailforwarding: string
  idprotection: string
  registrarname: string
}

export function ClientDomains({ clientId }: ClientDomainsProps) {
  const [domains, setDomains] = useState<Domain[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await fetch(`/api/whmcs/domains?clientId=${clientId}`)
        const result = await response.json()

        if (result.success) {
          setDomains(result.data || [])
        } else {
          setError(result.error || 'Failed to load domains')
        }
      } catch (error) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchDomains()
  }, [clientId])

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'expired':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'suspended':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'pending':
      case 'pendingtransfer':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'expired':
      case 'suspended':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      case 'pending':
      case 'pendingtransfer':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'cancelled':
        return <AlertCircle className="h-4 w-4 text-gray-600" />
      default:
        return <Globe className="h-4 w-4 text-blue-600" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date()
    const expiry = new Date(expiryDate)
    const diffTime = expiry.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading domains...</span>
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

  if (domains.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Globe className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Domains Found</h3>
          <p className="text-muted-foreground text-center mb-4">
            You don't have any domains registered yet.
          </p>
          <Button asChild>
            <a href="/domains">Register a Domain</a>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Your Domains</h3>
          <p className="text-muted-foreground">
            Manage your registered domains and DNS settings
          </p>
        </div>
        <Button asChild>
          <a href="/domains">Register New Domain</a>
        </Button>
      </div>

      <div className="grid gap-6">
        {domains.map((domain) => {
          const daysUntilExpiry = getDaysUntilExpiry(domain.expirydate)
          const isExpiringSoon = daysUntilExpiry <= 30 && daysUntilExpiry > 0
          const isExpired = daysUntilExpiry <= 0

          return (
            <Card key={domain.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(domain.status)}
                    <div>
                      <CardTitle className="text-lg">{domain.domain}</CardTitle>
                      <CardDescription>
                        {domain.registrarname} • Registered {formatDate(domain.regdate)}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(domain.status)}>
                    {domain.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Expiry Date</p>
                    <p className={`text-sm font-semibold ${
                      isExpired ? 'text-red-600' : isExpiringSoon ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {formatDate(domain.expirydate)}
                      {isExpired && ' (Expired)'}
                      {isExpiringSoon && !isExpired && ` (${daysUntilExpiry} days left)`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Next Due Date</p>
                    <p className="text-sm">{formatDate(domain.nextduedate)}</p>
                  </div>
                </div>

                {/* Domain Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {domain.dnsmanagement === 'on' && (
                    <Badge variant="secondary" className="text-xs">
                      <Settings className="h-3 w-3 mr-1" />
                      DNS Management
                    </Badge>
                  )}
                  {domain.emailforwarding === 'on' && (
                    <Badge variant="secondary" className="text-xs">
                      <Globe className="h-3 w-3 mr-1" />
                      Email Forwarding
                    </Badge>
                  )}
                  {domain.idprotection === 'on' && (
                    <Badge variant="secondary" className="text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      ID Protection
                    </Badge>
                  )}
                </div>

                {/* Expiry Warning */}
                {isExpiringSoon && !isExpired && (
                  <Alert className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This domain expires in {daysUntilExpiry} days. Consider renewing to avoid service interruption.
                    </AlertDescription>
                  </Alert>
                )}

                {isExpired && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This domain has expired. Renew immediately to restore service.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage DNS
                  </Button>
                  <Button variant="outline" size="sm">
                    <Shield className="h-4 w-4 mr-2" />
                    Domain Settings
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/client-portal?action=domains&domainid=${domain.id}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
