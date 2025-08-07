"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { BookOpen, Calendar, TrendingUp, User, Search, Filter } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: "swift-student-challenge-2025",
    title: "Swift Student Challenge 2025 Winner! 🏆",
    excerpt: "Selected as a winner for the Syntaxia project, an innovative educational app built with SwiftUI that makes programming concepts more accessible and engaging.",
    date: "March 28, 2025",
    category: "Achievement",
    featured: true,
    tags: ["Swift", "SwiftUI", "Apple", "Student Challenge", "Syntaxia", "Education"],
    readTime: "5 min read"
  },
  {
    id: "moodeng-ai-challenge",
    title: "Moodeng AI Challenge Winner: AI for Zoo Keepers 🏆",
    excerpt: "Winner of Track 3 for MooDong, a multi-task LSTM and vision model for zoo keeper augmentation that requires no manual labels.",
    date: "June 25, 2025", 
    category: "AI & Machine Learning",
    featured: true,
    tags: ["AI", "Machine Learning", "LSTM", "Computer Vision", "Zoo", "MooDong"],
    readTime: "7 min read"
  },
  {
    id: "gistda-kibo-robot-award",
    title: "GISTDA Kibo Robot Programming Challenge - Best Presentation Award 🏆",
    excerpt: "Received Best Presentation Award (5,000 Baht) for innovative solutions in space robotics and effective communication of complex technical concepts.",
    date: "July 15, 2025",
    category: "Robotics & Space",
    featured: true,
    tags: ["GISTDA", "Kibo Robot", "Space", "Robotics", "Presentation", "Award"],
    readTime: "4 min read"
  },
  {
    id: "tia-index-camp",
    title: "Thailand Innovation Awards (TIA): Selected for INDEX and Camp! 🎉",
    excerpt: "Selected for the Thailand Innovation Awards program, including the INDEX and Camp initiatives to develop innovative solutions.",
    date: "June 27, 2025",
    category: "Innovation",
    tags: ["TIA", "Innovation", "Thailand", "Award", "Camp", "INDEX"],
    readTime: "3 min read"
  },
  {
    id: "nsc-index",
    title: "National Software Contest (NSC): Selected for INDEX! 💻",
    excerpt: "Selected to participate in the National Software Contest program for the INDEX initiative, showcasing software development excellence.",
    date: "June 13, 2025",
    category: "Programming",
    tags: ["NSC", "Software", "Contest", "INDEX", "Programming"],
    readTime: "3 min read"
  },
  {
    id: "wwdc-ssc25-thailand-meeting",
    title: "WWDC Swift Student Challenge 2025 Thailand Meeting 🍎",
    excerpt: "Attended the WWDC Swift Student Challenge 2025 Thailand meeting, connecting with fellow developers and learning about Apple's latest advancements.",
    date: "June 22, 2025",
    category: "Community",
    tags: ["WWDC", "SSC25", "Apple", "Thailand", "Meeting", "Community"],
    readTime: "4 min read"
  },
  {
    id: "super-ai-engineer-ss5",
    title: "Accepted into Super AI Engineer SS5 Level 2! 🎉",
    excerpt: "Accepted into the Super AI Engineer SS5 Level 2 program in Thailand, a significant milestone in AI education and development.",
    date: "March 30, 2025",
    category: "AI & Education",
    tags: ["AI", "Education", "Thailand", "Achievement", "Super AI Engineer"],
    readTime: "4 min read"
  },
  {
    id: "social-media-project",
    title: "Launching My Social Media Project 🎬",
    excerpt: "Officially launched social media presence with content creation on YouTube and TikTok, sharing tech insights and project updates.",
    date: "April 1, 2025",
    category: "Content Creation",
    tags: ["YouTube", "TikTok", "Content Creation", "Social Media"],
    readTime: "3 min read"
  },
  {
    id: "cancer-plus-prc-x",
    title: "Cancer Plus Prc X: Advanced Encryption Library",
    excerpt: "Released advanced encryption library with military-grade security, featuring proprietary .CPx format and multiple encryption layers.",
    date: "March 22, 2025",
    category: "Cybersecurity",
    tags: ["Encryption", "Security", "Python", "NPM", "Cybersecurity"],
    readTime: "8 min read"
  }
]

export default function BlogPage() {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))]
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Achievement": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "AI & Machine Learning": "bg-purple-100 text-purple-800 border-purple-200", 
      "Robotics & Space": "bg-blue-100 text-blue-800 border-blue-200",
      "Innovation": "bg-green-100 text-green-800 border-green-200",
      "Programming": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Community": "bg-pink-100 text-pink-800 border-pink-200",
      "AI & Education": "bg-orange-100 text-orange-800 border-orange-200",
      "Content Creation": "bg-red-100 text-red-800 border-red-200",
      "Cybersecurity": "bg-gray-100 text-gray-800 border-gray-200"
    }
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200"
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
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <BookOpen className="h-8 w-8 text-indigo-600" />
                  </div>
                </div>
                <CardTitle className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : ""}`}>
                  Tech Blog & Journey
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
                  Sharing insights, achievements, and learnings from my journey in technology, AI, and innovation
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search posts, tags, or topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className={`px-3 py-2 border rounded-md text-sm ${theme === "light" ? "border-gray-300 bg-white" : "border-input bg-background"}`}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>{filteredPosts.length} posts found</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${theme === "light" ? "text-gray-900" : ""}`}>
                    <TrendingUp className="h-5 w-5 text-indigo-500" />
                    Featured Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <Card className={`h-full ${theme === "light" ? "bg-gray-50 border-gray-200 hover:shadow-md" : "bg-accent/30 hover:bg-accent/50"} transition-all duration-300`}>
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getCategoryColor(post.category)}>
                                {post.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">Featured</Badge>
                            </div>
                            <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>{post.date}</span>
                              </div>
                              <span>{post.readTime}</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-4">
                              {post.tags.slice(0, 3).map((tag, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {post.tags.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{post.tags.length - 3} more
                                </Badge>
                              )}
                            </div>
                            <Button 
                              asChild 
                              size="sm" 
                              className={`w-full ${theme === "light" ? "bg-indigo-600 hover:bg-indigo-700 text-white" : ""}`}
                            >
                              <Link href={`/blog/${post.id}`}>
                                Read More
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${theme === "light" ? "text-gray-900" : ""}`}>
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  All Posts
                  <Badge variant="secondary" className="ml-2">
                    {regularPosts.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {regularPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Card className={`${theme === "light" ? "bg-gray-50 border-gray-200 hover:shadow-md" : "bg-accent/30 hover:bg-accent/50"} transition-all duration-300`}>
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className={getCategoryColor(post.category)}>
                                  {post.category}
                                </Badge>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>{post.date}</span>
                                  </div>
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold mb-2 leading-tight">{post.title}</h3>
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {post.tags.slice(0, 4).map((tag, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {post.tags.length > 4 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{post.tags.length - 4} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              <Button 
                                asChild 
                                className={theme === "light" ? "bg-indigo-600 hover:bg-indigo-700 text-white" : ""}
                              >
                                <Link href={`/blog/${post.id}`}>
                                  Read More
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                  {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                      <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">No posts found</h3>
                      <p className={theme === "light" ? "text-gray-500" : "text-muted-foreground"}>
                        Try adjusting your search terms or filters
                      </p>
                    </div>
                  )}
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