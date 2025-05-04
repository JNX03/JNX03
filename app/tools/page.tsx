"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function ToolsPage() {
  const [longUrl, setLongUrl] = useState("")
  const [customSlug, setCustomSlug] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl, slug: customSlug }),
      })

      if (!response.ok) {
        throw new Error("Failed to shorten URL")
      }

      const data = await response.json()
      setShortUrl(data.shortUrl)
      toast({
        title: "URL Shortened",
        description: "Your shortened URL has been generated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to shorten URL. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Tools</CardTitle>
            <CardDescription>Useful tools for developers</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleShorten} className="space-y-4">
              <div>
                <Label htmlFor="longUrl">Long URL</Label>
                <Input
                  id="longUrl"
                  type="url"
                  placeholder="https://example.com/very/long/url"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="customSlug">Custom Slug (optional)</Label>
                <Input
                  id="customSlug"
                  type="text"
                  placeholder="my-custom-slug"
                  value={customSlug}
                  onChange={(e) => setCustomSlug(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Shortening..." : "Shorten URL"}
              </Button>
            </form>
            {shortUrl && (
              <div className="mt-4">
                <Label>Shortened URL</Label>
                <div className="flex items-center mt-1">
                  <Input value={shortUrl} readOnly />
                  <Button
                    className="ml-2"
                    onClick={() => {
                      navigator.clipboard.writeText(shortUrl)
                      toast({
                        title: "Copied!",
                        description: "The shortened URL has been copied to your clipboard.",
                      })
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
