# Contact Form Setup Guide

## Overview
The contact form has been configured to securely send emails to `flolrowe@gmail.com` without exposing your email address on the frontend. This uses Azure Static Web Apps API functions with Azure Communication Services.

## Security Features Implemented

### 1. Email Address Protection
- Your email (`flolrowe@gmail.com`) is stored only in the backend Azure Function
- Never exposed in frontend code, environment variables, or client-side requests
- All email routing happens server-side

### 2. Input Validation & Sanitization
- Required field validation (name, email, subject, message)
- Email format validation using regex
- HTML tag stripping to prevent XSS attacks
- Input length limits and sanitization

### 3. Rate Limiting & Security Headers
- Basic rate limiting implementation
- CORS headers properly configured
- IP address and user agent logging for security monitoring
- Structured error handling without exposing internal details

## Required Azure Setup

### 1. Azure Communication Services
1. Create an Azure Communication Services resource
2. Get the connection string from Azure portal
3. Configure a verified sender domain (recommended: `noreply@overstanding.live`)

### 2. Environment Variables
Set these in your Azure Static Web Apps configuration:

```
COMMUNICATION_SERVICES_CONNECTION_STRING=endpoint=https://your-resource.communication.azure.com/;accesskey=your-access-key
SENDER_EMAIL=noreply@overstanding.live
```

### 3. Domain Verification (Optional but Recommended)
- Verify `overstanding.live` domain in Azure Communication Services
- This allows using `noreply@overstanding.live` as sender
- Improves email deliverability and reduces spam filtering

## Files Created

### Backend API
- `/api/contact.js` - Azure Function for handling form submissions
- `/api/function.json` - Function configuration
- `/api/package.json` - Dependencies for Azure Communication Services

### Frontend Updates
- Updated `Contact.tsx` to use the secure API endpoint
- Added proper error handling and user feedback

### Configuration
- `.env.example` - Template for required environment variables

## Testing

1. **Local Development**: 
   - Install Azure Functions Core Tools
   - Run `func start` in the `/api` directory
   - Test form submission locally

2. **Production**: 
   - Deploy to Azure Static Web Apps
   - Configure environment variables in Azure portal
   - Test form submission on live site

## Email Format

The system sends formatted HTML emails with:
- Contact form data (name, email, subject, message)
- Security information (IP address, timestamp, user agent)
- Professional styling with your brand colors
- Direct reply functionality (reply-to sender's email)

## Maintenance

- Monitor Azure Communication Services usage and costs
- Review logs for any security issues or spam attempts
- Update rate limiting rules if needed
- Consider adding CAPTCHA for additional spam protection

## Cost Considerations

Azure Communication Services pricing:
- Email: ~$0.25 per 1,000 emails
- Very cost-effective for contact form usage
- No monthly minimums or setup fees

This implementation provides enterprise-grade security while maintaining simplicity and cost-effectiveness.
