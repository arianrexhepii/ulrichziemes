import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

   const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: message,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #0a0a0a; margin: 0; padding: 40px 20px; }
              .container { max-width: 560px; margin: 0 auto; background: #111; border: 1px solid #222; border-radius: 16px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding: 40px; }
              .header h1 { color: #e2e8f0; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.5px; }
              .header p { color: #64748b; font-size: 13px; margin: 6px 0 0; }
              .body { padding: 36px 40px; }
              .field { margin-bottom: 24px; }
              .label { font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #475569; margin-bottom: 6px; }
              .value { font-size: 15px; color: #cbd5e1; line-height: 1.6; }
              .divider { height: 1px; background: #1e293b; margin: 28px 0; }
              .message-box { background: #0f172a; border: 1px solid #1e293b; border-radius: 10px; padding: 20px; }
              .footer { padding: 20px 40px; background: #0d0d0d; border-top: 1px solid #1a1a1a; }
              .footer p { color: #334155; font-size: 11px; margin: 0; }
              .accent { color: #38bdf8; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Message</h1>
                <p>via ziemes.com contact form</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">From</div>
                  <div class="value"><span class="accent">${name}</span></div>
                </div>
                <div class="field">
                  <div class="label">Reply To</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="divider"></div>
                <div class="label">Message</div>
                <div class="message-box">
                  <div class="value">${message.replace(/\n/g, "<br/>")}</div>
                </div>
              </div>
              <div class="footer">
                <p>Sent from contact form &mdash; Reply directly to respond to ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
   console.error("Mail error:", error)
  const errorMessage = error instanceof Error ? error.message : String(error)
  return NextResponse.json({ 
    error: errorMessage,
  }, { status: 500 })
  }
}