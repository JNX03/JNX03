import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Swift Student Challenge 2025 Winner! 🏆</CardTitle>
            <CardDescription>Posted on March 28, 2025</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I'm incredibly excited to announce that I've been selected as a{" "}
              <strong>Swift Student Challenge 2025 winner</strong>! This is a tremendous honor, and I'm grateful to
              Apple for this recognition of my project, Syntaxia.
            </p>

            <p className="mb-4">
              Syntaxia is an innovative app that combines SwiftUI, speech synthesis, natural language processing, and
              more to create a unique educational experience.
            </p>

            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/blog/swift-student-challenge-2025" className="no-underline">
                Read more →
              </Link>
            </Button>

            <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">Swift</Badge>
              <Badge variant="secondary">SwiftUI</Badge>
              <Badge variant="secondary">Apple</Badge>
              <Badge variant="secondary">Student Challenge</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Cancer Plus Prc X: Advanced Encryption Library</CardTitle>
            <CardDescription>Posted on March 22, 2025</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I'm excited to announce the release of my new encryption/decryption library:{" "}
              <strong>Cancer Plus Prc X</strong>. This library provides military-grade encryption for your sensitive
              data with a unique multi-layered approach that makes it extremely resistant to brute force attacks.
            </p>

            <p className="mb-4">
              The library implements a proprietary file format <code>.CPx</code> with multiple encryption layers
              including AES-256-GCM, ChaCha20-Poly1305, and RSA-4096, offering unprecedented security for your data.
            </p>

            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/blog/cancer-plus-prc-x" className="no-underline">
                Read more →
              </Link>
            </Button>

            <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">Encryption</Badge>
              <Badge variant="secondary">Security</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">NPM</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Hello World 👋</CardTitle>
            <CardDescription>Posted on January 18, 2024</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              Hey there! I'm Jean (JNX03), a developer and tech enthusiast with a passion for making the world a better
              place through technology. I'm excited to start sharing my journey and projects with you through this blog.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Who Am I?</h2>
            <p className="mb-4">
              I'm a student developer currently based in Thailand, with a deep interest in AI, cybersecurity, and
              accessibility technology. My journey in tech started with a simple curiosity about how things work, and it
              has evolved into a mission to create tools and solutions that can help people.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Introducing Project 1x12</h2>
            <p className="mb-4">
              I'm thrilled to give you a sneak peek into one of my most ambitious projects yet: Project 1x12. This is a
              quantum computing initiative that aims to break the barriers between classical and quantum computing.
            </p>

            <p className="mb-4">
              Project 1x12 exists in a state of superposition - between reality and possibility. It's an experimental
              platform that explores the boundaries of quantum mechanics in computing. While I can't reveal all the
              details just yet, I've left some breadcrumbs for the curious minds...
            </p>

            <p className="mb-4">
              If you're interested in discovering more about Project 1x12, try exploring the terminal on this website
              (hint: press ⌘K or Ctrl+K and look for the terminal option). There might be some quantum-encrypted secrets
              waiting to be discovered...
            </p>

            <div className="text-sm text-muted-foreground mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">Introduction</Badge>
              <Badge variant="secondary">Project1x12</Badge>
              <Badge variant="secondary">QuantumComputing</Badge>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

