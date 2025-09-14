import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'
import { z } from 'zod'

// Validation schemas
const createClientSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  companyname: z.string().optional(),
  address1: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postcode: z.string().optional(),
  country: z.string().optional(),
  phonenumber: z.string().optional(),
  currency: z.string().default('USD'),
})

const updateClientSchema = z.object({
  firstname: z.string().min(1).optional(),
  lastname: z.string().min(1).optional(),
  email: z.string().email().optional(),
  companyname: z.string().optional(),
  address1: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postcode: z.string().optional(),
  country: z.string().optional(),
  phonenumber: z.string().optional(),
})

// GET /api/whmcs/clients - Get client details
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

    const client = await whmcsClient.getClient(clientId)
    
    return NextResponse.json({
      success: true,
      data: client,
    })
  } catch (error) {
    console.error('Error fetching client:', error)
    return NextResponse.json(
      { error: 'Failed to fetch client details' },
      { status: 500 }
    )
  }
}

// POST /api/whmcs/clients - Create new client
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = createClientSchema.parse(body)

    const result = await whmcsClient.createClient({
      ...validatedData,
      password2: validatedData.password,
    })

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Error creating client:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create client' },
      { status: 500 }
    )
  }
}

// PUT /api/whmcs/clients - Update client
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const clientId = searchParams.get('clientId')

    if (!clientId) {
      return NextResponse.json(
        { error: 'Client ID is required' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const validatedData = updateClientSchema.parse(body)

    await whmcsClient.updateClient(clientId, validatedData)

    return NextResponse.json({
      success: true,
      message: 'Client updated successfully',
    })
  } catch (error) {
    console.error('Error updating client:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to update client' },
      { status: 500 }
    )
  }
}
