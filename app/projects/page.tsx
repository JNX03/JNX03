import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

const projects = [
  {
    name: "ElbrailleNext",
    description: "A web application designed to assist blind and low-vision users in learning Braille. It emphasizes accessibility by adhering to W3C standards, offering features like scalable text, high color contrast, and full keyboard navigation support. The platform provides roles for both students and teachers, utilizing face recognition for student authentication and email-password authentication for teachers.",
    url: "https://eibraillenext.jnx03.xyz/",
    status: "Live"
  },
  {
    name: "ElbrailleX",
    description: "Another project aimed at facilitating Braille learning for visually impaired users. It incorporates technologies such as Firebase for backend services and includes functionalities like voice authentication and speech recognition.",
    status: "Completed"
  },
  {
    name: "Text2Alphabet",
    description: "A project leveraging Convolutional Neural Networks (CNN) to recognize alphabet sounds. It includes scripts for training models and making predictions based on audio inputs.",
    status: "Completed"
  },
  {
    name: "AutoLabel",
    description: "A Python-based tool that automates image labeling for YOLOv5 and YOLOv7 models using pre-trained models.",
    status: "Completed"
  },
  {
    name: "Beta Secrety",
    description: "Beta harnesses the power of superBetas to detect vulnerabilities in your website's defenses. Illuminate security flaws before they explode into major issues.",
    url: "https://nova.jnx03.xyz/",
    status: "In Development"
  },
  {
    name: "Notex",
    description: "Serves as a centralized platform for students to access well-organized notes that can aid in their studies. The notes are categorized by subject and educational level, ensuring easy navigation and relevance.",
    url: "https://notex.jnx03.xyz/",
    status: "Live"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>
                A collection of my projects in web development, AI, and accessibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <Card key={project.name}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      {project.url && (
                        <Link 
                          href={project.url}
                          className="text-blue-500 hover:underline text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Project →
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

