"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Copy, ExternalLink, Plus, BarChart3, Calendar, MousePointer, Link2, Scissors } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface UrlData {
  shortId: string
  url: string
  shortUrl: string
  createdAt: string
  clicks: number
  lastAccessed?: string
}

export default function ToolsPage() {
  const { theme } = useTheme()
  const { toast } = useToast()
  const [urls, setUrls] = useState<UrlData[]>([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ url: "", customId: "" })

  useEffect(() => {
    fetchUrls()
  }, [])

  const fetchUrls = async () => {
    try {
      const response = await fetch("/api/shorten")
      const data = await response.json()
      setUrls(data.urls || [])
    } catch (error) {
      console.error("Error fetching URLs:", error)
    }
  }

  const createShortUrl = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.url) return

    setLoading(true)
    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Short URL created successfully",
        })
        setFormData({ url: "", customId: "" })
        fetchUrls()
      } else {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create short URL",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Short URL copied to clipboard",
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="relative">
                    <Scissors className="h-8 w-8 text-indigo-500" />
                    <Link2 className="h-4 w-4 absolute -bottom-1 -right-1 text-indigo-300" />
                  </div>
                </div>
                <CardTitle className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : ""}`}>
                  JNX03 URL Shortener
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
                  Create custom short URLs with click analytics and management tools
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Create Short URL Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${theme === "light" ? "text-gray-900" : ""}`}>
                  <Plus className="h-5 w-5 text-indigo-500" />
                  Create Short URL
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
                  Transform long URLs into short, manageable links
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={createShortUrl} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="url" className="text-sm font-medium">
                        Original URL *
                      </Label>
                      <Input
                        id="url"
                        type="url"
                        placeholder="https://example.com/very/long/url/path"
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        className={theme === "light" ? "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" : ""}
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Enter the URL you want to shorten
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="customId" className="text-sm font-medium">
                        Custom ID (optional)
                      </Label>
                      <Input
                        id="customId"
                        type="text"
                        placeholder="my-awesome-link"
                        value={formData.customId}
                        onChange={(e) => setFormData({ ...formData, customId: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                        className={theme === "light" ? "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" : ""}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Choose a custom short ID (letters, numbers, hyphens only)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={loading}
                      className={`${theme === "light" ? "bg-indigo-600 hover:bg-indigo-700 text-white" : ""} flex items-center gap-2`}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <Scissors className="h-4 w-4" />
                          Create Short URL
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setFormData({ url: "", customId: "" })}
                      disabled={loading}
                    >
                      Clear
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* URLs List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${theme === "light" ? "text-gray-900" : ""}`}>
                  <BarChart3 className="h-5 w-5 text-indigo-500" />
                  Your Short URLs
                  <Badge variant="secondary" className="ml-2">
                    {urls.length} total
                  </Badge>
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
                  Manage and track your shortened URLs
                </CardDescription>
              </CardHeader>
              <CardContent>
                {urls.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Link2 className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No URLs yet</h3>
                    <p className={theme === "light" ? "text-gray-500" : "text-muted-foreground"}>
                      Create your first short URL using the form above!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {urls.map((urlData, index) => (
                      <motion.div
                        key={urlData.shortId}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <Card className={`${theme === "light" ? "bg-gray-50 border-gray-200" : "bg-accent/30"} hover:shadow-md transition-shadow`}>
                          <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full">
                                    <Link2 className="h-4 w-4 text-indigo-600" />
                                    <code className="text-sm font-mono font-semibold text-indigo-700">
                                      {urlData.shortUrl}
                                    </code>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => copyToClipboard(urlData.shortUrl)}
                                    className="flex-shrink-0"
                                  >
                                    <Copy className="h-3 w-3" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    asChild
                                    className="flex-shrink-0"
                                  >
                                    <a href={urlData.url} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-3 w-3" />
                                    </a>
                                  </Button>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="bg-gray-200 p-1 rounded">
                                    <ExternalLink className="h-3 w-3 text-gray-600" />
                                  </div>
                                  <p className={`text-sm truncate ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                                    {urlData.url}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-4 text-sm">
                                  <div className="flex items-center gap-1">
                                    <MousePointer className="h-4 w-4 text-blue-500" />
                                    <span className="font-semibold">{urlData.clicks}</span>
                                    <span className="text-muted-foreground">clicks</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4 text-green-500" />
                                    <span className="text-muted-foreground text-xs">
                                      {formatDate(urlData.createdAt)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className={theme === "light" ? "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200" : "bg-gradient-to-r from-indigo-500/10 to-purple-500/10"}>
              <CardHeader>
                <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Click Analytics</h3>
                      <p className="text-sm text-muted-foreground">
                        Track clicks and access patterns for your short URLs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Link2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Custom IDs</h3>
                      <p className="text-sm text-muted-foreground">
                        Create memorable custom short URLs for your links
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Persistent Storage</h3>
                      <p className="text-sm text-muted-foreground">
                        File-based storage ensures your URLs are always available
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
