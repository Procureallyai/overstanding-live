const { EmailClient } = require("@azure/communication-email");

module.exports = async function (context, req) {
    // Set CORS headers
    context.res = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
    };

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
        context.res.status = 200;
        return;
    }

    // Only allow POST requests
    if (req.method !== "POST") {
        context.res.status = 405;
        context.res.body = { error: "Method not allowed" };
        return;
    }

    try {
        // Validate required fields
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
            context.res.status = 400;
            context.res.body = { error: "All fields are required" };
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            context.res.status = 400;
            context.res.body = { error: "Invalid email format" };
            return;
        }

        // Rate limiting check (basic implementation)
        // In production, you'd use Azure Redis or similar
        const userAgent = req.headers['user-agent'] || '';
        const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        
        // Sanitize inputs to prevent injection
        const sanitizedName = name.replace(/[<>]/g, '').trim();
        const sanitizedSubject = subject.replace(/[<>]/g, '').trim();
        const sanitizedMessage = message.replace(/[<>]/g, '').trim();

        // Get connection string from environment variables
        const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
        
        if (!connectionString) {
            context.log.error("Missing COMMUNICATION_SERVICES_CONNECTION_STRING");
            context.res.status = 500;
            context.res.body = { error: "Email service not configured" };
            return;
        }

        const emailClient = new EmailClient(connectionString);

        // Compose email
        const emailMessage = {
            senderAddress: process.env.SENDER_EMAIL || "noreply@overstanding.live",
            content: {
                subject: `[Overstanding Live] ${sanitizedSubject}`,
                plainText: `
New contact form submission from Overstanding Live:

Name: ${sanitizedName}
Email: ${email}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
Sent from: ${clientIP}
User Agent: ${userAgent}
Timestamp: ${new Date().toISOString()}
                `.trim(),
                html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #f0c14b; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${sanitizedName}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #333;">Message:</h3>
                        <div style="background: white; padding: 15px; border-left: 4px solid #f0c14b; white-space: pre-wrap;">${sanitizedMessage}</div>
                    </div>
                    
                    <div style="font-size: 12px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p>Sent from: ${clientIP}</p>
                        <p>Timestamp: ${new Date().toISOString()}</p>
                    </div>
                </div>
                `
            },
            recipients: {
                to: [
                    {
                        address: "flolrowe@gmail.com",
                        displayName: "Live"
                    }
                ]
            }
        };

        // Send email
        const poller = await emailClient.beginSend(emailMessage);
        const result = await poller.pollUntilDone();

        context.log(`Email sent successfully. Message ID: ${result.id}`);

        // Return success response
        context.res.status = 200;
        context.res.body = { 
            success: true, 
            message: "Email sent successfully",
            id: result.id 
        };

    } catch (error) {
        context.log.error("Error sending email:", error);
        
        // Don't expose internal error details to client
        context.res.status = 500;
        context.res.body = { 
            error: "Failed to send message. Please try again later." 
        };
    }
};
