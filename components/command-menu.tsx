"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Calculator, Calendar, Clock, Terminal, Settings, Smile, User, FileText, Github, Instagram, Youtube, Rocket } from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

import { useToast } from "@/components/ui/use-toast"

export function CommandMenu() {
  const router = useRouter()
  const { toast } = useToast()
  const [open, setOpen] = React.useState(false)
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-background p-1 text-center text-sm text-muted-foreground print:hidden md:block">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open the command menu
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => runCommand(() => router.push('/dex/terminal'))}
            >
              <Terminal className="mr-2 h-4 w-4" />
              Open Terminal
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => {
                toast({
                  title: "Current Time",
                  description: time.toLocaleTimeString(),
                })
              })}
            >
              <Clock className="mr-2 h-4 w-4" />
              Show Current Time
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            <CommandItem
              onSelect={() => runCommand(() => window.open('https://notex.jnx03.xyz', '_blank'))}
            >
              <FileText className="mr-2 h-4 w-4" />
              Open Notex
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => window.open('https://nova.jnx03.xyz', '_blank'))}
            >
              <Rocket className="mr-2 h-4 w-4" />
              Open Nova
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social">
            <CommandItem
              onSelect={() => runCommand(() => window.open('https://github.com/JNX03', '_blank'))}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => window.open('https://www.instagram.com/jxxn03z/', '_blank'))}
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => window.open('https://www.youtube.com/@Jnx03', '_blank'))}
            >
              <Youtube className="mr-2 h-4 w-4" />
              YouTube (Main)
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => window.open('https://www.youtube.com/@Jnx03Studio', '_blank'))}
            >
              <Youtube className="mr-2 h-4 w-4" />
              YouTube (Production)
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

