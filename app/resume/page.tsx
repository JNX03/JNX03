"use client"

import { useState, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { Download, Printer, Share2, Github, Linkedin, Mail, Globe } from "lucide-react"

export default function ResumePage() {
  const { theme } = useTheme()
  const resumeRef = useRef<HTMLDivElement>(null)
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = () => {
    setIsPrinting(true)
    setTimeout(() => {
      window.print()
      setIsPrinting(false)
    }, 100)
  }

  // Update the handleShare function to handle clipboard errors too
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Chawabhon Netisingha - Resume",
          text: "Check out my resume!",
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
        // Fallback - copy to clipboard
        try {
          await navigator.clipboard.writeText(window.location.href)
          alert("Resume URL copied to clipboard!")
        } catch (clipboardError) {
          console.error("Clipboard error:", clipboardError)
          alert("Could not share or copy. Please copy the URL manually.")
        }
      }
    } else {
      // Fallback for browsers that don't support sharing
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert("Resume URL copied to clipboard!")
      } catch (clipboardError) {
        console.error("Clipboard error:", clipboardError)
        alert("Could not copy to clipboard. Please copy the URL manually.")
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`print:hidden ${isPrinting ? "hidden" : ""}`}>
        <Navigation />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className={`flex justify-between items-center mb-6 print:hidden ${isPrinting ? "hidden" : ""}`}>
          <h1 className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : ""}`}>Resume</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" /> Print
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
            <Button asChild>
              <a href="/Chawabhon_Netisingha_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </Button>
          </div>
        </div>

        <div
          ref={resumeRef}
          className={`max-w-4xl mx-auto bg-white text-black p-8 shadow-lg rounded-lg print:shadow-none print:p-0 ${theme === "dark" && !isPrinting ? "dark-resume" : ""}`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-6">
            <div>
              <h1 className="text-3xl font-bold">Chawabhon Netisingha</h1>
              <p className="text-gray-600 mt-1">High School Student & Developer</p>
              <p className="text-gray-600">Age: 16 Years</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4 text-gray-700" />
                <a href="mailto:jn03official@gmail.com" className="text-blue-600 hover:underline">
                  jn03official@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-4 w-4 text-gray-700" />
                <a
                  href="https://jnx03.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  jnx03.xyz
                </a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Github className="h-4 w-4 text-gray-700" />
                <a
                  href="https://github.com/JNX03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  JNX03
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-gray-700" />
                <a
                  href="https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Chawabhon Netisingha
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Professional Summary</h2>
            <p className="text-gray-700">
              High school student with 7 years of programming experience and 4 years experience in AI. I have
              contributed to well-known projects like YoloV10, YoloV12 and Supabase while becoming skilled in languages
              such as Python, C, JavaScript, with multiple AI libraries. I have been recognized through multiple awards,
              projects and experience.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Skills & Proficiencies</h2>
            <div className="mb-2">
              <span className="font-semibold text-gray-800">Computer Languages:</span>
              <span className="text-gray-700"> Python, C, Javascript, bash, SQL</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Libraries:</span>
              <span className="text-gray-700"> ultralytics, cuda, tensorflow, pytorch, transformers, sklearn</span>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Education</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">The Prince Royal's College, Chiang Mai, Thailand</h3>
                <p className="text-gray-700">High School (2014 – Present)</p>
                <p className="text-gray-600 text-sm">
                  Enrolled in the English Program with a focus on sciences and technology.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-800">Brighton Language College, Brighton, United Kingdom</h3>
                <p className="text-gray-700">Language Studies (March – April 2023)</p>
                <p className="text-gray-600 text-sm">
                  Intensive English language program emphasizing academic writing and communication.
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">ElbrailleNext</h3>
                <p className="text-gray-600 text-sm">
                  A web application designed to assist blind and low-vision users in learning Braille.
                </p>
              </div>
              <div className="border p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">Text2Alphabet</h3>
                <p className="text-gray-600 text-sm">
                  A project leveraging Convolutional Neural Networks (CNN) to recognize alphabet sounds.
                </p>
              </div>
              <div className="border p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">AutoLabel</h3>
                <p className="text-gray-600 text-sm">
                  A Python-based tool that automates image labeling for YOLO models using pre-trained models.
                </p>
              </div>
              <div className="border p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">Beta Secrety</h3>
                <p className="text-gray-600 text-sm">
                  Beta harnesses the power of superBetas to detect vulnerabilities / Pentesting AI.
                </p>
              </div>
              <div className="border p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">Notex</h3>
                <p className="text-gray-600 text-sm">
                  Serves as a centralized platform for students to access well-organized notes that can aid in their
                  studies.
                </p>
              </div>
              <div className="border p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">Oxzi</h3>
                <p className="text-gray-600 text-sm">
                  An advance Next.js AI analysis Stress, SpO2, Heart rate from face in every device, where Just in 1
                  minute.
                </p>
              </div>
              <div className="border p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">MALARIAxLABS</h3>
                <p className="text-gray-600 text-sm">
                  An AI Prediction Malaria Disease from Microscope with plotting heatmap in Thailand.
                </p>
              </div>
              <div className="border p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">CervicalXJn</h3>
                <p className="text-gray-600 text-sm">
                  An AI Prediction Cervical Cancer from Microscope with custom AI model accurate 97.32% with 25ms.
                </p>
              </div>
            </div>
          </div>

          {/* Contributions */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Contributions</h2>
            <p className="text-gray-700">
              YoloV10, YoloV12, MonkeyType, WWDC and Supabase - Fixed bugs and added features
            </p>
          </div>

          {/* Leadership & Soft Skills */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Leadership & Soft Skills</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Staff Member, Stellar'23</li>
              <li>Student Council Member, The Prince Royal's College</li>
              <li>Staff Member, Gifted Math/Gifted Computer Program</li>
            </ul>
          </div>

          {/* Awards */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Certifications & Awards</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-500 text-yellow-900">Winner</Badge>
                <span className="text-gray-700">AI Innovator Award 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-500 text-yellow-900">Winner</Badge>
                <span className="text-gray-700">Thailand ICT Awards 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-gray-300 text-gray-800">Merit</Badge>
                <span className="text-gray-700">Asia Pacific ICT Alliance Award 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-amber-600 text-white">3rd Place</Badge>
                <span className="text-gray-700">Super AI Engineer Hackathon Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-500 text-yellow-900">Gold Medal</Badge>
                <span className="text-gray-700">Kamalasai AI and Technology Thailand #8</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-amber-600 text-white">3rd Place</Badge>
                <span className="text-gray-700">Kamalasai AI Robotics Thailand #7</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-gray-300 text-gray-800">Silver Medal</Badge>
                <span className="text-gray-700">PIM Robotics Playground 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-gray-300 text-gray-800">Honorable Mention</Badge>
                <span className="text-gray-700">Science Project Competition</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500 text-white">Participated</Badge>
                <span className="text-gray-700">FIRST Tech Challenge Centerstage</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500 text-white">Participated</Badge>
                <span className="text-gray-700">FIRST Tech Challenge Into the Deep</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-500 text-yellow-900">Winner</Badge>
                <span className="text-gray-700">WWDC 2024-2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500 text-white">Participated</Badge>
                <span className="text-gray-700">Super AI Engineer SS4</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500 text-white">Level 2 [ongoing]</Badge>
                <span className="text-gray-700">Super AI Engineer SS5</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-600 text-sm mt-8 border-t pt-4">
            For further details about my work and achievements, please visit{" "}
            <a
              href="https://jnx03.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              jnx03.xyz
            </a>
          </div>
        </div>
      </main>

      <div className={`print:hidden ${isPrinting ? "hidden" : ""}`}>
        <Footer />
      </div>

      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5cm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .dark-resume {
            background-color: white !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  )
}
