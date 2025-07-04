import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Create a transporter with more secure settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true, // Use SSL
      tls: {
        rejectUnauthorized: false, // For development environments with self-signed certificates
      },
    })

    // Email content with improved formatting
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `Contact Form: ${subject || "New message from your website"}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #4f46e5; margin-bottom: 20px;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Message:</strong></p>
  <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px; margin-bottom: 20px;">
    ${message.replace(/\n/g, "<br>")}
  </div>
  <p style="color: #6b7280; font-size: 12px; margin-top: 20px; border-top: 1px solid #e0e0e0; padding-top: 20px;">This email was sent from your website contact form.</p>
</div>
      `,
    }

    // Send email with better error handling
    try {
      await transporter.sendMail(mailOptions)
      return NextResponse.json({ success: true, message: "Email sent successfully" })
    } catch (emailError) {
      console.error("Error sending email:", emailError)
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: emailError instanceof Error ? emailError.message : "Unknown email error",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      {
        error: "Failed to process request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
