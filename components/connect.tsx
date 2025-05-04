import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Connect() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a", color: "bg-blue-600" },
    { name: "GitHub", url: "https://github.com/JNX03", color: "bg-gray-800" },
    { name: "Kaggle", url: "https://www.kaggle.com/jxxn03x", color: "bg-[#20BEFF]" },
    { name: "Instagram", url: "https://www.instagram.com/jxxn03z/", color: "bg-pink-600" },
    { name: "YouTube (Main)", url: "https://www.youtube.com/@Jnx03", color: "bg-red-600" },
    { name: "YouTube (Production)", url: "https://www.youtube.com/@Jnx03Studio", color: "bg-red-600" },
    { name: "TikTok", url: "https://www.tiktok.com/@jxxn03z", color: "bg-black" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>📬 Connect with Me</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <Button key={link.name} asChild variant="outline" className={`${link.color} text-white`}>
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
