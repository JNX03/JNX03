import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-3xl text-center">404 - Page Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
            <p className="mb-6">It might have been moved or deleted.</p>
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href="/">Go Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

