"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Image from "next/image"
import { useTheme } from "next-themes"
import Script from "next/script"

export default function Home() {
  const { theme } = useTheme()

  const projects = [
    {
      title: "EibrailleNext",
      description: "Advanced accessibility learning platform for blind and low-vision users",
      tags: ["AI", "Accessibility", "Education"],
      link: "https://eibraillenext.jnx03.xyz/",
      year: "2024"
    },
    {
      title: "Syntaxia",
      description: "Educational app for learning programming concepts",
      tags: ["Education", "Swift", "iOS"],
      link: "#",
      year: "2025"
    },
    {
      title: "MooDong AI",
      description: "Multi-task LSTM and vision model for zoo keeper augmentation",
      tags: ["AI", "Machine Learning"],
      link: "#",
      year: "2024"
    },
    {
      title: "Nova Security",
      description: "Cybersecurity platform with automated vulnerability assessment",
      tags: ["Security", "AI"],
      link: "https://nova.jnx03.xyz/",
      year: "2024"
    },
  ]

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-white text-gray-900" : "bg-background text-foreground"}`}>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-sm font-medium mb-8 ${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                DEVELOPER & TECHNOLOGY INNOVATOR
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight"
              >
                Chawabhon
                <br />
                Netisingha
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-lg ${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Creating impactful technology solutions in AI, accessibility, and digital experiences.
                Swift Student Challenge 2025 Winner.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Button
                  asChild
                  size="lg"
                  className={`rounded-full px-6 ${
                    theme === "light"
                      ? "bg-gray-900 hover:bg-gray-800 text-white"
                      : "bg-white hover:bg-gray-100 text-black"
                  }`}
                >
                  <Link href="/projects">
                    View Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-6"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4"
              >
                <Link
                  href="https://github.com/JNX03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    theme === "light"
                      ? "hover:bg-gray-100"
                      : "hover:bg-gray-800"
                  }`}
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    theme === "light"
                      ? "hover:bg-gray-100"
                      : "hover:bg-gray-800"
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className={`p-2 rounded-lg transition-colors ${
                    theme === "light"
                      ? "hover:bg-gray-100"
                      : "hover:bg-gray-800"
                  }`}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <div className={`relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden ${
                theme === "light" ? "shadow-2xl" : "shadow-none"
              }`}>
                <Image
                  src="/img/profile.png"
                  alt="Chawabhon Netisingha"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-24 px-6 ${
        theme === "light" ? "bg-gray-50" : "bg-gray-900/20"
      }`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">About</h2>
            <div className={`text-lg leading-relaxed space-y-4 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              <p>
                I'm a developer and technology innovator focused on creating solutions that make a difference.
                My work spans artificial intelligence, accessibility technology, and educational platforms.
              </p>
              <p>
                Currently working on projects that have won international recognition, including the Swift Student Challenge 2025,
                Moodeng AI Challenge, and Thailand ICT Awards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Selected Work</h2>
            <p className={`text-lg max-w-2xl ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              Projects in AI, accessibility, and education
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={project.link}
                  className={`block p-6 sm:p-8 rounded-2xl transition-all hover:scale-[1.01] ${
                    theme === "light"
                      ? "bg-white hover:shadow-lg border border-gray-200"
                      : "bg-gray-900/40 hover:bg-gray-900/60 border border-gray-800"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                        {project.title}
                        <ExternalLink className="h-4 w-4 opacity-50" />
                      </h3>
                      <p className={theme === "light" ? "text-gray-600" : "text-gray-400"}>
                        {project.description}
                      </p>
                    </div>
                    <span className={`text-sm font-medium whitespace-nowrap ${
                      theme === "light" ? "text-gray-500" : "text-gray-500"
                    }`}>
                      {project.year}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1 rounded-full ${
                          theme === "light"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-gray-800 text-gray-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full"
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Recognition */}
      <section className={`py-24 px-6 ${
        theme === "light" ? "bg-gray-50" : "bg-gray-900/20"
      }`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-12">Recognition</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Swift Student Challenge 2025 Winner",
                "Moodeng AI Challenge Winner",
                "AI Innovator Award 2024",
                "Thailand ICT Awards 2023",
                "APICTA 2023 Merit Award",
                "GISTDA Best Presentation Award",
              ].map((award, index) => (
                <motion.div
                  key={award}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`p-4 rounded-xl ${
                    theme === "light" ? "bg-white border border-gray-200" : "bg-gray-900/40 border border-gray-800"
                  }`}
                >
                  <p className="font-medium">{award}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's work together
            </h2>
            <p className={`text-lg mb-10 max-w-2xl mx-auto ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              Interested in collaborating on a project or discussing technology innovation?
              I'd love to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              className={`rounded-full px-8 ${
                theme === "light"
                  ? "bg-gray-900 hover:bg-gray-800 text-white"
                  : "bg-white hover:bg-gray-100 text-black"
              }`}
            >
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <Script id="homepage-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Chawabhon Netisingha",
            "alternateName": "JNX03",
            "description": "Developer and technology innovator specializing in AI, accessibility, and digital experiences",
            "image": "https://jnx03.xyz/img/profile.png",
            "url": "https://jnx03.xyz",
            "sameAs": [
              "https://github.com/JNX03",
              "https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a"
            ],
            "jobTitle": "Developer & Technology Innovator",
            "award": [
              "Swift Student Challenge 2025 Winner",
              "Moodeng AI Challenge Winner 2024",
              "AI Innovator Award 2024",
              "Thailand ICT Awards 2023 Winner"
            ]
          }
        `}
      </Script>
    </div>
  )
}
