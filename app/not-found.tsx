"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Home, Search, ArrowLeft, RefreshCw } from "lucide-react"

export default function NotFound() {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [isAnimating, setIsAnimating] = useState(true)
  const [randomFact, setRandomFact] = useState("")

  const facts = [
    "The first computer bug was an actual bug - a moth found in a Harvard Mark II computer in 1947.",
    "The average person blinks 15-20 times per minute, but only 7 times per minute when using a computer.",
    "The first website ever created is still online: http://info.cern.ch/",
    "The term 'bug' to describe a computer glitch was coined by Grace Hopper in 1947.",
    "The first computer mouse was made of wood.",
    "The first 1GB hard disk drive was announced in 1980 and weighed about 550 pounds.",
    "The first domain name ever registered was Symbolics.com on March 15, 1985.",
    "The first tweet was sent by Jack Dorsey on March 21, 2006: 'just setting up my twttr'",
    "The first YouTube video was uploaded on April 23, 2005, titled 'Me at the zoo'.",
    "The first email was sent by Ray Tomlinson in 1971 to himself.",
  ]

  useEffect(() => {
    // Stop animation after 3 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 3000)

    // Set random fact
    setRandomFact(facts[Math.floor(Math.random() * facts.length)])

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <div className={`rounded-2xl overflow-hidden shadow-2xl ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <h1 className={`text-7xl font-bold ${theme === "light" ? "text-indigo-600" : "text-indigo-400"}`}>
                    404
                  </h1>
                  <h2 className={`text-2xl font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                    Page Not Found
                  </h2>
                  <p className={`mb-6 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                    The page you're looking for doesn't exist or has been moved.
                  </p>

                  <div className="space-y-3">
                    <Button asChild className="w-full" variant={theme === "light" ? "default" : "default"}>
                      <Link href="/">
                        <Home className="mr-2 h-4 w-4" /> Go to Homepage
                      </Link>
                    </Button>

                    <Button asChild className="w-full" variant="outline">
                      <Link href="/projects">
                        <Search className="mr-2 h-4 w-4" /> Browse Projects
                      </Link>
                    </Button>

                    <Button className="w-full" variant="outline" onClick={() => window.history.back()}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                    </Button>

                    <Button className="w-full" variant="ghost" onClick={() => window.location.reload()}>
                      <RefreshCw className="mr-2 h-4 w-4" /> Refresh Page
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`relative ${theme === "light" ? "bg-indigo-50" : "bg-indigo-900/20"} p-8 flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${theme === "light" ? "rgba(79, 70, 229, 0.3)" : "rgba(79, 70, 229, 0.2)"} 0%, transparent 70%)`,
                      backgroundSize: "800px 800px",
                      backgroundPosition: "center",
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </div>

                <div className="relative z-10 text-center">
                  <motion.div
                    animate={
                      isAnimating
                        ? {
                            rotateY: [0, 360],
                            scale: [1, 1.2, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 5,
                    }}
                    className="relative inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={theme === "light" ? "#4f46e5" : "#818cf8"}
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-6"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l2 2" />
                      <path d="M8.5 8.5a4 4 0 1 0 5.7 5.7" />
                      <path d="m16 16 2 2" />
                      <path d="m8 16-2 2" />
                      <path d="m12 2v2" />
                      <path d="m12 20v2" />
                      <path d="m2 12h2" />
                      <path d="m20 12h2" />
                      <path d="m6 6 1 1" />
                      <path d="m17 17 1 1" />
                      <path d="m6 18 1-1" />
                      <path d="m17 7 1-1" />
                    </svg>

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span
                        className={`text-6xl font-bold ${theme === "light" ? "text-indigo-600" : "text-indigo-400"}`}
                      >
                        404
                      </span>
                    </motion.div>
                  </motion.div>

                  <div
                    className={`mt-6 p-4 rounded-lg ${theme === "light" ? "bg-white/80" : "bg-gray-800/80"} backdrop-blur-sm max-w-xs mx-auto`}
                  >
                    <h3 className={`text-sm font-medium mb-2 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                      Random Tech Fact:
                    </h3>
                    <p className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>{randomFact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
