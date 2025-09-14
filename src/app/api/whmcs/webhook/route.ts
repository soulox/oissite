import { NextRequest, NextResponse } from 'next/server'
import { whmcsConfig } from '@/lib/config/whmcs'
import crypto from 'crypto'

// WHMCS Webhook Event Types
interface WhmcsWebhookEvent {
  action: string
  data: any
  timestamp: string
  signature?: string
}

// Webhook event handlers
const webhookHandlers: Record<string, (data: any) => Promise<void>> = {
  // Order events
  'OrderCreated': async (data) => {
    console.log('Order created:', data)
    // Handle new order creation
    // You can send confirmation emails, update databases, etc.
  },
  
  'OrderPaid': async (data) => {
    console.log('Order paid:', data)
    // Handle order payment
    // You can trigger service provisioning, send receipts, etc.
  },
  
  'OrderCancelled': async (data) => {
    console.log('Order cancelled:', data)
    // Handle order cancellation
    // You can update service status, send notifications, etc.
  },
  
  // Invoice events
  'InvoiceCreated': async (data) => {
    console.log('Invoice created:', data)
    // Handle new invoice creation
    // You can send invoice emails, update billing records, etc.
  },
  
  'InvoicePaid': async (data) => {
    console.log('Invoice paid:', data)
    // Handle invoice payment
    // You can update account status, send receipts, etc.
  },
  
  // Client events
  'ClientAdd': async (data) => {
    console.log('Client added:', data)
    // Handle new client registration
    // You can send welcome emails, create user accounts, etc.
  },
  
  'ClientUpdate': async (data) => {
    console.log('Client updated:', data)
    // Handle client profile updates
    // You can sync data with other systems, etc.
  },
  
  // Support events
  'TicketOpen': async (data) => {
    console.log('Support ticket opened:', data)
    // Handle new support ticket
    // You can send notifications, create internal tasks, etc.
  },
  
  'TicketReply': async (data) => {
    console.log('Support ticket reply:', data)
    // Handle ticket replies
    // You can send notifications, update ticket status, etc.
  },
}

// Verify webhook signature
function verifyWebhookSignature(payload: string, signature: string): boolean {
  if (!whmcsConfig.api.webhookSecret) {
    console.warn('Webhook secret not configured, skipping signature verification')
    return true
  }
  
  const expectedSignature = crypto
    .createHmac('sha256', whmcsConfig.api.webhookSecret)
    .update(payload)
    .digest('hex')
  
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  )
}

// POST /api/whmcs/webhook - Handle WHMCS webhooks
export async function POST(request: NextRequest) {
  try {
    // Check if webhooks are supported (WHMCS 8.0+)
    if (whmcsConfig.version.startsWith('7.')) {
      return NextResponse.json(
        { 
          error: 'Webhooks are not supported in WHMCS 7.10',
          message: 'Please upgrade to WHMCS 8.0+ for webhook support'
        },
        { status: 501 }
      )
    }

    const body = await request.text()
    const signature = request.headers.get('x-whmcs-signature')
    
    // Verify webhook signature if configured
    if (signature && !verifyWebhookSignature(body, signature)) {
      console.error('Invalid webhook signature')
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }
    
    const event: WhmcsWebhookEvent = JSON.parse(body)
    
    // Log the webhook event
    console.log('Received WHMCS webhook:', event.action, event.data)
    
    // Handle the webhook event
    const handler = webhookHandlers[event.action]
    if (handler) {
      await handler(event.data)
    } else {
      console.log(`No handler found for webhook action: ${event.action}`)
    }
    
    return NextResponse.json({
      success: true,
      message: 'Webhook processed successfully',
    })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    )
  }
}

// GET /api/whmcs/webhook - Webhook health check
export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'WHMCS webhook endpoint is active',
    timestamp: new Date().toISOString(),
  })
}
