import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"

export default function SuperAIEngineerBlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">Accepted into Super AI Engineer SS5 Level 2! 🎉</CardTitle>
                <CardDescription>Posted on March 30, 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>AI</Badge>
                <Badge>Achievement</Badge>
                <Badge>Thailand</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I'm thrilled to announce that I've been accepted into the Super AI Engineer SS5 Level 2 program in
              Thailand (500712)! This is a significant milestone in my AI journey, and I'm incredibly excited about the
              opportunities and challenges that lie ahead.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">About Super AI Engineer</h2>

            <p className="mb-4">
              The Super AI Engineer program is a prestigious initiative in Thailand designed to develop top-tier AI
              talent. Level 2 represents an advanced stage in the program, focusing on practical applications of AI in
              solving real-world problems.
            </p>

            <p className="mb-4">
              The selection process was rigorous, involving multiple rounds of assessments, coding challenges, and
              interviews. Being selected among thousands of applicants is both an honor and a responsibility.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">What This Means</h2>

            <p className="mb-4">As part of the Super AI Engineer SS5 Level 2 program, I'll have access to:</p>

            <ul className="list-disc pl-6 mb-4">
              <li>Advanced AI training and workshops</li>
              <li>Mentorship from industry experts</li>
              <li>Collaborative projects with other talented participants</li>
              <li>Resources and tools to develop cutting-edge AI solutions</li>
              <li>Networking opportunities with leading tech companies</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">My Goals</h2>

            <p className="mb-4">During this program, I aim to:</p>

            <ul className="list-disc pl-6 mb-4">
              <li>Deepen my understanding of advanced AI concepts and techniques</li>
              <li>Apply my knowledge to develop innovative solutions for real-world problems</li>
              <li>Collaborate with fellow participants to create impactful projects</li>
              <li>Build a strong network within the AI community in Thailand and beyond</li>
            </ul>

            <p className="mb-4">
              I'm looking forward to sharing my journey, learnings, and projects as I progress through the program. Stay
              tuned for updates!
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #SuperAIEngineer #AI #MachineLearning #Thailand #TechEducation #500712
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

