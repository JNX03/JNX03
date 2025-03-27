"use client"

import { useState } from "react"
import Image from "next/image"

interface ClientImageProps {
  src: string
  alt: string
  fallbackSrc: string
  layout?: "fill" | "fixed" | "intrinsic" | "responsive"
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  width?: number
  height?: number
}

export function ClientImage({
  src,
  alt,
  fallbackSrc,
  layout = "fill",
  objectFit = "cover",
  width,
  height,
}: ClientImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
      width={width}
      height={height}
      onError={handleError}
    />
  )
}

