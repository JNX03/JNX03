"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import Script from "next/script"
import { useLanguage } from "@/lib/i18n"

// Custom cursor component
const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const { theme } = useTheme()

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY])

  // Adjust cursor color based on theme
  const dotColor = theme === "light" ? "rgba(79, 70, 229, 0.6)" : "rgba(79, 70, 229, 0.6)"
  const ringColor = theme === "light" ? "rgba(79, 70, 229, 0.3)" : "rgba(79, 70, 229, 0.3)"

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        style={{
          position: "fixed",
          left: cursorXSpring,
          top: cursorYSpring,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: dotColor,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      />
      <motion.div
        className="cursor-ring hidden md:block"
        style={{
          position: "fixed",
          left: cursorXSpring,
          top: cursorYSpring,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: `2px solid ${ringColor}`,
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  )
}

// Magnetic element component with reduced movement for better usability
const MagneticElement = ({
  children,
  className,
  strength = 0.1, // Reduced from 0.2 to 0.1 for less movement
}: {
  children: React.ReactNode
  className?: string
  strength?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = (clientX - (left + width / 2)) * strength
    const y = (clientY - (top + height / 2)) * strength

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.03 : 1, // Reduced from 1.05 to 1.03 for subtler effect
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  )
}

// Floating animation component
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 4,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Project card component
const ProjectCard = ({
  title,
  description,
  image,
  delay = 0,
}: {
  title: string
  description: string
  image: string
  delay?: number
}) => {
  const { theme } = useTheme()
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="overflow-hidden rounded-xl"
    >
      <MagneticElement className="h-full" strength={0.05}>
        <Card className={`h-full overflow-hidden border-0 shadow-lg ${theme === "light" ? "bg-white" : ""}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={
                imageError
                  ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(title)}`
                  : image || "/placeholder.svg"
              }
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110"
              loading="lazy" // Ensure lazy loading for project images
              onError={handleImageError}
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </MagneticElement>
    </motion.div>
  )
}

export default function Home() {
  const { theme } = useTheme()
  const { t } = useLanguage()
  const [aiInnovatorImageError, setAiInnovatorImageError] = useState(false)
  const [thailandIctImageError, setThailandIctImageError] = useState(false)
  const [apictaImageError, setApictaImageError] = useState(false)

  const handleAiInnovatorImageError = () => setAiInnovatorImageError(true)
  const handleThailandIctImageError = () => setThailandIctImageError(true)
  const handleApictaImageError = () => setApictaImageError(true)

  // Parallax effect for background elements
  const y = useMotionValue(0)
  const x = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const moveX = (e.clientX - innerWidth / 2) / 50
      const moveY = (e.clientY - innerHeight / 2) / 50

      x.set(moveX)
      y.set(moveY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [x, y])

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden ${theme === "light" ? "text-gray-800" : ""}`}>
      <CustomCursor />

      {/* Background elements - adjusted for light theme */}
      <div
        className={`fixed inset-0 -z-10 ${
          theme === "light"
            ? "bg-gradient-to-b from-gray-50 via-white to-gray-50"
            : "bg-gradient-to-b from-background via-background to-background/80"
        }`}
      />

      <motion.div
        className={`fixed top-20 right-20 w-64 h-64 rounded-full ${
          theme === "light" ? "bg-indigo-500/5" : "bg-indigo-500/10"
        } blur-3xl`}
        style={{ x: useTransform(x, (value) => value * -1.5), y: useTransform(y, (value) => value * -1.5) }}
      />

      <motion.div
        className={`fixed bottom-20 left-20 w-80 h-80 rounded-full ${
          theme === "light" ? "bg-blue-500/5" : "bg-blue-500/10"
        } blur-3xl`}
        style={{ x: useTransform(x, (value) => value * 1.2), y: useTransform(y, (value) => value * 1.2) }}
      />

      <motion.div
        className={`fixed top-1/3 left-1/4 w-40 h-40 rounded-full ${
          theme === "light" ? "bg-purple-500/5" : "bg-purple-500/10"
        } blur-3xl`}
        style={{ x: useTransform(x, (value) => value * 0.8), y: useTransform(y, (value) => value * 0.8) }}
      />

      {/* We're not rendering the Navigation component here anymore */}

      <main className="flex-grow container mx-auto px-4 py-8 mt-14">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 items-center lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <motion.h1
                  className={`text-5xl sm:text-6xl font-bold mb-4 ${
                    theme === "light"
                      ? "text-indigo-600"
                      : "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Chawabhon Netisingha
                </motion.h1>

                <motion.div
                  className="relative h-12 mb-6 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-40, -80, -120, -160, -200, 0] }}
                    transition={{
                      duration: 5,
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                    }}
                    className="absolute"
                  >
                    <h2 className="text-3xl font-bold text-indigo-500">{t("aiDeveloper")}</h2>
                    <h2 className="text-3xl font-bold text-blue-500 mt-10">{t("techInnovator")}</h2>
                    <h2 className="text-3xl font-bold text-purple-500 mt-10">{t("cybersecurityEnthusiast")}</h2>
                    <h2 className="text-3xl font-bold text-pink-500 mt-10">{t("studentResearcher")}</h2>
                    <h2 className="text-3xl font-bold text-green-500 mt-10">{t("problemSolver")}</h2>
                    <h2 className="text-3xl font-bold text-indigo-500 mt-10">{t("aiDeveloper")}</h2>
                  </motion.div>
                </motion.div>

                <motion.p
                  className={`text-xl mb-8 ${theme === "light" ? "text-gray-600" : "text-muted-foreground"} max-w-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t("heroDescription")}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[
                    t("machineLearning"),
                    t("computerVision"),
                    t("naturalLanguageProcessing"),
                    t("fullStackDevelopment"),
                    t("cybersecurity"),
                  ].map((tag, i) => (
                    <motion.span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        theme === "light" ? "bg-indigo-100 text-indigo-700" : "bg-primary/10 text-primary"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <MagneticElement strength={0.05}>
                    <Button
                      asChild
                      size="lg"
                      className={`${
                        theme === "light"
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      } border-0`}
                    >
                      <Link href="/contact">
                        {t("getInTouch")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticElement>

                  <MagneticElement strength={0.05}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className={`border-2 ${theme === "light" ? "border-indigo-600 text-indigo-600 hover:bg-indigo-50" : ""}`}
                    >
                      <Link href="/projects">{t("viewProjects")}</Link>
                    </Button>
                  </MagneticElement>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex justify-center"
              >
                <FloatingElement>
                  <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                    <Image
                      src="/img/profile.png"
                      alt="Chawabhon Netisingha at Arundel Cathedral"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      priority
                    />
                  </div>
                </FloatingElement>

                <motion.div
                  className={`absolute -bottom-4 -right-4 ${
                    theme === "light" ? "bg-white" : "bg-background"
                  } rounded-lg p-4 shadow-lg border ${theme === "light" ? "border-indigo-200" : "border-primary/20"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <p className="font-semibold">{t("latestAchievement")}</p>
                  <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                    AI Innovator Award 2024
                  </p>
                </motion.div>

                <motion.div
                  className={`absolute -top-4 -left-4 ${
                    theme === "light" ? "bg-white" : "bg-background"
                  } rounded-lg p-4 shadow-lg border ${theme === "light" ? "border-indigo-200" : "border-primary/20"}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <p className="font-semibold">Super AI Engineer</p>
                  <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                    SS5 Level 2 (500712)
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("featuredProjects")}
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title={t("eibrailleNext")}
              description={t("eibrailleNextDesc")}
              image="/img/eibraillenext.png"
              delay={0.1}
            />
            <ProjectCard
              title={t("novaSecurity")}
              description={t("novaSecurityDesc")}
              image="/img/nova-security.png"
              delay={0.2}
            />
            <ProjectCard title={t("noteX")} description={t("noteXDesc")} image="/img/notex.png" delay={0.3} />
          </div>
        </section>

        {/* Yuki-Chan Section */}
        <section className="py-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">{t("meetYukiChan")}</h2>
              <p className={`text-lg ${theme === "light" ? "text-gray-600" : "text-muted-foreground"} mb-6`}>
                {t("yukiChanDesc")}
              </p>
              {/* Reduced magnetic effect strength for better usability */}
              <Button
                asChild
                className={`${
                  theme === "light"
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                } border-0`}
              >
                <Link href="/projects">
                  {t("learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <FloatingElement delay={0.2}>
                <div
                  className={`relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl ${theme === "light" ? "bg-gray-50" : ""}`}
                >
                  <Image
                    src="/img/yuki-chan.png"
                    alt="Yuki-Chan AI Assistant"
                    layout="fill"
                    objectFit="contain"
                    className={`${
                      theme === "light"
                        ? "bg-gradient-to-b from-gray-50 to-white"
                        : "bg-gradient-to-b from-background to-background/50"
                    } p-4`}
                    loading="lazy" // Ensure lazy loading for Yuki-Chan image
                    onError={() => {
                      /* handle error if needed */
                    }}
                  />
                </div>
              </FloatingElement>
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("awardsAndRecognition")}
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-xl"
            >
              <MagneticElement className="h-full" strength={0.05}>
                <Card className={`h-full overflow-hidden border-0 shadow-lg ${theme === "light" ? "bg-white" : ""}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={
                        aiInnovatorImageError
                          ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(t("aiInnovatorAward"))}`
                          : "/img/ai-innovator-award.png"
                      }
                      alt="AI Innovator Award 2024"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                      loading="lazy" // Ensure lazy loading
                      onError={handleAiInnovatorImageError}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{t("aiInnovatorAward")}</h3>
                    <p className={`${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                      {t("aiInnovatorDesc")}
                    </p>
                  </CardContent>
                </Card>
              </MagneticElement>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-xl"
            >
              <MagneticElement className="h-full" strength={0.05}>
                <Card className={`h-full overflow-hidden border-0 shadow-lg ${theme === "light" ? "bg-white" : ""}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={
                        thailandIctImageError
                          ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(t("thailandICTAwards"))}`
                          : "/img/thailand-ict-award.png"
                      }
                      alt="Thailand ICT Awards 2023"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                      loading="lazy" // Ensure lazy loading
                      onError={handleThailandIctImageError}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{t("thailandICTAwards")}</h3>
                    <p className={`${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                      {t("thailandICTDesc")}
                    </p>
                  </CardContent>
                </Card>
              </MagneticElement>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden rounded-xl"
            >
              <MagneticElement className="h-full" strength={0.05}>
                <Card className={`h-full overflow-hidden border-0 shadow-lg ${theme === "light" ? "bg-white" : ""}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={
                        apictaImageError
                          ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(t("apicta2023"))}`
                          : "/img/apicta-award.png"
                      }
                      alt="APICTA 2023"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                      loading="lazy" // Ensure lazy loading
                      onError={handleApictaImageError}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{t("apicta2023")}</h3>
                    <p className={`${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                      {t("apictaDesc")}
                    </p>
                  </CardContent>
                </Card>
              </MagneticElement>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          className={`mt-16 mb-8 p-8 rounded-2xl ${
            theme === "light"
              ? "bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
              : "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-primary/20"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{t("letsConnect")}</h2>
            <p className={`${theme === "light" ? "text-gray-600" : "text-muted-foreground"} mb-6`}>
              {t("letsConnectDesc")}
            </p>
            <Button
              asChild
              size="lg"
              className={`${
                theme === "light"
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
              } border-0`}
            >
              <Link href="/contact">
                {t("getInTouch")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
      <Script id="homepage-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Chawabhon Netisingha",
              "alternateName": "JNX03",
              "description": "Developer and tech enthusiast with a passion for AI, cybersecurity, and accessibility technology.",
              "image": "https://media.licdn.com/dms/image/v2/D4D03AQGGUriUQXl-Kw/profile-displayphoto-shrink_800_800/B4DZTcKo4yHIAc-/0/1738860565159?e=1745452800&v=beta&t=JHFPZzyh-K3hQ00A7vm5bys3PYec16oD2ETUEyntA30",
              "url": "https://jnx03.xyz",
              "sameAs": [
                "https://github.com/JNX03",
                "https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a",
                "https://www.instagram.com/jxxn03z/",
                "https://www.youtube.com/@Jnx03",
                "https://www.youtube.com/@Jnx03Studio",
                "https://www.tiktok.com/@jxxn03z"
              ],
              "jobTitle": "Developer",
              "knowsAbout": ["Artificial Intelligence", "Cybersecurity", "Accessibility Technology", "Web Development"],
              "award": [
                "Swift Student Challenge 2025 Winner",
                "AI Innovator Award 2024",
                "Thailand ICT Awards 2023 Winner",
                "Asia Pacific ICT Alliance Award 2023 Merit Award",
                "Moodeng AI Challenge Winner",
                "Thailand Innovation Awards (TIA) Participant",
                "National Software Contest (NSC) Participant",
                "Best Presentation Award from GISTDA - Kibo Robot Programming Challenge"
              ]
            }
          }
        `}
      </Script>
    </div>
  )
}
