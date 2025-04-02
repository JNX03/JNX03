"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WifiOff, X } from "lucide-react"
import { useTheme } from "next-themes"

export function OfflineAlert() {
  const [isOffline, setIsOffline] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Check if we're offline when the component mounts
    if (typeof window !== "undefined") {
      setIsOffline(!window.navigator.onLine)
    }

    // Add event listeners for online/offline events
    const handleOffline = () => {
      setIsDismissed(false)
      setIsOffline(true)
    }
    const handleOnline = () => setIsOffline(false)

    window.addEventListener("offline", handleOffline)
    window.addEventListener("online", handleOnline)

    // Clean up event listeners
    return () => {
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("online", handleOnline)
    }
  }, [])

  if (!isOffline || isDismissed) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-auto rounded-lg shadow-lg ${
          theme === "light" ? "bg-white border border-red-200" : "bg-gray-900 border border-red-900"
        }`}
      >
        <div className="flex items-start p-4">
          <div className={`flex-shrink-0 p-2 rounded-full ${theme === "light" ? "bg-red-100" : "bg-red-900/30"}`}>
            <WifiOff className={`h-5 w-5 ${theme === "light" ? "text-red-600" : "text-red-500"}`} />
          </div>
          <div className="ml-3 flex-1">
            <h3 className={`text-sm font-medium ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              You're offline
            </h3>
            <div className={`mt-1 text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
              <p>You're currently viewing cached content. Some features may be limited until you reconnect.</p>
            </div>
          </div>
          <button
            type="button"
            className={`flex-shrink-0 ml-2 ${theme === "light" ? "text-gray-400 hover:text-gray-500" : "text-gray-500 hover:text-gray-400"}`}
            onClick={() => setIsDismissed(true)}
          >
            <span className="sr-only">Close</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className={`h-1 w-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-b-lg`}></div>
      </motion.div>
    </AnimatePresence>
  )
}

