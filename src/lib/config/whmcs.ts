/**
 * WHMCS Configuration
 * 
 * This file contains the configuration for WHMCS integration.
 * Compatible with WHMCS 7.10 and above.
 * 
 * Make sure to set the following environment variables:
 * 
 * Required:
 * - WHMCS_URL: Your WHMCS installation URL
 * - WHMCS_API_IDENTIFIER: API identifier from WHMCS admin
 * - WHMCS_API_SECRET: API secret from WHMCS admin
 * 
 * Optional (for WHMCS 8.0+):
 * - WHMCS_API_ACCESS_KEY: API access key from WHMCS admin
 * - WHMCS_WEBHOOK_SECRET: Secret for webhook verification
 * - WHMCS_CLIENT_PORTAL_URL: Custom client portal URL
 * - WHMCS_BILLING_URL: Custom billing URL
 * - WHMCS_VERSION: WHMCS version (defaults to 7.10)
 */

export const whmcsConfig = {
  // Base WHMCS URL
  url: process.env.WHMCS_URL || '',
  
  // WHMCS Version
  version: process.env.WHMCS_VERSION || '7.10.2',
  
  // API Configuration
  api: {
    identifier: process.env.WHMCS_API_IDENTIFIER || '',
    secret: process.env.WHMCS_API_SECRET || '',
    accessKey: process.env.WHMCS_API_ACCESS_KEY || '',
    webhookSecret: process.env.WHMCS_WEBHOOK_SECRET || '',
  },
  
  // Client Portal URLs
  clientPortal: {
    url: process.env.WHMCS_CLIENT_PORTAL_URL || `${process.env.WHMCS_URL}/clientarea.php`,
    billingUrl: process.env.WHMCS_BILLING_URL || `${process.env.WHMCS_URL}/billing.php`,
  },
  
  // Product IDs for order processing
  products: {
    sharedHosting: process.env.WHMCS_SHARED_HOSTING_PRODUCT_ID || '1',
    vpsHosting: process.env.WHMCS_VPS_HOSTING_PRODUCT_ID || '2',
    cloudHosting: process.env.WHMCS_CLOUD_HOSTING_PRODUCT_ID || '3',
    ssl: process.env.WHMCS_SSL_PRODUCT_ID || '4',
    email: process.env.WHMCS_EMAIL_PRODUCT_ID || '5',
    backup: process.env.WHMCS_BACKUP_PRODUCT_ID || '6',
  },
  
  // API Endpoints
  endpoints: {
    api: '/includes/api.php',
    webhook: '/webhook',
  },
  
  // Default settings
  defaults: {
    currency: 'USD',
    language: 'english',
    timezone: 'UTC',
  },
} as const

// Validation function
export function validateWhmcsConfig(): boolean {
  const required = [
    whmcsConfig.url,
    whmcsConfig.api.identifier,
    whmcsConfig.api.secret,
  ]
  
  // For WHMCS 8.0+, access key is also required
  if (whmcsConfig.version.startsWith('8.') || whmcsConfig.version.startsWith('9.')) {
    required.push(whmcsConfig.api.accessKey)
  }
  
  return required.every(value => value && value.length > 0)
}

// Get full API URL
export function getWhmcsApiUrl(): string {
  return `${whmcsConfig.url}${whmcsConfig.endpoints.api}`
}

// Get webhook URL
export function getWhmcsWebhookUrl(): string {
  return `${whmcsConfig.url}${whmcsConfig.endpoints.webhook}`
}
