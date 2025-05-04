"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, FileText, Code, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

// Define search categories and their content
const searchableContent = [
  {
    category: "Pages",
    icon: <Home className="h-4 w-4" />,
    items: [
      { title: "Home", description: "Main landing page", path: "/" },
      { title: "Projects", description: "Showcase of my projects", path: "/projects" },
      { title: "Education", description: "My educational background", path: "/education" },
      { title: "Experience", description: "My professional experience", path: "/experience" },
      { title: "Awards", description: "Recognitions and achievements", path: "/awards" },
      { title: "Blog", description: "My thoughts and articles", path: "/blog" },
      { title: "Contact", description: "Get in touch with me", path: "/contact" },
      { title: "Resume", description: "My professional resume", path: "/resume" },
    ],
  },
  {
    category: "Projects",
    icon: <Code className="h-4 w-4" />,
    items: [
      { title: "ElbrailleNext", description: "Blind learning platform", path: "/projects#eibraillenext" },
      { title: "Notex", description: "Study notes platform", path: "/projects#notex" },
      { title: "Nova Security", description: "AI-powered penetration testing", path: "/projects#nova" },
      { title: "MALARIAxLABS", description: "AI Malaria detection", path: "/projects#malaria" },
      { title: "CervicalXJn", description: "AI Cervical Cancer detection", path: "/projects#cervical" },
    ],
  },
  {
    category: "Blog Posts",
    icon: <FileText className="h-4 w-4" />,
    items: [
      {
        title: "Swift Student Challenge 2025 Winner!",
        description: "My experience winning the Swift Student Challenge",
        path: "/blog/swift-student-challenge-2025",
      },
      {
        title: "Cancer Plus Prc X: Advanced Encryption Library",
        description: "Introducing my new encryption library",
        path: "/blog/cancer-plus-prc-x",
      },
      {
        title: "Launching My Social Media Project",
        description: "Announcement of my YouTube and TikTok channels",
        path: "/blog/social-media-project",
      },
      {
        title: "Accepted into Super AI Engineer SS5 Level 2!",
        description: "My acceptance into the Super AI Engineer program",
        path: "/blog/super-ai-engineer-ss5",
      },
    ],
  },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const router = useRouter()
  const { theme } = useTheme()

  // Filter content based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results: any[] = []

    searchableContent.forEach((category) => {
      const matchedItems = category.items.filter(
        (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      )

      if (matchedItems.length > 0) {
        results.push({
          ...category,
          items: matchedItems,
        })
      }
    })

    setSearchResults(results)
  }, [searchQuery])

  const handleSelect = (path: string) => {
    router.push(path)
    onOpenChange(false)
    setSearchQuery("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0">
        <DialogHeader className="px-4 pt-4 pb-2">
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for anything..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <ScrollArea className="max-h-[60vh] overflow-y-auto px-4 pb-4">
          {searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                    {category.icon}
                    <span>{category.category}</span>
                  </div>
                  <div className="space-y-1">
                    {category.items.map((item: any, itemIndex: number) => (
                      <Button
                        key={itemIndex}
                        variant="ghost"
                        className={`w-full justify-start text-left ${theme === "light" ? "hover:bg-gray-100" : "hover:bg-accent"}`}
                        onClick={() => handleSelect(item.path)}
                      >
                        <div>
                          <div className={`font-medium ${theme === "light" ? "text-gray-900" : ""}`}>{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="py-6 text-center text-muted-foreground">No results found for "{searchQuery}"</div>
          ) : (
            <div className="py-6 text-center text-muted-foreground">Type to start searching...</div>
          )}
        </ScrollArea>
        <div className="flex items-center justify-between p-4 border-t">
          <div className="text-xs text-muted-foreground">
            Press <kbd className="px-1 py-0.5 text-xs border rounded">Esc</kbd> to close
          </div>
          <Button variant="outline" size="sm" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
