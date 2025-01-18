"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Navigation() {
  const pathname = usePathname()
  
  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/"
    },
    {
      href: "/research",
      label: "Research Paper",
      active: pathname === "/research"
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects"
    },
    {
      href: "/education",
      label: "Education",
      active: pathname === "/education"
    },
    {
      href: "/experience",
      label: "Experience",
      active: pathname === "/experience"
    },
    {
      href: "/awards",
      label: "Awards",
      active: pathname === "/awards"
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog"
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="font-bold text-2xl">
            JNX03
          </Link>
          <nav className="flex space-x-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.active ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link href={route.href}>
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

