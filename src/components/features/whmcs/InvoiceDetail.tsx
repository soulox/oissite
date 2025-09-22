'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  ArrowLeft,
  Loader2, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  CreditCard,
  Calendar,
  DollarSign,
  FileText,
  Download,
  Printer,
  ExternalLink
} from 'lucide-react'

interface InvoiceDetailProps {
  invoiceId: string
  onBack: () => void
}

interface InvoiceDetail {
  id: string
  userid: string
  firstname: string
  lastname: string
  companyname?: string
  invoicenum: string
  date: string
  duedate: string
  datepaid?: string
  subtotal: string
  credit: string
  tax: string
  tax2: string
  total: string
  taxrate: string
  taxrate2: string
  status: string
  paymentmethod: string
  paymethodid?: string
  notes?: string
  created_at: string
  updated_at: string
  currencycode: string
  currencyprefix: string
  currencysuffix: string
  items?: InvoiceItem[]
}

interface InvoiceItem {
  id: string
  type: string
  relid: string
  description: string
  amount: string
  taxed: string
  duedate: string
  paymentmethod?: string
}

export function InvoiceDetail({ invoiceId, onBack }: InvoiceDetailProps) {
  const [invoice, setInvoice] = useState<InvoiceDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInvoiceDetails = async () => {
      try {
        // Get invoice from invoices list (this works reliably)
        const invoicesResponse = await fetch(`/api/whmcs/invoices?clientId=240`)
        const invoicesResult = await invoicesResponse.json()

        if (invoicesResult.success && invoicesResult.data) {
          const foundInvoice = invoicesResult.data.find((i: any) => i.id === invoiceId)
          if (foundInvoice) {
            // Enhance the invoice data with additional information
            const enhancedInvoice = {
              ...foundInvoice,
              items: [] // No line items available through current API
            }
            setInvoice(enhancedInvoice)
          } else {
            setError('Invoice not found')
          }
        } else {
          setError(invoicesResult.error || 'Failed to load invoice details')
        }
      } catch (error) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchInvoiceDetails()
  }, [invoiceId])

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'unpaid':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'refunded':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'unpaid':
        return <Clock className="h-4 w-4 text-red-600" />
      case 'cancelled':
        return <AlertCircle className="h-4 w-4 text-gray-600" />
      case 'refunded':
        return <DollarSign className="h-4 w-4 text-yellow-600" />
      default:
        return <FileText className="h-4 w-4 text-blue-600" />
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString || dateString === '0000-00-00 00:00:00' || dateString === '0000-00-00') {
      return 'N/A'
    }
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatCurrency = (amount: string, prefix: string = '$', suffix: string = '') => {
    const numAmount = parseFloat(amount) || 0
    return `${prefix}${numAmount.toFixed(2)}${suffix}`
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // In a real implementation, this would download the PDF
    alert('PDF download functionality would be implemented here')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading invoice details...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
        <Button variant="outline" size="sm" onClick={onBack} className="mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Invoices
        </Button>
      </Alert>
    )
  }

  if (!invoice) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Invoice not found</AlertDescription>
        <Button variant="outline" size="sm" onClick={onBack} className="mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Invoices
        </Button>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Invoices
          </Button>
          <div>
            <h2 className="text-2xl font-bold">Invoice #{invoice.invoicenum || invoice.id}</h2>
            <p className="text-muted-foreground">
              {invoice.firstname} {invoice.lastname}
              {invoice.companyname && ` • ${invoice.companyname}`}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className={getStatusColor(invoice.status)}>
            {getStatusIcon(invoice.status)}
            <span className="ml-1">{invoice.status}</span>
          </Badge>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            PDF
          </Button>
        </div>
      </div>

      {/* Invoice Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Invoice Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Invoice Date</p>
                <p className="text-sm">{formatDate(invoice.date)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Due Date</p>
                <p className="text-sm">{formatDate(invoice.duedate)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Payment Method</p>
                <p className="text-sm">{invoice.paymentmethod || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Date Paid</p>
                <p className="text-sm">{formatDate(invoice.datepaid || '')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Amounts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Subtotal:</span>
                <span className="text-sm font-medium">
                  {formatCurrency(invoice.subtotal, invoice.currencyprefix, invoice.currencysuffix)}
                </span>
              </div>
              {parseFloat(invoice.tax) > 0 && (
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tax ({invoice.taxrate}%):</span>
                  <span className="text-sm font-medium">
                    {formatCurrency(invoice.tax, invoice.currencyprefix, invoice.currencysuffix)}
                  </span>
                </div>
              )}
              {parseFloat(invoice.credit) > 0 && (
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Credit:</span>
                  <span className="text-sm font-medium text-green-600">
                    -{formatCurrency(invoice.credit, invoice.currencyprefix, invoice.currencysuffix)}
                  </span>
                </div>
              )}
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="text-base font-semibold">Total:</span>
                  <span className="text-base font-bold">
                    {formatCurrency(invoice.total, invoice.currencyprefix, invoice.currencysuffix)}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Invoice Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          {invoice.items && invoice.items.length > 0 ? (
            <div className="space-y-4">
              {invoice.items.map((item, index) => (
                <div key={index} className="flex justify-between items-start p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{item.description}</p>
                    <p className="text-sm text-muted-foreground">Type: {item.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {formatCurrency(item.amount, invoice.currencyprefix, invoice.currencysuffix)}
                    </p>
                    {item.taxed === '1' && (
                      <p className="text-sm text-muted-foreground">Taxed</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Archive Notice */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-amber-800">Archived Invoice</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      Detailed line items are not available through the API for archived invoices. 
                      For complete invoice details including individual line items, please contact our billing team.
                    </p>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href="/support/contact">Contact Billing</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invoice Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Invoice Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Invoice Number:</span>
                    <span className="font-medium">{invoice.invoicenum || invoice.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Invoice Date:</span>
                    <span className="font-medium">{formatDate(invoice.date)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-medium">{formatDate(invoice.duedate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className={getStatusColor(invoice.status)}>
                      {getStatusIcon(invoice.status)}
                      <span className="ml-1">{invoice.status}</span>
                    </Badge>
                  </div>
                  {invoice.datepaid && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paid Date:</span>
                      <span className="font-medium">{formatDate(invoice.datepaid)}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600 font-medium">Total Amount:</span>
                    <span className="font-bold text-lg">
                      {formatCurrency(invoice.total, invoice.currencyprefix, invoice.currencysuffix)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Alternative Information */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-blue-900 mb-2">How to Get Line Item Details</h4>
                <div className="space-y-2 text-sm text-blue-800">
                  <p>• Check your email for the original invoice PDF that was sent to you</p>
                  <p>• Contact our billing team for a detailed invoice breakdown</p>
                  <p>• Access your account's billing history in the main client area</p>
                  <p>• Request a re-send of the invoice via email</p>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/support/contact">Contact Support</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:billing@outsourceis.com">Email Billing</a>
                  </Button>
                </div>
              </div>

              {/* Technical Note */}
              <div className="text-center py-4 border-t border-gray-200">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> Line items for older invoices are archived and not accessible via the API. 
                  This is a limitation of the current system integration.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Payment Information */}
      {invoice.status.toLowerCase() === 'paid' && invoice.datepaid && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Payment Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Payment Date</p>
                <p className="text-sm">{formatDate(invoice.datepaid)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Payment Method</p>
                <p className="text-sm">{invoice.paymentmethod || 'Not specified'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notes */}
      {invoice.notes && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm whitespace-pre-wrap">{invoice.notes}</p>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Print Invoice
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            {invoice.status.toLowerCase() === 'unpaid' && (
              <Button variant="outline" asChild>
                <a href="/billing/pay" target="_blank">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay Now
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
