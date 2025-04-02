"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
  FileText,
  Mail,
  BookOpen,
  Shield,
  Bookmark,
  Brain,
  Award,
  Terminal,
  Accessibility,
} from "lucide-react"
import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"

interface LinkItem {
  title: string
  url: string
  icon: React.ReactNode
  color: string
  description?: string
}

export default function LinksPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks: LinkItem[] = [
    {
      title: "GitHub",
      url: "https://github.com/JNX03",
      icon: <Github className="h-5 w-5" />,
      color: theme === "light" ? "bg-gray-900 text-white" : "bg-gray-800 text-white",
      description: "Check out my code repositories and contributions",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a",
      icon: <Linkedin className="h-5 w-5" />,
      color: "bg-blue-600 text-white",
      description: "Connect with me professionally",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/jxxn03z/",
      icon: <Instagram className="h-5 w-5" />,
      color: "bg-pink-600 text-white",
      description: "Follow my personal updates and photos",
    },
    {
      title: "YouTube (Main)",
      url: "https://www.youtube.com/@Jnx03",
      icon: <Youtube className="h-5 w-5" />,
      color: "bg-red-600 text-white",
      description: "Subscribe to my main channel",
    },
    {
      title: "YouTube (Production)",
      url: "https://www.youtube.com/@Jnx03Studio",
      icon: <Youtube className="h-5 w-5" />,
      color: "bg-red-600 text-white",
      description: "Check out my production content",
    },
    {
      title: "Email",
      url: "mailto:jn03official@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      color: "bg-blue-500 text-white",
      description: "Contact me via email",
    },
  ]

  const projectLinks: LinkItem[] = [
    {
      title: "EibrailleNext",
      url: "https://eibraillenext.jnx03.xyz/",
      icon: <Accessibility className="h-5 w-5" />,
      color: "bg-purple-600 text-white",
      description: "Blind learning platform",
    },
    {
      title: "Notex",
      url: "https://notex.jnx03.xyz/",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-green-600 text-white",
      description: "Study notes platform",
    },
    {
      title: "Nova Security",
      url: "https://nova.jnx03.xyz/",
      icon: <Shield className="h-5 w-5" />,
      color: "bg-blue-700 text-white",
      description: "AI-powered penetration testing",
    },
    {
      title: "MALARIAxLABS",
      url: "#",
      icon: <Brain className="h-5 w-5" />,
      color: "bg-yellow-600 text-white",
      description: "AI Malaria detection",
    },
    {
      title: "CervicalXJn",
      url: "#",
      icon: <Brain className="h-5 w-5" />,
      color: "bg-pink-700 text-white",
      description: "AI Cervical Cancer detection",
    },
  ]

  const websiteLinks: LinkItem[] = [
    {
      title: "Portfolio",
      url: "https://jnx03.xyz",
      icon: <Globe className="h-5 w-5" />,
      color: theme === "light" ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white",
      description: "My personal website",
    },
    {
      title: "Resume",
      url: "/resume",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-gray-600 text-white",
      description: "View my professional resume",
    },
    {
      title: "Terminal",
      url: "/dex/terminal",
      icon: <Terminal className="h-5 w-5" />,
      color: "bg-black text-green-400",
      description: "Try my interactive terminal",
    },
    {
      title: "Blog",
      url: "/blog",
      icon: <Bookmark className="h-5 w-5" />,
      color: "bg-orange-500 text-white",
      description: "Read my latest articles",
    },
    {
      title: "Awards",
      url: "/awards",
      icon: <Award className="h-5 w-5" />,
      color: "bg-yellow-500 text-white",
      description: "View my achievements",
    },
  ]

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

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
              <OptimizedImage
                src="https://media.licdn.com/dms/image/v2/D4D03AQGGUriUQXl-Kw/profile-displayphoto-shrink_800_800/B4DZTcKo4yHIAc-/0/1738860565159?e=1745452800&v=beta&t=JHFPZzyh-K3hQ00A7vm5bys3PYec16oD2ETUEyntA30"
                alt="Chawabhon Netisingha"
                width={128}
                height={128}
                className="rounded-full"
                priority={true}
              />
            </div>
            <h1 className={`text-3xl font-bold mb-2`}>Chawabhon Netisingha</h1>
            <p className={`text-lg ${theme === "light" ? "text-gray-600" : "text-muted-foreground"} mb-4`}>
              Developer & Tech Innovator
            </p>
            <p className={`max-w-md mx-auto ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              High school student with 7 years of programming experience and 4 years experience in AI. Connect with me
              and check out my projects below.
            </p>
          </div>

          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <div>
              <h2 className={`text-xl font-semibold mb-4 ${theme === "light" ? "text-gray-800" : ""}`}>Social Links</h2>
              <div className="grid gap-3">
                {socialLinks.map((link, index) => (
                  <motion.div key={link.title} variants={item}>
                    <Button
                      asChild
                      className={`w-full justify-start text-left ${link.color} hover:opacity-90 transition-opacity`}
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <div className="bg-white/20 p-2 rounded mr-3">{link.icon}</div>
                        <div>
                          <div className="font-medium">{link.title}</div>
                          {link.description && <div className="text-xs opacity-80">{link.description}</div>}
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={`text-xl font-semibold mb-4 ${theme === "light" ? "text-gray-800" : ""}`}>Projects</h2>
              <div className="grid gap-3">
                {projectLinks.map((link, index) => (
                  <motion.div key={link.title} variants={item}>
                    <Button
                      asChild
                      className={`w-full justify-start text-left ${link.color} hover:opacity-90 transition-opacity`}
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <div className="bg-white/20 p-2 rounded mr-3">{link.icon}</div>
                        <div>
                          <div className="font-medium">{link.title}</div>
                          {link.description && <div className="text-xs opacity-80">{link.description}</div>}
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={`text-xl font-semibold mb-4 ${theme === "light" ? "text-gray-800" : ""}`}>Website</h2>
              <div className="grid gap-3">
                {websiteLinks.map((link, index) => (
                  <motion.div key={link.title} variants={item}>
                    <Button
                      asChild
                      className={`w-full justify-start text-left ${link.color} hover:opacity-90 transition-opacity`}
                    >
                      <Link href={link.url} className="flex items-center">
                        <div className="bg-white/20 p-2 rounded mr-3">{link.icon}</div>
                        <div>
                          <div className="font-medium">{link.title}</div>
                          {link.description && <div className="text-xs opacity-80">{link.description}</div>}
                        </div>
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

