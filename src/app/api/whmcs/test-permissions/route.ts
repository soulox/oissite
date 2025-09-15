import { NextRequest, NextResponse } from 'next/server'
import { whmcsConfig } from '@/lib/config/whmcs'

// GET /api/whmcs/test-permissions - Test different API actions to find working ones
export async function GET(request: NextRequest) {
  try {
    const testActions = [
      'GetModuleQueue',      // Basic system action
      'GetCurrencies',       // Currency information
      'GetPaymentMethods',   // Payment methods
      'GetEmailTemplates',   // Email templates
      'GetStaffOnline',      // Staff online status
      'GetActivityLog',      // Activity log
      'GetClients',          // Client list
      'GetProducts',         // Product list
      'GetSystemStats',      // System statistics
    ]

    const results = []

    for (const action of testActions) {
      try {
        const response = await fetch(`${whmcsConfig.url}/includes/api.php`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            action,
            identifier: whmcsConfig.api.identifier,
            secret: whmcsConfig.api.secret,
            responsetype: 'json',
          }),
        })

        const responseText = await response.text()
        let responseData
        try {
          responseData = JSON.parse(responseText)
        } catch {
          responseData = { raw: responseText }
        }

        results.push({
          action,
          status: response.status,
          success: response.ok && responseData.result !== 'error',
          error: responseData.result === 'error' ? responseData.message : null,
          hasData: responseData.result === 'success' && responseData.data,
        })
      } catch (error) {
        results.push({
          action,
          status: 'error',
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          hasData: false,
        })
      }
    }

    const workingActions = results.filter(r => r.success)
    const failedActions = results.filter(r => !r.success)

    return NextResponse.json({
      success: workingActions.length > 0,
      message: workingActions.length > 0 
        ? `Found ${workingActions.length} working API actions` 
        : 'No API actions are working - check permissions',
      config: {
        url: whmcsConfig.url,
        version: whmcsConfig.version,
        identifier: whmcsConfig.api.identifier ? 'Set' : 'Missing',
        secret: whmcsConfig.api.secret ? 'Set' : 'Missing',
      },
      results: {
        working: workingActions,
        failed: failedActions,
        total: results.length,
      },
      recommendations: workingActions.length === 0 ? [
        '1. Check API credential permissions in WHMCS admin panel',
        '2. Ensure API is enabled in WHMCS settings',
        '3. Try creating a new API credential with full permissions',
        '4. Check if your WHMCS installation has API restrictions',
        '5. Contact your WHMCS administrator for API access'
      ] : [
        '1. Use the working API actions for your integration',
        '2. Consider requesting additional permissions if needed',
        '3. Test client creation with the working actions'
      ]
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      config: {
        url: whmcsConfig.url,
        version: whmcsConfig.version,
        identifier: whmcsConfig.api.identifier ? 'Set' : 'Missing',
        secret: whmcsConfig.api.secret ? 'Set' : 'Missing',
      }
    }, { status: 500 })
  }
}
