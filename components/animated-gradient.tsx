"use client"

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
    </div>
  )
}
