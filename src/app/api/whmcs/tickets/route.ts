import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'
import { z } from 'zod'

// Validation schema
const ticketQuerySchema = z.object({
  clientId: z.string().min(1),
  limit: z.string().nullable().optional().transform(val => val ? parseInt(val) : 25),
  status: z.string().nullable().optional().default('All'),
})

// GET /api/whmcs/tickets - Get client support tickets
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const clientId = searchParams.get('clientId')
    const limit = searchParams.get('limit')
    const status = searchParams.get('status')

    if (!clientId) {
      return NextResponse.json(
        { error: 'Client ID is required' },
        { status: 400 }
      )
    }

    const validatedData = ticketQuerySchema.parse({ clientId, limit, status })
    
    // Get client tickets using WHMCS API
    const tickets = await whmcsClient.getTickets(
      validatedData.clientId, 
      validatedData.limit || 25, 
      validatedData.status || 'All'
    )
    
    return NextResponse.json({
      success: true,
      data: tickets,
    })
  } catch (error) {
    console.error('Error fetching tickets:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to fetch tickets' },
      { status: 500 }
    )
  }
}

// POST /api/whmcs/tickets - Create new support ticket
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const createTicketSchema = z.object({
      clientId: z.string().min(1),
      subject: z.string().min(1),
      message: z.string().min(1),
      priority: z.enum(['Low', 'Medium', 'High']).default('Medium'),
      departmentId: z.string().optional(),
    })

    const validatedData = createTicketSchema.parse(body)
    
    // Create ticket using WHMCS API
    const result = await whmcsClient.createTicket({
      clientid: validatedData.clientId,
      subject: validatedData.subject,
      message: validatedData.message,
      priority: validatedData.priority,
      deptid: validatedData.departmentId || '1', // Default to department 1
    })
    
    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Error creating ticket:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create ticket' },
      { status: 500 }
    )
  }
}
