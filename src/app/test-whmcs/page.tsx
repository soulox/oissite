'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'

export default function TestWhmcsPage() {
  const [testResult, setTestResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [testClientData, setTestClientData] = useState({
    firstname: 'Test',
    lastname: 'User',
    email: 'test@example.com',
    password: 'testpassword123'
  })

  const testConnection = async () => {
    setLoading(true)
    setTestResult(null)
    
    try {
      const response = await fetch('/api/whmcs/test')
      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({
        success: false,
        error: 'Failed to connect to test endpoint'
      })
    } finally {
      setLoading(false)
    }
  }

  const testClientCreation = async () => {
    setLoading(true)
    setTestResult(null)
    
    try {
      const response = await fetch('/api/whmcs/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testClientData),
      })
      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({
        success: false,
        error: 'Failed to create test client'
      })
    } finally {
      setLoading(false)
    }
  }

  const debugConnection = async () => {
    setLoading(true)
    setTestResult(null)
    
    try {
      const response = await fetch('/api/whmcs/debug')
      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({
        success: false,
        error: 'Failed to debug connection'
      })
    } finally {
      setLoading(false)
    }
  }

  const testPermissions = async () => {
    setLoading(true)
    setTestResult(null)
    
    try {
      const response = await fetch('/api/whmcs/test-permissions')
      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({
        success: false,
        error: 'Failed to test permissions'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">WHMCS Integration Test</h1>
          <p className="text-xl text-muted-foreground">
            Test your WHMCS 7.10.2 integration with OISSite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connection Test */}
          <Card>
            <CardHeader>
              <CardTitle>Test Connection</CardTitle>
              <CardDescription>
                Test the connection to your WHMCS installation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={testConnection} 
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Testing...
                  </>
                ) : (
                  'Test WHMCS Connection'
                )}
              </Button>
              
              <div className="text-sm text-muted-foreground">
                This will test:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>WHMCS API connectivity</li>
                  <li>API identifier & secret authentication</li>
                  <li>Product fetching</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Debug Connection */}
          <Card>
            <CardHeader>
              <CardTitle>Debug Connection</CardTitle>
              <CardDescription>
                Detailed debugging for connection issues
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={debugConnection} 
                disabled={loading}
                className="w-full"
                variant="outline"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Debugging...
                  </>
                ) : (
                  'Debug Connection'
                )}
              </Button>
              
              <div className="text-sm text-muted-foreground">
                This will help diagnose:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>API endpoint accessibility</li>
                  <li>Identifier & secret authentication</li>
                  <li>Response analysis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Test Permissions */}
          <Card>
            <CardHeader>
              <CardTitle>Test Permissions</CardTitle>
              <CardDescription>
                Find which API actions are allowed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={testPermissions} 
                disabled={loading}
                className="w-full"
                variant="secondary"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Testing...
                  </>
                ) : (
                  'Test API Permissions'
                )}
              </Button>
              
              <div className="text-sm text-muted-foreground">
                This will test:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Multiple API actions</li>
                  <li>Find working permissions</li>
                  <li>Identify restrictions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Client Creation Test */}
          <Card>
            <CardHeader>
              <CardTitle>Test Client Creation</CardTitle>
              <CardDescription>
                Test creating a client in WHMCS
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstname"
                    value={testClientData.firstname}
                    onChange={(e) => setTestClientData(prev => ({ ...prev, firstname: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    id="lastname"
                    value={testClientData.lastname}
                    onChange={(e) => setTestClientData(prev => ({ ...prev, lastname: e.target.value }))}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={testClientData.email}
                  onChange={(e) => setTestClientData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={testClientData.password}
                  onChange={(e) => setTestClientData(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
              
              <Button 
                onClick={testClientCreation} 
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  'Create Test Client'
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Test Results */}
        {testResult && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {testResult.success ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Test Successful
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    Test Failed
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>
              Access other parts of the integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" asChild>
                <a href="/register">
                  Test Registration
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/client-portal">
                  Client Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/api/whmcs/test" target="_blank">
                  API Test Endpoint
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Environment Check */}
        <Card>
          <CardHeader>
            <CardTitle>Environment Configuration</CardTitle>
            <CardDescription>
              Make sure these environment variables are set in your .env.local file
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
{`# Required for WHMCS 7.10.2
WHMCS_URL="https://your-whmcs-domain.com"
WHMCS_VERSION="7.10.2"
WHMCS_API_IDENTIFIER="your-api-identifier"
WHMCS_API_SECRET="your-api-secret"

# Optional
WHMCS_CLIENT_PORTAL_URL="https://your-whmcs-domain.com/clientarea.php"
WHMCS_BILLING_URL="https://your-whmcs-domain.com/billing.php"`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
