import { ModeToggle } from "@/components/mode-toggle"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Connect } from "@/components/connect"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">JNX03</h1>
        <ModeToggle />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Connect />
      </main>
      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2024 JNX03. All rights reserved.
      </footer>
    </div>
  )
}

