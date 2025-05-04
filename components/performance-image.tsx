"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PerformanceImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  loading?: "eager" | "lazy"
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
  onLoad?: () => void
}

export function PerformanceImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  loading = priority ? "eager" : "lazy",
  objectFit = "cover",
  placeholder = "empty",
  blurDataURL,
  onLoad,
}: PerformanceImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  // Generate a simple placeholder if none provided
  const defaultPlaceholder = `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width || 100}" height="${height || 100}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/></svg>`,
  ).toString("base64")}`

  // Reset loading state when src changes
  useEffect(() => {
    setImgSrc(src)
    setIsLoading(!priority)
    setError(false)
  }, [src, priority])

  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  const handleError = () => {
    setError(true)
    setImgSrc(`/placeholder.svg?height=${height || 100}&width=${width || 100}&text=${encodeURIComponent(alt)}`)
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto" }}
    >
      {isLoading && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md" />}
      <Image
        src={error ? imgSrc : src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={quality}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultPlaceholder}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
        style={{
          objectFit: objectFit as any,
        }}
      />
    </div>
  )
}
