import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      name: "EibrailleNext",
      description: "A comprehensive blind learning platform designed to make education accessible for visually impaired students.",
      url: "https://eibraillenext.jnx03.xyz/",
      status: "Live",
      icon: "⠿"
    },
    {
      name: "Notex",
      description: "A comprehensive note-taking platform for high school subjects, featuring a clean dark interface and organized subject categories.",
      url: "https://notex.jnx03.xyz/",
      status: "Live"
    },
    {
      name: "Nova",
      description: "An AI-powered automated penetration testing and bug bounty platform for businesses.",
      url: "https://nova.jnx03.xyz/",
      status: "In Development"
    }
  ]

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>🚀 Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/5 aspect-video rounded-lg overflow-hidden relative">
                  <iframe
                    src={project.url}
                    title={`Preview of ${project.name}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">
                      {project.icon && <span className="mr-2">{project.icon}</span>}
                      {project.name}
                    </h3>
                    <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      Visit Project
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

