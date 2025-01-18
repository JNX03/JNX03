import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = [
    { name: "JavaScript", logo: "JavaScript" },
    { name: "Python", logo: "Python" },
    { name: "C++", logo: "C++" },
    { name: "React", logo: "React" },
    { name: "Node.js", logo: "Node.js" },
    { name: "Docker", logo: "Docker" },
    { name: "Git", logo: "Git" },
  ]

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>⚙️ Coding Languages & Tools</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill.name} variant="secondary">
            {skill.name}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}

