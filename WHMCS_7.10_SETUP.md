# WHMCS 7.10 Setup Guide

This guide provides specific instructions for setting up the OISSite integration with WHMCS version 7.10.

## 🔧 Environment Configuration

Create a `.env.local` file in your project root with the following variables:

```env
# WHMCS 7.10.2 Integration
WHMCS_URL="https://your-whmcs-domain.com"
WHMCS_VERSION="7.10.2"
WHMCS_API_IDENTIFIER="your-api-identifier"
WHMCS_API_SECRET="your-api-secret"

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

## 🔐 API Authentication Setup

### Step 1: Create API Credentials

1. Log into your WHMCS admin panel
2. Go to **Setup > Staff Management > API Credentials**
3. Click **Add New API Credential**
4. Fill in the required details:
   - **Description**: OISSite Integration
   - **Permissions**: Select appropriate permissions for your needs
   - **IP Restrictions**: Leave blank or add your server IP
5. Note down the generated credentials:
   - **API Identifier**
   - **API Secret**

### Step 2: Configure Permissions

When creating the API credential, ensure it has the following permissions:
- **Client Management**: Full access
- **Order Management**: Full access
- **Product Management**: Read access
- **Invoice Management**: Read access
- **Support Management**: Read access

### Step 3: Test API Access

You can test the API access using the following curl command:

```bash
curl -X POST https://your-whmcs-domain.com/includes/api.php \
  -d "action=GetSystemStats" \
  -d "identifier=your-api-identifier" \
  -d "secret=your-api-secret" \
  -d "responsetype=json"
```

## 📋 Product ID Configuration

To find your product IDs:

1. Go to **Setup > Products/Services > Products/Services**
2. Note down the **ID** column for each product you want to integrate
3. Update the environment variables accordingly

## 🚫 Limitations in WHMCS 7.10

### Webhooks Not Available
- Webhooks are only available in WHMCS 8.0+
- For real-time updates, consider:
  - Using cron jobs to poll for changes
  - Manual refresh of data
  - Upgrading to WHMCS 8.0+

### Limited API Actions
Some newer API actions may not be available in WHMCS 7.10:
- Advanced webhook management
- Some newer product features
- Enhanced security features

## 🔄 Alternative Update Methods

Since webhooks are not available, you can implement alternative update methods:

### 1. Cron Job Polling
Set up a cron job to periodically check for updates:

```bash
# Run every 5 minutes
*/5 * * * * curl -X POST https://your-domain.com/api/whmcs/sync
```

### 2. Manual Refresh
Implement a manual refresh button in your client portal:

```typescript
const refreshData = async () => {
  await fetch('/api/whmcs/sync', { method: 'POST' })
  // Refresh the page or update state
}
```

### 3. Real-time Updates
Consider upgrading to WHMCS 8.0+ for full webhook support.

## 🧪 Testing the Integration

### 1. Test Client Creation
```bash
curl -X POST http://localhost:3000/api/whmcs/clients \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Test",
    "lastname": "User",
    "email": "test@example.com",
    "password": "testpassword"
  }'
```

### 2. Test Product Fetching
```bash
curl http://localhost:3000/api/whmcs/products
```

### 3. Test Order Creation
```bash
curl -X POST http://localhost:3000/api/whmcs/orders \
  -H "Content-Type: application/json" \
  -d '{
    "clientid": "1",
    "pid": "1",
    "billingcycle": "monthly",
    "paymentmethod": "stripe"
  }'
```

## 🔒 Security Best Practices

1. **Dedicated API Account**: Use a dedicated administrator account for API access
2. **Strong Passwords**: Use strong, unique passwords for the API account
3. **Limited Permissions**: Only grant necessary permissions to the API account
4. **HTTPS**: Always use HTTPS for API communication
5. **Regular Updates**: Keep WHMCS updated to the latest 7.10.x version

## 🚀 Upgrade Path

Consider upgrading to WHMCS 8.0+ for:
- Full webhook support
- Enhanced API features
- Better security
- Improved performance
- Latest features and bug fixes

## 📞 Support

For WHMCS 7.10 specific issues:
1. Check the WHMCS 7.10 documentation
2. Contact WHMCS support
3. Review the integration logs for error details
4. Test API connectivity using the curl commands above

---

**Note**: This integration is optimized for WHMCS 7.10 but will also work with newer versions. For the best experience, consider upgrading to WHMCS 8.0+ when possible.
