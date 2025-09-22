import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { whmcsClient } from '@/lib/whmcs/client'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies()
    const sessionCookie = cookieStore.get('auth-session')
    
    if (!sessionCookie) {
      return NextResponse.json({ success: false, user: null })
    }

    try {
      const sessionData = JSON.parse(sessionCookie.value)
      
      // Check if session is not expired (7 days)
      const sessionAge = Date.now() - sessionData.timestamp
      const maxAge = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
      
      if (sessionAge > maxAge) {
        // Session expired, clear cookie
        cookieStore.delete('auth-session')
        return NextResponse.json({ success: false, user: null })
      }

      // Get fresh client details from WHMCS
      const clientDetails = await whmcsClient.getClient(sessionData.userId)
      
      if (clientDetails) {
        return NextResponse.json({
          success: true,
          user: {
            id: sessionData.userId,
            email: clientDetails.email,
            firstname: clientDetails.firstname,
            lastname: clientDetails.lastname,
            companyname: clientDetails.companyname,
            status: clientDetails.status
          }
        })
      } else {
        // Client not found, clear session
        cookieStore.delete('auth-session')
        return NextResponse.json({ success: false, user: null })
      }
    } catch (parseError) {
      // Invalid session data, clear cookie
      cookieStore.delete('auth-session')
      return NextResponse.json({ success: false, user: null })
    }
  } catch (error) {
    console.error('Session check error:', error)
    return NextResponse.json({ success: false, user: null })
  }
}
