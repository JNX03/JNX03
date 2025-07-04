import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  // Only allow this in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "This endpoint is only available in development mode" }, { status: 403 })
  }

  try {
    // Create a test account
    const testAccount = await nodemailer.createTestAccount()

    // Log the test account credentials
    console.log("Test account credentials:", {
      user: testAccount.user,
      pass: testAccount.pass,
    })

    // Create a transporter with the test account
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })

    // Send a test email
    const info = await transporter.sendMail({
      from: '"Test User" <test@example.com>',
      to: "recipient@example.com",
      subject: "Test Email",
      text: "This is a test email to verify the email configuration.",
      html: "<b>This is a test email to verify the email configuration.</b>",
    })

    // Return the test email info
    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info),
    })
  } catch (error) {
    console.error("Error sending test email:", error)
    return NextResponse.json(
      {
        error: "Failed to send test email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
