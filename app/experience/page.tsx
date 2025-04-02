"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

const experiences = [
  {
    role: "Staff Member",
    organization: "Soft Skills Gifted Math Program",
    location: "The Prince Royal's College",
    period: "2023 - Present",
    description:
      "Assisted in organizing and facilitating activities for gifted math students, helping to develop their soft skills alongside their mathematical abilities.",
  },
  {
    role: "Student Council Member",
    organization: "The Prince Royal's College",
    location: "Chiang Mai, Thailand",
    period: "2023",
    description:
      "Served as a representative for the student body, organizing events and liaising between students and faculty to improve the school environment.",
  },
  {
    role: "Staff Member",
    organization: "Stellar'23 Event",
    location: "The Prince Royal's College",
    period: "2023",
    description:
      "Contributed to the organization and execution of the Stellar'23 event, showcasing student talents and achievements.",
  },
]

export default function ExperiencePage() {
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
            <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Professional Experience</CardTitle>
            <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
              A timeline of my roles and responsibilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={item}>
                  <Card
                    className={
                      theme === "light"
                        ? "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        : "hover:bg-accent/50 transition-colors"
                    }
                  >
                    <CardContent className="p-4">
                      <h3 className={`font-semibold text-lg ${theme === "light" ? "text-gray-900" : ""}`}>
                        {exp.role}
                      </h3>
                      <p className={theme === "light" ? "text-indigo-600 font-medium" : "text-muted-foreground"}>
                        {exp.organization}
                      </p>
                      <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-muted-foreground"}`}>
                        {exp.location} | {exp.period}
                      </p>
                      <p className={`mt-2 text-sm ${theme === "light" ? "text-gray-600" : ""}`}>{exp.description}</p>
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

