'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Headphones, 
  Loader2, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  ExternalLink,
  Plus,
  MessageSquare
} from 'lucide-react'

interface ClientTicketsProps {
  clientId: string
  onViewTicket?: (ticketId: string) => void
}

interface Ticket {
  id: string
  tid: string
  deptname: string
  subject: string
  status: string
  priority: string
  date: string
  lastreply: string
  name: string
  message: string
}

export function ClientTickets({ clientId, onViewTicket }: ClientTicketsProps) {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(`/api/whmcs/tickets?clientId=${clientId}`)
        const result = await response.json()

        if (result.success) {
          setTickets(result.data || [])
        } else {
          setError(result.error || 'Failed to load tickets')
        }
      } catch (error) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchTickets()
  }, [clientId])

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'answered':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'closed':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'customer-reply':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-purple-100 text-purple-800 border-purple-200'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return <AlertCircle className="h-4 w-4 text-blue-600" />
      case 'answered':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'closed':
        return <CheckCircle className="h-4 w-4 text-gray-600" />
      case 'customer-reply':
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <Headphones className="h-4 w-4 text-purple-600" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading tickets...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (tickets.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Headphones className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Support Tickets</h3>
          <p className="text-muted-foreground text-center mb-4">
            You don't have any support tickets yet.
          </p>
          <Button asChild>
            <a href="/support/contact">Create Support Ticket</a>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Support Tickets</h3>
          <p className="text-muted-foreground">
            View and manage your support tickets
          </p>
        </div>
        <Button asChild>
          <a href="/support/contact">
            <Plus className="h-4 w-4 mr-2" />
            New Ticket
          </a>
        </Button>
      </div>

      <div className="grid gap-6">
        {tickets.map((ticket) => (
          <Card key={ticket.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(ticket.status)}
                  <div>
                    <CardTitle className="text-lg">#{ticket.tid}</CardTitle>
                    <CardDescription>
                      {ticket.subject}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className={getStatusColor(ticket.status)}>
                    {ticket.status}
                  </Badge>
                  <Badge className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Department</p>
                  <p className="text-sm">{ticket.deptname}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Created</p>
                  <p className="text-sm">{formatDate(ticket.date)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Last Reply</p>
                  <p className="text-sm">{formatDate(ticket.lastreply)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Assigned To</p>
                  <p className="text-sm">{ticket.name || 'Unassigned'}</p>
                </div>
              </div>

              {/* Ticket Preview */}
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 line-clamp-2">
                  {ticket.message}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onViewTicket?.(ticket.id)}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  View Ticket
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onViewTicket?.(ticket.id)}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Support Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Headphones className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold mb-1">Live Chat</h4>
              <p className="text-sm text-muted-foreground">Get instant help from our support team</p>
            </div>
            <div className="text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold mb-1">Knowledge Base</h4>
              <p className="text-sm text-muted-foreground">Browse our helpful guides and tutorials</p>
            </div>
            <div className="text-center">
              <AlertCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold mb-1">System Status</h4>
              <p className="text-sm text-muted-foreground">Check the status of our services</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
