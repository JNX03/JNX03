import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook } from "lucide-react"
import { Footer } from "@/components/footer"

export default function TiaIndexCampBlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">
                  Thailand Innovation Awards (TIA): Selected for INDEX and Camp! 🎉
                </CardTitle>
                <CardDescription>Posted on June 27, 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>TIA</Badge>
                <Badge>Innovation</Badge>
                <Badge>Thailand</Badge>
                <Badge>Award</Badge>
                <Badge>Camp</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I'm excited to announce my selection for the Thailand Innovation Awards (TIA) program, including the INDEX
              and Camp initiatives! This is a fantastic opportunity to develop innovative solutions and collaborate with
              other talented individuals.
            </p>

            <p className="mb-4">
              The Thailand Innovation Awards is a prestigious program that recognizes and supports innovative projects
              across various sectors. Being part of the INDEX and Camp initiatives means I'll be engaging in intensive
              workshops, mentorship, and networking opportunities designed to accelerate project development and impact.
            </p>

            <p className="mb-4">
              I look forward to sharing more about the projects I'll be working on and the progress I make during this
              program. Stay tuned for updates!
            </p>

            <div className="flex flex-wrap gap-4 my-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link
                  href="https://www.facebook.com/ThailandInnovationAwards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="mr-2 h-4 w-4" /> TIA Facebook Page
                </Link>
              </Button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">About TIA</h2>
            <p className="mb-4">
              The Thailand Innovation Awards aims to foster a culture of innovation and entrepreneurship within
              Thailand. It provides a platform for innovators to showcase their ideas, receive expert guidance, and
              connect with potential investors and partners.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">INDEX Initiative</h3>
            <p className="mb-4">
              The INDEX initiative focuses on identifying and nurturing high-potential innovative projects. Participants
              receive tailored support to refine their concepts, build prototypes, and prepare for market entry.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Camp Program</h3>
            <p className="mb-4">
              The Camp program is an intensive boot camp designed to equip participants with practical skills in areas
              such as design thinking, business model canvas, and pitching. It emphasizes hands-on learning and
              collaborative problem-solving.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">My Goals</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Develop an innovative solution addressing a key societal challenge.</li>
              <li>Collaborate with mentors and peers to refine my project.</li>
              <li>Gain practical experience in project management and innovation.</li>
              <li>Network with industry leaders and potential collaborators.</li>
            </ul>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #TIA #Innovation #Thailand #Award #Camp #Entrepreneurship #Technology
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
