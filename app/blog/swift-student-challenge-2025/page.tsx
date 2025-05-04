import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Youtube, Globe } from "lucide-react"
import { Footer } from "@/components/footer"
import { ClientImage } from "@/components/client-image"
import Script from "next/script"

export default function SwiftStudentChallengeBlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">Swift Student Challenge 2025 Winner! 🏆</CardTitle>
                <CardDescription>Posted on March 28, 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Swift</Badge>
                <Badge>SwiftUI</Badge>
                <Badge>Apple</Badge>
                <Badge>Achievement</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
              <ClientImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PcDiryVpDmgMgr3xXGbYGh1mMu3fvs.png"
                alt="Swift Student Challenge Winner Announcement"
                fallbackSrc="/placeholder.svg?height=400&width=800&text=Swift+Student+Challenge+Winner"
              />
            </div>

            <p className="text-base sm:text-lg mb-4">
              I'm incredibly excited and honored to share that I've been selected as a winner of the Swift Student
              Challenge 2025! This recognition from Apple is a tremendous milestone in my journey as a developer, and
              I'm grateful for the opportunity to showcase my project, Syntaxia, on such a prestigious platform.
            </p>

            <div className="flex flex-wrap gap-4 my-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="https://github.com/JNX03/Syntaxia" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub Repository
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-foreground border-foreground hover:bg-accent">
                <Link href="https://youtu.be/zJ4cAt7An84" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Watch Demo Video
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-foreground border-foreground hover:bg-accent">
                <Link href="https://www.jnx03.xyz/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> About Me
                </Link>
              </Button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">About Syntaxia</h2>

            <p className="mb-4">
              Syntaxia is an innovative educational app designed to make learning programming concepts more accessible
              and engaging. The project combines several advanced technologies to create an immersive learning
              experience:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { tech: "SwiftUI", description: "For building a beautiful, responsive interface" },
                { tech: "Speech Synthesis", description: "To provide audio explanations and feedback" },
                { tech: "Natural Language", description: "For understanding and processing user inputs" },
                { tech: "AVFoundation", description: "For handling audio and video components" },
                { tech: "AVKit", description: "For media playback and control" },
                { tech: "AudioToolbox", description: "For advanced audio processing" },
                { tech: "Vision", description: "For image and video analysis" },
                { tech: "UniformTypeIdentifiers", description: "For file type handling" },
                { tech: "ScreenKit", description: "For screen recording and sharing capabilities" },
              ].map((item, index) => (
                <div key={index} className="bg-muted p-4 rounded-md">
                  <p className="font-semibold">{item.tech}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">The Journey</h2>

            <p className="mb-4">
              Developing Syntaxia was both challenging and rewarding. The idea came from my own experiences learning to
              code and the obstacles I faced. I wanted to create a tool that would make the learning process more
              intuitive and accessible, especially for visual and auditory learners.
            </p>

            <p className="mb-4">
              The development process involved extensive research into educational methodologies, cognitive science, and
              user experience design. I spent countless hours refining the interface, optimizing the performance, and
              testing with real users to ensure that Syntaxia was not only functional but also enjoyable to use.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Key Features</h2>

            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Interactive Code Playground:</strong> A safe environment for experimenting with code
              </li>
              <li>
                <strong>Voice-Guided Tutorials:</strong> Step-by-step instructions with audio guidance
              </li>
              <li>
                <strong>Visual Learning Aids:</strong> Animations and visualizations to explain complex concepts
              </li>
              <li>
                <strong>Real-time Feedback:</strong> Immediate responses to help users learn from mistakes
              </li>
              <li>
                <strong>Adaptive Learning Path:</strong> Personalized content based on user progress and preferences
              </li>
              <li>
                <strong>Offline Mode:</strong> Full functionality without an internet connection
              </li>
              <li>
                <strong>Accessibility Features:</strong> Designed to be inclusive for users with different abilities
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">The Swift Student Challenge Experience</h2>

            <p className="mb-4">
              Participating in the Swift Student Challenge was an incredible experience. The challenge pushed me to
              refine my skills, think creatively, and deliver a polished product within a limited timeframe. The
              feedback and support from the Apple developer community were invaluable, and I'm grateful for the
              opportunity to connect with like-minded individuals who share my passion for technology and education.
            </p>

            <p className="mb-4">
              Being selected as a winner is a tremendous honor, but the real reward has been the journey itself—the
              learning, the growth, and the chance to create something that can make a positive impact.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">What's Next</h2>

            <p className="mb-4">
              Winning the Swift Student Challenge is just the beginning. I plan to continue developing Syntaxia, adding
              new features, expanding the content library, and making it available to a wider audience. I'm also excited
              to explore opportunities to collaborate with educational institutions and other developers to create more
              innovative learning tools.
            </p>

            <p className="mb-4">
              In the coming months, I'll be sharing more detailed insights into the development process, technical
              challenges, and lessons learned. Stay tuned for tutorials, behind-the-scenes looks, and updates on new
              features.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Acknowledgments</h2>

            <p className="mb-4">
              I want to express my gratitude to Apple for creating the Swift Student Challenge and providing this
              platform for young developers to showcase their work. I'm also thankful to my mentors, friends, and family
              who supported me throughout this journey, providing feedback, encouragement, and inspiration.
            </p>

            <p className="mb-4">
              Special thanks to the Swift and SwiftUI communities for their resources, tutorials, and forums that helped
              me overcome technical challenges and learn new skills.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Conclusion</h2>

            <p className="mb-4">
              Winning the Swift Student Challenge 2025 is a milestone that I'll cherish, but it's also a reminder that
              there's always more to learn, create, and explore. I'm excited about the future and the opportunities that
              lie ahead.
            </p>

            <p className="mb-4">
              If you're interested in Syntaxia or have questions about the Swift Student Challenge, feel free to reach
              out. I'd love to connect with fellow developers and educators who share my passion for making technology
              more accessible and education more engaging.
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #SwiftStudentChallenge #Apple #SwiftUI #Syntaxia #CodingEducation #StudentDeveloper
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
      <Script id="blog-post-schema" type="application/ld+json">
        {`
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Swift Student Challenge 2025 Winner!",
      "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PcDiryVpDmgMgr3xXGbYGh1mMu3fvs.png",
      "datePublished": "2025-03-28T00:00:00+00:00",
      "dateModified": "${new Date().toISOString()}",
      "author": {
        "@type": "Person",
        "name": "Jean (JNX03)",
        "url": "https://jnx03.xyz"
      },
      "publisher": {
        "@type": "Organization",
        "name": "JNX03 Portfolio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://avatars.githubusercontent.com/u/112270477?v=4"
        }
      },
      "description": "Chawabhon Netisingha (JNX03) wins the Swift Student Challenge 2025 with Syntaxia project",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jnx03.xyz/blog/swift-student-challenge-2025"
      },
      "keywords": ["SwiftStudentChallenge", "Apple", "SwiftUI", "Syntaxia", "CodingEducation", "StudentDeveloper"]
    }
  `}
      </Script>
    </div>
  )
}
