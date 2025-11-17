"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ImageDownloadProps {
  src: string
  alt: string
  filename?: string
  className?: string
}

export function ImageDownload({ src, alt, filename, className = "" }: ImageDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadImage = async (format: "original" | "webp" | "png") => {
    setIsDownloading(true)
    try {
      const response = await fetch(src)
      const blob = await response.blob()

      // Convert if needed
      let downloadBlob = blob
      let extension = src.split('.').pop() || 'jpg'

      if (format !== "original") {
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)

        await new Promise((resolve) => {
          img.onload = resolve
        })

        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0)

        const mimeType = format === "webp" ? "image/webp" : "image/png"
        downloadBlob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((blob) => resolve(blob!), mimeType, 0.95)
        })

        extension = format
      }

      const url = URL.createObjectURL(downloadBlob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename || `${alt.replace(/\s+/g, '-').toLowerCase()}.${extension}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Failed to download image:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={className}
          disabled={isDownloading}
        >
          <Download className="h-4 w-4 mr-2" />
          {isDownloading ? "Downloading..." : "Download"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => downloadImage("original")}>
          Original Format
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => downloadImage("webp")}>
          WebP (Optimized)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => downloadImage("png")}>
          PNG (Lossless)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
