import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'
import { z } from 'zod'

// Validation schemas
const createOrderSchema = z.object({
  clientid: z.string().min(1),
  pid: z.string().min(1),
  billingcycle: z.enum(['monthly', 'quarterly', 'semiannually', 'annually', 'biennially', 'triennially']),
  domain: z.string().optional(),
  customfields: z.string().optional(),
  addons: z.string().optional(),
  paymentmethod: z.string().min(1),
})

// GET /api/whmcs/orders - Get order details
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const orderId = searchParams.get('orderId')

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      )
    }

    const order = await whmcsClient.getOrder(orderId)
    
    return NextResponse.json({
      success: true,
      data: order,
    })
  } catch (error) {
    console.error('Error fetching order:', error)
    return NextResponse.json(
      { error: 'Failed to fetch order details' },
      { status: 500 }
    )
  }
}

// POST /api/whmcs/orders - Create new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = createOrderSchema.parse(body)

    const result = await whmcsClient.createOrder(validatedData)

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Error creating order:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
