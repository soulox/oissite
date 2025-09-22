'use client'

import { useState, useEffect } from 'react'
import { ClientDashboard } from './ClientDashboard'
import { TicketDetail } from './TicketDetail'
import { InvoiceDetail } from './InvoiceDetail'
import { useAuth } from '@/contexts/AuthContext'

export function WhmcsClientPortal() {
  const { user, isAuthenticated } = useAuth()
  const [currentView, setCurrentView] = useState<'dashboard' | 'ticket' | 'invoice'>('dashboard')
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null)
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null)

  // Check for URL parameters on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const action = urlParams.get('action')
    const ticketId = urlParams.get('ticketid')
    const invoiceId = urlParams.get('invoiceid')

    if (action === 'tickets' && ticketId) {
      setSelectedTicketId(ticketId)
      setCurrentView('ticket')
    } else if (action === 'invoices' && invoiceId) {
      setSelectedInvoiceId(invoiceId)
      setCurrentView('invoice')
    }
  }, [])


  const handleViewTicket = (ticketId: string) => {
    setSelectedTicketId(ticketId)
    setCurrentView('ticket')
    // Update URL
    window.history.pushState({}, '', `?action=tickets&ticketid=${ticketId}`)
  }

  const handleViewInvoice = (invoiceId: string) => {
    setSelectedInvoiceId(invoiceId)
    setCurrentView('invoice')
    // Update URL
    window.history.pushState({}, '', `?action=invoices&invoiceid=${invoiceId}`)
  }

  const handleBackToTickets = () => {
    setCurrentView('dashboard')
    setSelectedTicketId(null)
    // Clear URL parameters
    window.history.replaceState({}, '', window.location.pathname)
  }

  const handleBackToInvoices = () => {
    setCurrentView('dashboard')
    setSelectedInvoiceId(null)
    // Clear URL parameters
    window.history.replaceState({}, '', window.location.pathname)
  }

  if (isAuthenticated && user) {
    return (
      <div className="space-y-6">
        
        {currentView === 'dashboard' && (
          <ClientDashboard 
            clientId={user.id} 
            onViewTicket={handleViewTicket}
            onViewInvoice={handleViewInvoice}
          />
        )}
        
        {currentView === 'ticket' && selectedTicketId && (
          <TicketDetail 
            ticketId={selectedTicketId} 
            onBack={handleBackToTickets}
          />
        )}

        {currentView === 'invoice' && selectedInvoiceId && (
          <InvoiceDetail 
            invoiceId={selectedInvoiceId} 
            onBack={handleBackToInvoices}
          />
        )}
      </div>
    )
  }

  return null
}
