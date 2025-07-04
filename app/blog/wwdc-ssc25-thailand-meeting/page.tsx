import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"
import { Footer } from "@/components/footer"

export default function WwdcSsc25ThailandMeetingBlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">WWDC SSC25 (Thailand Meeting) 🍎</CardTitle>
                <CardDescription>Posted on June 22, 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>WWDC</Badge>
                <Badge>SSC25</Badge>
                <Badge>Apple</Badge>
                <Badge>Thailand</Badge>
                <Badge>Meeting</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I had the privilege of attending the WWDC Swift Student Challenge 2025 Thailand meeting! It was an
              inspiring event, connecting with fellow developers and learning about the latest advancements from Apple.
            </p>

            <p className="mb-4">
              The meeting provided a fantastic opportunity to delve deeper into the Swift Student Challenge, share
              experiences with other talented students, and get insights from Apple representatives. We discussed
              various aspects of app development, design principles, and the future of the Apple ecosystem.
            </p>

            <div className="flex flex-wrap gap-4 my-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link
                  href="https://www.apple.com/th/today/event/spotlight-wwdc-th-070525/7336302080761954304?sn=R7333"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Apple className="mr-2 h-4 w-4" /> Apple Event Page
                </Link>
              </Button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Insights into the judging criteria and best practices for the Swift Student Challenge.</li>
              <li>Networking opportunities with other passionate student developers.</li>
              <li>Discussions on new SwiftUI features and development tools.</li>
              <li>Inspiration for future projects within the Apple platform.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Future Plans</h2>
            <p className="mb-4">
              The knowledge and connections gained from this meeting will undoubtedly fuel my next projects. I'm excited
              to apply these learnings to create even more innovative and impactful applications.
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #WWDC #SSC25 #Apple #SwiftStudentChallenge #Thailand #DeveloperCommunity #SwiftUI #iOSDev
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
