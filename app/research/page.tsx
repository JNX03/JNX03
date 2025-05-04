import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-4 pt-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Research Papers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming Soon...</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
