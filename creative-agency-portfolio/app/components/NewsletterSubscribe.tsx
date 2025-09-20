"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("")

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="section-title">Stay in the loop</h3>
        <p className="mb-8 text-muted-foreground">
          Subscribe to receive updates about new works and articles.
        </p>
        <div className="relative mx-auto max-w-xl">
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-400/40 to-purple-600/20 blur-xl opacity-60" />
          <div className="relative flex items-center gap-3 rounded-2xl border bg-card/80 p-3 shadow-sm backdrop-blur-sm">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11"
            />
            <Button className="h-11 px-5">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
