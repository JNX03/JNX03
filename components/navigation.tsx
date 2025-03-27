"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Navigation() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/research",
      label: "Research Paper",
      active: pathname === "/research",
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects",
    },
    {
      href: "/education",
      label: "Education",
      active: pathname === "/education",
    },
    {
      href: "/experience",
      label: "Experience",
      active: pathname === "/experience",
    },
    {
      href: "/awards",
      label: "Awards",
      active: pathname === "/awards",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex-1 flex justify-center items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
            <span className="font-bold">JNX03</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  route.active ? "text-foreground" : "text-foreground/60",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileLink href="/" className="flex items-center" onOpenChange={() => {}}>
                <span className="font-bold">JNX03</span>
              </MobileLink>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {routes.map(
                    (item) =>
                      item.href && (
                        <MobileLink key={item.href} href={item.href} onOpenChange={() => {}}>
                          {item.label}
                        </MobileLink>
                      ),
                  )}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

interface MobileLinkProps {
  href: string
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({ href, onOpenChange, className, children }: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href)
        onOpenChange?.(false)
      }}
      className={cn(className)}
    >
      {children}
    </Link>
  )
}

