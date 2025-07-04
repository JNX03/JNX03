import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"

export default function MoodengAiChallengeBlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">
                  Moodeng AI Challenge Winners: AI for Augmenting Zoo Keepers 🏆
                </CardTitle>
                <CardDescription>Posted on June 25, 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>AI</Badge>
                <Badge>Challenge</Badge>
                <Badge>Zoo</Badge>
                <Badge>LSTM</Badge>
                <Badge>Vision</Badge>
                <Badge>MooDong</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I'm thrilled to announce that I've been recognized as a winner in the Moodeng AI Challenge for Track 3: AI
              for Augmenting Zoo Keepers! My project, MooDong, utilizes multi-task LSTM and vision models to extract
              pose, mood, hunger, and future-movement predictions for animals, all without requiring manual labels.
            </p>

            <p className="mb-4">
              The Moodeng AI Challenge, hosted by MIT Media Lab, focuses on innovative AI solutions for real-world
              problems. My solution addresses the critical need for efficient and non-invasive animal monitoring in
              zoos, providing keepers with actionable insights into animal well-being.
            </p>

            <div className="flex flex-wrap gap-4 my-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="https://moodeng.media.mit.edu/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Moodeng AI Challenge
                </Link>
              </Button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">About MooDong</h2>
            <p className="mb-4">
              MooDong is designed to revolutionize how zoo keepers monitor animal health and behavior. By leveraging
              advanced AI models, it can:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accurately detect animal poses and movements.</li>
              <li>Infer mood and emotional states from behavioral patterns.</li>
              <li>Predict hunger levels based on activity and feeding schedules.</li>
              <li>Forecast future movements to anticipate needs or potential issues.</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Key Technologies</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Multi-task LSTM:</strong> For sequential data analysis and prediction.
              </li>
              <li>
                <strong>Vision Models:</strong> For real-time pose estimation and behavioral analysis.
              </li>
              <li>
                <strong>Unsupervised Learning:</strong> Eliminates the need for extensive manual labeling, making the
                system highly scalable and adaptable.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Impact on Zoo Keeping</h2>
            <p className="mb-4">
              MooDong provides zoo keepers with a powerful tool to enhance animal welfare, optimize care routines, and
              detect early signs of distress or illness. This leads to healthier animals and more efficient operations.
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #AI #MachineLearning #ZooKeepers #AnimalWelfare #LSTM #ComputerVision #MITMediaLab #MooDong
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
