"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PerformanceImage } from "@/components/performance-image"
import { useLanguage } from "@/lib/i18n"

export function Hero() {
  const { t } = useLanguage()
  const titles = [t("aiDeveloper"), t("techInnovator"), t("cybersecurityEnthusiast")]
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState("")

  useEffect(() => {
    // Add structured data for the person
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Chawabhon Netisingha",
      alternateName: "JNX03",
      description: "AI Developer, Tech Innovator, and Cybersecurity Enthusiast",
      image: "https://jnx03.xyz/img/profile.png",
      url: "https://jnx03.xyz",
      sameAs: [
        "https://github.com/JNX03",
        "https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a",
        "https://www.instagram.com/jxxn03z/",
      ],
    }

    // Add the schema to the page
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(personSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setDisplayedTitle(titles[titleIndex].slice(0, i))
      i++
      if (i > titles[titleIndex].length) clearInterval(typing)
    }, 100)

    return () => clearInterval(typing)
  }, [titleIndex])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 items-center lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl font-bold mb-4">Chawabhon Netisingha</h1>
            <h2 className="text-2xl mb-4 h-8">{displayedTitle}</h2>
            <p className="text-xl mb-6 text-muted-foreground">{t("heroDescription")}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">{t("machineLearning")}</Badge>
              <Badge variant="secondary">{t("computerVision")}</Badge>
              <Badge variant="secondary">{t("naturalLanguageProcessing")}</Badge>
              <Badge variant="secondary">{t("fullStackDevelopment")}</Badge>
              <Badge variant="secondary">{t("cybersecurity")}</Badge>
            </div>
            <Button asChild>
              <Link href="/contact">
                {t("getInTouch")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <PerformanceImage
                src="/img/profile.png"
                alt="Chawabhon Netisingha at Arundel Cathedral with flowers in the background"
                width={256}
                height={256}
                className="rounded-full border-4 border-primary/20 shadow-xl"
                priority={true}
                quality={85}
                placeholder="blur"
                blurDataURL="/img/profile.png"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="font-semibold">Latest Achievement</p>
              <p className="text-sm text-muted-foreground">AI Innovator Award 2024</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
