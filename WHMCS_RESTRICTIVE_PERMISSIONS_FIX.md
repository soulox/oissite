# WHMCS Restrictive API Permissions Fix

## 🚨 **Current Issue**
Your WHMCS API credential has very restrictive permissions. Even basic actions like `GetClients` are not allowed:

**`"Invalid Permissions: API action "getclients" is not allowed"`**

## 🔍 **Root Cause**
- **Very Restrictive Permissions**: Your API credential has minimal or no permissions
- **WHMCS Security Settings**: Your WHMCS installation may have strict API access controls
- **Incorrect Permission Setup**: The API credential may not have been configured properly

## 🛠️ **Solutions**

### **Solution 1: Fix API Credential Permissions (Recommended)**

1. **Log into your WHMCS admin panel**
2. **Go to Setup > Staff Management > API Credentials**
3. **Find your API credential** (the one you're using)
4. **Click "Edit" or "Manage"**
5. **In the permissions section, enable ALL of these**:
   - ✅ **Client Management**: Full access
   - ✅ **Product Management**: Full access
   - ✅ **Order Management**: Full access
   - ✅ **Invoice Management**: Full access
   - ✅ **Support Management**: Full access
   - ✅ **System Information**: Full access
   - ✅ **Module Management**: Full access
   - ✅ **Email Management**: Full access

### **Solution 2: Create New API Credential with Full Permissions**

1. **Go to Setup > Staff Management > API Credentials**
2. **Click "Add New API Credential"**
3. **Fill in the details**:
   - **Description**: "OISSite Full Access API"
   - **Permissions**: Select **ALL permissions** or **Full Access**
4. **Save and note the new credentials**
5. **Update your `.env.local`** with the new credentials

### **Solution 3: Check WHMCS API Settings**

1. **Go to Setup > General Settings > API**
2. **Ensure these are enabled**:
   - ✅ **Enable API**: Checked
   - ✅ **API Access**: Allowed
   - ✅ **API Rate Limiting**: Disabled or set to high limits
3. **Check for any IP restrictions**

### **Solution 4: Use Admin Account Instead of API Credential**

If API credentials are too restrictive, you can temporarily use an admin account:

1. **Create a dedicated admin account** for API access
2. **Give it full permissions**
3. **Use the admin username/password** instead of API credentials

## 🧪 **Test Different API Actions**

I've created a new test endpoint that tries multiple API actions to find which ones work:

1. **Go to**: `http://localhost:3002/test-whmcs`
2. **Click "Test API Permissions"**
3. **This will test 9 different API actions** and show which ones work

## 📋 **Common API Actions and Their Requirements**

| Action | Permission Required | Description |
|--------|-------------------|-------------|
| `GetModuleQueue` | Module Management | Basic system action |
| `GetCurrencies` | System Information | Currency information |
| `GetPaymentMethods` | System Information | Payment methods |
| `GetEmailTemplates` | Email Management | Email templates |
| `GetStaffOnline` | System Information | Staff status |
| `GetActivityLog` | System Information | Activity log |
| `GetClients` | Client Management | Client list |
| `GetProducts` | Product Management | Product list |
| `GetSystemStats` | System Information | System statistics |

## 🔧 **Updated Test Tools**

I've added a new test tool that will:
- **Test 9 different API actions**
- **Show which ones work**
- **Identify the exact permission issues**
- **Provide specific recommendations**

## ⚠️ **Important Notes**

- **Some WHMCS installations** have very strict API controls
- **API credentials** may need to be created by a super admin
- **Full permissions** are usually required for most integrations
- **For production**, use the minimum required permissions for security

## 🚀 **Next Steps**

1. **Try the "Test API Permissions" button** to see which actions work
2. **Check your API credential permissions** in WHMCS admin panel
3. **Enable all required permissions** or create a new credential
4. **If still failing**, contact your WHMCS administrator

## 🔗 **WHMCS Admin Panel Locations**

- **API Credentials**: Setup > Staff Management > API Credentials
- **API Settings**: Setup > General Settings > API
- **Staff Management**: Setup > Staff Management > Administrators

## 📞 **If All Else Fails**

If you can't get API permissions working:

1. **Contact your WHMCS administrator**
2. **Request full API access** for your integration
3. **Consider using a different authentication method**
4. **Check if your WHMCS installation has custom API restrictions**

---

**Note**: The new permission test tool will help identify exactly which API actions are allowed and which are blocked. This will give us a clear picture of what permissions need to be enabled.
