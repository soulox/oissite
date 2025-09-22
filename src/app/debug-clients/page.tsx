'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface Client {
  id: string
  firstname: string
  lastname: string
  email: string
  companyname: string
  status: string
  datecreated: string
  groupid: string
}

export default function DebugClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchEmail, setSearchEmail] = useState('')
  const [filteredClients, setFilteredClients] = useState<Client[]>([])
  const [totalLoaded, setTotalLoaded] = useState(0)

  const loadClients = async () => {
    setLoading(true)
    setError(null)
    setClients([])
    setTotalLoaded(0)

    try {
      const response = await fetch('/api/whmcs/debug-clients')
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to load clients')
      }

      setClients(data.clients || [])
      setFilteredClients(data.clients || [])
      setTotalLoaded(data.totalLoaded || 0)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const searchClients = () => {
    if (!searchEmail.trim()) {
      setFilteredClients(clients)
      return
    }

    const filtered = clients.filter(client => 
      client.email.toLowerCase().includes(searchEmail.toLowerCase()) ||
      client.firstname.toLowerCase().includes(searchEmail.toLowerCase()) ||
      client.lastname.toLowerCase().includes(searchEmail.toLowerCase()) ||
      client.id === searchEmail
    )
    setFilteredClients(filtered)
  }

  useEffect(() => {
    searchClients()
  }, [searchEmail, clients])

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'closed': return 'bg-red-100 text-red-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">WHMCS Clients Debug</h1>
        <p className="text-gray-600">
          Debug page to view all clients and their email addresses from WHMCS
        </p>
        <div className="mt-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            All Clients (Active, Inactive, Closed)
          </Badge>
        </div>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex gap-4 items-center">
          <Button onClick={loadClients} disabled={loading}>
            {loading ? 'Loading...' : 'Load All Clients'}
          </Button>
          {totalLoaded > 0 && (
            <Badge variant="outline">
              Loaded: {totalLoaded} clients
            </Badge>
          )}
        </div>

        <div className="flex gap-4 items-center">
          <Input
            placeholder="Search by email, name, or ID..."
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="max-w-md"
          />
          <Button variant="outline" onClick={searchClients}>
            Search
          </Button>
        </div>
      </div>

      {error && (
        <Alert className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {clients.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredClients.length} of {clients.length} clients
            {searchEmail && ` (filtered by "${searchEmail}")`}
          </p>
        </div>
      )}

      <div className="grid gap-4">
        {filteredClients.map((client) => (
          <Card key={client.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    {client.firstname} {client.lastname}
                  </CardTitle>
                  {client.companyname && (
                    <p className="text-sm text-gray-600 mt-1">
                      {client.companyname}
                    </p>
                  )}
                </div>
                <Badge className={getStatusColor(client.status)}>
                  {client.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Email:</strong>
                  <p className="text-blue-600 font-mono">{client.email}</p>
                </div>
                <div>
                  <strong>Client ID:</strong>
                  <p className="font-mono">{client.id}</p>
                </div>
                <div>
                  <strong>Created:</strong>
                  <p>{new Date(client.datecreated).toLocaleDateString()}</p>
                </div>
                <div>
                  <strong>Group ID:</strong>
                  <p>{client.groupid}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredClients.length === 0 && !loading && clients.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No clients found matching your search.</p>
        </div>
      )}

      {clients.length === 0 && !loading && !error && (
        <div className="text-center py-8">
          <p className="text-gray-500">Click "Load All Clients" to view the client database.</p>
        </div>
      )}
    </div>
  )
}
