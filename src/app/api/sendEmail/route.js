import nodemailer from "nodemailer";
import { z } from "zod";

const emailSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    subject: z.string().min(1),
    message: z.string().min(1),
});

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();
        const result = emailSchema.parse({ name, email, subject, message });

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // const mailOptions = {
        //   from: email,
        //   to: process.env.EMAIL_USER,
        //   subject: `Website Message: ${subject}`,
        //   text: `
        //     Name: ${name}
        //     Email: ${email}
        //     Message: ${message}
        //   `,
        // };
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `🎯 New Website Message: ${subject}`,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 400;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .message-card {
            background: #f8fafc;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            border-left: 4px solid #667eea;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }
        
        .info-item {
            background: white;
            padding: 20px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
        }
        
        .info-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .info-label {
            font-size: 12px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        
        .info-value {
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
        }
        
        .message-section {
            background: white;
            padding: 25px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
        }
        
        .message-label {
            font-size: 12px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 10px;
        }
        
        .message-content {
            font-size: 15px;
            line-height: 1.7;
            color: #374151;
            white-space: pre-wrap;
        }
        
        .footer {
            background: #f1f5f9;
            padding: 25px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        
        .footer-text {
            color: #64748b;
            font-size: 14px;
            margin-bottom: 15px;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }
        
        .badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 10px;
        }
        
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            
            .content {
                padding: 25px 20px;
            }
            
            .header {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🚀 New Contact Form Submission</h1>
            <p>You've received a new message from your portfolio website</p>
        </div>
        
        <div class="content">
            <div class="message-card">
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">👤 From</div>
                        <div class="info-value">${name}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">📧 Email</div>
                        <div class="info-value">${email}</div>
                    </div>
                </div>
                
                <div class="info-item" style="grid-column: 1 / -1;">
                    <div class="info-label">🎯 Subject</div>
                    <div class="info-value">${subject} <span class="badge">NEW</span></div>
                </div>
            </div>
            
            <div class="message-section">
                <div class="message-label">💬 Message</div>
                <div class="message-content">${message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p class="footer-text">This message was sent from your portfolio contact form</p>
            <a href="mailto:${email}" class="cta-button">📧 Reply to ${name}</a>
        </div>
    </div>
</body>
</html>
  `,
            // Keep text version for email clients that don't support HTML
            text: `
NEW CONTACT FORM SUBMISSION
============================

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
  `
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Email Error:", error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        );
    }
}
