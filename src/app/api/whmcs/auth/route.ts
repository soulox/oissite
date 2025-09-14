import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'
import { z } from 'zod'

// Validation schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

// POST /api/whmcs/auth - Validate login credentials
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = loginSchema.parse(body)

    const result = await whmcsClient.validateLogin(
      validatedData.email,
      validatedData.password
    )

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Error validating login:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }
}
