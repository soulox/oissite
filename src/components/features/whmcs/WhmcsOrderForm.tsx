'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useWhmcsOrders, useWhmcsProducts } from '@/hooks/useWhmcs'
import { Loader2, CheckCircle } from 'lucide-react'

interface WhmcsOrderFormProps {
  productType?: 'shared' | 'vps' | 'cloud' | 'ssl' | 'email' | 'backup'
  onOrderComplete?: (orderId: string) => void
}

export function WhmcsOrderForm({ productType, onOrderComplete }: WhmcsOrderFormProps) {
  const [formData, setFormData] = useState({
    clientid: '',
    pid: '',
    billingcycle: 'monthly' as const,
    domain: '',
    customfields: '',
    addons: '',
    paymentmethod: 'stripe',
  })
  
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState<string>('')
  
  const { loading: productsLoading, products, fetchProducts } = useWhmcsProducts()
  const { loading: orderLoading, createOrder } = useWhmcsOrders()

  // Fetch products on component mount
  useState(() => {
    fetchProducts()
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const result = await createOrder(formData)
      if (result?.orderid) {
        setOrderId(result.orderid)
        setOrderComplete(true)
        onOrderComplete?.(result.orderid)
      }
    } catch (error) {
      console.error('Order creation failed:', error)
    }
  }

  if (orderComplete) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-green-600">Order Created Successfully!</CardTitle>
          <CardDescription>
            Your order has been created and is being processed.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg font-medium">
            Order ID: <span className="text-primary">{orderId}</span>
          </p>
          <p className="text-muted-foreground">
            You will receive an email confirmation shortly. You can track your order status in the client portal.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <a href="/support/contact">Contact Support</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/hosting">View Hosting Plans</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Order</CardTitle>
        <CardDescription>
          Fill out the form below to create a new order in WHMCS.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clientid">Client ID</Label>
              <Input
                id="clientid"
                type="text"
                value={formData.clientid}
                onChange={(e) => handleInputChange('clientid', e.target.value)}
                placeholder="Enter client ID"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pid">Product</Label>
              <Select
                value={formData.pid}
                onValueChange={(value) => handleInputChange('pid', value)}
                disabled={productsLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {productsLoading && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading products...
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billingcycle">Billing Cycle</Label>
              <Select
                value={formData.billingcycle}
                onValueChange={(value: any) => handleInputChange('billingcycle', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="semiannually">Semi-Annually</SelectItem>
                  <SelectItem value="annually">Annually</SelectItem>
                  <SelectItem value="biennially">Biennially</SelectItem>
                  <SelectItem value="triennially">Triennially</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="paymentmethod">Payment Method</Label>
              <Select
                value={formData.paymentmethod}
                onValueChange={(value) => handleInputChange('paymentmethod', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stripe">Stripe</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="banktransfer">Bank Transfer</SelectItem>
                  <SelectItem value="check">Check</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="domain">Domain (Optional)</Label>
            <Input
              id="domain"
              type="text"
              value={formData.domain}
              onChange={(e) => handleInputChange('domain', e.target.value)}
              placeholder="example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customfields">Custom Fields (Optional)</Label>
            <Input
              id="customfields"
              type="text"
              value={formData.customfields}
              onChange={(e) => handleInputChange('customfields', e.target.value)}
              placeholder="Custom field data"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="addons">Add-ons (Optional)</Label>
            <Input
              id="addons"
              type="text"
              value={formData.addons}
              onChange={(e) => handleInputChange('addons', e.target.value)}
              placeholder="Add-on IDs (comma separated)"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={orderLoading || productsLoading}
          >
            {orderLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Order...
              </>
            ) : (
              'Create Order'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
