'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Server, 
  CreditCard, 
  Globe, 
  Headphones, 
  Loader2, 
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Calendar
} from 'lucide-react'
import { ClientServices } from './ClientServices'
import { ClientInvoices } from './ClientInvoices'
import { ClientDomains } from './ClientDomains'
import { ClientTickets } from './ClientTickets'

interface ClientDashboardProps {
  clientId: string
  onViewTicket?: (ticketId: string) => void
  onViewInvoice?: (invoiceId: string) => void
}

interface ClientInfo {
  id: string
  firstname: string
  lastname: string
  email: string
  companyname?: string
  status: string
  credit: string
  currency: string
}

export function ClientDashboard({ clientId, onViewTicket, onViewInvoice }: ClientDashboardProps) {
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const response = await fetch(`/api/whmcs/clients?clientId=${clientId}`)
        const result = await response.json()

        if (result.success) {
          setClientInfo(result.data)
        } else {
          setError(result.error || 'Failed to load client information')
        }
      } catch (error) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchClientInfo()
  }, [clientId])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading dashboard...</span>
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

  if (!clientInfo) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>No client information found</AlertDescription>
      </Alert>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'inactive':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'closed':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Welcome back, {clientInfo.firstname} {clientInfo.lastname}
            </h2>
            <p className="text-muted-foreground">
              {clientInfo.companyname && `${clientInfo.companyname} • `}
              {clientInfo.email}
            </p>
          </div>
          <Badge className={getStatusColor(clientInfo.status)}>
            {clientInfo.status}
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Credit</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {clientInfo.currency} {clientInfo.credit}
            </div>
            <p className="text-xs text-muted-foreground">
              Available account balance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-muted-foreground">
              Hosting services running
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <Headphones className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-muted-foreground">
              Support tickets pending
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="services" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            Services
          </TabsTrigger>
          <TabsTrigger value="invoices" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Invoices
          </TabsTrigger>
          <TabsTrigger value="domains" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Domains
          </TabsTrigger>
          <TabsTrigger value="tickets" className="flex items-center gap-2">
            <Headphones className="h-4 w-4" />
            Support
          </TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="mt-6">
          <ClientServices clientId={clientId} />
        </TabsContent>

        <TabsContent value="invoices" className="mt-6">
          <ClientInvoices clientId={clientId} onViewInvoice={onViewInvoice} />
        </TabsContent>

        <TabsContent value="domains" className="mt-6">
          <ClientDomains clientId={clientId} />
        </TabsContent>

        <TabsContent value="tickets" className="mt-6">
          <ClientTickets clientId={clientId} onViewTicket={onViewTicket} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
