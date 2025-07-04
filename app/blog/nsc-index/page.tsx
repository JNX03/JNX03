import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import { Footer } from "@/components/footer"

export default function NscIndexBlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl sm:text-3xl">
                  National Software Contest (NSC): Selected for INDEX! 💻
                </CardTitle>
                <CardDescription>Posted on June 13, 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>NSC</Badge>
                <Badge>Software</Badge>
                <Badge>Contest</Badge>
                <Badge>INDEX</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg mb-4">
              I'm excited to announce that I've been selected to participate in the National Software Contest (NSC)
              program, specifically for the INDEX initiative! This is a great opportunity to showcase my software
              development skills and contribute to innovative projects.
            </p>

            <p className="mb-4">
              The National Software Contest is a highly regarded competition in Thailand that encourages and supports
              young software developers. Being part of the INDEX initiative means I'll be involved in a focused program
              designed to foster advanced software development and project management skills.
            </p>

            <p className="mb-4">
              I'm looking forward to the challenges and learning experiences that the NSC INDEX program will bring. I'll
              be working on a new software project, and I'm eager to share my progress and insights with you all.
            </p>

            <div className="flex flex-wrap gap-4 my-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="https://www.nectec.or.th/nsc/" target="_blank" rel="noopener noreferrer">
                  <Code className="mr-2 h-4 w-4" /> NSC Official Website
                </Link>
              </Button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">About NSC</h2>
            <p className="mb-4">
              The National Software Contest (NSC) is an annual competition organized by the National Electronics and
              Computer Technology Center (NECTEC) in Thailand. It aims to promote software development, creativity, and
              innovation among students and young professionals.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">The INDEX Initiative</h3>
            <p className="mb-4">
              The INDEX initiative within NSC focuses on advanced and impactful software projects. Participants receive
              mentorship and resources to develop their ideas into robust and scalable solutions.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">My Project Goals</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Develop a high-quality software application that addresses a specific need.</li>
              <li>Apply best practices in software engineering and project management.</li>
              <li>Collaborate effectively with mentors and peers.</li>
              <li>Present the final project at the NSC exhibition.</li>
            </ul>

            <div className="text-sm text-muted-foreground mt-8">
              Tags: #NSC #SoftwareDevelopment #Contest #Thailand #Programming #Innovation #Tech
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
