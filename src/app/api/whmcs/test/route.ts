import { NextRequest, NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'
import { whmcsConfig } from '@/lib/config/whmcs'

// GET /api/whmcs/test - Test WHMCS connection
export async function GET(request: NextRequest) {
  try {
    // Check if WHMCS is configured
    if (!whmcsConfig.url || !whmcsConfig.api.identifier || !whmcsConfig.api.secret) {
      return NextResponse.json({
        success: false,
        error: 'WHMCS configuration is incomplete',
        config: {
          url: whmcsConfig.url ? 'Set' : 'Missing',
          identifier: whmcsConfig.api.identifier ? 'Set' : 'Missing',
          secret: whmcsConfig.api.secret ? 'Set' : 'Missing',
          version: whmcsConfig.version,
        }
      }, { status: 400 })
    }

    // Test API connection by fetching products
    const products = await whmcsClient.getProducts()
    
    return NextResponse.json({
      success: true,
      message: 'WHMCS connection successful',
      config: {
        version: whmcsConfig.version,
        url: whmcsConfig.url,
        authentication: whmcsConfig.version.startsWith('7.') ? 'username/password' : 'identifier/secret/accesskey',
      },
      data: {
        productsCount: products.length,
        sampleProducts: products.slice(0, 3).map(p => ({
          id: p.id,
          name: p.name,
          type: p.type,
        }))
      }
    })
  } catch (error) {
    console.error('WHMCS test failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      config: {
        version: whmcsConfig.version,
        url: whmcsConfig.url,
        identifier: whmcsConfig.api.identifier ? 'Set' : 'Missing',
        secret: whmcsConfig.api.secret ? 'Set' : 'Missing',
      }
    }, { status: 500 })
  }
}

// POST /api/whmcs/test - Test client creation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstname, lastname, email, password } = body

    if (!firstname || !lastname || !email || !password) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: firstname, lastname, email, password'
      }, { status: 400 })
    }

    // Test client creation
    const result = await whmcsClient.createClient({
      firstname,
      lastname,
      email,
      password2: password,
      currency: 'USD',
    })

    return NextResponse.json({
      success: true,
      message: 'Test client created successfully',
      data: result
    })
  } catch (error) {
    console.error('WHMCS test client creation failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
