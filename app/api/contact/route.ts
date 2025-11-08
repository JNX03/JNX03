import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import he from "he"

export async function POST(request: Request) {
  try {
    // You can still parse the body safely
    const { name, email, subject, message } = await request.json()

    // (Optional) Log incoming data for debugging (remove in production)
    console.log("Contact form attempt:", { name, email, subject })

    // Simulate processing delay if you want to look normal
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Always return “service closed” regardless of input or internal state
    return NextResponse.json(
      {
        success: false,
        message: "Contact service is temporarily closed",
      },
      { status: 503 },
    )
  } catch (error) {
    // Even if parsing or other errors occur — return same message
    return NextResponse.json(
      {
        success: false,
        message: "Contact service is temporarily closed",
      },
      { status: 503 },
    )
  }
}
