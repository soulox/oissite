import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'
import { z } from 'zod'
import { cookies } from 'next/headers'

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = loginSchema.parse(body)

    // Validate credentials with WHMCS
    const authResult = await whmcsClient.validateLogin(email, password)
    
    if (authResult) {
      // Get full client details
      let clientDetails
      try {
        clientDetails = await whmcsClient.getClient(authResult.userid)
      } catch (error) {
        // If getClient fails, use basic info from authResult
        console.log('getClient failed, using basic auth info:', error)
        clientDetails = {
          id: authResult.userid,
          email: email,
          firstname: 'User',
          lastname: '',
          companyname: '',
          status: 'Active'
        }
      }
      
      if (clientDetails) {
        // Create session cookie
        const cookieStore = cookies()
        const sessionData = {
          userId: authResult.userid,
          email: email,
          timestamp: Date.now()
        }
        
        cookieStore.set('auth-session', JSON.stringify(sessionData), {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: '/'
        })

        return NextResponse.json({
          success: true,
          user: {
            id: authResult.userid,
            email: clientDetails.email,
            firstname: clientDetails.firstname,
            lastname: clientDetails.lastname,
            companyname: clientDetails.companyname,
            status: clientDetails.status
          }
        })
      } else {
        return NextResponse.json(
          { success: false, error: 'Failed to retrieve user details' },
          { status: 500 }
        )
      }
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid input data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Login failed. Please try again.' },
      { status: 500 }
    )
  }
}
