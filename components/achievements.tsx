import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Star } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "Thailand ICT Awards 2023",
      description: "Winner Award in Senior Category",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "APICTA 2023",
      description: "Merit Award for Innovation",
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "AI Competitions",
      description: "Active Kaggle Competitor & Contributor",
      icon: <Star className="w-6 h-6 text-[#20BEFF]" />,
    },
  ]

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>🏆 Recent Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  {achievement.icon}
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
