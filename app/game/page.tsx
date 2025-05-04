import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { VisualNovelGame } from "@/components/visual-novel-game"

export default function GamePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Syntaxia's Adventure</CardTitle>
            <CardDescription>A visual novel game featuring Syntaxia-chan and Yuki-Ai chan</CardDescription>
          </CardHeader>
          <CardContent>
            <VisualNovelGame />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
