"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useState } from "react"

interface Award {
  name: string
  position?: string
  category?: string
  description: string
  color?: "gold" | "silver" | "bronze" | "blue"
  image?: string
}

const awards: Award[] = [
  {
    name: "Moodeng AI Challenge",
    position: "Winner (Track 3)",
    description:
      "Awarded for MooDong, a multi-task LSTM and vision model for zoo keeper augmentation, requiring no manual labels.",
    color: "gold",
    image: `/placeholder.svg?height=200&width=400&text=${encodeURIComponent("Moodeng AI Challenge")}`,
  },
  {
    name: "Thailand Innovation Awards (TIA)",
    position: "Selected Participant",
    description: "Selected to participate in the Thailand Innovation Awards INDEX and Camp program.",
    color: "blue",
    image: `/placeholder.svg?height=200&width=400&text=${encodeURIComponent("TIA")}`,
  },
  {
    name: "National Software Contest (NSC)",
    position: "Selected Participant",
    description: "Selected to participate in the National Software Contest INDEX program.",
    color: "blue",
    image: `/placeholder.svg?height=200&width=400&text=${encodeURIComponent("NSC")}`,
  },
  {
    name: "Swift Student Challenge 2025",
    position: "Winner",
    description: "Selected as a winner for the Syntaxia project, an innovative educational app built with SwiftUI.",
    color: "gold",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PcDiryVpDmgMgr3xXGbYGh1mMu3fvs.png",
  },
  {
    name: "AI Innovator Award 2024",
    position: "Winner (1st Place)",
    description: "Recognized for innovative contributions in AI technology.",
    color: "gold",
    image: "/img/ai-innovator-award.png",
  },
  {
    name: "Thailand ICT Awards 2023",
    position: "Winner Award",
    category: "Senior Category",
    description: "Awarded for outstanding achievements in Information and Communication Technology.",
    color: "gold",
    image: "/img/thailand-ict-award.png",
  },
  {
    name: "Asia Pacific ICT Alliance Award 2023 (APICTA2023)",
    position: "Merit Award",
    description: "Received recognition for excellence in ICT on an international level.",
    color: "silver",
    image: "/img/apicta-award.png",
  },
  {
    name: "Super AI Engineer Hackathon Online",
    position: "3rd Place",
    category: "MD&A Disclosure Quality Assessment",
    description: "Demonstrated proficiency in AI engineering and data analysis.",
    color: "bronze",
    image: "/awards/super-ai-hackathon.jpg",
  },
  {
    name: "Kamalasai AI and Technology Thailand Championship #8",
    position: "Honorary Mention (Gold Medal)",
    description: "Recognized for the application of AI using the CiRA Core Platform.",
    color: "gold",
    image: "/awards/kamalasai-ai-8.jpg",
  },
  {
    name: "Kamalasai AI Robotics Thailand Championship #7",
    position: "3rd Place",
    description: "Showcased skills in AI and robotics technology.",
    color: "bronze",
    image: "/awards/kamalasai-ai-7.jpg",
  },
  {
    name: "PIM Robotics Playground 2023",
    description: "Participated in the project showcase and robot competition for young innovators.",
    color: "blue",
    image: "/awards/pim-robotics-2023.jpg",
  },
  {
    name: "AIDS Prevention Video Clip Competition",
    position: "1st Place",
    description: "Created an impactful video to raise awareness about AIDS prevention.",
    color: "gold",
    image: "/awards/aids-prevention-video.jpg",
  },
  {
    name: "Swift Student Challenge 2023",
    description: "Participated in Apple's global coding challenge for students.",
    color: "blue",
    image: "/awards/swift-student-challenge-2023.jpg",
  },
  {
    name: "Science Project Competition",
    position: "Honorable Mention",
    description: "Recognized for an innovative science project.",
    color: "silver",
    image: "/awards/science-project-competition.jpg",
  },
  {
    name: "FIRST Tech Challenge Centerstage",
    description: "Participated in the robotics competition, demonstrating technical skills and teamwork.",
    color: "blue",
    image: "/awards/ftc-centerstage.jpg",
  },
  {
    name: "FIRST Tech Challenge Into the Deep",
    description: "Engaged in the challenging robotics competition, showcasing problem-solving abilities.",
    color: "blue",
    image: "/awards/ftc-into-the-deep.jpg",
  },
]

const getBadgeColor = (color: Award["color"], theme: string | undefined) => {
  if (theme === "light") {
    switch (color) {
      case "gold":
        return "bg-amber-400 text-amber-900"
      case "silver":
        return "bg-gray-300 text-gray-800"
      case "bronze":
        return "bg-amber-600 text-white"
      case "blue":
      default:
        return "bg-indigo-500 text-white"
    }
  } else {
    switch (color) {
      case "gold":
        return "bg-yellow-500 text-black"
      case "silver":
        return "bg-gray-300 text-black"
      case "bronze":
        return "bg-amber-600 text-white"
      case "blue":
      default:
        return "bg-blue-500 text-white"
    }
  }
}

export default function AwardsPage() {
  const { theme } = useTheme()
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className={theme === "light" ? "bg-white border-gray-200 shadow-md" : ""}>
          <CardHeader>
            <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Awards and Achievements</CardTitle>
            <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
              Recognitions and participations in various competitions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {awards.map((award, index) => (
                <motion.div key={index} variants={item}>
                  <Card
                    className={`overflow-hidden ${theme === "light" ? "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow" : "hover:bg-accent/50 transition-colors"}`}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={
                          failedImages[index]
                            ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(award.name)}`
                            : award.image ||
                              `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(award.name)}`
                        }
                        alt={award.name}
                        layout="fill"
                        objectFit="cover"
                        onError={() => handleImageError(index)}
                        loading="lazy" // Explicitly set to lazy load
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`font-semibold text-lg ${theme === "light" ? "text-gray-900" : ""}`}>
                          {award.name}
                        </h3>
                        {award.position && (
                          <Badge className={getBadgeColor(award.color, theme)}>{award.position}</Badge>
                        )}
                      </div>
                      {award.category && (
                        <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-muted-foreground"} mb-2`}>
                          {award.category}
                        </p>
                      )}
                      <p className={`text-sm ${theme === "light" ? "text-gray-600" : ""}`}>{award.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
