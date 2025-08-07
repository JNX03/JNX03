"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Image from "next/image"
import { Award, ExternalLink } from "lucide-react"

const projects = [
  {
    name: "Syntaxia",
    description:
      "Award-winning educational app that makes learning programming concepts more accessible and engaging. Features interactive code playgrounds, voice-guided tutorials, visual learning aids, and real-time feedback. Built with SwiftUI and advanced technologies including Speech Synthesis, Natural Language processing, and Vision frameworks.",
    url: "https://github.com/JNX03/Syntaxia",
    status: "Award Winner",
    category: "Educational Technology",
    award: "Swift Student Challenge 2025 Winner",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PcDiryVpDmgMgr3xXGbYGh1mMu3fvs.png"
  },
  {
    name: "EibrailleNext",
    description:
      "Advanced accessibility learning platform designed to assist blind and low-vision users in learning Braille. Features cutting-edge face recognition technology, comprehensive curriculum management, and maintains full W3C accessibility compliance standards. Winner of multiple international awards.",
    url: "https://eibraillenext.jnx03.xyz/",
    status: "Live",
    category: "Accessibility Technology",
    award: "Thailand ICT Awards 2023 Winner, APICTA 2023 Merit Award",
    image: "/img/eibraillenext.png"
  },
  {
    name: "MooDong AI",
    description:
      "Multi-task LSTM and vision model for zoo keeper augmentation that requires no manual labels. Innovative AI solution that demonstrates advanced machine learning capabilities in real-world applications.",
    status: "Award Winner",
    category: "Artificial Intelligence",
    award: "Moodeng AI Challenge Winner (Track 3)",
    image: "/placeholder.svg?height=200&width=400&text=MooDong+AI"
  },
  {
    name: "Nova Security Platform",
    description:
      "Enterprise-grade cybersecurity platform featuring automated vulnerability detection and comprehensive security analysis tools for modern web applications. Advanced threat detection and security assessment capabilities.",
    url: "https://nova.jnx03.xyz/",
    status: "In Development",
    category: "Cybersecurity",
    image: "/img/nova-security.png"
  },
  {
    name: "NoteX Learning Platform",
    description:
      "Centralized educational platform providing systematically organized study materials categorized by subject and educational level. Designed to enhance learning experiences through optimized content delivery and accessibility.",
    url: "https://notex.jnx03.xyz/",
    status: "Live",
    category: "Educational Technology",
    image: "/img/notex.png"
  },
  {
    name: "Space Robotics Solutions",
    description:
      "Advanced robotics programming solutions for space applications developed for the GISTDA Kibo Robot Programming Challenge. Innovative approach to space robotics and AI integration.",
    status: "Award Winner",
    category: "Space & Robotics",
    award: "GISTDA Best Presentation Award (5,000 Baht)",
    image: "/placeholder.svg?height=200&width=400&text=Space+Robotics"
  },
]

export default function ProjectsPage() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Card className={theme === "light" ? "bg-white border-gray-200 shadow-md" : ""}>
            <CardHeader>
              <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Project Portfolio</CardTitle>
              <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
                Award-winning projects spanning educational technology, accessibility solutions, artificial intelligence, and cybersecurity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={
                        theme === "light"
                          ? "bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                          : "hover:bg-accent/50 transition-colors overflow-hidden"
                      }
                    >
                      {project.image && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className={`text-lg ${theme === "light" ? "text-gray-900" : ""}`}>
                            {project.name}
                          </CardTitle>
                          <Badge
                            variant={project.status === "Live" ? "default" : project.status === "Award Winner" ? "destructive" : "secondary"}
                            className={
                              project.status === "Live" && theme === "light"
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : project.status === "Award Winner" && theme === "light"
                                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                                : ""
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        {project.category && (
                          <Badge variant="outline" className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}>
                            {project.category}
                          </Badge>
                        )}
                      </CardHeader>
                      <CardContent>
                        <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-muted-foreground"} mb-4 leading-relaxed`}>
                          {project.description}
                        </p>
                        {project.award && (
                          <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                            <Award className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs font-medium text-yellow-800">{project.award}</span>
                          </div>
                        )}
                        {project.url && (
                          <Link
                            href={project.url}
                            className={`inline-flex items-center gap-2 ${theme === "light" ? "text-indigo-600 hover:text-indigo-800" : "text-blue-500 hover:text-blue-400"} hover:underline text-sm font-medium`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Project
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
