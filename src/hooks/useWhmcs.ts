/**
 * WHMCS Integration Hooks
 * 
 * Custom React hooks for interacting with WHMCS API
 */

import { useState, useCallback } from 'react'
import { useToast } from '@/hooks/use-toast'

// Types
interface WhmcsClient {
  id: string
  firstname: string
  lastname: string
  email: string
  companyname?: string
  status: string
  datecreated: string
  currency: string
}

interface WhmcsProduct {
  id: string
  name: string
  description: string
  type: string
  pricing: Record<string, any>
}

interface WhmcsOrder {
  id: string
  ordernum: string
  userid: string
  date: string
  status: string
  amount: string
  currency: string
}

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// Custom hook for WHMCS client operations
export function useWhmcsClient() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const createClient = useCallback(async (clientData: {
    firstname: string
    lastname: string
    email: string
    password: string
    companyname?: string
    address1?: string
    city?: string
    state?: string
    postcode?: string
    country?: string
    phonenumber?: string
  }) => {
    setLoading(true)
    try {
      const response = await fetch('/api/whmcs/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      })

      const result: ApiResponse<{ clientid: string }> = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to create client')
      }

      toast({
        title: 'Success',
        description: 'Client created successfully',
      })

      return result.data
    } catch (error) {
      console.error('Error creating client:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create client',
        variant: 'destructive',
      })
      throw error
    } finally {
      setLoading(false)
    }
  }, [toast])

  const getClient = useCallback(async (clientId: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/whmcs/clients?clientId=${clientId}`)
      const result: ApiResponse<WhmcsClient> = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch client')
      }

      return result.data
    } catch (error) {
      console.error('Error fetching client:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to fetch client',
        variant: 'destructive',
      })
      throw error
    } finally {
      setLoading(false)
    }
  }, [toast])

  const updateClient = useCallback(async (clientId: string, clientData: Partial<WhmcsClient>) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/whmcs/clients?clientId=${clientId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      })

      const result: ApiResponse<void> = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to update client')
      }

      toast({
        title: 'Success',
        description: 'Client updated successfully',
      })

      return result.data
    } catch (error) {
      console.error('Error updating client:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to update client',
        variant: 'destructive',
      })
      throw error
    } finally {
      setLoading(false)
    }
  }, [toast])

  return {
    loading,
    createClient,
    getClient,
    updateClient,
  }
}

// Custom hook for WHMCS product operations
export function useWhmcsProducts() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<WhmcsProduct[]>([])
  const { toast } = useToast()

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/whmcs/products')
      const result: ApiResponse<WhmcsProduct[]> = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch products')
      }

      setProducts(result.data || [])
      return result.data
    } catch (error) {
      console.error('Error fetching products:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to fetch products',
        variant: 'destructive',
      })
      throw error
    } finally {
      setLoading(false)
    }
  }, [toast])

  const getProduct = useCallback(async (productId: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/whmcs/products?productId=${productId}`)
      const result: ApiResponse<WhmcsProduct> = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch product')
      }

      return result.data
    } catch (error) {
      console.error('Error fetching product:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to fetch product',
        variant: 'destructive',
      })
      throw error
    } finally {
      setLoading(false)
    }
  }, [toast])

  return {
    loading,
    products,
    fetchProducts,
    getProduct,
  }
}

// Custom hook for WHMCS order operations
export function useWhmcsOrders() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const createOrder = useCallback(async (orderData: {
    clientid: string
    pid: string
    billingcycle: 'monthly' | 'quarterly' | 'semiannually' | 'annually' | 'biennially' | 'triennially'
    domain?: string
    customfields?: string
    addons?: string
    paymentmethod: string
  }) => {
    setLoading(true)
    try {
      const response = await fetch('/api/whmcs/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const result: ApiResponse<{ orderid: string }> = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to create order')
      }

      toast({
        title: 'Success',
        description: 'Order created successfully',
      })

      return result.data
    } catch (error) {
      console.error('Error creating order:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create order',
        variant: 'destructive',
      })
      throw error
    } finally {
      setLoading(false)
    }
  }, [toast])

  const getOrder = useCallback(async (orderId: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/whmcs/orders?orderId=${orderId}`)
      const result: ApiResponse<WhmcsOrder> = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch order')
      }

      return result.data
    } catch (error) {
      console.error('Error fetching order:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to fetch order',
        variant: 'destructive',
      })
      throw error
    } finally {
      setLoading(false)
    }
  }, [toast])

  return {
    loading,
    createOrder,
    getOrder,
  }
}

// Custom hook for WHMCS authentication
export function useWhmcsAuth() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const validateLogin = useCallback(async (email: string, password: string) => {
    setLoading(true)
    try {
      const response = await fetch('/api/whmcs/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const result: ApiResponse<{ userid: string; passwordhash: string }> = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Invalid credentials')
      }

      return result.data
    } catch (error) {
      console.error('Error validating login:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Login failed',
        variant: 'destructive',
      })
      throw error
    } finally {
      setLoading(false)
    }
  }, [toast])

  return {
    loading,
    validateLogin,
  }
}
