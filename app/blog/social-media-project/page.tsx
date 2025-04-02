import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Video } from "lucide-react"
import { Footer } from "@/components/footer"

export default function SocialMediaProjectBlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">Launching My Social Media Project 🎬</CardTitle>
                <CardDescription>Posted on April 1, 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>YouTube</Badge>
                <Badge>TikTok</Badge>
                <Badge>Content Creation</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I'm excited to announce that I've officially launched my social media project! After months of planning
              and preparation, I've started posting videos on my YouTube channel and TikTok account.
            </p>

            <div className="flex flex-wrap gap-4 my-6">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="https://www.youtube.com/@Jnx03" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Main YouTube Channel
                </Link>
              </Button>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="https://www.youtube.com/@Jnx03Studio" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Production YouTube Channel
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-foreground border-foreground hover:bg-accent">
                <Link href="https://www.tiktok.com/@jxxn03z" target="_blank" rel="noopener noreferrer">
                  <Video className="mr-2 h-4 w-4" /> TikTok
                </Link>
              </Button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Content Focus</h2>

            <p className="mb-4">
              My content will primarily focus on technology, programming, and my journey as a developer. I'll be sharing
              tutorials, project showcases, and insights into the world of AI, cybersecurity, and accessibility
              technology.
            </p>

            <p className="mb-4">
              On my main YouTube channel, I'll be posting more polished, educational content, while my TikTok will
              feature shorter, more casual behind-the-scenes looks at my projects and daily life as a developer.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Why Social Media?</h2>

            <p className="mb-4">
              I believe in the power of knowledge sharing and community building. By creating content on these
              platforms, I hope to:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Share my knowledge and experiences with others</li>
              <li>Connect with like-minded individuals in the tech community</li>
              <li>Document my journey and growth as a developer</li>
              <li>Inspire others to explore the world of technology</li>
            </ul>

            <p className="mb-4">
              This is just the beginning, and I'm excited to see where this journey takes me. I'd love for you to join
              me by subscribing to my channels and sharing your thoughts and feedback on my content.
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #ContentCreation #YouTube #TikTok #TechContent #Programming #DeveloperJourney
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

