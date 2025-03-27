"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Award {
  name: string
  position?: string
  category?: string
  description: string
  color?: "gold" | "silver" | "bronze" | "blue"
  imageUrl: string
}

interface AwardsProps {
  awards: Award[]
}

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

export function Awards({ awards }: AwardsProps) {
  // Use state to track which images have failed to load
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Awards and Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={
                    failedImages[index]
                      ? `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(award.name)}`
                      : award.imageUrl || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(award.name)}`
                  }
                  alt={award.name}
                  layout="fill"
                  objectFit="cover"
                  onError={() => handleImageError(index)}
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
  )
}

