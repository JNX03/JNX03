"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

const education = [
  {
    school: "The Prince Royal's College",
    period: "2014-Currently",
    location: "Chiang Mai, Thailand",
    type: "High School",
    description: "Studying in the English Program, focusing on sciences and technology",
  },
  {
    school: "Brighton Language College",
    period: "March-April 2023",
    location: "Brighton, United Kingdom",
    type: "Language Studies",
    description: "Intensive English language program with focus on academic writing and communication",
  },
]

export default function EducationPage() {
  const { theme } = useTheme()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Education Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              className={`relative border-l-2 ${theme === "light" ? "border-indigo-200" : "border-muted-foreground/20"} pl-4 ml-4 space-y-10`}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {education.map((edu, index) => (
                <motion.div key={edu.school} className="relative" variants={item}>
                  <div
                    className={`absolute -left-[29px] w-4 h-4 ${theme === "light" ? "bg-indigo-600" : "bg-primary"} rounded-full border-4 ${theme === "light" ? "border-white" : "border-background"}`}
                  />
                  <Card
                    className={
                      theme === "light"
                        ? "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        : "hover:bg-accent/50 transition-colors"
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex flex-col space-y-2">
                        <h3 className={`font-bold text-lg sm:text-xl ${theme === "light" ? "text-gray-900" : ""}`}>
                          {edu.school}
                        </h3>
                        <div
                          className={`text-sm ${theme === "light" ? "text-gray-600" : "text-muted-foreground"} space-y-1`}
                        >
                          <p className="font-semibold">{edu.period}</p>
                          <p>{edu.location}</p>
                          <p>{edu.type}</p>
                        </div>
                        <p className={`${theme === "light" ? "text-gray-600" : "text-muted-foreground"} mt-2 text-sm`}>
                          {edu.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              <div
                className={`absolute -left-[13px] bottom-0 w-4 h-4 ${theme === "light" ? "bg-indigo-600" : "bg-primary"} rounded-full border-4 ${theme === "light" ? "border-white" : "border-background"}`}
              />
            </motion.div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
