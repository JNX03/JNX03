import { NextResponse } from "next/server"
import { getUrl, incrementClicks } from "@/lib/url-store"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const url = getUrl(id)

    if (url) {
      // Increment click counter
      incrementClicks(id)
      
      // Redirect to the original URL
      return NextResponse.redirect(url, { status: 302 })
    } else {
      // Redirect to 404 page if short URL not found
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jnx03.xyz'
      return NextResponse.redirect(`${baseUrl}/404`, { status: 404 })
    }
  } catch (error) {
    console.error('Error redirecting short URL:', error)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jnx03.xyz'
    return NextResponse.redirect(`${baseUrl}/404`, { status: 500 })
  }
}
