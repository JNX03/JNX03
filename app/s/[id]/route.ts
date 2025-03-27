import { NextResponse } from "next/server"

// This is a simple in-memory store. In a real application, you'd use a database.
const urlStore = new Map<string, string>()

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const url = urlStore.get(id)

  if (url) {
    return NextResponse.redirect(url)
  } else {
    return NextResponse.redirect("/404")
  }
}

