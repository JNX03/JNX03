"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, ArrowUp, X, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { OfflineAlert } from "@/components/offline-alert"
import { LanguageSwitcher } from "@/components/language-switcher"
import { AccessibilityMenu } from "@/components/accessibility-menu"
import { SearchDialog } from "@/components/search-dialog"
import { useLanguage } from "@/lib/i18n"

export function Navigation() {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isFloating, setIsFloating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)
  const { t } = useLanguage()

  // Define routes with translations
  const routes = [
    { href: "/", label: t("home") },
    { href: "/research", label: t("research") },
    { href: "/projects", label: t("projects") },
    { href: "/education", label: t("education") },
    { href: "/experience", label: t("experience") },
    { href: "/awards", label: t("awards") },
    { href: "/blog", label: t("blog") },
    { href: "/resume", label: t("resume") },
    { href: "/links", label: t("links") },
    { href: "/contact", label: t("contact") },
  ]

  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)
    setShowBackToTop(currentScrollY > 300)
    setIsFloating(currentScrollY > 100)
  }, [])

  useEffect(() => {
    // Set initial state based on current scroll position
    handleScroll()
    // Add passive: true to improve scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
          isFloating ? "py-2" : "py-0",
          theme === "light"
            ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-gray-200"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        )}
      >
        <div
          className={cn(
            "container mx-auto transition-all duration-300 ease-in-out",
            isFloating ? "max-w-5xl rounded-full border shadow-lg px-4" : "border-b",
          )}
        >
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg">JNX03</span>
            </Link>

            <nav className="hidden md:flex items-center justify-center flex-1 space-x-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    route.active || pathname === route.href
                      ? theme === "light"
                        ? "text-indigo-600 font-semibold"
                        : "text-foreground"
                      : theme === "light"
                        ? "text-gray-600"
                        : "text-foreground/60",
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <AccessibilityMenu />

              <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    aria-label="Toggle Menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className={`pr-0 ${theme === "light" ? "bg-white" : ""}`}>
                  <div className="flex items-center justify-between mb-4">
                    <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                      <span className="font-bold">JNX03</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close Menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-4">
                      {routes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          className={cn(
                            "text-base transition-colors hover:text-foreground/80",
                            pathname === route.href && theme === "light" ? "text-indigo-600 font-semibold" : "",
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {route.label}
                        </Link>
                      ))}
                    </div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className={`rounded-full shadow-lg ${
                theme === "light"
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <OfflineAlert />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}

