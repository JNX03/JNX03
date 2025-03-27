import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Achievements } from "@/components/achievements"
import { ParticlesBackground } from "@/components/particles-background"
import { AnimatedGradient } from "@/components/animated-gradient"
import { Footer } from "@/components/footer"
import { Projects } from "@/components/projects"
import { Awards } from "@/components/awards"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { cloudinary } from "@/lib/cloudinary"

async function getProjectsData() {
  const projects = [
    {
      name: "EibrailleNext",
      description:
        "A comprehensive blind learning platform designed to make education accessible for visually impaired students.",
      url: "https://eibraillenext.jnx03.xyz/",
      status: "Live",
      icon: "⠿",
      image: "eibraillenext",
    },
    {
      name: "Nova",
      description: "An AI-powered automated penetration testing and bug bounty platform for businesses.",
      url: "https://nova.jnx03.xyz/",
      status: "In Development",
      image: "nova",
    },
    {
      name: "Notex",
      description: "A comprehensive note-taking platform for high school subjects.",
      url: "https://notex.jnx03.xyz/",
      status: "Live",
      image: "notex",
    },
    {
      name: "Project 1x12",
      description:
        "A quantum computing research initiative exploring the boundaries between classical and quantum computing.",
      status: "Research",
      image: "quantum",
    },
  ]

  try {
    return Promise.all(
      projects.map(async (project) => {
        try {
          const imageUrl = cloudinary.url(`projects/${project.image}`, {
            width: 600,
            height: 400,
            crop: "fill",
            quality: "auto",
            fetch_format: "auto",
          })
          return { ...project, imageUrl }
        } catch (error) {
          console.error(`Error generating Cloudinary URL for ${project.name}:`, error)
          return {
            ...project,
            imageUrl: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(project.name)}`,
          }
        }
      }),
    )
  } catch (error) {
    console.error("Error in getProjectsData:", error)
    return projects.map((project) => ({
      ...project,
      imageUrl: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(project.name)}`,
    }))
  }
}

async function getAwardsData() {
  const awards = [
    {
      name: "AI Innovator Award 2024",
      position: "Winner (1st Place)",
      description: "Recognized for innovative contributions in AI technology.",
      color: "gold" as const,
      image: "ai-innovator-2024",
    },
    {
      name: "Thailand ICT Awards 2023",
      position: "Winner Award",
      category: "Senior Category",
      description: "Awarded for outstanding achievements in Information and Communication Technology.",
      color: "gold" as const,
      image: "thailand-ict-2023",
    },
    {
      name: "Asia Pacific ICT Alliance Award 2023 (APICTA2023)",
      position: "Merit Award",
      description: "Received recognition for excellence in ICT on an international level.",
      color: "silver" as const,
      image: "apicta-2023",
    },
    // Add more awards here...
  ]

  try {
    return Promise.all(
      awards.map(async (award) => {
        try {
          const imageUrl = cloudinary.url(`awards/${award.image}`, {
            width: 600,
            height: 400,
            crop: "fill",
            quality: "auto",
            fetch_format: "auto",
          })
          return { ...award, imageUrl }
        } catch (error) {
          console.error(`Error generating Cloudinary URL for ${award.name}:`, error)
          return {
            ...award,
            imageUrl: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(award.name)}`,
          }
        }
      }),
    )
  } catch (error) {
    console.error("Error in getAwardsData:", error)
    return awards.map((award) => ({
      ...award,
      imageUrl: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(award.name)}`,
    }))
  }
}

export default async function Home() {
  let projects = []
  let awards = []

  try {
    projects = await getProjectsData()
  } catch (error) {
    console.error("Failed to load projects:", error)
  }

  try {
    awards = await getAwardsData()
  } catch (error) {
    console.error("Failed to load awards:", error)
  }

  const featuredWork = [
    {
      title: "AI Research",
      description: "Exploring machine learning applications in accessibility and cybersecurity",
      link: "/research",
    },
    {
      title: "Technical Projects",
      description: "Full-stack applications and AI-powered solutions",
      link: "/projects",
    },
    {
      title: "Kaggle Competitions",
      description: "Active participation in ML competitions and contributions",
      link: "https://www.kaggle.com/jxxn03x",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticlesBackground />
      <AnimatedGradient />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Hero />
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {featuredWork.map((item, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={item.link}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <Achievements />
        {projects.length > 0 && <Projects projects={projects} />}
        {awards.length > 0 && <Awards awards={awards} />}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">Explore More</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/experience">View Experience</Link>
            </Button>
            <Button asChild>
              <Link href="/awards">View Awards</Link>
            </Button>
            <Button asChild>
              <Link href="/research">View Research</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

