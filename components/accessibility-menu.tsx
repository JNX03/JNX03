"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accessibility, ZoomIn, ZoomOut, Type, RotateCcw } from "lucide-react"
import { useTheme } from "next-themes"
import { Slider } from "@/components/ui/slider"

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(100)
  const [contrast, setContrast] = useState("normal")
  const { theme } = useTheme()

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = "100%"
  }

  const toggleHighContrast = () => {
    if (contrast === "normal") {
      setContrast("high")
      document.documentElement.classList.add("high-contrast")
    } else {
      setContrast("normal")
      document.documentElement.classList.remove("high-contrast")
    }
  }

  const resetAll = () => {
    resetFontSize()
    setContrast("normal")
    document.documentElement.classList.remove("high-contrast")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Accessibility className="h-4 w-4" />
          <span className="sr-only">Accessibility options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2">
          <h3 className={`text-sm font-medium mb-2 ${theme === "light" ? "text-gray-900" : "text-gray-100"}`}>
            Accessibility Options
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs">Text Size: {fontSize}%</span>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" onClick={decreaseFontSize} className="h-6 w-6">
                    <ZoomOut className="h-3 w-3" />
                    <span className="sr-only">Decrease font size</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={increaseFontSize} className="h-6 w-6">
                    <ZoomIn className="h-3 w-3" />
                    <span className="sr-only">Increase font size</span>
                  </Button>
                </div>
              </div>
              <Slider
                value={[fontSize]}
                min={80}
                max={150}
                step={5}
                onValueChange={(value) => {
                  setFontSize(value[0])
                  document.documentElement.style.fontSize = `${value[0]}%`
                }}
              />
            </div>

            <DropdownMenuItem onClick={toggleHighContrast}>
              <Type className="mr-2 h-4 w-4" />
              <span>{contrast === "normal" ? "Enable High Contrast" : "Disable High Contrast"}</span>
            </DropdownMenuItem>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={resetAll}>
          <RotateCcw className="mr-2 h-4 w-4" />
          <span>Reset All</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

