/**
 * WHMCS API Client
 * 
 * This module provides a type-safe client for interacting with the WHMCS API.
 * Compatible with WHMCS 7.10 and above.
 * It handles authentication, request formatting, and response parsing.
 */

import { whmcsConfig, getWhmcsApiUrl } from '@/lib/config/whmcs'

// WHMCS API Response Types
export interface WhmcsApiResponse<T = any> {
  result: 'success' | 'error'
  message?: string
  data?: T
}

// Common WHMCS Data Types
export interface WhmcsClient {
  id: string
  firstname: string
  lastname: string
  email: string
  companyname?: string
  address1?: string
  address2?: string
  city?: string
  state?: string
  postcode?: string
  country?: string
  phonenumber?: string
  status: 'Active' | 'Inactive' | 'Closed'
  datecreated: string
  currency: string
  credit: string
  groupid: string
}

export interface WhmcsProduct {
  id: string
  name: string
  description: string
  type: 'hostingaccount' | 'reselleraccount' | 'server' | 'other'
  gid: string
  pid: string
  pricing: Record<string, {
    monthly: string
    quarterly: string
    semiannually: string
    annually: string
    biennially: string
    triennially: string
  }>
  customfields: Array<{
    id: string
    name: string
    type: string
    required: boolean
  }>
}

export interface WhmcsOrder {
  id: string
  ordernum: string
  userid: string
  date: string
  status: 'Pending' | 'Active' | 'Fraud' | 'Cancelled'
  amount: string
  currency: string
  paymentmethod: string
  invoiceid?: string
}

export interface WhmcsInvoice {
  id: string
  invoicenum: string
  userid: string
  date: string
  duedate: string
  datepaid?: string
  subtotal: string
  credit: string
  tax: string
  tax2: string
  total: string
  balance: string
  taxrate: string
  taxrate2: string
  status: 'Draft' | 'Unpaid' | 'Paid' | 'Cancelled' | 'Refunded' | 'Collections'
  paymentmethod?: string
  notes: string
}

// API Request Parameters
export interface WhmcsApiParams {
  [key: string]: any
}

// WHMCS API Client Class
export class WhmcsApiClient {
  private baseUrl: string
  private config: typeof whmcsConfig

  constructor() {
    this.baseUrl = getWhmcsApiUrl()
    this.config = whmcsConfig
  }

  /**
   * Make a request to the WHMCS API
   * Compatible with WHMCS 7.10 and above
   */
  private async makeRequest<T = any>(
    action: string,
    params: WhmcsApiParams = {}
  ): Promise<WhmcsApiResponse<T>> {
    if (!this.config.url || !this.config.api.identifier || !this.config.api.secret) {
      throw new Error('WHMCS configuration is incomplete')
    }

    // Determine authentication method based on WHMCS version
    const isVersion8Plus = this.config.version.startsWith('8.') || 
                          this.config.version.startsWith('9.') || 
                          this.config.version === '8.0' ||
                          this.config.version === '9.0'

    const requestData = {
      action,
      responsetype: 'json',
      ...(isVersion8Plus ? {
        // WHMCS 8.0+ authentication
        identifier: this.config.api.identifier,
        secret: this.config.api.secret,
        accesskey: this.config.api.accessKey,
      } : {
        // WHMCS 7.10.2 authentication (only identifier and secret)
        identifier: this.config.api.identifier,
        secret: this.config.api.secret,
      }),
      ...params,
    }

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(requestData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.result === 'error') {
        throw new Error(data.message || 'WHMCS API error')
      }

      return data
    } catch (error) {
      console.error('WHMCS API request failed:', error)
      throw error
    }
  }

  // Client Management
  async getClient(clientId: string): Promise<WhmcsClient> {
    const response = await this.makeRequest<{ client: WhmcsClient }>('GetClientsDetails', {
      clientid: clientId,
    })
    return response.data!.client
  }

  async createClient(clientData: {
    firstname: string
    lastname: string
    email: string
    password2: string
    companyname?: string
    address1?: string
    city?: string
    state?: string
    postcode?: string
    country?: string
    phonenumber?: string
    currency?: string
  }): Promise<{ clientid: string }> {
    const response = await this.makeRequest<{ clientid: string }>('AddClient', clientData)
    return response.data!
  }

  async updateClient(clientId: string, clientData: Partial<WhmcsClient>): Promise<void> {
    await this.makeRequest('UpdateClient', {
      clientid: clientId,
      ...clientData,
    })
  }

  // Product Management
  async getProducts(): Promise<WhmcsProduct[]> {
    const response = await this.makeRequest<{ products: { product: WhmcsProduct[] } }>('GetProducts')
    return response.data!.products.product
  }

  async getProduct(productId: string): Promise<WhmcsProduct> {
    const response = await this.makeRequest<{ product: WhmcsProduct }>('GetProducts', {
      pid: productId,
    })
    return response.data!.product
  }

  // Order Management
  async createOrder(orderData: {
    clientid: string
    pid: string
    billingcycle: 'monthly' | 'quarterly' | 'semiannually' | 'annually' | 'biennially' | 'triennially'
    domain?: string
    customfields?: string
    addons?: string
    paymentmethod: string
  }): Promise<{ orderid: string }> {
    const response = await this.makeRequest<{ orderid: string }>('AddOrder', orderData)
    return response.data!
  }

  async getOrder(orderId: string): Promise<WhmcsOrder> {
    const response = await this.makeRequest<{ order: WhmcsOrder }>('GetOrders', {
      id: orderId,
    })
    return response.data!.order
  }

  // Invoice Management
  async getInvoices(clientId: string): Promise<WhmcsInvoice[]> {
    const response = await this.makeRequest<{ invoices: { invoice: WhmcsInvoice[] } }>('GetInvoices', {
      userid: clientId,
    })
    return response.data!.invoices.invoice
  }

  async getInvoice(invoiceId: string): Promise<WhmcsInvoice> {
    const response = await this.makeRequest<{ invoice: WhmcsInvoice }>('GetInvoice', {
      invoiceid: invoiceId,
    })
    return response.data!.invoice
  }

  // Authentication
  async validateLogin(email: string, password: string): Promise<{ userid: string; passwordhash: string }> {
    const response = await this.makeRequest<{ userid: string; passwordhash: string }>('ValidateLogin', {
      email,
      password2: password,
    })
    return response.data!
  }

  // Domain Management
  async getDomains(clientId: string): Promise<any[]> {
    const response = await this.makeRequest<{ domains: { domain: any[] } }>('GetClientsDomains', {
      clientid: clientId,
    })
    return response.data!.domains.domain
  }

  async registerDomain(domainData: {
    domain: string
    regperiod: number
    nameserver1?: string
    nameserver2?: string
    nameserver3?: string
    nameserver4?: string
    nameserver5?: string
    dnsmanagement?: boolean
    emailforwarding?: boolean
    idprotection?: boolean
    eppcode?: string
    firstname: string
    lastname: string
    companyname?: string
    email: string
    address1: string
    address2?: string
    city: string
    state: string
    postcode: string
    country: string
    phonenumber: string
    paymentmethod: string
  }): Promise<{ domainid: string }> {
    const response = await this.makeRequest<{ domainid: string }>('DomainRegister', domainData)
    return response.data!
  }
}

// Export singleton instance
export const whmcsClient = new WhmcsApiClient()
