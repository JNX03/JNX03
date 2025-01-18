import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Connect } from "@/components/connect"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Connect />
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">Explore More</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/experience">View Experience</Link>
            </Button>
            <Button asChild>
              <Link href="/awards">View Awards</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="mt-16 text-center text-sm text-gray-500 pb-8">
        © 2024 JNX03. All rights reserved.
      </footer>
    </div>
  )
}

