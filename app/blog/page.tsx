import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-4 pt-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Hello World 👋</CardTitle>
            <CardDescription>Posted on January 18, 2024</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4">
              Hey there! I'm Jean (JNX03), a developer and tech enthusiast with a passion for making the world a better place through technology. 
              I'm excited to start sharing my journey and projects with you through this blog.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Who Am I?</h2>
            <p className="mb-4">
              I'm a student developer currently based in Thailand, with a deep interest in AI, cybersecurity, and accessibility technology. 
              My journey in tech started with a simple curiosity about how things work, and it has evolved into a mission to create tools 
              and solutions that can help people.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Introducing Project 1x12</h2>
            <p className="mb-4">
              I'm thrilled to give you a sneak peek into one of my most ambitious projects yet: Project 1x12. 
              This is a quantum computing initiative that aims to break the barriers between classical and quantum computing.
            </p>

            <p className="mb-4">
              Project 1x12 exists in a state of superposition - between reality and possibility. It's an experimental platform 
              that explores the boundaries of quantum mechanics in computing. While I can't reveal all the details just yet, 
              I've left some breadcrumbs for the curious minds...
            </p>

            <p className="mb-4">
              If you're interested in discovering more about Project 1x12, try exploring the terminal on this website 
              (hint: press ⌘K or Ctrl+K and look for the terminal option). There might be some quantum-encrypted secrets 
              waiting to be discovered...
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What's Next?</h2>
            <p className="mb-4">
              This blog will be a space where I share my thoughts on technology, document my projects, and discuss interesting 
              discoveries in the world of computing. Expect posts about:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Quantum computing developments</li>
              <li>Accessibility in technology</li>
              <li>AI and machine learning projects</li>
              <li>Cybersecurity insights</li>
              <li>Behind-the-scenes of my projects</li>
            </ul>

            <p className="mb-4">
              Stay tuned for more updates, and don't forget to check out my other projects. The quantum realm awaits!
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #Introduction #Project1x12 #QuantumComputing #Technology
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

