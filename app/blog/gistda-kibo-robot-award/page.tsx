"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function GISTDAKiboRobotAwardPage() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card
            className={`mb-8 ${theme === "light" ? "bg-white border-gray-200 shadow-md" : "hover:bg-accent/50 transition-colors"}`}
          >
            <CardHeader>
              <CardTitle className={`text-2xl sm:text-3xl ${theme === "light" ? "text-gray-900" : ""}`}>
                Best Presentation Award จำนวน 5,000 บาท จาก GISTDA - Kibo robot - rpc 🏆
              </CardTitle>
              <CardDescription className={theme === "light" ? "text-gray-500" : ""}>
                Posted on 15 ก.ค. 2568
              </CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p className={`text-base sm:text-lg mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                I am honored to have received the Best Presentation Award (5,000 Baht) from GISTDA at the Kibo Robot
                Programming Challenge. This recognition highlights my team's efforts in developing innovative solutions
                for space robotics and our ability to effectively communicate complex technical concepts.
              </p>
              <p className={`mb-4 ${theme === "light" ? "text-gray-700" : ""}`}>
                The Kibo Robot Programming Challenge is an exciting event that pushes the boundaries of robotics and AI
                in a space context. Our project focused on [briefly describe project if known, otherwise keep general],
                and we are thrilled that our presentation resonated with the judges.
              </p>

              <Button
                asChild
                className={
                  theme === "light"
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }
              >
                <Link
                  href="https://www.nstda.or.th/home/news_post/kibo-robot-6th-20250615/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  Read more from GISTDA →
                </Link>
              </Button>

              <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
                <Badge
                  variant={theme === "light" ? "outline" : "secondary"}
                  className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                >
                  GISTDA
                </Badge>
                <Badge
                  variant={theme === "light" ? "outline" : "secondary"}
                  className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                >
                  Kibo Robot
                </Badge>
                <Badge
                  variant={theme === "light" ? "outline" : "secondary"}
                  className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                >
                  Award
                </Badge>
                <Badge
                  variant={theme === "light" ? "outline" : "secondary"}
                  className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                >
                  Space
                </Badge>
                <Badge
                  variant={theme === "light" ? "outline" : "secondary"}
                  className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                >
                  Robotics
                </Badge>
                <Badge
                  variant={theme === "light" ? "outline" : "secondary"}
                  className={theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}
                >
                  Presentation
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
