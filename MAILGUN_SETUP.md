# Mailgun Setup for OISSite Contact Form

This guide will help you set up Mailgun for the OISSite contact form functionality.

## Prerequisites

1. A Mailgun account (sign up at [mailgun.com](https://www.mailgun.com))
2. A verified domain in Mailgun
3. Access to your domain's DNS settings

## Step 1: Create a Mailgun Account

1. Go to [mailgun.com](https://www.mailgun.com) and sign up for an account
2. Choose the plan that fits your needs (they offer a free tier with 5,000 emails/month)
3. Verify your email address

## Step 2: Add and Verify Your Domain

1. Log into your Mailgun dashboard
2. Go to "Sending" → "Domains"
3. Click "Add New Domain"
4. Enter your domain (e.g., `mg.oissite.com` or `mail.oissite.com`)
5. Choose your region (US or EU)
6. Click "Add Domain"

## Step 3: Configure DNS Records

Mailgun will provide you with DNS records to add to your domain. You need to add:

### Required Records:
- **TXT Record** (for domain verification)
- **CNAME Record** (for tracking)
- **MX Records** (for receiving emails)
- **TXT Record** (for SPF)

### Example DNS Records:
```
Type: TXT
Name: mg.oissite.com
Value: v=spf1 include:mailgun.org ~all

Type: CNAME
Name: email.mg.oissite.com
Value: mailgun.org

Type: MX
Name: mg.oissite.com
Value: mxa.mailgun.org (Priority: 10)
Value: mxb.mailgun.org (Priority: 10)

Type: TXT
Name: mg.oissite.com
Value: [verification code provided by Mailgun]
```

## Step 4: Get Your API Credentials

1. In your Mailgun dashboard, go to "Settings" → "API Keys"
2. Copy your **Private API Key** (starts with `key-`)
3. Note your **Domain** (e.g., `mg.oissite.com`)

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# Mailgun Configuration
MAILGUN_API_KEY=key-your-api-key-here
MAILGUN_DOMAIN=mg.oissite.com
MAILGUN_FROM_EMAIL=noreply@oissite.com
MAILGUN_TO_EMAIL=support@oissite.com
```

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/contact`
3. Fill out and submit the contact form
4. Check your email for the message and auto-reply

## Step 7: Production Setup

For production deployment:

1. Add the environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Ensure your domain is properly verified in Mailgun
3. Test the contact form in production
4. Monitor your Mailgun dashboard for delivery statistics

## Features Included

### Contact Form Features:
- ✅ **Form Validation** - Client and server-side validation
- ✅ **Email Delivery** - Messages sent to your support email
- ✅ **Auto-Reply** - Automatic confirmation email to customers
- ✅ **HTML Templates** - Professional email templates
- ✅ **Error Handling** - Proper error messages and logging
- ✅ **Security** - Input validation and sanitization

### Email Templates:
- **Support Email** - Formatted message with customer details
- **Auto-Reply** - Professional confirmation with next steps
- **Responsive Design** - Works on all email clients

## Troubleshooting

### Common Issues:

1. **"Domain not verified" error**
   - Ensure all DNS records are properly configured
   - Wait up to 24 hours for DNS propagation
   - Check Mailgun dashboard for verification status

2. **"Invalid API key" error**
   - Verify your API key is correct
   - Ensure you're using the Private API key, not Public

3. **Emails not being delivered**
   - Check your spam folder
   - Verify the "to" email address is correct
   - Check Mailgun logs for delivery status

4. **CORS errors in development**
   - Ensure you're using the correct API endpoint
   - Check that the API route is properly configured

### Testing Commands:

```bash
# Test the API endpoint directly
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message"
  }'
```

## Security Considerations

1. **Rate Limiting** - Consider implementing rate limiting for the contact form
2. **Input Validation** - All inputs are validated using Zod schemas
3. **Environment Variables** - Never commit API keys to version control
4. **HTTPS** - Always use HTTPS in production
5. **Spam Protection** - Consider adding reCAPTCHA for additional protection

## Support

If you encounter any issues:

1. Check the Mailgun documentation: [mailgun.com/docs](https://www.mailgun.com/docs)
2. Review the Mailgun status page: [status.mailgun.com](https://status.mailgun.com)
3. Contact Mailgun support through their dashboard

## Cost Considerations

- **Free Tier**: 5,000 emails/month for 3 months
- **Foundation**: $35/month for 50,000 emails
- **Growth**: $80/month for 100,000 emails
- **Scale**: Custom pricing for higher volumes

For most websites, the free tier or Foundation plan should be sufficient.
