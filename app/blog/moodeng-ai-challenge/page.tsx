"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, ExternalLink, Share2, BookOpen, Award, Brain, Sparkles, Eye, Activity } from "lucide-react"
import { useState, useEffect } from "react"

export default function MoodengAiChallengeBlogPage() {
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
        title: "Moodeng AI Challenge Winner: AI for Augmenting Zoo Keepers",
        text: "Check out this innovative AI solution for animal welfare!",
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
          className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-150 ease-out"
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
          className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-950"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-20 blur-3xl" />
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
                <Button variant="ghost" asChild className="group hover:bg-purple-50 dark:hover:bg-purple-950/50">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-medium mb-6">
                  <Brain className="h-4 w-4" />
                  AI & Machine Learning Winner
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Moodeng AI Challenge Winner
                  </span>
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                    AI for Augmenting Zoo Keepers 🏆
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  MooDong: Revolutionary multi-task LSTM and vision models for automated animal behavior monitoring and welfare prediction
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>June 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>7 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>AI Innovation</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Button onClick={handleShare} variant="outline" className="group">
                    <Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Share Article
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Link
                      href="https://moodeng.media.mit.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Challenge Site
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
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-600 rounded-full" />
                  <blockquote className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-800 dark:text-gray-200 pl-8">
                    "The future of animal welfare lies in the intersection of AI innovation and compassionate care."
                  </blockquote>
                </div>

                {/* Main Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl mb-8">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Challenge Victory</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-0">
                        I'm thrilled to announce that I've been recognized as a <strong>winner in the Moodeng AI Challenge Track 3</strong> 
                        hosted by MIT Media Lab! My project, MooDong, represents a breakthrough in AI-powered animal welfare monitoring.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mb-6">
                    The Moodeng AI Challenge focuses on innovative AI solutions for real-world problems, and my solution addresses 
                    the critical need for efficient, non-invasive animal monitoring in zoos. MooDong utilizes cutting-edge multi-task 
                    LSTM and vision models to provide actionable insights into animal well-being without requiring manual labels.
                  </p>

                  <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">Meet MooDong</h2>
                  
                  <p className="text-lg leading-relaxed mb-8">
                    MooDong is designed to revolutionize how zoo keepers monitor animal health and behavior through advanced 
                    AI capabilities that extract meaningful insights from video data automatically.
                  </p>

                  {/* Feature Grid */}
                  <div className="grid md:grid-cols-2 gap-6 my-10">
                    <div className="p-6 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Eye className="h-6 w-6 text-purple-600" />
                        <h4 className="font-semibold text-lg text-purple-800 dark:text-purple-300">Pose Detection</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Accurately detect and track animal poses and movements in real-time using advanced computer vision algorithms.
                      </p>
                    </div>
                    <div className="p-6 bg-pink-50 dark:bg-pink-950/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Brain className="h-6 w-6 text-pink-600" />
                        <h4 className="font-semibold text-lg text-pink-800 dark:text-pink-300">Mood Analysis</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Infer emotional states and mood patterns from behavioral analysis using deep learning models.
                      </p>
                    </div>
                    <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Activity className="h-6 w-6 text-indigo-600" />
                        <h4 className="font-semibold text-lg text-indigo-800 dark:text-indigo-300">Hunger Prediction</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Predict hunger levels based on activity patterns and feeding schedules using temporal modeling.
                      </p>
                    </div>
                    <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="h-6 w-6 text-green-600" />
                        <h4 className="font-semibold text-lg text-green-800 dark:text-green-300">Movement Forecasting</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Forecast future movements to anticipate animal needs and potential issues before they occur.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">Technical Innovation</h2>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 my-8">
                    <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">Key Technologies</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Multi-task LSTM Networks</h4>
                          <p className="text-gray-700 dark:text-gray-300">Advanced sequential data analysis and prediction capabilities for temporal behavior patterns.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Computer Vision Models</h4>
                          <p className="text-gray-700 dark:text-gray-300">Real-time pose estimation and behavioral analysis using state-of-the-art vision transformers.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Unsupervised Learning</h4>
                          <p className="text-gray-700 dark:text-gray-300">Zero-shot learning approach that eliminates the need for extensive manual labeling, making the system highly scalable.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">Impact on Animal Welfare</h2>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    MooDong provides zoo keepers with a powerful suite of tools to enhance animal welfare, optimize care routines, 
                    and detect early signs of distress or illness. This leads to:
                  </p>

                  <ul className="list-none space-y-3 mb-8">
                    {[
                      "Healthier and happier animals through proactive care",
                      "More efficient zoo operations and resource allocation",
                      "Early detection of health issues before they become critical",
                      "Data-driven insights for improving animal habitats",
                      "Reduced stress for both animals and caretakers"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0" />
                        <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 text-center my-12">
                    <h3 className="text-2xl font-bold mb-4">Explore the Challenge</h3>
                    <p className="text-purple-100 mb-6">
                      Learn more about the Moodeng AI Challenge and discover other innovative solutions
                    </p>
                    <Button asChild variant="secondary" size="lg">
                      <Link
                        href="https://moodeng.media.mit.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Visit MIT Media Lab Challenge
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
                    {["AI", "Machine Learning", "LSTM", "Computer Vision", "Animal Welfare", "MIT Media Lab", "MooDong", "Zoo Technology", "Deep Learning"].map((tag) => (
                      <Badge
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:from-purple-200 hover:to-pink-200 transition-colors"
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
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
