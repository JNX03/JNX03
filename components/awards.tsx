"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

interface AwardsProps {
  awards: Award[]
}

export function Awards({ awards }: AwardsProps) {
  const { theme } = useTheme()
  const { t } = useLanguage()
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>🏆 {t("awardsAndRecognition")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
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
      </CardContent>
    </Card>
  )
}
