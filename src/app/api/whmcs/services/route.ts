import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'
import { z } from 'zod'

// Validation schema
const serviceQuerySchema = z.object({
  clientId: z.string().min(1),
})

// GET /api/whmcs/services - Get client services
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

    const validatedData = serviceQuerySchema.parse({ clientId })
    
    // Get client services using WHMCS API
    const services = await whmcsClient.getServices(validatedData.clientId)
    
    return NextResponse.json({
      success: true,
      data: services,
    })
  } catch (error) {
    console.error('Error fetching services:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}
