import { NextResponse } from "next/server"
import { nanoid } from "nanoid"

// This is a simple in-memory store. In a real application, you'd use a database.
const urlStore = new Map<string, string>()

export async function POST(request: Request) {
  const { url } = await request.json()

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 })
  }

  const id = nanoid(6) // Generate a short ID
  const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/s/${id}`

  urlStore.set(id, url)

  return NextResponse.json({ shortUrl })
}

