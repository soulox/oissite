import { NextRequest, NextResponse } from 'next/server'
import { whmcsConfig } from '@/lib/config/whmcs'

// GET /api/whmcs/debug - Debug WHMCS configuration and test different endpoints
export async function GET(request: NextRequest) {
  try {
    const debugInfo = {
      config: {
        url: whmcsConfig.url,
        version: whmcsConfig.version,
        identifier: whmcsConfig.api.identifier ? 'Set' : 'Missing',
        secret: whmcsConfig.api.secret ? 'Set' : 'Missing',
        accessKey: whmcsConfig.api.accessKey ? 'Set' : 'Missing',
      },
      endpoints: {
        api: `${whmcsConfig.url}/includes/api.php`,
        legacy: `${whmcsConfig.url}/includes/api.php`,
        v1: `${whmcsConfig.url}/includes/api.php`,
      },
      authentication: whmcsConfig.version.startsWith('7.') ? 'username/password' : 'identifier/secret/accesskey',
    }

    // Test different API endpoints
    const testResults = []
    
    // Test 1: Basic connectivity
    try {
      const response = await fetch(`${whmcsConfig.url}/includes/api.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          action: 'GetSystemStats',
          identifier: whmcsConfig.api.identifier,
          secret: whmcsConfig.api.secret,
          responsetype: 'json',
        }),
      })
      
      testResults.push({
        test: 'Basic API Connectivity',
        status: response.status,
        statusText: response.statusText,
        url: `${whmcsConfig.url}/includes/api.php`,
        success: response.ok,
      })
      
      if (response.ok) {
        const data = await response.text()
        testResults.push({
          test: 'API Response',
          response: data.substring(0, 500), // First 500 chars
        })
      }
    } catch (error) {
      testResults.push({
        test: 'Basic API Connectivity',
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      })
    }

    // Test 2: Check if API is enabled
    try {
      const response = await fetch(`${whmcsConfig.url}/includes/api.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          action: 'GetSystemStats',
          identifier: whmcsConfig.api.identifier,
          secret: whmcsConfig.api.secret,
          responsetype: 'json',
        }),
      })
      
      const responseText = await response.text()
      
      testResults.push({
        test: 'API Response Analysis',
        status: response.status,
        responseLength: responseText.length,
        containsError: responseText.includes('error'),
        containsSuccess: responseText.includes('success'),
        responsePreview: responseText.substring(0, 200),
      })
    } catch (error) {
      testResults.push({
        test: 'API Response Analysis',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }

    return NextResponse.json({
      success: true,
      debug: debugInfo,
      tests: testResults,
      recommendations: [
        '1. Verify the admin account has API access permissions',
        '2. Check if API is enabled in WHMCS admin panel',
        '3. Ensure the admin account username and password are correct',
        '4. Try accessing the API endpoint directly in browser',
        '5. Check WHMCS error logs for more details',
      ],
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}
