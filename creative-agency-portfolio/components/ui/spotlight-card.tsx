"use client"

import React from "react"
import { cn } from "@/lib/utils"

type GlowColor = "purple" | "blue" | "green" | "orange"

const glowMap: Record<GlowColor, string> = {
  purple: "from-purple-400/50 to-purple-600/30",
  blue: "from-blue-400/50 to-blue-600/30",
  green: "from-emerald-400/50 to-emerald-600/30",
  orange: "from-orange-400/50 to-orange-600/30",
}

type GlowCardProps = React.HTMLAttributes<HTMLDivElement> & {
  glowColor?: GlowColor
  customSize?: boolean
}

export function GlowCard({
  glowColor = "purple",
  className,
  children,
  ...props
}: GlowCardProps) {
  return (
    <div className={cn("relative rounded-2xl", className)} {...props}>
      <div
        className={cn(
          "pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br blur-xl opacity-60",
          glowMap[glowColor]
        )}
        aria-hidden
      />
      <div className="relative rounded-2xl border bg-card/80 backdrop-blur-sm shadow-sm">
        {children}
      </div>
    </div>
  )
}
