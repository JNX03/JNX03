"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
// Import the OptimizedImage component
import { OptimizedImage } from "@/components/optimized-image"

interface Project {
  name: string
  description: string
  url?: string
  status: string
  icon?: string
  imageUrl: string
}

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  // Use state to track which images have failed to load
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>🚀 Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <OptimizedImage
                  src={
                    failedImages[index]
                      ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.name)}`
                      : project.imageUrl ||
                        `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.name)}`
                  }
                  alt={`Preview of ${project.name}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onLoad={() => {}}
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">
                    {project.icon && <span className="mr-2">{project.icon}</span>}
                    {project.name}
                  </h3>
                  <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {project.url && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="text-foreground border-foreground hover:bg-accent"
                  >
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      Visit Project
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

