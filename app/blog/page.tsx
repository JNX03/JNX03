"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function BlogPage() {
  const { theme } = useTheme()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Card
              className={`mb-8 ${theme === "light" ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow" : "hover:bg-accent/50 transition-colors"}`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl sm:text-3xl ${theme === "light" ? "text-gray-900" : ""}`}>
                  Accepted into Super AI Engineer SS5 Level 2! 🎉
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on March 30, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm thrilled to announce that I've been accepted into the Super AI Engineer SS5 Level 2 program in
                  Thailand (500712)! This is a significant milestone in my AI journey, and I'm incredibly excited about
                  the opportunities and challenges that lie ahead.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/super-ai-engineer-ss5" className="no-underline">
                    Read more →
                  </Link>
                </Button>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    AI
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Achievement
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Thailand
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    500712
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card
              className={`mb-8 ${theme === "light" ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow" : "hover:bg-accent/50 transition-colors"}`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl sm:text-3xl ${theme === "light" ? "text-gray-900" : ""}`}>
                  Launching My Social Media Project 🎬
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on April 1, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm excited to announce that I've officially launched my social media project! After months of
                  planning and preparation, I've started posting videos on my YouTube channel and TikTok account.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/social-media-project" className="no-underline">
                    Read more →
                  </Link>
                </Button>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    YouTube
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    TikTok
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Content Creation
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card
              className={`mb-8 ${theme === "light" ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow" : "hover:bg-accent/50 transition-colors"}`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl sm:text-3xl ${theme === "light" ? "text-gray-900" : ""}`}>
                  Swift Student Challenge 2025 Winner! 🏆
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on March 28, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm incredibly excited to announce that I've been selected as a{" "}
                  <strong className={theme === "light" ? "text-gray-900" : ""}>
                    Swift Student Challenge 2025 winner
                  </strong>
                  ! This is a tremendous honor, and I'm grateful to Apple for this recognition of my project, Syntaxia.
                </p>

                <p className={`mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  Syntaxia is an innovative app that combines SwiftUI, speech synthesis, natural language processing,
                  and more to create a unique educational experience.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/swift-student-challenge-2025" className="no-underline">
                    Read more →
                  </Link>
                </Button>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Swift
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    SwiftUI
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Apple
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Student Challenge
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card
              className={`mb-8 ${theme === "light" ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow" : "hover:bg-accent/50 transition-colors"}`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl sm:text-3xl ${theme === "light" ? "text-gray-900" : ""}`}>
                  Cancer Plus Prc X: Advanced Encryption Library
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on March 22, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm excited to announce the release of my new encryption/decryption library:{" "}
                  <strong className={theme === "light" ? "text-gray-900" : ""}>Cancer Plus Prc X</strong>. This library
                  provides military-grade encryption for your sensitive data with a unique multi-layered approach that
                  makes it extremely resistant to brute force attacks.
                </p>

                <p className={`mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  The library implements a proprietary file format{" "}
                  <code className={theme === "light" ? "bg-gray-100 text-indigo-600 px-1 rounded" : ""}>.CPx</code> with
                  multiple encryption layers including AES-256-GCM, ChaCha20-Poly1305, and RSA-4096, offering
                  unprecedented security for your data.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/cancer-plus-prc-x" className="no-underline">
                    Read more →
                  </Link>
                </Button>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Encryption
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Security
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Python
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    NPM
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card
              className={`mb-8 ${theme === "light" ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow" : "hover:bg-accent/50 transition-colors"}`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl sm:text-3xl ${theme === "light" ? "text-gray-900" : ""}`}>
                  Hello World 👋
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on January 18, 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  Hey there! I'm Jean (JNX03), a developer and tech enthusiast with a passion for making the world a
                  better place through technology. I'm excited to start sharing my journey and projects with you through
                  this blog.
                </p>

                <h2 className={`text-xl sm:text-2xl font-bold mt-8 mb-4 ${theme === "light" ? "text-gray-900" : ""}`}>
                  Who Am I?
                </h2>
                <p className={`mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm a student developer currently based in Thailand, with a deep interest in AI, cybersecurity, and
                  accessibility technology. My journey in tech started with a simple curiosity about how things work,
                  and it has evolved into a mission to create tools and solutions that can help people.
                </p>

                <h2 className={`text-xl sm:text-2xl font-bold mt-8 mb-4 ${theme === "light" ? "text-gray-900" : ""}`}>
                  Introducing Project 1x12
                </h2>
                <p className={`mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm thrilled to give you a sneak peek into one of my most ambitious projects yet: Project 1x12. This
                  is a quantum computing initiative that aims to break the barriers between classical and quantum
                  computing.
                </p>

                <p className={`mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  Project 1x12 exists in a state of superposition - between reality and possibility. It's an
                  experimental platform that explores the boundaries of quantum mechanics in computing. While I can't
                  reveal all the details just yet, I've left some breadcrumbs for the curious minds...
                </p>

                <p className={`mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  If you're interested in discovering more about Project 1x12, try exploring the terminal on this
                  website (hint: press ⌘K or Ctrl+K and look for the terminal option). There might be some
                  quantum-encrypted secrets waiting to be discovered...
                </p>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Introduction
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Project1x12
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    QuantumComputing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
