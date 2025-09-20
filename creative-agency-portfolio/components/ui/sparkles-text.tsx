"use client"

import React from "react"
import { cn } from "@/lib/utils"

type SparklesTextProps = {
  text: string
  className?: string
  colors?: { first: string; second: string }
  sparklesCount?: number
}

export function SparklesText({
  text,
  className,
  colors = { first: "#9333ea", second: "#c084fc" },
}: SparklesTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.first}, ${colors.second})`,
      }}
    >
      {text}
    </span>
  )
}
