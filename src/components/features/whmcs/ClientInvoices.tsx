'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  CreditCard, 
  Loader2, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  ExternalLink,
  Download,
  DollarSign
} from 'lucide-react'

interface ClientInvoicesProps {
  clientId: string
  onViewInvoice?: (invoiceId: string) => void
}

interface Invoice {
  id: string
  invoicenum: string
  date: string
  duedate: string
  datepaid?: string
  subtotal: string
  tax: string
  total: string
  balance: string
  status: string
  paymentmethod?: string
}

export function ClientInvoices({ clientId, onViewInvoice }: ClientInvoicesProps) {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(`/api/whmcs/invoices?clientId=${clientId}`)
        const result = await response.json()

        if (result.success) {
          setInvoices(result.data || [])
        } else {
          setError(result.error || 'Failed to load invoices')
        }
      } catch (error) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchInvoices()
  }, [clientId])

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'unpaid':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'overdue':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'refunded':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'unpaid':
      case 'overdue':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      case 'cancelled':
        return <AlertCircle className="h-4 w-4 text-gray-600" />
      case 'refunded':
        return <CreditCard className="h-4 w-4 text-blue-600" />
      default:
        return <Clock className="h-4 w-4 text-yellow-600" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(parseFloat(amount))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading invoices...</span>
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

  if (invoices.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CreditCard className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Invoices Found</h3>
          <p className="text-muted-foreground text-center mb-4">
            You don't have any invoices yet.
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
          <h3 className="text-lg font-semibold">Your Invoices</h3>
          <p className="text-muted-foreground">
            View and manage your billing invoices
          </p>
        </div>
        <Button asChild>
          <a href="/client-portal?action=invoices">View All Invoices</a>
        </Button>
      </div>

      <div className="grid gap-6">
        {invoices.map((invoice) => (
          <Card key={invoice.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(invoice.status)}
                  <div>
                    <CardTitle className="text-lg">Invoice #{invoice.invoicenum}</CardTitle>
                    <CardDescription>
                      Issued on {formatDate(invoice.date)}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={getStatusColor(invoice.status)}>
                  {invoice.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Due Date</p>
                  <p className="text-sm">{formatDate(invoice.duedate)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                  <p className="text-sm font-semibold">{formatCurrency(invoice.total)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Balance</p>
                  <p className={`text-sm font-semibold ${
                    parseFloat(invoice.balance) > 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {formatCurrency(invoice.balance)}
                  </p>
                </div>
              </div>

              {invoice.datepaid && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <CheckCircle className="h-4 w-4 inline mr-2" />
                    Paid on {formatDate(invoice.datepaid)}
                    {invoice.paymentmethod && ` via ${invoice.paymentmethod}`}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {invoice.status.toLowerCase() === 'unpaid' && (
                  <Button size="sm">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Pay Now
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onViewInvoice?.(invoice.id)}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
