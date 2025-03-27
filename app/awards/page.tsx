import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"

interface Award {
  name: string
  position?: string
  category?: string
  description: string
  color?: "gold" | "silver" | "bronze" | "blue"
  image?: string
}

const awards: Award[] = [
  {
    name: "Swift Student Challenge 2025",
    position: "Winner",
    description: "Selected as a winner for the Syntaxia project, an innovative educational app built with SwiftUI.",
    color: "gold",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PcDiryVpDmgMgr3xXGbYGh1mMu3fvs.png",
  },
  {
    name: "AI Innovator Award 2024",
    position: "Winner (1st Place)",
    description: "Recognized for innovative contributions in AI technology.",
    color: "gold",
    image: "/awards/ai-innovator-2024.jpg",
  },
  {
    name: "Thailand ICT Awards 2023",
    position: "Winner Award",
    category: "Senior Category",
    description: "Awarded for outstanding achievements in Information and Communication Technology.",
    color: "gold",
    image: "/awards/thailand-ict-2023.jpg",
  },
  {
    name: "Asia Pacific ICT Alliance Award 2023 (APICTA2023)",
    position: "Merit Award",
    description: "Received recognition for excellence in ICT on an international level.",
    color: "silver",
    image: "/awards/apicta-2023.jpg",
  },
  {
    name: "Super AI Engineer Hackathon Online",
    position: "3rd Place",
    category: "MD&A Disclosure Quality Assessment",
    description: "Demonstrated proficiency in AI engineering and data analysis.",
    color: "bronze",
    image: "/awards/super-ai-hackathon.jpg",
  },
  {
    name: "Kamalasai AI and Technology Thailand Championship #8",
    position: "Honorary Mention (Gold Medal)",
    description: "Recognized for the application of AI using the CiRA Core Platform.",
    color: "gold",
    image: "/awards/kamalasai-ai-8.jpg",
  },
  {
    name: "Kamalasai AI Robotics Thailand Championship #7",
    position: "3rd Place",
    description: "Showcased skills in AI and robotics technology.",
    color: "bronze",
    image: "/awards/kamalasai-ai-7.jpg",
  },
  {
    name: "PIM Robotics Playground 2023",
    description: "Participated in the project showcase and robot competition for young innovators.",
    color: "blue",
    image: "/awards/pim-robotics-2023.jpg",
  },
  {
    name: "AIDS Prevention Video Clip Competition",
    position: "1st Place",
    description: "Created an impactful video to raise awareness about AIDS prevention.",
    color: "gold",
    image: "/awards/aids-prevention-video.jpg",
  },
  {
    name: "Swift Student Challenge 2023",
    description: "Participated in Apple's global coding challenge for students.",
    color: "blue",
    image: "/awards/swift-student-challenge-2023.jpg",
  },
  {
    name: "Science Project Competition",
    position: "Honorable Mention",
    description: "Recognized for an innovative science project.",
    color: "silver",
    image: "/awards/science-project-competition.jpg",
  },
  {
    name: "FIRST Tech Challenge Centerstage",
    description: "Participated in the robotics competition, demonstrating technical skills and teamwork.",
    color: "blue",
    image: "/awards/ftc-centerstage.jpg",
  },
  {
    name: "FIRST Tech Challenge Into the Deep",
    description: "Engaged in the challenging robotics competition, showcasing problem-solving abilities.",
    color: "blue",
    image: "/awards/ftc-into-the-deep.jpg",
  },
]

const getBadgeColor = (color: Award["color"]) => {
  switch (color) {
    case "gold":
      return "bg-yellow-500 text-black"
    case "silver":
      return "bg-gray-300 text-black"
    case "bronze":
      return "bg-amber-600 text-white"
    case "blue":
    default:
      return "bg-blue-500 text-white"
  }
}

export default function AwardsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Awards and Achievements</CardTitle>
            <CardDescription>Recognitions and participations in various competitions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((award, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={
                        award.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(award.name)}`
                      }
                      alt={award.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{award.name}</h3>
                      {award.position && <Badge className={getBadgeColor(award.color)}>{award.position}</Badge>}
                    </div>
                    {award.category && <p className="text-sm text-muted-foreground mb-2">{award.category}</p>}
                    <p className="text-sm">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

