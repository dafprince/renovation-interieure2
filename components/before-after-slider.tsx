"use client"

import { useState, useRef, useEffect } from "react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100

    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", () => setIsDragging(false))
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", () => setIsDragging(false))

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseup", () => setIsDragging(false))
        window.removeEventListener("touchmove", handleTouchMove)
        window.removeEventListener("touchend", () => setIsDragging(false))
      }
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <img src={afterImage || "/placeholder.svg"} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image (Clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img
          src={beforeImage || "/placeholder.svg"}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary-foreground cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-primary" />
            <div className="w-0.5 h-4 bg-primary" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-primary/80 text-primary-foreground text-sm font-medium rounded">
        Avant
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-accent/80 text-accent-foreground text-sm font-medium rounded">
        Après
      </div>
    </div>
  )
}
