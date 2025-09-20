"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { SparklesText } from "@/components/ui/sparkles-text"
import { GlowCard } from "@/components/ui/spotlight-card"

const features = [
  {
    title: "AI Note",
    description: "Where Every Thought Finds Its Magic",
    icon: "✨",
    glowColor: "purple" as const,
    backgroundClass:
      "bg-gradient-to-br from-purple-50 to-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-purple-200/20 before:via-transparent before:to-purple-100/10 before:opacity-60",
  },
  {
    title: "To-do List",
    description: "Turning Tasks Into Little Spells of Progress",
    icon: "📱",
    glowColor: "blue" as const,
    backgroundClass:
      "bg-gradient-to-br from-blue-50 to-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-blue-200/20 before:via-transparent before:to-blue-100/10 before:opacity-60",
  },
  {
    title: "Progress Management",
    description: "Track the Journey, Witness the Magic",
    icon: "⚡",
    glowColor: "green" as const,
    backgroundClass:
      "bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-emerald-200/20 before:via-transparent before:to-emerald-100/10 before:opacity-60",
  },
  {
    title: "Pomodoro Timer",
    description: "Focus in Time, Create with Magic",
    icon: "🌈",
    glowColor: "orange" as const,
    backgroundClass:
      "bg-gradient-to-br from-orange-50 to-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-orange-200/20 before:via-transparent before:to-orange-100/10 before:opacity-60",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SparklesText
            text="Starting from"
            className="text-3xl font-bold text-foreground"
            colors={{ first: "#9333ea", second: "#c084fc" }}
            sparklesCount={15}
          />
        </div>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div key={index} className="min-w-[300px] m-4">
                <GlowCard
                  glowColor={feature.glowColor}
                  customSize={true}
                  className={`w-full h-[400px] p-8 flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out ${feature.backgroundClass}`}
                >
                  <div className="relative z-10">
                    <div className="mb-4">
                      <img src="/images/book-icon.png" alt="Feature icon" className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="mt-4 relative z-10">
                    <a
                      href="https://www.flowersandsaints.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-primary hover:underline font-medium transition-colors duration-200"
                    >
                      Learn more →
                    </a>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
