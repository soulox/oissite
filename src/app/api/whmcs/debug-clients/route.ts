import { NextResponse } from 'next/server'
import { whmcsClient } from '@/lib/whmcs/client'

// GET /api/whmcs/debug-clients - Get all clients for debugging
export async function GET() {
  try {
    console.log('Starting to load all clients for debug page')
    
    const allClients: any[] = []
    let offset = 0
    const batchSize = 25 // Use smaller batches to avoid UTF-8 encoding issues
    let hasMore = true
    let totalLoaded = 0
    let consecutiveErrors = 0

    while (hasMore && totalLoaded < 1000 && offset < 800) { // Limit to prevent infinite loops and reasonable upper bound
      try {
        console.log(`Loading clients batch: offset=${offset}, batchSize=${batchSize}`)
        
        const clientsResponse = await whmcsClient.makeRequest('GetClients', {
          limitstart: offset,
          limitnum: batchSize,
          // Remove status filter to get all clients for debugging
        })
        
        let clients: any[] = [];
        if (clientsResponse.clients && clientsResponse.clients.client) {
          clients = Array.isArray(clientsResponse.clients.client) 
            ? clientsResponse.clients.client 
            : [clientsResponse.clients.client];
        } else if (clientsResponse.data && clientsResponse.data.clients && clientsResponse.data.clients.client) {
          clients = Array.isArray(clientsResponse.data.clients.client)
            ? clientsResponse.data.clients.client
            : [clientsResponse.data.clients.client];
        }

        if (clients && clients.length > 0) {
          allClients.push(...clients)
          totalLoaded += clients.length
          consecutiveErrors = 0 // Reset error counter on success
          console.log(`Loaded ${clients.length} clients (total: ${totalLoaded})`)
          
          // Check if we got fewer clients than requested, meaning we've reached the end
          if (clients.length < batchSize) {
            hasMore = false
          } else {
            offset += batchSize
          }
        } else {
          hasMore = false
        }
      } catch (error) {
        console.log(`Error loading clients at offset ${offset}:`, error)
        
        consecutiveErrors++
        
        // If we get UTF-8 encoding error, skip the problematic section
        if (error instanceof Error && (error.message.includes('UTF-8') || error.message.includes('malformed'))) {
          console.log(`UTF-8 encoding error detected at offset ${offset}. Skipping to next section...`)
          
          // Skip ahead by a larger offset to bypass corrupted data
          const skipOffset = 50
          offset += skipOffset
          console.log(`Skipping ahead to offset ${offset} to bypass corrupted data`)
          
          // If we have too many consecutive errors, stop
          if (consecutiveErrors > 5) {
            console.log(`Too many consecutive errors (${consecutiveErrors}), stopping at offset ${offset}`)
            hasMore = false
          } else {
            // Continue with the loop to try the next section
            continue
          }
        } else {
          hasMore = false
        }
      }
    }

    console.log(`Total clients loaded: ${totalLoaded}`)

    // Sort clients by ID for easier browsing
    allClients.sort((a, b) => parseInt(a.id) - parseInt(b.id))

    return NextResponse.json({
      success: true,
      clients: allClients,
      totalLoaded: totalLoaded,
      message: `Successfully loaded ${totalLoaded} clients`
    })
  } catch (error) {
    console.error('Error loading clients for debug:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      clients: [],
      totalLoaded: 0
    }, { status: 500 })
  }
}
