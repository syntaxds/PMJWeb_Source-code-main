import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ========================================
// RATE LIMITING (Memory-based, Simple)
// ========================================
const rateLimitMap = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const requests = rateLimitMap.get(ip);
  
  // Clean old requests outside the time window
  const recentRequests = requests.filter(timestamp => now - timestamp < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  
  return true;
}

// Clean up old entries every 30 minutes
setInterval(() => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  
  for (const [ip, requests] of rateLimitMap.entries()) {
    const recentRequests = requests.filter(timestamp => now - timestamp < windowMs);
    if (recentRequests.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, recentRequests);
    }
  }
}, 30 * 60 * 1000);

// ========================================
// INPUT VALIDATION
// ========================================
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input.trim().slice(0, 5000); // Max 5000 chars
}

function validateContactForm(data) {
  const errors = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  if (data.name && data.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Email validation
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email is required');
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters');
  }
  if (data.subject && data.subject.trim().length > 200) {
    errors.push('Subject must be less than 200 characters');
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  if (data.message && data.message.trim().length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }

  return errors;
}

// ========================================
// ANTI-SPAM: Honeypot Check
// ========================================
function isSpamBot(data) {
  // Honeypot field (should be empty if human)
  if (data.website || data.phone_number || data.company_url) {
    return true;
  }
  
  // Simple spam pattern detection
  const spamPatterns = [
    /viagra|cialis|porn|xxx|casino|lottery/i,
    /http.*http.*http/i, // Multiple links
    /\[url=/i, // BBCode links
  ];
  
  const fullText = `${data.subject} ${data.message}`.toLowerCase();
  return spamPatterns.some(pattern => pattern.test(fullText));
}

// ========================================
// NODEMAILER TRANSPORTER
// ========================================
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Important for production
    tls: {
      rejectUnauthorized: true,
    },
  });
}

// ========================================
// EMAIL TEMPLATE
// ========================================
function generateEmailHTML(data) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <tr>
            <td style="padding: 0; height: 160px; background: linear-gradient(135deg, #b71c1c 0%, #d32f2f 100%); position: relative;">
              <table width="100%" height="160" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" valign="middle" style="padding-left: 40px;">
                    <div style="padding: 12px 24px; border-radius: 4px;">
                      <span style="color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: 1px;">PMJ
                      <span style="color: #ffffff; font-size: 32px; font-weight: 300; letter-spacing: 1px; margin-left: 8px;">System</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 50px;">
              
              <!-- Greeting -->
              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.5;">
                Dear Team,
              </p>
              
              <!-- Main Message -->
              <p style="margin: 0 0 20px 0; color: #555555; font-size: 15px; line-height: 1.6;">
                A new inquiry has been received via the official website contact form. Please review the contact details and message below, and respond accordingly.
              </p>
              
              <!-- Contact Information Box -->
              <div style="background-color: #fef5f5; border-left: 4px solid #b71c1c; padding: 24px 20px; margin: 30px 0;">
                <p style="margin: 0 0 12px 0; color: #b71c1c; font-size: 15px; font-weight: 600;">
                  Informations:
                </p>
                <table cellpadding="0" cellspacing="0" style="width: 100%;">
                  <tr>
                    <td style="padding: 6px 0; color: #666666; font-size: 14px; width: 120px;">Name:</td>
                    <td style="padding: 6px 0; color: #333333; font-size: 14px; font-weight: 500;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666666; font-size: 14px;">Email:</td>
                    <td style="padding: 6px 0;">
                      <a href="mailto:${data.email}" style="color: #b71c1c; font-size: 14px; text-decoration: none; font-weight: 500;">${data.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666666; font-size: 14px;">Inquiry:</td>
                    <td style="padding: 6px 0; color: #333333; font-size: 14px; font-weight: 500;">${data.subject}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #666666; font-size: 14px;">Date:</td>
                    <td style="padding: 6px 0; color: #666666; font-size: 14px;">${new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' })}</td>
                  </tr>
                </table>
              </div>
              
              <!-- Message Content -->
              <p style="margin: 30px 0 12px 0; color: #333333; font-size: 15px; font-weight: 600;">
                Message:
              </p>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
                <p style="margin: 0; color: #444444; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <!-- Instructions -->
              <p style="margin: 0 0 16px 0; color: #555555; font-size: 14px; line-height: 1.6;">
                To respond to this inquiry, please reply directly to this email or contact <a href="mailto:${data.email}" style="color: #b71c1c; text-decoration: none; font-weight: 500;">${data.email}</a>.
              </p>
              
              <p style="margin: 0; color: #555555; font-size: 14px; line-height: 1.6;">
                Please ensure timely follow-up to maintain our service quality standards and support our business objectives.
              </p>
              
            </td>
          </tr>
          
          <!-- Info Box with Icon -->
          <tr>
            <td style="padding: 0 50px 40px 50px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 6px; padding: 20px;">
                <tr>
                  
                  <td style="padding-left: 16px;">
                    <p style="margin: 0 0 8px 0; color: #666666; font-size: 13px; line-height: 1.5;">
                      For questions regarding this inquiry, please contact:
                    </p>
                    <p style="margin: 0; color: #333333; font-size: 14px; font-weight: 500;">
                      Soft Dev
                    </p>
                    <p style="margin: 4px 0 0 0; color: #b71c1c; font-size: 14px; font-weight: 500;">
                      softdev@pmjsystem.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Divider -->
          <tr>
            <td style="padding: 0 50px;">
              <div style="border-top: 1px solid #e0e0e0; margin: 0 0 30px 0;"></div>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 0 50px 40px 50px;">
              <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5; font-style: italic; text-align: center;">
                This is an automated message from the PMJ System website contact form.<br>
                Please do not reply to this automated notification.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #2c2c2c; padding: 30px 50px; text-align: center;">
              <p style="margin: 0; color: #cccccc; font-size: 12px; line-height: 1.6;">
                © ${new Date().getFullYear()} All rights reserved.<br>
                PT. Padas Mustapa Jaya Mailing System
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function generateEmailText(data) {
  return `
NEW CONTACT FORM SUBMISSION
===========================

CONTACT INFORMATION
-------------------
Name:    ${data.name}
Email:   ${data.email}
Subject: ${data.subject}
Date:    ${new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}

MESSAGE
-------
${data.message}

---
This email was sent from your website contact form.
To reply, contact: ${data.email}
  `.trim();
}

// ========================================
// MAIN API HANDLER
// ========================================
export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Rate limiting check
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Honeypot anti-spam check
    if (isSpamBot(body)) {
      // Silently reject spam (pretend success to avoid bot detection)
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message sent successfully' 
        },
        { status: 200 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      subject: sanitizeInput(body.subject),
      message: sanitizeInput(body.message),
    };

    // Validate inputs
    const validationErrors = validateContactForm(sanitizedData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validationErrors 
        },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration missing');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error. Please contact administrator.' 
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify SMTP connection (optional but recommended for production)
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP connection failed:', error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service temporarily unavailable. Please try again later.' 
        },
        { status: 503 }
      );
    }

    // Email options
    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || 'Website Contact Form',
        address: process.env.SMTP_USER, // Must match SMTP domain
      },
      to: process.env.SMTP_TO_EMAIL,
      bcc: process.env.SMTP_BCC_EMAIL, // Manager email as BCC
      replyTo: {
        name: sanitizedData.name,
        address: sanitizedData.email,
      },
      subject: `[NEW INQUIRY]: ${sanitizedData.subject}`,
      text: generateEmailText(sanitizedData),
      html: generateEmailHTML(sanitizedData),
      // Email headers for better deliverability
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Next.js Contact Form',
      },
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    // Success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully. We will contact you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    // Log error server-side (don't expose to client)
    console.error('Contact form error:', error);

    // Generic error response (safe for production)
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while sending your message. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { 
      success: false, 
      message: 'Method not allowed' 
    },
    { status: 405 }
  );
}