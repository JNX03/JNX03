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
                  Thailand Innovation Awards (TIA): Selected for INDEX and Camp! 🎉
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on June 27, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm excited to announce my selection for the Thailand Innovation Awards (TIA) program, including the
                  INDEX and Camp initiatives! This is a fantastic opportunity to develop innovative solutions and
                  collaborate with other talented individuals.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/tia-index-camp" className="no-underline">
                    Read more →
                  </Link>
                </Button>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    TIA
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Innovation
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
                    Award
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Camp
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
                  Moodeng AI Challenge Winners: AI for Augmenting Zoo Keepers 🏆
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on June 25, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm thrilled to announce that I've been recognized as a winner in the Moodeng AI Challenge for Track
                  3: AI for Augmenting Zoo Keepers! My project, MooDong, utilizes multi-task LSTM and vision models to
                  extract pose, mood, hunger, and future-movement predictions for animals, all without requiring manual
                  labels.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/moodeng-ai-challenge" className="no-underline">
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
                    Challenge
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Zoo
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    LSTM
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Vision
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    MooDong
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
                  WWDC SSC25 (Thailand Meeting) 🍎
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on June 22, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I had the privilege of attending the WWDC Swift Student Challenge 2025 Thailand meeting! It was an
                  inspiring event, connecting with fellow developers and learning about the latest advancements from
                  Apple.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/wwdc-ssc25-thailand-meeting" className="no-underline">
                    Read more →
                  </Link>
                </Button>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    WWDC
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    SSC25
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
                    Thailand
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Meeting
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
                  Best Presentation Award จำนวน 5,000 บาท จาก GISTDA - Kibo robot - rpc 🏆
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on 15 ก.ค. 2568
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I am honored to have received the Best Presentation Award (5,000 Baht) from GISTDA at the Kibo Robot
                  Programming Challenge. This recognition highlights my team's efforts in developing innovative
                  solutions for space robotics.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/gistda-kibo-robot-award" className="no-underline">
                    Read more →
                  </Link>
                </Button>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    GISTDA
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Kibo Robot
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Award
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Space
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Robotics
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Presentation
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
                  National Software Contest (NSC): Selected for INDEX! 💻
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                  Posted on June 13, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                  I'm excited to announce that I've been selected to participate in the National Software Contest (NSC)
                  program, specifically for the INDEX initiative! This is a great opportunity to showcase my software
                  development skills and contribute to innovative projects.
                </p>

                <Button
                  asChild
                  className={
                    theme === "light"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                >
                  <Link href="/blog/nsc-index" className="no-underline">
                    Read more →
                  </Link>
                </Button>

                <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    NSC
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Software
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    Contest
                  </Badge>
                  <Badge
                    variant={theme === "light" ? "outline" : "secondary"}
                    className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                  >
                    INDEX
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
