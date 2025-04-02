"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { X, Cookie } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <div
          className={`max-w-4xl mx-auto rounded-lg shadow-lg ${
            theme === "light" ? "bg-white border border-gray-200" : "bg-gray-900 border border-gray-800"
          }`}
        >
          <div className="p-4 md:p-6">
            <div className="flex items-start">
              <div className={`flex-shrink-0 p-2 rounded-full ${theme === "light" ? "bg-blue-100" : "bg-blue-900/30"}`}>
                <Cookie className={`h-6 w-6 ${theme === "light" ? "text-blue-600" : "text-blue-400"}`} />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className={`text-lg font-medium ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Cookie Consent
                  </h3>
                  <button
                    type="button"
                    className={`ml-3 flex-shrink-0 ${theme === "light" ? "text-gray-400 hover:text-gray-500" : "text-gray-500 hover:text-gray-400"}`}
                    onClick={handleClose}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className={`mt-2 text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                  <p>
                    This website uses cookies to enhance your browsing experience, analyze site traffic, and personalize
                    content. By clicking "Accept All", you consent to our use of cookies. You can manage your
                    preferences by clicking "Customize".
                  </p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={handleAccept}
                    className={theme === "light" ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
                  >
                    Accept All
                  </Button>
                  <Button variant="outline" onClick={handleDecline}>
                    Decline Non-Essential
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

