"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, ExternalLink, Share2, BookOpen, Award, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export default function GISTDAKiboRobotAwardPage() {
  const { theme } = useTheme()
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(progress)
    }

    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "GISTDA Kibo Robot Programming Challenge - Best Presentation Award",
        text: "Check out this achievement in space robotics!",
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 rounded-full opacity-20 blur-3xl" />
          </div>
          
          <div className="relative container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              {/* Back Navigation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <Button variant="ghost" asChild className="group hover:bg-indigo-50 dark:hover:bg-indigo-950/50">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                  </Link>
                </Button>
              </motion.div>

              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mb-12"
              >
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
                  <Award className="h-4 w-4" />
                  Robotics & Space Achievement
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    GISTDA Kibo Robot Programming Challenge
                  </span>
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                    Best Presentation Award 🏆
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Recognized for innovative solutions in space robotics and effective communication of complex technical concepts
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>July 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Achievement Story</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Button onClick={handleShare} variant="outline" className="group">
                    <Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Share Article
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Link
                      href="https://www.nstda.or.th/home/news_post/kibo-robot-6th-20250615/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read GISTDA Article
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-4xl mx-auto">
            <Card className={`${theme === "light" ? "bg-white border-gray-200 shadow-xl" : "bg-gray-900/50 border-gray-800"} backdrop-blur-sm`}>
              <CardContent className="p-8 md:p-12">
                {/* Highlight Quote */}
                <div className="relative mb-12">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
                  <blockquote className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-800 dark:text-gray-200 pl-8">
                    "Innovation in space robotics requires not just technical excellence, but the ability to communicate complex ideas with clarity and passion."
                  </blockquote>
                </div>

                {/* Main Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl mb-8">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Award Recognition</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-0">
                        I am honored to have received the <strong>Best Presentation Award (5,000 Baht)</strong> from GISTDA at the Kibo Robot
                        Programming Challenge. This recognition highlights our team's efforts in developing innovative solutions
                        for space robotics and our ability to effectively communicate complex technical concepts.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mb-6">
                    The Kibo Robot Programming Challenge represents a prestigious event that pushes the boundaries of robotics and AI
                    in a space context. Our project demonstrated cutting-edge solutions for autonomous space operations, 
                    and we are thrilled that our presentation resonated with the judges and fellow participants.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-10">
                    <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl">
                      <h4 className="font-semibold text-lg mb-3 text-indigo-800 dark:text-indigo-300">Technical Innovation</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Advanced robotics solutions designed for space environments, incorporating AI-driven decision making and autonomous navigation systems.
                      </p>
                    </div>
                    <div className="p-6 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                      <h4 className="font-semibold text-lg mb-3 text-purple-800 dark:text-purple-300">Presentation Excellence</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Clear communication of complex technical concepts, making space robotics accessible and engaging for diverse audiences.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">The Challenge Experience</h2>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Participating in the GISTDA Kibo Robot Programming Challenge was both intellectually stimulating and professionally rewarding. 
                    The competition brought together talented individuals and teams from across the region, each presenting unique approaches 
                    to space robotics challenges.
                  </p>

                  <p className="text-lg leading-relaxed mb-8">
                    Our success in winning the Best Presentation Award reflects not only technical competence but also our commitment 
                    to knowledge sharing and effective communication in the scientific community. This experience has reinforced 
                    my passion for space technology and robotics innovation.
                  </p>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center my-12">
                    <h3 className="text-2xl font-bold mb-4">Learn More</h3>
                    <p className="text-indigo-100 mb-6">
                      Interested in space robotics and the Kibo Robot Programming Challenge?
                    </p>
                    <Button asChild variant="secondary" size="lg">
                      <Link
                        href="https://www.nstda.or.th/home/news_post/kibo-robot-6th-20250615/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Read the Official GISTDA Article
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="border-t pt-8 mt-12">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
                    Topics & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["GISTDA", "Kibo Robot", "Space Technology", "Robotics", "AI", "Presentation", "Award", "Innovation"].map((tag) => (
                      <Badge
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 hover:from-indigo-200 hover:to-purple-200 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Article Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <Link href="/blog">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore More Articles
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}
