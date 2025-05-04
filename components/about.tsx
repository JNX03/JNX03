"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Lock, Accessibility, Rocket, Book } from "lucide-react"

export function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const timeline = [
    {
      year: "2024",
      title: "AI Innovator Award",
      description: "Recognized for contributions in AI technology",
    },
    {
      year: "2023",
      title: "Thailand ICT Awards Winner",
      description: "Winner Award in Senior Category",
    },
    {
      year: "2023",
      title: "APICTA Merit Award",
      description: "Recognition for excellence in ICT",
    },
  ]

  const specialties = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent solutions using cutting-edge AI technologies",
      tech: ["TensorFlow", "PyTorch", "Scikit-learn"],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies",
      tech: ["React", "Next.js", "Node.js"],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Implementing secure systems and conducting penetration testing",
      tech: ["Penetration Testing", "Security Analysis", "Threat Detection"],
    },
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: "Accessibility Solutions",
      description: "Creating inclusive technology for all users",
      tech: ["WCAG", "Assistive Tech", "Universal Design"],
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge research and development",
      tech: ["Quantum Computing", "Emerging Tech", "R&D"],
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Education",
      description: "Continuous learning and sharing knowledge",
      tech: ["Technical Writing", "Mentoring", "Research"],
    },
  ]

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <motion.div variants={item} className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              I'm Chawabhon Netisingha (JNX03), a passionate developer and tech innovator from Thailand. My journey in
              technology is driven by a deep curiosity about how things work and a commitment to creating solutions that
              make a positive impact on society.
            </p>
            <p className="text-lg leading-relaxed">
              Currently focused on advancing AI technology and accessibility solutions, I combine technical expertise
              with creative problem-solving to develop innovative applications that push the boundaries of what's
              possible.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-4">Specialties</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specialties.map((specialty, index) => (
                <motion.div key={specialty.title} variants={item} className="p-4 rounded-lg bg-muted/50 space-y-3">
                  <div className="flex items-center gap-2">
                    {specialty.icon}
                    <h4 className="font-semibold">{specialty.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {specialty.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-4">Timeline</h3>
            <div className="relative border-l-2 border-muted-foreground/20 pl-4 ml-4 space-y-6">
              {timeline.map((event, index) => (
                <motion.div key={event.year} variants={item} className="relative">
                  <div className="absolute -left-[29px] w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold">{event.year}</div>
                    <div className="text-lg font-medium">{event.title}</div>
                    <div className="text-sm text-muted-foreground">{event.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
