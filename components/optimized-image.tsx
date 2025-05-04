"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  loading?: "eager" | "lazy"
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  onLoad?: () => void
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  width,
  height,
  priority = false,
  className = "",
  sizes = "100vw",
  quality = 75,
  loading = "lazy",
  objectFit = "cover",
  onLoad,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  // Generate placeholder URL with dimensions if width and height are provided
  const placeholderUrl =
    width && height ? `${fallbackSrc}?height=${height}&width=${width}&text=${encodeURIComponent(alt)}` : fallbackSrc

  return (
    <div
      className={`relative ${className}`}
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" style={{ objectFit }} />
      )}
      <Image
        src={imgSrc || placeholderUrl}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={quality}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          objectFit,
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
        className={className}
      />
    </div>
  )
}
