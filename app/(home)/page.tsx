"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Users, Target, Briefcase } from 'lucide-react'
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
  strength = 0.1,
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
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
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
  url,
  status,
}: {
  title: string
  description: string
  image: string
  delay?: number
  url?: string
  status?: string
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
        <Card className={`h-full overflow-hidden border shadow-sm hover:shadow-md transition-shadow ${theme === "light" ? "bg-white border-gray-200" : ""}`}>
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
              className="transition-transform duration-300 hover:scale-105"
              loading="lazy"
              onError={handleImageError}
            />
            {status && (
              <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 border">
                {status}
              </Badge>
            )}
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className={`text-sm leading-relaxed mb-4 ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              {description}
            </p>
            {url && (
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </MagneticElement>
    </motion.div>
  )
}

// Award card component
const AwardCard = ({
  title,
  organization,
  year,
  description,
  image,
  delay = 0,
}: {
  title: string
  organization: string
  year: string
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="overflow-hidden rounded-xl"
    >
      <MagneticElement className="h-full" strength={0.05}>
        <Card className={`h-full overflow-hidden border shadow-sm hover:shadow-md transition-shadow ${theme === "light" ? "bg-white border-gray-200" : ""}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={
                imageError
                  ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(title)}`
                  : image
              }
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <Badge variant="secondary" className="text-xs">
                {year}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className={`text-sm font-medium mb-2 ${theme === "light" ? "text-indigo-600" : "text-indigo-400"}`}>
              {organization}
            </p>
            <p className={`text-sm leading-relaxed ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              {description}
            </p>
          </CardContent>
        </Card>
      </MagneticElement>
    </motion.div>
  )
}

export default function Home() {
  const { theme } = useTheme()
  const { t } = useLanguage()

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
    <div className={`min-h-screen flex flex-col relative overflow-hidden ${theme === "light" ? "text-gray-800 bg-gray-50" : ""}`}>
      <CustomCursor />

      {/* Background elements */}
      <div
        className={`fixed inset-0 -z-10 ${
          theme === "light"
            ? "bg-gradient-to-b from-white via-gray-50 to-white"
            : "bg-gradient-to-b from-background via-background to-background/80"
        }`}
      />

      <motion.div
        className={`fixed top-20 right-20 w-64 h-64 rounded-full ${
          theme === "light" ? "bg-indigo-500/3" : "bg-indigo-500/10"
        } blur-3xl`}
        style={{ x: useTransform(x, (value) => value * -1.5), y: useTransform(y, (value) => value * -1.5) }}
      />

      <motion.div
        className={`fixed bottom-20 left-20 w-80 h-80 rounded-full ${
          theme === "light" ? "bg-blue-500/3" : "bg-blue-500/10"
        } blur-3xl`}
        style={{ x: useTransform(x, (value) => value * 1.2), y: useTransform(y, (value) => value * 1.2) }}
      />

      <main className="flex-grow container mx-auto px-4 py-8 mt-14">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 items-center lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <motion.h1
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                    theme === "light"
                      ? "text-gray-900"
                      : "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Chawabhon Netisingha
                </motion.h1>

                <motion.h2
                  className={`text-2xl sm:text-3xl font-semibold mb-6 ${
                    theme === "light" ? "text-indigo-600" : "text-indigo-400"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Chief Executive Officer & Distinguished Technology Fellow
                </motion.h2>

                <motion.p
                  className={`text-lg mb-8 leading-relaxed ${theme === "light" ? "text-gray-600" : "text-muted-foreground"} max-w-2xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Distinguished executive and technology visionary leading enterprise-scale artificial intelligence initiatives and accessibility innovation programs. 
                  Principal architect of internationally acclaimed technology solutions delivering quantifiable returns on investment and sustainable competitive advantages across global markets.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[
                    "Enterprise AI Architecture",
                    "Strategic Technology Leadership",
                    "Digital Transformation",
                    "Executive Project Governance",
                    "Innovation Strategy & Development",
                  ].map((tag, i) => (
                    <motion.span
                      key={tag}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${
                        theme === "light" 
                          ? "bg-white border-gray-200 text-gray-700 hover:border-indigo-300" 
                          : "bg-background/50 border-primary/20 text-foreground hover:border-primary/40"
                      } transition-colors`}
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
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
                          : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      } border-0 px-8 py-3`}
                    >
                      <Link href="/contact">
                        Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticElement>

                  <MagneticElement strength={0.05}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className={`border-2 px-8 py-3 ${
                        theme === "light" 
                          ? "border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-white shadow-md" 
                          : "border-primary text-primary hover:bg-primary/10"
                      }`}
                    >
                      <Link href="/projects">View Portfolio</Link>
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
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="/img/profile.png"
                    alt="Chawabhon Netisingha - Technology Innovation Leader"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                    priority
                  />
                </div>

                <motion.div
                  className={`absolute -bottom-6 -right-6 ${
                    theme === "light" ? "bg-white border-gray-200" : "bg-background border-primary/20"
                  } rounded-xl p-4 shadow-xl border`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-semibold text-sm">Distinguished Honor</p>
                      <p className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                        Apple Distinguished Developer 2025
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`absolute -top-6 -left-6 ${
                    theme === "light" ? "bg-white border-gray-200" : "bg-background border-primary/20"
                  } rounded-xl p-4 shadow-xl border`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-indigo-500" />
                    <div>
                      <p className="font-semibold text-sm">Executive Position</p>
                      <p className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                        Chief Executive & Technology Fellow
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Under Executive Management */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="h-8 w-8 text-indigo-500" />
              <h2 className="text-3xl font-bold">Executive Technology Portfolio</h2>
            </div>
            <p className={`text-lg max-w-4xl mx-auto ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              Strategic direction and executive governance of high-impact technology initiatives across accessibility innovation, healthcare transformation, and enterprise artificial intelligence deployment. 
              Each portfolio component demonstrates measurable ROI, stakeholder value creation, and sustainable competitive differentiation through proprietary technological assets.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* EibrailleNext - Primary Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className={`overflow-hidden border shadow-lg ${theme === "light" ? "bg-white border-gray-200" : ""}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/img/eibraillenext.png"
                      alt="EibrailleNext - Accessibility Learning Platform"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="h-6 w-6 text-indigo-500" />
                      <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">
                        Flagship Project
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">EibrailleNext</h3>
                    <p className={`text-base leading-relaxed mb-6 ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                      Mission-critical accessibility learning platform architected for enterprise deployment and scalable Braille education delivery. 
                      Features proprietary computer vision algorithms, enterprise-grade curriculum management infrastructure, and maintains comprehensive W3C accessibility compliance frameworks with full audit trails.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-xs font-medium">ISEF 2025 Finalist</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-500" />
                        <span className="text-xs font-medium">TICTA 2025 Winner</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-blue-500" />
                        <span className="text-xs font-medium">APICTA 2025 Merit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-indigo-500" />
                        <span className="text-xs font-medium">Cross-functional Team</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href="https://eibraillenext.jnx03.xyz/" target="_blank" rel="noopener noreferrer">
                        Access Platform <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Additional Managed Projects */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className={`h-full overflow-hidden border shadow-md ${theme === "light" ? "bg-white border-gray-200" : ""}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="h-5 w-5 text-green-500" />
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Healthcare Innovation
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3">PETRA</h3>
                    <p className={`text-sm leading-relaxed mb-4 ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                      Enterprise healthcare platform leveraging advanced respiratory rehabilitation protocols and Triflow exercise methodologies to optimize patient lung function metrics. 
                      Achieved strategic partnership recognition through Samsung's premier innovation competition framework.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-orange-500" />
                        <span className="text-xs font-medium">Samsung Solve for Tomorrow 2024 - Runner-up</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-blue-500" />
                        <span className="text-xs font-medium">Healthcare Technology Focus</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className={`h-full overflow-hidden border shadow-md ${theme === "light" ? "bg-white border-gray-200" : ""}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="h-5 w-5 text-purple-500" />
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                        Medical Technology
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3">MedChic</h3>
                    <p className={`text-sm leading-relaxed mb-4 ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                      Strategic healthcare technology platform engineered to transform medical education accessibility through proprietary technological frameworks. 
                      Integrated within Chiang Mai University's distinguished MEDCHIC Innovation ecosystem as a flagship development initiative.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-purple-500" />
                        <span className="text-xs font-medium">Healthcare Innovation Award</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-blue-500" />
                        <span className="text-xs font-medium">Medical Education Focus</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className={`h-full overflow-hidden border shadow-md ${theme === "light" ? "bg-white border-gray-200" : ""}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="h-5 w-5 text-teal-500" />
                      <Badge className="bg-teal-100 text-teal-800 border-teal-200">
                        Assistive Technology
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3">ALDS</h3>
                    <p className={`text-sm leading-relaxed mb-4 ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                      Enterprise-scale Learning and Development Solutions architecture specializing in assistive hearing technology and adaptive learning infrastructure deployment. 
                      Distinguished excellence recognition through Samsung's competitive innovation assessment framework.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-teal-500" />
                        <span className="text-xs font-medium">Samsung Excellence Award</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-blue-500" />
                        <span className="text-xs font-medium">Assistive Learning Technology</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EibrailleNext Awards Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Distinguished Achievement Portfolio</h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              International recognition and prestigious awards for technology excellence, innovation leadership, and measurable business impact across global markets
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AwardCard
              title="Intel Global Impact Challenge - Distinguished Innovation Award"
              organization="Intel Corporation - Corporate Innovation Division"
              year="2024"
              description="Prestigious recognition for revolutionary technology solutions addressing mission-critical global challenges in accessibility infrastructure and educational technology transformation."
              image="/placeholder.svg?height=200&width=400&text=Intel+Global+Impact+Challenge"
              delay={0.1}
            />
            <AwardCard
              title="International Science and Engineering Fair - Finalist Distinction"
              organization="Society for Science & Regeneron ISEF"
              year="2025"
              description="Distinguished selection for participation in the world's most prestigious international pre-college science competition, representing excellence in scientific research and innovation."
              image="/placeholder.svg?height=200&width=400&text=ISEF+2025"
              delay={0.2}
            />
            <AwardCard
              title="PETRA Innovation Excellence Award"
              organization="Samsung Electronics - Corporate Social Innovation"
              year="2024"
              description="Strategic recognition for developing mission-critical healthcare solutions that demonstrate measurable impact and technological innovation in addressing complex societal challenges."
              image="/placeholder.svg?height=200&width=400&text=PETRA+Samsung+Award"
              delay={0.3}
            />
            <AwardCard
              title="MedChic Healthcare Technology Leadership Award"
              organization="Chiang Mai University - Faculty of Medicine"
              year="2024"
              description="Distinguished recognition for breakthrough healthcare technology solutions advancing medical education accessibility through innovative technological frameworks and infrastructure development."
              image="/placeholder.svg?height=200&width=400&text=MedChic+Award"
              delay={0.4}
            />
            <AwardCard
              title="ALDS Technology Excellence - Distinguished Achievement"
              organization="Samsung Electronics - Global Innovation Program"
              year="2024"
              description="Premier excellence recognition for advanced learning and development solutions architecture in assistive technology, demonstrating significant impact on accessibility infrastructure and user experience optimization."
              image="/placeholder.svg?height=200&width=400&text=ALDS+Samsung+Award"
              delay={0.5}
            />
            <AwardCard
              title="Thailand ICT Awards - National Champion"
              organization="Thailand ICT Excellence Council"
              year="2023"
              description="National champion recognition in the Senior Category for distinguished contribution to information and communication technology innovation, accessibility infrastructure advancement, and technological leadership excellence."
              image="/img/thailand-ict-award.png"
              delay={0.6}
            />
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
            Strategic Development Initiatives
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Nova Security Platform"
              description="Enterprise-grade cybersecurity architecture featuring proprietary automated vulnerability assessment algorithms and comprehensive threat analysis frameworks for mission-critical web application infrastructure."
              image="/img/nova-security.png"
              url="https://nova.jnx03.xyz/"
              status="In Development"
              delay={0.1}
            />
            <ProjectCard
              title="NoteX Learning Platform"
              description="Strategic educational technology platform delivering systematically organized academic resources through advanced categorization algorithms and optimized learning pathway architectures."
              image="/img/notex.png"
              url="https://notex.jnx03.xyz/"
              status="Live"
              delay={0.2}
            />
            <ProjectCard
              title="Yuki-Chan AI Assistant"
              description="Enterprise AI assistant architecture engineered to deliver personalized productivity optimization through proprietary natural language processing algorithms and advanced machine learning frameworks."
              image="/img/yuki-chan.png"
              status="Research Phase"
              delay={0.3}
            />
          </div>
        </section>

        {/* Personal Awards Section */}
        <section className="py-16">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Executive Leadership Recognition
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AwardCard
              title="Apple Distinguished Developer - Swift Challenge Winner"
              organization="Apple Inc. - Worldwide Developer Relations"
              year="2025"
              description="Distinguished selection as winner in Apple's premier Swift Student Challenge, recognizing exceptional technical innovation, coding excellence, and revolutionary app development capabilities."
              image="/placeholder.svg?height=200&width=400&text=Swift+Student+Challenge"
              delay={0.1}
            />
            <AwardCard
              title="Distinguished AI Innovation Leadership Award"
              organization="International Technology Innovation Council"
              year="2024"
              description="Prestigious recognition for transformational contributions to artificial intelligence architecture, machine learning framework development, and breakthrough applications in enterprise technology solutions."
              image="/img/ai-innovator-award.png"
              delay={0.2}
            />
            <AwardCard
              title="APICTA Distinguished Merit Award"
              organization="Asia Pacific ICT Alliance - Regional Excellence Board"
              year="2023"
              description="Distinguished merit recognition for exceptional excellence in information and communication technology innovation, demonstrating regional leadership and technological advancement across the Asia Pacific economic zone."
              image="/img/apicta-award.png"
              delay={0.3}
            />
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          className={`mt-16 mb-8 p-8 rounded-2xl border ${
            theme === "light"
              ? "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-100"
              : "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-primary/20"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Strategic Partnership Opportunities</h2>
            <p className={`${theme === "light" ? "text-gray-600" : "text-muted-foreground"} mb-6 leading-relaxed`}>
              Seeking strategic partnerships for technology innovation initiatives, enterprise AI development, or accessibility solution deployment? 
              Available for executive consultation, technology advisory roles, and strategic collaboration discussions with qualified organizations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className={`${
                  theme === "light"
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                } border-0 px-8`}
              >
                <Link href="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className={`px-8 ${
                  theme === "light" 
                    ? "border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-white shadow-md" 
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
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
              "description": "Technology Innovation Leader and AI Developer specializing in accessibility technology and artificial intelligence solutions.",
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
              "jobTitle": "Technology Innovation Leader & AI Developer",
              "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Accessibility Technology", "Project Management", "Innovation Leadership", "Cybersecurity", "Web Development"],
              "award": [
                "Swift Student Challenge 2025 Winner",
                "AI Innovator Award 2024",
                "Thailand ICT Awards 2023 Winner",
                "Asia Pacific ICT Alliance Award 2023 Merit Award",
                "Intel Global Impact Challenge Recognition",
                "ISEF 2025 Participant",
                "PETRA - Samsung Solve for Tomorrow Award",
                "MedChic Healthcare Innovation Award",
                "ALDS - Samsung Solve for Tomorrow Excellence Award",
                "Moodeng AI Challenge Winner",
                "Thailand Innovation Awards (TIA) Participant",
                "National Software Contest (NSC) Participant",
                "Best Presentation Award from GISTDA - Kibo Robot Programming Challenge"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Project Manager",
                "description": "Leading innovative technology projects in AI and accessibility"
              }
            }
          }
        `}
      </Script>
    </div>
  )
}
