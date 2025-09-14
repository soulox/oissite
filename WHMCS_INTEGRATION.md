# WHMCS Integration Guide

This document provides a comprehensive guide for integrating your OISSite Next.js application with WHMCS (Web Host Manager Complete Solution).

## 🚀 Overview

The WHMCS integration provides:
- **Client Management**: Create, update, and manage client accounts
- **Order Processing**: Create and manage hosting orders
- **Product Management**: Fetch and display WHMCS products
- **Authentication**: Validate client credentials
- **Webhook Support**: Handle real-time events from WHMCS
- **Client Portal**: Direct access to WHMCS client area

## ✅ Compatibility

This integration is compatible with:
- **WHMCS 7.10** (Primary support)
- **WHMCS 8.0+** (Full support)
- **WHMCS 9.0+** (Full support)

## 📋 Prerequisites

1. **WHMCS Installation**: A working WHMCS installation (version 7.10+)
2. **API Access**: WHMCS API credentials configured
3. **SSL Certificate**: HTTPS enabled for secure API communication
4. **Webhook Support**: WHMCS webhook functionality enabled (WHMCS 8.0+)

## ⚙️ Configuration

### 1. WHMCS API Setup

#### For WHMCS 7.10:
In your WHMCS admin panel:

1. Go to **Setup > Staff Management > Administrators**
2. Create a new administrator account or use existing one
3. Note down the following credentials:
   - **Username** (for API authentication)
   - **Password** (for API authentication)

#### For WHMCS 8.0+:
In your WHMCS admin panel:

1. Go to **Setup > Staff Management > API Credentials**
2. Create a new API credential with the following permissions:
   - **Client Management**: Full access
   - **Order Management**: Full access
   - **Product Management**: Read access
   - **Invoice Management**: Read access
   - **Support Management**: Read access

3. Note down the following credentials:
   - **API Identifier**
   - **API Secret**
   - **API Access Key**

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# WHMCS Integration
WHMCS_URL="https://your-whmcs-domain.com"
WHMCS_VERSION="7.10"  # Set to your WHMCS version
WHMCS_API_IDENTIFIER="your-username-or-identifier"
WHMCS_API_SECRET="your-password-or-secret"

# For WHMCS 8.0+ only:
WHMCS_API_ACCESS_KEY="your-api-access-key"
WHMCS_WEBHOOK_SECRET="your-webhook-secret"

# WHMCS Client Portal
WHMCS_CLIENT_PORTAL_URL="https://your-whmcs-domain.com/clientarea.php"
WHMCS_BILLING_URL="https://your-whmcs-domain.com/billing.php"

# WHMCS Product IDs (for order processing)
WHMCS_SHARED_HOSTING_PRODUCT_ID="1"
WHMCS_VPS_HOSTING_PRODUCT_ID="2"
WHMCS_CLOUD_HOSTING_PRODUCT_ID="3"
WHMCS_SSL_PRODUCT_ID="4"
WHMCS_EMAIL_PRODUCT_ID="5"
WHMCS_BACKUP_PRODUCT_ID="6"
```

### 3. Webhook Configuration (WHMCS 8.0+ only)

**Note**: Webhooks are only available in WHMCS 8.0 and above. For WHMCS 7.10, you can use cron jobs or manual polling for updates.

In your WHMCS admin panel:

1. Go to **Setup > Automation Settings > Webhooks**
2. Create a new webhook with the following settings:
   - **URL**: `https://your-domain.com/api/whmcs/webhook`
   - **Events**: Select the events you want to track
   - **Secret**: Use the same secret as in your environment variables

## 🔧 WHMCS 7.10 Specific Notes

### Authentication Differences
- WHMCS 7.10 uses `username` and `password` for API authentication
- WHMCS 8.0+ uses `identifier`, `secret`, and `accesskey`
- The integration automatically detects your WHMCS version and uses the appropriate authentication method

### API Limitations in WHMCS 7.10
- **No Webhooks**: Webhook functionality is not available in WHMCS 7.10
- **Limited API Actions**: Some newer API actions may not be available
- **Authentication**: Uses administrator credentials instead of dedicated API credentials

### Recommended Setup for WHMCS 7.10
1. Create a dedicated administrator account for API access
2. Use strong, unique credentials for this account
3. Limit the administrator's permissions to only what's needed for API access
4. Consider upgrading to WHMCS 8.0+ for full webhook support

## 🔧 API Endpoints

The integration provides the following API endpoints:

### Client Management
- `GET /api/whmcs/clients?clientId={id}` - Get client details
- `POST /api/whmcs/clients` - Create new client
- `PUT /api/whmcs/clients?clientId={id}` - Update client

### Order Management
- `GET /api/whmcs/orders?orderId={id}` - Get order details
- `POST /api/whmcs/orders` - Create new order

### Product Management
- `GET /api/whmcs/products` - Get all products
- `GET /api/whmcs/products?productId={id}` - Get specific product

### Authentication
- `POST /api/whmcs/auth` - Validate login credentials

### Webhooks
- `POST /api/whmcs/webhook` - Handle WHMCS webhooks
- `GET /api/whmcs/webhook` - Webhook health check

## 🎯 Usage Examples

### 1. Creating a Client

```typescript
import { useWhmcsClient } from '@/hooks/useWhmcs'

function CreateClientForm() {
  const { createClient, loading } = useWhmcsClient()

  const handleSubmit = async (clientData) => {
    try {
      const result = await createClient({
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@example.com',
        password: 'securepassword',
        companyname: 'Example Corp',
        address1: '123 Main St',
        city: 'New York',
        state: 'NY',
        postcode: '10001',
        country: 'US',
        phonenumber: '+1-555-123-4567',
      })
      console.log('Client created:', result.clientid)
    } catch (error) {
      console.error('Error creating client:', error)
    }
  }

  return (
    // Your form JSX here
  )
}
```

### 2. Creating an Order

```typescript
import { useWhmcsOrders } from '@/hooks/useWhmcs'

function CreateOrderForm() {
  const { createOrder, loading } = useWhmcsOrders()

  const handleSubmit = async (orderData) => {
    try {
      const result = await createOrder({
        clientid: '123',
        pid: '1', // Product ID
        billingcycle: 'annually',
        domain: 'example.com',
        paymentmethod: 'stripe',
      })
      console.log('Order created:', result.orderid)
    } catch (error) {
      console.error('Error creating order:', error)
    }
  }

  return (
    // Your form JSX here
  )
}
```

### 3. Fetching Products

```typescript
import { useWhmcsProducts } from '@/hooks/useWhmcs'

function ProductsList() {
  const { products, fetchProducts, loading } = useWhmcsProducts()

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
```

## 🔒 Security Considerations

1. **API Credentials**: Store API credentials securely in environment variables
2. **HTTPS**: Always use HTTPS for API communication
3. **Webhook Verification**: Verify webhook signatures to prevent unauthorized requests
4. **Rate Limiting**: Implement rate limiting for API endpoints
5. **Input Validation**: Validate all input data using Zod schemas

## 🧪 Testing

### 1. API Testing

Test the API endpoints using tools like Postman or curl:

```bash
# Test client creation
curl -X POST http://localhost:3000/api/whmcs/clients \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Test",
    "lastname": "User",
    "email": "test@example.com",
    "password": "testpassword"
  }'

# Test product fetching
curl http://localhost:3000/api/whmcs/products
```

### 2. Webhook Testing

Test webhooks using tools like ngrok for local development:

```bash
# Install ngrok
npm install -g ngrok

# Expose local server
ngrok http 3000

# Use the ngrok URL in your WHMCS webhook configuration
```

## 🚀 Deployment

### 1. Environment Variables

Set the environment variables in your production environment:

```bash
# Vercel
vercel env add WHMCS_URL
vercel env add WHMCS_API_IDENTIFIER
vercel env add WHMCS_API_SECRET
vercel env add WHMCS_API_ACCESS_KEY
```

### 2. Webhook URL

Update your WHMCS webhook URL to point to your production domain:

```
https://your-production-domain.com/api/whmcs/webhook
```

## 📊 Monitoring

### 1. Logging

The integration includes comprehensive logging for:
- API requests and responses
- Webhook events
- Error handling
- Performance metrics

### 2. Health Checks

Monitor the webhook endpoint health:

```bash
curl https://your-domain.com/api/whmcs/webhook
```

## 🔧 Troubleshooting

### Common Issues

1. **API Authentication Failed**
   - Verify API credentials are correct
   - Check WHMCS API permissions
   - Ensure HTTPS is enabled

2. **Webhook Not Receiving Events**
   - Verify webhook URL is accessible
   - Check webhook secret configuration
   - Review WHMCS webhook logs

3. **Order Creation Failed**
   - Verify product IDs exist in WHMCS
   - Check client ID is valid
   - Review order parameters

### Debug Mode

Enable debug mode by setting:

```env
NODE_ENV=development
```

This will provide detailed logging for troubleshooting.

## 📚 Additional Resources

- [WHMCS API Documentation](https://developers.whmcs.com/api/)
- [WHMCS Webhook Documentation](https://developers.whmcs.com/webhooks/)
- [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)

## 🤝 Support

For support with the WHMCS integration:

1. Check the troubleshooting section above
2. Review the WHMCS API documentation
3. Contact your WHMCS support team
4. Create an issue in the project repository

---

**Note**: This integration is designed to work with WHMCS version 8.0 and above. For older versions, some features may not be available.
