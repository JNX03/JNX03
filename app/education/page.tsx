"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, Award, Book, Globe, Star, Users } from "lucide-react"

const education = [
  {
    school: "The Prince Royal's College",
    period: "2017-2025",
    location: "Chiang Mai, Thailand",
    type: "High School Education",
    level: "Grade 12 - Science-Mathematics Program",
    description: "Studying in the English Program with focus on advanced sciences, mathematics, and computer science. Specializing in STEM subjects with emphasis on artificial intelligence, programming, and technology innovation.",
    highlights: [
      "STEM Excellence Program",
      "Advanced Computer Science Track",
      "English Program (Bilingual Education)",
      "Science-Mathematics Specialization"
    ],
    achievements: [
      "Multiple Programming Competition Participations",
      "AI and Robotics Project Leadership",
      "Academic Excellence in Mathematics and Sciences"
    ],
    icon: <GraduationCap className="h-6 w-6" />,
    color: "indigo"
  },
  {
    school: "Brighton Language College",
    period: "March-April 2023",
    location: "Brighton, United Kingdom", 
    type: "International Language Studies",
    level: "Intensive English Program",
    description: "Immersive English language program focusing on academic writing, advanced communication skills, and British academic culture. Enhanced international perspective and cross-cultural communication abilities.",
    highlights: [
      "Academic Writing Excellence",
      "Advanced Communication Skills",
      "British Academic Culture Immersion",
      "International Student Experience"
    ],
    achievements: [
      "Certificate of Completion with Distinction",
      "Advanced Academic English Proficiency",
      "Cross-Cultural Communication Skills"
    ],
    icon: <Globe className="h-6 w-6" />,
    color: "blue"
  },
]

const skills = [
  { category: "Programming Languages", items: ["Swift", "Python", "JavaScript", "TypeScript", "Go", "HTML/CSS"] },
  { category: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "Computer Vision", "Natural Language Processing"] },
  { category: "Web Development", items: ["React", "Next.js", "Node.js", "SwiftUI", "Tailwind CSS"] },
  { category: "Tools & Technologies", items: ["Git", "Docker", "Firebase", "Vercel", "VS Code", "Xcode"] },
  { category: "Languages", items: ["Thai (Native)", "English (Fluent)", "Basic Japanese"] },
]

export default function EducationPage() {
  const { theme } = useTheme()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'indigo':
        return theme === "light" 
          ? "bg-indigo-600 border-white" 
          : "bg-indigo-500 border-background"
      case 'blue':
        return theme === "light"
          ? "bg-blue-600 border-white"
          : "bg-blue-500 border-background"
      default:
        return theme === "light"
          ? "bg-gray-600 border-white"
          : "bg-gray-500 border-background"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-indigo-600" />
                  </div>
                </div>
                <CardTitle className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : ""}`}>
                  Educational Journey
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
                  Academic background, specialized programs, and continuous learning in technology and innovation
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${theme === "light" ? "text-gray-900" : ""}`}>
                  <Calendar className="h-5 w-5 text-indigo-500" />
                  Academic Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className={`relative border-l-2 ${theme === "light" ? "border-indigo-200" : "border-muted-foreground/20"} pl-8 ml-6 space-y-8`}
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {education.map((edu, index) => (
                    <motion.div key={edu.school} className="relative" variants={item}>
                      <div
                        className={`absolute -left-[41px] w-6 h-6 ${getColorClasses(edu.color)} rounded-full border-4 flex items-center justify-center`}
                      >
                        <div className="text-white">
                          {edu.icon}
                        </div>
                      </div>
                      <Card
                        className={`${
                          theme === "light"
                            ? "bg-gray-50 border-gray-200 shadow-sm hover:shadow-md"
                            : "bg-accent/30 hover:bg-accent/50"
                        } transition-all duration-300`}
                      >
                        <CardContent className="p-6">
                          <div className="grid gap-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div>
                                <h3 className={`font-bold text-xl ${theme === "light" ? "text-gray-900" : ""}`}>
                                  {edu.school}
                                </h3>
                                <p className="font-semibold text-sm text-indigo-600">{edu.level}</p>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{edu.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{edu.location}</span>
                                </div>
                              </div>
                            </div>
                            
                            <Badge variant="outline" className={`w-fit ${theme === "light" ? "border-indigo-200 text-indigo-700 bg-indigo-50" : ""}`}>
                              {edu.type}
                            </Badge>

                            <p className={`leading-relaxed ${theme === "light" ? "text-gray-700" : "text-muted-foreground"}`}>
                              {edu.description}
                            </p>

                            {/* Highlights */}
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Book className="h-4 w-4 text-green-600" />
                                Program Highlights
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.highlights.map((highlight, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Achievements */}
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Award className="h-4 w-4 text-yellow-600" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-1">
                                {edu.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm">
                                    <Star className="h-3 w-3 text-yellow-500" />
                                    <span className={theme === "light" ? "text-gray-600" : "text-muted-foreground"}>
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className={theme === "light" ? "bg-white border-gray-200 shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${theme === "light" ? "text-gray-900" : ""}`}>
                  <Users className="h-5 w-5 text-indigo-500" />
                  Skills & Competencies
                </CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
                  Technical skills and knowledge areas developed through education and practical experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {skills.map((skillCategory, index) => (
                    <motion.div
                      key={skillCategory.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className={theme === "light" ? "bg-gray-50 border-gray-200" : "bg-accent/30"}>
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-indigo-600">
                            {skillCategory.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillCategory.items.map((item, i) => (
                              <Badge 
                                key={i} 
                                variant="outline" 
                                className={`text-xs ${theme === "light" ? "border-gray-300 bg-white" : ""}`}
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
