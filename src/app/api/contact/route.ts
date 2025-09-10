import { NextRequest, NextResponse } from 'next/server'
import Mailgun from 'mailgun.js'
import FormData from 'form-data'
import { contactSchema } from '@/lib/validations'

// Initialize Mailgun
const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY!,
  url: 'https://api.mailgun.net'
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Get environment variables
    const domain = process.env.MAILGUN_DOMAIN
    const fromEmail = process.env.MAILGUN_FROM_EMAIL || 'noreply@oissite.com'
    const toEmail = process.env.MAILGUN_TO_EMAIL || 'support@oissite.com'
    
    if (!domain) {
      throw new Error('MAILGUN_DOMAIN environment variable is not set')
    }
    
    // Prepare email content
    const subject = `Contact Form: ${validatedData.subject}`
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9;">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 5px; border-left: 4px solid #2196F3;">
            <p style="margin: 0; color: #1976D2;">
              <strong>Response Time:</strong> We typically respond within 2 hours during business hours.
            </p>
          </div>
        </div>
        
        <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">This email was sent from the OISSite contact form</p>
          <p style="margin: 5px 0 0 0;">© 2024 OISSite. All rights reserved.</p>
        </div>
      </div>
    `
    
    const textContent = `
New Contact Form Submission

Contact Details:
- Name: ${validatedData.name}
- Email: ${validatedData.email}
- Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
This email was sent from the OISSite contact form
Response Time: We typically respond within 2 hours during business hours.
    `
    
    // Send email using Mailgun
    const emailData = {
      from: `${validatedData.name} <${fromEmail}>`,
      to: [toEmail],
      subject: subject,
      text: textContent,
      html: htmlContent,
      'h:Reply-To': validatedData.email,
      'h:X-Mailgun-Variables': JSON.stringify({
        formType: 'contact',
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get('user-agent') || 'Unknown'
      })
    }
    
    const response = await mg.messages.create(domain, emailData)
    
    // Send auto-reply to the customer
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Contacting OISSite!</h1>
        </div>
        
        <div style="padding: 20px;">
          <p>Dear ${validatedData.name},</p>
          
          <p>Thank you for reaching out to us! We've received your message regarding <strong>${validatedData.subject}</strong> and our support team will get back to you within 2 hours.</p>
          
          <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1976D2;">What happens next?</h3>
            <ul style="color: #333;">
              <li>Our support team will review your message</li>
              <li>We'll respond within 2 hours during business hours</li>
              <li>If urgent, you can call us at +1 (555) 123-4567</li>
            </ul>
          </div>
          
          <p>In the meantime, you can:</p>
          <ul>
            <li>Visit our <a href="https://oissite.com/support/help" style="color: #667eea;">Help Center</a> for quick answers</li>
            <li>Check our <a href="https://oissite.com/support/status" style="color: #667eea;">Service Status</a> page</li>
            <li>Join our <a href="https://oissite.com/community" style="color: #667eea;">Community Forum</a></li>
          </ul>
          
          <p>Best regards,<br>
          The OISSite Support Team</p>
        </div>
        
        <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">© 2024 OISSite. All rights reserved.</p>
          <p style="margin: 5px 0 0 0;">This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `
    
    const autoReplyText = `
Thank You for Contacting OISSite!

Dear ${validatedData.name},

Thank you for reaching out to us! We've received your message regarding ${validatedData.subject} and our support team will get back to you within 2 hours.

What happens next?
- Our support team will review your message
- We'll respond within 2 hours during business hours
- If urgent, you can call us at +1 (555) 123-4567

In the meantime, you can:
- Visit our Help Center: https://oissite.com/support/help
- Check our Service Status: https://oissite.com/support/status
- Join our Community Forum: https://oissite.com/community

Best regards,
The OISSite Support Team

---
© 2024 OISSite. All rights reserved.
This is an automated response. Please do not reply to this email.
    `
    
    // Send auto-reply
    await mg.messages.create(domain, {
      from: `OISSite Support <${fromEmail}>`,
      to: [validatedData.email],
      subject: 'Thank you for contacting OISSite - We\'ll be in touch soon!',
      text: autoReplyText,
      html: autoReplyHtml
    })
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        messageId: response.id 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send message. Please try again.',
          error: error.message 
        },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again.' 
      },
      { status: 500 }
    )
  }
}
