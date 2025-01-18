import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

const education = [
  {
    school: "The Prince Royal's College",
    period: "2014-Currently",
    location: "Chiang Mai, Thailand",
    type: "High School",
    description: "Studying in the English Program, focusing on sciences and technology"
  },
  {
    school: "Brighton Language College",
    period: "March-April 2023",
    location: "Brighton, United Kingdom",
    type: "Language Studies",
    description: "Intensive English language program with focus on academic writing and communication"
  }
]

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-4 pt-8">
        <Card>
          <CardHeader>
            <CardTitle>Education Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative border-l-2 border-muted-foreground/20 pl-4 ml-4">
              {education.map((edu, index) => (
                <div key={edu.school} className="mb-10 relative">
                  <div className="absolute -left-[29px] w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <div className="bg-card rounded-lg p-4 shadow-sm">
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-bold text-xl">{edu.school}</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p className="font-semibold">{edu.period}</p>
                        <p>{edu.location}</p>
                        <p>{edu.type}</p>
                      </div>
                      <p className="text-muted-foreground mt-2">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute -left-[13px] bottom-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

