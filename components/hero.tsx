"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const titles = ["AI Developer", "Tech Innovator", "Cybersecurity Enthusiast"]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState("")

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-4">Chawabhon Netisingha</h1>
            <h2 className="text-2xl mb-4 h-8">{displayedTitle}</h2>
            <p className="text-xl mb-6 text-muted-foreground">
              Passionate about leveraging AI and technology to create innovative solutions that make a positive impact
              on society.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Computer Vision</Badge>
              <Badge variant="secondary">Natural Language Processing</Badge>
              <Badge variant="secondary">Full Stack Development</Badge>
              <Badge variant="secondary">Cybersecurity</Badge>
            </div>
            <Button asChild>
              <Link href="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-225">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQGGUriUQXl-Kw/profile-displayphoto-shrink_800_800/B4DZTcKo4yHIAc-/0/1738860565159?e=1745452800&v=beta&t=JHFPZzyh-K3hQ00A7vm5bys3PYec16oD2ETUEyntA30"
                alt="Chawabhon Netisingha"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-primary/20 shadow-xl"
                priority
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

