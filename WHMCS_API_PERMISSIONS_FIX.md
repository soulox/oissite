# WHMCS API Permissions Fix

## 🚨 **Current Issue**
Your WHMCS API credentials don't have permission to use the `GetSystemStats` action. The error message shows:

**`"Invalid Permissions: API action "getsystemstats" is not allowed"`**

## 🔍 **Root Cause**
- **API Permissions**: Your API credential doesn't have the required permissions for certain API actions
- **Action Restrictions**: Some WHMCS installations restrict which API actions can be used

## 🛠️ **Solutions**

### **Solution 1: Update API Credential Permissions (Recommended)**

1. **Log into your WHMCS admin panel**
2. **Go to Setup > Staff Management > API Credentials**
3. **Find your API credential** (the one you're using)
4. **Click "Edit" or "Manage"**
5. **Check the permissions section** and ensure these are enabled:
   - ✅ **Client Management**: Full access
   - ✅ **System Information**: Read access
   - ✅ **Product Management**: Read access
   - ✅ **Order Management**: Read access

### **Solution 2: Use Different API Actions**

I've updated the test endpoints to use `GetClients` instead of `GetSystemStats` because:
- `GetClients` is more commonly allowed
- It's a basic client management action
- It's less likely to be restricted

### **Solution 3: Create New API Credential with Full Permissions**

1. **Go to Setup > Staff Management > API Credentials**
2. **Click "Add New API Credential"**
3. **Set Description**: "OISSite Full Access"
4. **Enable ALL permissions**:
   - ✅ Client Management (Full)
   - ✅ Product Management (Full)
   - ✅ Order Management (Full)
   - ✅ Invoice Management (Full)
   - ✅ Support Management (Full)
   - ✅ System Information (Full)
5. **Save and note the new credentials**

## 🧪 **Test the Fix**

1. **Update your API credential permissions** in WHMCS admin panel
2. **Or create a new API credential** with full permissions
3. **Update your `.env.local`** with the new credentials if needed
4. **Test again** at `http://localhost:3002/test-whmcs`

## 📋 **Common API Actions and Their Permissions**

| Action | Required Permission | Description |
|--------|-------------------|-------------|
| `GetClients` | Client Management | Get list of clients |
| `GetProducts` | Product Management | Get list of products |
| `GetSystemStats` | System Information | Get system statistics |
| `CreateClient` | Client Management | Create new client |
| `AddOrder` | Order Management | Create new order |

## 🔧 **Updated Test Actions**

I've updated the test endpoints to use:
- **`GetClients`** instead of `GetSystemStats` (more likely to be allowed)
- **Client creation test** (should work if client management is enabled)

## ⚠️ **Important Notes**

- **Some WHMCS installations** have strict API permission controls
- **System Information** permissions are often restricted
- **Client Management** permissions are usually more permissive
- **For production**, use the minimum required permissions for security

## 🚀 **Next Steps**

1. **Check your API credential permissions** in WHMCS admin panel
2. **Enable the required permissions** or create a new credential
3. **Test the connection** again
4. **If still failing**, try creating a new API credential with full permissions

## 🔗 **WHMCS Admin Panel Locations**

- **API Credentials**: Setup > Staff Management > API Credentials
- **API Settings**: Setup > General Settings > API
- **Staff Permissions**: Setup > Staff Management > Administrators

---

**Note**: The updated test endpoints should now work better with standard API permissions. Let me know what happens when you test again!
