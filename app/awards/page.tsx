"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { OptimizedImage } from "@/components/optimized-image"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/i18n"
import { useState } from "react"

interface Award {
  title: string
  organization: string
  date: string
  description: string
  imageUrl: string
  link?: string
}

export default function AwardsPage() {
  const { theme } = useTheme()
  const { t } = useLanguage()
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  const awards: Award[] = [
    {
      title: t("moodengAiChallenge"),
      organization: "MIT Media Lab",
      date: "June 25, 2025",
      description: t("moodengAiChallengeDesc"),
      imageUrl: "/img/moodeng-ai-challenge.png", // Placeholder, replace if specific image provided
      link: "https://moodeng.media.mit.edu/",
    },
    {
      title: t("thailandInnovationAwards"),
      organization: "Thailand Innovation Awards",
      date: "June 27, 2025",
      description: t("thailandInnovationAwardsDesc"),
      imageUrl: "/img/tia-award.png", // Placeholder, replace if specific image provided
      link: "https://www.facebook.com/ThailandInnovationAwards",
    },
    {
      title: t("nationalSoftwareContest"),
      organization: "National Software Contest",
      date: "June 13, 2025",
      description: t("nationalSoftwareContestDesc"),
      imageUrl: "/img/nsc-award.png", // Placeholder, replace if specific image provided
    },
    {
      title: t("swiftStudentChallenge2025"),
      organization: "Apple",
      date: "April 23, 2025",
      description: t("swiftStudentChallenge2025Desc"),
      imageUrl: "/img/swift-student-challenge.png",
    },
    {
      title: t("aiInnovatorAward"),
      organization: "AI Association of Thailand",
      date: "December 15, 2024",
      description: t("aiInnovatorDesc"),
      imageUrl: "/img/ai-innovator-award.png",
    },
    {
      title: t("thailandICTAwards"),
      organization: "Ministry of Digital Economy and Society",
      date: "November 20, 2023",
      description: t("thailandICTDesc"),
      imageUrl: "/img/thailand-ict-award.png",
    },
    {
      title: t("apicta2023"),
      organization: "Asia Pacific ICT Alliance",
      date: "December 10, 2023",
      description: t("apictaDesc"),
      imageUrl: "/img/apicta-award.png",
    },
  ]

  return (
    <div className={`min-h-screen flex flex-col ${theme === "light" ? "text-gray-800" : ""}`}>
      <main className="flex-grow container mx-auto px-4 py-8 mt-14">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("awardsAndRecognition")}
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl"
            >
              <Card className={`h-full overflow-hidden border-0 shadow-lg ${theme === "light" ? "bg-white" : ""}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <OptimizedImage
                    src={
                      failedImages[index]
                        ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(award.title)}`
                        : award.imageUrl ||
                          `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(award.title)}`
                    }
                    alt={award.title}
                    width={400}
                    height={200}
                    className="transition-transform duration-500 hover:scale-110"
                    loading="lazy" // Ensure lazy loading
                    onError={() => handleImageError(index)}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {award.organization} - {award.date}
                  </p>
                  <p className={`${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                    {award.description}
                  </p>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:underline mt-4 inline-block"
                    >
                      {t("learnMore")}
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
