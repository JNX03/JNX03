"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, AlertCircle, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const { theme } = useTheme()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const validateForm = () => {
    if (!name.trim()) {
      setErrorMessage("Please enter your name")
      return false
    }

    if (!email.trim()) {
      setErrorMessage("Please enter your email")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address")
      return false
    }

    if (!message.trim()) {
      setErrorMessage("Please enter a message")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("idle")
    setErrorMessage("")

    if (!validateForm()) {
      setFormStatus("error")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      // Success
      setFormStatus("success")
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      })

      // Reset form
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error("Error:", error)
      setFormStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred")

      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const t = (key: string) => {
    const translations: { [key: string]: string } = {
      name: "Name",
      email: "Email",
      subject: "Subject (Optional)",
      message: "Message",
      sending: "Sending...",
      sendMessage: "Send Message",
      error: "Error",
      failedToSend: "There was a problem sending your message. Please try again.",
      messageSent: "Success!",
      thankYou: "Your message has been sent successfully. I'll get back to you soon.",
    }
    return translations[key] || key
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div className="grid gap-8 md:grid-cols-2" variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Card
              className={
                theme === "light"
                  ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                  : "hover:bg-accent/50 transition-colors"
              }
            >
              <CardHeader>
                <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Get in Touch</CardTitle>
                <CardDescription className={theme === "light" ? "text-gray-600" : ""}>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formStatus === "error" && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>{t("error")}</AlertTitle>
                    <AlertDescription>{errorMessage || t("failedToSend")}</AlertDescription>
                  </Alert>
                )}

                {formStatus === "success" && (
                  <Alert className="mb-6 border-green-500 text-green-500">
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>{t("messageSent")}</AlertTitle>
                    <AlertDescription>{t("thankYou")}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className={theme === "light" ? "text-gray-700" : ""}>
                      {t("name")}
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className={
                        theme === "light"
                          ? "border-gray-300 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className={theme === "light" ? "text-gray-700" : ""}>
                      {t("email")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={
                        theme === "light"
                          ? "border-gray-300 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className={theme === "light" ? "text-gray-700" : ""}>
                      {t("subject")}
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={
                        theme === "light"
                          ? "border-gray-300 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className={theme === "light" ? "text-gray-700" : ""}>
                      {t("message")}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`min-h-[150px] ${theme === "light" ? "border-gray-300 focus-visible:ring-indigo-500 focus-visible:border-indigo-500" : ""}`}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full ${theme === "light" ? "bg-indigo-600 hover:bg-indigo-700 text-white" : ""}`}
                  >
                    {isLoading ? (
                      t("sending")
                    ) : (
                      <>
                        {t("sendMessage")} <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={item}>
              <Card
                className={
                  theme === "light"
                    ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                    : "hover:bg-accent/50 transition-colors"
                }
              >
                <CardHeader>
                  <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className={`h-5 w-5 ${theme === "light" ? "text-indigo-600" : "text-muted-foreground"}`} />
                    <p className={theme === "light" ? "text-gray-700" : ""}>contact@jnx03.xyz</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className={`h-5 w-5 ${theme === "light" ? "text-indigo-600" : "text-muted-foreground"}`} />
                    <p className={theme === "light" ? "text-gray-700" : ""}>Available upon request</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className={`h-5 w-5 ${theme === "light" ? "text-indigo-600" : "text-muted-foreground"}`} />
                    <p className={theme === "light" ? "text-gray-700" : ""}>Chiang Mai, Thailand</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card
                className={
                  theme === "light"
                    ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                    : "hover:bg-accent/50 transition-colors"
                }
              >
                <CardHeader>
                  <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Connect with Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      asChild
                      className={`flex flex-col items-center gap-2 h-auto py-4 ${theme === "light" ? "border-gray-300 hover:bg-gray-50 text-gray-800" : ""}`}
                    >
                      <a href="https://github.com/JNX03" target="_blank" rel="noopener noreferrer">
                        <Github className={`h-6 w-6 ${theme === "light" ? "text-gray-800" : ""}`} />
                        <span className={`text-xs ${theme === "light" ? "text-gray-700" : ""}`}>GitHub</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className={`flex flex-col items-center gap-2 h-auto py-4 ${theme === "light" ? "border-gray-300 hover:bg-gray-50 text-gray-800" : ""}`}
                    >
                      <a
                        href="https://www.linkedin.com/in/chawabhon-netisingha-4a60a034a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className={`h-6 w-6 ${theme === "light" ? "text-blue-600" : ""}`} />
                        <span className={`text-xs ${theme === "light" ? "text-gray-700" : ""}`}>LinkedIn</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className={`flex flex-col items-center gap-2 h-auto py-4 ${theme === "light" ? "border-gray-300 hover:bg-gray-50 text-gray-800" : ""}`}
                    >
                      <a href="https://www.instagram.com/jxxn03z/" target="_blank" rel="noopener noreferrer">
                        <Instagram className={`h-6 w-6 ${theme === "light" ? "text-pink-600" : ""}`} />
                        <span className={`text-xs ${theme === "light" ? "text-gray-700" : ""}`}>Instagram</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card
                className={
                  theme === "light"
                    ? "bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                    : "hover:bg-accent/50 transition-colors"
                }
              >
                <CardHeader>
                  <CardTitle className={theme === "light" ? "text-gray-900" : ""}>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={theme === "light" ? "text-gray-600" : "text-muted-foreground"}>
                    I'm generally available for meetings and calls during the following hours:
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className={theme === "light" ? "text-gray-700 font-medium" : ""}>Monday - Friday</span>
                      <span className={theme === "light" ? "text-gray-700" : ""}>9:00 AM - 6:00 PM (ICT)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={theme === "light" ? "text-gray-700 font-medium" : ""}>Saturday</span>
                      <span className={theme === "light" ? "text-gray-700" : ""}>10:00 AM - 2:00 PM (ICT)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={theme === "light" ? "text-gray-700 font-medium" : ""}>Sunday</span>
                      <span className={theme === "light" ? "text-gray-700" : ""}>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
