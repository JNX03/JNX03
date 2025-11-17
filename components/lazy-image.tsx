"use client"

import { useState, useEffect, useRef } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface LazyImageProps extends Omit<ImageProps, "onLoad"> {
  containerClassName?: string
  blurAmount?: number
}

export function LazyImage({
  src,
  alt,
  className,
  containerClassName,
  blurAmount = 20,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "50px", // Start loading 50px before the image enters the viewport
      }
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", containerClassName)}>
      {isInView && (
        <Image
          src={src}
          alt={alt}
          className={cn(
            "transition-all duration-500",
            isLoaded ? "blur-0 scale-100" : `blur-${blurAmount} scale-105`,
            className
          )}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  )
}
