import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'
import { z } from 'zod'

// Validation schema
const invoiceQuerySchema = z.object({
  clientId: z.string().min(1),
})

// GET /api/whmcs/invoices - Get client invoices
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const clientId = searchParams.get('clientId')

    if (!clientId) {
      return NextResponse.json(
        { error: 'Client ID is required' },
        { status: 400 }
      )
    }

    const validatedData = invoiceQuerySchema.parse({ clientId })
    const invoices = await whmcsClient.getInvoices(validatedData.clientId)
    
    return NextResponse.json({
      success: true,
      data: invoices,
    })
  } catch (error) {
    console.error('Error fetching invoices:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    )
  }
}
