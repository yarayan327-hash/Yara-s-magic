"use client"

import { useState } from "react"

interface BubbleTextProps {
  text: string
  className?: string
}

export const BubbleText = ({ text, className = "" }: BubbleTextProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <h2
      // Reset the hovered index when the mouse leaves the entire text container.
      onMouseLeave={() => setHoveredIndex(null)}
      className={`text-center ${className}`}
    >
      {text.split("").map((char, idx) => {
        // Calculate the distance from the currently hovered character.
        // This will be 0 for the hovered character, 1 for its immediate neighbors, etc.
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - idx) : null

        // Base classes for all characters, including the transition effect.
        let classes = "transition-all duration-300 ease-in-out cursor-default text-gradient"

        // Apply different styles based on the distance from the hovered character.
        switch (distance) {
          case 0: // The character being hovered over.
            classes += " font-black scale-110"
            break
          case 1: // Immediate neighbors.
            classes += " font-bold scale-105"
            break
          case 2: // Second-degree neighbors.
            classes += " font-semibold scale-102"
            break
          default:
            // No additional classes for characters further away or when not hovering.
            break
        }

        return (
          <span
            key={idx}
            // Update the state with the index of the character being hovered.
            onMouseEnter={() => setHoveredIndex(idx)}
            className={classes}
          >
            {/* Use a non-breaking space for space characters to prevent collapsing */}
            {char === " " ? "\u00A0" : char}
          </span>
        )
      })}
    </h2>
  )
}
