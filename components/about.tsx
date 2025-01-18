import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-center">About Meeeeeeeeeeeeeee ✨</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
          <code>{`name: Jean (JNX03)
from: Earth 🌍 Or not may be :D
website: https://jnx03.xyz/  see my spooky stuff or it Just a mystery thing?
interests: Everything 
currently_learning: "Everything I can get my hands on!"
favorite_tech:
  - Languages: [JavaScript, Python, C++]
  - Tools: [React, Node.js, Docker, Git]
Goal: "I want to make the world better with my cool tech stuff and change the world"`}
          </code>
        </pre>
      </CardContent>
    </Card>
  )
}

