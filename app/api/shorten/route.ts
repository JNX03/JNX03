import { NextResponse } from "next/server"
import { nanoid } from "nanoid"
import { addUrl, getUrls } from "@/lib/url-store"

export async function POST(request: Request) {
  try {
    const { url, customId } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Validate URL format
    try {
      new URL(url)
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 })
    }

    // Generate or use custom ID
    let shortId = customId || nanoid(6)
    
    // Check if custom ID already exists
    const existingUrls = getUrls()
    if (existingUrls[shortId]) {
      if (customId) {
        return NextResponse.json({ error: "Custom ID already exists" }, { status: 409 })
      }
      // Generate new ID if collision
      shortId = nanoid(8)
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jnx03.xyz'
    const shortUrl = `${baseUrl}/s/${shortId}`

    addUrl(shortId, url)

    return NextResponse.json({ 
      shortUrl, 
      shortId,
      originalUrl: url,
      message: "Short URL created successfully" 
    })
  } catch (error) {
    console.error('Error creating short URL:', error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const urls = getUrls()
    const urlList = Object.entries(urls).map(([shortId, data]) => ({
      shortId,
      ...data,
      shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jnx03.xyz'}/s/${shortId}`
    }))

    return NextResponse.json({ urls: urlList })
  } catch (error) {
    console.error('Error fetching URLs:', error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
