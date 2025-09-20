"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-foreground">
          <span className="text-gradient">Yara Studio</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#works" className="text-muted-foreground hover:text-foreground transition-colors">
            Works
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
          <a
            href="https://www.flowersandsaints.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
