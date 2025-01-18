import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const experiences = [
  {
    role: "Staff Member",
    organization: "Soft Skills Gifted Math Program",
    location: "The Prince Royal's College",
    period: "2023 - Present",
    description: "Assisted in organizing and facilitating activities for gifted math students, helping to develop their soft skills alongside their mathematical abilities."
  },
  {
    role: "Student Council Member",
    organization: "The Prince Royal's College",
    location: "Chiang Mai, Thailand",
    period: "2023",
    description: "Served as a representative for the student body, organizing events and liaising between students and faculty to improve the school environment."
  },
  {
    role: "Staff Member",
    organization: "Stellar'23 Event",
    location: "The Prince Royal's College",
    period: "2023",
    description: "Contributed to the organization and execution of the Stellar'23 event, showcasing student talents and achievements."
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-4 pt-8">
        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
            <CardDescription>A timeline of my roles and responsibilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground">{exp.location} | {exp.period}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

