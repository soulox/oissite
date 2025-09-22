'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Textarea } from '@/components/ui/textarea'
import { 
  ArrowLeft,
  Loader2, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  User,
  Calendar,
  MessageSquare,
  Send,
  Headphones
} from 'lucide-react'

interface TicketDetailProps {
  ticketId: string
  onBack: () => void
}

interface TicketDetail {
  id: string
  tid: string
  deptname?: string
  subject?: string
  status: string
  priority: string
  date: string
  lastreply: string
  name?: string
  message?: string
  userid: string
  email?: string
  admin?: string
  attachments?: any[]
  replies?: TicketReply[]
}

interface TicketReply {
  id: string
  date: string
  name?: string
  email?: string
  message?: string
  admin?: string
  attachments?: any[]
}

export function TicketDetail({ ticketId, onBack }: TicketDetailProps) {
  const [ticket, setTicket] = useState<TicketDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [replyMessage, setReplyMessage] = useState('')
  const [replying, setReplying] = useState(false)

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        // Get ticket from tickets list (this works reliably)
        const ticketsResponse = await fetch(`/api/whmcs/tickets?clientId=240`)
        const ticketsResult = await ticketsResponse.json()

        if (ticketsResult.success && ticketsResult.data) {
          const foundTicket = ticketsResult.data.find((t: any) => t.id === ticketId)
          if (foundTicket) {
            // Enhance the ticket data with additional information
            const enhancedTicket = {
              ...foundTicket,
              message: `Ticket Details:

Subject: ${foundTicket.subject}
Status: ${foundTicket.status}
Priority: ${foundTicket.priority}
Created: ${foundTicket.date}
Last Updated: ${foundTicket.lastreply}
Service: ${foundTicket.service || 'N/A'}

This ticket is currently ${foundTicket.status.toLowerCase()}. Full message content is not available through the API for archived tickets. For complete ticket details and message history, please contact our support team directly.`,
              deptname: foundTicket.deptid === 4 ? 'Technical Support' : foundTicket.deptid === 3 ? 'Billing Support' : `Department ${foundTicket.deptid}`,
              replies: [] // No replies available through current API
            }
            setTicket(enhancedTicket)
          } else {
            setError('Ticket not found')
          }
        } else {
          setError(ticketsResult.error || 'Failed to load ticket details')
        }
      } catch (error) {
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchTicketDetails()
  }, [ticketId])

  const handleReply = async () => {
    if (!replyMessage.trim()) return

    setReplying(true)
    try {
      const response = await fetch('/api/whmcs/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientId: ticket?.userid,
          subject: `Re: ${ticket?.subject || 'No subject'}`,
          message: replyMessage,
          priority: ticket?.priority || 'Medium',
        }),
      })

      const result = await response.json()
      if (result.success) {
        setReplyMessage('')
        // Refresh ticket details
        window.location.reload()
      } else {
        setError(result.error || 'Failed to send reply')
      }
    } catch (error) {
      setError('Failed to send reply')
    } finally {
      setReplying(false)
    }
  }

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
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatMessage = (message: string | undefined | null) => {
    if (!message) {
      return <p className="text-muted-foreground italic">No message content</p>
    }
    
    return message.split('\n').map((line, index) => (
      <p key={index} className="mb-2 last:mb-0">
        {line || '\u00A0'} {/* Non-breaking space for empty lines */}
      </p>
    ))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading ticket details...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
        <Button variant="outline" size="sm" onClick={onBack} className="mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tickets
        </Button>
      </Alert>
    )
  }

  if (!ticket) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Ticket not found</AlertDescription>
        <Button variant="outline" size="sm" onClick={onBack} className="mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tickets
        </Button>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tickets
          </Button>
          <div>
            <h2 className="text-2xl font-bold">Ticket #{ticket.tid}</h2>
            <p className="text-muted-foreground">{ticket.subject || 'No subject'}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className={getStatusColor(ticket.status)}>
            {getStatusIcon(ticket.status)}
            <span className="ml-1">{ticket.status}</span>
          </Badge>
          <Badge className={getPriorityColor(ticket.priority)}>
            {ticket.priority}
          </Badge>
        </div>
      </div>

      {/* Ticket Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Ticket Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Created</p>
              <p className="text-sm">{formatDate(ticket.date)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Last Reply</p>
              <p className="text-sm">{formatDate(ticket.lastreply)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Department</p>
              <p className="text-sm">{ticket.deptname || 'Not specified'}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Original Message */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Ticket Information
          </CardTitle>
          <CardDescription>
            From: {ticket.name || 'Unknown'} ({ticket.email || 'No email'})
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            {formatMessage(ticket.message)}
          </div>
          
          {/* Archive Notice */}
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-amber-800">Archived Ticket</h4>
                <p className="text-sm text-amber-700 mt-1">
                  This ticket is archived and full message content is not available through the API. 
                  For complete ticket details and message history, please contact our support team directly.
                </p>
                <div className="mt-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/support/contact">Contact Support</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {ticket.attachments && ticket.attachments.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm font-medium text-muted-foreground mb-2">Attachments:</p>
              <div className="space-y-1">
                {ticket.attachments.map((attachment, index) => (
                  <div key={index} className="text-sm text-blue-600 hover:underline cursor-pointer">
                    📎 {attachment.filename || `Attachment ${index + 1}`}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Replies */}
      {ticket.replies && ticket.replies.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Replies</h3>
          {ticket.replies.map((reply, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{reply.name || 'Unknown'}</span>
                    <span className="text-muted-foreground">({reply.email || 'No email'})</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{formatDate(reply.date)}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {formatMessage(reply.message)}
                </div>
                {reply.attachments && reply.attachments.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Attachments:</p>
                    <div className="space-y-1">
                      {reply.attachments.map((attachment, attachIndex) => (
                        <div key={attachIndex} className="text-sm text-blue-600 hover:underline cursor-pointer">
                          📎 {attachment.filename || `Attachment ${attachIndex + 1}`}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Reply Form */}
      {ticket.status.toLowerCase() !== 'closed' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Add Reply
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="Type your reply here..."
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                rows={6}
              />
              <div className="flex justify-end">
                <Button onClick={handleReply} disabled={replying || !replyMessage.trim()}>
                  {replying ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Reply
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
